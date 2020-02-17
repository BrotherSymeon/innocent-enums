
export default class Enumeration {
  constructor(enumLabels, capitalize = false) {
    const retVal = {};
    function fromArray(arr) {
      var i = 0, LBL = "";
      retVal.MAX = enumLabels.length;

      // generate the enum literals as capitalized keys/properties
      for (i; i <= enumLabels.length - 1; i++) {
        LBL = enumLabels[i].toUpperCase();
        retVal[retVal[LBL] = i] = LBL;
      }

      // prevent any runtime change to the enumeration
      Object.freeze(retVal);
      return retVal;

    }
    function fromObject(obj) {
      const retVal = {};

      return retVal;
    }

    if (Array.isArray(enumLabels)) {
      return fromArray(enumLabels);
    } else if (this._isPlainObject(enumLabels)) {
      return fromObject(enumLabels);
    }

  }
  _isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
  }

}
