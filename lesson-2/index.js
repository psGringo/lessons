// Домашнее задание
let y;
const x = '-1';

if (x < 0 && x > -2) {
 y = 0;
} else {
 y = 2;
}

if (y === 0) {
    alert('Делить на ноль нельзя')
}

// Мои решения
const x = '' + prompt('Введите число', -1);
const r = (x < 0 && x > -2) ? alert('Делить на ноль нельзя'):''; // << 1 вариант
const r1 = ((x < 0 && x > -2) ? y = 0: y = 2) === 0 ? alert('Делить на ноль нельзя'):''; // << 2 вариант