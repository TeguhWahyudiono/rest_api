'use strict';

const e = require("express");

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};