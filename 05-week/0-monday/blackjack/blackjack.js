// Dealer Hand deal
var deal = () => {
    // Dealer Deal
    let img = document.createElement('img');
    let img1 = document.createElement('img')
    img.src = "images/9_of_hearts.png";
    img1.src = "images/queen_of_hearts2.png";
    document.getElementById("dealer-hand").appendChild(img);
    document.getElementById("dealer-hand").appendChild(img1);

    // Player Deal
    let imgPlayer = document.createElement('img');
    let img1Player = document.createElement('img')
    imgPlayer.src = "images/9_of_hearts.png";
    img1Player.src = "images/queen_of_hearts2.png";
    document.getElementById("player-hand").appendChild(imgPlayer);
    document.getElementById("player-hand").appendChild(img1Player);
}
document.getElementById("deal-button").addEventListener("click", deal);


// Hit Logic
var hit = () => {
    let
}


// document.getElementById("hit-button").addEventListener("click", function(){
//     // hit logic
// });

// document.getElementById("stand-button").addEventListener("click", function(){
//     // stand logic
// });