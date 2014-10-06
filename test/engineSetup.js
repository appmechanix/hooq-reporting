var engine = require('../lib/index');

exports.checkThatEmptyStartDateThrowsError = function (test) {
    var endDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.generateReport({}, undefined, endDate, function () {
            })
        },
        Error
    );
    test.done();
};

exports.checkThatEmptyEndDateThrowsError = function (test) {
    var startDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.generateReport({}, startDate, undefined, function () {
            })
        },
        Error
    );
    test.done();
};

exports.checkThatEmptyEngineThrowsError = function (test) {
    test.throws(function () {
            engine.generateReport();
        },
        Error
    );
    test.done();
};

exports.checkThatEmptyCallbackThrowsError = function (test) {
    var startDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.generateReport({}, startDate, startDate)
        },
        Error
    );
    test.done();
};