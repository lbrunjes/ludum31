if(!this.events){
	this.events={};
}

this.events.windowresize = function(){
	game.width = window.innerWidth;
	game.height= window.innerHeight;
}
