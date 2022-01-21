/*Задача 1.
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].*/
function copyArr() {
    let arr1 = [1, 2, 3, 4, 5],
    arr1_2 = arr1.slice(3, 5);
    console.log(arr1_2);
    }
    copyArr();
    
    /*Задача 2.
    Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши*/
    function changeItem() {
    let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
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
    function sumItem() {
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sumItem = 0,
    elem = 0,
    sumElem = 15, //Введите сумму.
    sumArr = 0;
    console.log(arr3);
    for(i = 0; i < arr3.length; i++) {
    sumArr += arr3[i];
    };
    if(sumArr < sumElem) console.log("Не хватает элементов в массиве для получения заявленной суммы");
    arr3.forEach(function(item) {
    if(sumItem <= sumElem) {
    sumItem += item;
    elem ++;
    } else console.log(`Чтобы сумма была больше ${sumElem}, нужно сложить ${elem} первых элемента(ов) массива,
    сумма элементов составит: ${sumItem}`);
    });
    }
    sumItem()
    // через Reduce