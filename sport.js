import { createCard } from "./card.js";

const sportEventContainer = document.getElementById("sport-events-container");

const sports = [
    {name : "Fit India Virtual Marathon - Get Unique Colorful Medal by Courier", type : "Your Place and Your Time: India" , image : "images/game-image-1.png"},
    {name : "Mumbai City FC vs Bengaluru FC", type : "Mumbai Football Arena: Andheri West" , image : "images/game-image-2.png"},
    {name : "The Great Inflate Run- Chandigarh", type : "Venue To Be Announced: Chandigar" , image : "images/game-image-3.png"},
    {name : "Fit India Virtual Marathon - Get Unique Colorful Medal by Courier", type : "Your Place and Your Time: India", image : "images/game-image-5.png"},
    {name : "Fit India Virtual Marathon - Get Unique Colorful Medal by Courier", type : "Your Place and Your Time: India", image : "images/game-image-6.png"},
    {name : "Fit India Virtual Marathon - Get Unique Colorful Medal by Courier", type : "Your Place and Your Time: India", image : "images/game-image-7.png"},
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
});

const slideArrow = document.createElement("div");
slideArrow.classList.add("right-arrow");
slideArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>`;
sportEventContainer.appendChild(slideArrow);