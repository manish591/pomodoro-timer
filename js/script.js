const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startTimerButton = document.querySelector('.start-timer');
const settings = document.querySelector('.settings');
const clockCircle = document.querySelector('.circle');

startTimerButton.addEventListener('click', beginTimer);


let myTimer;

function beginTimer(e) {
    let inputMinutes = Number(minutes.firstElementChild.value);
    let inputSeconds = Number(seconds.firstElementChild.value);
    let totalTime = inputMinutes * 60 + inputSeconds;
    startTimerButton.innerText = 'STOP';

    if(e.target.innerText === 'STOP') {
        stopTimer();
    }

    function timer() {
        let m = Math.floor(totalTime / 60);
        let s = totalTime % 60;
        minutes.firstElementChild.value = m;
        seconds.firstElementChild.value = s;
        totalTime--;
    }
    
    if(myTimer === undefined) {
        myTimer = setInterval(timer, 1000);
    } else {
        console.log('already working!')
    }
}

function stopTimer() {
    clearInterval(myTimer);
}