# @tadashi/ee

[![NPM version][npm-img]][npm] [![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]: https://img.shields.io/npm/v/@tadashi/ee.svg
[npm]: https://www.npmjs.com/package/@tadashi/ee
[ci-img]: https://github.com/lagden/ee/actions/workflows/nodejs.yml/badge.svg
[ci]: https://github.com/lagden/ee/actions/workflows/nodejs.yml
[coveralls-img]: https://coveralls.io/repos/github/lagden/ee/badge.svg?branch=main
[coveralls]: https://coveralls.io/github/lagden/ee?branch=main

---

EventEmitter Singleton

## Install

```
$ npm i @tadashi/ee
```

## Usage

```js
// log.js
import ee from '@tadashi/ee'

function _log(data) {
  console.log(data)
}

ee.on('logger', _log)

// ---

// app.js
import ee from '@tadashi/ee'

ee.emit('logger', {
  message: 'apenas um show',
})
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

MIT © [Thiago Lagden](https://github.com/lagden)
