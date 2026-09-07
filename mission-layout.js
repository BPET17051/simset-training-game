(function (scope) {
    // Opaque room area inside ERroomcrop; transparent atlas gutters are excluded.
    var ROOM = { x: 96, y: 0, width: 1218, height: 768 };

    function layout(width, height) {
        var fit = Math.min(width / 1280, height / 720);
        var scale = fit;
        var cover = Math.max(width / ROOM.width, height / ROOM.height);
        return {
            scale: scale, left: (width - 1280 * scale) / 2, top: (height - 720 * scale) / 2,
            roomWidth: ROOM.width * cover, roomHeight: ROOM.height * cover,
            roomLeft: (width - ROOM.width * cover) / 2, roomTop: (height - ROOM.height * cover) / 2
        };
    }

    function install(options) {
        var root = options.root, stage = options.stage;
        var canvas = options.containers[0], container = options.containers[1];
        var background = document.getElementById('mission_background');
        var context = background.getContext('2d');
        var panel = root.instance_26;
        var originalMask = panel.mask;
        var panelMask = new createjs.Shape();
        panelMask.graphics.beginFill('#000').drawRoundRect(189, 164, 904, 375, 38);
        var surface = document.createElement('canvas');
        surface.width = 1280; surface.height = 720;
        var art = surface.getContext('2d');
        // Baked slides stay aligned with their controls. Only background pixels at
        // their outer edges continue into the extra viewport space, never UI text.
        var slides = { 2: 'instance_5', 10: 'instance_28', 13: 'instance_9',
            15: 'instance_11', 16: 'instance_12', 17: 'instance_14',
            19: 'instance_15', 21: 'instance_16', 22: 'instance_18',
            23: 'instance_21', 24: 'instance_14' };
        var previousFrame = -1;

        function drawSprite(sprite) {
            var frame = sprite.spriteSheet.getFrame(sprite.currentFrame);
            var rect = frame.rect;
            art.drawImage(frame.image, rect.x, rect.y, rect.width, rect.height,
                sprite.x, sprite.y, rect.width * sprite.scaleX, rect.height * sprite.scaleY);
        }

        function drawExtended(size, width, height) {
            var w = 1280 * size.scale, h = 720 * size.scale;
            context.drawImage(surface, size.left, size.top, w, h);
            // Edge continuation is unblurred and meets the central image exactly.
            if (size.left > 0) {
                context.drawImage(surface, 0, 0, 1, 720, 0, size.top, size.left + 0.5, h);
                context.drawImage(surface, 1279, 0, 1, 720,
                    size.left + w - 0.5, size.top, width - size.left - w + 0.5, h);
            }
            if (size.top > 0) {
                context.drawImage(surface, 0, 0, 1280, 1, size.left, 0, w, size.top + 0.5);
                context.drawImage(surface, 0, 719, 1280, 1,
                    size.left, size.top + h - 0.5, w, height - size.top - h + 0.5);
            }
        }

        function drawBackground(size, width, height) {
            var current = root.currentFrame;
            context.fillStyle = '#fff';
            context.fillRect(0, 0, width, height);
            if (current === 4 || (current >= 6 && current <= 9) || current === 11) {
                context.drawImage(options.roomImage, ROOM.x, ROOM.y, ROOM.width, ROOM.height,
                    size.roomLeft, size.roomTop, size.roomWidth, size.roomHeight);
            } else if (current === 5) {
                // Continue the room's light floor around the playable scene, using
                // its own scale so people and equipment keep their exact hit areas.
                art.fillStyle = '#eee'; art.fillRect(0, 0, 1280, 720);
                drawSprite(root.instance_27);
                // The atlas has transparent gutters: fill them with room-floor art.
                art.globalCompositeOperation = 'destination-over';
                art.drawImage(options.roomImage, ROOM.x, 0, ROOM.width, ROOM.height, 0, 0, 1280, 720);
                art.globalCompositeOperation = 'source-over';
                drawExtended(size, width, height);
            } else if (slides[current]) {
                art.fillStyle = '#fff'; art.fillRect(0, 0, 1280, 720);
                drawSprite(root[slides[current]]);
                drawExtended(size, width, height);
            }
        }

        function resize() {
            var mission = root.currentFrame === 4;
            var width = window.innerWidth, height = window.innerHeight;
            var ratio = window.devicePixelRatio || 1;
            var size = layout(width, height);
            panel.mask = mission ? panelMask : originalMask;
            background.style.display = 'block';
            canvas.style.backgroundColor = container.style.backgroundColor = 'transparent';
            canvas.width = Math.round(1280 * ratio * size.scale);
            canvas.height = Math.round(720 * ratio * size.scale);
            options.containers.forEach(function (element) {
                element.style.width = 1280 * size.scale + 'px';
                element.style.height = 720 * size.scale + 'px';
            });
            stage.scaleX = stage.scaleY = ratio * size.scale;
            background.width = Math.round(width * ratio);
            background.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            drawBackground(size, width, height);
            previousFrame = root.currentFrame;
        }

        // Observe after timeline updates, before paint, so scene switches never flash
        // the old opaque canvas. Do not reparent timeline children or change hit areas.
        stage.on('drawstart', function () {
            if (previousFrame !== root.currentFrame) resize();
        });
        window.addEventListener('resize', function () {
            resize();
            var tickOnUpdate = stage.tickOnUpdate;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = tickOnUpdate;
        });
        resize();
    }

    scope.SimsetMissionLayout = { layout: layout, install: install };
    if (typeof module !== 'undefined') module.exports = scope.SimsetMissionLayout;
})(typeof window !== 'undefined' ? window : module.exports);
