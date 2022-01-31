/* Задача 1 Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

function replaceSymbol(string, addSymbol, delSymbol) {
    delSymbol = new RegExp(delSymbol, "gi");
    return string.replace(delSymbol, addSymbol);
    }
    console.log(replaceSymbol('aaa@bbb@ccc', '!', '@'));

/* Задача 2 В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/
function editDate(date) {
let arr = date.split('-');
    return newFormatDate = arr[2] + '/' + arr[1] + '/' + arr[0];
}
console.log(editDate('2025-12-31'));  // Введите дату.

/* Задача 3 Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let string = 'Я учу javascript!',
    strSub = string.substr(2, 14),
    strSubstring = string.substring(2, 16),
    strSlice = string.slice(2, 16);
    console.log(strSub + ' / ' + strSubstring + ' / ' + strSlice);


/* Задача 4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

function getSquareRoot(arr) {
    let sum = 0;
    for(i=0; i <= arr.length - 1; i++) {
        sum += Math.pow(arr[i], 3);
    }
    console.log('Cумма кубов чисел массива: ' + sum);
    return Math.sqrt(sum);
}
console.log('Квадратный корень из суммы кубов элементов массива: ' + getSquareRoot([4, 2, 5, 19, 13, 0, 10]));

/* Задача 5 Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

function subNumberMod(a, b) {
    let c = a - b;
    return Math.abs(c)
}
console.log('Модуль разности чисел равен: ' + subNumberMod(3, 5)) // Введите числа

/* Задача 6 Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

function nowDate() {
    let dateNow = new Date(); 
    function plusZero(number) {
        if(number >= 0 && number < 10) return "0" + number;
        else return number;
    }
    return (plusZero(dateNow.getHours()) + ':' + plusZero(dateNow.getMinutes()) + ':' + plusZero(dateNow.getSeconds()) + 
    ' ' + plusZero(dateNow.getDate()) + '.' + plusZero(dateNow.getMonth()+1) + '.' + plusZero(dateNow.getFullYear()));
}
console.log(nowDate())

/* Задача 7 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'..*/

function searchStr(string) {
    console.log(string);
    arr = string.match(/ab+a/gi);
    return arr.join(" ");
}
console.log(searchStr('aa aba abba abbba abca abea'))

/* Задача 8 Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

function checkNumber(phone) {
    let regexp = /^\+?(375)\)?[-. )]?([1-4]{1})([3-5,7,9]{1})[-. ]?([1-9]{1})([0-9]{6})$/;
    if(regexp.test(phone) === false) console.log(`Вы ввели некорректный номер - ${phone} ! Доступ запрещён!`);
    else console.log(`Поздравляем, Ваш номер ${phone}, прошёл верификацию!`)
    return regexp.test(phone);
}
console.log(checkNumber("+37517-1777777")) // В ФОРМАТЕ +375-(КОД ОПЕРАТОРА)-ТЕЛЕФОН

/* Задача 9 Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки;
    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени;
    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
    не может быть длиной менее 2 и более 11 символов.
   
    Функция должна возвращать true или false. Используйте регулярные
    выражения.*/
function checkEmail(email) {
    let regexp = /^([A-Za-z0-9]{1})+([A-Za-z0-9_\-\.]{1,30})+\@([A-Za-z0-9_\-\.]{2,11})+\.([A-Za-z]{2,11})$/;
    if(regexp.test(email) === false) console.log(`Вы ввели некорректный почтовый адрес - ${email} ! Доступ запрещён!`);
    else console.log(`Поздравляем, Ваш почтовый адрес ${email}, прошёл верификацию!`)
    return regexp.test(email);
}
console.log(checkEmail("lition007@tut.by")) // Введите email
/*Задача 10 Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел,
который поможет составить слово из этой Grid таблицы, например: 
[kata](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript)*/

function getWord(arr, arrMap) {
    arr = arr.flat();
    return arrMap.map(a => arr[a-1]).join('');    
}
console.log(getWord([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 5, 8]))

/*Задача 11 Здесь вам в аргументах даны 2 массива: 
    
    Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
    
    После чего склеить эти два массива, отсортировать и вернуть как результат

    [kata](https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript) */


function testit(a,b){
    a = a.filter(function(elem, index) {
        return a.indexOf(elem) == index;
    });
    b = b.filter(function(elem, index) {
        return b.indexOf(elem) == index;
    });

        let arr3 = a.concat(b);
        return arr3.sort((a, b) => a - b)
  }
  console.log(testit([1, 1, 2, 3], [1, 2, 2, 3]));