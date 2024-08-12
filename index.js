// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "seraphic"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let guess = prompt("enter a letter")
let index = word.indexOf(guess)

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if ( word.includes(guess)){
  index= index + 1
  console.log("Your letter is in the word. it is the", index, "letter in the word!")
   }


// Prompt the user to guess the word 
let guess2 = prompt("Guess the word.") 

// Increase attempts by 1
attempts = attempts ++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (guess2 == word){
  console.log("Congrats, you guessed the word! do a little dance :)")
} else{
  console.log("You are wrong :(")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (guess2 !== word){
  let NewGuess = prompt("Enter another letter")
  if ( word.includes(NewGuess)){
    let index2 = word.indexOf(NewGuess)
  index2 = index2 + 1
  console.log("Your letter is in the word. it is the", index2, "letter in the word!")
     index = 0
    guess2 = prompt("Guess the word.") 

    if (guess2 == word){
  console.log("Congrats, you guessed the word! do a little dance.")
} else{
  console.log("You are wrong :(")
      attempts ++
}
   }else{
    console.log("Wrong letter. Try again!")
    
   }
  
  
}

// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 
console.log ("It took", attempts , "attempts!")
