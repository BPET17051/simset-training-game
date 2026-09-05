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
			// ponytail: bg video is a muted, blurred, scaled-up copy of the same source used as an
			// ambient backdrop instead of plain white margins - upgrade to a real letterbox-fill asset
			// if precise sync with the fg video ever matters (it doesn't for a blurred backdrop).
			return "<div><video class='an-video-bg' muted loop style='position:absolute;left:50%;top:50%;width:320%;height:320%;transform:translate(-50%,-50%);filter:blur(40px) brightness(0.5);object-fit:cover;z-index:0;'/><video class='an-video-fg' style='position:relative;z-index:1;'/></div>";
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

			this.update(true);
		},
		detach: function() {
			if(!this._$div)
				return;

			this._$div.remove();
			this._attached = false;
			this._$div = null;
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
