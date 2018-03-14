$(document).ready(function() {

    // Variables
    let baseButton = '<a class="waves-effect waves-light btn-large"></a>';
    let questionBox = '<div class="col m12 center-align"><h3 id="question-text"></h3></div>';
    let answerButtonDiv = '<div class="col m3 center-align"><a class="waves-effect waves-light btn-large answer-button"></a></div>'

    // Question Objects
    let q1 = {
        question: "Of the following, who did not coach the Eagles?",
        correct: "Tony Dungy",
        a1: "Andy Reid",
        a2: "Doug Pederson",
        a3: "Chip Kelly"
    }

    // Questions Array
    let questionsArr = [q1,]

    // Functions
    function questionSetup() {
        // Setup Question Section
        $("#main-row").append(questionBox)
        $("#question-text").text(q1.question)

        // Setup Answers Section
        $("#main-container").append('<div class="row" id="answer-row"></div')
        for (let i = 1; i < 5; i++) {
            $("#answer-row").append(answerButtonDiv)
        }


    };

    // Event Listeners
    $('#start-button').on('click', function () {
        $("#start-button-col").remove()
        questionSetup()
    })

});