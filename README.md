![](https://travis-ci.org/godkun/egg-msg-flash-v2.svg?branch=master)

# egg-msg-flash-v2


<!--
Description here.
-->

## Install

```bash
$ npm i egg-msg-flash-v2 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.msgFlashV2 = {
  enable: true,
  package: 'egg-msg-flash-v2',
};

```

## Configuration

```js
// {app_root}/config/config.default.js
exports.msgFlashV2 = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
ctx.msgFlashV2 = {
  type: 'success',
  message: {
    some: 'one'
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
