(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Demo5_atlas_1", frames: [[892,496,616,139],[0,1951,406,73],[1593,492,180,69],[0,1140,1031,91],[0,260,1823,117],[0,379,1591,115],[1922,0,96,182],[1448,1846,190,182],[1433,750,64,552],[1369,976,62,697],[1067,1846,379,111],[1593,379,379,111],[892,750,535,111],[0,1838,535,111],[654,1685,487,111],[578,1798,487,111],[1067,1798,52,46],[0,880,815,128],[0,1010,815,128],[925553060,2,-1040187284,-788529043],[892,863,535,111],[817,976,535,111],[892,637,576,111],[0,1725,576,111],[692,1233,513,111],[692,1346,513,111],[537,1911,457,111],[1143,1733,457,111],[692,1459,513,111],[654,1572,513,111],[0,1233,690,121],[0,1356,690,121],[0,1479,652,121],[0,1602,652,121],[817,880,67,84],[654,1479,24,27],[1207,1089,160,320],[1207,1411,160,320],[0,0,1920,128],[0,130,1920,128],[0,693,890,185],[0,496,890,195]]},
		{name:"Demo5_atlas_2", frames: [[1129,666,758,327],[0,234,1694,214],[0,450,1694,214],[0,0,1653,232],[0,1231,1920,128],[0,1361,1920,128],[0,1491,1920,128],[0,1621,1920,128],[0,1751,1920,128],[0,1881,1920,128],[0,666,565,563],[567,666,560,560],[925553060,2,-1040187284,-788529043]]},
		{name:"Demo5_atlas_3", frames: [[0,1797,1728,243],[0,1444,1326,351],[925553060,2,-1040187284,-788529043],[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo5_atlas_4", frames: [[925553060,2,-1040187284,-788529043],[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo5_atlas_5", frames: [[925553060,2,-1040187284,-788529043],[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo5_atlas_6", frames: [[925553060,2,-1040187284,-788529043],[0,0,1280,720],[0,722,1280,720]]},
		{name:"Demo5_atlas_7", frames: [[0,0,1408,768],[0,770,1024,1024]]},
		{name:"Demo5_atlas_8", frames: [[925553060,2,-1040187284,-788529043],[0,0,1440,810],[0,812,1440,810]]},
		{name:"Demo5_atlas_9", frames: [[0,0,876,1795],[878,0,876,1795]]},
		{name:"Demo5_atlas_10", frames: [[876,0,876,1795],[0,0,874,1800],[925553060,2,-1040187284,-788529043]]},
		{name:"Demo5_atlas_11", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_12", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_13", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_14", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_15", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_16", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_17", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_18", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_19", frames: [[0,0,1920,1080]]},
		{name:"Demo5_atlas_20", frames: [[0,0,1920,1080]]}
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



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Demo5_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2058,182);


(lib.CachedBmp_12 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2220,110);


(lib.CachedBmp_5 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Demo5_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.A2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.A = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Artboard1 = function() {
	this.initialize(ss["Demo5_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artboard2 = function() {
	this.initialize(img.Artboard2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1356,6739);


(lib.Artboard2_s3 = function() {
	this.initialize(ss["Demo5_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artboard32 = function() {
	this.initialize(img.Artboard32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1356,5778);


(lib.B2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.B = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.back1 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.back2 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.C12 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.C22 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.computer1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.con1 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.con1_3 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.con2 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.con2_3 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.con_m1 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.con_m2 = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.D2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.D = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.down = function() {
	this.initialize(ss["Demo5_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.E2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.E = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ERroomcrop = function() {
	this.initialize(ss["Demo5_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.esc_btn = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.F2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.F = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.fam1 = function() {
	this.initialize(ss["Demo5_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fam2 = function() {
	this.initialize(ss["Demo5_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.G = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.H2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.H = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Heart0 = function() {
	this.initialize(ss["Demo5_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Heart1 = function() {
	this.initialize(ss["Demo5_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.I2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.I = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.info = function() {
	this.initialize(ss["Demo5_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Info = function() {
	this.initialize(ss["Demo5_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.info_btn = function() {
	this.initialize(ss["Demo5_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ISBAR = function() {
	this.initialize(ss["Demo5_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.J2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.J = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.M1 = function() {
	this.initialize(ss["Demo5_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.M21 = function() {
	this.initialize(ss["Demo5_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.M23 = function() {
	this.initialize(ss["Demo5_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.M2 = function() {
	this.initialize(ss["Demo5_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.M2_info = function() {
	this.initialize(ss["Demo5_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.M31 = function() {
	this.initialize(ss["Demo5_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.M32 = function() {
	this.initialize(ss["Demo5_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.monitor1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.nurse1 = function() {
	this.initialize(ss["Demo5_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nurse2 = function() {
	this.initialize(ss["Demo5_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.paper1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.patient1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.patient2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.refer_bg = function() {
	this.initialize(ss["Demo5_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.return_18 = function() {
	this.initialize(ss["Demo5_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.startM1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.startM2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.start1 = function() {
	this.initialize(ss["Demo5_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.start2 = function() {
	this.initialize(ss["Demo5_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Submit_3 = function() {
	this.initialize(ss["Demo5_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.submit_btn = function() {
	this.initialize(ss["Demo5_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.try1 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.try2 = function() {
	this.initialize(ss["Demo5_atlas_1"]);
	this.gotoAndStop(41);
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


(lib.ไม่ใช่ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-153.95,-34.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(-186.15,-82.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ไม่ใช่, new cjs.Rectangle(-186.1,-82.1,379,163.5), null);


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



(lib.target = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#006A49").ss(2,1,1).p("A58kjMAz5AAAQCkAAAACkIAAD/QAACkikAAMgz5AAAQikAAAAikIAAj/QAAikCkAAg");
	this.shape.setTransform(187.4056,25.6737,1.0412,1.0295);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("A58EkQikAAAAikIAAj/QAAikCkABMAz5AAAQCkgBAACkIAAD/QAACkikAAg");
	this.shape_1.setTransform(187.4056,25.6737,1.0412,1.0295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target, new cjs.Rectangle(-3.6,-5.3,382,62), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.try1();
	this.instance.setTransform(-473,-118);

	this.instance_1 = new lib.try2();
	this.instance_1.setTransform(-470,-117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-473}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{x:-475}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-475,-118,895,196);


(lib.submit_btn3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Submit_3();
	this.instance.setTransform(-70,-39.35,0.0729,0.0729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-39.3,140,78.69999999999999);


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


(lib.return_18_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.return_18();
	this.instance.setTransform(-55,-55,0.1074,0.1074);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-55,110,110);


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


(lib.notcorrect = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-423.55,-53.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.notcorrect, new cjs.Rectangle(-423.5,-53.5,847,107), null);


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


(lib.J_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.J();
	this.instance.setTransform(-6,-6,0.5988,0.6066);

	this.instance_1 = new lib.J2();
	this.instance_1.setTransform(-6,-6,0.5988,0.6066);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,390.5,73.4);


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


(lib.I_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.I();
	this.instance.setTransform(-7,-9,0.5758,0.5841);

	this.instance_1 = new lib.I2();
	this.instance_1.setTransform(-7,-9,0.5758,0.5843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-9,397.3,70.7);


(lib.heart = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Heart1();
	this.instance.setTransform(-138,-77.6,0.1917,0.1917);

	this.instance_1 = new lib.Heart0();
	this.instance_1.setTransform(-138,-78,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-78,276,155.7);


(lib.H_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.H();
	this.instance.setTransform(-12,-5,0.5598,0.5674);

	this.instance_1 = new lib.H2();
	this.instance_1.setTransform(-12,-5,0.5598,0.5676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-5,287.2,63);


(lib.G_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.G();
	this.instance.setTransform(-8,-8,0.5988,0.607);

	this.instance_1 = new lib.G2();
	this.instance_1.setTransform(-8,-8,0.5988,0.6068);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,273.7,67.4);


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


(lib.F_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F();
	this.instance.setTransform(-11,-4,0.556,0.5638);

	this.instance_1 = new lib.F2();
	this.instance_1.setTransform(-11,-4,0.556,0.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-4,285.3,62.6);


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


(lib.E_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.E();
	this.instance.setTransform(-6,-5,0.5627,0.5711);

	this.instance_1 = new lib.E2();
	this.instance_1.setTransform(-6,-5,0.5627,0.5712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5,324.1,63.4);


(lib.D_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.D();
	this.instance.setTransform(-8,-7,0.5533,0.5681);

	this.instance_1 = new lib.D2();
	this.instance_1.setTransform(-8,-7,0.5533,0.568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,296,63.1);


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


(lib.content_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Artboard32();
	this.instance.setTransform(0,0,0.5583,0.5582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.content_mc, new cjs.Rectangle(0,0,757,3225.5), null);


(lib.congrate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-423.55,-53.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.congrate, new cjs.Rectangle(-423.5,-53.5,847,107), null);


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


(lib.con_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con1_3();
	this.instance.setTransform(-195,-30,0.4785,0.4783);

	this.instance_1 = new lib.con2_3();
	this.instance_1.setTransform(-195,-30,0.4785,0.4785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-30,390,61.3);


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


(lib.C = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.C12();
	this.instance.setTransform(-10,-6,0.5534,0.568);

	this.instance_1 = new lib.C22();
	this.instance_1.setTransform(-10,-6,0.5534,0.568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-6,269.5,63.1);


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


(lib.B_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.B();
	this.instance.setTransform(-8,-5,0.5571,0.5722);

	this.instance_1 = new lib.B2();
	this.instance_1.setTransform(-8,-5,0.5571,0.5721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-5,298.1,63.5);


(lib.A_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.A();
	this.instance.setTransform(-7,-5,0.5536,0.5691);

	this.instance_1 = new lib.A2();
	this.instance_1.setTransform(-7,-5,0.5537,0.5689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-5,209.9,63.2);


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
(lib.Demo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		// 🔇 สั่งปิดเสียงทั้งหมดก่อน (เผื่อกดวนกลับมาหน้าแรก)
		createjs.Sound.stop();
		
		// 🟢 ปุ่ม yes_btn -> สั่งย้ายไปเฟรม 2 (เสียงในเฟรม 2 จะดังขึ้นเองอัตโนมัติ)
		if (root.yes_btn) {
		    root.yes_btn.cursor = "pointer";
		    root.yes_btn.removeAllEventListeners("click");
		    root.yes_btn.on("click", function() {
		        root.gotoAndStop(1); // ย้ายไปเฟรม 2
		    });
		}
		
		// 🔴 ปุ่ม no_btn -> สั่งย้ายไปเฟรม 27
		if (root.no_btn) {
		    root.no_btn.cursor = "pointer";
		    root.no_btn.removeAllEventListeners("click");
		    root.no_btn.on("click", function() {
		        root.gotoAndStop(26); // ย้ายไปเฟรม 27
		    });
		}
	}
	this.frame_1 = function() {
		playSound("Audio_intro");
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
		
		// 🔄 รีเซ็ตสถานะการส่งคำตอบใหม่ทุกครั้งที่กลับมาเฟรมนี้ (ใช้ root. ตัวเดียวจบทั้งระบบ)
		root.isSubmitted = false; 
		
		// 🛑 จังหวะเริ่มเกม: ซ่อนปุ่ม [!] (info_btn) และปุ่มถัดไป (next_btn17) ไว้ก่อน
		if (root.info_btn) {
		    root.info_btn.visible = false;
		}
		
		if (root.next_btn17) {
		    root.next_btn17.visible = false;
		    root.next_btn17.alpha = 0;          
		    root.next_btn17.mouseEnabled = false;  
		}
		
		// 🏷️ เคลียร์หน้าจอ: ซ่อนคำว่าคะแนนไว้ก่อนตอนเริ่มเกม
		if (root.score_txt) {
		    root.score_txt.text = ""; 
		}
		
		// ✨ สั่ง คืนชีพปุ่ม Submit ให้กลับมาโชว์ตัวและกดส่งคำตอบใหม่ได้ตลอดเวลา
		if (root.submit_btn17) {
		    root.submit_btn17.visible = true;    // โชว์ปุ่ม Submit
		    root.submit_btn17.enabled = true;    // เปิดสิทธิ์ให้กดได้
		    root.submit_btn17.alpha = 1.0;
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
		
		// 2. ฟังก์ชันควบคุมปุ่ม Choice
		function setupChoice(btn, num) {
		    if (!btn) return;
		    btn.stop();
		    btn.cursor = "pointer";
		    btn.isSelected = false; 
		
		    btn.removeAllEventListeners("click"); // ล้างความซ้ำซ้อน
		    btn.on("click", function() {
		        if (root.isSubmitted) return; // เช็กตัวแปร root.isSubmitted
		
		        if (!btn.isSelected) {
		            // 🔒 บล็อกถ้าเลือกเกิน 9 ข้อ
		            if (getSelectedCount() >= 9) {
		                return; 
		            }
		            btn.isSelected = true;
		            btn.gotoAndStop(1); // ไปเฟรมติ๊กเลือก
		        } else {
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
		    root.submit_btn17.removeAllEventListeners("click");
		    root.submit_btn17.on("click", function() {
		        root.submit_btn17.enabled = false;
		        root.submit_btn17.visible = false; 
		        root.isSubmitted = true; // ตั้งค่าเป็น true เมื่อกดส่ง
		
		        // ✨ เปิดโชว์ปุ่ม [!] และปุ่ม Next ขึ้นมาพร้อมกัน
		        if (root.info_btn) {
		            root.info_btn.visible = true;
		        }
		        
		        if (root.next_btn17) {
		            root.next_btn17.visible = true;
		            root.next_btn17.alpha = 1;            
		            root.next_btn17.mouseEnabled = true;   
		        }
		
		        var totalScore = 0;
		
		        // วนลูปสลับเฟรมสีเฉลย และคำนวณคะแนน
		        for (var i = 1; i <= 20; i++) {
		            var btn = root["choice_" + i];
		            if (!btn) continue;
		            var isCorrect = correctAnswers.includes(i);
		
		            if (btn.isSelected) {
		                if (isCorrect) {
		                    btn.gotoAndStop(2); // ถูก
		                    totalScore++;       
		                } else {
		                    btn.gotoAndStop(3); // ผิด
		                }
		            } else {
		                if (isCorrect) {
		                    btn.gotoAndStop(4); // ไม่เลือกแต่ถูก
		                } else {
		                    btn.gotoAndStop(0); // ไม่เลือกและผิด
		                }
		            }
		        }
		
		        // ยิงคะแนนไปโชว์ในกล่อง Dynamic Text
		        if (root.score_txt) {
		            root.score_txt.text = "คะแนนที่ได้: " + totalScore + " / 9 คะแนน\nกดไอคอนด้านบนเพื่อดูเฉลย";
		        }
		    });
		}
		
		// ==========================================
		// 4. ปุ่ม info_btn [!]
		// ==========================================
		if (root.info_btn) {
		    root.info_btn.cursor = "pointer";
		    root.info_btn.removeAllEventListeners("click");
		    root.info_btn.on("click", function() {
		        root.gotoAndStop(17); 
		    });
		}
		
		// สั่งให้ข้อความ Static Text ทั้งหมด "โปร่งใสต่อเมาส์" กันบังปุ่ม
		for (var i = 0; i < root.numChildren; i++) {
		    var child = root.getChildAt(i);
		    if (child && child.text !== undefined) {
		        child.mouseEnabled = false;
		    }
		}
		
		// ==========================================
		// 5. ปุ่ม next_btn17
		// ==========================================
		if (root.next_btn17) {
		    root.next_btn17.cursor = "pointer";
		    root.next_btn17.removeAllEventListeners("click");
		    root.next_btn17.on("click", function() {
		        root.gotoAndStop(18); 
		    });
		}
	}
	this.frame_17 = function() {
		this.stop();
		
		var root = this;
		
		// 📲 เปิดระบบ Touch Control ให้ Canvas รองรับนิ้วสัมผัสบน iPad/iOS และ Android
		if (createjs.Touch.isSupported()) {
		    createjs.Touch.enable(stage, true, false);
		}
		
		// ==========================================
		// 1. ตั้งค่าขอบเขตพิกัดแนวตั้ง (แกน Y)
		// ==========================================
		var tableMinY = 1800;       // จุดเริ่มต้นบนสุด
		var tableMaxY = -1000;      // จุดสิ้นสุดตอนเลื่อนขึ้นสุด
		
		var barMinY = 130;          
		var barMaxY = 560;          
		
		var scrollSpeed = 25;        
		var touchSensitivity = 0.8; // ปรับความไวของนิ้วสัมผัสบน iPad ให้ลากลื่นติดมือ
		
		// ซ่อนปุ่มถัดไปไว้ก่อนจนกว่าจะเลื่อนตารางสุด
		if (root.next_btn18) {
		    root.next_btn18.visible = false;
		    root.next_btn18.cursor = "pointer";
		}
		
		// รีเซ็ตตำแหน่งทุกครั้งที่เข้าหน้านี้
		if (root.table_mc) root.table_mc.y = tableMinY;
		if (root.scroll_bar) root.scroll_bar.y = barMinY;
		
		// 🔍 ฟังก์ชันเช็กเลื่อนสุดเพื่อเปิดปุ่ม Next
		function checkScrollEnd() {
		    if (!root.table_mc || !root.next_btn18) return;
		    if (root.table_mc.y <= (tableMaxY + 20)) {
		        root.next_btn18.visible = true;
		    }
		}
		
		// 🧮 ฟังก์ชันซิงค์ตำแหน่งตารางกับแท่งเลื่อน
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
		// 🖱️ 2. ระบบสำหรับคอมพิวเตอร์ (Mouse Drag & Wheel)
		// ==========================================
		if (root.scroll_bar) {
		    root.scroll_bar.cursor = "pointer";
		    root.scroll_bar.removeAllEventListeners("pressmove");
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
		window.removeEventListener("wheel", handleWheel);
		window.addEventListener("wheel", handleWheel);
		
		// ==========================================
		// 📱 3. ระบบทัชสกรีนสำหรับ iPad / Tablet
		// ==========================================
		var startTouchY = 0;
		var startTableY = 0;
		
		if (root.table_mc) {
		    root.table_mc.removeAllEventListeners("mousedown");
		    root.table_mc.removeAllEventListeners("pressmove");
		    
		    root.table_mc.on("mousedown", function(evt) {
		        startTouchY = evt.stageY;
		        startTableY = root.table_mc.y;
		    });
		
		    root.table_mc.on("pressmove", function(evt) {
		        var currentTouchY = evt.stageY;
		        var diffY = (currentTouchY - startTouchY) * touchSensitivity; 
		        
		        root.table_mc.y = startTableY + diffY;
		        
		        if (root.table_mc.y > tableMinY) root.table_mc.y = tableMinY;
		        if (root.table_mc.y < tableMaxY) root.table_mc.y = tableMaxY;
		        
		        updateBarByTable();
		    });
		}
		
		// ป้องกัน Safari บน iPad ดึงหน้าเว็บตามนิ้ว
		function preventTouchScroll(e) {
		    if (e.target.tagName === 'CANVAS') {
		        e.preventDefault();
		    }
		}
		window.removeEventListener("touchmove", preventTouchScroll);
		window.addEventListener("touchmove", preventTouchScroll, { passive: false });
		
		// ==========================================
		// 🧼 4. ฟังก์ชันทำความสะอาด Event เมื่อย้ายหน้า
		// ==========================================
		function clearAllEvents() {
		    window.removeEventListener("wheel", handleWheel);
		    window.removeEventListener("touchmove", preventTouchScroll);
		    if (root.table_mc) {
		        root.table_mc.removeAllEventListeners("mousedown");
		        root.table_mc.removeAllEventListeners("pressmove");
		    }
		    if (root.scroll_bar) {
		        root.scroll_bar.removeAllEventListeners("pressmove");
		    }
		}
		
		// 🔙 ปุ่ม return_18 ย้อนกลับไปหน้าข้อสอบ (เฟรม 17)
		if (root.return_18) {
		    root.return_18.cursor = "pointer";
		    root.return_18.removeAllEventListeners("click");
		    root.return_18.on("click", function() {
		        clearAllEvents();
		        root.gotoAndStop(16); 
		    });
		}
		
		// ➡️ ปุ่ม next_btn18 ไปเฟรมถัดไป
		if (root.next_btn18) {
		    root.next_btn18.removeAllEventListeners("click");
		    root.next_btn18.on("click", function() {
		        clearAllEvents();
		        root.gotoAndStop(18); 
		    });
		}
		
		// ==========================================
		// ❌ ปุ่ม esc_btn18 (ย้อนกลับไปหน้าข้อสอบเฟรม 17)
		// ==========================================
		if (root.esc_btn18) {
		    root.esc_btn18.cursor = "pointer";
		    root.esc_btn18.removeAllEventListeners("click");
		    root.esc_btn18.on("click", function() {
		        clearAllEvents();     // เคลียร์ระบบสไลด์ตารางบน iPad ออกก่อน
		        root.gotoAndStop(16); // ย้อนกลับไปเฟรม 17 (ใช้ Index 16)
		    });
		}
	}
	this.frame_18 = function() {
		// 1. สั่งให้หัวอ่านหยุดรอตรงนี้ เพื่อให้คลิปวิดีโอในเฟรมนี้ได้เล่นก่อน
		this.stop(); 
		var root = this;
		
		// 2. ตั้งเวลาความยาวของคลิปวิดีโอ (5 วินาที = 5000 มิลลิวินาที)
		var videoDuration5 = 1500; 
		
		setTimeout(function() {
		    
		    console.log("คลิปเฟรม 4 เล่นครบ 5 วินาทีแล้ว ย้ายไปเฟรม 5 ทันที!");
		    
		    // 3. สั่งข้ามไปเฟรมที่ 5 
		    // (ในโปรแกรมคือเฟรม 5 แต่โค้ดต้องใช้เลข index คือ 4 เพราะเริ่มนับจาก 0)
		    root.gotoAndStop(19); 
		    
		}, videoDuration5);
	}
	this.frame_19 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.next_btn20.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn20.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn20.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.next_btn20.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(20); // ไปเฟรมที่ 4 ของ Timeline หลัก
		});
	}
	this.frame_20 = function() {
		// 1. สั่งให้หัวอ่านหยุดรอตรงนี้ เพื่อให้คลิปวิดีโอในเฟรมนี้ได้เล่นก่อน
		this.stop(); 
		var root = this;
		
		// 2. ตั้งเวลาความยาวของคลิปวิดีโอ (5 วินาที = 5000 มิลลิวินาที)
		var videoDuration6 = 4500; 
		
		setTimeout(function() {
		    
		    console.log("คลิปเฟรม 4 เล่นครบ 5 วินาทีแล้ว ย้ายไปเฟรม 5 ทันที!");
		    
		    // 3. สั่งข้ามไปเฟรมที่ 5 
		    // (ในโปรแกรมคือเฟรม 5 แต่โค้ดต้องใช้เลข index คือ 4 เพราะเริ่มนับจาก 0)
		    root.gotoAndStop(21); 
		    
		}, videoDuration6);
	}
	this.frame_21 = function() {
		this.stop();
		// 1. ทำให้เมาส์เปลี่ยนรูปเป็นรูปมือเมื่อชี้ที่ปุ่ม
		this.next_btn22.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.next_btn22.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.next_btn22.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.next_btn22.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(22);
		});
		
		// ==========================================
		// 2. โค้ดควบคุมปุ่ม back_btn15 (ไปเฟรมที่ 5)
		// ==========================================
		this.back_btn22.cursor = "pointer";
		
		// 2. ทำให้ปุ่มเปลี่ยนสถานะเมื่อเอาเมาส์วางและออก
		this.back_btn22.on("mouseover", function() {
		    this.gotoAndStop(1); // ไปเฟรมที่ 2 (index 1)
		});
		
		this.back_btn22.on("mouseout", function() {
		    this.gotoAndStop(0); // กลับเฟรมที่ 1 (index 0)
		});
		
		// 3. คำสั่งเมื่อคลิกปุ่ม
		
		this.back_btn22.on("click", function() {
		    // ใส่คำสั่งที่ต้องการที่นี่ เช่น
		    this.parent.gotoAndStop(16);
		});
	}
	this.frame_22 = function() {
		this.stop();
		
		var root = this;
		
		// 📲 เปิดระบบ Touch สำหรับ iPad/Tablet
		if (createjs.Touch.isSupported()) {
		    createjs.Touch.enable(stage, true, false);
		}
		
		// ==========================================
		// 🎯 1. ตั้งค่าเฉลยขั้นตอน ISBAR (target_1 ถึง target_9)
		// ==========================================
		var correctPairs = {
		    "target_1": "drag_I",
		    "target_2": "drag_C",
		    "target_3": "drag_A",
		    "target_4": "drag_D",
		    "target_5": "drag_F",
		    "target_6": "drag_J",
		    "target_7": "drag_B",
		    "target_8": "drag_H",
		    "target_9": "drag_G"
		};
		
		var totalPairs = 9;
		var dragNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		var hearts = [root.heart_1, root.heart_2, root.heart_3];
		var lives = 3;
		
		// 🎬 ซ่อน / ตั้งค่าเริ่มต้นของ Movie Clip "congrate" และข้อความ "warning_txt"
		if (root.congrate) {
		    root.congrate.visible = false;
		    root.congrate.stop();
		}
		
		if (root.warning_txt) {
		    root.warning_txt.visible = false;
		}
		
		// 📐 ฟังก์ชันคืนค่า Target ทุกช่องให้กลับมาเป็นปกติ (Scale 1:1 และแสดงผล)
		function resetAllTargets() {
		    for (var i = 1; i <= totalPairs; i++) {
		        var t = root["target_" + i];
		        if (t) {
		            t.scaleX = 1;
		            t.scaleY = 1;
		            t.visible = true;
		        }
		    }
		}
		
		// 🔘 ฟังก์ชันจัดการสถานะปุ่มกดตามเงื่อนไขใหม่
		function setButtonState(state) {
		    // ซ่อนปุ่มทั้งหมดก่อนแล้วค่อยเปิดตาม state
		    if (root.submit_btn3) root.submit_btn3.visible = false;
		    if (root.reset_btn) root.reset_btn.visible = false;
		    if (root.solution_btn) root.solution_btn.visible = false;
		    if (root.continue_btn23) root.continue_btn23.visible = false;
		
		    if (state === 'start') {
		        if (root.submit_btn3) { root.submit_btn3.visible = true; root.submit_btn3.cursor = "pointer"; }
		    } 
		    else if (state === 'wrong_try') {
		        // ตอบผิด (ยังมีชีวิตเหลือ) -> โชว์เฉพาะ reset
		        if (root.reset_btn) { root.reset_btn.visible = true; root.reset_btn.cursor = "pointer"; }
		    } 
		    else if (state === 'game_over') {
		        // ครบ 3 ครั้งแล้วยังผิด -> โชว์เฉพาะ solution
		        if (root.solution_btn) { root.solution_btn.visible = true; root.solution_btn.cursor = "pointer"; }
		    } 
		    else if (state === 'win') {
		        // ตอบถูก -> โชว์ solution (หรือ continue ตามที่มีบนสเตจ)
		        if (root.solution_btn) { root.solution_btn.visible = true; root.solution_btn.cursor = "pointer"; }
		        if (root.continue_btn23) { root.continue_btn23.visible = true; root.continue_btn23.cursor = "pointer"; }
		    }
		}
		
		// ตั้งค่าปุ่มเริ่มต้น
		setButtonState('start');
		
		// ตั้งค่าหัวใจสีแดงตั้งต้น
		hearts.forEach(function(h) {
		    if (h) h.gotoAndStop(0);
		});
		
		// ==========================================
		// 📦 2. ระบบ Drag & Drop + Real-time Target Reset
		// ==========================================
		dragNames.forEach(function(letter) {
		    var drag = root["drag_" + letter];
		    if (!drag) return;
		
		    drag.stop();
		    drag.gotoAndStop(0);
		    drag.cursor = "pointer";
		    drag.visible = true;
		    
		    drag.startX = drag.x;
		    drag.startY = drag.y;
		    drag.currentSlot = null;
		
		    drag.removeAllEventListeners("mousedown");
		    drag.removeAllEventListeners("pressmove");
		    drag.removeAllEventListeners("pressup");
		
		    // 👆 จังหวะเริ่มแตะ/คลิกการ์ดเพื่อลาก
		    drag.on("mousedown", function(evt) {
		        if (lives <= 0) return;
		        
		        // 🔄 คืนค่า target ช่องเดิมถ้าย้ายการ์ดออกมา
		        if (this.currentSlot) {
		            var oldTarget = root[this.currentSlot];
		            if (oldTarget) {
		                oldTarget.scaleX = 1;
		                oldTarget.scaleY = 1;
		                oldTarget.visible = true;
		            }
		            this.currentSlot = null;
		        }
		
		        this.offset = {
		            x: evt.stageX / stage.scaleX - this.x,
		            y: evt.stageY / stage.scaleY - this.y
		        };
		        root.addChild(this);
		        this.gotoAndStop(0);
		    });
		
		    drag.on("pressmove", function(evt) {
		        if (lives <= 0) return;
		        this.x = (evt.stageX / stage.scaleX) - this.offset.x;
		        this.y = (evt.stageY / stage.scaleY) - this.offset.y;
		    });
		
		    // ✋ จังหวะปล่อยการ์ด
		    drag.on("pressup", function(evt) {
		        if (lives <= 0) return;
		
		        var droppedTarget = null;
		        var closestDistance = 9999;
		        var maxSnapRadius = 65;
		
		        for (var i = 1; i <= totalPairs; i++) {
		            var target = root["target_" + i];
		            if (!target) continue;
		
		            var dx = this.x - target.x;
		            var dy = this.y - target.y;
		            var distance = Math.sqrt(dx * dx + dy * dy);
		
		            if (distance < maxSnapRadius && distance < closestDistance) {
		                closestDistance = distance;
		                droppedTarget = target;
		            }
		        }
		
		        if (droppedTarget) {
		            dragNames.forEach(function(otherLetter) {
		                var otherDrag = root["drag_" + otherLetter];
		                if (otherDrag && otherDrag !== drag && otherDrag.currentSlot === droppedTarget.name) {
		                    otherDrag.x = otherDrag.startX;
		                    otherDrag.y = otherDrag.startY;
		                    otherDrag.currentSlot = null;
		                    otherDrag.gotoAndStop(0);
		                }
		            });
		
		            droppedTarget.scaleX = 0;
		            droppedTarget.scaleY = 0;
		
		            this.x = droppedTarget.x;
		            this.y = droppedTarget.y;
		            this.currentSlot = droppedTarget.name;
		        } else {
		            this.x = this.startX;
		            this.y = this.startY;
		            this.currentSlot = null;
		        }
		    });
		});
		
		// ==========================================
		// 🚀 3. ปุ่ม Submit (submit_btn3) - ตรวจคำตอบ + จัดการ UI ตามเงื่อนไข
		// ==========================================
		if (root.submit_btn3) {
		    root.submit_btn3.removeAllEventListeners("click");
		    root.submit_btn3.on("click", function() {
		        if (lives <= 0) return;
		
		        var allCorrect = true;
		        var correctPlacedCount = 0;
		
		        for (var i = 1; i <= totalPairs; i++) {
		            var targetName = "target_" + i;
		            var expectedDragName = correctPairs[targetName];
		            
		            var currentDragInTarget = null;
		            dragNames.forEach(function(letter) {
		                var d = root["drag_" + letter];
		                if (d && d.currentSlot === targetName) {
		                    currentDragInTarget = d;
		                }
		            });
		
		            if (currentDragInTarget) {
		                if (currentDragInTarget.name === expectedDragName) {
		                    currentDragInTarget.gotoAndStop(0);
		                    correctPlacedCount++;
		                } else {
		                    currentDragInTarget.gotoAndStop(1); // กรอบแดง
		                    allCorrect = false;
		                }
		            } else {
		                allCorrect = false;
		            }
		        }
		
		        // ซ่อน drag ที่ไม่ได้ถูกวาง
		        dragNames.forEach(function(letter) {
		            var d = root["drag_" + letter];
		            if (d && d.currentSlot === null) {
		                d.visible = false;
		            }
		        });
		
		        // 🎯 1. กรณีตอบถูกครบถ้วน -> โชว์ solution + congrate
		        if (allCorrect && correctPlacedCount === totalPairs) {
		            if (root.warning_txt) root.warning_txt.visible = false;
		            if (root.congrate) {
		                root.congrate.visible = true;
		                root.congrate.gotoAndPlay(0);
		            }
		            setButtonState('win');
		        } 
		        // 💔 2. กรณีตอบผิด / วางไม่ครบ
		        else {
		            lives--;
		            
		            if (lives == 2 && root.heart_3) root.heart_3.gotoAndStop(1);
		            if (lives == 1 && root.heart_2) root.heart_2.gotoAndStop(1);
		            if (lives == 0 && root.heart_1) root.heart_1.gotoAndStop(1);
		
		            // โชว์ข้อความเตือนเสมอเมื่อตอบผิด
		            if (root.warning_txt) root.warning_txt.visible = true;
		
		            // เช็กชีวิตว่าเหลือเท่าไหร่
		            if (lives > 0) {
		                // ยังไม่ครบ 3 ครั้ง -> ขึ้น reset + warning_txt
		                setButtonState('wrong_try');
		            } else {
		                // ทำครบ 3 ครั้งแล้วยังผิด -> ขึ้น solution + warning_txt
		                setButtonState('game_over');
		            }
		        }
		    });
		}
		
		// ==========================================
		// 🔄 4. ปุ่ม Reset (คืนค่า Drag, Target และซ่อน warning_txt)
		// ==========================================
		if (root.reset_btn) {
		    root.reset_btn.removeAllEventListeners("click");
		    root.reset_btn.on("click", function() {
		        resetAllTargets();
		
		        if (root.warning_txt) root.warning_txt.visible = false;
		
		        dragNames.forEach(function(letter) {
		            var drag = root["drag_" + letter];
		            if (!drag) return;
		
		            drag.x = drag.startX;
		            drag.y = drag.startY;
		            drag.currentSlot = null;
		            drag.visible = true;
		            drag.gotoAndStop(0);
		        });
		
		        setButtonState('start');
		    });
		}
		
		// ==========================================
		// 💡 5. ปุ่ม Solution (ดูเฉลย + ข้ามไปเฟรมที่ 24)
		// ==========================================
		if (root.solution_btn) {
		    root.solution_btn.removeAllEventListeners("click");
		    root.solution_btn.on("click", function() {
		        if (root.warning_txt) root.warning_txt.visible = false;
		
		        for (var i = 1; i <= totalPairs; i++) {
		            if (root["target_" + i]) {
		                root["target_" + i].scaleX = 0;
		                root["target_" + i].scaleY = 0;
		            }
		        }
		
		        dragNames.forEach(function(letter) {
		            var drag = root["drag_" + letter];
		            if (drag) {
		                drag.x = drag.startX;
		                drag.y = drag.startY;
		                drag.currentSlot = null;
		                drag.visible = false;
		                drag.gotoAndStop(0);
		            }
		        });
		
		        for (var targetName in correctPairs) {
		            var target = root[targetName];
		            var correctDragName = correctPairs[targetName];
		            var drag = root[correctDragName];
		
		            if (target && drag) {
		                drag.visible = true;
		                drag.x = target.x;
		                drag.y = target.y;
		                drag.currentSlot = targetName;
		                drag.gotoAndStop(0);
		            }
		        }
		
		        root.gotoAndStop(23); 
		    });
		}
		
		// ==========================================
		// ➡️ 6. ปุ่ม continue_btn23 (ไปต่อเฟรมที่ 24)
		// ==========================================
		if (root.continue_btn23) {
		    root.continue_btn23.removeAllEventListeners("click");
		    root.continue_btn23.on("click", function() {
		        root.gotoAndStop(23);
		    });
		}
	}
	this.frame_23 = function() {
		this.stop();
		
		var root = this;
		
		// 📲 เปิดระบบ Touch สำหรับ iPad/Tablet
		if (createjs.Touch.isSupported()) {
		    createjs.Touch.enable(stage, true, false);
		}
		
		// ==========================================
		// 🔘 1. ปุ่ม info_btn24 -> ไปยังเฟรมที่ 25
		// ==========================================
		if (root.info_btn24) {
		    root.info_btn24.cursor = "pointer";
		    root.info_btn24.removeAllEventListeners("click");
		    root.info_btn24.on("click", function() {
		        root.gotoAndStop(24); // Index 24 = เฟรมที่ 25 ใน Adobe Animate
		    });
		}
		
		// ==========================================
		// ➡️ 2. ปุ่ม next_btn24 -> ไปยังเฟรมที่ 26
		// ==========================================
		if (root.next_btn24) {
		    root.next_btn24.cursor = "pointer";
		    root.next_btn24.removeAllEventListeners("click");
		    root.next_btn24.on("click", function() {
		        root.gotoAndStop(25); // Index 25 = เฟรมที่ 26 ใน Adobe Animate
		    });
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		var root = this;
		
		// 📲 เปิดระบบ Touch สำหรับ iPad/Tablet
		if (createjs.Touch.isSupported()) {
		    createjs.Touch.enable(stage, true, false);
		}
		
		// ==========================================
		// 📜 1. ระบบ Scroll View + Scrollbar (แบบที่น้าคุ้นเคย)
		// ==========================================
		var content = root.content_mc;
		var scrollBar = root.scroll_bar2;
		
		if (content) {
		    var startY = content.y;
		    var contentBounds = content.getBounds();
		    var contentHeight = contentBounds ? contentBounds.height * content.scaleY : content.nominalBounds.height * content.scaleY;
		
		    // 📐 ความสูงกรอบมองเห็น (Viewport Height)
		    var maskViewHeight = 500; 
		
		    // ระยะล่างสุดที่ Content จะขึ้นไปได้
		    var maxContentScroll = contentHeight - maskViewHeight;
		    if (maxContentScroll < 0) maxContentScroll = 0;
		    var minY = startY - maxContentScroll;
		
		    // 📌 ตั้งค่า Scrollbar (ถ้าระบบมี scroll_bar2 บนสเตจ)
		    var barStartY = 0;
		    var barMaxScroll = 0;
		
		    if (scrollBar) {
		        barStartY = scrollBar.y;
		        
		        // 🎯 ระยะทางสูงสุดที่ Scrollbar จะวิ่งลงมาด้านล่าง (px) 
		        // ถ้ารรู้สึกว่ามันทะลุขอบล่าง สามารถปรับลดตัวเลข 400 ลงมา เช่น 300 หรือ 320 ได้เลยครับ
		        barMaxScroll = 400; 
		
		        scrollBar.cursor = "pointer";
		    }
		
		    // 🔄 ฟังก์ชันอัปเดตตำแหน่ง Scrollbar ให้สัมพันธ์กับ Content
		    function updateScrollBar() {
		        if (!scrollBar || maxContentScroll <= 0) return;
		        var progress = (startY - content.y) / maxContentScroll;
		        scrollBar.y = barStartY + (progress * barMaxScroll);
		    }
		
		    // 🔄 ฟังก์ชันอัปเดตตำแหน่ง Content ให้สัมพันธ์กับ Scrollbar
		    function updateContentFromBar() {
		        if (!scrollBar || barMaxScroll <= 0) return;
		        var progress = (scrollBar.y - barStartY) / barMaxScroll;
		        content.y = startY - (progress * maxContentScroll);
		    }
		
		    // 🖐️ Event 1: ลากที่ตัว Content โดยตรง
		    var isDraggingContent = false;
		    var lastContentY = 0;
		
		    content.cursor = "pointer";
		    content.removeAllEventListeners();
		
		    content.on("mousedown", function(evt) {
		        isDraggingContent = true;
		        lastContentY = evt.stageY / stage.scaleY;
		    });
		
		    content.on("pressmove", function(evt) {
		        if (!isDraggingContent) return;
		        var currentY = evt.stageY / stage.scaleY;
		        var deltaY = currentY - lastContentY;
		        lastContentY = currentY;
		
		        var nextY = content.y + deltaY;
		        if (nextY > startY) nextY = startY;
		        if (nextY < minY) nextY = minY;
		
		        content.y = nextY;
		        updateScrollBar();
		    });
		
		    content.on("pressup", function() {
		        isDraggingContent = false;
		    });
		
		    // 🎛️ Event 2: ลากที่ตัว scrollBar
		    if (scrollBar) {
		        var isDraggingBar = false;
		        var lastBarY = 0;
		
		        scrollBar.removeAllEventListeners();
		
		        scrollBar.on("mousedown", function(evt) {
		            isDraggingBar = true;
		            lastBarY = evt.stageY / stage.scaleY;
		        });
		
		        scrollBar.on("pressmove", function(evt) {
		            if (!isDraggingBar) return;
		            var currentY = evt.stageY / stage.scaleY;
		            var deltaY = currentY - lastBarY;
		            lastBarY = currentY;
		
		            var nextY = scrollBar.y + deltaY;
		            if (nextY < barStartY) nextY = barStartY;
		            if (nextY > barStartY + barMaxScroll) nextY = barStartY + barMaxScroll;
		
		            scrollBar.y = nextY;
		            updateContentFromBar();
		        });
		
		        scrollBar.on("pressup", function() {
		            isDraggingBar = false;
		        });
		    }
		
		    // 🖱️ Event 3: ล้อหมุนเมาส์ (Mouse Wheel)
		    function onMouseWheel(evt) {
		        var deltaY = -evt.deltaY;
		        var nextY = content.y + (deltaY * 0.5);
		
		        if (nextY > startY) nextY = startY;
		        if (nextY < minY) nextY = minY;
		
		        content.y = nextY;
		        updateScrollBar();
		    }
		
		    window.removeEventListener("wheel", onMouseWheel);
		    window.addEventListener("wheel", onMouseWheel, { passive: true });
		}
		
		// ==========================================
		// 🔙 2. ปุ่ม esc_btn25 -> ย้อนกลับไปเฟรมที่ 24 (Index 23)
		// ==========================================
		if (root.esc_btn25) {
		    root.esc_btn25.cursor = "pointer";
		    root.esc_btn25.removeAllEventListeners("click");
		    root.esc_btn25.on("click", function() {
		        window.removeEventListener("wheel", onMouseWheel);
		        root.gotoAndStop(23); // กลับเฟรม 24
		    });
		}
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
		
		var root = this;
		
		// 📲 เปิดระบบ Touch สำหรับ iPad/Tablet
		if (createjs.Touch.isSupported()) {
		    createjs.Touch.enable(stage, true, false);
		}
		
		// ==========================================
		// 📢 ข้อความแจ้งเตือนก่อนปิดโปรแกรม (หน้าสุดท้ายของการเรียนรู้)
		// ==========================================
		var endNoticeId = "end_training_notice";
		if (dom_overlay_container && !document.getElementById(endNoticeId)) {
		    var endNotice = document.createElement("div");
		    endNotice.id = endNoticeId;
		    endNotice.style.cssText = "position:absolute; left:60px; top:110px; width:1160px; padding:24px 32px; box-sizing:border-box; background:rgba(0,0,0,0.75); color:#FFFFFF; font-family:'Google Sans', Tahoma, sans-serif; font-size:22px; line-height:1.6; text-align:center; border-radius:16px; pointer-events:none;";
		    endNotice.textContent = "สิ้นสุดการเรียนรู้แล้ว กรุณาถ่าย video หรือบันทึกเสียงของการขอคำปรึกษาจากโจทย์ที่แนบให้ ด้วยโทรศัพท์หรือกล้องของท่านเอง ให้ได้ยินเสียงของการปรึกษา แต่ไม่เห็นใบหน้าหรือสิ่งใดที่จะระบุตัวตนของท่าน";
		    dom_overlay_container.appendChild(endNotice);
		}

		// ==========================================
		// 🏠 ปุ่ม home_no -> วนกลับไปหน้าแรก (เฟรมที่ 1 / Index 0)
		// ==========================================
		if (root.home_no) {
		    root.home_no.cursor = "pointer";
		    root.home_no.removeAllEventListeners("click");
		    root.home_no.on("click", function() {
		        var notice = document.getElementById(endNoticeId);
		        if (notice && notice.parentNode) notice.parentNode.removeChild(notice);
		        root.gotoAndStop(0); // Index 0 = เฟรมที่ 1 ใน Adobe Animate
		    });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1));

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
	this.next_btn14.setTransform(641,438);

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

	this.esc_btn18 = new lib.return_18_1();
	this.esc_btn18.name = "esc_btn18";
	this.esc_btn18.setTransform(242.1,89.6);
	new cjs.ButtonHelper(this.esc_btn18, 0, 1, 1);

	this.next_btn18 = new lib.con3();
	this.next_btn18.name = "next_btn18";
	this.next_btn18.setTransform(660.5,638.25);

	this.scroll_bar = new lib.scroll_bar();
	this.scroll_bar.name = "scroll_bar";
	this.scroll_bar.setTransform(1106.5,166.1);

	this.next_btn20 = new lib._continue();
	this.next_btn20.name = "next_btn20";
	this.next_btn20.setTransform(640.75,438);

	this.back_btn22 = new lib.back();
	this.back_btn22.name = "back_btn22";
	this.back_btn22.setTransform(632.05,518.45);

	this.next_btn22 = new lib.start_m();
	this.next_btn22.name = "next_btn22";
	this.next_btn22.setTransform(649.45,454.85);

	this.congrate = new lib.congrate();
	this.congrate.name = "congrate";
	this.congrate.setTransform(642.05,509.3);

	this.warning_txt = new lib.notcorrect();
	this.warning_txt.name = "warning_txt";
	this.warning_txt.setTransform(638.2,509.75);

	this.solution_btn = new lib.con_3();
	this.solution_btn.name = "solution_btn";
	this.solution_btn.setTransform(645.3,588.85,0.7179,0.7173,0,0,0,0.4,-0.1);
	new cjs.ButtonHelper(this.solution_btn, 0, 1, 2, false, new lib.con_3(), 3);

	this.reset_btn = new lib.Symbol1();
	this.reset_btn.name = "reset_btn";
	this.reset_btn.setTransform(642.6,603.95,0.3427,0.3421,0,0,0,1.4,1);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.submit_btn3 = new lib.submit_btn3();
	this.submit_btn3.name = "submit_btn3";
	this.submit_btn3.setTransform(1040,416.45,0.8357,0.8355,0,0,0,0.6,-0.4);
	new cjs.ButtonHelper(this.submit_btn3, 0, 1, 1);

	this.next_btn24 = new lib._continue();
	this.next_btn24.name = "next_btn24";
	this.next_btn24.setTransform(1092,644);

	this.info_btn24 = new lib.info_btn_1();
	this.info_btn24.name = "info_btn24";
	this.info_btn24.setTransform(1175.65,67.15,0.7229,0.7229,0,0,0,0.4,0.5);
	new cjs.ButtonHelper(this.info_btn24, 0, 1, 1);

	this.scroll_bar2 = new lib.scroll_bar();
	this.scroll_bar2.name = "scroll_bar2";
	this.scroll_bar2.setTransform(1107.5,172.2);

	this.esc_btn25 = new lib.esc();
	this.esc_btn25.name = "esc_btn25";
	this.esc_btn25.setTransform(1069.5,98.25);
	new cjs.ButtonHelper(this.esc_btn25, 0, 1, 1);

	this.home_no = new lib.ไม่ใช่();
	this.home_no.name = "home_no";
	this.home_no.setTransform(640.75,474.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yes_btn},{t:this.no_btn}]}).to({state:[]},1).to({state:[{t:this.press_start}]},1).to({state:[]},1).to({state:[{t:this.next_btn5}]},1).to({state:[{t:this.patient_btn},{t:this.com_btn},{t:this.paper_btn},{t:this.monitor_btn},{t:this.nurse_btn},{t:this.fam_btn},{t:this.next_btn6}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[{t:this.esc_btn}]},1).to({state:[]},1).to({state:[{t:this.next_btn14}]},1).to({state:[]},1).to({state:[{t:this.next_btn16},{t:this.back_btn16}]},1).to({state:[{t:this.submit_btn17},{t:this.info_btn}]},1).to({state:[{t:this.scroll_bar},{t:this.next_btn18},{t:this.esc_btn18}]},1).to({state:[]},1).to({state:[{t:this.next_btn20}]},1).to({state:[]},1).to({state:[{t:this.next_btn22},{t:this.back_btn22}]},1).to({state:[{t:this.submit_btn3},{t:this.reset_btn},{t:this.solution_btn},{t:this.warning_txt},{t:this.congrate}]},1).to({state:[{t:this.info_btn24},{t:this.next_btn24}]},1).to({state:[{t:this.esc_btn25},{t:this.scroll_bar2}]},1).to({state:[]},1).to({state:[{t:this.home_no}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.esc_btn).wait(6).to({_off:false},0).wait(3).to({scaleX:1.0038,scaleY:1.0038,x:950,y:80},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({x:1200,y:117.35},0).to({_off:true},1).wait(15));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("Eg6WArmMAAAhXLMB0sAAAMAAABXLg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg87AuGMAAAhcLMB53AAAMAAABcLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:656.45,y:325.1}).wait(1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_24,x:648,y:376.475}).wait(3));

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

	this.content_mc = new lib.content_mc();
	this.content_mc.name = "content_mc";
	this.content_mc.setTransform(269.15,65.9);

	var maskedShapeInstanceList = [this.score_txt,this.table_mc,this.content_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score_txt}]},16).to({state:[{t:this.table_mc}]},1).to({state:[]},1).to({state:[{t:this.content_mc}]},6).to({state:[]},1).wait(2));

	// drag
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(695.05,97.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(154.3,93.7,0.5,0.5);

	this.target_9 = new lib.target();
	this.target_9.name = "target_9";
	this.target_9.setTransform(752.15,317.3,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_8 = new lib.target();
	this.target_8.name = "target_8";
	this.target_8.setTransform(752.15,247.85,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_7 = new lib.target();
	this.target_7.name = "target_7";
	this.target_7.setTransform(752.15,177.75,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_6 = new lib.target();
	this.target_6.name = "target_6";
	this.target_6.setTransform(752.15,108.65,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_5 = new lib.target();
	this.target_5.name = "target_5";
	this.target_5.setTransform(208.2,386.5,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_4 = new lib.target();
	this.target_4.name = "target_4";
	this.target_4.setTransform(208.2,317.3,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_3 = new lib.target();
	this.target_3.name = "target_3";
	this.target_3.setTransform(208.2,247.85,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_2 = new lib.target();
	this.target_2.name = "target_2";
	this.target_2.setTransform(208.2,177.75,0.9167,0.9166,0,0,0,0.1,0.1);

	this.target_1 = new lib.target();
	this.target_1.name = "target_1";
	this.target_1.setTransform(208.2,108.65,0.9167,0.9166,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.target_1},{t:this.target_2},{t:this.target_3},{t:this.target_4},{t:this.target_5},{t:this.target_6},{t:this.target_7},{t:this.target_8},{t:this.target_9},{t:this.instance_1},{t:this.instance}]},22).to({state:[]},1).wait(4));

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

	this.drag_J = new lib.J_1();
	this.drag_J.name = "drag_J";
	this.drag_J.setTransform(815.35,541.95,0.9542,0.9537,0,0,0,1.2,1.1);

	this.drag_I = new lib.I_1();
	this.drag_I.name = "drag_I";
	this.drag_I.setTransform(401.05,548.95,0.9542,0.9537,0,0,0,1.2,1.1);

	this.drag_H = new lib.H_1();
	this.drag_H.name = "drag_H";
	this.drag_H.setTransform(106.2,547.55,0.9542,0.9537,0,0,0,1.3,0.9);

	this.drag_G = new lib.G_1();
	this.drag_G.name = "drag_G";
	this.drag_G.setTransform(832.7,618.15,0.9542,0.9537,0,0,0,0.6,0.7);

	this.drag_F = new lib.F_1();
	this.drag_F.name = "drag_F";
	this.drag_F.setTransform(534.1,615.5,0.9542,0.9537,0,0,0,1.2,0.5);

	this.drag_E = new lib.E_1();
	this.drag_E.name = "drag_E";
	this.drag_E.setTransform(192.4,616.5,0.9542,0.9537,0,0,0,1.4,0.7);

	this.drag_D = new lib.D_1();
	this.drag_D.name = "drag_D";
	this.drag_D.setTransform(906.95,479.65,0.9542,0.9537,0,0,0,1.3,1);

	this.drag_C = new lib.C();
	this.drag_C.name = "drag_C";
	this.drag_C.setTransform(631.25,479.75,0.9542,0.9537,0,0,0,1.1,1);

	this.drag_B = new lib.B_1();
	this.drag_B.name = "drag_B";
	this.drag_B.setTransform(325.1,477.45,0.9542,0.9537,0,0,0,1.3,0.8);

	this.drag_A = new lib.A_1();
	this.drag_A.name = "drag_A";
	this.drag_A.setTransform(104.45,477.6,0.9542,0.9537,0,0,0,1.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.choice_1},{t:this.choice_2},{t:this.choice_3},{t:this.choice_4},{t:this.choice_5},{t:this.choice_6},{t:this.choice_7},{t:this.choice_8},{t:this.choice_9},{t:this.choice_10},{t:this.choice_11},{t:this.choice_12},{t:this.choice_13},{t:this.choice_14},{t:this.choice_15},{t:this.choice_16},{t:this.choice_17},{t:this.choice_18},{t:this.choice_19},{t:this.choice_20}]},16).to({state:[]},1).to({state:[{t:this.drag_A},{t:this.drag_B},{t:this.drag_C},{t:this.drag_D},{t:this.drag_E},{t:this.drag_F},{t:this.drag_G},{t:this.drag_H},{t:this.drag_I},{t:this.drag_J}]},5).to({state:[]},1).wait(4));

	// Graphics
	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(417.75,363.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(813.3,363.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(320.5,139.55,0.5,0.5);

	this.intro_video = new lib.an_Video({'id': 'intro_video', 'src':'videos/All_intro_cut.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video.name = "intro_video";
	this.intro_video.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_5 = new lib.Info();

	this.intro_video2 = new lib.an_Video({'id': 'intro_video2', 'src':'videos/M1_into.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.intro_video2.name = "intro_video2";
	this.intro_video2.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(243,10.15,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_6();
	this.instance_7.setTransform(88,9.45,0.5,0.5);

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
	this.computer.setTransform(655.6,386.95,1.11,2.6308,0,0,0,200.8,150.5);

	this.refer = new lib.an_Video({'id': 'refer', 'src':'videos/refer.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.refer.name = "refer";
	this.refer.setTransform(654.7,385.65,1.11,2.631,0,0,0,200,150);

	this.monitor = new lib.an_Video({'id': 'monitor', 'src':'videos/monitor.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.monitor.name = "monitor";
	this.monitor.setTransform(640,364.95,2.49,1.8675,0,0,0,200.2,149.9);

	this.intro_video3 = new lib.an_Video({'id': 'intro_video3', 'src':'videos/M2-info.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video3.name = "intro_video3";
	this.intro_video3.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_8 = new lib.M21();

	this.instance_9 = new lib.M2_info();

	this.intro_video4 = new lib.an_Video({'id': 'intro_video4', 'src':'videos/M2-into.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video4.name = "intro_video4";
	this.intro_video4.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.instance_10 = new lib.M23();

	this.instance_11 = new lib.M2();
	this.instance_11.setTransform(0,1);

	this.instance_12 = new lib.Artboard1();
	this.instance_12.setTransform(0,0,0.6667,0.6667);

	this.instance_13 = new lib.down();
	this.instance_13.setTransform(-373,-366,1.0708,1.0709);

	this.instance_14 = new lib.info();
	this.instance_14.setTransform(0,0,0.6667,0.6667);

	this.intro_video5 = new lib.an_Video({'id': 'intro_video5', 'src':'videos/M3_info2.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video5.name = "intro_video5";
	this.intro_video5.setTransform(640.75,360,3.2,2.4,0,0,0,200,150);

	this.instance_15 = new lib.M31();

	this.intro_video6 = new lib.an_Video({'id': 'intro_video6', 'src':'videos/M3-into2.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.intro_video6.name = "intro_video6";
	this.intro_video6.setTransform(640.75,360,3.2,2.4,0,0,0,200,150);

	this.instance_16 = new lib.M32();

	this.instance_17 = new lib.CachedBmp_10();
	this.instance_17.setTransform(154.3,32.15,0.5,0.5);

	this.heart_3 = new lib.heart();
	this.heart_3.name = "heart_3";
	this.heart_3.setTransform(1191.05,63.2,0.7968,0.797,0,0,0,2.1,1.7);

	this.heart_2 = new lib.heart();
	this.heart_2.name = "heart_2";
	this.heart_2.setTransform(1157.1,63.2,0.7968,0.797,0,0,0,2.1,1.7);

	this.heart_1 = new lib.heart();
	this.heart_1.name = "heart_1";
	this.heart_1.setTransform(1123.45,63.2,0.7968,0.797,0,0,0,2.2,1.7);

	this.instance_18 = new lib.Artboard2_s3();
	this.instance_18.setTransform(0,0,0.6667,0.6667);

	this.instance_19 = new lib.CachedBmp_12();
	this.instance_19.setTransform(1131,105.05,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_11();
	this.instance_20.setTransform(379,623.35,0.5,0.5);

	this.instance_21 = new lib.ISBAR();
	this.instance_21.setTransform(0,0,0.6667,0.6667);

	this.instance_22 = new lib.CachedBmp_15();
	this.instance_22.setTransform(242.8,285.85,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_14();
	this.instance_23.setTransform(536.75,575.2,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_13();
	this.instance_24.setTransform(123.85,143.9,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_16();
	this.instance_25.setTransform(225.2,207,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.intro_video}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.intro_video2}]},1).to({state:[]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.patient}]},1).to({state:[{t:this.family}]},1).to({state:[{t:this.nurse}]},1).to({state:[{t:this.computer}]},1).to({state:[{t:this.refer}]},1).to({state:[{t:this.monitor}]},1).to({state:[{t:this.intro_video3}]},1).to({state:[{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.intro_video4}]},1).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.intro_video5}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.intro_video6}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_18},{t:this.heart_1},{t:this.heart_2},{t:this.heart_3},{t:this.instance_17}]},1).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},1).to({state:[{t:this.instance_25}]},1).wait(1));

	// bg
	this.instance_26 = new lib.M1();
	this.instance_26.setTransform(1,0);

	this.instance_27 = new lib.ERroomcrop();
	this.instance_27.setTransform(50,37,0.8395,0.8395);

	this.instance_28 = new lib.refer_bg();
	this.instance_28.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_27}]},1).to({state:[]},1).to({state:[{t:this.instance_28}]},4).to({state:[]},1).to({state:[]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(267,-6,1416,1043.1);
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
		{src:"images/CachedBmp_13.png?1788401219961", id:"CachedBmp_13"},
		{src:"images/CachedBmp_6.png?1788401219961", id:"CachedBmp_6"},
		{src:"images/Artboard2.png?1788401219961", id:"Artboard2"},
		{src:"images/Artboard32.png?1788401219961", id:"Artboard32"},
		{src:"images/Demo5_atlas_1.png?1788401219925", id:"Demo5_atlas_1"},
		{src:"images/Demo5_atlas_2.png?1788401219925", id:"Demo5_atlas_2"},
		{src:"images/Demo5_atlas_3.png?1788401219925", id:"Demo5_atlas_3"},
		{src:"images/Demo5_atlas_4.png?1788401219926", id:"Demo5_atlas_4"},
		{src:"images/Demo5_atlas_5.png?1788401219926", id:"Demo5_atlas_5"},
		{src:"images/Demo5_atlas_6.png?1788401219926", id:"Demo5_atlas_6"},
		{src:"images/Demo5_atlas_7.png?1788401219926", id:"Demo5_atlas_7"},
		{src:"images/Demo5_atlas_8.png?1788401219927", id:"Demo5_atlas_8"},
		{src:"images/Demo5_atlas_9.png?1788401219927", id:"Demo5_atlas_9"},
		{src:"images/Demo5_atlas_10.png?1788401219927", id:"Demo5_atlas_10"},
		{src:"images/Demo5_atlas_11.png?1788401219927", id:"Demo5_atlas_11"},
		{src:"images/Demo5_atlas_12.png?1788401219927", id:"Demo5_atlas_12"},
		{src:"images/Demo5_atlas_13.png?1788401219927", id:"Demo5_atlas_13"},
		{src:"images/Demo5_atlas_14.png?1788401219927", id:"Demo5_atlas_14"},
		{src:"images/Demo5_atlas_15.png?1788401219927", id:"Demo5_atlas_15"},
		{src:"images/Demo5_atlas_16.png?1788401219927", id:"Demo5_atlas_16"},
		{src:"images/Demo5_atlas_17.png?1788401219927", id:"Demo5_atlas_17"},
		{src:"images/Demo5_atlas_18.png?1788401219927", id:"Demo5_atlas_18"},
		{src:"images/Demo5_atlas_19.png?1788401219927", id:"Demo5_atlas_19"},
		{src:"images/Demo5_atlas_20.png?1788401219927", id:"Demo5_atlas_20"},
		{src:"sounds/Audio_intro.mp3?1788401219961", id:"Audio_intro"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1788401219961", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1788401219961", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1788401219961", id:"an.Video"}
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
				// ponytail: cap cover-fit crop so UI placed close to the canvas edge (e.g. "PRESS START")
				// doesn't get cut off on wide/tall windows. Raise MAX_OVERSCALE only after checking every
				// frame's edge-adjacent elements at the wider aspect - see frame_1/press_start regression.
				var MAX_OVERSCALE = 1.06;
				sRatio = Math.min(Math.max(xRatio, yRatio), Math.min(xRatio, yRatio) * MAX_OVERSCALE);
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