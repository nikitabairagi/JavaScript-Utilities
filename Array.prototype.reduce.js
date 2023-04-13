Array.prototype.reduce = function(callbackFn, initialValue) {
	const noInitialValue = initialValue === undefined;
	const len = this.length;

	if (noInitialValue && len === 0) {
		throw new TypeError("Reduce of empty array with no initial value");
	}

	let result = noInitialValue ? this[0] : initialValue;
	let startIndex = noInitialValue ? 1 : 0;

	for (let i = 0; i < len; i++) {
		if (Object.hasOwn(this, i)) {
			result = callbackFn(result, this[i], i, this);
		}
 	}

 	return result;
};