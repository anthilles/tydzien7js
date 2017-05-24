var tickerurl = "https://poloniex.com/public?command=returnTicker";

function getprice(){
    $.getJSON(tickerurl, createprice);
}

function createprice(input) {
    $('.last').text(input.BTC_XEM.last+' BTC');
    $('.hight').text(input.BTC_XEM.highestBid);
    $('.low').text(input.BTC_XEM.lowestAsk);
    $('.zmianaproc').text(input.BTC_XEM.percentChange*100+'%');
    $('.high24hr').text(input.BTC_XEM.high24hr);
    $('.low24hr').text(input.BTC_XEM.low24hr);
}

$(document).ready(function(){
    getprice();
    }
);