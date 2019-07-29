function repeatOperation(count: number, callback: () => void): void {
  console.log("start");
  for(let i = 0; i < count; i++) {
    callback();
    // контекст данной функции - глобальный объект. Если в функции callback используются контекст он тоже 
  }

  console.log("stop");
}

let setting = {
  displayNmae: "test object",

  test1: function() {
    repeatOperation(3, (function () {
      console.log(this.displyName);

    })); // в данном случае this указывает на объект settings
  },

  test2: function() {
    repeatOperation(3, () => console.log(this.displyName)) // arrow function захватывате контексе
  }
}