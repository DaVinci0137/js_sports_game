let teamOneNumShots = document.querySelector('#teamone-numshots');
let teamOneNumGoals = document.querySelector('#teamone-numgoals');
let teamOneShots = document.querySelector('#teamone-shoot-button');
let teamTwoNumShots = document.querySelector('#teamtwo-numshots');
let teamTwoNumGoals = document.querySelector('#teamtwo-numgoals');
let teamTwoShots = document.querySelector('#teamtwo-shoot-button');
let resetScore = document.querySelector('#reset-button');
let numResets = document.querySelector('#num-resets');

teamOneShots.addEventListener("click", function () {
    console.log("shot made");
    teamOneNumShots.innerText = Number(teamOneNumShots.innerText) + 1;
    console.log(Math.floor(Math.random() * 2))
    if (Math.floor(Math.random() * 2)) {
        console.log('goal scored')
        teamOneNumGoals.innerText = Number(teamOneNumGoals.innerText) + 1;
    } else {
        console.log('goal missed')
    }
})

teamTwoShots.addEventListener("click", function () {
    console.log("shot made");
    teamTwoNumShots.innerText = Number(teamTwoNumShots.innerText) + 1;
    console.log(Math.floor(Math.random() * 2))
    if (Math.floor(Math.random() * 2)) {
        console.log('goal scored')
        teamTwoNumGoals.innerText = Number(teamTwoNumGoals.innerText) + 1;
    } else {
        console.log('goal missed')
    }
})

resetScore.addEventListener("click", function () {
    console.log("reset clicked");
    numResets.innerText = Number(numResets.innerText) + 1;
    teamOneNumShots.innerText = 0;
    teamOneNumGoals.innerText = 0;
    teamTwoNumShots.innerText = 0;
    teamTwoNumGoals.innerText = 0;
})



