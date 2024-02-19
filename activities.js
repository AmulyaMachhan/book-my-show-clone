import { createCard } from "./card.js";

const activitiesContainer = document.getElementById("activities-container");

const activities = [
    {name : "VR Escape Room The Prison" , type : "HIGH CLASS VR: Chandigarh" , image : "images/fun-activities-1.png" },
    {name : "Hamleys Playzone - Chandigarh" , type : "Hamleys (Elante Mall): Chandigarh" , image : "images/fun-activities-2.png" },
    {name : "VR Escape Room House Of Fear VR" , type : "HIGH CLASS VR: Chandigarh" , image : "images/fun-activities-3.png" },
    {name : "MULTIPLAYER VR GAMING" , type : "HIGH CLASS VR: Chandigarh" , image : "images/fun-activities-4.png" },
    {name : "Imagicaa Water Park" , type : "Imagica Water Park (Khopoli): Mumbai" , image : "images/fun-activities-5.png" },
    {name : "Chokhi Dhani, Sonipat" , type : "Chokhi Dhani, Sonipat" , image : "images/fun-activities-6.png" },
    {name : "Mystery Rooms: Chandigarh" , type : "Mystery Rooms: Chandigarh" , image : "images/fun-activities-7.png" },
    {name : "Sadda Pind, Amritsar" , type : "Sadda Pind, Amritsar" , image : "images/fun-activities-8.png" },
    {name : "Imagicaa Theme Park" , type : "Imagicaa Theme Park" , image : "images/fun-activities-9.png" },
    {name : "VR Escape Room Christmas" , type : "HIGH CLASS VR: Chandigarh" , image : "images/fun-activities-10.png" },
    {name : "" , type : "" , image : "fun-activities-1.png" },
    {name : "" , type : "" , image : "fun-activities-1.png" },
]

activities.forEach( activity => {
    const card = createCard(activity);
    activitiesContainer.appendChild(card);
});

const slideArrow = document.createElement("div");
slideArrow.classList.add("right-arrow");
slideArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>`;
activitiesContainer.appendChild(slideArrow);

