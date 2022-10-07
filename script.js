function guessNumber() {
    //Get and prompt username
    const username = prompt('Enter Your Username: ')
    console.log(`Welcome ${username} to the number guessing game \n`)
    
    let num2 = 1000
    let score = 0
    let level = 1
    
    for (let num1=2; num1<num2; num1++){
      // generating a random integer from 1 to 10
      const random = Math.floor(Math.random() * num1) + 1;
  
      //Levels
      console.log(`Level ${level}`)
      
      // take input from the user
      let number = parseInt(prompt(`Guess a number from 1 to ${num1}: `))
    
      // take the input until the guess is correct
      while (number !== random) {
        number = parseInt(prompt(`Guess a number from 1 to ${num1}: `))
      }
    
      // check if the guess is correct and give your score
      if (number == random) {
        console.log('Correct.')
        score++
        level++
        console.log(`${username}, your score is ${score}\n`)
      }
    }
}

guessNumber()