(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"walkpower_atlas_", frames: [[1445,486,76,48],[1785,212,90,111],[1540,459,82,71],[1369,0,161,202],[1737,459,77,45],[1445,370,93,114],[1532,0,148,111],[1325,370,82,53],[1202,0,165,218],[1811,432,79,20],[1545,219,119,105],[1545,113,121,104],[1545,326,120,104],[1202,323,121,105],[1202,430,120,104],[1324,430,119,104],[1682,106,101,106],[1667,326,101,104],[1666,219,103,105],[1682,0,103,104],[1770,326,101,104],[1785,106,101,104],[0,0,1200,760],[1202,220,133,101],[966,762,811,225],[1540,432,269,25],[1787,58,111,34],[1624,459,111,34],[0,762,964,371],[1369,204,174,164],[1787,0,154,56]]}
];


// symbols:



(lib.boy_arm = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy_bag = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy_leg = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy_main = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl_arm = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl_beg = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl_hair = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl_leg = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.girl_main = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.shengyu = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sm1 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sm2 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sm3 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.sm4 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sm5 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.sm6 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ss1 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ss2 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ss3 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ss4 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ss5 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ss6 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.web_01 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.web_02 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.web_03 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.web_15 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.活动规则down = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.活动规则 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.路线 = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.骰子bg = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.骰子go = function() {
	this.spriteSheet = ss["walkpower_atlas_"];
	this.gotoAndStop(30);
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


(lib.tile_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AjbDcIAAm3IG3AAIAAG3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tile_mc, new cjs.Rectangle(-22,-22,44,44), null);


(lib.power_bgimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.web_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,760);


(lib.girl_main_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_main();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-109,165,218);


(lib.girl_leg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_leg();
	this.instance.parent = this;
	this.instance.setTransform(-41,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-26.5,82,53);


(lib.girl_hair_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_hair();
	this.instance.parent = this;
	this.instance.setTransform(-74,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-55.5,148,111);


(lib.girl_beg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_beg();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-57,93,114);


(lib.girl_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.girl_arm();
	this.instance.parent = this;
	this.instance.setTransform(-66,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-17,77,45);


(lib.disc_hd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sm1();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-52.5);

	this.instance_1 = new lib.sm2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60.5,-52.5);

	this.instance_2 = new lib.sm3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60.5,-52.5);

	this.instance_3 = new lib.sm4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60.5,-52.5);

	this.instance_4 = new lib.sm5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-60.5,-52.5);

	this.instance_5 = new lib.sm6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-60.5,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-52.5,119,105);


(lib.dice_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shengyu();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dice_label, new cjs.Rectangle(-39.5,-10,79,20), null);


(lib.btn_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.活动规则();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-17);

	this.instance_1 = new lib.活动规则down();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55.5,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-17,111,34);


(lib.boy_main_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_main();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-101,161,202);


(lib.boy_leg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_leg();
	this.instance.parent = this;
	this.instance.setTransform(-41,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-71,82,71);


(lib.boy_bag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_bag();
	this.instance.parent = this;
	this.instance.setTransform(-45,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-55.5,90,111);


(lib.boy_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.boy_arm();
	this.instance.parent = this;
	this.instance.setTransform(-38,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-24,76,48);


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


(lib.luxian_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.tiles_xy=[]
		
		for(var i=1;i<=27;i++){
			window.tiles_xy.push([this['tile'+i].x,this['tile'+i].y])
		}
		console.log('------')
		console.log(window.tiles_xy)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.tile27 = new lib.tile_mc();
	this.tile27.name = "tile27";
	this.tile27.parent = this;
	this.tile27.setTransform(1013.4,632.9);

	this.tile26 = new lib.tile_mc();
	this.tile26.name = "tile26";
	this.tile26.parent = this;
	this.tile26.setTransform(1013.4,522.9);

	this.tile24 = new lib.tile_mc();
	this.tile24.name = "tile24";
	this.tile24.parent = this;
	this.tile24.setTransform(1017.4,424.9);

	this.tile25 = new lib.tile_mc();
	this.tile25.name = "tile25";
	this.tile25.parent = this;
	this.tile25.setTransform(1013.4,468.9);

	this.tile23 = new lib.tile_mc();
	this.tile23.name = "tile23";
	this.tile23.parent = this;
	this.tile23.setTransform(937.4,424.9);

	this.tile22 = new lib.tile_mc();
	this.tile22.name = "tile22";
	this.tile22.parent = this;
	this.tile22.setTransform(885.5,424.9);

	this.tile21 = new lib.tile_mc();
	this.tile21.name = "tile21";
	this.tile21.parent = this;
	this.tile21.setTransform(822.5,424.9);

	this.tile20 = new lib.tile_mc();
	this.tile20.name = "tile20";
	this.tile20.parent = this;
	this.tile20.setTransform(822.5,478.9);

	this.tile19 = new lib.tile_mc();
	this.tile19.name = "tile19";
	this.tile19.parent = this;
	this.tile19.setTransform(826.5,529);

	this.tile18 = new lib.tile_mc();
	this.tile18.name = "tile18";
	this.tile18.parent = this;
	this.tile18.setTransform(826.5,584.9);

	this.tile17 = new lib.tile_mc();
	this.tile17.name = "tile17";
	this.tile17.parent = this;
	this.tile17.setTransform(782.5,628.9);

	this.tile16 = new lib.tile_mc();
	this.tile16.name = "tile16";
	this.tile16.parent = this;
	this.tile16.setTransform(681.5,628.9);

	this.tile15 = new lib.tile_mc();
	this.tile15.name = "tile15";
	this.tile15.parent = this;
	this.tile15.setTransform(627.5,628.9);

	this.tile14 = new lib.tile_mc();
	this.tile14.name = "tile14";
	this.tile14.parent = this;
	this.tile14.setTransform(627.5,577.9);

	this.tile13 = new lib.tile_mc();
	this.tile13.name = "tile13";
	this.tile13.parent = this;
	this.tile13.setTransform(627.5,468.9);

	this.tile12 = new lib.tile_mc();
	this.tile12.name = "tile12";
	this.tile12.parent = this;
	this.tile12.setTransform(627.5,417.9);

	this.tile11 = new lib.tile_mc();
	this.tile11.name = "tile11";
	this.tile11.parent = this;
	this.tile11.setTransform(552.5,413.9);

	this.tile10 = new lib.tile_mc();
	this.tile10.name = "tile10";
	this.tile10.parent = this;
	this.tile10.setTransform(485.5,413.9);

	this.tile9 = new lib.tile_mc();
	this.tile9.name = "tile9";
	this.tile9.parent = this;
	this.tile9.setTransform(413.5,417.9);

	this.tile8 = new lib.tile_mc();
	this.tile8.name = "tile8";
	this.tile8.parent = this;
	this.tile8.setTransform(413.5,495.9);

	this.tile7 = new lib.tile_mc();
	this.tile7.name = "tile7";
	this.tile7.parent = this;
	this.tile7.setTransform(413.5,548.9);

	this.tile6 = new lib.tile_mc();
	this.tile6.name = "tile6";
	this.tile6.parent = this;
	this.tile6.setTransform(409.5,632.9);

	this.tile5 = new lib.tile_mc();
	this.tile5.name = "tile5";
	this.tile5.parent = this;
	this.tile5.setTransform(318.6,628.9);

	this.tile4 = new lib.tile_mc();
	this.tile4.name = "tile4";
	this.tile4.parent = this;
	this.tile4.setTransform(265.6,628.9);

	this.tile3 = new lib.tile_mc();
	this.tile3.name = "tile3";
	this.tile3.parent = this;
	this.tile3.setTransform(245,573);

	this.tile1 = new lib.tile_mc();
	this.tile1.name = "tile1";
	this.tile1.parent = this;
	this.tile1.setTransform(245,417.9);

	this.tile2 = new lib.tile_mc();
	this.tile2.name = "tile2";
	this.tile2.parent = this;
	this.tile2.setTransform(245,485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tile2},{t:this.tile1},{t:this.tile3},{t:this.tile4},{t:this.tile5},{t:this.tile6},{t:this.tile7},{t:this.tile8},{t:this.tile9},{t:this.tile10},{t:this.tile11},{t:this.tile12},{t:this.tile13},{t:this.tile14},{t:this.tile15},{t:this.tile16},{t:this.tile17},{t:this.tile18},{t:this.tile19},{t:this.tile20},{t:this.tile21},{t:this.tile22},{t:this.tile23},{t:this.tile25},{t:this.tile24},{t:this.tile26},{t:this.tile27}]}).wait(1));

	// 图层_1
	this.instance = new lib.路线();
	this.instance.parent = this;
	this.instance.setTransform(113,329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxian_mc, new cjs.Rectangle(113,329,964,371), null);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(this)
		window.girl = this
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// girl_main
	this.instance = new lib.girl_main_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-158},11).to({y:-160},12).wait(1));

	// girl_arm
	this.instance_1 = new lib.girl_arm_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-28.4},11).to({rotation:0,x:-29.4},12).wait(1));

	// girl_hair
	this.instance_2 = new lib.girl_hair_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1,y:-182.5},11).to({x:0,y:-184.5},12).wait(1));

	// girl_beg
	this.instance_3 = new lib.girl_beg_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-110.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// girl_leg
	this.instance_4 = new lib.girl_leg_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-269,177.5,269);


(lib.dice_ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{huangdong:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.instance = new lib.ss3();
	this.instance.parent = this;
	this.instance.setTransform(-52,-53);

	this.instance_1 = new lib.disc_hd1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.instance_2 = new lib.ss1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51,-53);

	this.instance_3 = new lib.ss5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-51,-52);

	this.instance_4 = new lib.ss6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-51,-52);

	this.instance_5 = new lib.ss4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-52,-52);

	this.instance_6 = new lib.ss2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-51,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-53,103,105);


(lib.dice_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.dice_mc=this
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 骰子-go.png
	this.instance = new lib.骰子go();
	this.instance.parent = this;
	this.instance.setTransform(-154,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dice_ss
	this.ss = new lib.dice_ss();
	this.ss.name = "ss";
	this.ss.parent = this;
	this.ss.setTransform(-66.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.ss).wait(1));

	// shengyu.png
	this.dice_label = new lib.dice_label();
	this.dice_label.name = "dice_label";
	this.dice_label.parent = this;
	this.dice_label.setTransform(-69.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.dice_label).wait(1));

	// 骰子-bg.png
	this.instance_1 = new lib.骰子bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-174,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.dice_mc, new cjs.Rectangle(-174,-170,174,170), null);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.boy=this
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// boy_main
	this.instance = new lib.boy_main_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.5,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-159},9).to({y:-161},10).wait(1));

	// boy_arm
	this.instance_1 = new lib.boy_arm_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40,-118,1,1,0,0,0,21,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:20.9,rotation:15,x:-40.1},9).to({regY:-0.1,rotation:0,x:-40,y:-118.1},10).wait(1));

	// boy_leg
	this.instance_2 = new lib.boy_leg_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-35.5,1,1,0,0,0,0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// boy_bag
	this.instance_3 = new lib.boy_bag_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-262,175,262);


// stage content:
(lib.walkpower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
		
		window.game={}
		
		window.game.btn_intro=this.btn_intro
		
		if(window.gameReady){
			window.gameReady()
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.btn_intro = new lib.btn_intro();
	this.btn_intro.name = "btn_intro";
	this.btn_intro.parent = this;
	this.btn_intro.setTransform(925.5,297);
	new cjs.ButtonHelper(this.btn_intro, 0, 1, 2, false, new lib.btn_intro(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_intro).wait(2));

	// disc_mc
	this.instance = new lib.dice_mc();
	this.instance.parent = this;
	this.instance.setTransform(1113,678,1,1,0,0,0,-87,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// power_mingdan 
	this.instance_1 = new lib.mingdan_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(704.5,297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// power_logo
	this.instance_2 = new lib.web_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// power_title
	this.instance_3 = new lib.web_03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(260,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// power_boy
	this.instance_4 = new lib.boy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.8,422,0.394,0.427);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// power_gilr
	this.instance_5 = new lib.girl();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74.9,422,0.389,0.416,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2));

	// power_luxian
	this.instance_6 = new lib.luxian_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(595,514.5,1,1,0,0,0,595,514.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2));

	// power_bg
	this.instance_7 = new lib.power_bgimg("synched",0);
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,380,1201,760);
// library properties:
lib.properties = {
	id: 'CCBAC15313E34F7CA9B7FCA0D59D14DA',
	width: 1200,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/walkpower_atlas_.png?1534403610691", id:"walkpower_atlas_"}
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