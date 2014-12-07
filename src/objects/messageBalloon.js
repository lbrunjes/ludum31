
this.objects.messageBalloon= function(text){
	this.x = game.width/2;
	this.y = game.height/2;
	this.r = Math.min(game.height/6, game.width/6);
	this.timeLeft = 1;
	this.scale  =.01;
	this.scaleTick = .05;


	this.text = text;

	this.init = function(text){
		if(!text){
			this.text = [
			"Hello",
			"Buy Low. Sell High",
			"Watch out for bad stocks",
			"Always pay your broker",
			"[click to start]"
			];
		}
		else{
			if(typeof text != "object"){
				this.text = [text];
			}
			else{
				this.text = text;
			}
		}

	};	

	this.draw=function(context){

		context.save();
		
		var s = Math.sin(diesel.frameCount/30)/10;
		
		context.translate(this.x, this.y);
		context.scale(this.scale, this.scale);
		for(var i =0; i < game.tickers.length;i++){
			context.save();
			context.scale(1+s,1+s)
			context.rotate(diesel.frameCount/50 +i/3*2);
			context.translate(0, -this.r)
			context.fillStyle = game.stocks[game.tickers[i]].color;
			
			context.fillText(game.tickers[i],0,0);
			context.restore();
		}

		context.fillStyle="#fff";
		context.beginPath();
		context.arc(0,0,this.r,0,Math.PI*2);
		context.fill();
		
		context.textAlign = "center";
		context.save();
			context.translate(0, -this.r );
			context.fillText(this.text[0],0,0);
			context.font = game.fontSize/4+"px "+game.font;
			context.fillStyle ="#000";
			for(var i =1; i < this.text.length ;i++){
				context.translate(0, game.fontSize/2);
				context.fillText(this.text[i],0,0)
			}
		context.restore();

		context.restore();



	};

	this.update= function(ticks){
		if(this.scale < 2){
			this.scale+=this.scaleTick;
		}
	}
	this.init(text);
}
