(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"introduce_modal_atlas_", frames: [[707,634,151,37],[0,0,865,497],[0,499,705,140],[707,499,186,46],[707,547,186,46],[707,595,151,37]]}
];


// symbols:



(lib.弹框web_03 = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.introduce = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jieshao = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.togame_btn = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.togame_click_btn = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.www_03 = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
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


(lib.togame_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.togame_btn();
	this.instance.parent = this;
	this.instance.setTransform(-93,-23);

	this.instance_1 = new lib.togame_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-23,186,46);


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
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Ehdvg7XMC7fAAAMAAAB2vMi7fAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-601,-381,1202,762), null);


(lib.login_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.www_03();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.弹框web_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


// stage content:
(lib.introduce_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.introduceModal_mc = this
		
		this.login_btn.visible = false
		this.togame_btn.visible = false
		
		var self = this
		
		this.login_btn.addEventListener("click", function () {
			self.visible = false
			window.goLogin()
		})
		this.togame_btn.addEventListener("click", function () {
			self.visible = false
			window.goGame()
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 登录按钮
	this.login_btn = new lib.login_btn();
	this.login_btn.name = "login_btn";
	this.login_btn.parent = this;
	this.login_btn.setTransform(605.5,542.5,1.04,1.04);
	new cjs.ButtonHelper(this.login_btn, 0, 1, 2, false, new lib.login_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.login_btn).wait(1));

	// 进入游戏按钮
	this.togame_btn = new lib.togame_btn_1();
	this.togame_btn.name = "togame_btn";
	this.togame_btn.parent = this;
	this.togame_btn.setTransform(606,538);
	new cjs.ButtonHelper(this.togame_btn, 0, 1, 2, false, new lib.togame_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.togame_btn).wait(1));

	// 介绍
	this.instance = new lib.jieshao();
	this.instance.parent = this;
	this.instance.setTransform(252,353);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 边框
	this.instance_1 = new lib.introduce();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154,174);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 遮罩
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(600,381);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.5,380.5,1201,761);
// library properties:
lib.properties = {
	id: 'BDD2078F80939A4E8F224C7715B7D9EE',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/introduce_modal_atlas_.png?1535441137609", id:"introduce_modal_atlas_"}
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
an.compositions['BDD2078F80939A4E8F224C7715B7D9EE'] = {
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