/**
Convert RGB(A) color to HEX.

@example
```
import rgbHex from 'rgb-hex';

rgbHex(65, 131, 196);
//=> '4183c4'

rgbHex('rgb(40, 42, 54)');
//=> '282a36'

rgbHex(65, 131, 196, 0.2);
//=> '4183c433'

rgbHex(40, 42, 54, '75%');
//=> '282a36bf'

rgbHex('rgba(40, 42, 54, 75%)');
//=> '282a36bf'
```
*/
export default function rgbHex(rgba: string): string;
export default function rgbHex(red: number, green: number, blue: number, alpha?: string | number): string; // eslint-disable-line  no-redeclare
