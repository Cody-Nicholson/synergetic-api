// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

<<<<<<< HEAD
const { SpecReporter } = require('jasmine-spec-reporter');
=======
/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');
>>>>>>> f141890a0f0eb267176fdc9eba13af32e75ff1f8

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
<<<<<<< HEAD
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
=======
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
>>>>>>> f141890a0f0eb267176fdc9eba13af32e75ff1f8
  }
};
