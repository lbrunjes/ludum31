this.objects.stock = function(name, ticker, imagePath){

    var _initialValue = Math.random() / (Math.random() * Math.random());
    var _currentValue = _initialValue;
    var _lastChange =0;

	this.name = name;
	this.ticker = ticker;
    this.imagePath = imagePath;
    this.color = "#fff"

	this.init= function() {
        this.color = "#"+Math.floor(Math .random() *0x9ff+600).toString(16);
	};

	this.update = function () {
        _lastChange = ((Math.random > 0.5) ? -1 : 1) * (Math.random() / Math.random());
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
