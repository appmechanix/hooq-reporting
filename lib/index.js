var moment = require('moment');

var engine = {};

engine.generateReport = function (dataDriver, startDate, endDate, callback) {
    if (dataDriver === undefined) {
        throw new Error("dataDriver cannot be undefined");
    }

    if (startDate === undefined) {
        throw new Error("startDate cannot be undefined");
    }

    if (endDate === undefined) {
        throw new Error("endDate cannot be undefined");
    }

    if (callback === undefined) {
        throw new Error("callback cannot be undefined");
    }

    dataDriver.getData(startDate, endDate, function (err, data) {
        var result = [];
        var daysToLoop = engine.daysBetween(startDate, endDate);

        if (err) {
            callback(err, null);
            return;
        }

        if (data === null) {
            for (var i = 0; i < daysToLoop; i++) {
                result.push(0);
            }

            callback(null, result);
            return;
        }


        for (var i = 0; i < daysToLoop; i++) {
            var dayData = data.filter(function (value, i) {
                return value.date === moment(startDate);
            });

            if (dayData === null || dayData.length === 0) {
                result.push(0);
            }
        }

        callback(null, result);
    });
};

engine.daysBetween = function (startDate, endDate) {
    if (startDate === undefined) {
        throw new Error("startDate cannot be undefined");
    }

    if (endDate === undefined) {
        throw new Error("endDate cannot be undefined");
    }

    return (endDate - startDate) / (1000 * 60 * 60 * 24);
};

module.exports = engine;