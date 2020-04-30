$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good., Very doubtful."];

  magic8Ball.input = function(question) {
	  	  $("#answer").fadeIn(3000);
    	var randomAnswer = Math.random();
    	var randomAnswerArray = randomAnswer * this.answers.length;
    	var randomIndex = Math.floor(randomAnswerArray);
    	var randomResult = this.answers[randomIndex];
    	$("#answer").text(randomResult);
      
    	console.log(question);
    	console.log(randomResult);
  };
		$("#answer").hide();


  var onClick = function() {
        $("#answer").hide();
        setTimeout(
            function() {
                var question = prompt("Ask a yes or no question!");
                magic8Ball.input(question);
             $("#8ball").attr("src", "img/answerside.png");  
             $("#8ball").effect("shake");
            }, 500);

  };

  $("#questionButton").click(onClick);

});