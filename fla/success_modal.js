(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"success_modal_atlas_", frames: [[509,1174,151,37],[509,1213,151,37],[509,1252,170,26],[0,0,791,621],[0,1135,507,470],[0,623,551,510],[359,1607,151,37],[509,1135,151,37],[553,623,54,52],[553,677,45,54],[0,1607,357,117]]}
];


// symbols:



(lib.cancel_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cancel_click_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gold = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.golottery_bg = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.libao = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lihua1 = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lottery_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lottery_click_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pack2 = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pack3 = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.succ_text = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(10);
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


(lib.shademc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shademc, new cjs.Rectangle(-600,-380,1200,760), null);


(lib.mh2_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.pack2();
	this.instance.parent = this;
	this.instance.setTransform(-27,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-26,54,52);


(lib.mh_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.pack3();
	this.instance.parent = this;
	this.instance.setTransform(15.1,-31.7,1,1,65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-31.7,67.9,63.5);


(lib.hua_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lihua1();
	this.instance.parent = this;
	this.instance.setTransform(-275.5,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.5,-255,551,510);


(lib.golottery_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lottery_btn();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.lottery_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


(lib.cancel_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.cancel_btn();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.cancel_click_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


(lib.mh2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.mh2_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-61,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:2.35,scaleY:2.35,x:35.3,y:-22.2,alpha:0},7).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,25.1,54,52);


(lib.mh_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.mh_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-211,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:273.1,alpha:1},8).to({x:504.1,alpha:0},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.9,-31.7,67.9,63.5);


(lib.hua_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.hua_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.569,0.569);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.7,scaleY:1.55,alpha:0},23).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.6,-145,313.3,290);


// stage content:
(lib.success_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.successModal_mc = this
		
		var self = this
		
		this.cancel_btn.addEventListener("click",function(){
			self.visible = false
		})
		
		this.golottery_btn.addEventListener("click",function(){
			self.visible = false
			//抽奖方法
			window.goLottery()
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 文字
	this.instance = new lib.succ_text();
	this.instance.parent = this;
	this.instance.setTransform(427,444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 金币
	this.instance_1 = new lib.gold();
	this.instance_1.parent = this;
	this.instance_1.setTransform(522,427);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 礼包
	this.instance_2 = new lib.libao();
	this.instance_2.parent = this;
	this.instance_2.setTransform(371,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3eAkRQhjgBhHhGQhGhGAAhjMAAAhBAQAAhkBGhGQBHhHBjABMBu9AAAQBjgBBGBHQBHBGAABkMAAABBAQAABjhHBGQhGBGhjABg");
	mask.setTransform(603.2,424.1);

	// 模糊4
	this.instance_3 = new lib.mh2_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(420.5,475.3,0.684,0.684,174.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 模糊3
	this.instance_4 = new lib.mh_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(742.9,419.3,0.331,0.331,45);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 模糊2
	this.instance_5 = new lib.mh2_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(720,260);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 模糊1
	this.instance_6 = new lib.mh_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(463.6,291.3,1,1,-135);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 取消按钮
	this.cancel_btn = new lib.cancel_btn_1();
	this.cancel_btn.name = "cancel_btn";
	this.cancel_btn.parent = this;
	this.cancel_btn.setTransform(697.5,595.5);
	new cjs.ButtonHelper(this.cancel_btn, 0, 1, 2, false, new lib.cancel_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cancel_btn).wait(1));

	// 去抽奖按钮
	this.golottery_btn = new lib.golottery_btn();
	this.golottery_btn.name = "golottery_btn";
	this.golottery_btn.parent = this;
	this.golottery_btn.setTransform(511.5,596.5);
	new cjs.ButtonHelper(this.golottery_btn, 0, 1, 2, false, new lib.golottery_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.golottery_btn).wait(1));

	// 礼花
	this.instance_7 = new lib.hua_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(605.5,381);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// 边框
	this.instance_8 = new lib.golottery_bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(192,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// 遮罩
	this.instance_9 = new lib.shademc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(601,380);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Ehdvg7XMC7fAAAMAAAB2vMi7fAAAg");
	this.shape.setTransform(601,380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,379,1202,762);
// library properties:
lib.properties = {
	id: 'FAEBC6A0C1903C4A9240C425DE650C0A',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/success_modal_atlas_.png?1535016910924", id:"success_modal_atlas_"}
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
an.compositions['FAEBC6A0C1903C4A9240C425DE650C0A'] = {
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