(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"knowledge_madal_atlas_", frames: [[0,0,650,1069],[1304,0,650,851],[652,0,650,895],[1811,899,181,44],[1811,991,181,44],[1811,853,181,44],[1811,945,181,44],[1304,853,505,648],[0,1071,506,450],[652,897,506,491]]}
];


// symbols:



(lib.knowledge_bg1 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_bg2 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_bg3 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_c_goonbtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_c_sharebtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_goonbtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_sharebtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text1 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text2 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text3 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(9);
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


(lib.knowledgeshare_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.knowledge_sharebtn();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-22);

	this.instance_1 = new lib.knowledge_c_sharebtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.5,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-22,181,44);


(lib.knowledgegoon_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.knowledge_goonbtn();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-22);

	this.instance_1 = new lib.knowledge_c_goonbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.5,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-22,181,44);


// stage content:
(lib.knowledge_madal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lq:0,yyt:1,tsg:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.visible = false
		
		window.knowledgeModal_mc = this
		
		this.share_btn.addEventListener('click', window.onShare)
		this.goon_btn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 继续按钮
	this.goon_btn = new lib.knowledgegoon_btn();
	this.goon_btn.name = "goon_btn";
	this.goon_btn.parent = this;
	this.goon_btn.setTransform(505.5,1025);
	new cjs.ButtonHelper(this.goon_btn, 0, 1, 2, false, new lib.knowledgegoon_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goon_btn).wait(1).to({y:925},0).wait(1).to({y:939},0).wait(1));

	// 分享按钮
	this.share_btn = new lib.knowledgeshare_btn();
	this.share_btn.name = "share_btn";
	this.share_btn.parent = this;
	this.share_btn.setTransform(242.5,1025);
	new cjs.ButtonHelper(this.share_btn, 0, 1, 2, false, new lib.knowledgeshare_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.share_btn).wait(1).to({y:925},0).wait(1).to({y:939},0).wait(1));

	// 文字
	this.instance = new lib.knowledge_text1();
	this.instance.parent = this;
	this.instance.setTransform(123,279);

	this.instance_1 = new lib.knowledge_text2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123,404);

	this.instance_2 = new lib.knowledge_text3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123,376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// 边框
	this.instance_3 = new lib.knowledge_bg1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38,105);

	this.instance_4 = new lib.knowledge_bg2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38,229);

	this.instance_5 = new lib.knowledge_bg3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(38,202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// 遮罩
	this.instance_6 = new lib.shade_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375,667);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374,666,752,1336);
// library properties:
lib.properties = {
	id: 'E45049C3B61A5D49AF46D7FF447BA915',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/knowledge_madal_atlas_.png?1534923594700", id:"knowledge_madal_atlas_"}
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
an.compositions['E45049C3B61A5D49AF46D7FF447BA915'] = {
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