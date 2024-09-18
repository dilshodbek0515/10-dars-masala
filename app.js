
// N1

// {
//     let arr = [2, 7, 11, 15]
//     let target = 9
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let g = 0; g < i; g++) {
//             console.log(arr[i], arr[g]);
//             if ((arr[i] + arr[g]) === target) {
//                 result.push(g, i)
//             }
//         }
//     }
//     console.log(result);
// }


// N2

// {
//     let arr = [1, 2, 3, 4, 1, 2, 5]
//     let result = [1, 2, 3, 4, 5]
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(2)) {
//             result.push(arr[i])
//         }
//     }
//     console.log(result);

// }




// N3

// {
//     function getLevel(n) {
//         let result = []
//         for (let i = 1; i <= n; i++) {
//             result.push(2 ** i)
//         }
//         return result
//     }
//     console.log(getLevel(4));
//     console.log(getLevel(5));
// }



// N4

// {
//     const calc = (number) => {
//         return Number(number)
//     }
//     const number1 = calc(prompt("Enter your number 1"))
//     const number2 = calc(prompt("Enter your number 2"))
//     console.log(number1 + number2);

// }


// N5

// {
//     const res = (numbers) => {
//         return Number(numbers)
//     }

//     const number1 = res(1)
//     const number2 = res(22)
//     const number3 = res(3)
//     const result1 = (number1.toString().split("").join(","))
//     const result2 = (number2.toString().split("").join(","))
//     const result3 = (number3.toString().split("").join(","))
//     console.log(number1 + number2 + number3);
//     console.log(result1, result2, result3);

// }


// N6

// {
//     const res = (numbers) => {
//         return Number(numbers);
//     }
//     const number1 = res(1);
//     const number2 = res(22);
//     const number3 = res(3);

//     const sum = number1 + number2 + number3;
//     const result = sum.toString().split("").join(",");

//     console.log(sum);
//     console.log(result);
// }


// N7

// {
//     const isPalindrome = (key) => {
//         const str = String(key);
//         return str === str.split('').reverse().join('');
//     };
//     console.log(isPalindrome("radar"));
//     console.log(isPalindrome(12321));
//     console.log(isPalindrome("hello"));
//     console.log(isPalindrome(12345));
// }



// N8
// {
//     const obj = { a: 1, b: 22 }
//     const res = Object.values(obj).reduce((acc, value) => acc + value, 0)
//     console.log(`${res}`);

//     const dig = String(res).split('').reduce((acc, dig) => acc + Number(dig), 0)
//     console.log(`${dig}`);
// }
