(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"modal_test_atlas_", frames: [[0,589,776,265],[0,0,964,587],[778,589,151,37],[778,628,151,37]]}
];


// symbols:



(lib._1活动期间每位会员初始有六次扔骰子的机会可以根据提示学习相关知识点后分享增加摇骰子次数2中奖的流量奖品将于 = function() {
	this.spriteSheet = ss["modal_test_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.info = function() {
	this.spriteSheet = ss["modal_test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.组12b = function() {
	this.spriteSheet = ss["modal_test_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.组12 = function() {
	this.spriteSheet = ss["modal_test_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.组12();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.组12b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


// stage content:
(lib.modal_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false
		
		window.modal_intro=this
	}
	this.frame_1 = function() {
		//this.visible=false
		this.stop()
		var self=this
		this.btn_close.addEventListener('click',function(){
			self.visible=false
			window.closeModals()
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_5
	this.btn_close = new lib.btn_close();
	this.btn_close.name = "btn_close";
	this.btn_close.parent = this;
	this.btn_close.setTransform(600.5,613.5);
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2, false, new lib.btn_close(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_close).wait(2));

	// Layer_4
	this.instance = new lib._1活动期间每位会员初始有六次扔骰子的机会可以根据提示学习相关知识点后分享增加摇骰子次数2中奖的流量奖品将于();
	this.instance.parent = this;
	this.instance.setTransform(213,295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");
	this.shape.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1200,760);
// library properties:
lib.properties = {
	id: '29581F431D944269B91C16911D5E4A1D',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/modal_test_atlas_.png?1534404029714", id:"modal_test_atlas_"}
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
an.compositions['29581F431D944269B91C16911D5E4A1D'] = {
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