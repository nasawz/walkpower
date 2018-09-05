(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"knowledge_madal_atlas_", frames: [[0,762,964,622],[966,1291,964,490],[966,762,964,527],[0,0,1200,760],[1202,0,795,308],[1202,515,800,172],[1202,310,783,203],[1202,689,157,37],[1361,689,157,37],[1520,689,156,37],[1678,689,156,37]]}
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



(lib.knowledge_guide3 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text1 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text2 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.knowledge_text3 = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.knowledgegoon_btn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.knowledgegoon_cbtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.knowledgeshare_btn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.knowledgeshare_cbtn = function() {
	this.spriteSheet = ss["knowledge_madal_atlas_"];
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
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ehd6A7PMAAAh2dMC71AAAMAAAB2dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade_mc, new cjs.Rectangle(-601.1,-379.1,1202.3,758.2), null);


(lib.knowledgeshare_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.knowledgeshare_btn();
	this.instance.parent = this;
	this.instance.setTransform(-78,-18.5);

	this.instance_1 = new lib.knowledgeshare_cbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-18.5,156,37);


(lib.knowledgegoon_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.knowledgegoon_btn();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-18.5);

	this.instance_1 = new lib.knowledgegoon_cbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-18.5,157,37);


// stage content:
(lib.knowledge_madal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lq:0,yyt:1,tsg:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.visible = false
		window.knowledgeModal_mc = this
		
		this.share_btn.addEventListener('click', closeAndShare)
		this.goon_btn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
		
		function closeAndShare() {
			window.onShare()
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
	this.goon_btn = new lib.knowledgegoon_btn_1();
	this.goon_btn.name = "goon_btn";
	this.goon_btn.parent = this;
	this.goon_btn.setTransform(731.5,575.5);
	new cjs.ButtonHelper(this.goon_btn, 0, 1, 2, false, new lib.knowledgegoon_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goon_btn).wait(1).to({y:517.5},0).wait(1).to({y:533.5},0).wait(1));

	// 分享按钮
	this.share_btn = new lib.knowledgeshare_btn_1();
	this.share_btn.name = "share_btn";
	this.share_btn.parent = this;
	this.share_btn.setTransform(487,575.5);
	new cjs.ButtonHelper(this.share_btn, 0, 1, 2, false, new lib.knowledgeshare_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.share_btn).wait(1).to({y:517.5},0).wait(1).to({y:533.5},0).wait(1));

	// 文字
	this.instance = new lib.knowledge_text1();
	this.instance.parent = this;
	this.instance.setTransform(214,234);

	this.instance_1 = new lib.knowledge_text2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214,300);

	this.instance_2 = new lib.knowledge_text3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// 边框
	this.instance_3 = new lib.knowledge_bg1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(112,62);

	this.instance_4 = new lib.knowledge_bg2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(112,128);

	this.instance_5 = new lib.knowledge_bg3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(112,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// 遮罩
	this.instance_6 = new lib.shade_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(601.2,379.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF66").ss(1,1,1).p("Ehd7g7OMC73AAAMAAAB2dMi73AAAg");
	this.shape.setTransform(601.2,379.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).wait(3));

	// 图层_15
	this.instance_7 = new lib.knowledge_guide3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.1,379,1204.3,761);
// library properties:
lib.properties = {
	id: '9E1EEB788860B641BA18659639E50BDE',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/knowledge_madal_atlas_.png?1535689781925", id:"knowledge_madal_atlas_"}
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
an.compositions['9E1EEB788860B641BA18659639E50BDE'] = {
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