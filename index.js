const chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name?");
console.log(chalk.cyan(("\nWelcome to the Quiz " + userName.toUpperCase() + ". Let\'s test your knowledge about Varuni!'")));

var score = 0;

var playflag = readlineSync.question("\nAre you ready to play?");

var questionArray = [
  {
    question: "\nWhat is my favourite color?\na) Blue\nb) Black\nc) Red\nd) Yellow\n",
    answer: "a"
  },
  {
    question: "\nWhat is my go to favourite bollywood comedy movie?\na) Welcome\nb) Hera Pheri\nc) Stree\nd) None of the above\n",
    answer: "a"
  },
  {
    question: "\nWhat is my favourite genre of books I like to read?\na) Historical fiction\nb) Self Help books\nc) Dystopian Fiction\nd) Contemporary Fiction\n",
    answer: "d"
  },
  {
    question: "\nTrue or False: I love to write poetry.\na) True\nb) False\n",
    answer: "a"
  },
  {
    question: "\nWho is my favourite Superhero?\na) Captain Marvel\nb) Thor\nc) Wonder Woman\nd) Spider Man\n",
    answer: "c"
  }

]

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.cyan(question));
  if(userAnswer.toLowerCase()===answer){
    console.log(chalk.green("You are Correct!\n"));
    score=score+100;
    console.log("Your current score is "+ score + "\n");
    }
  else{
    console.log(chalk.red("That is Incorrect!\n"));
    score=score-50;
    console.log("Your current score is "+ score + "\n");
  }
}

var highScore=[
  {
    name:"Vivek",
    score:500
  },
  {
    name:"Ayushi",
    score:350
  }
];


function leaderboard(score){
if(score>350){
console.log("Congratulations "+ userName.toUpperCase()+"!! You have made it to the top of the leaderboard.\n");
console.log(chalk.bgRed("Here are our top performers\n"));
console.log(userName)
for(i=0;i<highScore.length;i++){
  console.log(highScore[i].name);
}
}
else{
  console.log("Nice try "+userName.toUpperCase()+".But you need to score higher to enter the Leaderboard.\n");
  console.log(chalk.bgRed("Here are our top performers\n"));
  for(i=0;i<highScore.length;i++){
  console.log(highScore[i].name);
  }
}

}


if(playflag.toLowerCase() === "yes"){
  console.log(chalk.red("\nHere are the Rules!\n"))
  console.log("There are 5 questions with multiple options present as answers. \nType your answer as a,b,c or d. \nCorrect answer gets you" + chalk.cyan(' +100 ') + "points.\nIncorrect answer gets you"  + chalk.red(' -50 ') + "points.\n")

  for(var i=0;i<questionArray.length;i++){
  play(questionArray[i].question,questionArray[i].answer);
  }
  console.log(chalk.green("Congratulations!! You have completed the quiz.\n"));
  console.log(chalk.bgMagenta("Your final score is "+score));
  leaderboard(score)
 }
else{
  console.log(chalk.red("No problem! See you next time."))
}




