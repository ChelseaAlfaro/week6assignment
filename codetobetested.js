// This is the same code that is in my week6capstone file. I moved it into a seperate document so that it would be easier for me to reference as I wrote my test.

function createDeck(suit,rank) {
    suit = ['S','H','C','D'];
    rank = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    deck = [];   
    
    for (let suitcounter = 0; suitcounter < suit.length; suitcounter++){
        for(let rankcounter = 0; rankcounter < rank.length; rankcounter++){
            deck.push(rank[rankcounter]+suit[suitcounter]);
     }
    } return deck;
}

