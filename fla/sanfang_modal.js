(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sanfang_modal_atlas_", frames: [[0,762,151,44],[153,762,151,44],[0,0,1200,760],[306,762,162,38],[470,762,162,38]]}
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



(lib.sanf = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shlql_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shlqldown = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(4);
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
		this.addEventListener('click', function () {})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(41,41,41,0.8)").s().p("EhdvA7YMAAAh2vMC7fAAAMAAAB2vg");
	this.shape.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1200,760), null);


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


(lib.mask_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,600,380);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_mc, new cjs.Rectangle(-600,-380,1200,760), null);


// stage content:
(lib.sanfang_modal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.visible = false
		window.sanfangModal_mc = this
		
		
		this.shlq_btn.addEventListener('click', closeModalsWards)
		
		var self = this;
		
		this.initGifts = function (gifts) {
			self.gifts = gifts
			self.gift1.text = gifts[0].giftName
			self.gift2.text = gifts[1].giftName
			self.gift3.text = gifts[2].giftName
			self.gift4.text = gifts[3].giftName
			self.gift5.text = gifts[4].giftName
		}
		
		function closeModalsWards() {
			self.visible = false
		}
		
		this.lq1_btn.addEventListener('click', function () {
			var gift = self.gifts[0]
			window.onLingqu(gift)
		})
		
		this.lq2_btn.addEventListener('click', function () {
			var gift = self.gifts[1]
			window.onLingqu(gift)
		})
		
		this.lq3_btn.addEventListener('click', function () {
			var gift = self.gifts[2]
			window.onLingqu(gift)
		})
		
		this.lq4_btn.addEventListener('click', function () {
			var gift = self.gifts[3]
			window.onLingqu(gift)
		})
		
		this.lq5_btn.addEventListener('click', function () {
			var gift = self.gifts[4]
			window.onLingqu(gift)
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.gift5 = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift5.name = "gift5";
	this.gift5.lineHeight = 36;
	this.gift5.lineWidth = 488;
	this.gift5.parent = this;
	this.gift5.setTransform(275,493.3);

	this.gift4 = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift4.name = "gift4";
	this.gift4.lineHeight = 36;
	this.gift4.lineWidth = 488;
	this.gift4.parent = this;
	this.gift4.setTransform(275,426.3);

	this.gift3 = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift3.name = "gift3";
	this.gift3.lineHeight = 36;
	this.gift3.lineWidth = 488;
	this.gift3.parent = this;
	this.gift3.setTransform(275,359.3);

	this.gift2 = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift2.name = "gift2";
	this.gift2.lineHeight = 36;
	this.gift2.lineWidth = 488;
	this.gift2.parent = this;
	this.gift2.setTransform(275,292.4);

	this.gift1 = new cjs.Text("加载中", "24px 'Arial'", "#FF8B00");
	this.gift1.name = "gift1";
	this.gift1.lineHeight = 36;
	this.gift1.lineWidth = 488;
	this.gift1.parent = this;
	this.gift1.setTransform(275,225.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gift1},{t:this.gift2},{t:this.gift3},{t:this.gift4},{t:this.gift5}]}).wait(1));

	// Layer_6
	this.shlq_btn = new lib.shlq_btn();
	this.shlq_btn.name = "shlq_btn";
	this.shlq_btn.parent = this;
	this.shlq_btn.setTransform(608,579);
	new cjs.ButtonHelper(this.shlq_btn, 0, 1, 2, false, new lib.shlq_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.shlq_btn).wait(1));

	// Layer_5
	this.lq5_btn = new lib.lq1_btn();
	this.lq5_btn.name = "lq5_btn";
	this.lq5_btn.parent = this;
	this.lq5_btn.setTransform(849.5,506.9);
	new cjs.ButtonHelper(this.lq5_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq4_btn = new lib.lq1_btn();
	this.lq4_btn.name = "lq4_btn";
	this.lq4_btn.parent = this;
	this.lq4_btn.setTransform(847.5,439.9);
	new cjs.ButtonHelper(this.lq4_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq3_btn = new lib.lq1_btn();
	this.lq3_btn.name = "lq3_btn";
	this.lq3_btn.parent = this;
	this.lq3_btn.setTransform(847.5,372.9);
	new cjs.ButtonHelper(this.lq3_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq2_btn = new lib.lq1_btn();
	this.lq2_btn.name = "lq2_btn";
	this.lq2_btn.parent = this;
	this.lq2_btn.setTransform(849.5,306);
	new cjs.ButtonHelper(this.lq2_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.lq1_btn = new lib.lq1_btn();
	this.lq1_btn.name = "lq1_btn";
	this.lq1_btn.parent = this;
	this.lq1_btn.setTransform(847.5,239);
	new cjs.ButtonHelper(this.lq1_btn, 0, 1, 2, false, new lib.lq1_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lq1_btn},{t:this.lq2_btn},{t:this.lq3_btn},{t:this.lq4_btn},{t:this.lq5_btn}]}).wait(1));

	// Layer_3
	this.instance = new lib.sanf();
	this.instance.parent = this;
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.mask_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,380);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Ehdvg7XMC7fAAAMAAAB2vMi7fAAAg");
	this.shape.setTransform(600,380);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,379,1202,763);
// library properties:
lib.properties = {
	id: 'D166172034D4439287824EBF877C24D4',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sanfang_modal_atlas_.png?1535082033226", id:"sanfang_modal_atlas_"}
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