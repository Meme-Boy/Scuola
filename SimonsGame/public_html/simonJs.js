let seq = [];
let usrSeq = [];
var tf;
let cpuSeq = [];
const low_red = "#c66d6d";
const high_red = "#ff0000";
const low_green = "#6fce85";
const high_green = "#00ff00";
const low_blue = "#7988c4";
const high_blue = "#0000ff";

function addSeq() {
    seq.push(Math.floor(Math.random() * (4 - 2 + 1) + 2));
}

function blinkSeq(array) {
    for (var i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 2 :
                setTimeout(function () {
                    document.getElementById("red").style.background = high_red;
                }, 650 * (i + 1));
                setTimeout(function () {
                    document.getElementById("red").style.background = low_red;
                }, (650 * (i + 1)) + 325);
                break;

            case 3 :
                setTimeout(function () {
                    document.getElementById("green").style.background = high_green;
                }, 650 * (i + 1));
                setTimeout(function () {
                    document.getElementById("green").style.background = low_green;
                }, (650 * (i + 1)) + 325);
                break;

            case 4 :
                setTimeout(function () {
                    document.getElementById("blue").style.background = high_blue;
                }, 650 * (i + 1));
                setTimeout(function () {
                    document.getElementById("blue").style.background = low_blue;
                }, (650 * (i + 1)) + 325);
                break;
        }
    }
}

function checkSeq() {
    for (var i = 0; i < usrSeq.length; i++) {
        if (usrSeq [i] == seq [i]) {
            tf = true;
        } else {
            gameOver();
        }

    }
}

function redButton() {
    usrSeq.push(2);
    checkSeq();
    document.getElementById("a").innerHTML = tf;
}

function greenButton() {
    usrSeq.push(3);
    checkSeq();
    document.getElementById("a").innerHTML = tf;
}

function blueButton() {
    usrSeq.push(4);
    checkSeq();
    document.getElementById("a").innerHTML = tf;
}

function play() {
    if (usrSeq.length == seq.length) {
        addSeq();
        blinkSeq(seq);
        usrSeq = [];
        document.getElementById("points").innerHTML = "Points: " + (seq.length - 1);
    } else {
        gameOver();
    }

}

function gameOver() {
        document.getElementById("blue").disabled = true;
        document.getElementById("red").disabled = true;
        document.getElementById("green").disabled = true;
        document.getElementById("play").disabled = true;
        document.getElementById("points").innerHTML = "GAME OVER: " + (seq.length - 1) + " points";

        setTimeout(function () {
            location.reload();
        }, 3000);
    }