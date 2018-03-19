$(document).ready(function() {

    // Variables
    let questionBox = '<div class="col m12 center-align"><h3 id="question-text"></h3></div>';
    let currentQuestion;
    let timer;
    let countDown = 10;
    
    // Question Objects
    let q1 = {
        question: "Of the following, who did not coach the Eagles?",
        correct: "Tony Dungy",
        options: ['Andy Reid', 'Doug Pederson', 'Chip Kelly', 'Tony Dungy']
    }
    let q2 = {
        question: "Who is the Eagles current Quarterback?",
        correct: "Carson Wentz",
        options: ["Carson Wentz", "Donovan McNabb", "Michael Vick", "Ron Jaworski"]
    }
    let q3 = {
        question: "The Eagles are part of which division?",
        correct: "NFC East",
        options: ["NFC North", "NFC East", "AFC East", "AFC North"]
    }
    let q4 = {
        question: "Who is the eagles all-time leading rusher?",
        correct: "Lesean McCoy",
        options: ["Lesean McCoy", "Brian Westbrook", "Wilbert Montgomery", "Steve Van Buren"]
    }
    let q5 = {
        question: "Who is the eagles all-time leading passer?",
        correct: "Donovan McNabb",
        options: ["Ron Jaworski", "Randall Cunningham", "Donovan McNabb", "Norm Snead"]
    }

    // Questions Array
    let questionsArr = [q1, q2, q3, q4, q5]


    // Functions

    // Setup Question Section
    function questionSetup() {
        countDown = 10
        $("#main-row").append(questionBox)
        $("#question-text").text(currentQuestion.question)

        // Setup Answers Section
        $("#main-container").append('<div class="row" id="answer-row"></div')
        for (let i = 0; i < 4; i++) {
            $("#answer-row").append(`<div class="col m3 s12 center-align"><a class="waves-effect waves-light btn-large answer-button green darken-4" id="button-${i}">${currentQuestion.options[i]}</a></div>`)
        }
        $("#main-container").append('<div class="row" id="timer-row"></div')
        $("#answer-row").append(`<div class="col m12 s12 center-align"><h1 id="countdown">10</h1></div>`)

        timer = setInterval(function(){ 
            countDown--
            if (countDown <= 0) {
                $("#countdown").text(countDown)
                $("#main-row").empty()
                $("#answer-row").remove()
                $("#timer-row").remove()
                $("#main-row").append(questionBox)
                $("#question-text").text(`Incorrect, The correct answer is: ${currentQuestion.correct}`)
                setTimeout(function(){ 
                    $("#main-row").empty()
                    questionPicker()
                    questionSetup()
                }, 3000);
            } else {
                $("#countdown").text(countDown)
            }
        }, 1000);
    };

    // Randomly picks a question from the questions array
    function questionPicker() {
        let ranNum = Math.floor(Math.random() * questionsArr.length)
        currentQuestion = questionsArr[ranNum]
        questionsArr.splice(ranNum, 1)
    }

    // Checks to see if the user selection is the correct answer
    function answerCheck(guess, answer) {
        if (guess === answer) {
            clearInterval(timer)
            $("#main-row").empty()
            $("#answer-row").remove()
            $("#timer-row").remove()
            $("#main-row").append(questionBox)
            $("#question-text").text(`Correct!`)
            
            setTimeout(function(){ 
                 questionPicker()
                 questionSetup()
            }, 3000);
        } else {
            clearInterval(timer)
            $("#main-row").empty()
            $("#answer-row").remove()
            $("#timer-row").remove()
            $("#main-row").append(questionBox)
            $("#question-text").text(`Incorrect, The correct answer is: ${currentQuestion.correct}`)

            setTimeout(function(){ 
                 questionPicker()
                 questionSetup()
            }, 3000);
        }
    }

    // Event Listeners
    $('#start-button').on('click', function () {
        $("#start-button-col").remove()
        questionPicker()
        questionSetup()
    })

    $(document).on("click", ".answer-button", function (event) {
        answerCheck(event.target.text, currentQuestion.correct)
    });

});