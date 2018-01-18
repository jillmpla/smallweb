var quotes = [
    'It does not matter how slowly you go as long as you do not stop.<br><br>Confucius',
    'Wherever you go, go with all your heart.<br><br>Confucius',
    'Every day is a journey, and the journey itself is home.<br><br>Matsuo Basho',
    'A good traveler has no fixed plans, and is not intent on arriving.<br><br>Lao Tzu',
    'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.<br><br>Winston Churchill',
    'Don\'t let yesterday take up too much of today.<br><br>Will Rodgers',
    'It\'s not whether you get knocked down, it\'s whether you get up.<br><br>Vince Lombardi',
    'If you are working on something exciting that you really care about, you don\'t have to be pushed. The vision pulls you.<br><br>Steve Jobs',
    'Whether you think you can or think you can\'t, you\'re right.<br><br>Henry Ford',
    'The only limit to our realization of tomorrow will be our doubts of today.<br><br>Franklin D. Roosevelet',
    'Creativity is intelligence having fun.<br><br>Albert Einstein',
    'You are never too old to set another goal or to dream a new dream.<br><br>C.S. Lewis',
    'Today\'s accomplishments were yesterday\'s impossibilities.<br><br>Robert H. Schuller',
    'If you haven\'t found it yet, keep looking. Don\'t settle.<br><br>Steve Jobs',
    'Perpetual optimisim is a force multiplier.<br><br>Colin Powell'

];

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteD').innerHTML = quotes[randomNumber];
}
