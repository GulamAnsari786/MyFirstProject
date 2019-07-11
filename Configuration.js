var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		allScriptsTimeout: 90000,
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//direct connect,
  specs: ['element.js'],
  //capabilities: {
	//  'browserName': 'internet explorer'
	//}
  onPrepare: (function(){
	  browser.driver.manage().window().maximize();
	    jasmine.getEnv().addReporter(
	            new Jasmine2HtmlReporter({
	              savePath: 'target/screenshots'
	            })
	          );
	       
  }),
  
 // suites:{
	// smoke: ['Action.js','Calculator.js'] 
 // },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};