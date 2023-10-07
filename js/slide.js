const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        if(isLeft){
            if(currentItem <= 0){
                currentItem = (maxItems - 1) 
            }else{
                currentItem -=1
            }
        
        }else{
            if(currentItem >= maxItems - 1){
                currentItem = 0
            }else{
                currentItem +=1 
            }
       }
       console.log("clicked", isLeft, currentItem);
       items.forEach(item => item.classList.remove('current-item'));
       items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth"
       });
       items[currentItem].classList.add("current-item");
    })
})