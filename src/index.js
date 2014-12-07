
var  gameInstance = function(){

	this.activeScreen = "entireGame";

	this.font = "komika-axis";
	this.fontSize = 32;

	this.width =640;
	this.height = 480;

	this.tickers =[
		"Ϣ",
		"☣",
		"畫",
		"☃",
		"☭",
		"☮",
		
		"♞",
		"ሜ",
		"இ",
		"Ꭽ",
		"ฐ"]

	this.stocks = {};

	this.history =[];
	this.historyLength = 300;

	this.context = {
		"main":"2d"
	};

	this.items = {}

	//called at instance creation.
	//the dom is likely not to be  loaded
	//diesel may not exist.
	this.init = function(){
		this.width = window.innerWidth;
		this.height =window.innerHeight;

	};

	//called at diesel start
	//dom should be loaded
	//diesel should exist
	this.startup = function(){

		diesel.fpsLimit = 60;
		game.screens[game.activeScreen].reset();
        game.user = new game.objects.user(500);

		diesel.raiseEvent("createStocks");
        diesel.raiseEvent("updateStocks");



	};


