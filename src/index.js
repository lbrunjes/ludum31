
var  gameInstance = function(){




	this.context = {

	};

	//called at instance creation.
	//the dom is likely not to be  loaded
	//diesel may not exist.
	this.init = function(){

	};

	//called at diesel start
	//dom should be loaded
	//diesel should exist
	this.startup = function(){


	};

	this.screens = {};
	this.events = {};
	this.objects = {};


}
gameInstance.prototype = new diesel.proto.game();

