(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sanfang_modal_atlas_", frames: [[0,3048,151,44],[153,3048,151,44],[0,2286,1200,760],[0,762,1200,760],[0,1524,1200,760],[0,0,1200,760],[306,3048,162,38],[470,3048,162,38]]}
];


// symbols:



(lib.lqbtn_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lqbtndown_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sanfanflt = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sanfangcs = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sanfangjxl = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sanfangst = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shlql_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.shlqldown = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.shlq_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shlql_03();
	this.instance.parent = this;
	this.instance.setTransform(-81,-19);

	this.instance_1 = new lib.shlqldown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-19,162,38);


(lib.lq1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lqbtn_03();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-22);

	this.instance_1 = new lib.lqbtndown_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-22,151,44);


// stage content:
(lib.sanfang_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{jiaoxuelou:0,chaoshi:1,shitang:2,litang:3});

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(2));

	// Layer_6
	this.shlq_btn = new lib.shlq_btn();
	this.shlq_btn.name = "shlq_btn";
	this.shlq_btn.parent = this;
	this.shlq_btn.setTransform(608,579);
	new cjs.ButtonHelper(this.shlq_btn, 0, 1, 2, false, new lib.shlq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.shlq_btn).to({_off:true},4).wait(1));

	// Layer_5
	this.lq5_btn = new lib.lq1_btn();
	this.lq5_btn.name = "lq5_btn";
	this.lq5_btn.parent = this;
	this.lq5_btn.setTransform(849.5,506.9);
	new cjs.ButtonHelper(this.lq5_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq4_btn = new lib.lq1_btn();
	this.lq4_btn.name = "lq4_btn";
	this.lq4_btn.parent = this;
	this.lq4_btn.setTransform(847.5,440.9);
	new cjs.ButtonHelper(this.lq4_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq3_btn = new lib.lq1_btn();
	this.lq3_btn.name = "lq3_btn";
	this.lq3_btn.parent = this;
	this.lq3_btn.setTransform(847.5,372.9);
	new cjs.ButtonHelper(this.lq3_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq2_btn = new lib.lq1_btn();
	this.lq2_btn.name = "lq2_btn";
	this.lq2_btn.parent = this;
	this.lq2_btn.setTransform(849.5,306.9);
	new cjs.ButtonHelper(this.lq2_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq1_btn = new lib.lq1_btn();
	this.lq1_btn.name = "lq1_btn";
	this.lq1_btn.parent = this;
	this.lq1_btn.setTransform(847.5,239);
	new cjs.ButtonHelper(this.lq1_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lq1_btn},{t:this.lq2_btn},{t:this.lq3_btn},{t:this.lq4_btn},{t:this.lq5_btn}]}).to({state:[]},4).wait(1));

	// Layer_3
	this.instance = new lib.sanfangjxl();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Ax9iLMAj7AAAIAAEXMgj7AAAg");
	this.shape.setTransform(598.8,293.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(41,41,41,0.8)").s().p("Ax9CMIAAkXMAj7AAAIAAEXg");
	this.shape_1.setTransform(598.8,293.9);

	this.instance_1 = new lib.sanfangcs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1);

	this.instance_2 = new lib.sanfangst();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1);

	this.instance_3 = new lib.sanfanflt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(2));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Ehdvg7XMC7fAAAMAAAB2vMi7fAAAg");
	this.shape_2.setTransform(600,380);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(41,41,41,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");
	this.shape_3.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,379,1202,762);
// library properties:
lib.properties = {
	id: 'D166172034D4439287824EBF877C24D4',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sanfang_modal_atlas_.png?1535019003408", id:"sanfang_modal_atlas_"}
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
an.compositions['D166172034D4439287824EBF877C24D4'] = {
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