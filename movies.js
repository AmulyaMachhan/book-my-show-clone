import { createCard } from "./card.js";

    const moviesContainer = document.getElementById("recommended-movies-container");
    const movies = [
        { name: "Teri Baaton Mai Uljha Jiya", type: "Comedy/Romantic/Family" , image : "images/card-recommended-movie-1.png" }, 
        { name: "Oye Bhole Oye", type: "Comedy/Family", image : "images/card-recommended-movie-2.png" },
        { name: "Jee Ve Sohneya Je", type: "Comedy/Family", image : "images/card-recommended-movie-3.png"},
        { name: "Madame-Web", type: "Comedy/Family", image : "images/card-recommended-movie-4.png"},
        { name: "Fighter", type: "Comedy/Family" ,image : "images/card-recommended-movie-5.png"}
    ];


    movies.forEach(movie => {
        const card = createCard(movie);
        moviesContainer.appendChild(card);
    });

    const slideArrow = document.createElement("div");
    slideArrow.classList.add("right-arrow");
    slideArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>`;
    moviesContainer.appendChild(slideArrow)