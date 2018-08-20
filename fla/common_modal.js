(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"common_modal_atlas_", frames: [[443,762,157,39],[0,0,1200,760],[602,762,157,39],[761,762,151,39],[0,762,441,119],[914,762,151,39]]}
];


// symbols:



(lib.cancelclicked = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.common = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.commonbtn_07 = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.commonbtn_10 = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.commonword_03 = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.okclicked = function() {
	this.spriteSheet = ss["common_modal_atlas_"];
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhdtA7YQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAMAAAh2rQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAMC7bAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABMAAAB2rQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1200,760), null);


(lib.commonWord_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.commonword_03();
	this.instance.parent = this;
	this.instance.setTransform(-220.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.commonWord_mc, new cjs.Rectangle(-220.5,-59.5,441,119), null);


(lib.commonok_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.commonbtn_10();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-19.5);

	this.instance_1 = new lib.okclicked();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-19.5,151,39);


(lib.commoncancel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.commonbtn_07();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-19.5);

	this.instance_1 = new lib.cancelclicked();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-19.5,157,39);


(lib.commoModal_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.common();
	this.instance.parent = this;
	this.instance.setTransform(-600,-380);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.commoModal_mc, new cjs.Rectangle(-600,-380,1200,760), null);


// stage content:
(lib.common_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.commonModal_mc = this
		this.visible = false
		this.okbtn.addEventListener('click', closeModalsWards)
		this.cancelbtn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.cancelbtn = new lib.commoncancel_btn();
	this.cancelbtn.name = "cancelbtn";
	this.cancelbtn.parent = this;
	this.cancelbtn.setTransform(714.5,601.5);
	new cjs.ButtonHelper(this.cancelbtn, 0, 1, 2, false, new lib.commoncancel_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cancelbtn).wait(1));

	// Layer_5
	this.okbtn = new lib.commonok_btn();
	this.okbtn.name = "okbtn";
	this.okbtn.parent = this;
	this.okbtn.setTransform(506.5,601.5);
	new cjs.ButtonHelper(this.okbtn, 0, 1, 2, false, new lib.commonok_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.okbtn).wait(1));

	// Layer_4
	this.instance = new lib.commonWord_mc();
	this.instance.parent = this;
	this.instance.setTransform(609.5,412.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.commoModal_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,382);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(600,380,1,1,0,0,0,600,380);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1200,762);
// library properties:
lib.properties = {
	id: 'D0AE058D4CB242B6A4B0369802633A23',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/common_modal_atlas_.png?1534499994867", id:"common_modal_atlas_"}
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
an.compositions['D0AE058D4CB242B6A4B0369802633A23'] = {
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