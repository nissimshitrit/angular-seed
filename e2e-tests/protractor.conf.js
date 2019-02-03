//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  onPrepare: function() {
  //var jasmineReporters = require('jasmine-node-reporter-fix');
  //var capsPromise = browser.getCapabilities();
  //capsPromise.then(function (caps) {
    //jasmine.getEnv().addReporter(
      //new jasmineReporters.JUnitXmlReporter(
        //'protractor_output', true));
	//});
	var reporters = require('jasmine-reporters');
	var junitReporter = new reporters.JUnitXmlReporter({
		savePath: 'prot_output',
		consolidateAll: false
	});
	jasmine.getEnv().addReporter(junitReporter);
  }

};
