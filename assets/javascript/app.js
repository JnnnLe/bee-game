//vars
var currentQuestion = 0;
var correctAnswers = 0;
var play = false;

//questions
var questions = [{
  question: "How do bees communicate with one another?",
  selection: ["Touching antennas.", "Male bees fight one another.", "By dancing.", "Slack messenger." ],
  answer: 2
}, {
  question: "How many miles must a bee fly in order to produce 1lb of honey?",
  selection: ["90,000 miles", "5,000 miles", "50,000 miles", "105 miles"],
  answer: 0
}, {
  question: "How long does a Queen bee live before she dies?",
  selection: ["12 months", "2 years", "5 years", "She's a bad B, you can't kill her." ],
  answer: 2
}, {
  question: "How are bees useful in our modern world?",
  selection: ["Pollination", "Produces honey", "Produces natural fruit sugars, fructose and glucose.", "All of the above"],
  answer: 3
}];


$(document).ready(function() {

displayQA();

//display Question
function displayQA() {
  //iterate through each answer and display each in new div
  for (var i = 0; i < 4; i++) {
  $("#currentQuestion").html(questions[currentQuestion].question);
  // $("#answers" + questions[currentQuestion].selection[i] + "name='dynradio'/>").append("#fun");
  $("#answers").append("<button type='button'>" + questions[currentQuestion].selection[i] "</button>");
  }
};







//end of document 
});