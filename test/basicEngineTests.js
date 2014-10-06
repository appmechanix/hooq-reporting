var engine = require('../lib/index');

exports.checkThat30ResultsGetReturned = function (test) {
    var startDate = new Date(2014, 9, 1);
    var endDate = new Date(2014, 9, 31);
    var testEngine = {
        getData: function (startDate, endDate, callback) {
            callback(null, []);
        }
    };

    engine.generateReport(testEngine, startDate, endDate, function (err, data) {
        test.equal(30, data.length);
        test.done();
    });
};

exports.checkThatNullResultGets30DaysReturned = function (test) {
    var startDate = new Date(2014, 9, 1);
    var endDate = new Date(2014, 9, 31);
    var testEngine = {
        getData: function (startDate, endDate, callback) {
            callback(null, null);
        }
    };

    engine.generateReport(testEngine, startDate, endDate, function (err, data) {
        test.equal(30, data.length);
        test.done();
    });
};

exports.checkThatDataDriverErrorGetsSent = function (test) {
    var startDate = new Date(2014, 9, 1);
    var endDate = new Date(2014, 9, 31);
    var testEngine = {
        getData: function (startDate, endDate, callback) {
            callback("DOH", null);
        }
    };

    engine.generateReport(testEngine, startDate, endDate, function (err, data) {
        test.ok(err);
        test.equal("DOH", err);
        test.equal(null, data);
        test.done();
    });
};


exports.checkThatOneDayOfDataIsReturned = function (test) {
    var startDate = new Date(2014, 9, 1);
    var endDate = new Date(2014, 9, 2);
    var testEngine = {
        getData: function (startDate, endDate, callback) {
            callback(
                null,
                [
                    {date: new Date(2014, 9, 1), value: 10}
                ]
            );
        }
    };

    engine.generateReport(testEngine, startDate, endDate, function (err, data) {
        test.ok(data);
        test.equal(1, data.length);
        test.equal(new Date(2014, 9, 1).getTime(), data[0].date.getTime());
        test.equal(10, data[0].value);
        test.done();
    });
};