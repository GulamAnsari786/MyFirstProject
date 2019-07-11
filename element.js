describe('My first script', function(){
	var obj=require("./Jsobject.js");
	var using=require("jasmine-data-provider"); 
	var d=require("./data.js");
	beforeEach(function(){
		obj.getURL();
	}),
	using(d.datadriven, function (data, description) {
	
	
	it('element with locator'+ description, function(){
		
		
		obj.firstInput.sendKeys(data.firstinput);
		obj.secondInput.sendKeys(data.secondinput);
		obj.gobutton.click();
		expect(obj.result.getText()).toBe(data.result);
		obj.text.getText().then(function(text){
			
		console.log(text);
		})	
		})
		})
})
		afterEach(function(){
	
	console.log("Completed");

	})
