module.exports = 123;

// use amd module style
require([
    "./amd",
    "./labeled"],
    function(amd1, labeled1) {
        var amd2 = require('./amd');
        var labeled2 = require('./labeled');
    }
)