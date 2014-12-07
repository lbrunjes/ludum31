this.objects.user = function (initialCash) {

    var _initialCash = initialCash;
    var _currentCash = initialCash;
    var _assets = {};

    this.getCurrentCash = function () {
        return _currentCash;
    };

    this.getInitialCash = function () {
        return _initialCash;
    };

    this.getGainLoss = function () {
        return _currentCash - _initialCash;
    };

    this.getAssets = function () {
        return _assets;
    };

    this.purchaseStock = function (stock) {
        var cost = stock.currentValue;
        if (_currentCash >= cost && cost >0) {
            if (_assets[stock.ticker]) {
                _assets[stock.ticker] += 1;
                _currentCash -= stock.currentValue;
            } else {
                _assets[stock.ticker] = 1;
            }
            return true;
        }
        return false;
    };

    this.sellStock = function (stock) {
        var ticker = stock.ticker;
        if(stock.currentValue >0){
            if (_assets[ticker] && _assets[ticker] > 0) {
                _currentCash += stock.currentValue;
                _assets[ticker] -= 1;
                return true;
            }
        }
        return false;
    };
};
