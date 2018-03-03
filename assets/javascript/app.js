// $(document).ready(function() {
  function userSubmission() {
    var perfectScore = 4;
    var userScore = 0;

    var q1 = document.forms['triviaQuestions']['q1'].value;
    var q2 = document.forms['triviaQuestions']['q2'].value;
    var q3 = document.forms['triviaQuestions']['q3'].value;
    var q4 = document.forms['triviaQuestions']['q4'].value;

    var answers = ['b', 'b', 'a', 'd'];

    for (var i = 1; i <= perfectScore; i++) {
      if (eval('q' + i) == answers[i - 1]) {
        userScore++;
      };
    };
    // answers.forEach(function(correctAnswer, i) {
    //   if (eval("q"[i + 1] == answers[i + 1])) {
    //     userScore++;
    //   }
    // })

    var results = document.getElementById("final-score");

    results.innerHTML = '<h1>You scored <span>' + userScore + '</span> out of <span>' + perfectScore + '</span></h1>';
    
    return false;
  }

//end of document 
// });