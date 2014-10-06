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