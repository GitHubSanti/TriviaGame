var Questionaire = {
    numberCorrect: 0,
    numberIncorrect: 0,
    questionBank: [{

        }

    ],
    answerKey: [{
        QuestionCode: "SuperSonicsCity",
        Answer: "Seattle"
    }, {
        QuestionCode: "",
        Answer: ""
    }, {
        QuestionCode: "",
        Answer: ""
    }, {
        QuestionCode: "",
        Answer: ""
    }],
    multipleChoiceQuestion: function(Question, id, name, AnswerChoices) {
        var newContainer = $("<div>").addClass("container");
        // Create new div element | Add Bootstrap classes to div element |
        var newDiv = $("<div>").addClass("custom-control").addClass("custom-radio");
        // Create input element to append to div element | Add Bootstrap classes to div element | Add type, id, name attributes
        var newInput = $("<input>").addClass("custom-control-input").attr("type", "radio").attr("id", id).attr("name", name);
        // Create new label element | Add Bootstrap classes to label element | Add for attribute | Add answer choice
        var newLabel = $("<label>").addClass("custom-control-label").attr("for", id).text("")
        // Add for attribute
        newLabel.text()

    },

    trueFalseQuestion: function(name) {

    },

    startScreenWebPage: function() {
        // Var initialHTML = `<div class="page-header text-center"></div>`;
        //<h1 class="display-3">Trivia Game</h1> <p class="text-center">Answer as many questions as you can correctly!</p><hr></div>;
        // return $("body").html("Hello <b>world!</b>");
        return $("body").html(
            `
		<div class="text-center page-header">
		</div><h1 class="display-3 text-center">Trivia Game</h1>
		<p class="text-center">Answer as many questions as you can correctly and test your NBA knowledge!</p>
		<p class="text-center">You will have 5 mins to complete the form.</p>
		<hr>
		</div>
		<div class="container text-center border">
		<button id="startGame" type="button" class="btn btn-primary">Start</button>
		</div>
		`
        );
    },

    formWebPage: function() {
        return $("body").html(
            `
		<div class="text-center page-header">
		</div><h1 class="display-3 text-center">Trivia Game</h1>
		<p class="text-center">Answer as many questions as you can correctly and test your NBA knowledge!</p>
		<p class="text-center">You will have 5 mins to complete the form.</p>
		<hr>
		</div>
		    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto border">
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

    <div class="container text-center border">
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

    <div class="container text-center border">
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
		`
        )
    },
    resultsWebPage: function() {

    }

}
$(document).ready(() => {
    console.log("function executed with arrow notation")
    Questionaire.startScreenWebPage();
})

$(document).on("click", "#startGame", () => {
    // Begin
    Questionaire.formWebPage();
})

$(document).on("click", ".custom-control-input", () => {
    console.log(this);
})

