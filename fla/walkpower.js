(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"walkpower_atlas_", frames: [[0,0,1200,760],[813,762,133,101],[0,762,811,225],[813,865,269,25]]}
];


// symbols:



(lib.web_01 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.web_02 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.web_03 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.web_15 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mingdan_txt = new cjs.Text("定时达奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥", "12px 'Arial'", "#F08300");
	this.mingdan_txt.name = "mingdan_txt";
	this.mingdan_txt.lineHeight = 19;
	this.mingdan_txt.lineWidth = 323;
	this.mingdan_txt.parent = this;
	this.mingdan_txt.setTransform(-161.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.mingdan_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.5,-8.7,327,20.8);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mingdan_txt = new cjs.Text("定时达奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥", "12px 'Arial'", "#F08300");
	this.mingdan_txt.name = "mingdan_txt";
	this.mingdan_txt.lineHeight = 19;
	this.mingdan_txt.lineWidth = 323;
	this.mingdan_txt.parent = this;
	this.mingdan_txt.setTransform(-161.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.mingdan_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.5,-8.7,327,20.8);


(lib.power_bgimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.web_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,760);


(lib.mingdan_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0zB+IAAj7MApnAAAIAAD7g");
	mask.setTransform(0.3,-0.1);

	// mingdan_txt
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(301.5,1);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-299.4,1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},139).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-299.4},139).wait(1));

	// 图层 1
	this.instance_2 = new lib.web_15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-134.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-12.5,269,25);


// stage content:
(lib.walkpower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// power_mingdan 
	this.instance = new lib.mingdan_mc();
	this.instance.parent = this;
	this.instance.setTransform(704.5,297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// power_logo
	this.instance_1 = new lib.web_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// power_title
	this.instance_2 = new lib.web_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(260,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// power_bg
	this.instance_3 = new lib.power_bgimg("synched",0);
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1200,760);
// library properties:
lib.properties = {
	id: 'CCBAC15313E34F7CA9B7FCA0D59D14DA',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/walkpower_atlas_.png?1534321285247", id:"walkpower_atlas_"}
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
an.compositions['CCBAC15313E34F7CA9B7FCA0D59D14DA'] = {
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