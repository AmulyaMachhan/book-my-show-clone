document.addEventListener("DOMContentLoaded" , function (){
    const btn = document.getElementById('menu');
    const menuContainer = document.querySelector(".menu-container"); 
    const wrapper = document.querySelector(".wrapper");
    const slides = document.querySelectorAll(".slides div");

    btn.addEventListener( "click" , function (event) {
        if(menuContainer.style.display === "none"){
            event.stopPropagation();
            menuContainer.style.display = "block" ;
            document.body.style.overflow = "hidden";
            wrapper.style.pointerEvents = "none";
            wrapper.style.backgroundColor = "grayscale(30%)";

            slides.forEach( element =>  {
                element.style.animationPlayState = "paused";
            });
        } else {
            document.body.style.overflow = "";
            wrapper.style.position = ""; 
            wrapper.style.pointerEvents = "";
            wrapper.style.filter = ""; 


            slides.forEach( element =>  {
                element.style.animationPlayState = "running";
            });
        }
    });

    
    document.addEventListener("click" , function (event) {
        if ( !menuContainer.contains(event.target) && event.target !== btn){
            menuContainer.style.display = "none";
            document.body.style.overflow = "";
            wrapper.style.position = ""; 
            wrapper.style.pointerEvents = ""
            wrapper.style.filter = "";   
            
            slides.forEach( element =>  {
                element.style.animationPlayState = "running";
            });

        }
    });
})