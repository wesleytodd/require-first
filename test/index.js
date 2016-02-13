/* global describe, it */
var requireFirst = require('../');
var assert = require('assert');
var fixtures = __dirname + '/fixtures';

describe('require-first', function () {
	it('should require the first file it finds', function () {
		var f1 = requireFirst.require([
			fixtures + '/dir1',
			fixtures + '/dir2'
		], 'f1');
		assert.equal(f1, 'dir1/f1');

		var f2 = requireFirst.require([
			fixtures + '/dir1',
			fixtures + '/dir2'
		], 'f2');
		assert.equal(f2, 'dir2/f2');
	});

	it('should require all files in a directory', function () {
		var f = requireFirst.requireAll([
			fixtures + '/dir1',
			fixtures + '/dir2'
		]);
		assert.equal(f['f1.js'], 'dir1/f1');
		assert.equal(f['f2.js'], 'dir2/f2');
	});
});
