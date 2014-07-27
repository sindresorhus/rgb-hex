'use strict';
var test = require('ava');
var rgbHex = require('./');

test(function (t) {
	t.assert(rgbHex(0, 0, 0) === '000000');
	t.assert(rgbHex(65, 131, 196) === '4183c4');
});
