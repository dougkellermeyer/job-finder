// Karma configuration
// Generated on Wed Oct 10 2018 13:52:43 GMT-0400 (Eastern Daylight Time)

const nodeModule = (moduleName) => {
  return {
    pattern: require.resolve(moduleName),
    type: 'js',
    watched: false,
    included: true
  }
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      nodeModule('angular/angular'),
      nodeModule('angular-utils-pagination/dirPagination'),
      nodeModule('angular-animate/angular-animate'),
      nodeModule('angular-aria/angular-aria'),
      nodeModule('angular-messages/angular-messages'),
      nodeModule('angular-material/angular-material'),
      nodeModule('angular-mocks'),
      nodeModule('@uirouter/core/_bundles/ui-router-core'),
      nodeModule('@uirouter/angularjs'),
      'src/**/*.js',
      'test/unit/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
