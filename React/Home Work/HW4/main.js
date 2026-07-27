//? 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let lowerNumber = +prompt("Введите первое число:");//12
// let upperNumber = +prompt("Введите второе число:");//10
// let sum = 0;

// for (let i = lowerNumber; i <= upperNumber; i++) {
//     sum += i;
// }
// alert(`Сумма всех чисел в диапазоне от ${lowerNumber} до ${upperNumber} равна ${sum}.`);

//? 2. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let shouldContinue = true;
// while (shouldContinue) {
//     const firstNumber = +prompt('Введите первое число:');
//     const secondNumber = +prompt('Введите второе число:');
//     const operator = prompt('Введите знак операции (+, -, *, /):');

//     let result;
//     switch (operator) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             result = firstNumber / secondNumber;
//             break;
//         default:
//             alert('Некорректный знак операции!');
//             continue;
//     }
//     alert(`Результат: ${result}`);
//     shouldContinue = confirm('Хотите решить еще один пример?');
// }

//? 3. Запросить у пользователя число и вывести все делители этого числа.

// const number = +prompt("Введите число:");
// alert(`Делители числа ${number}:`);

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     alert(i);
//   }
// }

//? 4. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let positiveNumbers = 0;
// let negativeNumbers = 0;
// let zeros = 0;
// let evenNumbers = 0;
// let oddNumbers = 0;

// for (let i = 0; i < 10; i++) {
//   const number = +prompt(`Введите ${i + 1}-е число:`);
//   if (number > 0) {
//     positiveNumbers++;
//   } else if (number < 0) {
//     negativeNumbers++;
//   } else {
//     zeros++;
//   }

//   if (number % 2 === 0) {
//     evenNumbers++;
//   } else {
//     oddNumbers++;
//   }
// }

// alert(`Статистика:
//   Положительных чисел: ${positiveNumbers}
//   Отрицательных чисел: ${negativeNumbers}
//   Нулей: ${zeros}
//   Четных чисел: ${evenNumbers}
//   Нечетных чисел: ${oddNumbers}`);

//? 5. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. (switch внутри цикла)

// let dayOfWeek = 0;
// let userChoice = true;

// while (userChoice) {
//   switch (dayOfWeek) {
//     case 0:
//       alert("Понедельник. Хотите увидеть следующий день?");
//       break;
//     case 1:
//       alert("Вторник. Хотите увидеть следующий день?");
//       break;
//     case 2:
//       alert("Среда. Хотите увидеть следующий день?");
//       break;
//     case 3:
//       alert("Четверг. Хотите увидеть следующий день?");
//       break;
//     case 4:
//       alert("Пятница. Хотите увидеть следующий день?");
//       break;
//     case 5:
//       alert("Суббота. Хотите увидеть следующий день?");
//       break;
//     case 6:
//       alert("Воскресенье. Хотите увидеть следующий день?");
//       break;
//   }
//   dayOfWeek = (dayOfWeek + 1) % 7;
//   userChoice = confirm("Нажмите OK, чтобы продолжить, или Отмена, чтобы закончить.");
// }