// Karma configuration
// Generated on Tue Dec 06 2016 16:36:46 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // Set a "proxy" so that the JSON test data files can be retrieved via AJAX.
    proxies: {
      '/test/': '/base/test/'
    },


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/data/**/*.json', included: false, served: true},
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/autocomplete-lhc/source/autoCompBase.js',
      'bower_components/element-resize-detector/dist/element-resize-detector.js',
      'bower-dist/lforms.js',
      'app/scripts/fhir/*/lformsFHIR.js',
      'test/karma/*.js',
      'test/data/*.js',
      'test/data/R4/*.js',
      'test/data/STU3/*.js',
      'app/data/test-data.js'
    ],

    // list of files to exclude
    exclude: [
      'app/scripts/index.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    client: {
      captureConsole: true
    },


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
