
this.objects.textBalloon =function(text,x,y,time){
	this.x =x;
	this.y =y;
	this.text = text || "!!";
	this.time = time || 10;
	this.scale = 1;
	this.scaleTick = .1;
	this.color = "rgba(255,255,255,.5)";
	this.r = 2*Math.PI + Math.random()

	this.init =function(){};

	this.draw = function(context){
		context.save();
			context.font = game.fontSize+"px "+game.font;
			context.fillStyle= this.color;
			context.translate(this.x,this.y)
			context.scale(this.scale ,this.scale);
			context.fillText(this.text,0,0);

		context.restore();
	};
	this.update= function(ticks){
		this.time -= ticks;
		this.scale += this.scaleTick;
		 this.x -= Math.sin(this.r) *2;
		 this.y -= Math.cos(this.r) *2;
	};

	this.init();
}
