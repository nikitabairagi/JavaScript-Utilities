Array.prototype.filter = function(callbackFn, thisArg) {
	let length = this.length;
	let result = [];

	for (let i = 0; i < length; i++) {
		if (this[i] && callbackFn(thisArg, this[i], i, this)) {
			result.push(this[i]);
		}
	}

	return result;
};