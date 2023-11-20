
// Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения. Программа должна выводить на экран новое значение.



// let d = 7;

// console.log( + d);

// console.log( + Math.pow(d, 2));
// console.log( Math.pow(d, 3));

// Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".


//
// function readInteger(promptMessage) {
//     let userInput = prompt(promptMessage);
//     return parseInt(userInput, 10);
// }


// let number1 = readInteger("Введите первое целое число:");
// let number2 = readInteger("Введите второе целое число:");


// if (number1 > number2) {
//     let sum = number1 + number2;
//     console.log( sum);
// } else if (number1 < number2) {
//     let product = number1 * number2;
//     console.log( product);
// } else {
//     console.log("Числа одинаковые");

// }
// Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, выводит его куб.



//     let number = Number(prompt('enter the number'));
   



// if (number > 0) {

//     let cube = Math.pow(number, 3);
//     console.log(`Куб числа ${number}: ${cube}`);
// } else {
//     console.log("Введено не положительное число");
// }

// // Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.  Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.     ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает


// function readInteger(promptMessage) {
//     let userInput = prompt(promptMessage);
//     return parseInt(userInput, 10);
// }


// let numberOfStudents = readInteger("Введите количество учеников в классе:");
// let numberOfChairs = readInteger("Введите количество стульев в кабинете:");


// if (numberOfStudents <= numberOfChairs) {
//     console.log("Стульев хватает.");
// } else {
//     console.log("Стульев не хватает.");
// }
// Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. 

// for (let i = 1; i <= 9; i++) {
//     console.log(i);
// }

// Написать цикл, который выводит те числа из массива, которые больше или равны 15.

// let numbers = [10, 5, 20, 15, 25, 30];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 15) {
//         console.log(numbers[i]);
//     }
// }


// Написать цикл, который выводит только нечетные числа массива 

// let numbers = [10, 5, 20, 15, 25, 30];


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         console.log(numbers[i]);
//     }
// }



// Вывести только те значения массива, индекс которых кратен трем.


// let numbers = [10, 5, 20, 15, 25, 30];

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 3 === 0) {
//         console.log(numbers[i]);
//     }
// }



// Найти сумму нечетных чисел и вывести в консоль.

// let numbers = [10, 5, 20, 15, 25, 30];

// let sumOfOddNumbers = 0;


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         sumOfOddNumbers += numbers[i];
//     }
// }


// console.log( sumOfOddNumbers);

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.


// let numbers = [10, 5, 20, 15, 25, 30];

// let sumOfEvenNumbers = 0;
// let sumOfOddNumbers = 0;


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sumOfEvenNumbers += numbers[i];
//     } else {
//         sumOfOddNumbers += numbers[i];
//     }
// }

// let difference = Math.abs(sumOfEvenNumbers - sumOfOddNumbers);
// console.log( difference);