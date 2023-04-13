Array.prototype.myMap = function (callbackFn, thisArg) {
  let length = this.length; 
  let result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (this[i]){
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return result;
};