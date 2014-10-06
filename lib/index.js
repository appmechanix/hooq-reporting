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
            for (var x = 0; x < daysToLoop; x++) {
                result.push(0);
            }

            callback(null, result);
            return;
        }

        for (var i = 0; i < daysToLoop; i++) {
            var loopDate = moment(startDate).add(i, 'day').toDate();

            var dayData = data.filter(function (value, i) {
                return value.date.getTime() === loopDate.getTime();
            });

            if (dayData === null || dayData === undefined || dayData.length === 0) {
                result.push({
                    date: loopDate,
                    value: 0
                });
            } else {
                result.push({
                    date: loopDate,
                    value: dayData[0].value
                });
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