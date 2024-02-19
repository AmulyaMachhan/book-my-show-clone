import { createCard } from "./card.js";

const sportEventContainer = document.getElementById("sport-events-container");

const sports = [
    {name : "Fit India Virtual Marathon - Get Unique Colorful Medal by Courier", type : "Your Place and Your Time: India" , image : "images/game-image-1.png"},
    {name : "Mumbai City FC vs Bengaluru FC", type : "Mumbai Football Arena: Andheri West" , image : "images/game-image-2.png"},
    {name : "The Great Inflate Run- Chandigarh", type : "Venue To Be Announced: Chandigar" , image : "images/game-image-3.png"},
    {name : "", type : "" , image : "images/game-image-5.png"},
    {name : "", type : "" , image : "images/game-image-6.png"},
    {name : "", type : "" , image : "images/game-image-7.png"},
    {name : "", type : "" , image : "images/game-image-8.png"},
    {name : "", type : "" , image : "images/game-image-9.png"},
    {name : "", type : "" , image : "images/game-image-10.png"},
    {name : "", type : "" , image : "images/game-image-4.png"},
    {name : "", type : "" , image : "images/game-image-4.png"},
    {name : "", type : "" , image : "images/game-image-4.png"},
    {name : "", type : "" , image : "images/game-image-4.png"},

]

sports.forEach( sport => {

    const card= createCard(sport);
    sportEventContainer.appendChild(card);
})