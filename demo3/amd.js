define(
    'app/amd',
    [
    './commonjs',
    './labeled'
], function(commonjs1, labeled1) {
    'use strict';
    var commonjs2 = require('./commonjs');
    var labeled2 = require('./labeled');
    return 456;
});