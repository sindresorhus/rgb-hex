'use strict';

var test = require('ava');
var rgbHex = require('./');

test(function (t) {
	t.is(rgbHex(0, 0, 0), '000000');
	t.is(rgbHex(65, 131, 196), '4183c4');
	t.throws(rgbHex.bind(rgbHex, 0, 999, 0));
});
