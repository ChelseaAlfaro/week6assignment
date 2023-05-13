// I need classes for Player, Deck and Card


// This class creates a deck. For Jack, Queen, King and Ace I didn't know how to assign 
// a value to those ranks without my code getting convoluted and getting lost so I went simple and gave them numerical values
// with Aces high at 14. 
class Deck {
   constructor(){ 
    
    this.suit = ['S','H','C','D'];
    this.rank = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    this.deck = [];  
}

createDeck(){

    for (let suitcounter = 0; suitcounter < this.suit.length; suitcounter++){
        for(let rankcounter = 0; rankcounter < this.rank.length; rankcounter++){
            this.deck.push(this.rank[rankcounter]+ this.suit[suitcounter]);
     }
    } return this.deck;
}

shuffleDeck(shufflingDeck) {
    for(let i = 0; i < 52; i++) {
        let tempCard = shufflingDeck[i];
        let randomizer = Math.floor(Math.random() * 52);
        shufflingDeck[i] = shufflingDeck[randomizer];
        shufflingDeck[randomizer] = tempCard;
    } 

}

}

let deck = new Deck()
console.log(deck.createDeck())

let gameDeck = createDeck();
shuffleDeck(gameDeck);
console.log('Game Deck' , gameDeck)

