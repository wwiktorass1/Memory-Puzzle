document.getElementById("projectName").innerHTML = "Card Game"

let colors = ["yellow", "green", "red", "black", "yellow", "purple", "grey", "orange", "orange",
"brown", "red", "brown", "grey", "purple", "green", "black"];

let conjecture1Index;
let conjecture2Index;
let findedCards = [];
let count = 0;
let conjecture1;
let conjecture2;
var numberOfConjecture = 1;

function setColorForButton(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = colors[index];
}


function card(index) {
    if (count == 0) {
        conjecture1 = colors[index];
        conjecture1Index = index;
        console.log(conjecture1Index + " conjecture1Index");
        setColorForButton(index);
        count++;
    } else if (count == 1) {
        conjecture2 = colors[index];
        conjecture2Index = index;
        console.log(conjecture2Index + " conjecture2Index");
        setColorForButton(index);
        count++;
    } else if (count == 2) {
        setColorToWhite(conjecture1Index);
        setColorToWhite(conjecture2Index);
        conjecture1 = colors[index];
        conjecture1Index = index;
        conjecture2 = null;
        conjecture2Index = null;
        setColorForButton(index);
        count = 1;
    }

    if ((conjecture1Index !== conjecture2Index) && (conjecture1 === conjecture2)) {
        count = 0;
        findedCards.push(conjecture1);
        conjecture1Index = null;
        conjecture1 = null;
        conjecture2Index = null;
        conjecture2 = null;

    } else if ((conjecture1Index === conjecture2Index) && (conjecture1 !== null)) {
        conjecture2Index = null;
        conjecture2 = null;
        count = 1;
    }
    console.log(numberOfConjecture + " numberOfConjecture bifore show")
    document.getElementById("result").innerHTML = "Conjectured: " + numberOfConjecture++;

    let boolin = true;
    for (let i = 0; i < colors.length; i++) {
        if (!findedCards.includes(colors[i])) {
            boolin = false;
            break;
        }
    }

    if (boolin === true) {
        alert("Your result is " + (numberOfConjecture - 1) + "!");
        for (let i = 0; i < colors.length; i++) {
            setColorToWhite(i);
        }
        conjecture1 = null;
        conjecture2 = null;
        conjecture1Index = null;
        conjecture2Index = null;
        numberOfconjecture = 1;
        document.getElementById("result").innerHTML = "Conjectured: " + --numberOfConjecture;
        console.log(numberOfconjecture + " numberOfconjecture 2")
        findedCards = [];
        randomizeCards();

    }
}

function setColorToWhite(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = "white";
}

function randomizeCards() {
    let currentIndex = colors.length;
    console.log(currentIndex + " currentIndex")
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        console.log(currentIndex + " currentIndex not equal 0")
        randomIndex = Math.floor(Math.random() * currentIndex);
        --currentIndex;
        console.log(currentIndex + " currentIndex")
        colors[currentIndex] = colors[randomIndex];
        colors[randomIndex] = temporaryValue;
        temporaryValue = colors[currentIndex];
    }
}

document.getElementById("year").innerHTML = new Date().getFullYear() + " y.";
