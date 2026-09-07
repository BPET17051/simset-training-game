(function($) {

    $.anwidget("an.Video", {
        options: {
            left: 0,
            top: 0,
            width: 400,
            height: 300,
            source: "",
            autoplay: true,
			position: "absolute"
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "src", "controls", "autoplay", "loop", "class", "muted", "poster"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "video" + _widgetID++ });
		},
		getCreateString: function() {
			// ponytail: no ambient blurred backdrop copy - it fetched the same (often
			// multi-MB) source a second time in parallel with the real video, which is
			// what made playback feel like it was loading forever. preload='auto' lets
			// the single video start buffering the moment the popup attaches.
			// object-fit:contain because the clips are NOT all the same aspect ratio -
			// computer.mp4/refer.mp4 are 720x1280 portrait while every other clip is
			// 16:9 landscape (ffprobe-verified). Without this the box's fixed CSS
			// width/height stretched the portrait clips to fill it, distorting them and
			// making the popup size look wrong/jerky compared to the landscape clips.
			return "<div><video class='an-video-fg' preload='auto' style='object-fit:contain;'/><div class='an-video-error' role='alert' style='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:2;padding:24px;box-sizing:border-box;background:rgba(0,0,0,0.78);color:#fff;font:600 18px/1.5 Google Sans,Tahoma,sans-serif;text-align:center;pointer-events:none;'>ไม่สามารถเล่นวิดีโอได้ กรุณาปิดหน้าต่างแล้วลองใหม่อีกครั้ง</div></div>";
		},
		getProperties: function() {
			return this._props;
		},
		attach: function() {
			if(this._attached)
				return;

			this._superApply(arguments);
			this._$div = $(this._element);
			this._$this = this._$div.find('video.an-video-fg');
			this._$error = this._$div.find('.an-video-error');
			var self = this;
			this._$this.on("error.anVideo", function() {
				self._$error.css("display", "flex");
			});

			this.update(true);
		},
		detach: function() {
			if(!this._$div)
				return;

			if(this._$this) this._$this.off(".anVideo");
			var foreground = this._$this && this._$this.get(0);
			if(foreground) foreground.pause();
			this._$div.remove();
			this._attached = false;
			this._$div = null;
			this._$error = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		getAttributes: function() {
			return this._attrs;
		},
		show: function() {
			if(this._$div) this._$div.show();
		},
		hide: function() {
			if(this._$div) this._$div.hide();
		},
		applyAttributes: function($el, force) {
			this._superApply(arguments);
			if(!this._options["muted"]) {
				$el.removeAttr("muted");
			}
			// The `autoplay` attribute alone never plays a non-muted video (browser
			// autoplay policy) - only an explicit play() call counts, and this one runs
			// synchronously inside the button click that opened the popup, so it still
			// carries the user-gesture activation the policy requires.
			if(this._options["autoplay"] && $el.length) {
				var playPromise = $el.get(0).play();
				if(playPromise && playPromise.catch) playPromise.catch(function(){});
			}
		},
		update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
			this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));
			}
		}
    });
})(jQuery);
