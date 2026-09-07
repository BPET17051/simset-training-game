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
			// The viewport copy uses compositor-only opacity/transform motion. A live
			// full-screen blur repaints every video frame and causes visible stutter on
			// mobile GPUs, so the ambient copy is darkened with opacity instead.
			return "<div style='opacity:0;transition:opacity 180ms ease-out;'><video class='an-video-bg' muted preload='auto' style='position:fixed;inset:0;width:100vw;height:100vh;object-fit:cover;pointer-events:none;opacity:0;transform:scale(1.04) translateZ(0);transition:opacity 180ms ease-out,transform 240ms cubic-bezier(0.22,1,0.36,1);'/><video class='an-video-fg' style='position:relative;z-index:1;opacity:0;transform:scale(0.985) translateZ(0);transition:opacity 180ms ease-out,transform 220ms cubic-bezier(0.22,1,0.36,1);'/></div>";
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
			this._$bg.on("play.anVideo", function() { this.pause(); });
			$("#animation_container").before(this._$bg);

			this.update(true);
			this.revealWhenReady();
		},
		revealWhenReady: function() {
			var self = this;
			var foreground = this._$this && this._$this.get(0);
			var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			var reveal = function() {
				if(self._revealed || !self._attached) return;
				self._revealed = true;
				if(reducedMotion) {
					self._$div.css({ opacity: 1, transition: "none" });
					self._$bg.css({ opacity: 0.55, transform: "translateZ(0)", transition: "none" });
					self._$this.css({ opacity: 1, transform: "translateZ(0)", transition: "none" });
					return;
				}
				self._revealFrame = window.requestAnimationFrame(function() {
					self._revealFrame = window.requestAnimationFrame(function() {
						if(!self._attached) return;
						self._$div.css({ opacity: 1 });
						self._$bg.css({ opacity: 0.55, transform: "translateZ(0)" });
						self._$this.css({ opacity: 1, transform: "translateZ(0)" });
					});
				});
			};
			if(foreground && foreground.readyState >= 2) reveal();
			else if(this._$this) this._$this.one("loadeddata.anVideo canplay.anVideo", reveal);
		},
		detach: function() {
			if(!this._$div)
				return;

			if(this._revealFrame) window.cancelAnimationFrame(this._revealFrame);
			if(this._$this) this._$this.off(".anVideo");
			if(this._$bg) this._$bg.off(".anVideo");
			var foreground = this._$this && this._$this.get(0);
			var background = this._$bg && this._$bg.get(0);
			if(foreground) foreground.pause();
			if(background) background.pause();
			this._$div.remove();
			if(this._$bg) this._$bg.remove();
			this._attached = false;
			this._revealed = false;
			this._revealFrame = null;
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
				// Keep the ambient copy on its first decoded frame. Running two live
				// decoders for the same clip adds avoidable work on mobile devices.
				this._$bg.get(0).pause();
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
