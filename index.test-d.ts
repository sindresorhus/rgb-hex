import {expectType} from 'tsd';
import rgbHex from './index.js';

expectType<string>(rgbHex('rgb(40, 42, 54)'));
expectType<string>(rgbHex(65, 131, 196));
expectType<string>(rgbHex(65, 131, 196, 0.2));
expectType<string>(rgbHex(40, 42, 54, '75%'));
