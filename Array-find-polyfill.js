/**
 * Polyfill for array find()
 *
 * Array.prototype.find(predicate, thisArg?)
 * returns the first array element for which the callback predicate returns true. If there is no such element, it returns undefined.
 */

(function () {
  if (Array.prototype.find) {
    return;
  }

  var find = function (predicate) {
    var list = this;
    var length = list.length < 0 ? 0 : list.length;

    if (length === 0) {
      return undefined;
    }

    if (typeof predicate !== 'function') {
      throw new TypeError('Array.find predicate must be a function');
    }

    var thisArg = arguments[1];
    for (var i = 0, value; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };

  if (Object.defineProperty) {
    try {
      Object.defineProperty(Array.prototype, 'find', {
        value: find,
        configurable: true,
        enumerable: false,
        writable: true
      });
    } catch (e) {
      console.log('Error while using Objec.defineProperty');
    }

    if (!Array.prototype.find) {
      Array.prototype.find = find;
    }
  }
})();