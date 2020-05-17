
let inputNumber = document.querySelector("#numberRolls")
let rollButton = document.querySelector("#submit")
let rollTotal = document.querySelector("#sumOfRolls")

let counter = 0


rollButton.addEventListener("click", function () {
    inputNumber.value = inputNumber.innerHTML.value
    function inputNumber(number) {
        return Math.floor(Math.random() * (number + 1));
    }



    rollTotal.innerHTML = Number(rollTotal.innerHTML) + 1;

    //while (rollTotal = rollTotal.innerHTML) [counter];

    //if (rollTotal.innerHTML >= 0) + 1 
    // randomNumberVar.innerHTML = Number(rollTotal.innerHTML) + 1;


})


//let randomNumberVar = Math.random()
//console.log(randomNumberVar)
//if (randomNumberVar > 0.5 * 10) {
//    inputNumber.innerHTML = Number(rollTotal.innerHTML) + 1;


console.log(rollButton)
console.log(rollTotal)