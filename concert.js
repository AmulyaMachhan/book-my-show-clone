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
})