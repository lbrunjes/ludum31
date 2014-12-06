	//iniitalize the game obeject nbow that good things 
	//have been done to the prototype
	//this file should be the last included
	this.init();

}

gameInstance.prototype = new diesel.proto.game();

var game = new gameInstance();
