const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let value = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements =
document.querySelectorAll(
".card,.roadmap-step"
);

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});
const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const themeBtn =
document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        themeBtn.innerHTML = "☀️";

    }

    else{

        themeBtn.innerHTML = "🌙";

    }

};
const startBtn =
document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
    .getElementById("resources")
    .scrollIntoView({

        behavior:"smooth"

    });

});



const checkboxes =
document.querySelectorAll(
".progress-box input"
);

checkboxes.forEach((box,index)=>{

    
    if(box.checked){

        box.parentElement.classList.add(
            "completed"
        );

    }

    box.addEventListener(
        "change",
        ()=>{

            localStorage.setItem(
                `progress-${index}`,
                box.checked
            );

            box.parentElement.classList.toggle(
                "completed",
                box.checked
            );

        }
    );

});