/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var Promise = require('../../lib/Promise');
	var monitor = require('../../lib/monitor');
	var PromiseStatus = require('../../monitor/console');
	return monitor(PromiseStatus, Promise);

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
