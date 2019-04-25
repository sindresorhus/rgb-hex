import test from 'ava';
import rgbHex from '.';

test('main', t => {
	t.is(rgbHex(0, 0, 0), '000000');
	t.is(rgbHex(65, 131, 196), '4183c4');
	t.is(rgbHex('255 154 253'), 'ff9afd');
	t.is(rgbHex('rgb(40, 42, 54)'), '282a36');
	t.is(rgbHex(0, 0, 0, 0), '00000000');
	t.is(rgbHex(0, 0, 0, 0.5), '00000080');
	t.is(rgbHex(0, 0, 0, '50%'), '00000080');
	t.is(rgbHex(0, 0, 0, '100%'), '000000ff');
	t.is(rgbHex(65, 131, 196, 0.2), '4183c433');
	t.is(rgbHex('255 154 253, 0.8'), 'ff9afdcc');
	t.is(rgbHex('160 82 45 .4'), 'a0522d66');
	t.is(rgbHex(40, 42, 54, 0.75), '282a36bf');
	t.is(rgbHex(40, 42, 54, '75%'), '282a36bf');
	t.is(rgbHex('rgba(40, 42, 54, 75%)'), '282a36bf');
});
