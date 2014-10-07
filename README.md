hooq-reporting
==============

Generates hit graph data for hooq/chartjs. Requires a driver to actually fetch data, so can be backed onto any data source.

There is a hooq driver you can look at - https://github.com/dwnz/hooq-reporting-drivers-mongo

Installing
==========

```bash
npm install hooq-reporting --save
```

Example Usage
=============

```js
var reportEngine = require('hooq-reporting');
var reportDriver = require('DRIVERNAME');

reportEngine.generateReport(reportDriver, new Date(2014,09,01), new Date(2014,09,31), function(err, data) {
    console.log(data);
});
```

Methods
=======

.generateReport(driver, start date, end date, callback) - returns report data

.daysBetween(start date, end date) - returns number of days between two dates
