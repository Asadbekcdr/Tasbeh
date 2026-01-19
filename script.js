let select = document.querySelector(".select")
let edit = document.querySelector(".edit")
let reset = document.querySelector(".reset")
let count = document.querySelector(".count")
let up = document.querySelector(".up")
let down = document.querySelector(".down")

let savebtn = document.querySelector("#saveBtn")
let closebtn = document.querySelector("#closeBtn")
let model = document.querySelector("#editModal")
let editinput = document.querySelector("#editInput")

let coun = 0
let selectval = +select.value

count.textContent = coun

select.addEventListener("input", () => {
    selectval = +select.value
})


function animateCount() {
    count.classList.add("animate");
    setTimeout(() => count.classList.remove("animate"), 400);
}

up.addEventListener("click", () => {
    coun += selectval
    count.textContent = coun
    animateCount()
})

down.addEventListener("click", () => {
    coun -= selectval
    if (coun < 0) coun = 0
    count.textContent = coun
    animateCount()
})

reset.addEventListener("click", () => {
    if (confirm("Salom, siz chindan ham tasbeh raqamini o‘chirmoqchimisiz?")) {
        coun = 0
        count.textContent = coun
        animateCount()
    }
})

edit.addEventListener("click", () => {
    model.classList.remove("hidden")
    editinput.value = coun
})

savebtn.addEventListener("click", () => {   
    coun = +editinput.value
    if (coun < 0) coun = 0
    count.textContent = coun
    model.classList.add("hidden")
    animateCount()
})

closebtn.addEventListener("click", () => {
    model.classList.add("hidden")
})

function animateCount() {
    count.classList.remove("animate");
    void count.offsetWidth; 
    count.classList.add("animate");
}
