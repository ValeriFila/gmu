import '../css/style.css'
import '/src/counter.js'
import '/src/news.js'
import '/src/mail.js'
import '/src/speech.js'

import '../resourses/images/1.JPG'
import '../resourses/images/2.JPG'
import '../resourses/images/3.JPG'
import '../resourses/images/4.JPG'
import '../resourses/images/5.JPG'
import '../resourses/images/exhibition.jpeg'
import '../resourses/images/group.JPG'
import '../resourses/images/pictures.jpeg'
import '../resourses/images/ship.jpg'
import '../resourses/images/trees.jpeg'
import '../resourses/images/ushacov.jpeg'

import '../resourses/icons/eye.png'
import '../resourses/icons/to_left.png'
import '../resourses/icons/to_right.png'
import '../resourses/icons/university.png'

let arr1 = [5, 2, 1, -10, 8]
arr1.sort((a, b) => b - a)
console.log(arr1)

let arr2 = ["HTML", "JavaScript", "CSS"]

let res = arr2.map((str) => {
    return str
})
console.log((res.sort()))

// let vasya = { name: "Вася", age: 25 }
// let petya = { name: "Петя", age: 30 }
// let masha = { name: "Маша", age: 28 }
// let users = [ vasya, petya, masha ]
// let names = users.map((item) => {
//     return item.name
// })
// console.log(names)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 }
// let petya = { name: "Петя", surname: "Иванов", id: 2 }
// let masha = { name: "Маша", surname: "Петрова", id: 3 }
//
// let users = [ vasya, petya, masha ]
//
// let userMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//
// }))
// console.log(userMapped)

// function sortByAge() {
//     arr.sort((a,b) => a.age > b.age ? 1 : -1)
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function getAverageAge(arr) {
//     let res = arr
//         .map((item) => {
//         return item.age
//     })
//         .reduce((accum, item) => {
//         return accum + item
//     }, 0)
//     return res / arr.length
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// console.log(getAverageAge(arr));

function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)

