export function createCard (data){
     
 const card = document.createElement("div");
 card.classList.add("card");

 card.innerHTML = `<div class="image">
    <img src="${data.image}" alt=""/>
    </div>`;

 card.innerHTML += 
    `<span class="name">${data.name}</span>`;

 card.innerHTML +=`
    <span class="type">${data.type}</span>`;

return card;
}