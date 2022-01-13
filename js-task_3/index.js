//Задача 1
//Выведите числа от 1 до 50 и от 35 до 8.
for (i=1; i<=50; i++) {
    console.log(i);
}
for (i=35; i>=8; i--) {
    console.log(i);
}

//Задача 2
/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/
    i=89;
while (i>11) {
    i--;
    console.log (i);
    document.write(i + "<br>");
}

//Задача 3
//С помощью цикла найдите сумму чисел от 0 до 100.
let sum = 0;
for (i=0; i<=100; i++) {
    sum += i;
}
console.log(sum);

//Задача 4
/*Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/
sum = 0;
for (i=0; i<=5; i++) {
    sum += i;
    console.log('В числе ' + i + ' сумма чисел равна ' + sum);
}
//Задача 5
//Выведите чётные числа от 8 до 56. Решить задание через while и for.
for (i=8; i<=56; i++) {
    if (i % 2 > 0) continue;
    console.log(i);
    document.write (i + "<br>");
} 
    i = 8;
    while(i<=56) {
        if (i % 2 == 0) console.log(i);
        if (i % 2 == 0) document.write (i + "<br>");
        i++
    }

//Задача 6
//Необходимо вывести на экран полную таблицу умножения (от 2 до 10)
for (i=2; i<=10; i++) {
    for (j=2; j<=10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//Задача 7
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/
n = 1000;
num = 0;
while (n>50) {
    n = n/2;
    num = num + 1;
    if(n<50) console.log(n + ' Количество итераций: ' + num);
}


//Задача 8
/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/

let a = 0,
    b = 0,
    number = 1;
while (number!=0) {
    number = prompt('Введите число, для выхода введите 0 или оставьте поле пустым и нажмите ОК');
    if (number == 0) break;
    if (isNaN(number)) alert('Похоже это не число, введите корректное значение');
    else {
    a = +number + a;
    b = b + 1;
    }
}

console.log('Cумма введённых чисел: ' + a);
console.log('Общее количество вводов данных: ' + b);
if (a === 0) console.log('Cреднее арифметическое введённых чисел: 0');
else {
console.log('Cреднее арифметическое введённых чисел: ' + (a / b));}



//Задача 9
/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». 
Найдите самое большое и самое маленькое число в строке, используя цикл.*/
// РЕШЕНИЕ ЧЕРЕЗ МАССИВ ------------       V -----------------
/*let numbersStr = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let numbersArr = numbersStr.split([' ']);
numbersArr.sort(function(a, b) {
return a - b;
});
console.log (numbersArr);
console.log('Наименьшее число: ' + numbersArr[0]);
//numbersArr.reverse();
//console.log('Наибольшее число: ' + numbersArr[0]); - через разварачивание массива
console.log('Наибольшее число: ' + numbersArr[numbersArr.length - 1]);*/

// массив + цикл  >>>
let numbersStr = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let numbersArr = numbersStr.split([' ']);
minNum = numbersArr[0],
maxNum = numbersArr[0];

for (let i = 1; i < numbersArr.length; i++) {
if (minNum > +numbersArr[i]) minNum = numbersArr[i];
if (maxNum < +numbersArr[i]) maxNum = numbersArr[i];
}

console.log('Наименьшее число: ' + minNum);
console.log('Наибольшее число: ' + maxNum);


//Задача 10
/*Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
в «тело» HTML-документа.*/

let x = prompt("Добавьте любое целое число"),
xSum = 0,
xRevert = '';

for (let i = 0; i < x.length; i++) {
alert(x[i]);
xSum += +x[i];
xRevert = x[i] + xRevert;
} 

console.log(x.length);
console.log(xSum);
console.log(xRevert);