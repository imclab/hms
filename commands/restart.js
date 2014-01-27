var client = require('../');
var ui = require('../lib/ui');

module.exports = function(remote, id, opts) {
	if (!id) return ui.error('Service name required');

	var c = client(remote);
	var unspin = ui.spin('Restarting', id);
	c.restart(id, unspin);
};