const btnEL =document.querySelector(".btn");
const containerEl =document.querySelector(".container");
const popupcontainerEl =document.querySelector(".popup-container");



const closeIconEL =document.querySelector(".close-icon");

btnEL.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active")
})
closeIconEL.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active")
})
