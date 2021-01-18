# Node Emoji
This plugin provides simple text to emoji conversation for your projects 😏

## Usage
```js
var emoji = require('rovel.js').emoji
emoji.get('coffee') // returns the emoji code for coffee (displays emoji on terminals that support it)
emoji.which(emoji.get('coffee')) // returns the string "coffee"
emoji.get(':fast_forward:') // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
emoji.emojify('I :heart: :coffee:!') // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"
emoji.random() // returns a random emoji + key, e.g. `{ emoji: '❤️', key: 'heart' }`
emoji.search('cof') // returns an array of objects with matching emoji's. `[{ emoji: '☕️', key: 'coffee' }, { emoji: ⚰', key: 'coffin'}]`
emoji.unemojify('I ❤️ 🍕') // replaces the actual emoji with :emoji:, in this case: returns "I :heart: :pizza:"
emoji.find('🍕') // Find the `pizza` emoji, and returns `({ emoji: '🍕', key: 'pizza' })`;
emoji.find('pizza') // Find the `pizza` emoji, and returns `({ emoji: '🍕', key: 'pizza' })`;
emoji.hasEmoji('🍕') // Validate if this library knows an emoji like `🍕`
emoji.hasEmoji('pizza') // Validate if this library knowns a emoji with the name `pizza`
emoji.strip('⚠️ 〰️ 〰️ low disk space') // Strips the string from emoji's, in this case returns: "low disk space".
emoji.replace('⚠️ 〰️ 〰️ low disk space', (emoji) => `${emoji.key}:`) // Replace emoji's by callback method: "warning: low disk space"
```

## Options

### onMissing
`emoji.emojify(str, onMissing)`

As second argument, `emojify` takes an handler to parse unknown emojis. Provide a function to add your own handler:

```js
var onMissing = function (name) {
  return name;
});

var emojified = emoji.emojify('I :unknown_emoji: :star: :another_one:', onMissing);
// emojified: I unknown_emoji ⭐️ another_one
```

### format
`emoji.emojify(str, onMissing, format)`

As third argument, `emojify` takes an handler to wrap parsed emojis. Provide a function to place emojis in custom elements, and to apply your custom styling:

```js
var format = function (code, name) {
  return '<img alt="' + code + '" src="' + name + '.png" />';
});

var emojified = emoji.emojify('I :unknown_emoji: :star: :another_one:', null, format);
// emojified: I <img alt="❤️" src="heart.png" /> <img alt="☕️" src="coffee.png" />
```

## Adding new emoji
Emoji come from js-emoji (Thanks a lot :thumbsup:). You can get a JSON file with all emoji here: https://raw.githubusercontent.com/rovelstars/rovel.js/master/plugins/node-emoji/lib/emoji.json

To update the list or add custom emoji, clone this repository and put them into `lib/emojifile.js`.
Then run `node emojiparse` in the lib directory.
This should generate the new emoji.json file and output `Done.`.

That's all, you now have more emoji you can use! :clap: