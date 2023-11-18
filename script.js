let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateDisplay, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function lap() {
    if (isRunning) {
        laps.push(seconds);
        updateLaps();
    }
}

function updateDisplay() {
    seconds++;
    const display = document.getElementById('display');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        const lapItem = document.createElement('li');
        const minutes = Math.floor(lapTime / 60);
        const secs = lapTime % 60;
        lapItem.textContent = `Lap ${index + 1}: ${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        lapsList.appendChild(lapItem);
    });
}
