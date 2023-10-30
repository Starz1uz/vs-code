// let numbers = 0
// while (numbers < 10) {
//     numbers++
//     console.log(numbers);
// }

// let two = 1024
// let iter = 0
// while (two > 1) {
//     two/=2
//     iter++
//     console.log(two);
// }
// console.log(iter);


// let n = 1025
// let shag = 0
// while (n > 30) {
//     n/=5
//     shag++
//     console.log(n);
// }
// console.log(shag);

// let zvezda = "****"
// while(zvezda.length > 0){
// document.write(`<h1>${zvezda}</h1>`)
// zvezda = zvezda.slice(0, -1)
// }

// let zv = "*"
// let ask = +prompt('lorem1000')+1
// while (zv.length < ask) {
//     console.log(zv);
//     zv = zv + "*"
// }

// let random = Math.floor(Math.random() * 100)+1
// let iterr = 0
// while (true) {
//     let ask = +prompt('find my number ${random}')
//     iterr++
//     if (ask == random) {
//         console.log('yes you find');
//     if (iterr >= 1 && iterr<=3) {
//         console.log('ohh gooodd you find it for a ${iterr} time');
//     } else if (iterr >= 4 && iterr <= 10){
//         console.log('good job overall ${iterr} you tryed');
//     }else{
//         console.log('hahhahahah fifty to fifty');
//     }
//     break
    
//     }else if(random + 10 >= ask && random - 10 <= ask){
//         alert('good')
//     }else {
//         alert('cool')
//     }

// }
let arr = [1,9, 23,27,15]
let arr2 =[]
for(let item of arr){
    if (item > 10) {
        arr2.push(item)
    }
}
console.log(arr2);
let fill_n = arr.filter(item => item > 10)
console.log(fill_n);
let i = 0
for(let item of arr){
    i+= item
}
let v = arr.reduce((a, b) => a + b)

let namee = ['Alex', 'Alex', "Bob", "Vanessa", "Andrey", "Adriano"]
let s = namee.some(item => item.charAt(0) == "A")
let a = namee.every(item => item.charAt(0) == "A")

for(let item of namee){
    if (item.charAt(0) == "A") {
        console.log(item);
    }
}

// let find = namee.find(item => item == "Alex")











