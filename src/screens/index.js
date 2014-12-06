
this.screens = {

};

this.screens.theScreen= function(){

	this.selectedStock = "X";
	this.buySound =false;
	this.sellSound =false;
	this.errSound = false;
	this.thbbSound =false;

	this.actions = 0;

	this.reset = function(){
		this.buySound = document.getElementById("buy");
		this.sellSound = document.getElementById("sell");
		this.errSound = document.getElementById("err");
		this.thbbSound = document.getElementById("thbb");

	}

	this.clickZones = [
		
		{	x:0,
			y:0,
			w:window.innerWidth,
			h:window.innerHeight,
			click:function(){
				
				//the buy and sell buttons
				if(diesel.mouseX >game.width/3*2 && 
					diesel.mouseX <game.width &&
					diesel.mouseY < game.height/2){

					if(diesel.mouseY < game.height/4){
						game.screens.entireGame.buyCurrentStock();
					}
					else{
						game.screens.entireGame.sellCurrentStock();
					}

				}
				//the next selected stock
				if(diesel.mouseX > game.width/3 && 
					diesel.mouseX <game.width/3*2 &&
					diesel.mouseY < game.height/3*2){
						game.screens.entireGame.nextStock();
					

				}



			}
		},
		


	];

	

	this.draw =function(){

		game.context.main.font = "32px komika-axis";

		game.context.main.clearRect(0,0,game.width, game.height);

		//draw a rect for the graph
		this.drawGraph(game.context.main, game.history, 0,0, game.width/3, game.height/3*2);

		//draw current stock
		this.drawStock(game.context.main, this.selectedStock, game.width/3, 0, game.width/3,game.height/3*2);

		//draw buy buttons
		this.drawButtons(game.context.main, game.width/3*2, 0, game.width/3, game.height/3*2);

		//draw the bottom chrome
		this.drawChrome(game.context.main, 0,game.height/3*2, game.width, game.height/3);



	}

	this.drawGraph = function(context, hist, x, y, w, h){
		context.fillStyle="#000";
		context.fillRect(x, y ,w ,h );
		context.fillStyle = "#fff";
		context.textAlign = "center";
		context.fillText("graph",x+w/2 , y+h/2);

		//TODO adjust location and scaling as needed
		context.save();
		
		context.translate(0,h/2);

		var step = w/game.history.length;
		for(var i = 0; i<game.history.length ; i++){
			for(var stock in game.history[i]){
			
				context.strokeStyle= game.stocks.color || "#fff";
				context.lineWidth = 1;

				if(stock == this.selectedStock ){
					context.lineWidth = 3;
				}
				context.beginPath();

				context.moveTo(step * (game.history.length -i),
					game.history[i][stock].currentValue);
				context.lineTo(step * (game.history.length -i + 1),
					game.history[i][stock].currentValue + game.history[i][stock].lastChange);

				context.stroke();
				context.endPath();
			}
		}
		context.restore();

	}

	this.drawStock = function(context, stockName, x,y,w,h){
		context.fillStyle = "#999";
		context.fillRect(x, y, w, h);

		context.fillStyle = "#000";
		context.textAlign = "center";
		var tsize = h/2;
		context.font = tsize+"px monospace";
		context.fillText(this.selectedStock, x+w/2 , y+h/3*2);

		tsize -= 10;
		context.fillStyle = "#fff";
		context.font = tsize+"px monospace";
		context.fillText(this.selectedStock, x+w/2 , y+h/3*2);
		context.font = game.fontSize+"px "+game.font;

		context.fillText("NAME",x+w/2 , y+h/3*2 + game.fontSize *3);
		context.fillText("LAST PERF?",x+w/2 , y+h/3*2 + game.fontSize *5);

	}


	this.drawButtons=function(context, x, y, w, h){

		game.context.main.font = "32px komika-axis";


		context.fillStyle= "#327337";
		context.fillRect(x,y,w,h/2);

		context.fillStyle= "#D85249";
		context.fillRect(x,y +h/2,w,h/2);

		context.fillStyle = "#fff";
		context.textAlign = "center";
		context.fillText("BUY", x+w/2, y+h/4);
		context.fillText("SELL", x+w/2, y+h/4*3);

	}

	this.drawChrome= function(context,x,y,w,h){

		context.fillStyle= "#9f9";
		context.fillRect(x,y,w,h);
		var lineh = h/4;


		context.fillStyle= "#000";

		context.fillRect(x +16,y+16, w/3-32, lineh -32);
		context.fillRect(x +16,y +lineh +16, w/3-32, lineh -32);
		context.fillRect(x +16,y +lineh *2 +16, w/3-32, lineh*2 -32);


	

		context.fillStyle= "#fff";
		context.textAlign = "left";
		context.font = (lineh-32)+"px komika-axis";
		context.fillText("CASH:"+game.user.getCurrentCash(),x +16,y+ lineh -16 );
		context.fillText("APM:"+this.getAPM(),x +16,y+lineh*2 -16 );


	}
	this.getAPM=function(){
		var min  = ( new Date()-diesel. timeStarted )/1000/60;
		return Math.round(this.actions/min);
	}


	this.update =function(ticks){

		diesel.raiseEvent("updateStock", ticks);


		while(game.history.length > game.historyLength){
			//remove teh last item
			game.history.splice(game.historyLength,1);
		}



	};

	this.buyCurrentStock=function(){
		console.log("buy", this.selectedStock);
		this.actions++;
		
		if(game.user.getCurrentCash() &&
			game.history[0]&&
			game.history[0][this.selectedStock] &&
			game.user.getCurrentCash() >= game.history[0][this.selectedStock].currentValue){

			this.buySound.pause();
			this.buySound.currentTime=0;
			this.buySound.play();


			// AWARD ST0CK

			game.user.getCurrentCash() -= game.history[0][this.selectedStock].currentValue;

		}
		else{
			this.errSound.pause();
			this.errSound.currentTime =0;
			this.errSound.play();
		}
						
	};

	this.sellCurrentStock = function(){
		console.log("sell", this.selectedStock);
		this.actions++;
		if(Math.random() >.5){
			this.sellSound.pause();
			this.sellSound.currentTime =0;
			this.sellSound.play();

			//game.user.getCurrentCash() +=
		}
		else{
			this.errSound.pause();
			this.errSound.currentTime =0;
			this.errSound.play();
		}
		
	};

	this.nextStock =function(){
		console.log("nextStock", this.selectedStock);
		this.actions++;

		var i = ((game.tickers.indexOf(this.selectedStock)||0)+1)%game.tickers.length;
		this.selectedStock = game.tickers[i];

		this.thbbSound.pause();
		this.thbbSound.currentTime = 0;
		this.thbbSound.play();

	}

};
this.screens.theScreen.prototype =  new diesel.proto.screen();

this.screens.entireGame = new this.screens.theScreen();

