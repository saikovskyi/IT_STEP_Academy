// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).

const age = +prompt("Введите ваш возраст:");

if (isNaN(age)) {
  alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
} else {
  let result;
  if (age >= 0 && age <= 2) {
    result = "ребенком";
  } else if (age >= 12 && age <= 18) {
    result = "подростком";
  } else if (age > 18 && age <= 60) {
    result = "взрослым";
  } else if (age > 60) {
    result = "пенсионером";
  } else {
    result = "несовершеннолетним";
  }

  // Выводим результат
  alert(`Вы являетесь ${result}.`);
}

// 2. Запросить у пользователя год и проверить, високосный он или нет. Високосный год кратен 4.

const year = +prompt("Введите год:");

if (isNaN(year)) {
  alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
} else {
  // Проверяем, является ли год високосным
  if (year % 4 === 0) {
    alert(`${year} год - високосный.`);
  } else {
    alert(`${year} год - не високосный.`);
  }
}

// 3. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const usd = prompt("Введите количество USD:");

if (isNaN(usd)) {
  alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
} else {
  const currency = prompt("Выберите валюту для конвертации: EUR, UAN или AZN").toUpperCase();

  let convertedAmount;
  if (currency === "EUR") {
    convertedAmount = usd * 0.87; // Курс USD/EUR
  } else if (currency === "UAN") {
    convertedAmount = usd * 24.71; // Курс USD/UAN
  } else if (currency === "AZN") {
    convertedAmount = usd * 1.7; // Курс USD/AZN
  } else {
    alert("Выбрана некорректная валюта. Пожалуйста, выберите одну из указанных: EUR, UAN или AZN.");
  }

  if (convertedAmount) {
    alert(`Сумма в выбранной валюте: ${convertedAmount.toFixed(2)} ${currency}.`);
  }
}

//4. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. 

const sum = prompt("Введите сумму покупки:");

// Проверяем, является ли введенное значение числом
if (isNaN(sum)) {
  alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
} else {
  let discount = 0; // Изначально скидка равна 0%

  if (sum >= 200 && sum < 300) {
    discount = 3;
  } else if (sum >= 300 && sum < 500) {
    discount = 5;
  } else if (sum >= 500) {
    discount = 7;
  }

  const discountedAmount = sum - (sum * discount / 100);

  alert(`Сумма к оплате со скидкой ${discount}%: ${discountedAmount.toFixed(2)} USD.`);
}

// 5. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

const circleLength = +prompt("Введите длину окружности:");
const squarePerimeter = +prompt("Введите периметр квадрата:");

if (isNaN(circleLength) || isNaN(squarePerimeter)) {
  alert("Вы ввели некорректные значения. Пожалуйста, введите числа.");
} else {
  const circleDiameter = circleLength / Math.PI;
  const squareSide = squarePerimeter / 4;

  if (circleDiameter <= squareSide) {
    alert("Окружность может поместиться в указанный квадрат.");
  } else {
    alert("Окружность не может поместиться в указанный квадрат.");
  }
}

// 6. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

const question1 = prompt("1. Какая столица Франции?\nA) Мадрид\nB) Рим\nC) Париж");
const question2 = prompt("2. Какая река является самой длинной в мире?\nA) Амазонка\nB) Нил\nC) Янцзы");
const question3 = prompt("3. Выберите дату основании компании Apple:\nA) 1979\nB) 1974\nC) 1976");

let score = 0;// Переменная для хранения количества набранных баллов

if (question1 === "C" || question1 === "c") {
  score += 2;
}
if (question2 === "B" || question2 === "b") {
  score += 2;
}
if (question3 === "C" || question3 === "c") {
  score += 2;
}
alert("Вы набрали " + score + " баллов.");

// 7. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const number = prompt("Введите число от 0 до 9:");

if (number === "0") {
  alert("Спецсимвол: )");
} else if (number === "1") {
  alert("Спецсимвол: !");
} else if (number === "2") {
  alert("Спецсимвол: @");
} else if (number === "3") {
  alert("Спецсимвол: #");
} else if (number === "4") {
  alert("Спецсимвол: $");
} else if (number === "5") {
  alert("Спецсимвол: %");
} else if (number === "6") {
  alert("Спецсимвол: ^");
} else if (number === "7") {
  alert("Спецсимвол: &");
} else if (number === "8") {
  alert("Спецсимвол: *");
} else if (number === "9") {
  alert("Спецсимвол: (");
} else {
  alert("Введено некорректное число!");
}
