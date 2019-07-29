// arro funcion - специальный синтаксис определения функций

// в переменной increment находиться функция, которая принимает  одни параметр и возвращает его значение увеличивая на 1

let increment = function (x: number) {return x + 1;}

let incrementArrow1 = (x: number) => { return x + 1; }

let incrementArrow2 = (x: number) => x + 1;

let incrementArrow3 = x => x + 1;