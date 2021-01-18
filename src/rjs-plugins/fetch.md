# Fetch

A plugin to fetch, just like window.fetch!

## Features

- Stay consistent with `window.fetch` API.
- Make conscious trade-off when following [WHATWG fetch spec][whatwg-fetch] and [stream spec](https://streams.spec.whatwg.org/) implementation details, document known differences.
- Use native promise and async functions.
- Use native Node streams for body, on both request and response.
- Decode content encoding (gzip/deflate/brotli) properly, and convert string output (such as `res.text()` and `res.json()`) to UTF-8 automatically.
- Useful extensions such as redirect limit, response size limit, [explicit errors][error-handling.md] for troubleshooting.

## Loading and configuring the module

```js
const fetch = require('rovel.js').fetch;
```

If you want to patch the global object in node:

```js
const fetch = require('rovel.js').fetch;

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}
```

# Usage

## Get content as:
## Plain text or HTML

```js
const fetch = require('rovel.js').fetch;

const response = await fetch('https://github.com/');
const body = await response.text();

console.log(body);
```

### JSON

```js
const fetch = require("rovel.js").fetch;

const response = await fetch('https://api.github.com/users/github');
const json = await response.json();

console.log(json);
```

### Simple Post

```js
const fetch = require("rovel.js").fetch;

const response = await fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'});
const json = await response.json();

console.log(json);
```

### Post with JSON

```js
const fetch = require("rovel.js").fetch;

const body = {a: 1};

const response = await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const json = await response.json();

console.log(json);
```

### Post with form parameters

`URLSearchParams` is available on the global object in Node.js as of v10.0.0. See [official documentation](https://nodejs.org/api/url.html#url_class_urlsearchparams) for more usage methods.

NOTE: The `Content-Type` header is only set automatically to `x-www-form-urlencoded` when an instance of `URLSearchParams` is given as such:

```js
const fetch = require("rovel.js").fetch;

const params = new URLSearchParams();
params.append('a', 1);

const response = await fetch('https://httpbin.org/post', {method: 'POST', body: params});
const json = await response.json();

console.log(json);
```

### Handling exceptions

NOTE: 3xx-5xx responses are _NOT_ exceptions, and should be handled in `then()`, see the next section.

Wrapping the fetch function into a `try/catch` block will catch _all_ exceptions, such as errors originating from node core libraries, like network errors, and operational errors which are instances of FetchError. See the [error handling document][error-handling.md] for more details.

```js
const fetch = require("rovel.js").fetch;

try {
	await fetch('https://domain.invalid/');
} catch (error) {
	console.log(error);
}
```

### Handling client and server errors

It is common to create a helper function to check that the response contains no client (4xx) or server (5xx) error responses:

```js
const fetch = require("rovel.js").fetch;

class HTTPResponseError extends Error {
	constructor(response, ...args) {
		this.response = response;
		super(`HTTP Error Response: ${res.status} ${res.statusText}`, ...args);
	}
}

const checkStatus = response => {
	if (response.ok) {
		// response.status >= 200 && response.status < 300
		return res;
	} else {
		throw new HTTPResponseError(response);
	}
}

const response = await fetch('https://httpbin.org/status/400');

try {
	checkStatus(response);
} catch (error) {
	console.error(error);

	const errorBody = await error.response.text();
	console.error(`Error body: ${errorBody}`);
}
```

### Handling cookies

Cookies are not stored by default. However, cookies can be extracted and passed by manipulating request and response headers. See [Extract Set-Cookie Header](#extract-set-cookie-header) for details.