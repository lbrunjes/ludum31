this.sreens = {

};

this.screens.theScreen= function(){

	this.draw =function(){

	};

	this.update =function(ticks){

		diesel.raiseEvent("updateStock", ticks);


		while(game.history.length > game.historyLength){
			//remove teh last item
			game.history.splice(game.historyLength,1);
		}



	};

};
this.screens.theScreen.prototype =  new diesel.protpo.screen();

this.screens.enitreGame = new Game.theScreen();