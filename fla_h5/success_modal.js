(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"success_modal_atlas_", frames: [[0,652,551,486],[0,1259,205,50],[207,1259,205,50],[0,0,659,650],[0,1140,357,117]]}
];


// symbols:



(lib.giftspack = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lottery_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lottery_click_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.success_bg = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.success_text = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(4);
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


(lib.shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click', function () {})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade, new cjs.Rectangle(-375,-667,750,1334), null);


(lib.golottery_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lottery_btn();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-25);

	this.instance_1 = new lib.lottery_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-102.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-25,205,50);


// stage content:
(lib.success_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		
		window.successModal_mc = this
	}
	this.frame_1 = function() {
		this.stop()
		
		var self = this
		
		this.golottery_btn.addEventListener('click', function () {
			self.visible = false
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 按钮
	this.golottery_btn = new lib.golottery_btn();
	this.golottery_btn.name = "golottery_btn";
	this.golottery_btn.parent = this;
	this.golottery_btn.setTransform(373.5,882);
	new cjs.ButtonHelper(this.golottery_btn, 0, 1, 2, false, new lib.golottery_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.golottery_btn).wait(2));

	// 文字
	this.instance = new lib.success_text();
	this.instance.parent = this;
	this.instance.setTransform(199,705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 礼盒
	this.instance_1 = new lib.giftspack();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,411);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// 边框
	this.instance_2 = new lib.success_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,366);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("AhthtIDbAAIAADbIjbAAg");
	this.shape.setTransform(537.2,717.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AhtBuIAAjbIDbAAIAADbg");
	this.shape_1.setTransform(537.2,717.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(2));

	// 遮罩
	this.instance_3 = new lib.shade();
	this.instance_3.parent = this;
	this.instance_3.setTransform(376,666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape_2.setTransform(376,666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,665,752,1336);
// library properties:
lib.properties = {
	id: '81AF1909BEFC1D4B99DFC2D686A721FE',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/success_modal_atlas_.png?1534735842567", id:"success_modal_atlas_"}
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
an.compositions['81AF1909BEFC1D4B99DFC2D686A721FE'] = {
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