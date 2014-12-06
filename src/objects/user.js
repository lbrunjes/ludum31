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
        var cost = stock.getCurrentValue();
        if (_currentCash >= cost) {
            if (_assets[stock.getTicker()]) {
                _assets[stock.getTicker()] += 1;
            } else {
                _assets[stock.getTicker()] = 1;
            }
            return true;
        }
        return false;
    };

    this.sellStock = function (stock) {
        var ticker = stock.getTicker();
        if (_assets[ticker] && _assets[ticker] > 0) {
            _currentCash += stock.getCurrentValue();
            _assets[ticker] -= 1;
            return true;
        }
        return false;
    };
};
