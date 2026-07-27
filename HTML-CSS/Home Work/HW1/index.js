// TODO 0. Создать файл index.js
// TODO 1. Создать один файл руками (first.txt).
// TODO 2. Поместить в него "Я люблю NodeJS" руками.
// TODO 3. Другой новый файл програмно (second.txt).
// TODO 4. Записать в него "I like NodeJS" програмно.
// TODO 5.* Дописать информацию из first.txt в second.txt програмно.

const fs = require('fs/promises');

fs.writeFile('second.txt', 'I like NodeJS')
    .then(() => fs.readFile('first.txt', 'utf-8'))
    .then((data) => fs.appendFile('second.txt', `\n${data}`))
    .catch((error) => console.log(error));