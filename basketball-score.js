let scoreHome = document.querySelector('.home_score .home_score-inner');
let scoreGuest = document.querySelector('.guest_score .guest_score-inner');

let countH = 0;
let countG = 0;


function homeScoreReset() {
countH = 0;
scoreHome.textContent = countH;
}

function home_increaseOne() {
countH = countH + 1;
scoreHome.textContent = countH;
}

function home_increaseTwo() {
countH = countH + 2;
scoreHome.textContent = countH;
}

function home_increaseThree() {
countH = countH + 3;
scoreHome.textContent = countH;
}



function guestScoreReset() {
countG = 0;
scoreGuest.textContent = countG;
}

function count_increaseOne() {
countG = countG + 1;
scoreGuest.textContent = countG;
}

function count_increaseTwo() {
countG = countG + 2;
scoreGuest.textContent = countG;
}

function count_increaseThree() {
countG = countG + 3;
scoreGuest.textContent = countG;
}

