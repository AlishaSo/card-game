const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

// STEP ONE - Building A Deck.

//buildDeck.push and position array
// 1. use a function declaration to create a buildDeck function.
// 2. inside the buildDeck function, create an array called "suits" that lists all four suits from a deck of card as strings.
// 3. inside the buildDeck function, create a 2nd array called "ranks" that lists all 13 cards from ace to King as strings.
// 4. inside the buildDeck function, create an empty array called "deck"
// 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
// 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
// HINT: The result of step 6 is that each card will be an object inside of the deck array, for example [{suit: "diamonds", rank: "A", value: 0}, {suit: "diamonds", rank: "2", value: 1},...{etc}]. For example, if we wanted to organize the players and teams of the NBA with index numbers, we could write: nba.push({player: players[i], team: teams[n], index: i})
// 7. After your loops, return deck, which should now return an array full of card objects if you were to run buildDeck().

//1. declare a function named buildDeck
const buildDeck = () => {
  //2. declare array of suits
  const suits = ['♠️', '❤️', '♣️', '♦️'];  //['spades', 'hearts', 'diamonds', 'clubs'];
  //3. declare array of ranks
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  //4. declare empty array named deck
  let deck = [];

  //5. create two for loops, one being nested inside the other
  for(let i = 0; i < ranks.length; i++) { //5a. the outer for loop needs to go over each element in the array 'ranks'
    for(let j = 0; j < suits.length; j++) { //5b. the inner for loop will go over each element inside the 'suits' array
      /* 6. push an object into the 'deck' array with the keys of: rank, suit and value;
       * their values will be: the rank element that you're currently on, the suit element that you're currently on;
       * and the index of the rank element that you're currently on, respectively
       */
      deck.push({
        rank: ranks[i],
        suit: suits[j],
        value: i
      })
    }
  }
  return deck;
};


// STEP TWO - Shuffling your deck
// 1. use a function declaration to create a function called shuffle that takes deck as an argument.
// 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
// 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
// 4. Create a while loop whos condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
// 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.


//1. declare a function named 'shuffle', which takes in a parameter named 'deck'
const shuffle = deck => {
  //2. create a variable called shuffledDeck, with the value of the parameter 'deck'
  const shuffledDeck = deck;
  /* 3. declare three variables: one named currentIndex, with the value of the length of the deck array;
   * another named temporaryValue and another named randomIndex, and both have no value assigned
  */
  let currentIndex = deck.length - 1; //** you have to subtract 1 because otherwise the function will try to access the element at index 52, which doesn't exist, thus will return undefined **
  let temporaryValue;
  let randomIndex;

  //4. create a while loop that checks if the value of the variable 'currentIndex' is not equal to 0
  while(currentIndex != 0) {
    //5. use the Math methods that generates a random number, to get a number between 0-'currentIndex'
    randomIndex = Math.floor(Math.random() * currentIndex);
    //7. change the value of 'temporaryValue' to equal the value of the array 'shuffledDeck' at the index of 'currentIndex'
    temporaryValue = shuffledDeck[currentIndex];  //10a. this is taking the value of the current element we're looking at in the shuffledDeck array and saving it to the variable temporaryValue
    //8. replace the value of the element you're looking at inside the array 'shuffledDeck' to equal the value of the element at 'randomIndex' from the 'shuffledDeck' array
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex];  //10b. this is replacing the element we're currently looking at with the value of a different, random element from the array
    //9. replace the value of the element at 'randomIndex' from the 'shuffledDeck' array to equal the value of 'temporaryValue'
    shuffledDeck[randomIndex] = temporaryValue;  //10c. this is going to that random element who's value we just assigned somewhere else, and replacing it with the value that was in the place (at the index) of where we just changed the value

    //6. subtract 1 from the 'currentIndex'
    currentIndex--;
  }
  return shuffledDeck;
};


// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

//1. declare a function named 'greet'
const greet = () => {
  //2. create a variable called 'name'; assign it the result of calling the 'getInput()' function; [note that you have to pass this function a string that asks the user for their name]
  let name = getInput('What\'s your name?');
  //3. use console.log() to print a greeting, with the user's name (that we just got from step 2), so that it shows on the terminal 
  console.log(`\n Hello, ${name}! \n`);
  //4. return the value of the 'name' variable
  return name;
};


// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.

//1. declare a function named 'compare' that receives two arguments
const compare = (card1, card2) => {
  //2. 'return' the result of subtracting the 'value' of the second card, minus the 'value' of the first card
  return card1.value - card2.value;
};


// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.

//1. create a function named 'guess' that receives two arguments
const guess = (card1, card2) => {
  //2. use console.log to print the rank and suit of the first card to the terminal
  console.log(`You drew ${card1.rank}${card1.suit}`);
  //3. create a variable named 'input' and assign it the result of calling the function getInput(); pass this function a sentence asking the user what their guess is
  let userGuess = getInput('Do you think the next card will be higher (h) or lower (l) than this card?');

  //4. check the answer that the user entered, which we saved to the variable 'userGuess'
  //5a. if the user entered an 'h'
  if(userGuess === 'h') {
    //5b. use the 'return' to send back the result of evaluating whether card2 is a bigger number than card1
    return compare(card1, card2) < 0;
  }
  //6a. if the user entered an 'l'
  else if(userGuess === 'l') {
    //6b. use the 'return' to send back the result of evaluating whether card12 is a bigger number than card2
    return compare(card1, card2) > 0;
  }
  //7. if the user entered something other than 'h' or 'l', tell them they need to enter one of those two; they get not points for this round; 'return' the falsy value of 'false'
  else {
    console.log("You need to guess either 'h' (higher) or 'l' (lower). \nYou get no points for this round\n");
    return false;
  }
};


// STEP SIX - Let's play!
// 1. declare a function called playGame
// 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
// 3. declare a variable called playerName that takes the result of the greet function as its value.
// 4. using let, declare a score variable that's currently set to the number zero
// 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
// 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.

//1. create a function named 'playGame'
const playGame = () => {
  //2. create a variable named 'deck' and assign it the result of calling the 'shuffle()' function (remember that shuffle() expects an array of cards)
  const deck = shuffle(buildDeck());
  //3. create a variable named 'playerName' and assign it the result of running the 'greet()' function
  const playerName = greet();
  //4. create a variable using the 'let' keyword (which allows its value to be able to be be re-assigned later) and name it 'score'; assign the value of 0 to it
  let score = 0;
  //5. create a variable named 'currentCard'; remove the last element(.pop()) from the 'deck' array and save it to this variable
  let currentCard = deck.pop();

  //6. declare a 'while' loop that will run as long as: 1. 'score' is less than(<) 5 AND(&&) 'score' is < the amount of cards still left inside the 'deck' array
  while(score < 5 && score < deck.length) {
    //7. create a re-assignable variable named 'nextCard' assign it the value of the last element in the 'deck' array
    let nextCard = deck.pop();
    
    //8. check the result of calling the guess() function; remember that guess() expects two arguments (two cards) in order to execute it's function body
    if(guess(currentCard, nextCard)) {  //8a. if the result from guess() is truthy(true)
      score++; //8b. add 1 to the 'score' variable
      console.log(`Congrats, you guessed correctly! \nYour score is: ${score}\n`);  //8c. congratulate the user for guessing correctly, and tell them their score
    }
    else {  //8d. if the result from the guess() function is falsy(false)
      console.log(`Sorry, your guess was wrong. No points for you \nYour score is still ${score}\n`); //8e. tell the user that they guess wrong, and they get no points
    }
    //9. give 'currentCard' the value of 'nextCard', meaning that now 'currentCard' will be equal to the card the user was guessing against; [note: at this point, unless the user has reached the last card, or they have accumulated 5 points, the program will go back inside of the while loop and 'nextCard' will be assigned a new value]
    currentCard = nextCard;
  }

  //10. when the 'while' loop stops executing, check if there are any cards left in the deck
  deck.length === 0 ? 
  console.log(`    You\'re out of cards

  🙃🙃🙃🙃🙃🙃🙃
  🙃 you LOST 🙃
  🙃🙃🙃🙃🙃🙃🙃\n`) //if there are no cards left, tell the user that, and let them know that they lost the game
    : 
    console.log(`
  🎉🎉🎉🎉🎉🎉🎉🎉🎉
  🎉  You   WON!  🎉
  🎉🎉🎉🎉🎉🎉🎉🎉🎉\n`);  //if there are still cards left, tell the user that they won the game
};

//11. call the 'playGame()' function so that the game can begin
playGame();