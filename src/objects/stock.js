this.objects.stock = function(name, ticker, imagePath){

    var _initialValue = Math.random() * 100+50;
    var _currentValue = _initialValue;
    var _lastChange =0;

	this.name = name;
	this.ticker = ticker;
    this.imagePath = imagePath;
    this.color = "#fff";
    this.updateFunction = null;
    this.updateNum = 15;
    //ticks
    this.possibleUpdaters = [
        function(){return ((Math.random() > 0.5) ? -1 : 1) * diesel.clamp(Math.random() / Math.random(), -50,50)},
        function(){
            this.updateNum+=Math.random() -.5;
            return Math.sin(diesel.frameCount/ this.updateNum)* this.updateNum/5 +( Math.random()* this.updateNum -this.updateNum/2)},
            function(){return Math.sin(diesel.frameCount/ this.updateNum)* this.updateNum/5 +( Math.random()* this.updateNum -this.updateNum/2)},
       function(){return Math.atan2( Math.sin(this.updateNum *diesel.frameCount/10), Math.tan(diesel.frameCount/5)) }
    ];

	this.init= function() {
        this.color = "#"+Math.floor(Math .random() *0x9ff+600).toString(16);
        this.updateNum = 15+25*Math.random();
        this.updateFunction = this.possibleUpdaters[(Math.floor(Math.random()*this.possibleUpdaters.length))];

	};

	this.update = function () {
        if(_currentValue > 0){
            _lastChange = this.updateFunction();
           
        }
        else{
            _lastChange = 0;
            // TODO? what do we do with companies that reach negative stock prices? drop them?

            //possilby remo teh negative money from teh player.
        }


        if(Math.random() < .05){
              this.updateFunction = this.possibleUpdaters[(Math.floor(Math.random()*this.possibleUpdaters.length))];

        }

        _currentValue = _currentValue + _lastChange;
 	};



    this.getCurrentValue = function () {
        return _currentValue;
    };

    this.getInitialValue = function () {
        return _initialValue;
    };

    this.getLastChange = function () {
        return _lastChange;
    };

	this.init();
}
