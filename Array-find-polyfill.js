/**
 * Polyfill for ES6's Array.find()
 *
 * Array.prototype.find(predicate, thisArg?)
 * returns the first array element for which the callback predicate returns true. If there is no such element, it returns undefined.
 */

(function () {
  if (Array.prototype.find) {
    return;
  }

  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    // >>> (Zero-fill right shift) allows indexOf to be called on array-like objects that might have weird length properties.
    // eg. var fakeArray = { length: -3, '0': true, '1': false, '2': null };
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
})();
