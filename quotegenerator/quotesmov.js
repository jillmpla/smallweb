var quotes = [
    'It does not matter how slowly you go as long as you do not stop.<br><br>Confucius',
    'Wherever you go, go with all your heart.<br><br>Confucius',
    'Every day is a journey, and the journey itself is home.<br><br>Matsuo Basho',
    'A good traveler has no fixed plans, and is not intent on arriving.<br><br>Lao Tzu'
];

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteD').innerHTML = quotes[randomNumber];
}
