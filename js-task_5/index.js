    console.log("Задача 1 V");
    /*Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].*/
function copyArr() {
    let arr1 = [1, 2, 3, 4, 5],
    arr1_2 = arr1.slice(3, 5);
    console.log(arr1_2);
    }
    copyArr();
    
    /*Задача 2.
    Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши*/
    console.log("Задача 2 V");
    function changeItem() {
    let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    console.log(arr2);
    for(i=0; i < arr2.length; i++) {
    if (arr2[i] == "Apple") arr2.splice(i, 1, "Pear");
    }
    console.log(arr2)
    }
    changeItem()
    
    /*Задача 3.
    Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
    чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach*/
    // через forEach
    console.log("Задача 3 V");
    function sumItem() {
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        sumItem = 0,
        elem = 0,
        sumElem = 35; //Введите сумму.
        console.log(arr3);
    arr3.forEach(function(item) {
    if(sumItem <= sumElem) {
        sumItem += item;
        elem ++;
        }
    });
    if(sumItem <= sumElem) console.log("Не хватает элементов в массиве для получения заявленной суммы");
    else console.log(`Чтобы сумма была больше ${sumElem}, нужно сложить ${elem} первых элемента(ов) массива,
    сумма элементов составит: ${sumItem}`);
    }
    sumItem()
    // через Reduce
    function sumItem_2() {
        let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            sumElem = 45, //Введите сумму.
            sumArr = 0,
            elem = 0,
            sum =0;   
            sum = arr3.reduce(function(pref, current) {
        if(pref <= sumElem) {
            elem++;
            return pref + current;
        }
        else return pref;
        },0);
        if(sum > sumElem) {
        console.log(`Чтобы сумма была больше ${sumElem}, нужно сложить ${elem} первых элемента(ов) массива,
        сумма элементов составит: ${sum}`);
        }
        if(sum <= sumElem) console.log("Не хватает элементов в массиве для получения заявленной суммы");
    }
    sumItem_2(); /// Есть вопросы

    /*Задача 4 Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"].
    Сделать каждую первую букву заглавной, используя методы перебора массива*/
    console.log("Задача 4 V");
    function zoomFirst() {
        let arr4 = ["rachel", "joe", "ben", "ross", "marcel"];
        console.log(arr4);
        let arr4_2 = arr4.map(function(current) {
            return current.charAt(0).toUpperCase() + current.slice(1);
        });
        console.log(arr4_2);
    }
    zoomFirst()
    
    //Задача 5 Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
    console.log("Задача 5 V"); 
    function increaseNumber() {
        let arr5 = [2, 4, 6, 8, 10];
        console.log(arr5);
        let arr5_2 = arr5.map(function(current) {
            return Math.pow(current, 2)
        });
        console.log(arr5_2);
    }
    increaseNumber()
    //Задача 6 Дан массив с числами. Оставьте в нем только отрицательные числа.
    console.log("Задача 6 V"); 
    function leaveMinus() {
        let arr6 = [2, -4, 6, -8, 10, -14, 16, -18];
        console.log(arr6);
            arr6 = arr6.filter(function(element) {
            return element < 0;
        });
        console.log(arr6);
    }
    leaveMinus()
    //Задача 7 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
    console.log("Задача 7 V"); 
    function getMore() {
        let arr7 = ['Bentley', 'Audi', 'BMW', 'Volkswagen', 'Infiniti', 'Citroen', 'KIA'];
        console.log(arr7);
            arr7 = arr7.filter(function(element) {
            return element.length > 5;
        });
        console.log(arr7);
    }
    getMore()
    //Задача 8 Напишите код, который определяет сумму и произведение значений массива
    console.log("Задача 8 V"); 
    function sum_mult_Item() {
        let arr8 = [2,3,3,2];
        console.log(arr8);
        sum = arr8.reduce(function (pref, current) {
        return pref + current;
        });
        mult = arr8.reduce(function(pref, current) {
        return pref * current;
        });
        console.log('Сумма элементов массива: ' + sum);
        console.log('Произведение элементов массива: ' + mult);
    }
    sum_mult_Item()
    /* Задача 9  Дан массив с числами. Оставьте в нем только положительные числа. 
                 Затем извлеките квадратный корень из этих чисел*/
        console.log("Задача 9 V"); 
    function takeSquare() {
        let arr9 = [-1, 4, 9, 16, -16, -25, 25, 49, -49];
        console.log(arr9);
            arr9 = arr9.filter(function(element) {
            return element >= 0;
        });
        console.log(arr9);
            arr9 = arr9.map(function(current) {
            return Math.sqrt(current);
        });
        console.log(arr9);
    }
    takeSquare()
    // Задача 10 Дан массив с числами. Найдите сумму этих чисел через reduce
    console.log("Задача 10 V"); 
    function sumItem_3() {
        let arr10 = [1, 2, 3, 4, 5];
        console.log(arr10);
        sum = arr10.reduce(function (pref, current) {
            return pref + current;
        });
        console.log('Cумма элементов массива: ' + sum);
    }
    sumItem_3()
    /* Задача 11 Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex()
    и написать по одному примера использования данных функций с комментариями*/

    /*Метод fill() заполняет все элементы массива от начального до конечного индекса одним значением.
    value - Значение, заполняющее массив.
    start - Необязательный параметр. Начальный индекс.
    end - Необязательный параметр. Конечный индекс.
    Конструкции: arr.fill(value, start, end) || arr.fill(value) || arr.fill(value, start) || arr.fill(value,' ', end) */ 
    console.log("Задача 11 V"); 
    let arr11 = [1, 2, 3, 4, 5, 6];
    console.log(arr11);
    //console.log(arr11.fill(4)); 
    //console.log(arr11.fill(4,2)); 
    //console.log(arr11.fill(4,2,4)); 
    console.log(arr11.fill(4,' ',4)); 

    /*Метод includes() определяет, содержит ли массив определённый элемент,
     возвращая в зависимости от этого true или false.*/
    let arr11_2 = [6, 5, 4, 3, 2, 1];
    console.log(arr11_2)
    console.log(arr11_2.includes(2)); // Проверяем содержит ли массив 2.

    /*Методы some() и every().
        Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию,
    заданному в передаваемой функции. true, если функция проверки возвращает truthy значение хотя бы
    для одного элемента массива. Иначе, false. Метод возвращает false при любом условии для пустого массива.
        Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой
    функции.true если функция проверки возвращает truthy значение для каждого элемента массива. Иначе, false.
    ВАЖНО!!! Метод возвращает true при любом условии для пустого массива. ВАЖНО!!!
    */
    let arr11_3 = [4, 5, 6, 7, 8, 9, 10];
    console.log(arr11_3);
    function compareNumber(number) {
        return number > 5;
    }
    console.log(arr11_3.some(compareNumber));// Есть ли число в массиве больше 5? - trye
    console.log(arr11_3.every(compareNumber));// Все числа в массиве больше 5? - false

    /*Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были
    рекурсивно "подняты" на указанный уровень depth.
    СИНТАКСИС arr.flat(depth), по умолчанию depth = 1, т.е. можно записать arr.flat()
    Возвращаемое значение  - Новый массив с объединёнными в него подмассивами.
    */
    let arr11_4 = [1, 2, [3, 4, [5, 6]], 7, 8];
    console.log(arr11_4);
    console.log(arr11_4.flat(2));

    /*Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученный результат
    в плоскую структуру и помещает в новый массив. Это идентично map функции, с последующим применением
    функции flat с параметром depth  равным 1, но flatMap часто бывает более полезным,
    так как работает немного более эффективно.
    Возвращаемое значение - Новый массив, каждый элемент которого является результатом выполнения функции
    callback и "поднят" на уровень 1.*/
    let arr11_5 = [1, 2, 3, 4, 5, 6];
        console.log(arr11_5);
        //arr11_5_2 = arr11_5.map(x => [x * 2]);
    let arr11_5_2 = arr11_5.map(function(x) { 
            return [x * 2];
        });
    console.log(arr11_5_2); // Результат 6 массивов в массиве, со значениями умноженными на 2 (map)
        arr11_5_2 = arr11_5.flatMap(function(x) { 
        return [x * 2];
    });
    console.log(arr11_5_2); // Значения массива умноженны на 2 и одновременно подняты на 1 уровень (flatMap).

    /*Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
    В противном случае возвращается -1. Метод findIndex вызывает переданную функцию callback один раз для каждого элемента,
    присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден,
    метод findIndex немедленно вернёт индекс этого элемента. В противном случае, метод findIndex вернёт -1.
    Функция callback вызывается только для индексов массива, имеющих присвоенные значения;
    она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.
    Метод findIndex не изменяет массив, для которого он был вызван.*/
    
    let arr11_6 = [10, 11, 12, 13, 14, 15];
    console.log(arr11_6);
    let y = arr11_6.findIndex(function(x) {
            return x > 14;
        },0);
    console.log(y);// возвращает индекс первого подходящего элемента, если такого нет, то -1.

    /*Задача 12 Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку
     "Привет, Иван Петров с возрастом 17 лет"*/

     console.log("Задача 12 V"); 
     let name = "Петя",
         family = "Иванов",
         age = 17;
     function helloName(name, family, age) {
        return console.log(`Привет, ${name} ${family} с возрастом ${age} лет`);
     };
     helloName(name, family, age)

     /*Задача 13 Сделайте функцию, которая отнимает от первого числа второе и делит на
    третье. Числа передаются параметром.*/
    console.log("Задача 13 V"); 
    let numb1 = 100,
        numb2 = 20,
        numb3 = 10;
    function countNumbers(numb1, numb2, numb3) {
        return console.log("Результат вычисления: " + ((numb1 - numb2) / numb3));
    }
    countNumbers(numb1, numb2, numb3)

    //Задача 14 Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
    console.log("Задача 14 V"); 
    function raicingNumber() {
        let number = 12;
        console.log(`Число для операций по возведению в степень: ${number}`);
        function squareNumber(number) {
        return console.log(`Квадрат числа равен: ${Math.pow(number, 2)}`)
        };
    squareNumber(number)
        function cubeNumber(number) {
        return console.log(`Куб числа равен: ${Math.pow(number, 3)}`)
        };
    cubeNumber(number)
    }
    raicingNumber()
    //Задача 15 Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
    console.log("Задача 15 V"); 
    let a = 10,
        b = 45;
    console.log(`Первое число: ${a}, второе число: ${b}`)
    function minNumber(a, b) {
        console.log(`Меньшее из чисел: ${Math.min(a, b)}`);
    }
    minNumber(a, b)
    function maxNumber(a, b) {
        console.log(`Большее из чисел: ${Math.max(a, b)}`);
    }
    maxNumber(a, b)
    /*Задача 16 Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от
     времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()*/
    console.log("Задача 16 V"); 
    let name1 = prompt("Введите Ваше имя"),
        date = new Date(),
        hours = date.getHours();
        if(name1 == null || name1=="") {
        name1 = "Аноним";
        console.log(`Имя пользователя: ${name1} ||| Время посещения сайта:  + ${date}`);
        }
        else console.log(`Имя пользователя: ${name1} ||| Время посещения сайта:  + ${date}`)
    function HelloName2(name1, hours) {
        if(hours >= 4 && hours <= 10) alert(`Доброе утро, ${name1}`);
        else if(hours > 10 && hours <= 15) alert(`Добрый день, ${name1}`);
        else if(hours > 15 && hours <= 22) alert(`Добрый вечер, ${name1}`);
        else alert(`Доброй ночи, ${name1}`);
    }
    HelloName2(name1, hours)

