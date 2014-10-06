exports.generateReport = function (dataDriver, startDate, endDate, callback) {
    dataDriver.getData(startDate, endDate, function (err, data) {
        var result = [];

        for (var i = 0; i < data.length; i++) {

        }
    });
};

exports.daysBetween = function (startDate, endDate) {
    if (startDate === undefined) {
        throw new Error("startDate cannot be empty");
    }

    if(endDate === undefined){
        throw new Error("endDate cannot be empty");
    }

    return (endDate - startDate) / (1000 * 60 * 60 * 24);
};