(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"getAward_modal_atlas_", frames: [[0,0,670,621],[0,623,477,56],[672,0,199,207],[672,303,183,45],[672,350,183,45],[672,256,183,45],[672,209,183,45]]}
];


// symbols:



(lib.getaward_bg = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.getaward_text = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.giftpackage = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.goreceive_btn = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.goreceive_click_btn = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.receivelater_btn = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.receivelater_click_btn = function() {
	this.spriteSheet = ss["getAward_modal_atlas_"];
	this.gotoAndStop(6);
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
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade, new cjs.Rectangle(-376,-668,752,1336), null);


(lib.receivelater_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.receivelater_btn();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-22.5);

	this.instance_1 = new lib.receivelater_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-91.5,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-22.5,183,45);


(lib.goreceive_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.goreceive_btn();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-22.5);

	this.instance_1 = new lib.goreceive_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-91.5,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-22.5,183,45);


// stage content:
(lib.getAward_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		
		window.getAwardModal_mc = this
	}
	this.frame_1 = function() {
		this.stop()
		var self = this
		
		//立即领取
		this.goreceive_btn.addEventListener('click',function(){
			self.visible = false
		})
		
		//稍后领取
		this.receivelater_btn.addEventListener('click',function(){
			self.visible = false
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 立即领取按钮
	this.goreceive_btn = new lib.goreceive_btn_1();
	this.goreceive_btn.name = "goreceive_btn";
	this.goreceive_btn.parent = this;
	this.goreceive_btn.setTransform(244.5,860.5);
	new cjs.ButtonHelper(this.goreceive_btn, 0, 1, 2, false, new lib.goreceive_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goreceive_btn).wait(2));

	// 文字
	this.receivelater_btn = new lib.receivelater_btn_1();
	this.receivelater_btn.name = "receivelater_btn";
	this.receivelater_btn.parent = this;
	this.receivelater_btn.setTransform(503.5,860.5);
	new cjs.ButtonHelper(this.receivelater_btn, 0, 1, 2, false, new lib.receivelater_btn_1(), 3);

	this.instance = new lib.getaward_text();
	this.instance.parent = this;
	this.instance.setTransform(145,652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.receivelater_btn}]}).wait(2));

	// 礼盒
	this.instance_1 = new lib.giftpackage();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,551);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// 边框
	this.instance_2 = new lib.getaward_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23,377);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// 遮罩
	this.instance_3 = new lib.shade();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.5,666.5,751,1335);
// library properties:
lib.properties = {
	id: '740BC4E87DE396459D5DEE7F661A6115',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/getAward_modal_atlas_.png?1534735860450", id:"getAward_modal_atlas_"}
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
an.compositions['740BC4E87DE396459D5DEE7F661A6115'] = {
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