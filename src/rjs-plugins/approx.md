# approx
This plugin allows you to convert normal number into approxed number. (More like human readable number 😎)

# Usage
```js
const approx = require("rovel.js").approx
console.log(approx(1234));
//> 1.2k

console.log(approx(12345));
//> 12k

console.log(approx(1234, {decimal: false}));
//> 1k

console.log(approx(1234, {decimal: ','}));
//> 1,2k

console.log('My Stack Overflow reputation is %s.', approx(3671, {
  min10k: true
}));
//> My Stack Overflow reputation is 3,671.

console.log('The US national debt is %s.', approx(19939034457936, {
  prefix: '$', 
  capital: true, 
  round: true
}));
// > The US national debt is $20T.
```

## Options

* **separator** {String|Boolean} Default = `','`. Thousands separator - set to a string (e.g. '.') to use that string or false to not use any separator.
* **decimal** {String|Boolean} Default = `'.'`. Decimal - set to a string (e.g. ',') to use that or set to false to avoid outputting values with a decimal.
* **round** {Boolean} Default = `false`. Round numbers off rather than flooring/truncating. When true, 105000 would become '11m', when false it becomes '10m'.
* **min10k** {Boolean} Default = `false`. Do not abbreviate numbers below 10000. E.g. 9999 would become '9,999' rather than '9k'. (Stack Overflow-style).
* **prefix** {String} Default = `''`. Optional string to prepend to the value, e.g. '$'.
* **suffix** {String} Default = `''`. Optional string to append to the value, e.g. '%'.
* **capital** {Boolean} Default = `false`. Set to true to use capital letters, e.g. 3.9M instead of 3.9m