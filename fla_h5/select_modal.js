(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"select_modal_atlas_", frames: [[474,615,76,48],[905,507,90,111],[0,615,82,71],[809,229,161,202],[237,615,151,37],[84,615,151,37],[552,615,77,45],[810,507,93,114],[660,507,148,111],[390,615,82,53],[660,0,165,218],[0,0,658,613],[660,448,344,57],[827,0,149,227],[660,220,147,226]]}
];


// symbols:



(lib.boy_arm = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy_bag = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy_leg = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy_main = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn_ok = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btn_ok_down = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl_arm = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl_beg = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.girl_hair = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.girl_leg = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.girl_main = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.select_bg = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.select_text = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象 = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象1 = function() {
	this.spriteSheet = ss["select_modal_atlas_"];
	this.gotoAndStop(14);
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


(lib.mm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.矢量智能对象();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-113.5,149,227);


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


(lib.gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.矢量智能对象1();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-113,147,226);


(lib.btn_ok_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_ok();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.btn_ok_down();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtHSrMAAAglVIaPAAMAAAAlVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-119.4,168,239);


(lib.boy_main_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_main();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-101,161,202);


(lib.boy_leg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_leg();
	this.instance.parent = this;
	this.instance.setTransform(-41,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-71,82,71);


(lib.boy_bag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_bag();
	this.instance.parent = this;
	this.instance.setTransform(-45,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-55.5,90,111);


(lib.boy_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_arm();
	this.instance.parent = this;
	this.instance.setTransform(-38,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-24,76,48);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
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


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boy_main
	this.instance = new lib.boy_main_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.5,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-159},9).to({y:-161},10).wait(1));

	// boy_arm
	this.instance_1 = new lib.boy_arm_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40,-118,1,1,0,0,0,21,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:20.9,rotation:15,x:-40.1},9).to({regY:-0.1,rotation:0,x:-40,y:-118.1},10).wait(1));

	// boy_leg
	this.instance_2 = new lib.boy_leg_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-35.5,1,1,0,0,0,0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// boy_bag
	this.instance_3 = new lib.boy_bag_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-262,175,262);


(lib.peoples_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.mm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(138.5,-0.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.boy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126.8,113.1,0.863,0.863);

	this.instance_2 = new lib.gg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-138.5,0);
	this.instance_2.alpha = 0.5;

	this.girl = new lib.girl();
	this.girl.name = "girl";
	this.girl.parent = this;
	this.girl.setTransform(144.1,113.2,0.834,0.841,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.girl},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.2,-114,425.2,227.1);


// stage content:
(lib.select_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var sel = 'boy'
		var self = this
		this.visible=false
		window.selectModal_mc = this
		this.gg_btn.addEventListener('click', function () {
			sel = 'boy'
			self.peo_mc.gotoAndStop(2)
		})
		this.mm_btn.addEventListener('click', function () {
			sel = 'girl'
			self.peo_mc.gotoAndStop(3)
		
		})
		
		this.ok_btn.addEventListener('click', function () {
			window.onSelectPeo(sel)
			self.visible = false
			//window.closeModals()
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_9
	this.mm_btn = new lib.btn();
	this.mm_btn.name = "mm_btn";
	this.mm_btn.parent = this;
	this.mm_btn.setTransform(532.4,728);
	new cjs.ButtonHelper(this.mm_btn, 0, 1, 1);

	this.gg_btn = new lib.btn();
	this.gg_btn.name = "gg_btn";
	this.gg_btn.parent = this;
	this.gg_btn.setTransform(252.9,728);
	new cjs.ButtonHelper(this.gg_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gg_btn},{t:this.mm_btn}]}).wait(1));

	// 人物
	this.peo_mc = new lib.peoples_mc();
	this.peo_mc.name = "peo_mc";
	this.peo_mc.parent = this;
	this.peo_mc.setTransform(374.6,722.5);

	this.timeline.addTween(cjs.Tween.get(this.peo_mc).wait(1));

	// 确定按钮
	this.ok_btn = new lib.btn_ok_1();
	this.ok_btn.name = "ok_btn";
	this.ok_btn.parent = this;
	this.ok_btn.setTransform(372.9,874.2);
	new cjs.ButtonHelper(this.ok_btn, 0, 1, 2, false, new lib.btn_ok_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ok_btn).wait(1));

	// 文字
	this.instance = new lib.select_text();
	this.instance.parent = this;
	this.instance.setTransform(210,524);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 边框
	this.instance_1 = new lib.select_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31,383);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 遮罩
	this.instance_2 = new lib.shade_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(379,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(378.5,666.5,751,1335);
// library properties:
lib.properties = {
	id: '52CDAEF7BAB57C41A594BC9E5E94A379',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/select_modal_atlas_.png?1534757986990", id:"select_modal_atlas_"}
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
an.compositions['52CDAEF7BAB57C41A594BC9E5E94A379'] = {
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