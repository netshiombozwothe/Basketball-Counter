
let count1 = 0
let count2 = 0
let scoreBoard1 =document.getElementById("displayOne")
let scoreBoard2 = document.getElementById("displayTwo")

function  addOne(){
   count1 +=1
   scoreBoard1.textContent = count1
}
function addTwo(){
count1 +=2
scoreBoard1.textContent = count1
}
function addThree(){
count1 +=3
scoreBoard1.textContent = count1
}

function add1(){
count2 += 1
scoreBoard2.textContent=count2
}

function add2(){
    count2 +=2
    scoreBoard2.textContent=count2
}

function add3(){
    count2 += 3
    scoreBoard2.textContent=count2
}
function resetValues(){
    count1 = 0
    count2 = 0
    scoreBoard1.textContent = 0
    scoreBoard2.textContent = 0
  
}