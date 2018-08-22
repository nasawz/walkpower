(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"liuliang_modal_atlas_", frames: [[703,1537,533,65],[703,1336,533,65],[703,1403,533,65],[703,1470,533,65],[703,1604,202,49],[907,1604,202,49],[0,1336,701,649],[0,0,750,1334]]}
];


// symbols:



(lib.h5100m_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.h51g_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h52g_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h5500m_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.h5500m_07 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.h5jpqddown = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.h5ll_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.获得500M流量的副本 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.h5llqd_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.h5500m_07();
	this.instance.parent = this;
	this.instance.setTransform(-101,-24.5);

	this.instance_1 = new lib.h5jpqddown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-101,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-24.5,202,49);


// stage content:
(lib.liuliang_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"100m":1,"500m":2,"1g":3,"2g":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.visible = false
		window.liuliangModal_mc = this
		
		this.quedingbtn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
		this.addEventListener('click',function(){})
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
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(2));

	// Layer_5
	this.instance = new lib.h5100m_03();
	this.instance.parent = this;
	this.instance.setTransform(123,562);

	this.instance_1 = new lib.h5500m_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123,562);

	this.instance_2 = new lib.h51g_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135,562);

	this.instance_3 = new lib.h52g_03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,560);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// Layer_4
	this.quedingbtn = new lib.h5llqd_btn();
	this.quedingbtn.name = "quedingbtn";
	this.quedingbtn.parent = this;
	this.quedingbtn.setTransform(383,766.5);
	new cjs.ButtonHelper(this.quedingbtn, 0, 1, 2, false, new lib.h5llqd_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.quedingbtn).to({_off:true},5).wait(1));

	// Layer_3
	this.instance_4 = new lib.h5ll_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(30,278);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Au9rcId7AAIAAW5I97AAg");
	this.shape.setTransform(444.2,500);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Au9LdIAA25Id8AAIAAW5g");
	this.shape_1.setTransform(444.2,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).to({state:[]},5).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");
	this.shape_2.setTransform(376,667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");
	this.shape_3.setTransform(376,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(6));

	// Layer_1
	this.instance_5 = new lib.获得500M流量的副本();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("AlmlmILMAAIAALMIrMAAg");
	this.shape_4.setTransform(384.2,609.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AllFmIAArLILLAAIAALLg");
	this.shape_5.setTransform(384.2,609.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance_5}]}).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,666,752,1336);
// library properties:
lib.properties = {
	id: '25311CBAEE9847BA8B371D7BD1A1B3D2',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/liuliang_modal_atlas_.png?1534929394517", id:"liuliang_modal_atlas_"}
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
an.compositions['25311CBAEE9847BA8B371D7BD1A1B3D2'] = {
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