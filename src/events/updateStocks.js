this.events.updateStocks = function(lastUpdateSecs) {

    var currentState = {};

    for (var stockname in game.stocks) {
        var stock = game.stocks[stockname];

        stock.update();
        currentState[stock.ticker] = {
            name: stock.name,
            ticker: stock.ticker,
            imagePath: stock.imagePath,
            currentValue: stock.getCurrentValue(),
            lastChange: stock.getLastChange()
        };
    }

    game.history.splice(0, 0, currentState);
    if (game.history.length >= game.historyLength) {
        game.history.pop();
    }
}
