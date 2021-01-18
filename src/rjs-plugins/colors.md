# colors

> Easily add coloring to your text and symbols in the terminal. A faster drop-in replacement for chalk, kleur and turbocolor (without the dependencies and rendering bugs).


![image](https://user-images.githubusercontent.com/383994/39635445-8a98a3a6-4f8b-11e8-89c1-068c45d4fff8.png)

## Why use this?

Colors plugin is _the one of the fastest, if not the **fastest** Node.js library for terminal styling_. A more performant drop-in replacement for chalk, with no dependencies.

* _Blazing fast_ - Fastest terminal styling library in node.js, 10-20x faster than chalk!

* _Drop-in replacement_ for [chalk](https://github.com/chalk/chalk).
* _No dependencies_ (Chalk has 7 dependencies in its tree!)

* _Safe_ - Does not modify the `String.prototype` like [colors](https://github.com/Marak/colors.js).
* Supports [nested colors](#nested-colors), **and does not have the [nested styling bug](#nested-styling-bug) that is present in [colorette](https://github.com/jorgebucaran/colorette), [chalk](https://github.com/chalk/chalk), and [kleur](https://github.com/lukeed/kleur)**.
* Supports [chained colors](#chained-colors).
* [Toggle color support](#toggle-color-support) on or off.

## Usage

```js
const text = require("rovel.js").text;

console.log(text.red('This is a red string!'));
console.log(text.green('This is a red string!'));
console.log(text.cyan('This is a cyan string!'));
console.log(text.yellow('This is a yellow string!'));
```

![image](https://user-images.githubusercontent.com/383994/39653848-a38e67da-4fc0-11e8-89ae-98c65ebe9dcf.png)

## Chained colors

```js
console.log(text.bold.red('this is a bold red message'));
console.log(text.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(text.green.bold.underline('this is a bold green underlined message'));
```

![image](https://user-images.githubusercontent.com/383994/39635780-7617246a-4f8c-11e8-89e9-05216cc54e38.png)

## Nested colors

```js
console.log(text.yellow(`foo ${text.red.bold('red')} bar ${text.cyan('cyan')} baz`));
```

![image](https://user-images.githubusercontent.com/383994/39635817-8ed93d44-4f8c-11e8-8afd-8c3ea35f5fbe.png)

### Nested styling bug

`ansi-colors` does not have the nested styling bug found in [colorette](https://github.com/jorgebucaran/colorette), [chalk](https://github.com/chalk/chalk), and [kleur](https://github.com/lukeed/kleur).

```js
const { bold, red } = require('ansi-styles');
console.log(bold(`foo ${red.dim('bar')} baz`));

const colorette = require('colorette');
console.log(colorette.bold(`foo ${colorette.red(colorette.dim('bar'))} baz`));

const kleur = require('kleur');
console.log(kleur.bold(`foo ${kleur.red.dim('bar')} baz`));

const chalk = require('chalk');
console.log(chalk.bold(`foo ${chalk.red.dim('bar')} baz`));
```

**Results in the following**

(sans icons and labels)

![image](https://user-images.githubusercontent.com/383994/47280326-d2ee0580-d5a3-11e8-9611-ea6010f0a253.png)

## Toggle color support

Easily enable/disable colors.

```js
const text = require("rovel.js").text;

// disable colors manually
text.enabled = false;

// or use a library to automatically detect support
text.enabled = require('color-support').hasBasic;

console.log(text.red('I will only be colored red if the terminal supports colors'));
```

## Strip ANSI codes

Use the `.unstyle` method to strip ANSI codes from a string.

```js
console.log(text.unstyle(text.blue.bold('foo bar baz')));
//=> 'foo bar baz'
```

## Available styles

**Note** that bright and bright-background colors are not always supported.

| Colors  | Background Colors | Bright Colors | Bright Background Colors |
| ------- | ----------------- | ------------- | ------------------------ |
| black   | bgBlack           | blackBright   | bgBlackBright            |
| red     | bgRed             | redBright     | bgRedBright              |
| green   | bgGreen           | greenBright   | bgGreenBright            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           |
| blue    | bgBlue            | blueBright    | bgBlueBright             |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |
| gray    |                   |               |                          |
| grey    |                   |               |                          |

_(`gray` is the U.S. spelling, `grey` is more commonly used in the Canada and U.K.)_

### Style modifiers

* dim
* **bold**

* hidden
* _italic_

* underline
* inverse
* ~~strikethrough~~

* reset

## Aliases

Create custom aliases for styles.

```js
const colors = require('rovel.js').text;

colors.alias('primary', colors.yellow);
colors.alias('secondary', colors.bold);

console.log(colors.primary.secondary('Foo'));
```

## Themes

A theme is an object of custom aliases.

```js
const colors = require('rovel.js').text;

colors.theme({
  danger: colors.red,
  dark: colors.dim.gray,
  disabled: colors.gray,
  em: colors.italic,
  heading: colors.bold.underline,
  info: colors.cyan,
  muted: colors.dim,
  primary: colors.blue,
  strong: colors.bold,
  success: colors.green,
  underline: colors.underline,
  warning: colors.yellow
});

// Now, we can use our custom styles alongside the built-in styles!
console.log(colors.danger.strong.em('Error!'));
console.log(colors.warning('Heads up!'));
console.log(colors.info('Did you know...'));
console.log(colors.success.bold('It worked!'));
```