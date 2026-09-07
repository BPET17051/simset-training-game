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
			// A muted copy fills the viewport behind the fixed animation container. Keeping
			// it outside the clipped DOM overlay lets it cover letterbox space while the
			// later canvas layer remains visible for video-close controls.
			return "<div><video class='an-video-bg' muted loop style='position:fixed;inset:0;width:100vw;height:100vh;filter:blur(40px) brightness(0.5);object-fit:cover;pointer-events:none;'/><video class='an-video-fg' style='position:relative;z-index:1;'/></div>";
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
			this._$bg = this._$div.find('video.an-video-bg');
			this._$bg.detach();
			$("#animation_container").before(this._$bg);

			this.update(true);
		},
		detach: function() {
			if(!this._$div)
				return;

			var foreground = this._$this && this._$this.get(0);
			var background = this._$bg && this._$bg.get(0);
			if(foreground) foreground.pause();
			if(background) background.pause();
			this._$div.remove();
			if(this._$bg) this._$bg.remove();
			this._attached = false;
			this._$div = null;
			this._$bg = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		getAttributes: function() {
			return this._attrs;
		},
		show: function() {
			if(this._$div) this._$div.show();
			if(this._$bg) this._$bg.show();
		},
		hide: function() {
			if(this._$div) this._$div.hide();
			if(this._$bg) this._$bg.hide();
		},
		applyAttributes: function($el, force) {
			this._superApply(arguments);
			if(!this._options["muted"]) {
				$el.removeAttr("muted");
			}
			if(this._$bg && this._options["src"]) {
				if(this._$bg.attr("src") !== this._options["src"]) {
					this._$bg.prop("src", this._options["src"]);
				}
				if(this._options["autoplay"]) {
					var bgEl = this._$bg.get(0);
					var playPromise = bgEl.play();
					if(playPromise && playPromise.catch) playPromise.catch(function(){});
				}
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
