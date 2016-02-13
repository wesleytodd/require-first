var path = require('path');
var fs = require('fs');

module.exports = {
	require: lookerRequire,
	requireAll: requireAll
};

function lookerRequire (paths, name) {
	var found = null;

	paths.forEach(function (p) {
		// Use first found module
		if (found) {
			return;
		}

		// Resolve absolute path to require
		p = path.resolve(path.join(p, name));

		// Require it
		try {
			found = require(p);
		} catch (e) {
			// ignore
		}
	});

	return found;
}

function requireAll (paths, done) {
	var found = {};

	paths.forEach(function (p) {
		var files = fs.readdirSync(p);

		files.forEach(function (f) {
			// Use first found module
			if (found[f]) {
				return;
			}

			// Resolve absolute path to require
			var pf = path.resolve(path.join(p, f));

			// Require it
			try {
				found[f] = require(pf);
			} catch (e) {
				// ignore
			}
		});
	});

	return found;
}
