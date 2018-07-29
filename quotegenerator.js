var Quotes = [
    {quote:"It would be better for me... that multitudes of men should disagree with me rather than that I, being one, should be out of harmony with myself.", author:"Gorgias"},
    {quote:"Anyone who holds a true opinion without understanding is like a blind man on the right road.", author:"Plato"},
    {quote:"I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.", author:"Donald Trump"}
   ]
   
   
   document.addEventListener('DOMContentLoaded', loadQuote);
   
function loadQuote(){
    grabbedQuote = randomQuote();
    document.getElementById("text").innerHTML = grabbedQuote.quote;
    document.getElementById("author").innerHTML = grabbedQuote.author;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomQuote(){
    var quoteIndex = getRandomInt(0, (Quotes.length));
    return Quotes[quoteIndex];
}