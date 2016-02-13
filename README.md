# Require the first module that matches in a set of directories

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/wesleytodd/nighthawk.svg?branch=master)](https://travis-ci.org/wesleytodd/nighthawk)
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[npm-image]: https://img.shields.io/npm/v/require-first.svg
[npm-url]: https://npmjs.org/package/require-first
[downloads-image]: https://img.shields.io/npm/dm/require-first.svg
[downloads-url]: https://npmjs.org/package/require-first

A utility library to help finding and requiring modules.  Given a set of paths to look in, the module will find the first requireable match and require it.

## Usage

```
$ npm install --save require-first
```

```javascript
var requireFirst = new require('require-first');

var dir = 'path/to/root'

var f1 = requireFirst.require([
	dir + '/dir1',
	dir + '/dir2'
], 'file1');

// f1 will be the exported value of the file 'path/to/root/dir1/file1.js' if it exists,
// othwrwise it will be the the value exported by 'path/to/root/dir2/file1.js'
```

You can also require all the modules found in a set of directories but only the first of each filename will be loaded.

```javascript
var requireFirst = new require('require-first');

var dir = 'path/to/root'

var f = requireFirst.requireAll([
	dir + '/dir1',
	dir + '/dir2'
]);

// f will be an objecy with a key for each file found in both dir1 and dir2
// The first name match for each file will be the only one required
```
