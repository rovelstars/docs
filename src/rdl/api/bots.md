---
title: Bots API
description: Can't describe how much pain is writing documentation
---

## All Bots `/bots`

> Returns an array of all bots

```js
[
    {
    "card": {
        "img": "https://discord.rovelstars.com/favicon.ico",
        "msg": "hey visitor! This is a sample Announcement!",
        "title": "Testing card Announcement!"
    },
    "owners": [
        "602902050677981224"
    ],
    "verified": false,
    "added": true,
    "servers": 66,
    "promoted": false,
    "votes": 82,
    "badges": [],
    "id": "603213294265958400",
    "username": "Rovel Bot",
    "discriminator": "9886",
    "avatar": "bbd3d9fd43a003615fbe1e39cd12398d",
    "short": "The best bot for everyone on discord",
    "desc": "<p>The official public bot for RDL.\nCan do awesome jobs like adding your server on RDL (you&#39;re on the RDL website).</p>\n<p>Check all the cool commands by typing <code>R!help</code></p>\n",
    "prefix": "R!",
    "lib": "discord.js",
    "support": "953XCpHbKF",
    "bg": "https://media.discordapp.net/attachments/775225719743053844/865613582431813662/0bb6dqsiab451.gif",
    "github": "https://github.com/rovelstars/rovel.js",
    "website": "https://rovelstars.ga/",
    "donate": "https://discord.gg/953XCpHbKF",
    "invite": "https://discord.com/api/oauth2/authorize?client_id=603213294265958400&permissions=278100045030&scope=bot",
    "slug": "hmm",
    "owned": true,
    "status": "online",
    "addedAt": "2021-04-09T06:57:03.470Z"
},
//... other bots
]
```

Use Query Parameter `/?q={searchTerm}` to narrow down search results!
:::

You can even use search term like `"slug":"hmm"` or similar compressed json in order to further narrow down your search results!

## Specific Bot `/bots/:id`

> Returns a single bot

```js
{
    "card": {},
    "owners": [
        "151916651988647936"
    ],
    "verified": false,
    "added": true,
    "servers": 1,
    "promoted": false,
    "votes": 0,
    "badges": [],
    "id": "169678500893163520",
    "username": "Erisly",
    "discriminator": "7552",
    "avatar": "4f6e6396574ede61c96fc2bfcdf3ccc3",
    "short": "Erisly is a Goddess who plays as a fun Discord bot with various features such as cleverbot, a global economy, NSFW commands, meme generators, custo...",
    "desc": "<style>\n.erisly-text {\ntext-align: center;\n}\n.erisly-img {\nfloat: left;\nmax-width: 20vw !important;\nmargin: 24px;\n}\n</style>\n\n<h1 class=\"erisly-text\"><a href=\"https://erisly.com\">Click me to visit my full website!</a></h1>\n\n<img class=\"erisly-img\" alt=\"Erisly Banner Image\" src=\"https://erisly.com/assets/img/erisly/birthday6/FullT.png\" />\n\n<div class=\"erisly-text\">\nHiya! My name is Erisly, your friendly neighbourhood Goddess! I use my powers and talents to play as a \"Discord Bot\", where I provide you some quality features and commands for your Discord Server! My commands include NSFW commands, a global economy and idle game, cleverbot, various Discord lookup commands for members, invites and servers, lookup commands for Minecraft, Overwatch and the largest game database RAWG, GIF searching, various meme generators, <b>and so much more!</b> I also know multiple languages, support customizable prefixes for every server, and don't lock any commands or features behind upvotes or donations!\n\n<ul>\n<li><strong>Global Economy + Idle Game</strong>: Collect coins, hire employees, construct floors in your tower to build your empire! Compete with over 50,000 other players across Discord!</li>\n<li><strong>Cleverbot</strong>: Talk to Erisly and have fun conversations with her!</li>\n<li><strong>NSFW Commands</strong>: Use the &quot;>booru&quot; command to search for anime, hentai, ecchi and porn from the most popular NSFW and SFW boorus including Rule34, Gelbooru, Realbooru and more! <strong>NSFW commands can only be used in channels marked as NSFW.</strong></li>\n<li><strong>Game Lookup</strong>: Search up users and servers on Minecraft, and also full user stats for Overwatch. Plus, search the largest game database for any game, thanks to RAWG.</li>\n<li><strong>Random Commands</strong>: Random cats, dogs and bird pictures, password generators, Chuck Norris facts, Garfield and XKCD comics, and more!</li>\n<li><strong>Weather Commands</strong>: Search the current weather, 5 day and 24 hour forecast!</li>\n<li><strong>Image/Meme Generators</strong>: My meme generator commands provide over 100 meme templates to choose from!</li>\n</ul>\n<h3><b>And so much more!</b></h3>\n</div>\n<br />\n<h1 class=\"erisly-text\"><a href=\"https://erisly.com/invite\">So what are you waiting for? Invite me to your server today!</a></h1>",
    "prefix": ">",
    "lib": "Eris",
    "support": "erisly",
    "bg": null,
    "website": "https://erisly.com/",
    "donate": "https://erisly.com/premium",
    "invite": "https://erisly.com/invite?ref=rdl",
    "slug": "169678500893163520",
    "status": "online",
    "addedAt": "2022-05-01T09:38:49.296Z"
}
```

> Returns this if not found

```json
{"err":"not_found"}
```

## Get Info About Bot by it's code `/bots/info`

> Returns bot object like above if **code** query or authentication header is present

> Returns this if **code** query is not present:

```json
{"err":"no_code"}
```

> Returns this if **code** is invalid:

```json
{"err":"invalid_code"}
```

## Post Card Info of a bot `/bots/:id/card`

> Body in JSON:

```json
{
    "img": "https://discord.rovelstars.com/favicon.ico",
        "msg": "hey visitor! This is a sample Announcement!",
        "title": "Testing card Announcement!"
}
```

> Returns this after success:

```json
{"card":"updated"}
```

> Else Returns any of these based on conditions:

```js
{ err: "bot_not_found" } //for not finding bot

{ err: "invalid_img" } // if image is not an URL

{ err: "no_code" } //if you don't provide bot code haha
```

## Get Bot's Code `/bots/:id/code`

User Side Route!
This Route can be accessed only by users (bot owners in this case) and not bots!

Visit This On the same browser where you logged into RDL, or add a query `/?key={key}` to the end of api link.

> Returns this if successful:

```json
{"code":"RDL-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"}
```

> Returns any one of these for failed requests:

```js
{ err: "invalid_key" } //go brrr, just log in and re-request it!

{ err: "no_bot_found" } //GO BRRR, throw your keyboard and get a new one!

{ err: "unauth" } //epic fail, try it on your own bot!

{ err: "no_key" } //EPIC FAIL, welcome to failure management!
```

## Create a short link for your bot! `/bots/:id/slug`

This Route can be accessed only by users (bot owners in this case) and not bots!

Visit This On the same browser where you logged into RDL, or add a query `/?key={key}` to the end of api link.

> Returns the bot's current if no `?slug={shortName} is passed:

```js
{"slug":"hmm"} //or will show your bot id if no slug was present
```

> Returns the (new) slug if `?slug={shortName} is passed:

```json
{"slug":"shortName"}
```

> Returns any one of these for failed requestrs:

```js
{ err: "invalid_key" } //go brrr, just log in and re-request it!

{ err: "no_bot_found" } //GO BRRR, throw your keyboard and get a new one!

{ err: "unauth" } //epic fail, try it on your own bot!

{ err: "no_key" } //EPIC FAIL, welcome to failure management!

{ err: "used_slug" } //rest in peace, try different name? or maybe add "bot" to the end of slug that you tried
```

## Post Server Stats `/bots/:id/servers`

> Body in JSON:

```json
{
    "count": 100,
}
```

> Returns successful response if **code** query or authentication header is present

```json
{"success":true}
```

> Returns this if **code** query is not present:

```json
{"err":"no_code"}
```

> Returns this if **code** is invalid:

```json
{"err":"invalid_code"}
```

> Returns this if ~~**you're sus**~~ server count is not a number:

```json
{ "err": "NaN" }
```
