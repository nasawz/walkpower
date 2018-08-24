(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sanfang_modal_atlas_", frames: [[1338,0,662,766],[0,0,667,767],[0,831,192,60],[0,769,192,60],[0,893,191,56],[193,893,191,56],[669,0,667,767],[1338,768,677,748]]}
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



(lib.shlqdown = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.st_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.弹框h5版2_03 = function() {
	this.spriteSheet = ss["sanfang_modal_atlas_"];
	this.gotoAndStop(7);
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


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click',function(){})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1).p("Eg6lhoNMB1LAAAMAAADQbMh1LAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(41,41,41,0.8)").s().p("Eg6lBoOMAAAjQbMB1LAAAMAAADQbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask, new cjs.Rectangle(-376,-668,752,1336), null);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

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

	// Layer_6
	this.gift5 = new cjs.Text("唱吧麦颂/2小时欢唱", "24px 'Arial'", "#FF8B00");
	this.gift5.name = "gift5";
	this.gift5.lineHeight = 36;
	this.gift5.lineWidth = 349;
	this.gift5.alpha = 0.80000000;
	this.gift5.parent = this;
	this.gift5.setTransform(101.1,753);

	this.gift4 = new cjs.Text("唱吧麦颂/2小时欢唱", "24px 'Arial'", "#FF8B00");
	this.gift4.name = "gift4";
	this.gift4.lineHeight = 36;
	this.gift4.lineWidth = 341;
	this.gift4.alpha = 0.80000000;
	this.gift4.parent = this;
	this.gift4.setTransform(104.1,665);

	this.gift3 = new cjs.Text("唱吧麦颂/2小时欢唱", "24px 'Arial'", "#FF8B00");
	this.gift3.name = "gift3";
	this.gift3.lineHeight = 36;
	this.gift3.lineWidth = 346;
	this.gift3.alpha = 0.80000000;
	this.gift3.parent = this;
	this.gift3.setTransform(100.1,582);

	this.gift2 = new cjs.Text("唱吧麦颂/2小时欢唱", "24px 'Arial'", "#FF8B00");
	this.gift2.name = "gift2";
	this.gift2.lineHeight = 36;
	this.gift2.lineWidth = 344;
	this.gift2.alpha = 0.80000000;
	this.gift2.parent = this;
	this.gift2.setTransform(100.1,494);

	this.gift1 = new cjs.Text("唱吧麦颂/2小时欢唱", "24px 'Arial'", "#FF8B00");
	this.gift1.name = "gift1";
	this.gift1.lineHeight = 36;
	this.gift1.lineWidth = 341;
	this.gift1.parent = this;
	this.gift1.setTransform(101.1,409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gift1},{t:this.gift2},{t:this.gift3},{t:this.gift4},{t:this.gift5}]}).wait(7));

	// Layer_4
	this.instance = new lib.弹框h5版2_03();
	this.instance.parent = this;
	this.instance.setTransform(27,242);

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
	this.instance_4 = new lib.mask();
	this.instance_4.parent = this;
	this.instance_4.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.5,666.5,751,1335);
// library properties:
lib.properties = {
	id: '248DFC3ACE69489199DD208FB6330BFD',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sanfang_modal_atlas_.png?1535093243244", id:"sanfang_modal_atlas_"}
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