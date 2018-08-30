(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"power_body_atlas_", frames: [[304,227,133,101],[0,0,811,225],[0,227,302,59],[0,288,269,25]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.web_02 = function() {
	this.spriteSheet = ss["power_body_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.web_03 = function() {
	this.spriteSheet = ss["power_body_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.web_04 = function() {
	this.spriteSheet = ss["power_body_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.web_15 = function() {
	this.spriteSheet = ss["power_body_atlas_"];
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


(lib.title_word = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.web_03();
	this.instance.parent = this;
	this.instance.setTransform(-401,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_word, new cjs.Rectangle(-401,-116,811,225), null);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mingdan_txt = new cjs.Text("定时达奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥", "12px 'SimSun'", "#F08300");
	this.mingdan_txt.name = "mingdan_txt";
	this.mingdan_txt.lineHeight = 14;
	this.mingdan_txt.lineWidth = 323;
	this.mingdan_txt.parent = this;
	this.mingdan_txt.setTransform(-161.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.mingdan_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.5,-8.7,327,17.5);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mingdan_txt = new cjs.Text("定时达奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥", "12px 'SimSun'", "#F08300");
	this.mingdan_txt.name = "mingdan_txt";
	this.mingdan_txt.lineHeight = 14;
	this.mingdan_txt.lineWidth = 323;
	this.mingdan_txt.parent = this;
	this.mingdan_txt.setTransform(-161.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.mingdan_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.5,-8.7,327,17.5);


(lib.title_ban = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title_time
	this.instance = new lib.web_04();
	this.instance.parent = this;
	this.instance.setTransform(334,191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title_word
	this.instance_1 = new lib.web_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223,23);

	this.title_word = new lib.title_word();
	this.title_word.parent = this;
	this.title_word.setTransform(624,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_word},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_ban, new cjs.Rectangle(223,23,811,227), null);


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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.title_ban = new lib.title_ban();
	this.title_ban.parent = this;
	this.title_ban.setTransform(512.5,127.5,1,1,0,0,0,512.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.title_ban).wait(1).to({regX:628.5,regY:136.5,x:628.5,y:136.5},0).wait(13).to({regX:512.5,regY:127.5,x:514.5,y:125.5},0).wait(1).to({regX:628.5,regY:136.5,x:630.5,y:134.5},0).wait(19).to({regX:512.5,regY:127.5,x:512.5,y:127.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223,23,811,227);


// stage content:
(lib.power_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// power_mingdan 
	this.instance = new lib.mingdan_mc();
	this.instance.parent = this;
	this.instance.setTransform(709.5,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// power_logo
	this.instance_1 = new lib.web_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// power_title
	this.title_mc = new lib.title_mc();
	this.title_mc.parent = this;
	this.title_mc.setTransform(550.3,162.5,1,1,0,0,0,512.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1200,760);
// library properties:
lib.properties = {
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/power_body_atlas_.png", id:"power_body_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;