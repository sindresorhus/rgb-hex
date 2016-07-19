'use strict';

var test = require('ava');
var rgbHex = require('./');
var cli = require('./cli');

test('lib', function (t) {
	t.is(rgbHex(0, 0, 0), '000000');
	t.is(rgbHex(65, 131, 196), '4183c4');
	t.throws(rgbHex.bind(rgbHex, 0, 999, 0));
});

test('cli', function (t) {
	t.throws(cli);
	t.throws(cli.bind(cli, [ ]));
	t.throws(cli.bind(cli, [0, 0]));
	t.throws(cli.bind(cli, [0, 0, 0, 0]));
	t.throws(cli.bind(cli, [0, 999, 0]));
	t.throws(cli.bind(cli, ['-h']));
	t.throws(cli.bind(cli, ['--help']));
	t.is(cli([0, 0, 0]), '000000');
	t.is(cli([65, 131, 196]), '4183c4');
	t.is(cli(['255, 204, 0']), 'ffcc00');
	t.is(cli(['255,204,0']), 'ffcc00');
	t.is(cli(['rgb(255,204,0)']), 'ffcc00');
	t.is(cli(['rgb(255, 204, 0)']), 'ffcc00');
	t.is(cli(['rgb(255,', '204,', '0)']), 'ffcc00');
});
