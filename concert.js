import { createCard } from "./card.js";

const concertContainer = document.getElementById("concert-container");

const concerts = [
    {name : "Sukhwinder Singh - live in Concert (Chandigarh)", type : "Sector 34 Exhibiton Ground Chandigarh" ,image : "images/concert-image-1.png"} , 
    {name : "Ream Of a Poet - Shayar Sartaaj Live - Chandigarh" , type : "Sector 34 Exhibiton Ground Chandigarh" ,image : "images/concert-image-2.png"},
    {name : "Shalimar Ground: Sector 5, Panchkula" , type : "Sagar Wali Qawwali 2.0 - Chandigarh" ,image : "images/concert-image-3.png"},
    {name : "VH1 Supersonic Takeover Holi 2024" , type : "Forest Hill Golf and Country Club Resort: Mohali" ,image : "images/concert-image-4.png"},
    {name : "Ed Sheeran: +–=÷× Tour" , type : "Mahalaxmi Race Course: Mumbai" ,image : "images/concert-image-5.png"},
    {name : "BMW Joytown 2024" , type : "Mahalaxmi Race Course: Mumbai" ,image : "images/concert-image-6.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
    {name : "" , type : "" ,image : "images/concert-image-3.png"},
]
 

concerts.forEach( concert => {
    const card = createCard( concert);
    concertContainer.appendChild(card);
});

const slideArrow = document.createElement("div");
slideArrow.classList.add("right-arrow");
slideArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>`;
moviesContainer.appendChild(slideArrow);