
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message=""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player={
    name:"teja",
    chips:120,
    sayHello:function(){
        console.log("Hello")
    }

}

let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name +":$"+ player.chips
// Create a function, getRandomCard(), that always returns the number 5

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    
    // if 1     -> return 11
    // if 11-13 -> return 10
    /* if(randomNumber===1){
    //     return 11
    // }
    // if(randomNumber===11 | randomNumber===12 | randomNumber===13){
    //     return 10
    */
   if(randomNumber > 10){
    return 10
   }else if (randomNumber === 1){
    return 11
   }else{
    return randomNumber
   }
}


function startGame(){
    isAlive = true
    let firstCard= getRandomCard()
    let secondCard =getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard + secondCard

    renderGame()  
}


function renderGame(){
    sumEl.textContent="Sum: " + sum
    cardsEl.textContent="Cards: " 
    // Create a for loop that renders out all the cards instead of just two
    for(let i=0;i< cards.length;i++){
        cardsEl.textContent += cards[i]+ " "
    }
   
    if(sum<=20){
        message="Do you want to Draw NewCard"
    }else if(sum===21){
        message="You've got Blackjack!"
        hasBlackJack = true 
    }else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
    



}


function newCard(){
    // 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame() // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
 }