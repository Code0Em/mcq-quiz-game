// **TASKS**

// *TASK 1: Create an array (of objects) containing the quiz questions, possible answers and the correct answer for each question.

// *TASK 2: When the user selects the start button: the start page is hidden, the first question with possible answers is shown and the timer starts to countdown.

// TASK 2.1: Get references for the HTML elements that we need.

// TASK 2.2: Create a variable for the index of the quiz array. Set this to 0. (This will be used and updated by functions later).

// TASK 2.3: Create a function that will set the text of the question, and create buttons that will contain the text of the possible answers. Set the parameter of the function to the quizIndex (this is 0 to begin with (i.e. for the first question), but will be updated when calling the function for the remaining questions). Set the question text to the first item of each object in the quiz array. Also add a number to the question text. Base this on the quizIndex plus 1 (because JavaScript is zero) (i.e. question one is at index zero). Set the text content of the possible answers to an empty string (to 'erase' the previous question’s answers). Within a forLoop, use createElement() method and appendChild() method to create a button which is added onto the questions variable (i.e. the section tag with an id of questions). Add an event listener for click events to the button. Set the text of the button to (one of) the items in the answers array (which is in the quiz array). Set the forLoop to continue iterating for the length of the answers array. This will generate a button for each possible answer in the answers array.

// TASK: 2.4: Create a variable called timeLeft and set this to the total time for the quiz (in seconds). For the total time, use a calculation of seconds multiplied by length of quiz (to give a total time based on the number of questions in the quiz).

// TASK 2.5: Create a function that will create a timer (i.e. a countdown), using setInterval method (to countdown) and an if/else statement (to determine what to do when time is equal/greater than 1 and when time is less than 1). Also include clearInterval() method to clear the timer when time is up.

// TASK 2.6: Add event listener for click event on start button and create corresponding function. Within the function: add the hide class to the startScreen variable, using the classList.add() method (this class is set to display: none, so when we add this class, it will hide this element). Remove the hide class from the questions variable, using the classList.remove() method (so that this element will now be displayed). Call the generateQAs function, with the parameter unchanged (this variable is currently set to 0, so the first question and answers will be displayed). Call the timer function (so that the countdown starts and the time left is displayed).

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