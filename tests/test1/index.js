
const set = new Set(['1', '8', '2', '6', '7', '1']);
console.log([...set]);

// const numbers = [1, 2, 3];
// numbers[4] = 5;
// console.log(numbers);

// let arr = [0, 1, 2, 3, 4];
// arr.reverse();
// console.log(arr[1]);

// let browsers = 'Chrome, Opera, Mozilla';
// let riddle = browsers.split(', ');
// alert(typeof riddle);

// let arr = [];
// console.log(arr == !arr);


// let user1 = {
//     nick: 'Alex',
//     age: 18,
// }
//
// let user2 = {
//     nick: 'Alex',
//     age: 18,
// }
//
// let a = user1;
//
// console.log(user1 == a);
// console.log(user1 === user2);
// console.log(user1 == user2);
// console.log(a == user1);
// console.log(user1 === a);
//
//
// const obj = {
//     name: 'Alex',
//     age: 21,
//     'facebook nickname': 'Alex Machine',
//     42: null
// }
//
// alert (42 in obj);

// let key = 'facebook nickname'
// console.log(obj[key]);

// --- 2
// console.log(obj.facebook.nickname);
// const obj = 'new object';
// obj.name = 'Victor';
// console.log(obj.name);

// --- 3
// let obj = {
//     42: null,
//     14: null,
//     name: 'John',
//     01: null,
//     '+12': null,
//     surname: 'Di Carlo',
// }
// //
// for (key in obj){
//     console.log(key)
// }

// function Episode(){
//     this.giveFeedback = function(){
//         let feedback = prompt('Расскажите о фильме');
//         this.feedback = feedback;
//     }
// }
//
// let episode = new Episode();
// console.log('feedback', episode.giveFeedback());