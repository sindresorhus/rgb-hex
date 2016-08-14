'use strict';
/* eslint-disable no-mixed-operators */
module.exports = (red, green, blue) => {
	if (typeof red === 'string') {
		const res = red.match(/\b\d{1,3}\b/g).map(Number);
		// TODO: use destructuring when targeting Node.js 6
		red = res[0];
		green = res[1];
		blue = res[2];
	}

	if (typeof red !== 'number' ||
		typeof green !== 'number' ||
		typeof blue !== 'number' ||
		red > 255 ||
		green > 255 ||
		blue > 255) {
		throw new TypeError('Expected three numbers below 256');
	}

	return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
};
