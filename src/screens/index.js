
this.screens = {

};

this.screens.theScreen= function(){

	this.selectedStock = "xxx";

	this.draw =function(){

		game.context.main.clearRect(0,0,game.width, game.height);

		//draw a rect for the graph
		this.drawGraph(game.context.main, game.history, 50,50, 300, 600);

		//draw current stock
		this.drawStock(game.context.main, this.selectedStock, 350, 50, 150,300);

		//draw buy buttons
		this.drawButtons(game.context.main, 500, 50, 100, 600);

	}

	this.drawGraph = function(context, hist, x, y, w, h){
		context.fillStyle="#000";
		context.fillRect(x, y ,w ,h );

	}

	this.drawStock = function(context, stockName, x,y,w,h){
		context.fillStyle = "#999";
		context.fillRect(x, y, w, h);
	}


	this.drawButtons=function(context, x, y, w, h){

		context.fillStyle= "#327337";
		context.fillRect(x,y,w,h/2);

		context.fillStyle= "#D85249";
		context.fillRect(x,y +h/2,w,h/2);

		context.fillStyle = "#fff";
		context.textAlign = "center";
		context.fillText("BUY", x+w/2, w+h/4);
		context.fillText("SELL", x+w/2, w+h/4*3);

	}


	this.update =function(ticks){

		diesel.raiseEvent("updateStock", ticks);


		while(game.history.length > game.historyLength){
			//remove teh last item
			game.history.splice(game.historyLength,1);
		}



	};

};
this.screens.theScreen.prototype =  new diesel.proto.screen();

this.screens.entireGame = new this.screens.theScreen();

