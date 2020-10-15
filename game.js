var number1 = Math.round(Math.random() * 100)
var number2 = Math.round(Math.random() * 100)

if (number1 < number2) {
    var extra = number1
    number1 = number2
    number2 = extra
}

var number1box = document.getElementById("number1")
number1box.innerHTML = number1

var number2box = document.getElementById("number2")
number2box.innerHTML = number2

var number3;
var number3box = document.getElementById("number3")

var score = 0;
var operators_sign;

function randomise() {

    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    if (number1 < number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }
    number1box.innerHTML = number1
    number2box.innerHTML = number2

    operators_sign = Math.round(Math.random() * 4);
    var number3;
    switch (operators_sign) {
        case 0:
            operators_sign = Math.round(Math.random() * 4);
            break;
            randomise();
        case 1:
            number3 = number1 + number2;
            number3box.innerHTML = number3;
            break;
        case 2:
            number3 = number1 - number2;
            number3box.innerHTML = number3;
            break;
        case 3:
            number3 = number1 * number2;
            number3box.innerHTML = number3;
            break;
        case 4:
            number3 = Math.floor(number1 / number2);
            number3box.innerHTML = number3;
            break;
    }
    console.log(number1 + " " + number2 + " " + operators_sign + " " + number3)
}
randomise();
var plus = document.getElementById("plus")
plus.onclick = () => {

    if (operators_sign == 1) {
        score++;
        randomise();
    } else {
        location.href = "./gameover.html?score" + score
    }

}

var minus = document.getElementById("minus")
minus.onclick = () => {

    if (operators_sign == 2) {
        score++;
        randomise();
    } else {
        location.href = "./gameover.html?score" + score
    }

}

var mul = document.getElementById("mul")
mul.onclick = () => {

    if (operators_sign == 3) {
        score++;
        randomise();
    } else {
        location.href = "./gameover.html?score" + score
    }

}

var divide = document.getElementById("divide")
divide.onclick = () => {

    if (operators_sign == 4) {
        score++;
        randomise();
    } else {
        location.href = "./gameover.html?score=" + score
    }

}

var time = 5;
var timerId;

// function startTimer() {
//     time = 5;
//     timer.innerHTML = time;
//     timerId = setInterval(() => {
//         time--;
//         if (time == 0) location.href = "./gameover.html?score=" + score;
//         timer.innerHTML = time;
//     }, 1000);
// }

// function resetTime(intervalId) {
//     clearInterval(intervalId);
//     startTimer();
// }

// startTimer();