export default class SelectModal {
  stage;
  exportRoot;
  fnStartAnimation;
  ep;
  init(ep) {
    this.ep = ep;
    var comp = AdobeAn.getComposition('BB2E763C01F640CB8E12385CE18CCC8D');
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
    this.exportRoot = new lib.select_modal();
    this.ep.emit('selectModal', this.exportRoot);
  }
}
