// -- Deal 26 Cards to 2 Players from a Deck
// -- Iterate through the turns where each Player plays a Card
// --- Award a point to the Player with the higher Card
// --- Ties result in zero points for both Players
// -- After all cards have been played, display the score and declare the winner.


// There will be 52 cards, each card needs an assigned value (1-14) and a suit
// Each player will need a Deck of 26 cards randomly assigned to them from the Deck (array) of 52 cards
// Each player has a score that is equal to zero
// Each player will need to pull a card from their deck and compare the two cards
// Whichever player has the higher value card will recieve +1 to their score
// If their cards are equal neither player gets an increase in value.
// I need to create a loop that will run for the length of index of their deck so the game finishes when all cards have been gone through.
// I need to return whichever player has the highest score at the end of the loop as the winner.

//For Jack, Queen, King and Ace I didn't know how to assign a value to those ranks without
// my code getting convoluted and getting lost so I went simple and gave them numerical values
// with Aces high at 14. 

function createDeck() {
    suit = ['S','H','C','D'];
    rank = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    deck = [];   
    
    for (let suitcounter = 0; suitcounter < suit.length; suitcounter++){
        for(let rankcounter = 0; rankcounter < rank.length; rankcounter++){
            deck.push(rank[rankcounter]+suit[suitcounter]);
     }
    } return deck;
}

console.log(`New Deck`,createDeck())

// takes an element from the array and puts it in a new random index.
function shuffleDeck(shufflingDeck) {
    for(let i = 0; i < 52; i++) {
        let tempCard = shufflingDeck[i];
        let randomizer = Math.floor(Math.random() * 52);
        shufflingDeck[i] = shufflingDeck[randomizer];
        shufflingDeck[randomizer] = tempCard;
    } 
}


let gameDeck = createDeck();
shuffleDeck(gameDeck);
console.log('Game Deck' , gameDeck)


// splits array of shuffled deck into two arrays.
//let playersCards = 26;
let player1Deck = gameDeck.slice(0,26)
    console.log('Player 1 Deck' , player1Deck)


let player2Deck = gameDeck.slice(26,52)
    console.log('Player 2 Deck' , player2Deck)

// I need the results to push to two different array. I need to declare two new arrays, player 1 deck
// and player 2 deck. I need the results of dealDecks to push into these two decks. 

console.log(`Let the game begin!`)

// this block of code compares elements player1Deck and player2Deck at the same index to see which value has a higher value
// the code then assigns a point to the score of whichever player had the higher element.

function dealDecks(player1Deck,player2Deck){
    let player1Score = 0
    let player2Score = 0
    for(let i = 0; i <= player1Deck.length; i++){ 
    if(player1Deck[i] > player2Deck[i]){
        player1Score += 1
        console.log(`Player 1 wins this round, Player 1 score is ${player1Score}`)
    }
    else if(player2Deck[i] > player1Deck) {
        player2Score += 1
        console.log(`Player 2 wins this round, Player 2 score is ${player2Score}`)  
    }
    else{console.log('Tie, no one gets a point')}}

    let finalScores = `Player 1 score is: ${player1Score}, Player 2 score is: ${player2Score}`
    console.log(finalScores)

    if(player1Score == player2Score){
        console.log(`The game is a tie`)
    } 
    else if (player2Score > player1Score){
        console.log(`Player 2 wins!`)}

    else(console.log(`Player 1 wins!`))

} 
   


dealDecks(player1Deck,player2Deck)












// i need the results to push to two different array. I need to declare two new arrays, player 1 deck
// and player 2 deck. I need the results of dealDecks to push into these two decks. 



    


// Now I need to shuffle the deck (maybe some kind of method?something .random?)
// Then I need to create a class called player with each player getting an empty array (players deck?)
// I need to split my shuffled deck and push those elements into each players deck (use slice?)
// I need to create a loop that will take the first element from Pl1 and Pl2 and compare them, whoevers element is higher
// gets a point added to their score. I will need to add a score constructor to each player (this can be done in the player class).
// This loop will need to run until all elements in each players array have been compared. Once the loop is done running I will need
// to return the player with the higher score as the winner. 


