var engine = require('../lib/index');

exports.checkThatDaysBetweenIs30 = function (test) {
    var startDate = new Date(2014, 9, 1);
    var endDate = new Date(2014, 9, 31);

    var result = engine.daysBetween(startDate, endDate);

    test.equal(30, result);
    test.done();
};

exports.checkThatDaysBetweenIs0 = function (test) {
    var startDate = new Date(2014, 9, 31);
    var endDate = new Date(2014, 9, 31);

    var result = engine.daysBetween(startDate, endDate);

    test.equal(0, result);
    test.done();
};

exports.checkThatEmptyStartDateThrowsError = function (test) {
    var endDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.daysBetween(undefined, endDate)
        },
        Error
    );
    test.done();
};

exports.checkThatEmptyEndDateThrowsError = function (test) {
    var startDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.daysBetween(startDate, undefined)
        },
        Error
    );
    test.done();
};

exports.checkThatBothEmptyThrowsStartDateError = function (test) {
    var startDate = new Date(2014, 9, 31);

    test.throws(function () {
            engine.daysBetween(undefined, undefined)
        },
        Error
    );
    test.done();
};
