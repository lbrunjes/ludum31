this.events.updateStocks = function(lastUpdateSecs) {

    var currentState = {};

    for (var stock in game.stocks) {
        stock.update();
        currentState[stock.ticker] = {
            name: stock.name,
            ticker: stock.ticker,
            imagePath: stock.imagePath,
            currentValue: stock.getCurrentValue(),
            lastChange: stock.getLastChange()
        };
    }

    game.history.push(currentState);
}
