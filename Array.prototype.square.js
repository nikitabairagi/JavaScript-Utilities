Array.prototype.square = function () {
	let length = this.length;
	let result = [];

	for (let i = 0; i < length; i++) {
		result.push(this[i] * this[i]);
	}

	return result;
}