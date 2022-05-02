---
title: Introduction To Rovel Discord List
description: Give users a bird eye's view of RDL
---

## Rovel Discord List

You Managed to come over here!
This docs is about [Rovel Discord List](https://discord.rovelstars.com)

Rovel Discord List (or RDL in short), is a discord listing service for bots, servers, users, api libraries, emojis, stickers and much more!
RDL is in alpha, and is having a rewrite at the moment.
The current version of RDL's api should be referred to v0, and not v1. You can refer rewrite's api to v1.

The current (v0) version of api documentation can be found here: [documentation on v0 api](/rdl/api)

### Some Common Terms that we relate to

### Bot's Code
Api Authentication Token for Bots to access specific endpoints like `/bots/info` or posting at `/bots/:id/code`, etc.

Conventions:
You can use either `/?code={BotCode}` in the url itself, or if you like the traditional authentication with headers, use `RDL-code: {BotCode}` in headers.

### User's Token
Api Authentication Token for Users to access specific endpoints like `/bots/:id/code` or changing preferences at `/api/preferences`, etc.

Conventions:
Normally you can visit these links in the same browser where you logged into RDL.
Or, You can use either `/?key={BotCode}` in the url itself, or if you like the traditional authentication with headers, use `RDL-key: {UserKey}` in headers.

:::tip You Don't Need to post your bot's server stats!
We do a little bit of magic ✨ in order to show your bot server count automatically on the site! You generally don't need to post your bot's server stats, unless you want non-approximate server count. Do note that we show approx count on the site itself (like 21k servers and 5k votes) so you don't really need to post your bot's server stats. But if you still want to continue, I wish you good luck coding your bot!
:::
