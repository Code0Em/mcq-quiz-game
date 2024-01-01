// **TASKS**
// *TASK 1: Create an array (of objects) containing the quiz questions, possible answers and the correct answer for each question.

// *TASK 2: When the user selects the start button: the start page is hidden, the first question with possible answers is shown and the timer starts to countdown.

// TASK 2.1: Get references for the HTML elements that we need.

// TASK 2.2: Create a variable for the index of the quiz array. Set this to zero. (This will be used and updated by functions later).

// TASK 2.3: Create a function that will set the text of the question, and create buttons that will contain the text of the possible answers. Set the parameter of the function to the quizIndex (this is 0 to begin with (i.e. for the first question), but will be updated when calling the function for the remaining questions). Set the question text to the first item of each object in the quiz array. Also add a number to the question text. Base this on the quizIndex plus one (because JavaScript is zero) (i.e. question one is at index zero). Set the text content of the possible answers to an empty string (to 'erase' the previous question’s answers). Within a forLoop, use createElement() method and appendChild() method to create a button which is added onto the questions variable (i.e. the html section tag with an id of questions). Add an event listener for click events to the button. Set the text of the button to (one of) the items in the answers array (which is in the quiz array). Set the forLoop to continue iterating for the length of the answers array. This will generate a button for each possible answer in the answers array.

// TASK: 2.4: Create a variable called timeLeft and set this to the total time for the quiz (in seconds). For the total time, use a calculation of seconds multiplied by length of quiz (to give a total time based on the number of questions in the quiz).

// TASK 2.5: Create a function that will create a timer (i.e. a countdown), using setInterval method (to countdown) and an if/else statement (to determine what to do when time is equal/greater than one and when time is less than one). Also include clearInterval() method to clear the timer when time is up.

// TASK 2.6: Add event listener for click event on start button and create corresponding function. Within the function: add the hide class to the startScreen variable, using the classList.add() method (this class is set to display: none, so when we add this class, it will hide this element). Remove the hide class from the questions variable, using the classList.remove() method (so that this element will now be displayed). Call the generateQAs function, with the parameter unchanged (this variable is currently set to zero, so the first question and answers will be displayed). Call the timer function (so that the countdown starts and the time left is displayed).

// *TASK 3: Check if the user’s chosen answer is correct. If correct, add one point to their score, play a sound and display a message. If wrong, deduct 10 seconds from their remaining time, play a different sound and display a different message. Then display the next question and possible answers.

// TASK 3.1: Create a variable called score and set this to zero. (This will keep count of the user’s score).

// TASK: 3.2: Create two audio elements (for correct and wrong answers), using Audio() constructor. 

// TASK 3.3: Create a function to check if the user’s answer is correct. (Note: this function will be called by the event listener on the possible answer buttons). Within this function: remove the hide class from the answerFeedback variable (i.e. the html article tag with id of feedback) (so that this element will now be displayed). Then use an if/else statement to check the user’s answer. Set the argument as: if the text content of the ‘this’ keyword does NOT equal the third item in the object of the quiz array (i.e. the correct answer), then the user’s answer is wrong. (Note: inside the function, ‘this’ represents the button element which called the function; which is the button with the event listener on; ergo the user’s answer). Set the text of the answerFeedback variable to ‘wrong’, use the play() method to play the ‘incorrect audio’ and deduct 10 seconds from the timeLeft variable (i.e. time for the quiz). For the else argument (i.e. the user’s answer is correct, because it matches the correct answer), set the text of the answerFeedback variable to ‘correct’, use the play() method to play the ‘correct audio’ and add one to the score variable (i.e. the user’s score).

// TASK 3.4: In the same function, create another function using the setInterval method (to display the next question and possible answer after a given time). Add the hide class to the addFeedback variable (so this element is now hidden). Add one to the quizIndex variable (so that this parameter is updated when the generateQAs function is next called). Add an if/else statement. Set the argument as: if the quizIndex equals the length of the quiz array, call the generateQAs function (because we are also adding one to quizIndex, this function will continue to be called until all of the objects in the quiz array have been passed through; ergo until all of the questions have been generated). For the else argument (i.e. no more questions remaining), call the endQuiz function. Clear the timer in this function.

// *TASK 4: After the quiz time runs out or all of the questions have been answered, display the end screen with a header, the user’s final score, an input field and a submit button for the user to enter their initials.

// TASK 4.1: Create a function to display the end screen. (Note: this function will be called by the timer function or the checkAnswers function). Add the hide class to the questions variable (so this element is hidden), and remove the hide class from the endScreen variable (i.e. the section tag with id of end-screen) (so that this element will be displayed). Set the text content of the finalScore variable (i.e. the span tag with id of final-score) to the score variable (so the user’s final score is displayed).

// *TASK 5: When the user selects the submit button, validate the user’s initials to check that initials have been entered (i.e. aren’t blank) and that they don’t exceed three characters. Display error messages accordingly. Once validated, save the user’s initials and score to local storage (i.e. save data across browser sessions). Display confirmation message and hyperlink to view high scores.

// TASK 5.1: Create a function to display a message underneath the input field/submit button. Set the function parameters to type and message. Create an article tag. Using the setAttribute() method, set its class to the type parameter (so that this can be set when calling the function) (e.g. ‘error’ or ‘confirm’). Set its id to sbt-msg. Set its text content to the message parameter (again, so this can be set when calling the function) (e.g. ‘do something else’ or ‘your score’s submitted’). Add this article to the end-screen variable (so the message is displayed underneath the input field and submit button).

// TASK 5.2: Add an event listener for a click event on the submit button and corresponding function. Within this function, get the reference for the above article tag. Add an if statement. Set its argument to: if the submitMsg variable (i.e. article tag) is not equal to null (i.e. it exists) remove this element using the remove() method (so that any existing message is deleted).

// TASK 5.3: In the same function,  create an object called user (to ‘hold’ the user’s initials and score). Set the first name to ‘initials’ and its value to userInitials.value (where useInitials equals the input tag with id of initials) (i.e. the value inputted by the user). Set the second name to ‘score’ and its value to the innerHTML of the finalScore variable (i.e. the user’s final score).

// TASK 5.4: Add if/else statements to validate the user’s initials. Set argument to: if userInitials.value is equal to an empty string (i.e. user’s left initials field blank), call the displayMsg function and set the parameters to ‘error’ and ‘initials cannot be blank’ (so that the article tag is given a class of error and the above message is displayed). Set another argument to: if the length of the userInitials.value exceeds three (i.e. user’s entered initials longer than three characters), call the displayMsg function and set the parameters to ‘error’ again and another message (so again, the article tag is given a class of error and the set message is displayed).

// TASK 5.5: Within the else statement codeblock (i.e. where the user’s entered initials of three characters or less), create a variable called highScores. Set this to an empty array or existing data items from local storage. To do the latter, use the getItem() method along with the JSON.parse() method. (Note: we need to use JSON.parse to ‘transform’ the JSON string back into a Javascript object). Using the push() method, add the user object (i.e. the user’s initials and score) onto the end of the highScores array (so that the user’s initial/score will be added to any existing scores; or will start a new array if none were saved). Then, using setItem() method and the JSON.stringify() method, save the updated/new highScores array to local storage (for common sense, set the key to highScores so it matches the array name). (Note: we need to use JSON.stringify to ‘convert’ the Javascript array into JSON string; this is because when we send data to a web server, the data has to be a string). 

// TASK 5.6: Call the displayMsg function and set the parameters to ‘confirm’ and a message to confirm the user’s initials and score have been submitted (so the message is displayed).

// TASK 5.7: Create an anchor tag. Set the innerHTML to ‘View High Scores’. Set the hyperlink to the High Scores page. Add the anchor tag to the end-screen variable (so the link is displayed beneath the confirm message).

// **GLOBAL VARIABLES**
// 1 Array of objects containing quiz questions, possible answers and correct answer. RMDR: STILL NEED TO ADD COPY
const quiz = [
    {
        'question': 'q1',
        'answers': ['a1', 'a2', 'a3', 'a4'],
        'correct': 'a1'
    },
    {
        'question': 'q2',
        'answers': ['b1', 'b2', 'b3', 'b4'],
        'correct': 'b1'
    },
    {
        'question': 'q3',
        'answers': ['c1', 'c2', 'c3', 'c4'],
        'correct': 'c1'
    },
    {
        'question': 'q4',
        'answers': ['d1', 'd2', 'd3', 'd4'],
        'correct': 'd1'
    },
    {
        'question': 'q5',
        'answers': ['e1', 'e2', 'e3', 'e4'],
        'correct': 'e1'
    },
]

// 2 Gets references for all of the HTML elements that we need.
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const theQuestion = document.querySelector("#question-title");
const possibleAnswers = document.querySelector("#choices");
const timeCount = document.querySelector("#time");
const answerFeedback = document.querySelector("#feedback");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const userInitials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");

// 3.2 Creates audio elements for correct and wrong answers.
const correctSound = new Audio("correct.wav");
const incorrectSound = new Audio("incorrect.wav");

// 2.2 Sets index of quiz array to zero.
let quizIndex = 0;
// 2.4 Sets total time for the quiz.
let timeLeft = 20 * quiz.length;
// 3.1 Keeps count of user’s score.
let score = 0;

// **FUNCTIONS AND EVENT LISTENERS**
// 2.3 Generates the question and possible answers.
function generateQAs(quizIndex) {
    // Sets the text of the question and adds a number before the question.
    theQuestion.textContent = quizIndex + 1 + ": " + quiz[quizIndex].question;
    // ‘Erases’ previous possible answers (where applicable).
    possibleAnswers.textContent = "";
    // Creates buttons for all possible answers.
    for (let answersIndex = 0; answersIndex < quiz[quizIndex].answers.length; answersIndex++) {
        // Creates a button.
        const answerButton = document.createElement("button");
        // Adds event listener to button.
        answerButton.addEventListener("click", checkAnswer);
        // Sets text of the button to the possible answer.
        answerButton.textContent = quiz[quizIndex].answers[answersIndex];
        // Renders the button to the page, below the question text or the previous button (whichever is applicable).
        possibleAnswers.appendChild(answerButton);
    }
}

// 2.5 Creates quiz timer.
function timer() {
    const timeCountdown = setInterval(function () {
        // Runs this codeblock when there is time left on the quiz.
        if (timeLeft >= 1) {
            // Displays time left on the quiz.
            timeCount.textContent = timeLeft;
            // Counts down the time for the quiz (one second at a time).
            timeLeft--;
            // Runs this codeblock when time is up.
        } else {
            // Displays time left (which is now zero).
            timeCount.textContent = 0;
            // Clears the timer.
            clearInterval(timeCountdown);
            // Calls the function to display the end screen.
            endQuiz()
        }
        // Calls this function to be run every 1000 milliseconds (i.e. one second).
    }, 1000);
}

// 2.3 Listens for a click event on the start button and calls function.
startButton.addEventListener("click", function () {
    // Displays the question and possible answers.
    questions.classList.remove("hide");
    // Hides the start screen header, text and button.
    startScreen.classList.add("hide");
    // Calls the function to generate the question and possible answers.
    generateQAs(quizIndex);
    // Calls the function to start the quiz timer.
    timer();
}
)

// 3.3 Checks if user’s answer is correct.
function checkAnswer() {
    // Displays the answer feedback.
    answerFeedback.classList.remove("hide")
    // Runs this codeblock if the user’s answer is wrong.
    if (this.textContent !== quiz[quizIndex].correct) {
        // Sets answer feedback to ‘wrong’.
        answerFeedback.textContent = 'Wrong!';
        // Plays ‘incorrect’ audio.
        incorrectSound.play();
        // Deducts 10 seconds from the user's time for the quiz.
        timeLeft = timeLeft - 10;
        // Runs this codeblock if the user’s answer is correct.
    } else {
        // Sets answer feedback to ‘correct’
        answerFeedback.textContent = 'Correct!';
        // Plays ‘correct’ audio.
        correctSound.play();
        // Adds one to the user’s score.
        score++
    }
    // 3.4 Displays next question and possible answers after half a second.
    const nextQ = setInterval(function () {
        // Hides the answer feedback.
        answerFeedback.classList.add("hide")
        // Adds one to the index of the quiz array.
        quizIndex++
        // Runs this codeblock if there are questions ‘remaining’ in quiz array.
        if (quizIndex < quiz.length) {
            // Generates ‘next’ question and possible answers.
            generateQAs(quizIndex)
            // Runs this codeblock when all of the questions have been generated.
        } else {
            console.log('working')
            // Calls the function to display the end screen.
            endQuiz()
        }
        // Clears the timer
        clearInterval(nextQ);
        // Calls this function to be run every 500 milliseconds (i.e. half a second).
    }, 500)
}

// 4.1 Displays the end screen.
function endQuiz() {
    // Hides questions and possible answers.
    questions.classList.add("hide");
    // Displays end screen.
    endScreen.classList.remove("hide");
    // Displays user’s final score.
    finalScore.textContent = score;
}

// 5.1 Displays a submit error or confirm message (after user’s submitted their initials on end screen).
function displayMsg(type, message) {
    // Creates an article tag (for the message).
    const submitMsg = document.createElement("article");
    // Sets article’s class.
    submitMsg.setAttribute("class", type);
    // Sets article’s id.
    submitMsg.setAttribute("id", "sbt-msg");
    // Sets the text of the message.
    submitMsg.textContent = message;
    // Renders the message to the page, underneath the input field and submit button.
    endScreen.appendChild(submitMsg);
}

// 5.2 Listens for a click event on the submit button and calls function.
submitButton.addEventListener("click", function () {
    // Gets reference for ‘submit’ message (to then check if it exists).
    const submitMsg = document.querySelector("#sbt-msg");
    // Runs this codeblock if the ‘submit’ message already exists.
    if (submitMsg !== null) {
        // Removes the ‘submit’ message (where applicable).
        submitMsg.remove()
    }
    // 5.3 ‘Holds’ user’s initials and score.
    const user = {
        initials: userInitials.value,
        score: finalScore.innerHTML,
    };
    // 5.4 Validates user’s initials.
    // Runs this codeblock if user’s left initials blank.
    if (userInitials.value === "") {
        // Calls function to display ‘submit’ error message.
        displayMsg("error", "Initials cannot be blank. Please enter your initials.");
        // Runs this codeblock if user’s initials exceed three characters.
    } else if (userInitials.value.length > 3) {
        // Calls function to display ‘submit’ error message.
        displayMsg("error", "Initials must be less than three characters.");
        // 5.5 Runs this codeblock if user’s initials are as required.
    } else {
        // Gets existing scores from browser (or an empty array if none are already saved).
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        // Adds user’s initials/score to existing scores (or the empty array).
        highScores.push(user);
        // Saves the scores (now with user’s score added) to the browser.
        localStorage.setItem("highScores", JSON.stringify(highScores));
        // 5.6 Calls function to display ‘submit’ confirm message
        displayMsg("confirm", "Thanks for submitting your score!");
        // 5.7 Creates an anchor tag (link).
        const viewHighScores = document.createElement("a");
        // Sets the text of the link.
        viewHighScores.innerHTML = 'View High Scores';
        // Sets the link to the High Scores html page.
        viewHighScores.setAttribute('href', "./assets/pages/highscores.html");
        // Renders the link to the page, underneath the ‘submit’ message.
        endScreen.appendChild(viewHighScores);
    }
}
)