(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wards_modal_atlas_", frames: [[306,762,151,37],[0,762,151,44],[153,762,151,44],[0,0,1200,760],[459,762,151,37],[612,762,151,37]]}
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



(lib.wardsall = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.WechatIMG7 = function() {
	this.spriteSheet = ss["wards_modal_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ylq = function() {
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


(lib.ward_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.lq_btn = new lib.qlq_btn();
	this.lq_btn.name = "lq_btn";
	this.lq_btn.parent = this;
	this.lq_btn.setTransform(567.4,19.1);
	new cjs.ButtonHelper(this.lq_btn, 0, 1, 2, false, new lib.qlq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.lq_btn).wait(1));

	// Layer_3
	this.instance = new lib.ylq();
	this.instance.parent = this;
	this.instance.setTransform(492,-3,1,1.157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.gift = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift.name = "gift";
	this.gift.lineHeight = 36;
	this.gift.lineWidth = 488;
	this.gift.parent = this;
	this.gift.setTransform(2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.gift).wait(1));

}).prototype = getMCSymbolPrototype(lib.ward_item, new cjs.Rectangle(0,-6.7,643,51.7), null);


// stage content:
(lib.wards_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false
		window.wardsModal_mc = this
		
		this.stop()
		var self = this
		this.closeBtn.addEventListener('click', closeModalsWards);
		
		function closeModalsWards() {
			self.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// closelabel
	this.closeBtn = new lib.close_mc();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(600.5,619.5);
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.close_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(1));

	// Layer_3
	this.ward_item = new lib.ward_item();
	this.ward_item.name = "ward_item";
	this.ward_item.parent = this;
	this.ward_item.setTransform(278.5,312.8,1,0.861,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.ward_item).wait(1));

	// null
	this.noneward = new lib.noward_mc();
	this.noneward.name = "noneward";
	this.noneward.parent = this;
	this.noneward.setTransform(602.4,442);

	this.timeline.addTween(cjs.Tween.get(this.noneward).wait(1));

	// bg
	this.instance = new lib.wards_mc();
	this.instance.parent = this;
	this.instance.setTransform(600,381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,255,0.498)").ss(1,1,1).p("APKiLIAADtQAAACgCAAImOAAIgCAAIAAECQAAACgCAAMg5YAAAQgCAAAAgCIAArHQAAgCACAAIACAAIACAAIEUAAMAnVAAAIJBAAQACAAAAACIAADUQAAACgCAAMgwWAAAQgCAAAAgCIAAjUQAAgCACAAEgwkgFjIAAgCQAAgCACAAMA5aAAAQACAAAAACIAAACMAnpAAAQACAAAAACIAADUQAAACgCAAMghZAAAIq+AAAI6BkIAAECQAAACgCAAIgCAAEgwkgFjQAAgCACAAMArrAAAQACAAAAACEgwkgFhIAAgCEgsKgCLIkUAAQgCAAAAgCIAAjUQAAgCACAAAI4BkMg5YAAAQgCAAAAgCIAAnDQAAgCACAAAEMljIEuAA");
	this.shape.setTransform(592.8,333.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AI2FoQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAkCMg5YAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAnDQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAHDQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAMA5YAAAIAAECQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAMg5YAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAArHIAAgCQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAMArrAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIJBAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIEuAAMAnpAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAMghZAAAIq+AAMgwWAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAjUQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMAnVAAAMgnVAAAIkUAAIEUAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAADUQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIkUAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAjUQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCAAIACAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAADUQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIEUAAMAwWAAAIK+AAIAADtQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAImOAAIgCAAIACAAIAAECQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAgEgwkgFhQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACAAIgCAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAgAPKiLgAEMljIpBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAMgrrAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgCQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAMA5aAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAACgEgsKgFjg");
	this.shape_1.setTransform(592.8,333.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// mask
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(610.8,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
		{src:"images/wards_modal_atlas_.png?1535098129300", id:"wards_modal_atlas_"}
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