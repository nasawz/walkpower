(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wards_modal_atlas_", frames: [[459,1524,151,37],[0,1524,151,44],[153,1524,151,44],[0,0,1200,760],[0,762,1200,760],[306,1524,151,37]]}
];


// symbols:



(lib.clickbtn = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lqbtn_03 = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lqbtndown_03 = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.modals_wards_all = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardsall = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.WechatIMG7 = function() {
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


(lib.wards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wardsall();
	this.instance.parent = this;
	this.instance.setTransform(-600,-380);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wards_mc, new cjs.Rectangle(-600,-380,1200,760), null);


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
	this.shape.graphics.f().s("rgba(59,59,59,0.8)").ss(1,1,1).p("EhfZg+eMC+zAAAQACAAAAACMAAAB85QAAACgCAAMi+zAAAQgCAAAAgCMAAAh85QAAgCACAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("EhfZA+fQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAMAAAh85QAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAMC+zAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAMAAAB85QAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-611.7,-400.8,1223.6,801.7), null);


(lib.qlq_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lqbtn_03();
	this.instance.parent = this;
	this.instance.setTransform(-75.4,-25.8,1,1.176);

	this.instance_1 = new lib.lqbtndown_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.4,-25.8,1,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-25.8,151,51.7);


(lib.noward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("还没有奖品哦！ ", "24px 'STHeiti'", "#FF9719");
	this.text.lineHeight = 26;
	this.text.lineWidth = 173;
	this.text.alpha = 0.80000000;
	this.text.parent = this;
	this.text.setTransform(-86.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.noward_mc, new cjs.Rectangle(-88.5,-14,177,28), null);


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
	this.lq1 = new lib.qlq_btn();
	this.lq1.name = "lq1";
	this.lq1.parent = this;
	this.lq1.setTransform(267.5,2.9);
	new cjs.ButtonHelper(this.lq1, 0, 1, 2, false, new lib.qlq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.lq1).wait(1));

	// Layer_1
	this.text = new cjs.Text("咪咕阅读七天免费至尊全站包 ", "24px 'STHeiti'", "#FF9719");
	this.text.lineHeight = 26;
	this.text.lineWidth = 446;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(-303.8,-3.6);

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
		this.visible = false
		window.wardsModal_mc = this
	}
	this.frame_1 = function() {
		this.stop()
		var self = this
		this.closeBtn.addEventListener('click',closeModalsWards)
			 
		function	closeModalsWards(){	
			self.visible=false
		}
		 
		window.wardText = [];
		window.wardText.push(this.ward1);
		window.wardText.push(this.ward2);
		window.wardText.push(this.ward3);
		window.wardText.push(this.ward4);
		console.log(window.wardText)
		window.noneWard = this.noneward
		// console.log(window.noneWard)
		this.ward1.children[3].addEventListener('click',getWard)
		this.ward2.children[3].addEventListener('click',getWard)
		this.ward3.children[3].addEventListener('click',getWard)
		this.ward4.children[3].addEventListener('click',getWard)
		
		function getWard(){
			self.visible=false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// closelabel
	this.closeBtn = new lib.close_mc();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(600.5,619.5);
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.close_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(2));

	// Layer_3
	this.ward3 = new lib.text_mc();
	this.ward3.name = "ward3";
	this.ward3.parent = this;
	this.ward3.setTransform(582.1,483.5,1,0.861,0,0,0,0,0.1);

	this.ward4 = new lib.text_mc();
	this.ward4.name = "ward4";
	this.ward4.parent = this;
	this.ward4.setTransform(582.1,555.5,1,0.861,0,0,0,0,0.1);

	this.ward2 = new lib.text_mc();
	this.ward2.name = "ward2";
	this.ward2.parent = this;
	this.ward2.setTransform(582.1,405.4,1,0.861,0,0,0,0,0.1);

	this.ward1 = new lib.text_mc();
	this.ward1.name = "ward1";
	this.ward1.parent = this;
	this.ward1.setTransform(582.1,331.4,1,0.861,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ward1},{t:this.ward2},{t:this.ward4},{t:this.ward3}]}).wait(2));

	// Layer_5
	this.noneward = new lib.noward_mc();
	this.noneward.name = "noneward";
	this.noneward.parent = this;
	this.noneward.setTransform(602.4,442);

	this.timeline.addTween(cjs.Tween.get(this.noneward).wait(2));

	// Layer_2
	this.instance = new lib.wards_mc();
	this.instance.parent = this;
	this.instance.setTransform(600,381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,255,0.498)").ss(1,1,1).p("APKiLIAADtQAAACgCAAImOAAIgCAAIAAECQAAACgCAAMg5YAAAQgCAAAAgCIAArHQAAgCACAAIACAAIACAAIEUAAMAnVAAAIJBAAQACAAAAACIAADUQAAACgCAAMgwWAAAQgCAAAAgCIAAjUQAAgCACAAEgwkgFjIAAgCQAAgCACAAMA5aAAAQACAAAAACIAAACMAnpAAAQACAAAAACIAADUQAAACgCAAMghZAAAIq+AAAI6BkIAAECQAAACgCAAIgCAAEgwkgFjQAAgCACAAMArrAAAQACAAAAACEgwkgFhIAAgCEgsKgCLIkUAAQgCAAAAgCIAAjUQAAgCACAAAI4BkMg5YAAAQgCAAAAgCIAAnDQAAgCACAAAEMljIEuAA");
	this.shape.setTransform(592.8,333.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AI2FoQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAkCMg5YAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAnDQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAHDQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAMA5YAAAIAAECQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAMg5YAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAArHIAAgCQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAMArrAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIJBAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIEuAAMAnpAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAMghZAAAIq+AAIK+AAIAADtQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAImOAAIgCAAIACAAIAAECQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAgEgwggCNQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIEUAAMAwWAAAMgwWAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMAnVAAAMgnVAAAIkUAAIEUAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIkUAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAjUQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCAAIACAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAADUgEgwkgFhQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACAAIgCAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAgAPKiLgAEMljIpBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAMgrrAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgCQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMA5aAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAACgEgsKgFjg");
	this.shape_1.setTransform(592.8,333.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(2));

	// Layer_1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(610.8,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_4
	this.instance_2 = new lib.modals_wards_all();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.5,379.6,1222.6,800.7);
// library properties:
lib.properties = {
	id: '824F95CBF0034282B51DDEB46BD9BBA6',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wards_modal_atlas_.png?1534839523553", id:"wards_modal_atlas_"}
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