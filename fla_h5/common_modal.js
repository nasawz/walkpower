(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"common_modal_atlas_", frames: [[621,670,183,45],[436,670,183,45],[0,0,661,621],[0,623,434,109],[622,623,184,45],[436,623,184,45]]}
];


// symbols:



(lib.cancel_btn = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cancelclicked = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.common_bg = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.common_text = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ok_btn = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.okclicked = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
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


(lib.commonok_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ok_btn();
	this.instance.parent = this;
	this.instance.setTransform(-92,-22.5);

	this.instance_1 = new lib.okclicked();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-22.5,184,45);


(lib.commoncancel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.cancel_btn();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-22.5);

	this.instance_1 = new lib.cancelclicked();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-91.5,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-22.5,183,45);


// stage content:
(lib.common_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.commonModal_mc = this
		this.visible = false
	}
	this.frame_1 = function() {
		this.okbtn.addEventListener('click', closeModalsWards)
		this.cancelbtn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 确定按钮
	this.okbtn = new lib.commonok_btn();
	this.okbtn.name = "okbtn";
	this.okbtn.parent = this;
	this.okbtn.setTransform(256,857.5);
	new cjs.ButtonHelper(this.okbtn, 0, 1, 2, false, new lib.commonok_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.okbtn).wait(2));

	// 取消按钮
	this.cancelbtn = new lib.commoncancel_btn();
	this.cancelbtn.name = "cancelbtn";
	this.cancelbtn.parent = this;
	this.cancelbtn.setTransform(506.5,857.5);
	new cjs.ButtonHelper(this.cancelbtn, 0, 1, 2, false, new lib.commoncancel_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cancelbtn).wait(2));

	// 文字
	this.instance = new lib.common_text();
	this.instance.parent = this;
	this.instance.setTransform(157,625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 边框
	this.instance_1 = new lib.common_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,376);

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
	id: '424D643DC6E8694CAC97F407BFC408F4',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/common_modal_atlas_.png?1534822580293", id:"common_modal_atlas_"}
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
an.compositions['424D643DC6E8694CAC97F407BFC408F4'] = {
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