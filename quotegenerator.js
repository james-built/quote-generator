var Quotes = [
    {quote:"It would be better for me... that multitudes of men should disagree with me rather than that I, being one, should be out of harmony with myself.", author:"Gorgias"},
    {quote:"Anyone who holds a true opinion without understanding is like a blind man on the right road.", author:"Plato"},
    {quote:"", author: ""}
   ]
   
   document.addEventListener('DOMContentLoaded', loadQuote);
   
   function loadQuote(){
    document.getElementById("text").innerHTML = randomQuote("text")
    document.getElementById("author").innerHTML = randomQuote("author")
   }
   
   function randomQuote(element){
    do{
    var quoteIndex = Math.floor(Math.random() * 11)
    } while (quoteIndex > Quotes.length)
      if (element === "text"){
        return Quotes[quoteIndex].quote;
    } if (element === "author"){
        return Quotes[quoteIndex].author;
    }
   }