// document.getElementById("count").innerText =10
// let count = 0;
// count = count +1
// console.log(count)


// intialise as 0
// listens for clicks on the increment button
// increment the count in the Html

// change the count-el in the HTML to reflect the new count

let countEl= document.getElementById("count")
console.log(countEl)
let saveEl=document.getElementById("save-el")
let count = 0;
function increment(){
   count+=1  ;
   countEl.innerHTML=count
} 
// 1. Create a function, save(), which logs out the count when it's called

function save(){
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + "-"
    // 3. Render the variable in the saveEl using innerText
    // difference b/w innertext and textContent
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}