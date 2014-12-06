this.events.createStocks = function() {
    if (!game.stocks) {
        game.stocks = {};
    }
    game.tickers.forEach(function (ticker, index, tickers) {
        game.stocks[ticker] = new game.objects.stock("", ticker, "");
    });
};
