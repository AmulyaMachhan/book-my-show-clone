import { createCard } from "./card.js";

const premiereContainer = document.getElementById("premiere-container");

const premieres = [
    {name : "Beautiful Wedding", type : "English" , image : "images/premiere-image-1.png"},
    {name : "Strange Way Of Life", type : "English" , image : "images/premiere-image-2.png"},
    {name : "Naughty Girl", type : "Russian" , image : "images/premiere-image-3.png"},
    {name : "Bobby's Friend", type : "Hindi" , image : "images/premiere-image-4.png"},
    {name : "Aneethi", type : "Tamil" , image : "images/premiere-image-5.png"},
    {name : "", type : "" , image : "images/premiere-image-6.png"},
    {name : "", type : "" , image : "images/premiere-image-7.png"},
    {name : "", type : "" , image : "images/premiere-image-8.png"},
    {name : "", type : "" , image : "images/premiere-image-9.png"},
    {name : "", type : "" , image : "images/premiere-image-10.png"},
    {name : "", type : "" , image : "images/premiere-image-4.png"},
    {name : "", type : "" , image : "images/premiere-image-4.png"},
    {name : "", type : "" , image : "images/premiere-image-4.png"},

]

premieres.forEach( premiere => {

    const card= createCard(premiere);
    premiereContainer.appendChild(card);
});

const slideArrow = document.createElement("div");
slideArrow.classList.add("right-arrow");
slideArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>`;
premiereContainer.appendChild(slideArrow);