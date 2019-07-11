
function car()
{
	this.firstInput=element(by.model('first'));
	this.secondInput=element(by.model('second'));;
	this.gobutton=element(by.id('gobutton'))
	this.result=element(by.css("h2[class='ng-binding']"));
	this.text=element(by.css("h2[class='ng-binding']"));
  
	
 this.getURL=function()
 {
    	browser.get("https://juliemr.github.io/protractor-demo/");
	};
	
};

module.exports=new car();

//a.getModle();
//console.log(a.engine);
//console.log(a.color);