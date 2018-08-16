export default class Test {
  canvas;
  stage;
  exportRoot;
  anim_container;
  dom_overlay_container;
  fnStartAnimation;
  target_canvas;
  init() {
    this.target_canvas = document.getElementById('canvas');
    this.canvas = document.getElementById('canvas_test');
    this.anim_container = document.getElementById('animation_container');
    this.dom_overlay_container = document.getElementById('dom_overlay_container');
    var comp = AdobeAn.getComposition('29581F431D944269B91C16911D5E4A1D');
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', evt => {
      this.handleFileLoad(evt, comp);
    });
    loader.addEventListener('complete', evt => {
      this.handleComplete(evt, comp);
    });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
  handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && evt.item.type == 'image') {
      images[evt.item.id] = evt.result;
    }
  }
  handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [queue.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames
      });
    }
    this.exportRoot = new lib.modal_test();
    this.stage = new lib.Stage(this.canvas);
    //Registers the "tick" event listener.
    this.fnStartAnimation = () => {
      this.stage.addChild(this.exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener('tick', this.stage);
    };
    //Code to support hidpi screens and responsive scaling.
    let makeResponsive = (isResp, respDim, isScale, scaleType) => {
      var lastW,
        lastH,
        lastS = 1;
      let resizeCanvas = () => {
        var w = lib.properties.width,
          h = lib.properties.height;
        var iw = window.innerWidth,
          ih = window.innerHeight;
        var pRatio = window.devicePixelRatio || 1,
          xRatio = iw / w,
          yRatio = ih / h,
          sRatio = 1;
        if (isResp) {
          if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
            sRatio = lastS;
          } else if (!isScale) {
            if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
          } else if (scaleType == 1) {
            sRatio = Math.min(xRatio, yRatio);
          } else if (scaleType == 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        this.canvas.width = this.target_canvas.width;
        this.canvas.height = this.target_canvas.height;
        this.canvas.style.width = this.target_canvas.style.width;
        this.canvas.style.height = this.target_canvas.style.height;
        this.stage.scaleX = pRatio * sRatio;
        this.stage.scaleY = pRatio * sRatio;
        lastW = iw;
        lastH = ih;
        lastS = sRatio;
        this.stage.tickOnUpdate = false;
        this.stage.update();
        this.stage.tickOnUpdate = true;
      };
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
    };
    makeResponsive(true, 'both', true, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    this.fnStartAnimation();
  }
}
