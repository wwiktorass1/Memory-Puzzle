document.getElementById("projectName").innerHTML = "<h1>Puzzle card Game </h1>"

let colors = ["yellow", "green", "red", "black", "purple", "blue", "orange", "yellow", "grey", "orange",
"blue", "green", "purple", "grey", "black", "red"];

let conjecture1Index;
let conjecture2Index;
let findedCards = [];
let count = 0;
let conjecture1;
let conjecture2;
let numberOfConjecture = 0;

function setColorForButton(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = colors[index];
}


function card(index) {
    if (count == 0) {
        conjecture1 = colors[index];
        conjecture1Index = index;
        setColorForButton(index);
        count++;
        numberOfConjecture++;
    } else if (count == 1) {
        conjecture2 = colors[index];
        conjecture2Index = index;
        setColorForButton(index);
        count++;
        numberOfConjecture++;
    } else if (count == 2) {
        setColorToWhite(conjecture1Index);
        setColorToWhite(conjecture2Index);
        conjecture1 = colors[index];
        conjecture1Index = index;
        conjecture2 = null;
        conjecture2Index = null;
        setColorForButton(index);
        count = 1;
        numberOfConjecture++;
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

     document.getElementById("result").innerHTML = "<h2> Conjectured: " + numberOfConjecture + "</h2>";

    let overturnedAllCards = true;
    for (let i = 0; i < colors.length; i++) {
        if (!findedCards.includes(colors[i])) {
            overturnedAllCards = false;
            break;
        }
    }


    if (overturnedAllCards === true) {
        alert("Your result is " + numberOfConjecture + "!");
        numberOfConjecture = 0;
        for (let i = 0; i < colors.length; i++) {
            setColorToWhite(i);
        }
        conjecture1 = null;
        conjecture2 = null;
        conjecture1Index = null;
        conjecture2Index = null;
        findedCards = [];
        randomizeCards();
    }
}

function randomizeCards() {
    let currentIndex = colors.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        --currentIndex;
        temporaryValue = colors[currentIndex];
        colors[currentIndex] = colors[randomIndex];
        colors[randomIndex] = temporaryValue;
    }
    document.getElementById("result").innerHTML = "<h2> Conjectured: " + 0 + "</h2>";
}

function setColorToWhite(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = "white";
}



document.getElementById("year").innerHTML = new Date().getFullYear() + " y.";
