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

// Deal the Deck
// Use newDeck to push image URL to img src
// reference last value in array for pushing
// Increment one less from newDeck (new array?)
 // Pop old value in newDeck
//  Create a function for adding card to Dealer + Player Hands
// Call the function 4 times
// pushing between array index[0] and array.length
// After random selection, store the value, push it to img src then pop