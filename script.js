let player={
    Name:"Per",
    Chips:145
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=''

let display_message=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardsEl=document.getElementById('cards-el')


let playerEl=document.getElementById('player-el')
playerEl.textContent=player.Name + ': $' + player.Chips

function startGame(){
    isAlive=true
    let firstCard=Math.floor((Math.random()*13+1))
    let secondCard=Math.floor((Math.random()*13+1))
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function loopcards(){
    let card_dis=''
    cards.forEach(element => {
        card_dis+=element+' '
    });
    return card_dis
}

function renderGame(){
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
    if (isAlive==true && hasBlackJack==false){
        let card=Math.floor((Math.random()*13+1))
        cards.push(card)
        sum+=card
        renderGame()
    }
}