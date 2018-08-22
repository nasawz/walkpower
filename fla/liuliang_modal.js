(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"liuliang_modal_atlas_", frames: [[205,1583,526,57],[0,1737,526,57],[205,1642,526,57],[205,1524,526,57],[0,0,1200,760],[0,1848,155,50],[0,1524,203,211],[0,1796,155,50],[0,762,1200,760]]}
];


// symbols:



(lib._100m_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1g_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2g_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._500m_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jp = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jp1j_13 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jph_03 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.quedingdown = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.获得500M流量 = function() {
	this.spriteSheet = ss["liuliang_modal_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jpqd_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.jp1j_13();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-25);

	this.instance_1 = new lib.quedingdown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-77.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-25,155,50);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_6
	this.instance = new lib._100m_03();
	this.instance.parent = this;
	this.instance.setTransform(351,329);

	this.instance_1 = new lib._500m_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,329);

	this.instance_2 = new lib._1g_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(345,329);

	this.instance_3 = new lib._2g_03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(345,329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer_5
	this.instance_4 = new lib.jph_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(498,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// Layer_4
	this.quedingbtn = new lib.jpqd_mc();
	this.quedingbtn.name = "quedingbtn";
	this.quedingbtn.parent = this;
	this.quedingbtn.setTransform(603.5,545);
	new cjs.ButtonHelper(this.quedingbtn, 0, 1, 2, false, new lib.jpqd_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.quedingbtn).wait(5));

	// Layer_3
	this.instance_5 = new lib.jp();
	this.instance_5.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("ArPhtIWfAAIAADbI2fAAg");
	this.shape.setTransform(621.8,342.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("ArPBuIAAjbIWfAAIAADbg");
	this.shape_1.setTransform(621.8,342.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5}]}).wait(5));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Ehdvg7XMC7fAAAMAAAB2vMi7fAAAg");
	this.shape_2.setTransform(600,380);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");
	this.shape_3.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(5));

	// Layer_1
	this.instance_6 = new lib.获得500M流量();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,379,1202,762);
// library properties:
lib.properties = {
	id: '673EB5177DAC48C59BEC7FA937449BC2',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/liuliang_modal_atlas_.png?1534928637695", id:"liuliang_modal_atlas_"}
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
an.compositions['673EB5177DAC48C59BEC7FA937449BC2'] = {
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