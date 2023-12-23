// **TASK 1: Create an array (of objects) containing the quiz questions, possible answers and the correct answer for each question.

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

// **TASK 2: When the user selects the start button: the start page is hidden, the first question with possible answers is shown and the timer starts to countdown.

// *TASK 2.1: Create a function that will create buttons (for the possible answers), using createElement() method and appendChild() method. Set the text of the button to the items in the answers array(s) (which are in the quiz array); to do this, set the function parameters to i and j, so that the array indexes can be set later when calling the function (n.b. this function will be used on all questions).

// *TASK: 2.2: Create a function that will create a timer (i.e. a countdown), using setInterval method (to countdown) and if/else statement (to determine what to do when time is equal/greater than 1 and when time is less than 1). Also include clearInterval() method to clear the timer when time is up.

// *TASK 2.3: Create event listener for click event on start button.

// *TASK 2.3.1: Within event listener: add the hide class to the startScreen variable, using the classList.add() method (n.b. this class is set to display: none, so when we add this class, it will hide this element). Vice versa, using the classList.remove() method, remove the hide class from the questions variable (so that this element will now be displayed).

// *TASK 2.3.2: Add the question string (from the quiz array) to the questionTitle variable. Set the quiz array index to 0, so that the first question is displayed. 

// *TASK 2.3.3: Using a forLoop, call the answerButton function as many times are there are possible answers (i.e. the length of the answers array). Set the parameters to 0 (so that the first object in the answers array is passed) and to j (so that each item in the answer array will be looped through). This will create as many buttons as there are possible answers, and will set the text of the buttons to each item in the answers array.

// * TASK 2.3.4: Call the timer function (so that the countdown starts and the time left is displayed).