(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"share_modal_atlas_", frames: [[0,0,1200,760],[0,762,568,57],[570,762,156,37],[886,762,155,37],[728,762,156,37],[1043,762,155,37]]}
];


// symbols:



(lib.common = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.share_03 = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.share_06 = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.share_07 = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.share_09 = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.share_10 = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhdtA7YQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAMAAAh2rQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAMC7bAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABMAAAB2rQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1200,760), null);


(lib.shareshare_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.share_06();
	this.instance.parent = this;
	this.instance.setTransform(-76,-21);

	this.instance_1 = new lib.share_07();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-21,156,37);


(lib.shareModal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.common();
	this.instance.parent = this;
	this.instance.setTransform(-600,-380);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shareModal_mc, new cjs.Rectangle(-600,-380,1200,760), null);


(lib.sharegoon_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.share_09();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-19.5);

	this.instance_1 = new lib.share_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-19.5,156,37);


// stage content:
(lib.share_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.shareModal_mc = this
		this.visible = false
		this.sharebtn.addEventListener('click', window.onShare)
		this.goonbtn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.goonbtn = new lib.sharegoon_btn();
	this.goonbtn.name = "goonbtn";
	this.goonbtn.parent = this;
	this.goonbtn.setTransform(711.5,597.5);
	new cjs.ButtonHelper(this.goonbtn, 0, 1, 2, false, new lib.sharegoon_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goonbtn).wait(1));

	// Layer_5
	this.sharebtn = new lib.shareshare_btn();
	this.sharebtn.name = "sharebtn";
	this.sharebtn.parent = this;
	this.sharebtn.setTransform(497.5,598.5);
	new cjs.ButtonHelper(this.sharebtn, 0, 1, 2, false, new lib.shareshare_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sharebtn).wait(1));

	// Layer_4
	this.instance = new lib.share_03();
	this.instance.parent = this;
	this.instance.setTransform(324,370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.shareModal_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(600,380,1,1,0,0,0,600,380);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1200,760);
// library properties:
lib.properties = {
	id: 'DE7A436FCB583348BF6D4CDBCA55755A',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/share_modal_atlas_.png?1534753987444", id:"share_modal_atlas_"}
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
an.compositions['DE7A436FCB583348BF6D4CDBCA55755A'] = {
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