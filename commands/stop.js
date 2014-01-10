var client = require('../');
var ui = require('../lib/ui');

module.exports = function(id, opts) {
	if (!id) return ui.error('Service name required');

	var c = client(opts.remote);
	var unspin = ui.spin('Stopping', id);
	c.stop(id, unspin);
};