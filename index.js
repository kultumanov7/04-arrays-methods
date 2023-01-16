// Homework 04
// rewrite the function with ? or  ||
const checkAge = age => (age > 18) ? true : confirm('Родители разрешили?');

// create pow function
const pow = (x, n) => x ** n;

// rewrite with arrow function
const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));

// sort task
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>(b-a));
alert( arr ); // 8, 5, 2, 1, -10

// transform to array of names
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(el => el.name);
alert( names ); // Вася, Петя, Маша


// transform to objects
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];
let usersMapped = users1.map(el => {
    return {fullName: `${el.name} ${el.surname}`, id: el.id};
})

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// get average age;
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];
const getAverageAge = (arr) => {
    return arr.map(el => el.age).reduce((acc, cur) => acc + cur, 0) / 3;
}

console.log(getAverageAge(arr));
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28