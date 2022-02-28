let btn = document.querySelector(".btn");
let title = document.getElementById("title");
let desc = document.getElementById("desc");


let notesElem = document.querySelector(".notes")
let notes=JSON.parse(localStorage.getItem("notes"));
btn.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes()
})
function addNotes() {
    let titleVal = title.value;
    let descVal = desc.value
    let cards = document.createElement("div");
    cards.classList.add("cards");
    if (titleVal) {
    cards.innerHTML = `
    <h1> ${titleVal}</h1>
    <p>${descVal}</p>
    <button class="delete">Delete</button>`
    notesElem.appendChild(cards);
    updateLs();
    }
    let clear= cards.querySelector(".delete")
    clear.addEventListener("click",()=>{
        cards.remove();
    })
}
function updateLs(){
    let cards=document.querySelectorAll('.cards');
    let arr=[];
    cards.forEach(element =>{
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    })
    localStorage.setItem("notes",JSON.stringify(arr));
}