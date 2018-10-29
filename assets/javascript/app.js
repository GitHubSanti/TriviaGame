var Questionaire = {
  clockRunning: false,
  time: 5, // Set to 10 mins | 600 secs
  numberCorrect: 0,
  numberIncorrect: 0,
  questionBank: [{}],
  answerKey: [
    {
      QuestionCode: "SuperSonicsCity",
      Answer: "Seattle"
    },
    {
      QuestionCode: "",
      Answer: ""
    },
    {
      QuestionCode: "",
      Answer: ""
    },
    {
      QuestionCode: "",
      Answer: ""
    }
  ],
  // To be incorporated later to randomize questions and display questions one at a time
  multipleChoiceQuestion: function(Question, id, name, AnswerChoices) {
    var newContainer = $("<div>").addClass("container");
    // Create new div element | Add Bootstrap classes to div element |
    var newDiv = $("<div>")
      .addClass("custom-control")
      .addClass("custom-radio");
    // Create input element to append to div element | Add Bootstrap classes to div element | Add type, id, name attributes
    var newInput = $("<input>")
      .addClass("custom-control-input")
      .attr("type", "radio")
      .attr("id", id)
      .attr("name", name);
    // Create new label element | Add Bootstrap classes to label element | Add for attribute | Add answer choice
    var newLabel = $("<label>")
      .addClass("custom-control-label")
      .attr("for", id)
      .text("");
    // Add for attribute
    newLabel.text();
  },

  trueFalseQuestion: function(name) {},

  startScreenWebPage: function() {
    // Var initialHTML = `<div class="page-header text-center"></div>`;
    //<h1 class="display-3">Trivia Game</h1> <p class="text-center">Answer as many questions as you can correctly!</p><hr></div>;
    // return $("body").html("Hello <b>world!</b>");
    return $("body").html(
      `
<div class="text-center page-header">
</div>
<h1 class="display-3 text-center">Trivia Game</h1>
<p class="text-center">Answer as many questions as you can correctly and test your NBA knowledge!</p>
<p class="text-center" id="displayTime">You will have 2 mins to complete the quiz.</p>
<hr>
<div class="container text-center border">
   <button id="startGame" type="button" class="btn btn-secondary">Start</button>
</div>
		`
    );
  },
  timerCountDown: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!Questionaire.clockRunning) {
      intervalId = setInterval(Questionaire.count, 1000);
      Questionaire.clockRunning = true;
    }
  },

  count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    Questionaire.time--;

    // DONE: Get the current time, pass that into the Questionaire.timeConverter function,
    //       and save the result in a variable.
    var converted = Questionaire.timeConverter(Questionaire.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#displayTime").text(converted);

    if (Questionaire.time == 0) {
      clearInterval(intervalId);
      Questionaire.resultsWebPage();
    }
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      // minutes = "0" + minutes; to incorporate
    }

    return minutes + ":" + seconds;
  },

  // Displays Questions
  formWebPage: function() {
    return $("body").html(
      `
      <div class="text-center page-header">
</div>
<h1 class="display-3 text-center">Trivia Game</h1>
<p class="text-center">Answer as many questions as you can correctly and test your NBA knowledge!</p>
<p class="text-center" id="displayTime">2:00</p>
<hr>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">What city did the SuperSonics play for?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Portland" name="SuperSonicsCity" class="custom-control-input">
            <label class="custom-control-label" for="Portland">Portland</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Orlando" name="SuperSonicsCity" class="custom-control-input">
            <label class="custom-control-label" for="Orlando">Orlando</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Seattle" name="SuperSonicsCity" class="custom-control-input">
            <label class="custom-control-label" for="Seattle">Seattle</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Phoenix" name="SuperSonicsCity" class="custom-control-input">
            <label class="custom-control-label" for="Phoenix">Phoenix</label>
         </div>
      </div>
   </div>
</div>
<div class="container text-center">
   <p class="lead">Lebron James current plays for the Cavaliers</p>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="True1" name="LebronJamesCurrentTeam" class="custom-control-input">
      <label class="custom-control-label" for="True1">True</label>
   </div>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="False1" name="LebronJamesCurrentTeam" class="custom-control-input">
      <label class="custom-control-label" for="False1">False</label>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Who's the owner of the Clippers</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Steve-Ballmer" name="ClippersOwner" class="custom-control-input">
            <label class="custom-control-label" for="Steve-Ballmer">Steve Ballmer</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Mark-Cuban" name="ClippersOwner" class="custom-control-input">
            <label class="custom-control-label" for="Mark-Cuban">Mark Cuban</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Vlade-Divac" name="ClippersOwner" class="custom-control-input">
            <label class="custom-control-label" for="Vlade-Divac">Vlade Divac</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="James-Dolan" name="ClippersOwner" class="custom-control-input">
            <label class="custom-control-label" for="James-Dolan">James Dolan</label>
         </div>
      </div>
   </div>
</div>
<div class="container text-center">
   <p class="lead">Adam Silver is the commmissioner of the NBA</p>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="True2" name="NBACommissioner" class="custom-control-input">
      <label class="custom-control-label" for="True2">True</label>
   </div>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="False2" name="NBACommissioner" class="custom-control-input">
      <label class="custom-control-label" for="False2">False</label>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Which of the following teams isn't in California?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Kings" name="caliTeams" class="custom-control-input">
            <label class="custom-control-label" for="Kings">Kings</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Lakers" name="caliTeams" class="custom-control-input">
            <label class="custom-control-label" for="Lakers">Lakers</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Nuggets" name="caliTeams" class="custom-control-input">
            <label class="custom-control-label" for="Nuggets">Nuggets</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Warriors" name="caliTeams" class="custom-control-input">
            <label class="custom-control-label" for="Warriors">Warriors</label>
         </div>
      </div>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Who was the league MVP for the 2017-2018 season?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Russell-Westbrook" name="leagueMVP" class="custom-control-input">
            <label class="custom-control-label" for="Russell-Westbrook">Russell Westbrook</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="James-Harden" name="leagueMVP" class="custom-control-input">
            <label class="custom-control-label" for="James-Harden">James Harden</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Kevin-Durant" name="leagueMVP" class="custom-control-input">
            <label class="custom-control-label" for="Kevin-Durant">Kevin Durant</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Lebron-James" name="leagueMVP" class="custom-control-input">
            <label class="custom-control-label" for="Lebron-James">Lebron James</label>
         </div>
      </div>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Who was the Rookie of the Year (ROY) for the 2017-2018 season?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Ben-Simmmons" name="leagueROY" class="custom-control-input">
            <label class="custom-control-label" for="Ben-Simmmons">Ben Simmmons</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Donovan-Mitchell" name="leagueROY" class="custom-control-input">
            <label class="custom-control-label" for="Donovan-Mitchell">Donovan Mitchell</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Dennis-Smith-Jr" name="leagueROY" class="custom-control-input">
            <label class="custom-control-label" for="Dennis-Smith-Jr">Dennis Smith Jr.</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Jayson-Tatum" name="leagueROY" class="custom-control-input">
            <label class="custom-control-label" for="Jayson-Tatum">Jayson Tatum</label>
         </div>
      </div>
   </div>
</div>
<div class="container text-center">
   <p class="lead">The Lakers have the most NBA titles</p>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="True3" name="mostNBATitles" class="custom-control-input">
      <label class="custom-control-label" for="True3">True</label>
   </div>
   <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="False3" name="mostNBATitles" class="custom-control-input">
      <label class="custom-control-label" for="False3">False</label>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Which team has embraced the "Trust the Process" mindset?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Bulls" name="trustTheProcess" class="custom-control-input">
            <label class="custom-control-label" for="Bulls">Bulls</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Bucks" name="trustTheProcess" class="custom-control-input">
            <label class="custom-control-label" for="Bucks">Bucks</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Knicks" name="trustTheProcess" class="custom-control-input">
            <label class="custom-control-label" for="Knicks">Knicks</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="76ers" name="trustTheProcess" class="custom-control-input">
            <label class="custom-control-label" for="76ers">76ers</label>
         </div>
      </div>
   </div>
</div>
<div class="container">
   <div class="row justify-content-center">
      <div class="col-auto">
         <p class="lead text-center">Which team resides outside of the US?</p>
         <div class="custom-control custom-radio">
            <input type="radio" id="Magic" name="canadianTeam" class="custom-control-input">
            <label class="custom-control-label" for="Magic">Magic</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Timberwolves" name="canadianTeam" class="custom-control-input">
            <label class="custom-control-label" for="Timberwolves">Timberwolves</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Trailblazers" name="canadianTeam" class="custom-control-input">
            <label class="custom-control-label" for="Trailblazers">Trailblazers</label>
         </div>
         <div class="custom-control custom-radio">
            <input type="radio" id="Raptors" name="canadianTeam" class="custom-control-input">
            <label class="custom-control-label" for="Raptors">Raptors</label>
         </div>
      </div>
   </div>
</div>
<div class="container text-center my-3">
   <button id="submitQuiz" type="button" class="btn btn-success">Submit</button>
</div>
      `
    );
  },

  // Display results page
  resultsWebPage: function() {
    return $("body").html(
      `
      <div class="text-center page-header"></div>
<h1 class="display-3 text-center">Trivia Game</h1>
<p class="text-center">All Done!</p>
<hr>
<div class="container mt-5">
   <div class="card w-50 mx-auto">
      <div class="card-header">
         <h6>Results</h6>
      </div>
      <form>
         <div class="form-group mx-3 mt-3">
            <label>Correct Answers:</label><span> 0</span>
         </div>
         <div class="form-group mx-3 mt-3">
            <label for="num-of-responses">Incorrect Answers:</label><span> 0</span>
         </div>
         <div class="form-group mx-3 mt-3">
            <label for="start-year">Questions Unanswered: </label>
         </div>
      </form>
   </div>
</div>
      `
    );
  }
};
$(document).ready(function() {
  //   console.log("function executed with arrow notation");
  Questionaire.startScreenWebPage();

  $(document).on("click", "#startGame", function() {
    // Begin timer and display form
    Questionaire.timerCountDown();
    Questionaire.formWebPage();
  });
  // If time runs out display results page
  // if ($("#displayTime").html() == "00:00") {
  //   clearInterval(intervalId);
  //   console.log("No Time Left!");
  //   Questionaire.resultsWebPage();
  // }

  $(document).on("click", ".custom-control-input", function() {
    console.log(this);
  });

  // Display results page if user click submit button
  $(document).on("click", "#submitQuiz", function() {
    clearInterval(intervalId);
    console.log(this);
    Questionaire.resultsWebPage();
  });
});
