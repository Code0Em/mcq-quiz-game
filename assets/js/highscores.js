// **JAVASCRIPT TASKS**
// Tasks continued from logic.js file.

// TASK 6: Existing initials/scores (including user’s) are displayed on the highscores page. These are sorted from highest score (at top) to lowest. These are numbered (1 being the highest score). When user’s select the clear button, the existing scores are cleared.  When the user selects the go back button, they’re returned to the start page.

// TASK 6.1: Create highscores.js file and link highscore.html file to this.

// TASK 6.2: Get references for the HTML elements that we need.

// TASK: 6.3: Get highScores string (i.e. existing scores) from local storage (i.e. the browser). Use JSON.parse to ‘transform’ this JSON string back into a Javascript object.

// TASK 6.4: Create a function to compare the score items in the highScores array (i.e. the existing scores). Set the parameters as a and b, and return b.score subtracted by a.score. (Note: the sort() method sorts values as strings. Because we want to sort numbers, we need to create this compare function first and then pass this as the parameter  when we call the sort() method).

// TASK 6.5: Create a function to display the existing scores and initials, from highest to lowest score. Add an if statement. Set the argument to: if the highScores variable (i.e. the existing scores from the browser) is not equal to null (i.e. there are existing scores saved) call a sort() method with the compareByScore function as the parameter.

// TASK 6.6: In the same function, add a forLoop. Set this to loop through all of objects in the highScores array. In each iteration, create a list item. Set the text of the list item to (one of) the objects in the highScores array (i.e. user’s initial and score). Add the list item to the scoresList variable (i.e. the ordered list tag with id of high-scores) (so each initial/scores are displayed one after another).

// TASK 6.7: Call the showScores function (so all of the saved scores and initials are displayed, from highest to lowest).

// TASK 6.8: Add the onclick attribute to the clear button. (Note: this is instead of an event listener, as used on the other buttons in this application). Within the corresponding function, use the clear() method to clear the local storage (i.e. deletes existing scores from the browser). Also set the text of the scoresList variable to an empty screen (so the existing scores are no longer displayed).
