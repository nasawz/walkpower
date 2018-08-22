(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"share_modal_atlas_", frames: [[571,674,199,49],[571,623,199,49],[0,0,674,621],[0,682,198,49],[200,682,198,49],[0,623,569,57]]}
];


// symbols:



(lib.continue_btn = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.continue_click_btn = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.share_bg = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.share_btn = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.share_click_btn = function() {
	this.spriteSheet = ss["share_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.share_text = function() {
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


(lib.shareshare_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.share_btn();
	this.instance.parent = this;
	this.instance.setTransform(-99,-24.5);

	this.instance_1 = new lib.share_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-24.5,198,49);


(lib.sharegoon_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.continue_btn();
	this.instance.parent = this;
	this.instance.setTransform(-99.5,-24.5);

	this.instance_1 = new lib.continue_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99.5,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-24.5,199,49);


(lib.shade_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade_mc, new cjs.Rectangle(-376,-668,752,1336), null);


// stage content:
(lib.share_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.shareModal_mc = this
		this.visible = false
	}
	this.frame_1 = function() {
		this.stop()
		this.sharebtn.addEventListener('click', window.onShare)
		this.goonbtn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 继续按钮
	this.goonbtn = new lib.sharegoon_btn();
	this.goonbtn.name = "goonbtn";
	this.goonbtn.parent = this;
	this.goonbtn.setTransform(514.5,854.5);
	new cjs.ButtonHelper(this.goonbtn, 0, 1, 2, false, new lib.sharegoon_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goonbtn).wait(2));

	// 分享按钮
	this.sharebtn = new lib.shareshare_btn();
	this.sharebtn.name = "sharebtn";
	this.sharebtn.parent = this;
	this.sharebtn.setTransform(237,854.5);
	new cjs.ButtonHelper(this.sharebtn, 0, 1, 2, false, new lib.shareshare_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sharebtn).wait(2));

	// 文字
	this.instance = new lib.share_text();
	this.instance.parent = this;
	this.instance.setTransform(96,633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 边框
	this.instance_1 = new lib.share_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,368);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// 遮罩
	this.instance_2 = new lib.shade_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.5,666.5,751,1335);
// library properties:
lib.properties = {
	id: 'A4A08D4ADA1C6B4AA79EF52784A40D89',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/share_modal_atlas_.png?1534822640310", id:"share_modal_atlas_"}
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
an.compositions['A4A08D4ADA1C6B4AA79EF52784A40D89'] = {
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