let dieRolls = [];
let inputNumber = document.querySelector("#numberRolls")
let rollButton = document.querySelector("#submit")
let rollSum = document.querySelector("#sumOfRolls")
let countRolls = document.querySelector("#roll")
let showAllRolls = document.querySelector("#showAllRolls")
let resetButton = document.querySelector("#reset")


let counter = 0

rollButton.addEventListener("click", function () {
    let userinput = inputNumber.value
    while (counter < userinput) {
        counter += 1
        dieRolls.push(Math.floor(Math.random() * 6 + 1))

        //console.log(dieRolls)
    }

    let rollSum2 = 0
    for (let counter2 = 0; counter2 < dieRolls.length; counter2 += 1) {
        rollSum2 += dieRolls[counter2]

        //console.log(dieRolls)
    }
    countRolls.innerHTML = rollSum2

    showAllRolls.addEventListener("click", function () {
        for (counter2 = 0; counter2 < dieRolls.length; counter2++)
        //let numberRolled = dieRolls[counter2]
        //const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        //allRollsElement.innerHTML += newDiceString;

        console.log(newDiceString)

    })

    //resetButton.addEventListener("click", function () {
    //resetNumber.innerHTML = Number(resetNumber.innerHTML) + 1;


})




