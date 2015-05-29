# React Date Picker

A simple and reusable datepicker component for React ([Demo](https://sleepy-plains-7516.herokuapp.com/))

This is a fork of the original react-datepicker. The differences are as follows:

- Supports React 0.12
- Fixed an issue where changing locale didn't work 
- Added a node server to serve the example folder

![](https://cloud.githubusercontent.com/assets/1412392/5339491/c40de124-7ee1-11e4-9f07-9276e2545f27.png)

## Configuration

- Change date format by passing a different date format in the props: `dateFormat: "YYYY/MM/DD"`
- Add placeholder text: `placeholderText: 'Click to select a date'` (Defaults to the selected date when no placeholder text is added)
- Give users a predefined date range: `minDate: moment()` & `maxDate: moment().add(5, 'days')` (this gives users the ability to select a date between today and 5 days in the future)
- Set custom moment.js instance (could have defined custom locale settings): `moment: require('./foo/moment')`
- Set custom locale settings for locale: `locale: "cs"`
- Set date format for callendar: `dateFormatCallendar: "YYYY/MM/DD"`
- Set custom weekdays (for locale days): `weekdays: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']`

## Installation

Installing is really simple and can be done in multiple ways:

- Install with npm: `npm install react-datepicker-compat --save`

## Local Development

- Install Bower `npm install -g bower`
- Install Bower Packages `bower install`
- Install packages `npm install`
- Run `grunt watch` in order to watch for local changes and run tests/build the code.
- Start a node webserver:
	- `$ cd example`
	- `$ node server.js`
	- And visit `localhost:8000` to see the example.

You should see the HTML returned.

To run tests, simply run `npm test`.

## License

Copyright (c) 2014 HackerOne Inc. and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
