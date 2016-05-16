var quote = "";
var author = "";

function getQuote() {
  console.log("trying to get new quote from server");
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET',
    data: {},
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "RVz7dy9FBKmshpEtlnSZV7oh6Ndmp10qNpkjsnFQRWzLzsEhzR");
    },
    success: function(data) {
      quote   = data.quote;
      author  = data.author;
      $(".quote-text").html(quote);
      $(".author").html(author);
      $('.btn-twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=randomquotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" by ' + author));
    },
    error: function(err) {
      alert("API call to server was unsuccessful.");
    }
  });
}

$(document).ready(function() {
  getQuote();
  
  $(".btn-newquote").on("click", getQuote); 
});

