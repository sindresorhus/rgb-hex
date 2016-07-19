#!/usr/bin/env node

'use strict';

var rgbHex = require('.');
var tty = require('tty');

var help = function() {
	return [
		'',
		'  Usage:',
		'    rgb-hex [options] <R> <G> <B>',
		'',
		'  Options:',
		'    -h, --help  show this message',
		'',
		'  Examples:',
		'    rgb-hex 255 204 0',
		'    rgb-hex 255, 204, 0',
		'    rgb-hex 255,204,0',
		'    rgb-hex rgb(255, 204, 0)',
		'    rgb-hex rgb(255,204,0)',
		''
	].join('\n');
};

var isIntegerInvalid = function(number) {
	return isNaN(number) ||
				 number < 0 ||
				 number > 255;
};

var main = function(options) {
	var numbers = /\b[0-9]{1,3}\b/g;
	var colors = options.join(' ').match(numbers);

	var needHelp = options.indexOf('-h') != -1 ||
								 options.indexOf('--help') != -1 ||
								 colors.length != 3;

	if (needHelp) {
		throw new Error(help());
	}

	colors = colors.map(parseInterger);

	return rgbHex.apply(rgbHex, colors);
};

var parseInterger = function(color) {
	return parseInt(color);
};

if (require.main == module) {
	try {
		var options = process.argv.slice(2);
		var hex = main(options);

		process.stdout.write(hex);

		if (tty.isatty(process.stdout.fd)) {
			process.stdout.write('\n');
		}
	} catch (exception) {
		process.stderr.write(exception.message + '\n');
		process.exit(1);
	}
} else {
	module.exports = main;
}
