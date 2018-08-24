(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sanfang_modal_atlas_", frames: [[669,769,662,766],[0,769,667,767],[0,1538,192,60],[1338,0,192,60],[0,1600,191,56],[669,0,667,767],[194,1538,191,56],[0,0,667,767]]}
];


// symbols:



(lib.csh5_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jxl_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lqdown = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lqjph5_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lqjph5_07 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sh_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shlqdown = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.st_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.shlq_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lqjph5_07();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-28);

	this.instance_1 = new lib.shlqdown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95.5,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-28,191,56);


(lib.sfjplq_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lqjph5_03();
	this.instance.parent = this;
	this.instance.setTransform(-96,-30);

	this.instance_1 = new lib.lqdown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-30,192,60);


// stage content:
(lib.sanfang_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{chaoshi:0,shitang:1,jiaoxuelou:2,litang:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		//this.visible = false
		window.sanfangModal_mc = this
		
		
		this.shlq_btn.addEventListener('click', closeModalsWards)
		
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
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(4));

	// Layer_3
	this.lq5_btn = new lib.sfjplq_btn();
	this.lq5_btn.name = "lq5_btn";
	this.lq5_btn.parent = this;
	this.lq5_btn.setTransform(553,768.4);
	new cjs.ButtonHelper(this.lq5_btn, 0, 1, 2, false, new lib.sfjplq_btn(), 3);

	this.lq2_btn = new lib.sfjplq_btn();
	this.lq2_btn.name = "lq2_btn";
	this.lq2_btn.parent = this;
	this.lq2_btn.setTransform(549.7,511.7);
	new cjs.ButtonHelper(this.lq2_btn, 0, 1, 2, false, new lib.sfjplq_btn(), 3);

	this.lq3_btn = new lib.sfjplq_btn();
	this.lq3_btn.name = "lq3_btn";
	this.lq3_btn.parent = this;
	this.lq3_btn.setTransform(549.7,598.4);
	new cjs.ButtonHelper(this.lq3_btn, 0, 1, 2, false, new lib.sfjplq_btn(), 3);

	this.lq4_btn = new lib.sfjplq_btn();
	this.lq4_btn.name = "lq4_btn";
	this.lq4_btn.parent = this;
	this.lq4_btn.setTransform(549.7,685);
	new cjs.ButtonHelper(this.lq4_btn, 0, 1, 2, false, new lib.sfjplq_btn(), 3);

	this.lq1_btn = new lib.sfjplq_btn();
	this.lq1_btn.name = "lq1_btn";
	this.lq1_btn.parent = this;
	this.lq1_btn.setTransform(553,426);
	new cjs.ButtonHelper(this.lq1_btn, 0, 1, 2, false, new lib.sfjplq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lq1_btn},{t:this.lq4_btn},{t:this.lq3_btn},{t:this.lq2_btn},{t:this.lq5_btn}]}).to({state:[]},4).wait(3));

	// Layer_5
	this.shlq_btn = new lib.shlq_btn();
	this.shlq_btn.name = "shlq_btn";
	this.shlq_btn.parent = this;
	this.shlq_btn.setTransform(369.5,849);
	new cjs.ButtonHelper(this.shlq_btn, 0, 1, 2, false, new lib.shlq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.shlq_btn).to({_off:true},4).wait(3));

	// Layer_4
	this.instance = new lib.sh_03();
	this.instance.parent = this;
	this.instance.setTransform(31,238);

	this.instance_1 = new lib.st_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31,237);

	this.instance_2 = new lib.jxl_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,237);

	this.instance_3 = new lib.csh5_03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(31,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(3));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape.setTransform(375,667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(41,41,41,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");
	this.shape_1.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374,666,752,1336);
// library properties:
lib.properties = {
	id: '248DFC3ACE69489199DD208FB6330BFD',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sanfang_modal_atlas_.png?1535018921193", id:"sanfang_modal_atlas_"}
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
an.compositions['248DFC3ACE69489199DD208FB6330BFD'] = {
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