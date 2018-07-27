var Quotes = [
    {quote:"I said this", author:"me"},
    {quote:"second quote", author: "god"}
   ]
   
   document.addEventListener('DOMContentLoaded', loadQuote);
   
   function loadQuote(){
    getElementById("text").innerHTML(randomQuote("text"))
    getElementById("author").innerHTML(randomQuote("author"))
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