/**Solution written in vanilla JS**/
(function() {
  var quoteBox = document.getElementById("quote-box");
  var newQuoteBut = document.getElementById("new-quote-button");
  
  var quoteArr = [
    ["The significant problems we face cannot be solved at the same level of thinking we were at when we created them.", "Albert Einstein"],
    ["One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'", "Proverbs"],
    ["It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being. And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.", "Norman Cousins, Anatomy of an Illness"],
    ["Because it's there.", "George Mallory on climbing mountains"],
    ["Now it's a sqirt mecca for mystery artist, but back then it was just magic.", "Jim Snyder on Kayaking"],
    ["Now it's a sqirt mecca for mystery artist, but back then it was just magic.", "Jim Snyder on Kayaking"]
  ];
  
  function newQuote() {
    var i = Math.ceil((Math.random() * quoteArr.length)-1);
    quoteBox.innerHTML = "<p>" + quoteArr[i][0] + "<br />" + "<br />" + quoteArr[i][1]+ "</p><p>" + i + " / " + quoteArr.length + "</p>";  
  }
  newQuote();
  newQuoteBut.addEventListener("click", newQuote);
})();