import test from 'ava';
import m from './';

test(t => {
	t.is(m(0, 0, 0), '000000');
	t.is(m(65, 131, 196), '4183c4');
});
