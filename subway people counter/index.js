
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment()
{
count+=1
countEl.innerText = count
}

function save(){
    let display = count + " _ "
saveEl.textContent+=display
countEl.textContent=0
return count = 0
}
