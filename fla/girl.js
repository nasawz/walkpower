(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"girl_atlas_", frames: [[167,55,77,45],[150,220,93,114],[0,220,148,111],[167,0,82,53],[0,0,165,218]]}
];


// symbols:



(lib.girl_arm = function() {
	this.spriteSheet = ss["girl_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl_beg = function() {
	this.spriteSheet = ss["girl_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl_hair = function() {
	this.spriteSheet = ss["girl_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl_leg = function() {
	this.spriteSheet = ss["girl_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl_main = function() {
	this.spriteSheet = ss["girl_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl_main_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_main();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-109,165,218);


(lib.girl_leg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_leg();
	this.instance.parent = this;
	this.instance.setTransform(-41,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-26.5,82,53);


(lib.girl_hair_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_hair();
	this.instance.parent = this;
	this.instance.setTransform(-74,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-55.5,148,111);


(lib.girl_beg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_beg();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-57,93,114);


(lib.girl_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_arm();
	this.instance.parent = this;
	this.instance.setTransform(-66,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-17,77,45);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(this)
		window.girl = this
		console.log(window.girl)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// girl_main
	this.instance = new lib.girl_main_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-158},11).to({y:-160},12).wait(1));

	// girl_arm
	this.instance_1 = new lib.girl_arm_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-28.4},11).to({rotation:0,x:-29.4},12).wait(1));

	// girl_hair
	this.instance_2 = new lib.girl_hair_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1,y:-182.5},11).to({x:0,y:-184.5},12).wait(1));

	// girl_beg
	this.instance_3 = new lib.girl_beg_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-110.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// girl_leg
	this.instance_4 = new lib.girl_leg_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-269,177.5,269);


// stage content:
(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.girl = new lib.girl_1();
	this.girl.name = "girl";
	this.girl.parent = this;
	this.girl.setTransform(360.5,293.5,0.406,0.409);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(921.7,563.5,72,110);
// library properties:
lib.properties = {
	id: '00D549B7323B3543B5EFF739DCDA5AE2',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/girl_atlas_.png?1534405746358", id:"girl_atlas_"}
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
an.compositions['00D549B7323B3543B5EFF739DCDA5AE2'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;