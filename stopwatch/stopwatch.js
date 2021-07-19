const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

stopButton.style.display = 'none';
resetButton.style.display = 'none';

let intervalID;
let timerTime = 00;

function startTimer() {
    intervalID = setInterval(incrementTimer , 1000);
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';
}
function stopTimer() {
    clearInterval(intervalID);
    stopButton.style.display = 'none';
    startButton.style.display = 'inline-block';
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    mins.innerText = '00';
    secs.innerText = '00';
    resetButton.style.display = 'none';
}

function incrementTimer(){
    timerTime++;
    const numberOfMins = Math.floor(timerTime/60);
    const numberOfSecs = timerTime%60;

    mins.innerText = zeroPadding(numberOfMins); 
    secs.innerText = zeroPadding(numberOfSecs);
    console.log('Increment timer');
}

function zeroPadding(number){
    return number<10 ? `0${number}` : number;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click',resetTimer);