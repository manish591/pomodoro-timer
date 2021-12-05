const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startTimerButton = document.querySelector('.start-timer');
const settings = document.querySelector('.settings');
const clockCircle = document.querySelector('.circle');


startTimerButton.addEventListener('click', startPomodoroTimer);
settings.addEventListener('click', updatePomodoroSettings);

let myTimer;

function startPomodoroTimer(e) {
    let mins = Number(minutes.firstElementChild.value);
    let sec = Number(seconds.firstElementChild.value);
    let totalTime = (mins * 60) + sec;

    function timer() {
        let m = Math.floor(totalTime / 60);
        let s = totalTime % 60;
        minutes.firstElementChild.value = m;
        seconds.firstElementChild.value = s;
        totalTime--;
    }

    if(e.target.innerText === 'STOP') {
        stopTimer();
        startTimerButton.innerText = 'START';
    } else {
        startTimerButton.innerText = 'STOP';
        if(myTimer === undefined) {
            myTimer = setInterval(timer, 1000);
        } else {
            console.log('already working!')
        }
    }
}

function stopTimer() {
    clearInterval(myTimer);
    myTimer = undefined;
}


function updatePomodoroSettings(e) {
    let data, src, disabled;
    if(e.target.dataset.work === 'settings') {
        data = 'check';
        src = '/STARTER/images/check.svg';
        disabled = false;
    } else {
        data = 'settings';
        src = '/STARTER/images/gear.svg';
        disabled = true;
    }

    e.target.dataset.work = data;
    settings.src = src;
    minutes.firstElementChild.disabled = disabled;
    seconds.firstElementChild.disabled = disabled;
}