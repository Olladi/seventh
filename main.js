// Задание 1
// let fun = document.querySelector('#func()')
// let a = 1
// function func(){
// let b = document.querySelector('.out')
// b.innerHTML = a
// }
// fun.onclick = func()


// Задание 2
// Объявляем переменные
var num1, num2, op;

function func() {
  // Получаем значения из полей ввода
  num1 = parseFloat(document.getElementById("num1").value);
  num2 = parseFloat(document.getElementById("num2").value);

  // Проверяем, выбранную операцию
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Деление на ноль!");
        return;
      }
      break;
    default:
      alert("Выберите операцию");
      return;
  }

  // Выводим результат
  document.getElementById("result").textContent = "Результат: " + result;
}