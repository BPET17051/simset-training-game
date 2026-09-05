(function (scope) {
    // Opaque room area inside ERroomcrop; transparent atlas gutters are excluded.
    var ROOM = { x: 96, y: 0, width: 1218, height: 768 };

    function layout(width, height, mission) {
        var fit = Math.min(width / 1280, height / 720);
        var scale = mission ? fit : Math.min(Math.max(width / 1280, height / 720), fit * 1.06);
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
        var originalCanvasColor = canvas.style.backgroundColor;
        var originalContainerColor = container.style.backgroundColor;
        var previousFrame = -1;

        function resize() {
            var mission = root.currentFrame === 4;
            var width = window.innerWidth, height = window.innerHeight;
            var ratio = window.devicePixelRatio || 1;
            var size = layout(width, height, mission);
            panel.mask = mission ? panelMask : originalMask;
            background.style.display = mission ? 'block' : 'none';
            canvas.style.backgroundColor = mission ? 'transparent' : originalCanvasColor;
            container.style.backgroundColor = mission ? 'transparent' : originalContainerColor;
            canvas.width = Math.round(1280 * ratio * size.scale);
            canvas.height = Math.round(720 * ratio * size.scale);
            options.containers.forEach(function (element) {
                element.style.width = 1280 * size.scale + 'px';
                element.style.height = 720 * size.scale + 'px';
            });
            stage.scaleX = stage.scaleY = ratio * size.scale;
            if (mission) {
                background.width = Math.round(width * ratio);
                background.height = Math.round(height * ratio);
                context.setTransform(ratio, 0, 0, ratio, 0, 0);
                context.drawImage(options.roomImage, ROOM.x, ROOM.y, ROOM.width, ROOM.height,
                    size.roomLeft, size.roomTop, size.roomWidth, size.roomHeight);
            }
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
