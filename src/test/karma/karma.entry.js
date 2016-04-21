'use strict';

require('angular2/bundles/angular2-polyfills');

var browser = require('angular2/platform/testing/browser');
var testing = require('angular2/testing');
var context = require.context('../specs/', true, /\.spec\.ts$/);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

testing.setBaseTestProviders(
    browser.TEST_BROWSER_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_APPLICATION_PROVIDERS
);

context.keys()
    .forEach(context);