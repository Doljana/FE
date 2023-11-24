// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.


// Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

// Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

// Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

// function processNumbers(num1, num2) {
//     if (num1 % 2 === 0 && num2 % 2 === 0) {
//         
//         return num1 * num2;
//     } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//         
//         return num1 + num2;
//     } else {
//         
//         return num1 % 2 !== 0 ? num1 : num2;
//     }
// }


// let result1 = processNumbers(4, 6); // Оба числа чётные, результат - произведение: 24
// let result2 = processNumbers(3, 5); // Оба числа нечётные, результат - сумма: 8
// let result3 = processNumbers(2, 7); // Одно чётное, другое нечётное, результат - нечётное: 7

// console.log(result1); // Выведет 24
// console.log(result2); // Выведет 8
// console.log(result3); // Выведет 7


// function secondsDay (seconds){

//     let seconds = 24*60*60;

// let days = seconds/secondsDay;
// return days;

// }
//  console.log();


// function isPrime(number) {
//     if (number <= 1) {
      
//         return false;
//     }

    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
           
//             return false;
//         }
//     }

    
//     return true;
// }

// let testNumber = 17;
// let result = isPrime(testNumber);

// console.log(`${testNumber} ${result}`);



// function printMinimumNumber(num1, num2) {
   
//     let minimumNumber = (num1 < num2) ? num1 : num2;

//     console.log( minimumNumber);
// }

// let number1 = 8;
// let number2 = 4;

// printMinimumNumber(number1, number2);




// function createNumberArray(num1, num2) {
    
//     let minNumber = Math.min(num1, num2);
//     let maxNumber = Math.max(num1, num2);

 
//     let resultArray = [];
//     for (let i = minNumber; i <= maxNumber; i++) {
//         resultArray.push(i);
//     }

//     return resultArray;
// }


// let number1 = 8;
// let number2 = 4;

// let resultArray = createNumberArray(number1, number2);
// console.log( resultArray);
