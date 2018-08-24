(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"success_modal_atlas_", frames: [[509,1144,170,23],[0,1092,507,470],[0,652,551,438],[359,1564,205,50],[509,1092,205,50],[609,652,45,54],[553,652,54,52],[0,0,659,650],[0,1564,357,117]]}
];


// symbols:



(lib.gold = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.libao = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lihua = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lottery_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lottery_click_btn = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pack1 = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pack2 = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.success_bg = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.success_text = function() {
	this.spriteSheet = ss["success_modal_atlas_"];
	this.gotoAndStop(8);
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
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade_mc, new cjs.Rectangle(-375,-667,750,1334), null);


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
	this.instance = new lib.pack1();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-27,45,54);


(lib.hua_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lihua();
	this.instance.parent = this;
	this.instance.setTransform(-275.5,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.5,-219,551,438);


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


(lib.mh2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.mh2_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-100,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.7,scaleY:2.62,x:52.1,y:-38,alpha:0},8).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,50,54,52);


(lib.mh_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.mh_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(158.1,162.2,1,1,-80.5,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-138,y:-149.9},8).to({x:-222,y:-237.9,alpha:0},7).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.7,135.5,60.7,53.3);


(lib.hua_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.hua_pic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.586,0.644);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.63,scaleY:1.51,alpha:0},23).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-140.9,323,282);


// stage content:
(lib.success_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.successModal_mc = this
		
		var self = this
		
		this.golottery_btn.addEventListener("click",function(){
			self.visible = false
			//抽奖方法
			window.goLottery()
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 文字
	this.instance = new lib.success_text();
	this.instance.parent = this;
	this.instance.setTransform(197,706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 金币
	this.instance_1 = new lib.gold();
	this.instance_1.parent = this;
	this.instance_1.setTransform(290,688);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 礼包
	this.instance_2 = new lib.libao();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136,412);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtCAnEQhHAAg6gkQgYgQgWgWQhIhJAAhpMAAAhGPQAAhpBIhKQBJhJBmAAMBaEAAAQBnAABIBJQAnAoATAxQAPApAAAxMAAABGPQAABphJBJQhIBKhnAAg");
	mask.setTransform(379,709.1);

	// 模糊4
	this.instance_3 = new lib.mh2_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.8,698.6,0.616,0.643,-160.3,0,0,-0.3,-0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 模糊3
	this.instance_4 = new lib.mh_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(577.2,781.5,0.766,0.822,-177.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 模糊2
	this.instance_5 = new lib.mh2_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(492,523);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 模糊1
	this.instance_6 = new lib.mh_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(265.5,530);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 去抽奖按钮
	this.golottery_btn = new lib.golottery_btn();
	this.golottery_btn.name = "golottery_btn";
	this.golottery_btn.parent = this;
	this.golottery_btn.setTransform(375,883);
	new cjs.ButtonHelper(this.golottery_btn, 0, 1, 2, false, new lib.golottery_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.golottery_btn).wait(1));

	// 礼花
	this.instance_7 = new lib.hua_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(379.5,678);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// 边框
	this.instance_8 = new lib.success_bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(33,367);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// 遮罩
	this.instance_9 = new lib.shade_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(377,667);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(377,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(376,666,752,1336);
// library properties:
lib.properties = {
	id: '62C90DB0EDF1494385014A9ABDD3935E',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/success_modal_atlas_.png?1535017777984", id:"success_modal_atlas_"}
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
an.compositions['62C90DB0EDF1494385014A9ABDD3935E'] = {
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