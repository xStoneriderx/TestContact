const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './frontend/*.spec.js',
      './frontend/**/*.html'
    ],
    preprocessors: {
      './frontend/**/*.js': ['webpack', 'coverage'],
      './frontend/**/*.html': ['html2js']
    },
    html2JsPreprocessor: {
      stripPrefix: 'frontend/'
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig
  });
};
