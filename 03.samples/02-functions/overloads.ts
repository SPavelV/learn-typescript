function showMessage(message: string); // первая перегрузка функции, которая принимает один параметр тип string
function showMessage(message: number); // вторая перегрузка функции, которая принимает один параметр типа number
function showMessage(message: any) { // непосредственно рефлизация функции, не является перегрузкой
  
  if(typof message == "number") {
    switch (message) {
      case 1: {
        console.log("Hello world");
      } break;
      case 2: {
        console.log("Привет мир");
      } break;
    }
  }

  else if (typeof message == "string") {
    console.log(message);
  }
} 

showMessage(1);
showMessage("test");
// showMessage(true); //compiler error