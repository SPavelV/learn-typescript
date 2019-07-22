let year: string[]; //  массив строковых значений
year = ["January", "Febrary", "March"];

let list: number[] = [1, 2, 3]; // определение числового массива и его инициализация
for(let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

let values1: Array<number> = [-1, -2, -3]; // создание массива используя generic тип данных
let values2: Array<Array<number>> = [[-1, 2], [-2], [-3]]; // создание массива используя generic тип данных
for(let i = 0; i < values1.length; i++) {
  console.log(values1[i])
}