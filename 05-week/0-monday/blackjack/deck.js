// Generate Deck
var CreateDeck = () => {
    let deck = []
    // Iterate each value through suits for a 52 card deck
    var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
    var values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

    for (let suit in suits) {
        for (let value in values) {
            deck.push("images/" + `${values[value]}` + "_of_" + `${suits[suit]}` + ".png");
        }
    }

    return deck
}
var newDeck = CreateDeck();
console.log(newDeck);


// pushing between array index[0] and array.length
// After random selection, store the value, push it to img src then pop
// Calculate points through parseInt

//Switch the /image string around
// Grab index[0] of string
// Use switch case to convert string values into integers