
// yeni yıl 
const birthDate = '7 January 2024';

//geri sayım fonksiyonu
function countDown() {

    const birthDateDate = new Date(birthDate);
    const currentDate = new Date();

    const totalSeconds = (birthDateDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds) % 60;

    const daysEl = document.getElementById('days').innerHTML = days; 
    const hoursEl = document.getElementById('hours').innerHTML = hours;  
    const minutesEl = document.getElementById('minutes').innerHTML = minutes;  
    const secondsEl = document.getElementById('seconds').innerHTML = seconds;  
}

countDown();

setInterval(countDown, 1000);