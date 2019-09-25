// Testing Dealing
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




// Dealer Hand deal
var deal = (deck) => {
    // Dealer Deal

    let img = document.createElement('img');
    let img1 = document.createElement('img');
    img.src = "images/9_of_hearts.png";
    img1.src = "images/queen_of_hearts.png";
    document.getElementById("dealer-hand").appendChild(img);
    document.getElementById("dealer-hand").appendChild(img1);

    // Player Deal
    let imgPlayer = document.createElement('img');
    let img1Player = document.createElement('img')
    imgPlayer.src = deck[deck.length-1];
    img1Player.src = "images/queen_of_hearts.png";
    document.getElementById("player-hand").appendChild(imgPlayer);
    document.getElementById("player-hand").appendChild(img1Player);
}
document.getElementById("deal-button").addEventListener("click", function () {
    deal(newDeck)
});


// Hit Logic
var hit = () => {
    // Dealer Hit
    let hitImgDL = document.createElement('img');
    hitImgDL.src = "images/ace_of_clubs.png";
    document.getElementById("dealer-hand").appendChild(hitImgDL);

    // Player Hit
    let hitImgPL = document.createElement('img');
    hitImgPL.src = "images/jack_of_spades.png";
    document.getElementById('player-hand').appendChild(hitImgPL);
}
document.getElementById('hit-button').addEventListener("click", hit);

// document.getElementById("hit-button").addEventListener("click", function(){
//     // hit logic
// });

// document.getElementById("stand-button").addEventListener("click", function(){
//     // stand logic
// });