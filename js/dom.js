// console.log("dom is here")
// console.log("dom is like a tree");
// console.log(document);

const liCollection = document.getElementsByTagName("li")
for(const li of liCollection){
    console.log(li.innerText);
}

const pCollection = document.getElementsByTagName("p")
for (const p of pCollection){
    console.log(p.innerText);
}