$(document).ready(function() {

  var quote;
  var author;

  function getNewQuote() {

    $.ajax( {
      url: "http://api.forismatic.com/api/1.0/",
      //WE have to use JsonP because there was an HTTP access control error with Json.
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $(".quote").text(quote);
        if(author){
          $(".author").text("-" + author);
        } else {
          $(".author").text("- unknown");
        }

      }
    });
  }
  getNewQuote();

  $("#newQuote").on("click", function() {
    getNewQuote();
  });

  $("#tweet").on("click", function() {

   window.open("https://twitter.com/intent/tweet?text="+quote);



 });
});
