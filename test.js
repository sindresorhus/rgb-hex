import test from 'ava';
import m from './';

test(t => {
	t.is(m(0, 0, 0), '000000');
	t.is(m(65, 131, 196), '4183c4');
	t.is(m('255 154 253'), 'ff9afd');
	t.is(m('rgb(40, 42, 54)'), '282a36');
});
