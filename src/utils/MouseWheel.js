/*
 * mousewheel.js (c) Doomin|Joy-Studio
 * @example
 *     mouseWheel.on(el, callback)
 *     mouseWheel.on(el, callback, false) do NOT prevent default event
 *     mouseWheel.un(el, callback)
*/
var mouseWheel = (function() {
  var doc = document,
    types = ['DOMMouseScroll', 'mousewheel'],
    fixedEvent = function(e) {
      e.wheel = (e.wheelDelta ? e.wheelDelta : -e.detail) > 0 ? 1 : -1;
      e.wheelDir = e.wheel > 0 ? 10 : -10;
      return e;
    };

  //return the api method
  return {
    on: function(el, fn, preventDefault) {
      if (typeof preventDefault !== 'boolean') {
        preventDefault = true;
      }

      var fixedFn = function(e) {
          e = fixedEvent(e || window.event);
          if (preventDefault) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }
          fn.call(el, e);
        },
        wheelHash = el.wheelHash;

      if (!wheelHash) {
        wheelHash = {};
        wheelHash[fn] = fixedFn;
        el.wheelHash = wheelHash;
      } else {
        //ignore the repeat event
        if (wheelHash[fn]) return;
        wheelHash[fn] = fixedFn;
      }

      if (doc.addEventListener) {
        var i = types.length;
        while (i--) {
          el.addEventListener(types[i], fixedFn, false);
        }
      } else {
        el.attachEvent('onmousewheel', fixedFn);
      }
    },
    un: function(el, fn) {
      if (!el.wheelHash) return;
      var wheelHash = el.wheelHash;
      if (doc.removeEventListener) {
        var i = types.length;
        while (i--) {
          el.removeEventListener(types[i], wheelHash[fn], false);
        }
      } else {
        el.detachEvent('onmousewheel', wheelHash[fn]);
      }
      delete wheelHash[fn];
    }
  };
})();

export { mouseWheel };
