// Variables
const fechaFin = new Date('04/13/2020 0:01 AM');
const spanDays = document.querySelector('span#days');
const spanHours = document.querySelector('span#hours');
const spanMinutes = document.querySelector('span#minutes');
const spanSeconds = document.querySelector('span#seconds');

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

function update() {
    // Calculos
    const now = new Date()
    const duracion = fechaFin - now;
    const days = Math.floor(duracion / _day);
    const hours = Math.floor((duracion % _day) / _hour);
    const minutes = Math.floor((duracion % _hour) / _minute);
    const seconds = Math.floor((duracion % _minute) / _second);
    // Gracias: Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Renden
    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;
}

// Refresh every second
update();
setInterval(update, 1000);