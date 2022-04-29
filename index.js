'use strict';

function countFahrenheit() {
    const celsiusStr = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusStr);
    if (isNaN(celsius)) {
        alert(`Ошибка! Указано некорректное значение: ${celsiusStr}`)
    } else {
        const fahrenheit = (9 / 5) * celsius + 32;
        alert(`${celsius}C = ${fahrenheit}F`)
    }
}

function operateVariables() {
    var admin, name;
    name = 'Василий';
    admin = name;
    alert(`name: ${name}, admin: ${admin}`)
}

function operateNumAndStr() {
    const result = 1000 + "108";
    alert(`1000 + "108" = ${result}\nJavaScript приводит операнды к строковому типу и затем осуществляет конкатенацию строк.`);
}
