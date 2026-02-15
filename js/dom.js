// console.log("dom is here")
// console.log("dom is like a tree");
// console.log(document);

// get element by tagName
const liCollection = document.getElementsByTagName("li")
for(const li of liCollection){
    // console.log(li.innerText);
}

const pCollection = document.getElementsByTagName("p")
for (const p of pCollection){
    // console.log(p.innerText);
}

// getElement by Id
const bdh1 = document.getElementById("bd-h-1")
bdh1.innerText = "Bangladesh Updated"
bdh1.style.color = 'red';

const seasons = document.getElementById("seasons")
// console.log(seasons);
// seasons.innerText = "season is gone"
seasons.innerHTML = `<h2>Hello seasons you are changed</h2>`
seasons.style.backgroundColor = "yellow"
seasons.style.border = "1px, solid"
seasons.style.padding = "10px";
seasons.style.borderRadius = '10px'


// get element by className
const books = document.getElementsByClassName("books")
// console.log(books);
for(const book of books){ 
    book.style.backgroundColor = "red";
    book.style.padding = "10px"
    book.style.borderRadius = "15px"
}      