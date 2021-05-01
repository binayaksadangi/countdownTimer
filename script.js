const newYear = '2 May 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newyearDate = new Date(newYear);
    const currentDate = new Date();
    const diff = Math.abs(newyearDate - currentDate);
    const totalSec = diff /1000;
    const days = Math.floor(totalSec/3600/24);
    const hours = Math.floor(totalSec/3600)%24;
    const minutes = Math.floor(totalSec/60)%60;
    const sec = Math.floor(totalSec%60);
  
    daysEl.innerText = days;
    hoursEl.innerText = fTime(hours);
    minutesEl.innerText = fTime(minutes);
    secondsEl.innerText = fTime(sec);

}
function fTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown,1000);