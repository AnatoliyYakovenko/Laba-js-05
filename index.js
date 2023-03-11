// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return console.log("Об'єкт не пустий");
    }
  }
  return console.log("Об'єкт пустий");
}
isEmpty({});

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

let user = {
  name: "Anatoliy",
  age: 38,
  toIntroduce: function () {
    console.log("Привіт, я " + user.name + ", мені " + user.age + " років");
  },
};
isEmpty(user);
user.toIntroduce();

// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul. При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості. При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

let calculator = {
  num1: null,
  num2: null,
  ask: function () {
    calculator.num1 = +prompt("Введіть перше число", 0);
    calculator.num2 = +prompt("Введіть друге число", 0);
  },
  sum: function () {
    return calculator.num1 + calculator.num2;
  },
  mul: function () {
    return calculator.num1 * calculator.num2;
  },
};

calculator.ask();
alert("Сума: " + calculator.sum());
alert("Добуток: " + calculator.mul());
