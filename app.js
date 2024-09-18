
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