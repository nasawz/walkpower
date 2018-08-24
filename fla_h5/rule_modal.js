(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rule_modal_atlas_", frames: [[183,1662,181,44],[0,1662,181,44],[0,0,650,1007],[0,1009,528,651]]}
];


// symbols:



(lib.close_btn = function() {
	this.spriteSheet = ss["rule_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.close_click_btn = function() {
	this.spriteSheet = ss["rule_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rule_bg = function() {
	this.spriteSheet = ss["rule_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rule_text = function() {
	this.spriteSheet = ss["rule_modal_atlas_"];
	this.gotoAndStop(3);
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
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade, new cjs.Rectangle(-375,-667,750,1334), null);


(lib.rule_close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.close_btn();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-22);

	this.instance_1 = new lib.close_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.5,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-22,181,44);


// stage content:
(lib.rule_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.ruleModal_mc = this
	}
	this.frame_1 = function() {
		this.stop()
		//console.log(this.ruleclose_btn)
		
		var self = this
		this.ruleclose_btn.addEventListener("click",function(){
			self.visible = false
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 按钮
	this.ruleclose_btn = new lib.rule_close_btn();
	this.ruleclose_btn.name = "ruleclose_btn";
	this.ruleclose_btn.parent = this;
	this.ruleclose_btn.setTransform(375,1098);
	new cjs.ButtonHelper(this.ruleclose_btn, 0, 1, 2, false, new lib.rule_close_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ruleclose_btn).wait(2));

	// 文字
	this.instance = new lib.rule_text();
	this.instance.parent = this;
	this.instance.setTransform(116,376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 边框
	this.instance_1 = new lib.rule_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,203);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// 遮罩
	this.instance_2 = new lib.shade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,667,1,1.005);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(375,664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374,663,752,1341);
// library properties:
lib.properties = {
	id: '8ED7382E148ED3418F4F68B1F66D30A0',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/rule_modal_atlas_.png?1535011823752", id:"rule_modal_atlas_"}
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
an.compositions['8ED7382E148ED3418F4F68B1F66D30A0'] = {
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