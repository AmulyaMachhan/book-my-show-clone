document.addEventListener("DOMContentLoaded", function (){

    const trendingLinksContainer = document.getElementById("trending-container");
    
    const trendingLinks =[
        {name : "Jab We Met" , type : "Movies"},
        {name: "Yeh Jawani Hai Deewani" ,  type : "Movies"},
        {name: "Bramayugam" ,  type : "Movies"},
        {name: "Veer Zara" ,  type : "Movies"},
        {name: "Fighter" ,  type : "Movies"},
        {name: "Seedhe Maut Live Concert" ,  type : "Movies"},
        {name: "Hanuman" ,  type : "Movies"},
        {name: "Teri Baaton Mai Esa Uljha Jiya" ,  type : "Movies"},
        {name: "Warning 2" ,  type : "Movies"},
        {name: "Godzilla x Kong : The New Empire" ,  type : "Movies"},
        {name: "" ,  type : "Movies"},
        {name: "" ,  type : "Movies"},
    ];

    trendingLinks.forEach( trendingLink =>{
        const link = createLink(trendingLink);
        trendingLinksContainer.appendChild(link);
    });

    function createLink(trendingLink){

        const link= document.createElement("a");
        link.classList.add("trending-link");

        link.innerHTML = 
        `<div class="trending-link-item">
            <h3>${trendingLink.name}</h3>
            <p>${trendingLink.type}</p>
        </div>`;

        return link;
    }
})