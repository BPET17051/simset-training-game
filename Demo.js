(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Demo_atlas_1", frames: [[766,310,376,182],[0,310,764,153],[1102,0,932,153],[-766545292,2,-1040187284,-788529043],[1018,155,932,153],[0,155,1016,153],[0,0,1100,153],[1468,310,190,182],[1952,241,52,46],[1952,155,67,84],[2021,155,24,27],[1144,310,160,320],[1306,310,160,320]]},
		{name:"Demo_atlas_2", frames: [[0,1825,1184,153],[0,1670,1268,153],[0,1444,1801,224],[1282,0,565,563],[0,0,1280,720],[0,722,1280,720],[-766545292,2,-1040187284,-788529043]]},
		{name:"Demo_atlas_3", frames: [[0,1256,1408,768],[0,0,1254,1254]]},
		{name:"Demo_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"Demo_atlas_5", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.computer1 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ERroom = function() {
	this.initialize(ss["Demo_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.esc_btn = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Info = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mission1 = function() {
	this.initialize(ss["Demo_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.monitor1 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Next_btn = function() {
	this.initialize(ss["Demo_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.paper1 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.patient1 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.patient2 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.start1 = function() {
	this.initialize(ss["Demo_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.start2 = function() {
	this.initialize(ss["Demo_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.yes_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-94.1,-45.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-45.5,188,91);


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.patient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.patient1();
	this.instance.setTransform(-24,-56,0.3375,0.3375);

	this.instance_1 = new lib.patient2();
	this.instance_1.setTransform(-24,-56,0.3375,0.3375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-56,54,108);


(lib.paper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.paper1();
	this.instance.setTransform(-12,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.9997,scaleY:2.0015,x:-15,y:-36},0).wait(1).to({scaleX:1,scaleY:1,x:-12,y:-13.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-36,48,54.1);


(lib.next_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.Next_btn();
	this.instance.setTransform(-75,-75,0.1196,0.1196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1292,scaleY:0.1292,x:-78,y:-78},0).wait(1).to({scaleX:0.1156,scaleY:0.1156,x:-75,y:-75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-78,162,162);


(lib.monitor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.monitor1();
	this.instance.setTransform(-33.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2834,scaleY:1.2832,x:-41,y:-54},0).wait(1).to({scaleX:1,scaleY:1,x:-33.5,y:-42},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-54,86,107.8);


(lib.esc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.esc_btn();
	this.instance.setTransform(-32.5,-32.35,0.1151,0.115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.3,65,64.69999999999999);


(lib.computer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.computer1();
	this.instance.setTransform(-26,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.4035,scaleY:1.403,x:-36,y:-36},0).wait(1).to({scaleX:1,scaleY:1,x:-26,y:-23},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,73,64.6);


(lib.press_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// BTN
	this.instance = new lib.start1();
	this.instance.setTransform(-960,-540);

	this.instance_1 = new lib.start2();
	this.instance_1.setTransform(-962,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-962,y:-540}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,x:-934,y:-519}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962,-540,1922,1080);


// stage content:
(lib.Demo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12];
	// timeline functions:
	this.frame_0 = function() {
		playSound("Audio_intro");
		this.stop();
		
		// เมื่อกดปุ่มเริ่ม
		this.yes_btn.on("click", function() {
		    
			// 1. ต้องสั่งเล่นเสียงก่อนเป็นอันดับแรก!! (เพื่อให้จับ User Activation ทัน)
		    createjs.Sound.play("Audio_intro");
		    
		    // 2. เล่นเสียงเสร็จปุ๊บ ค่อยสั่งย้ายหัวอ่านไปเฟรม 2
		    this.gotoAndStop(1); 
		    
		}.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		
		// สมมติว่าวิดีโอของคุณยาว 10 วินาที 
		// ให้เปลี่ยนเลข 10000 เป็นเวลาของคุณ (สูตรคือ: จำนวนวินาที x 1000)
		// เช่น ถ้ายาว 5 วินาที ให้ใส่ 5000 / ถ้ายาว 15 วินาที ให้ใส่ 15000
		var videoDuration = 14500; 
		
		setTimeout(function() {
		    
		    console.log("จับเวลาครบตามความยาววิดีโอแล้ว ย้ายหน้าทันที!");
		    
		    // ข้ามไปเฟรมที่ 4 (ซึ่งในโค้ดใช้เลข index คือ 3)
		    root.gotoAndStop(2); 
		    
		}, videoDuration);
	}
	this.frame_2 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.press_start.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.press_start.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.press_start.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		this.press_start.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(3); // ไปเฟรมที่ 4 ของ Timeline หลัก
		    
		    // หรือถ้าจะสั่งเล่นเสียง
		    // createjs.Sound.play("long_audio");
		});
	}
	this.frame_3 = function() {
		// 1. สั่งให้หัวอ่านหยุดรอตรงนี้ เพื่อให้คลิปวิดีโอในเฟรมนี้ได้เล่นก่อน
		this.stop(); 
		var root = this;
		
		// 2. ตั้งเวลาความยาวของคลิปวิดีโอ (5 วินาที = 5000 มิลลิวินาที)
		var videoDuration2 = 5000; 
		
		setTimeout(function() {
		    
		    console.log("คลิปเฟรม 4 เล่นครบ 5 วินาทีแล้ว ย้ายไปเฟรม 5 ทันที!");
		    
		    // 3. สั่งข้ามไปเฟรมที่ 5 
		    // (ในโปรแกรมคือเฟรม 5 แต่โค้ดต้องใช้เลข index คือ 4 เพราะเริ่มนับจาก 0)
		    root.gotoAndStop(4); 
		    
		}, videoDuration2);
	}
	this.frame_4 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.next_btn.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		this.next_btn.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(5); // ไปเฟรมที่ 4 ของ Timeline หลัก
		    
		    // หรือถ้าจะสั่งเล่นเสียง
		    // createjs.Sound.play("long_audio");
		});
	}
	this.frame_5 = function() {
		this.stop();
		
		// ฟังก์ชันพิเศษสำหรับเปิดระบบปุ่มอย่างปลอดภัย (ถ้าหาไม่เจอจะไม่ทำให้ปุ่มอื่นล่ม)
		function setupButton(btn, frameIndex) {
		    if (btn) {
		        btn.cursor = "pointer";
		        btn.on("mouseover", function() { this.gotoAndStop(1); });
		        btn.on("mouseout", function() { this.gotoAndStop(0); });
		        btn.on("click", function() {
		            this.gotoAndStop(frameIndex);
		        }.bind(this));
		    } else {
		        console.log("โปรแกรมหาปุ่มไม่เจอชิ้นหนึ่ง!");
		    }
		}
		
		// เรียกใช้งานทีละปุ่ม (สลับเลข index ให้เรียบร้อยแล้ว)
		setupButton.call(this, this.patient_btn, 6);  // ไปเฟรม 7
		setupButton.call(this, this.fam_btn, 7);      // ไปเฟรม 8
		setupButton.call(this, this.nurse_btn, 8);    // ไปเฟรม 9
		setupButton.call(this, this.com_btn, 9);      // ไปเฟรม 10
		setupButton.call(this, this.paper_btn, 10);   // ไปเฟรม 11
		setupButton.call(this, this.monitor_btn, 11); // ไปเฟรม 12
		setupButton.call(this, this.next_btn, 12);    // ไปเฟรม 13
	}
	this.frame_6 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_7 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_8 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_9 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_10 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_11 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_12 = function() {
		// หยุดหน้าจอหลักในเฟรมนั้นๆ ไว้ก่อน
		this.stop();
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

	// Button
	this.press_start = new lib.press_start();
	this.press_start.name = "press_start";
	this.press_start.setTransform(647.9,636.9,1,1,0,0,0,0,139.8);

	this.next_btn = new lib.next_btn();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(1196,645);

	this.monitor_btn = new lib.monitor();
	this.monitor_btn.name = "monitor_btn";
	this.monitor_btn.setTransform(573.5,106);

	this.paper_btn = new lib.paper();
	this.paper_btn.name = "paper_btn";
	this.paper_btn.setTransform(384,391.5);

	this.com_btn = new lib.computer();
	this.com_btn.name = "com_btn";
	this.com_btn.setTransform(339,388);

	this.patient_btn = new lib.patient();
	this.patient_btn.name = "patient_btn";
	this.patient_btn.setTransform(658.5,147.5);

	this.esc_btn = new lib.esc();
	this.esc_btn.name = "esc_btn";
	this.esc_btn.setTransform(1123.5,117.35);
	this.esc_btn._off = true;
	new cjs.ButtonHelper(this.esc_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.press_start}]},2).to({state:[]},1).to({state:[{t:this.next_btn,p:{x:1196,y:645}}]},1).to({state:[{t:this.patient_btn},{t:this.com_btn},{t:this.paper_btn},{t:this.monitor_btn},{t:this.next_btn,p:{x:1197.5,y:646.2}}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.esc_btn).wait(6).to({_off:false},0).wait(7));

	// Graphics
	this.yes_btn = new lib.yes_btn();
	this.yes_btn.name = "yes_btn";
	this.yes_btn.setTransform(455.55,409.45);
	new cjs.ButtonHelper(this.yes_btn, 0, 1, 1);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(813.3,363.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(201.65,188.95,0.5,0.5);

	this.intro_video = new lib.an_Video({'id': 'intro_video', 'src':'videos/All_intro_cut.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video.name = "intro_video";
	this.intro_video.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_2 = new lib.Info();

	this.intro_video2 = new lib.an_Video({'id': 'intro_video2', 'src':'videos/into_M1.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video2.name = "intro_video2";
	this.intro_video2.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_3 = new lib.Mission1();

	this.instance_4 = new lib.ERroom();
	this.instance_4.setTransform(-64,-24);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(368.95,310.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(385.25,321.45,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(406.25,321.45,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_6();
	this.instance_8.setTransform(322.25,321.45,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(406.25,321.45,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_8();
	this.instance_10.setTransform(343.25,321.45,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_9();
	this.instance_11.setTransform(447.9,320.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.yes_btn}]}).to({state:[{t:this.intro_video}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.intro_video2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(327.9,317.1,1280,719.9999999999999);
// library properties:
lib.properties = {
	id: '212CE69E997A435A93AF99233559C799',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Demo_atlas_1.png?1778913630973", id:"Demo_atlas_1"},
		{src:"images/Demo_atlas_2.png?1778913630974", id:"Demo_atlas_2"},
		{src:"images/Demo_atlas_3.png?1778913630974", id:"Demo_atlas_3"},
		{src:"images/Demo_atlas_4.png?1778913630974", id:"Demo_atlas_4"},
		{src:"images/Demo_atlas_5.png?1778913630974", id:"Demo_atlas_5"},
		{src:"sounds/Audio_intro.mp3?1778913630987", id:"Audio_intro"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1778913630987", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1778913630987", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1778913630987", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['212CE69E997A435A93AF99233559C799'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;