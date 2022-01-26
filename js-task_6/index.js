/*Задача 1 Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/
function pushArr() {
    let arr1 = [],
        start = +prompt('Введите стартовое значение массива(целое число): '),
        end = +prompt('Введите конечное значение массива(целое число): ');
    if(start < end) {
        for(i = start; i <= end; i++) arr1.push(i);
    }
    else {
        for(i = start; i >= end; i--) arr1.push(i);
    }
    return arr1;
}
    //let view = pushArr()
    function viewArr(view) {
    return console.log(view);
    }
    viewArr(pushArr())
    
    /*Задача 2. Сделайте функцию isEven() (even - это четный), которая параметром
    принимает целое число и проверяет: четное оно или нет. Если четное - пусть
    функция возвращает true, если нечетное — false.*/
    
    function isEven(a) {
        return a % 2 == 0;
    }
    console.log(isEven(5)); // - ВВЕДИТЕ ЗНАЧЕНИЕ.
    /*Задача 3 Напишите ф-цию, в которую передается массив с целыми числами.
    Верните новый массив, где останутся лежать только четные из этих чисел.
    Для этого используйте вспомогательную функцию isEven из предыдущей
    задачи.*/
    //let arr3 = [2, 5, 7, 8, 10, 12, 14, 16, 17];
    function isEvenNumbers(arr) {
        return arr.filter(isEven);
    }
    console.log(isEvenNumbers([2, 5, 7, 8, 10, 12, 14, 16, 17]));// - Введите массив из целых чисел
    //Задача 4
    function drawsPyramid (rows) {
        for(let i = 1; i <= rows; i++) {
            let str = '';
        for(let j=1; j<=i; j++) {
            if(arguments.length > 1) str = str + '*';
            else str = str + i;
        }
        console.log(str)
        }
    }
    (drawsPyramid (9,7)) // один параметр, - цифры. два параметра, - звездочки. 
    
    
    // Задача 5 Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
    function getArrNumb (arr) {
        console.log(arr[0]);
        if (arr.length > 1) getArrNumb(arr.slice(1));
    }
    getArrNumb([1, 3, 5, 7, 9, 10]); //Введите массив.
    
    /*Задача 6 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число
    и возвращает сумму его цифр*/
    function getDigitsSum(num) {
        return num.toString().split('').reduce(function(a, b) {
        return sum = (+a + +b);
        });
    }
    console.log('Cумма числа: ' + getDigitsSum(478)); // Введите число // Текущий результат 19
    
    /*Задача 7 Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию
    getDigitsSum из предыдущей задачи*/
    
    function getYears(firstYear, lastYear, sumNumbYear) {
        let arr7 = [];
        for (let i = firstYear; i <= lastYear; i++) {           //сделал не до, а по(включительно), так более логично :)
        if (getDigitsSum(i) === sumNumbYear) arr7.push(i);
        }
        return arr7;
    }
    console.log(getYears(1, 2022, 6))  // Введите значения год от/год до/cумма цифр года.
    
    /*Задача 8 Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый
    n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.*/
    
    function makeString(string, numbletterTop) {
        let arr8 = string.split('');
        for (i = numbletterTop - 1; i < arr8.length; i = i + numbletterTop) {
            arr8[i] = arr8[i].toUpperCase()
        }
        console.log(arr8);
        return arr8.join('')
    }
    console.log(makeString("toptoptop", 3)); // Текущий вывод toPtoPtoP  Введите строку и n-ый элемент.
    
    //Задача 9 Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
    
    function numberOfNumber(wholeNumber) {
        let str = String(wholeNumber),
            sum = 0;
        console.log(str);
        for(i = 0; i <= str.length; i++) sum =+i;
        return sum;
    }
    console.log('Количество чисел в числе: ' + numberOfNumber(1234567));
