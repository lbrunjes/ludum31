this.objects.stock = function(name, ticker, imagePath){

    var _initialValue = Math.random() / (Math.random() * Math.random());
    var _currentValue;
    var _lastChange;

	this.name = name;
	this.ticker = ticker;
    this.imagePath = imagePath;

	this.init= function() {
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
