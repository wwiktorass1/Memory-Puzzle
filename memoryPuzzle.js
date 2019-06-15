document.getElementById("projectName").innerHTML = "<h1>Puzzle card Game </h1>"

const colors = ["yellow", "green", "red", "black", "purple", "blue", "orange", "yellow", "grey", "orange",
"blue", "green", "purple", "grey", "black", "red"];

let guess1Index;
let guess2Index;
let findedCards = [];
let count = 0;
let guess1;
let guess2;
let guessNumber = 0;

function setColorForButton(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = colors[index];
}


function openCard (index) {
    if (count == 0) {
        guess1 = colors[index];
        guess1Index = index;
        setColorForButton(index);
        count++;
        ++guessNumber;
    } else if (count == 1) {
        guess2 = colors[index];
        guess2Index = index;
        setColorForButton(index);
        count++;
        ++guessNumber;
    } else if (count == 2) {
        setColorToWhite(guess1Index);
        setColorToWhite(guess2Index);
        guess1 = colors[index];
        guess1Index = index;
        guess2 = null;
        guess2Index = null;
        setColorForButton(index);
        count = 1;
        ++guessNumber;
    }

    if ((guess1Index !== guess2Index) && (guess1 === guess2)) {
        count = 0;
        findedCards.push(guess1);
        guess1Index = null;
        guess1 = null;
        guess2Index = null;
        guess2 = null;


    } else if ((guess1Index === guess2Index) && (guess1 !== null)) {
        guess2Index = null;
        guess2 = null;
        count = 1;
    }

     document.getElementById("result").innerHTML = "<h2> Guessed: " + guessNumber + "</h2>";

    let allInvertedCards = true;
    for (let i = 0; i < colors.length; i++) {
        if (!findedCards.includes(colors[i])) {
            allInvertedCards = false;
            break;
        }
    }

    if (allInvertedCards === true) {
        alert("Your result is " + guessNumber + "!");
        guessNumber = 0;
        for (let i = 0; i < colors.length; i++) {
            setColorToWhite(i);
        }
        guess1 = null;
        guess2 = null;
        guess1Index = null;
        guess2Index = null;
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
    document.getElementById("result").innerHTML = "<h2> Guessed: " + 0 + "</h2>";
}

function setColorToWhite(index) {
    document.getElementsByClassName("button")[index].style.backgroundColor = "white";
}


document.getElementById("year").innerHTML = new Date().getFullYear();
