(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wards_modal_atlas_", frames: [[0,667,556,47],[178,716,176,43],[0,716,176,43],[558,667,177,43],[558,712,177,43],[0,0,650,665]]}
];


// symbols:



(lib.beijing = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.closebtn = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.closebtnclick = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lqbtn = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lqclickbtn = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wards_bg = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
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


(lib.get_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lqbtn();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-21.5);

	this.instance_1 = new lib.lqclickbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88.5,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-21.5,177,43);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.closebtn();
	this.instance.parent = this;
	this.instance.setTransform(-88,-21.5);

	this.instance_1 = new lib.closebtnclick();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-21.5,176,43);


(lib.text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 领取按钮
	this.get_btn = new lib.get_btn();
	this.get_btn.name = "get_btn";
	this.get_btn.parent = this;
	this.get_btn.setTransform(189.5,1.5);
	new cjs.ButtonHelper(this.get_btn, 0, 1, 2, false, new lib.get_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.get_btn).wait(1));

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4XCXIAAktMAwwAAAIAAEtg");
	mask.setTransform(-110,2.4);

	// 文字
	this.award_text = new cjs.Text("咪咕阅读七天免费至尊全站包", "22px 'SimHei'", "#FF8B00");
	this.award_text.name = "award_text";
	this.award_text.lineHeight = 24;
	this.award_text.lineWidth = 308;
	this.award_text.parent = this;
	this.award_text.setTransform(-264,-10.8);

	var maskedShapeInstanceList = [this.award_text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.award_text).wait(1));

	// 图层_1
	this.instance = new lib.beijing();
	this.instance.parent = this;
	this.instance.setTransform(-278,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_mc, new cjs.Rectangle(-278,-23.5,556,47), null);


// stage content:
(lib.wards_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.wardsModal_mc = this
	}
	this.frame_1 = function() {
		this.stop()
		var self = this
		this.closeBtn.addEventListener('click', closeModalsWards)
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 关闭按钮
	this.closeBtn = new lib.close_btn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(383,877.5);
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.close_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(2));

	// 奖品
	this.text4 = new lib.text_mc();
	this.text4.name = "text4";
	this.text4.parent = this;
	this.text4.setTransform(375,794.2);

	this.text3 = new lib.text_mc();
	this.text3.name = "text3";
	this.text3.parent = this;
	this.text3.setTransform(375,704.2);

	this.text2 = new lib.text_mc();
	this.text2.name = "text2";
	this.text2.parent = this;
	this.text2.setTransform(375,620.1);

	this.text1 = new lib.text_mc();
	this.text1.name = "text1";
	this.text1.parent = this;
	this.text1.setTransform(375,532.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4}]}).wait(2));

	// 边框
	this.instance = new lib.wards_bg();
	this.instance.parent = this;
	this.instance.setTransform(38,333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 遮罩
	this.instance_1 = new lib.shade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,667);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374,666,752,1336);
// library properties:
lib.properties = {
	id: '56E5B54892F9CA41916DD3751A0B7295',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wards_modal_atlas_.png?1534758190510", id:"wards_modal_atlas_"}
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
an.compositions['56E5B54892F9CA41916DD3751A0B7295'] = {
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