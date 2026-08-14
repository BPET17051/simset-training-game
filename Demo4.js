(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Demo4_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_5", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_6", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_7", frames: [[0,0,1920,1080]]},
		{name:"Demo4_atlas_8", frames: [[876,0,876,1795],[0,0,874,1800]]},
		{name:"Demo4_atlas_9", frames: [[0,0,876,1795],[878,0,876,1795]]},
		{name:"Demo4_atlas_10", frames: [[0,0,1408,768],[0,770,1280,720]]},
		{name:"Demo4_atlas_11", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo4_atlas_12", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo4_atlas_13", frames: [[0,722,1326,351],[0,1127,1920,128],[0,1257,1920,128],[0,1387,1920,128],[0,1517,1920,128],[0,1647,1920,128],[0,1777,1920,128],[1328,0,565,563],[1328,565,560,560],[0,0,1280,720],[0,1907,1920,128]]},
		{name:"Demo4_atlas_14", frames: [[0,130,1591,115],[1917,130,96,182],[0,247,190,182],[1991,0,52,46],[1922,0,67,84],[1991,48,24,27],[1593,130,160,320],[1755,130,160,320],[0,0,1920,128]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2220,110);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2 = function() {
	this.initialize(img.Artboard2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1356,6739);


(lib.back1 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back2 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.choice2 = function() {
	this.initialize(ss["Demo4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.computer1 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.con1 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.con2 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.con_m1 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.con_m2 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.down = function() {
	this.initialize(ss["Demo4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ERroomcrop = function() {
	this.initialize(ss["Demo4_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.esc_btn = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fam1 = function() {
	this.initialize(ss["Demo4_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fam2 = function() {
	this.initialize(ss["Demo4_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.info = function() {
	this.initialize(ss["Demo4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Info = function() {
	this.initialize(ss["Demo4_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.info_btn = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.M1 = function() {
	this.initialize(ss["Demo4_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.M21 = function() {
	this.initialize(ss["Demo4_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.M23 = function() {
	this.initialize(ss["Demo4_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.M2 = function() {
	this.initialize(ss["Demo4_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.M2_info = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.monitor1 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nurse1 = function() {
	this.initialize(ss["Demo4_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nurse2 = function() {
	this.initialize(ss["Demo4_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.paper1 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.patient1 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.patient2 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.refer_bg = function() {
	this.initialize(ss["Demo4_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.startM1 = function() {
	this.initialize(ss["Demo4_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.startM2 = function() {
	this.initialize(ss["Demo4_atlas_14"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.start1 = function() {
	this.initialize(ss["Demo4_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.start2 = function() {
	this.initialize(ss["Demo4_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.submit_btn = function() {
	this.initialize(ss["Demo4_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yes = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,204,0.008)").s().p("A0RK8IAA13MAojAAAIAAV3g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yes, new cjs.Rectangle(-129.7,-70,259.5,140.1), null);


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



(lib.submit_btn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.submit_btn();
	this.instance.setTransform(-158,-88.85,0.1646,0.1646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-88.8,316,177.7);


(lib.start_m = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.startM1();
	this.instance.setTransform(-310,-20.65,0.3229,0.3226);

	this.instance_1 = new lib.startM2();
	this.instance_1.setTransform(-310,-21,0.3229,0.323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-20.65}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:-21}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-21,620,41.7);


(lib.scroll_bar = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgmETQgQgQAAgXIAAnXQAAgXAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAXIAAHXQAAAXgQAQQgQAQgXAAQgWAAgQgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scroll_bar, new cjs.Rectangle(-5.5,-29.1,11,58.2), null);


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


(lib.nurse_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nurse1();
	this.instance.setTransform(-45,-92.15,0.1027,0.1027);

	this.instance_1 = new lib.nurse2();
	this.instance_1.setTransform(-45,-92,0.1027,0.1027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-92.1,90,184.5);


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


(lib.info_new = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Artboard2();
	this.instance.setTransform(0,0,0.5501,0.5501);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info_new, new cjs.Rectangle(0,0,746,3707.4), null);


(lib.info_btn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.info_btn();
	this.instance.setTransform(-41.5,-41.5,0.1482,0.1482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83,83);


(lib.fam_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fam1();
	this.instance.setTransform(-38,-77.8,0.0867,0.0867);

	this.instance_1 = new lib.fam2();
	this.instance_1.setTransform(-41,-76,0.0892,0.0892);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-77.8,79,162.39999999999998);


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


(lib._continue = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con1();
	this.instance.setTransform(-310,-20.65,0.3229,0.3227);

	this.instance_1 = new lib.con2();
	this.instance_1.setTransform(-310,-21,0.3229,0.323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-20.65}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:-21}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-21,620,41.7);


(lib.con3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con_m1();
	this.instance.setTransform(-330.5,-22,0.3443,0.344);

	this.instance_1 = new lib.con_m2();
	this.instance_1.setTransform(-331,-22,0.3443,0.3441);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331,-22,661.5,44.1);


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


(lib.back = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.back1();
	this.instance.setTransform(-310,-20.65,0.3229,0.323);

	this.instance_1 = new lib.back2();
	this.instance_1.setTransform(-310,-21,0.3229,0.323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-21,620,41.7);


(lib.Mc_Choice_Template = function(mode,startPosition,loop,reversed) {
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
		// บังคับให้ข้อความทั้งหมดบนสเตจ "โปร่งใสต่อเมาส์" นิ้วจะทะลุไปโดนปุ่ม choice ด้านหลังได้ชัวร์
		for (var i = 0; i < root.numChildren; i++) {
		    var child = root.getChildAt(i);
		    if (child && child.text !== undefined) {
		        child.mouseEnabled = false;
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.008)").s().p("Eg1NAIhIAAxBMBqbAAAIAARBg");
	this.shape.setTransform(-24.15,-81.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.008)").s().p("EhBMALTIAA2lMCCYAAAIAAWlg");
	this.shape_1.setTransform(16.3,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},2).wait(1));

	// box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AlIlHIKQAAIAAKQIqQAAg");
	this.shape_2.setTransform(-335.65,-79.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(10,1,1).p("AkSEUIIlon");
	this.shape_3.setTransform(-336.5,-79.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00CC00").ss(5,1,1).p("AlIlHIKQAAIAAKQIqQAAg");
	this.shape_4.setTransform(-335.65,-79.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00CC00").ss(10,1,1).p("AkSEUIIlon");
	this.shape_5.setTransform(-336.5,-79.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC0000").ss(5,1,1).p("AlIlHIKQAAIAAKQIqQAAg");
	this.shape_6.setTransform(-335.65,-79.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC0000").ss(10,1,1).p("AkZEUIEZkZIkMkNAEaEUIkakZIEMkO");
	this.shape_7.setTransform(-335.8,-79.45);

	this.info_btn = new lib.info_btn_1();
	this.info_btn.name = "info_btn";
	this.info_btn.setTransform(-337.8,-75.9,0.9638,0.9638,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.info_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.info_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400.9,-135.8,834.5,150.4);


// stage content:
(lib.Demo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
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
		this.next_btn5.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn5.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn5.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		this.next_btn5.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(5); // ไปเฟรมที่ 6 ของ Timeline หลัก
		    
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
		setupButton.call(this, this.next_btn6, 12);    // ไปเฟรม 13
	}
	this.frame_6 = function() {
		this.stop();
		var root = this;
		
		// ⏱️ ตั้งเวลาให้วิดีโอเล่นแค่ 5 วินาที (5000 มิลลิวินาที) แล้วสั่งหยุดนิ่งอยู่หน้านี้
		var videoDuration = 24000; 
		
		// สั่งให้วิดีโอเริ่มเล่น
		if (root.patient) {
		    root.patient.play();
		}
		
		setTimeout(function() {
		    console.log("เล่นวิดีโอครบ 5 วินาทีแล้ว สั่งหยุดนิ่งอยู่หน้านี้!");
		    
		    // 🎥 พอครบ 5 วินาที สั่งให้วิดีโอหยุดกึก (Pause) อยู่ที่เฟรมนั้นทันที ไม่ต้องสั่งย้ายหน้าหนีไปไหนแล้วครับ
		    if (root.patient) {
		        root.patient.pause(); 
		    }
		    
		}, videoDuration);
		
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
		this.stop();
		var root = this;
		
		// ⏱️ ตั้งเวลาให้วิดีโอเล่นแค่ 5 วินาที (5000 มิลลิวินาที) แล้วสั่งหยุดนิ่งอยู่หน้านี้
		var videoDuration = 5000; 
		
		// สั่งให้วิดีโอเริ่มเล่น
		if (root.computer) {
		    root.computer.play();
		}
		
		setTimeout(function() {
		    console.log("เล่นวิดีโอครบ 5 วินาทีแล้ว สั่งหยุดนิ่งอยู่หน้านี้!");
		    
		    // 🎥 พอครบ 5 วินาที สั่งให้วิดีโอหยุดกึก (Pause) อยู่ที่เฟรมนั้นทันที ไม่ต้องสั่งย้ายหน้าหนีไปไหนแล้วครับ
		    if (root.computer) {
		        root.computer.pause(); 
		    }
		    
		}, videoDuration);
		
		// ==========================================
		// ❌ ปุ่ม esc_btn (กดเพื่อปิดป๊อปอัปแล้วย้อนกลับไปเฟรม 6)
		// ==========================================
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn.on("click", function() {
		    this.gotoAndStop(5); 
		}.bind(this));
	}
	this.frame_10 = function() {
		this.stop();
		var root = this;
		
		// ⏱️ ตั้งเวลาให้วิดีโอเล่นแค่ 5 วินาที (5000 มิลลิวินาที) แล้วสั่งหยุดนิ่งอยู่หน้านี้
		var videoDuration = 5000; 
		
		// สั่งให้วิดีโอเริ่มเล่น
		if (root.refer) {
		    root.refer.play();
		}
		
		setTimeout(function() {
		    console.log("เล่นวิดีโอครบ 5 วินาทีแล้ว สั่งหยุดนิ่งอยู่หน้านี้!");
		    
		    // 🎥 พอครบ 5 วินาที สั่งให้วิดีโอหยุดกึก (Pause) อยู่ที่เฟรมนั้นทันที ไม่ต้องสั่งย้ายหน้าหนีไปไหนแล้วครับ
		    if (root.refer) {
		        root.refer.pause(); 
		    }
		    
		}, videoDuration);
		
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
		// 1. สั่งให้หัวอ่านหยุดรอตรงนี้ เพื่อให้คลิปวิดีโอในเฟรมนี้ได้เล่นก่อน
		this.stop(); 
		var root = this;
		
		// 2. ตั้งเวลาความยาวของคลิปวิดีโอ (5 วินาที = 5000 มิลลิวินาที)
		var videoDuration3 = 5000; 
		
		setTimeout(function() {
		    
		    console.log("คลิปเฟรม 4 เล่นครบ 5 วินาทีแล้ว ย้ายไปเฟรม 5 ทันที!");
		    
		    // 3. สั่งข้ามไปเฟรมที่ 5 
		    // (ในโปรแกรมคือเฟรม 5 แต่โค้ดต้องใช้เลข index คือ 4 เพราะเริ่มนับจาก 0)
		    root.gotoAndStop(13); 
		    
		}, videoDuration3);
	}
	this.frame_13 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.next_btn14.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn14.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn14.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.next_btn14.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(14); // ไปเฟรมที่ 4 ของ Timeline หลัก
		});
	}
	this.frame_14 = function() {
		// 1. สั่งให้หัวอ่านหยุดรอตรงนี้ เพื่อให้คลิปวิดีโอในเฟรมนี้ได้เล่นก่อน
		this.stop(); 
		var root = this;
		
		// 2. ตั้งเวลาความยาวของคลิปวิดีโอ (5 วินาที = 5000 มิลลิวินาที)
		var videoDuration4 = 4000; 
		
		setTimeout(function() {
		    
		    console.log("คลิปเฟรม 4 เล่นครบ 5 วินาทีแล้ว ย้ายไปเฟรม 5 ทันที!");
		    
		    // 3. สั่งข้ามไปเฟรมที่ 5 
		    // (ในโปรแกรมคือเฟรม 5 แต่โค้ดต้องใช้เลข index คือ 4 เพราะเริ่มนับจาก 0)
		    root.gotoAndStop(15); 
		    
		}, videoDuration4);
	}
	this.frame_15 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.next_btn16.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn16.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn16.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.next_btn16.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(16);
		});
		
		// ==========================================
		// 2. โค้ดควบคุมปุ่ม back_btn15 (ไปเฟรมที่ 5)
		// ==========================================
		this.back_btn16.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.back_btn16.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.back_btn16.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.back_btn16.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(4);
		});
	}
	this.frame_16 = function() {
		this.stop();
		
		var root = this;
		
		// 1. ตั้งค่าเฉลยข้อที่ถูกต้อง (มีทั้งหมด 9 ข้อ)
		var correctAnswers = [1, 2, 13, 6, 8, 10, 16, 14, 12];
		var isSubmitted = false;
		
		// 🛑 จังหวะเริ่มเกม: ซ่อนปุ่ม [!] (info_btn) และปุ่มถัดไป (next_btn17) ไว้ก่อน
		if (root.info_btn) {
		    root.info_btn.visible = false;
		}
		
		if (root.next_btn17) {
		    root.next_btn17.visible = false;
		    root.next_btn17.alpha = 0;           
		    root.next_btn17.mouseEnabled = false;  
		}
		
		// 🏷️ เคลียร์หน้าจอ: ถ้ามีกล่องโชว์คะแนน ให้ซ่อนคำว่าคะแนนไว้ก่อนตอนเริ่มเกม
		if (root.score_txt) {
		    root.score_txt.text = ""; 
		}
		
		// ตั้งค่าปุ่มส่งคำตอบให้พร้อมกด
		if (root.submit_btn17) {
		    root.submit_btn17.alpha = 1.0;
		    root.submit_btn17.enabled = true;
		    root.submit_btn17.cursor = "pointer";
		}
		
		// 🧮 ฟังก์ชันนับจำนวนข้อที่เลือกอยู่ ณ ตอนนี้
		function getSelectedCount() {
		    var count = 0;
		    for (var i = 1; i <= 20; i++) {
		        if (root["choice_" + i] && root["choice_" + i].isSelected) {
		            count++;
		        }
		    }
		    return count;
		}
		
		// 2. ฟังก์ชันควบคุมปุ่ม Choice (เพิ่มระบบล็อกห้ามเกิน 9 ข้อตามบรีฟครับน้า)
		function setupChoice(btn, num) {
		    if (!btn) return;
		    btn.stop();
		    btn.cursor = "pointer";
		    btn.isSelected = false; 
		
		    btn.on("click", function() {
		        if (isSubmitted) return; // ถ้าส่งคำตอบแล้ว ล็อกไม่ให้กดเล่น
		
		        if (!btn.isSelected) {
		            // 🔒 [จุดแก้ไขสำคัญ] เช็กเงื่อนไข: ถ้าแตะครบ 9 ข้อแล้ว ข้อที่ 10 จะถูกบล็อกทันที กดไม่ติด
		            if (getSelectedCount() >= 9) {
		                return; 
		            }
		            btn.isSelected = true;
		            btn.gotoAndStop(1); // ไปเฟรมติ๊กเลือก
		        } else {
		            // ถ้ากดซ้ำข้อเดิม ให้ยกเลิกการเลือก (เอาติ๊กออก)
		            btn.isSelected = false;
		            btn.gotoAndStop(0); // กลับเฟรมปกติ
		        }
		    });
		}
		
		// วนลูปเปิดระบบปุ่มทั้ง 20 ปุ่มบน Stage
		for (var i = 1; i <= 20; i++) {
		    setupChoice(root["choice_" + i], i);
		}
		
		// ==========================================
		// 3. ปุ่ม submit_btn17 (ตรวจเฉลย + คำนวณคะแนน + แสดงผลบนจอ)
		// ==========================================
		if (root.submit_btn17) {
		    root.submit_btn17.on("click", function() {
		        root.submit_btn17.enabled = false;
		        root.submit_btn17.visible = false; 
		        isSubmitted = true;
		
		        // ✨ เปิดโชว์ปุ่ม [!] และปุ่ม Next ขึ้นมาพร้อมกัน
		        if (root.info_btn) {
		            root.info_btn.visible = true;
		        }
		        
		        if (root.next_btn17) {
		            root.next_btn17.visible = true;
		            root.next_btn17.alpha = 1;            
		            root.next_btn17.mouseEnabled = true;   
		        }
		
		        // ตัวแปรสำหรับเก็บคะแนนที่ได้
		        var totalScore = 0;
		
		        // วนลูปสลับเฟรมสีเฉลย 5 รูปแบบ และคำนวณคะแนน
		        for (var i = 1; i <= 20; i++) {
		            var btn = root["choice_" + i];
		            if (!btn) continue;
		            var isCorrect = correctAnswers.includes(i);
		
		            if (btn.isSelected) {
		                if (isCorrect) {
		                    btn.gotoAndStop(2); // เลือกไว้ และ "ถูก" -> ไปเฟรม 3
		                    totalScore++;       // บวกคะแนน
		                } else {
		                    btn.gotoAndStop(3); // เลือกไว้ แต่ "ผิด" -> ไปเฟรม 4
		                }
		            } else {
		                if (isCorrect) {
		                    btn.gotoAndStop(4); // ไม่ได้เลือก แต่จริงๆ "ถูก" -> ไปเฟรม 5
		                } else {
		                    btn.gotoAndStop(0); // ไม่ได้เลือก และ "ผิด" -> อยู่เฟรม 1
		                }
		            }
		        }
		
		        // 🎯 [จุดแก้ไขสำคัญ] ยิงคะแนนไปโชว์ในกล่อง Dynamic Text บน Stage ของน้าโดยตรง
		        if (root.score_txt) {
		            root.score_txt.text = "คะแนนที่ได้: " + totalScore + " / 9 คะแนน\nกดไอคอนด้านบนเพื่อดูเฉลย";
		        }
		    });
		}
		
		// ==========================================
		// 4. ปุ่ม info_btn [!] (ย้ายไปหน้าป๊อปอัปคำอธิบายที่เฟรม 18)
		// ==========================================
		if (root.info_btn) {
		    root.info_btn.cursor = "pointer";
		    root.info_btn.on("click", function() {
		        root.gotoAndStop(17); 
		    });
		}
		
		// สั่งให้ข้อความ Static Text ทั้งหมดบนสเตจ "โปร่งใสต่อเมาส์" 
		for (var i = 0; i < root.numChildren; i++) {
		    var child = root.getChildAt(i);
		    if (child && child.text !== undefined) {
		        child.mouseEnabled = false;
		    }
		}
		
		// ==========================================
		// 5. ปุ่ม next_btn17 (กดเพื่อไปสเตจถัดไป)
		// ==========================================
		if (root.next_btn17) {
		    root.next_btn17.cursor = "pointer";
		    root.next_btn17.on("click", function() {
		        root.gotoAndStop(18); 
		    });
		}
	}
	this.frame_17 = function() {
		this.stop();
		
		var root = this;
		
		// ==========================================
		// 1. ตั้งค่าขอบเขตพิกัดแนวตั้ง (แกน Y) ตามค่าที่น้าสรุปเป๊ะๆ
		// ==========================================
		var tableMinY = 1800;       // จุดเริ่มต้นบนสุดของน้า
		var tableMaxY = -1000;      // จุดสิ้นสุดตอนเลื่อนขึ้นสุด
		
		var barMinY = 130;        
		var barMaxY = 560;        
		
		// ⚙️ ตัวล็อกความเร็ว (หน่วงให้ลากใน Tablet นุ่มมือ)
		var scrollSpeed = 15;        
		var touchSensitivity = 0.22; 
		
		// จังหวะเริ่ม: ซ่อนปุ่มถัดไปไว้ก่อนจนกว่าจะเลื่อนสุด
		if (root.next_btn18) {
		    root.next_btn18.visible = false;
		    root.next_btn18.cursor = "pointer";
		}
		
		// รีเซ็ตตำแหน่งทุกครั้งที่เข้าหน้านี้
		if (root.table_mc) root.table_mc.y = tableMinY;
		if (root.scroll_bar) root.scroll_bar.y = barMinY;
		
		// ==========================================
		// 🔍 ฟังก์ชันเช็กเลื่อนสุดเพื่อเปิดปุ่ม Next
		// ==========================================
		function checkScrollEnd() {
		    if (!root.table_mc || !root.next_btn18) return;
		    if (root.table_mc.y <= (tableMaxY + 20)) {
		        root.next_btn18.visible = true;
		    }
		}
		
		// ==========================================
		// 🧮 2. ฟังก์ชันซิงค์ตำแหน่งตารางกับแท่งเลื่อน
		// ==========================================
		function updateScrollByBar() {
		    if (!root.table_mc || !root.scroll_bar) return;
		    var percent = (root.scroll_bar.y - barMinY) / (barMaxY - barMinY);
		    root.table_mc.y = tableMinY + (percent * (tableMaxY - tableMinY));
		    checkScrollEnd();
		}
		
		function updateBarByTable() {
		    if (!root.table_mc || !root.scroll_bar) return;
		    var percent = (root.table_mc.y - tableMinY) / (tableMaxY - tableMinY);
		    root.scroll_bar.y = barMinY + (percent * (barMaxY - barMinY));
		    checkScrollEnd();
		}
		
		// ==========================================
		// 🖱️ 3. ระบบสำหรับคอมพิวเตอร์
		// ==========================================
		if (root.scroll_bar) {
		    root.scroll_bar.cursor = "pointer";
		    root.scroll_bar.on("pressmove", function(evt) {
		        var localY = root.globalToLocal(evt.stageX, evt.stageY).y;
		        root.scroll_bar.y = localY;
		        if (root.scroll_bar.y < barMinY) root.scroll_bar.y = barMinY;
		        if (root.scroll_bar.y > barMaxY) root.scroll_bar.y = barMaxY;
		        updateScrollByBar();
		    });
		}
		
		function handleWheel(e) {
		    if (!root.table_mc) return;
		    if (e.deltaY > 0) {
		        root.table_mc.y -= scrollSpeed; 
		    } else {
		        root.table_mc.y += scrollSpeed; 
		    }
		    if (root.table_mc.y > tableMinY) root.table_mc.y = tableMinY;
		    if (root.table_mc.y < tableMaxY) root.table_mc.y = tableMaxY;
		    updateBarByTable();
		}
		window.addEventListener("wheel", handleWheel);
		
		// ==========================================
		// 📱 4. ระบบทัชสกรีนสำหรับ Tablet
		// ==========================================
		var startTouchY = 0;
		var startTableY = 0;
		
		if (root.table_mc) {
		    root.table_mc.on("mousedown", function(evt) {
		        startTouchY = evt.stageY;
		        startTableY = root.table_mc.y;
		    });
		
		    root.table_mc.on("pressmove", function(evt) {
		        var currentTouchY = evt.stageY;
		        var diffY = currentTouchY - startTouchY; 
		        root.table_mc.y = startTableY + (diffY * touchSensitivity);
		        if (root.table_mc.y > tableMinY) root.table_mc.y = tableMinY;
		        if (root.table_mc.y < tableMaxY) root.table_mc.y = tableMaxY;
		        updateBarByTable();
		    });
		}
		
		// ==========================================
		// 🔙 5. ปุ่ม return_18 ย้อนกลับไปหน้าข้อสอบเฟรม 17 (ใช้เลขโค้ดเป็น 16)
		// ==========================================
		if (root.return_18) {
		    root.return_18.cursor = "pointer";
		    root.return_18.on("click", function() {
		        window.removeEventListener("wheel", handleWheel);
		        
		        // 🎯 เปลี่ยนจาก 15 เป็น 16 เพื่อให้กลับมาหน้าเฟรม 17 ที่มีปุ่ม Submit ครับน้า
		        root.gotoAndStop(16); 
		    });
		}
		
		// ==========================================
		// ➡️ 6. ปุ่ม next_btn18 ไปเฟรมถัดไป
		// ==========================================
		if (root.next_btn18) {
		    root.next_btn18.on("click", function() {
		        window.removeEventListener("wheel", handleWheel);
		        root.gotoAndStop(18); // ไปเฟรมถัดไปของน้า (เฟรมที่ 19)
		    });
		}
		
		// เปลี่ยนเมาส์เป็นรูปมือเวลาชี้ปุ่ม esc_btn
		this.esc_btn18.cursor = "pointer";
		
		// กดแล้วย้อนกลับไปเฟรม 6 (index 5) ทันที
		this.esc_btn18.on("click", function() {
		    this.gotoAndStop(16); 
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(2));

	// Button
	this.no_btn = new lib.yes();
	this.no_btn.name = "no_btn";
	this.no_btn.setTransform(860.9,409.4);

	this.yes_btn = new lib.yes();
	this.yes_btn.name = "yes_btn";
	this.yes_btn.setTransform(444.9,409.4);

	this.press_start = new lib.press_start();
	this.press_start.name = "press_start";
	this.press_start.setTransform(647.9,636.9,1,1,0,0,0,0,139.8);

	this.next_btn5 = new lib.start_m();
	this.next_btn5.name = "next_btn5";
	this.next_btn5.setTransform(647,477.65);

	this.next_btn6 = new lib._continue();
	this.next_btn6.name = "next_btn6";
	this.next_btn6.setTransform(1123.45,661.1);

	this.fam_btn = new lib.fam_btn();
	this.fam_btn.name = "fam_btn";
	this.fam_btn.setTransform(768,235.25);

	this.nurse_btn = new lib.nurse_btn();
	this.nurse_btn.name = "nurse_btn";
	this.nurse_btn.setTransform(554.85,285.8);

	this.monitor_btn = new lib.monitor();
	this.monitor_btn.name = "monitor_btn";
	this.monitor_btn.setTransform(585.8,132.25,0.9104,0.906,0,0,0,0.2,0.1);

	this.paper_btn = new lib.paper();
	this.paper_btn.name = "paper_btn";
	this.paper_btn.setTransform(453.8,369.95,1.2917,1.2907,0,0,0,-0.1,-0.2);

	this.com_btn = new lib.computer();
	this.com_btn.name = "com_btn";
	this.com_btn.setTransform(388.25,362.45,1.1538,1.1487,0,0,0,0.1,-0.5);

	this.patient_btn = new lib.patient();
	this.patient_btn.name = "patient_btn";
	this.patient_btn.setTransform(658.5,159.9);

	this.esc_btn = new lib.esc();
	this.esc_btn.name = "esc_btn";
	this.esc_btn.setTransform(1200,117.35);
	this.esc_btn._off = true;
	new cjs.ButtonHelper(this.esc_btn, 0, 1, 1);

	this.next_btn14 = new lib._continue();
	this.next_btn14.name = "next_btn14";
	this.next_btn14.setTransform(641,437.6);

	this.back_btn16 = new lib.back();
	this.back_btn16.name = "back_btn16";
	this.back_btn16.setTransform(621,504.65);

	this.next_btn16 = new lib.start_m();
	this.next_btn16.name = "next_btn16";
	this.next_btn16.setTransform(638.4,441.05);

	this.info_btn = new lib.info_btn_1();
	this.info_btn.name = "info_btn";
	this.info_btn.setTransform(1133.3,91.55,0.7229,0.7229,0,0,0,0.4,0.5);
	new cjs.ButtonHelper(this.info_btn, 0, 1, 1);

	this.submit_btn17 = new lib.submit_btn_1();
	this.submit_btn17.name = "submit_btn17";
	this.submit_btn17.setTransform(1030.2,622.4);
	new cjs.ButtonHelper(this.submit_btn17, 0, 1, 1);

	this.next_btn18 = new lib.con3();
	this.next_btn18.name = "next_btn18";
	this.next_btn18.setTransform(660.5,638.25);

	this.scroll_bar = new lib.scroll_bar();
	this.scroll_bar.name = "scroll_bar";
	this.scroll_bar.setTransform(1106.5,166.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yes_btn},{t:this.no_btn}]}).to({state:[]},1).to({state:[{t:this.press_start}]},1).to({state:[]},1).to({state:[{t:this.next_btn5}]},1).to({state:[{t:this.patient_btn},{t:this.com_btn},{t:this.paper_btn},{t:this.monitor_btn},{t:this.nurse_btn},{t:this.fam_btn},{t:this.next_btn6}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[]},1).to({state:[{t:this.next_btn14}]},1).to({state:[]},1).to({state:[{t:this.next_btn16},{t:this.back_btn16}]},1).to({state:[{t:this.submit_btn17},{t:this.info_btn}]},1).to({state:[{t:this.scroll_bar},{t:this.next_btn18}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.esc_btn).wait(6).to({_off:false},0).wait(3).to({scaleX:1.0038,scaleY:1.0038,x:950,y:80},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({x:1200,y:117.35},0).to({_off:true},1).wait(7));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("Eg6WArmMAAAhXLMB0sAAAMAAABXLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:656.45,y:325.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// float_idn
	this.score_txt = new cjs.Text("", "normal 400 22px 'Google Sans'", "#CC0000");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 35;
	this.score_txt.lineWidth = 245;
	this.score_txt.parent = this;
	this.score_txt.setTransform(1014.55,589.4);
	if(!lib.properties.webfonts['Google Sans']) {
		lib.webFontTxtInst['Google Sans'] = lib.webFontTxtInst['Google Sans'] || [];
		lib.webFontTxtInst['Google Sans'].push(this.score_txt);
	}

	this.table_mc = new lib.info_new();
	this.table_mc.name = "table_mc";
	this.table_mc.setTransform(660.6,1788.1,0.9531,0.9531,0,0,0,373.1,1854.5);

	var maskedShapeInstanceList = [this.score_txt,this.table_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score_txt}]},16).to({state:[{t:this.table_mc}]},1).to({state:[]},1).wait(1));

	// choice
	this.choice_20 = new lib.Mc_Choice_Template();
	this.choice_20.name = "choice_20";
	this.choice_20.setTransform(636.25,650.3,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_19 = new lib.Mc_Choice_Template();
	this.choice_19.name = "choice_19";
	this.choice_19.setTransform(278.85,650.3,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_18 = new lib.Mc_Choice_Template();
	this.choice_18.name = "choice_18";
	this.choice_18.setTransform(1009.4,562.65,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_17 = new lib.Mc_Choice_Template();
	this.choice_17.name = "choice_17";
	this.choice_17.setTransform(636.25,562.95,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_16 = new lib.Mc_Choice_Template();
	this.choice_16.name = "choice_16";
	this.choice_16.setTransform(278.85,562.95,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_15 = new lib.Mc_Choice_Template();
	this.choice_15.name = "choice_15";
	this.choice_15.setTransform(1009.4,503.55,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_14 = new lib.Mc_Choice_Template();
	this.choice_14.name = "choice_14";
	this.choice_14.setTransform(636.25,503.85,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_13 = new lib.Mc_Choice_Template();
	this.choice_13.name = "choice_13";
	this.choice_13.setTransform(278.85,503.85,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_12 = new lib.Mc_Choice_Template();
	this.choice_12.name = "choice_12";
	this.choice_12.setTransform(1009.4,445.35,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_11 = new lib.Mc_Choice_Template();
	this.choice_11.name = "choice_11";
	this.choice_11.setTransform(636.25,441.6,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_10 = new lib.Mc_Choice_Template();
	this.choice_10.name = "choice_10";
	this.choice_10.setTransform(278.85,441.75,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_9 = new lib.Mc_Choice_Template();
	this.choice_9.name = "choice_9";
	this.choice_9.setTransform(1009.4,376.75,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_8 = new lib.Mc_Choice_Template();
	this.choice_8.name = "choice_8";
	this.choice_8.setTransform(636.35,376.4,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_7 = new lib.Mc_Choice_Template();
	this.choice_7.name = "choice_7";
	this.choice_7.setTransform(278.85,376.35,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_6 = new lib.Mc_Choice_Template();
	this.choice_6.name = "choice_6";
	this.choice_6.setTransform(1009.4,273.35,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_5 = new lib.Mc_Choice_Template();
	this.choice_5.name = "choice_5";
	this.choice_5.setTransform(636.35,273.65,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_4 = new lib.Mc_Choice_Template();
	this.choice_4.name = "choice_4";
	this.choice_4.setTransform(278.85,273.65,0.4609,0.4605,0,0,0,0.7,0.8);

	this.choice_3 = new lib.Mc_Choice_Template();
	this.choice_3.name = "choice_3";
	this.choice_3.setTransform(1009.4,186.9,0.4609,0.4605,0,0,0,-43.2,0.1);

	this.choice_2 = new lib.Mc_Choice_Template();
	this.choice_2.name = "choice_2";
	this.choice_2.setTransform(636.35,187.2,0.4609,0.4606,0,0,0,-43,0.8);

	this.choice_1 = new lib.Mc_Choice_Template();
	this.choice_1.name = "choice_1";
	this.choice_1.setTransform(278.85,187.2,0.4609,0.4605,0,0,0,0.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.choice_1},{t:this.choice_2},{t:this.choice_3},{t:this.choice_4},{t:this.choice_5},{t:this.choice_6},{t:this.choice_7},{t:this.choice_8},{t:this.choice_9},{t:this.choice_10},{t:this.choice_11},{t:this.choice_12},{t:this.choice_13},{t:this.choice_14},{t:this.choice_15},{t:this.choice_16},{t:this.choice_17},{t:this.choice_18},{t:this.choice_19},{t:this.choice_20}]},16).to({state:[]},1).to({state:[]},1).wait(1));

	// Graphics
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(417.75,363.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(813.3,363.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(320.5,139.55,0.5,0.5);

	this.intro_video = new lib.an_Video({'id': 'intro_video', 'src':'videos/All_intro_cut.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video.name = "intro_video";
	this.intro_video.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_3 = new lib.Info();

	this.intro_video2 = new lib.an_Video({'id': 'intro_video2', 'src':'videos/M1_into.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video2.name = "intro_video2";
	this.intro_video2.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(243,10.15,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(88,9.45,0.5,0.5);

	this.patient = new lib.an_Video({'id': 'patient', 'src':'videos/patient.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.patient.name = "patient";
	this.patient.setTransform(640,364.95,2.49,1.8675,0,0,0,200.2,149.9);

	this.family = new lib.an_Video({'id': 'family', 'src':'videos/family.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.family.name = "family";
	this.family.setTransform(640,364.95,2.49,1.8675,0,0,0,200.2,149.9);

	this.nurse = new lib.an_Video({'id': 'nurse', 'src':'videos/nurse.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.nurse.name = "nurse";
	this.nurse.setTransform(640,364.95,2.49,1.8675,0,0,0,200.2,149.9);

	this.computer = new lib.an_Video({'id': 'computer', 'src':'videos/computer.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.computer.name = "computer";
	this.computer.setTransform(640,386.95,1.11,2.6308,0,0,0,200.8,150.5);

	this.refer = new lib.an_Video({'id': 'refer', 'src':'videos/refer.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.refer.name = "refer";
	this.refer.setTransform(640,385.65,1.11,2.631,0,0,0,200,150);

	this.monitor = new lib.an_Video({'id': 'monitor', 'src':'videos/monitor.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.monitor.name = "monitor";
	this.monitor.setTransform(640,364.95,2.49,1.8675,0,0,0,200.2,149.9);

	this.intro_video3 = new lib.an_Video({'id': 'intro_video3', 'src':'videos/M2-info.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video3.name = "intro_video3";
	this.intro_video3.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_6 = new lib.M21();

	this.instance_7 = new lib.M2_info();

	this.intro_video4 = new lib.an_Video({'id': 'intro_video4', 'src':'videos/M2-into.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video4.name = "intro_video4";
	this.intro_video4.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_8 = new lib.M23();

	this.instance_9 = new lib.M2();
	this.instance_9.setTransform(0,1);

	this.instance_10 = new lib.choice2();
	this.instance_10.setTransform(0,0,0.6667,0.6667);

	this.instance_11 = new lib.down();
	this.instance_11.setTransform(-373,-366,1.0708,1.0709);

	this.instance_12 = new lib.info();
	this.instance_12.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.intro_video}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.intro_video2}]},1).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.patient}]},1).to({state:[{t:this.family}]},1).to({state:[{t:this.nurse}]},1).to({state:[{t:this.computer}]},1).to({state:[{t:this.refer}]},1).to({state:[{t:this.monitor}]},1).to({state:[{t:this.intro_video3}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.intro_video4}]},1).to({state:[{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[]},1).wait(1));

	// bg
	this.instance_13 = new lib.M1();
	this.instance_13.setTransform(1,0);

	this.instance_14 = new lib.ERroomcrop();
	this.instance_14.setTransform(50,37,0.8395,0.8395);

	this.instance_15 = new lib.refer_bg();
	this.instance_15.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,1683,1043.1);
// library properties:
lib.properties = {
	id: '212CE69E997A435A93AF99233559C799',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_4.png?1785996618314", id:"CachedBmp_4"},
		{src:"images/Artboard2.png?1785996618314", id:"Artboard2"},
		{src:"images/Demo4_atlas_1.png?1785996615580", id:"Demo4_atlas_1"},
		{src:"images/Demo4_atlas_2.png?1785996615580", id:"Demo4_atlas_2"},
		{src:"images/Demo4_atlas_3.png?1785996615580", id:"Demo4_atlas_3"},
		{src:"images/Demo4_atlas_4.png?1785996615580", id:"Demo4_atlas_4"},
		{src:"images/Demo4_atlas_5.png?1785996615580", id:"Demo4_atlas_5"},
		{src:"images/Demo4_atlas_6.png?1785996615580", id:"Demo4_atlas_6"},
		{src:"images/Demo4_atlas_7.png?1785996615580", id:"Demo4_atlas_7"},
		{src:"images/Demo4_atlas_8.png?1785996615580", id:"Demo4_atlas_8"},
		{src:"images/Demo4_atlas_9.png?1785996615580", id:"Demo4_atlas_9"},
		{src:"images/Demo4_atlas_10.png?1785996615581", id:"Demo4_atlas_10"},
		{src:"images/Demo4_atlas_11.png?1785996615581", id:"Demo4_atlas_11"},
		{src:"images/Demo4_atlas_12.png?1785996615581", id:"Demo4_atlas_12"},
		{src:"images/Demo4_atlas_13.png?1785996615581", id:"Demo4_atlas_13"},
		{src:"images/Demo4_atlas_14.png?1785996615581", id:"Demo4_atlas_14"},
		{src:"sounds/Audio_intro.mp3?1785996618314", id:"Audio_intro"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1785996618314", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1785996618314", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1785996618315", id:"an.Video"}
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
