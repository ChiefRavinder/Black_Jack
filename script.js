let firstCard=Math.floor((Math.random()*12+1))
let secondCard=Math.floor((Math.random()*12+1))
let cards=[firstCard,secondCard]

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=''

let display_message=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardsEl=document.getElementById('cards-el')


function renderGame(){
    startGame()
}

function loopcards(){
    let card_dis=''
    cards.forEach(element => {
        card_dis+=element+' '
    });
    return card_dis
}

function startGame(){
    sumEl.innerText= 'Sum: ' +sum
    cardsEl.innerText= 'Cards: ' + loopcards()


    if (sum<=20){
        message='Do you want to draw a new card?'
    }
    else if (sum===21){
        message="Wohoo! You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of the Game!"
        isAlive=false
    }
    display_message.innerText=message
}

function newCard(){
    let card=Math.floor((Math.random()*12+1))
    cards.push(card)
    sum+=card
    startGame()

}