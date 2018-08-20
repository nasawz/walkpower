(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"modals_wards_atlas_", frames: [[308,762,151,37],[0,0,1200,760],[0,762,153,37],[155,762,151,37]]}
];


// symbols:



(lib.clickbtn = function() {
	this.spriteSheet = ss["modals_wards_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wardsall = function() {
	this.spriteSheet = ss["modals_wards_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wardsbtn_07 = function() {
	this.spriteSheet = ss["modals_wards_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WechatIMG7 = function() {
	this.spriteSheet = ss["modals_wards_atlas_"];
	this.gotoAndStop(3);
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


(lib.wards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wardsall();
	this.instance.parent = this;
	this.instance.setTransform(-600,-380);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wards_mc, new cjs.Rectangle(-600,-380,1200,760), null);


(lib.qlqbtn_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wardsbtn_07();
	this.instance.parent = this;
	this.instance.setTransform(-74,-17);

	this.text = new cjs.Text("去领取", "24px 'STFangsong'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 86;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(-39.9,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-17,153,37);


(lib.close_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WechatIMG7();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-18.5);

	this.instance_1 = new lib.clickbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-18.5,151,37);


(lib.text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.qlqbtn_btn();
	this.instance.parent = this;
	this.instance.setTransform(264,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.text = new cjs.Text("咪咕阅读七天免费至尊全站包 ", "24px 'STFangsong'", "#FF9719");
	this.text.lineHeight = 26;
	this.text.lineWidth = 446;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(-329.8,-12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,255,0.498)").ss(1,1,1).p("Eg1tgFnMBrbAAAQACAAAAACIAALLQAAACgCAAMhrbAAAQgCAAAAgCIAArLQAAgCACAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Eg1tAFoQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAArLQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAMBraAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAALLQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_mc, new cjs.Rectangle(-345,-37,690,74), null);


// stage content:
(lib.wards_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.visible = false
		window.wardsModal = this
	}
	this.frame_1 = function() {
		this.stop()
		var modals = this
		window.closeBtn = this.closebtn
		window.closeBtn.addEventListener('click',closeModalsWards)
			 
		function	closeModalsWards(){	
			modals.visible=false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// closelabel
	this.closebtn = new lib.close_mc();
	this.closebtn.name = "closebtn";
	this.closebtn.parent = this;
	this.closebtn.setTransform(600.5,619.5);
	new cjs.ButtonHelper(this.closebtn, 0, 1, 2, false, new lib.close_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closebtn).wait(2));

	// Layer_3
	this.instance = new lib.text_mc();
	this.instance.parent = this;
	this.instance.setTransform(614.1,334.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.text_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(614.1,540.9);

	this.instance_2 = new lib.text_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(614.1,442.9);

	this.instance_3 = new lib.wards_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(600,380);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,255,0.498)").ss(1,1,1).p("APKiLIAADtQAAACgCAAImOAAIgCAAIAAECQAAACgCAAMg5YAAAQgCAAAAgCIAArHQAAgCACAAIACAAIACAAIEUAAMAnVAAAIJBAAQACAAAAACIAADUQAAACgCAAMgwWAAAQgCAAAAgCIAAjUQAAgCACAAEgwkgFjIAAgCQAAgCACAAMA5aAAAQACAAAAACIAAACMAnpAAAQACAAAAACIAADUQAAACgCAAMghZAAAIq+AAAI6BkIAAECQAAACgCAAIgCAAEgwkgFjQAAgCACAAMArrAAAQACAAAAACEgwkgFhIAAgCEgsKgCLIkUAAQgCAAAAgCIAAjUQAAgCACAAAI4BkMg5YAAAQgCAAAAgCIAAnDQAAgCACAAAEMljIEuAA");
	this.shape.setTransform(592.8,333.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AI2FoQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAkCMg5YAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAnDQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAHDQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAMA5YAAAIAAECQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAMg5YAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAArHIAAgCQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAMArrAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIJBAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIEuAAMAnpAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAMghZAAAIq+AAMgwWAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMAnVAAAMgnVAAAIkUAAIEUAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIkUAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAjUQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCAAIACAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAADUQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIEUAAMAwWAAAIK+AAIAADtQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAImOAAIgCAAIACAAIAAECQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAgEgwkgFhQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACAAIgCAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAgAPKiLgAEMljIpBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAMgrrAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgCQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMA5aAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAACgEgsKgFjg");
	this.shape_1.setTransform(592.8,333.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(2));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(59,59,59,0.8)").ss(1,1,1).p("EhfZg+dMC+zAAAQACAAAAABMAAAB85QAAACgCAAMi+zAAAQgCAAAAgCMAAAh85QAAgBACAAg");
	this.shape_2.setTransform(610.8,399.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(69,69,69,0.8)").s().p("EhfZA+eQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAMAAAh84QAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAMC+zAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABMAAAB84QAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_3.setTransform(610.8,399.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,379.1,1223.6,801.7);
// library properties:
lib.properties = {
	id: '824F95CBF0034282B51DDEB46BD9BBA6',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/modals_wards_atlas_.png?1534408893619", id:"modals_wards_atlas_"}
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
an.compositions['824F95CBF0034282B51DDEB46BD9BBA6'] = {
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