// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(arr);

// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let sum = 0;
let amountOfPositive = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] > 0) {
        sum += arr[i];
        amountOfPositive++
    }
}
console.log(`Sum is ${sum}, Amount of positive numbers is ${amountOfPositive}`);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
for(let i = 0;i < arr.length;i++) {
    if(minElement > arr[i]) {
        minElement = arr[i];
    }
}
console.log(`minimal element - ${minElement}, index is - ${arr.indexOf(minElement)+1}`);

// 3.Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
for(let i = 0;i < arr.length;i++) {
    if(maxElement < arr[i]) {
        maxElement = arr[i];
    }
}
console.log(`maximum element ${maxElement}, index is ${arr.indexOf(maxElement)+1}`);

// 4.Визначити кількість негативних елементів.
let amountOfNegativ = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] < 0) {
        amountOfNegativ++;
    }
}
console.log(`Amount of negative elements is ${amountOfNegativ}`);

// 5.Знайти кількість непарних позитивних елементів.
let amountOfOdd = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] % 2 !== 0 && arr[i] > 0) {
        amountOfOdd++;
    }
}
console.log(`Amount of odd positive elements is ${amountOfOdd}`);

// 6.Знайти кількість парних позитивних елементів.
let amountOfEven = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] % 2 === 0 && arr[i] > 0) {
        amountOfEven++;
    }
}
console.log(`Amount of even positive elements is ${amountOfEven}`);

// 7.Знайти суму парних позитивних елементів.
let sumOfEven = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] % 2 === 0 && arr[i] > 0) {
        sumOfEven += arr[i];
    }
}
console.log(`Sum of even positive numbers is ${sumOfEven}`);

// 8.Знайти суму непарних позитивних елементів.
let sumOfOdd = 0;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] % 2 !== 0 && arr[i] > 0) {
        sumOfOdd += arr[i];
    }
}
console.log(`Sum of odd positive numbers is ${sumOfOdd}`);

// 9.Знайти добуток позитивних елементів.
let mul = 1;
for(let i = 0;i < arr.length;i++) {
    if(arr[i] > 0) {
        mul *= arr[i];
    }
}
console.log(`Multiplication of positive numbers is ${mul}`);

// 10.Знайти найбільший серед елементів масиву, ост альні обнулити.
for(let i = 0;i < arr.length;i++) {
    if(arr[i] != maxElement) {
         arr[i] = 0;
    }
}
console.log(`${arr}`);