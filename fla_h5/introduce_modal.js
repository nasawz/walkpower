(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"introduce_modal_atlas_", frames: [[153,956,151,37],[0,0,623,619],[0,621,499,237],[0,860,186,46],[0,908,186,46],[0,956,151,37]]}
];


// symbols:



(lib.弹框web_03 = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.introduce_bg = function() {
	this.spriteSheet = ss["introduce_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.introduce_text = function() {
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


(lib.login_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.www_03();
	this.instance.parent = this;
	this.instance.setTransform(-93,-23);

	this.instance_1 = new lib.弹框web_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-23,151,37);


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
	this.login_btn.setTransform(395.1,913,1.2,1.2,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.login_btn, 0, 1, 2, false, new lib.login_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.login_btn).wait(1));

	// 进入游戏按钮
	this.togame_btn = new lib.togame_btn_1();
	this.togame_btn.name = "togame_btn";
	this.togame_btn.parent = this;
	this.togame_btn.setTransform(375,907);
	new cjs.ButtonHelper(this.togame_btn, 0, 1, 2, false, new lib.togame_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.togame_btn).wait(1));

	// 文字
	this.instance = new lib.introduce_text();
	this.instance.parent = this;
	this.instance.setTransform(128,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 边框
	this.instance_1 = new lib.introduce_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,414);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 遮罩
	this.instance_2 = new lib.shade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,667);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374,666,752,1336);
// library properties:
lib.properties = {
	id: 'C0EBBEE9ED317D469EBFA84CCE3C47E9',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/introduce_modal_atlas_.png?1535441382280", id:"introduce_modal_atlas_"}
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
an.compositions['C0EBBEE9ED317D469EBFA84CCE3C47E9'] = {
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