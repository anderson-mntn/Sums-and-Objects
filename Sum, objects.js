//Sum array
let arr1 = [3, 3, 6, 8]

let soma = arr1.reduce(function somar(a, b){
    return a + b
})
console.log(soma)
console.log()

//Summing with "for"
var arr2 = [3, 3, 6, 8]
var sum = 0 
for(var i = 0; i < arr2.length; i++) {
    sum += arr2[i];
    console.log(sum)
}

//Remove Item from array
let arr3 = [3, 3, 6, 8]
function remove8(){
 arr3.splice([3], 1)
 return arr3
} 
console.log(remove8())

//Find string in the array and remove it
const arr = ["a", "b", "c", "d", "e"]
for (let i = 0; i <= arr.length; i++){
 if(arr[i] === "c") {
     arr.splice(i, 1)
     console.log(arr)
  }
}
//pag.45 - Objects, Classes (or contructors)
let obj = {
    name : {firstName : "Gandalf", lastName : "The Grey"},
    address : "Middle Earth" 
}
console.log(obj.name, obj.address + " <- Note that it's a string")

//Constructors is a special function that creates and initializes an object instance of a class.

//Declarando uma classe (construtor) que representa um livro:

function Book (title, pages, isbn){
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printIsbn = function (){
     console.log(this.isbn + "this isbn")
    }
}

//INSTANCING BOOK
var book = new Book('title', 'pages', 'isbn');
book.title = "LOTR" // att title
book.isbn = "é bom"
console.log(book.title)
book.printIsbn()
console.log(Book)


//Page 55 - var, let & const

//Algo to return faction. if k <= 5
let k = 0
let faction;
let phrase = "for the "
function incK(){
    k++
    document.write(blizzFan() + "<br>")
}
// function blizzardFan(){
//     if (k <= 5){
//         faction = "Alliance! "
//     } else {
//         faction = "Horde! "
//     }
//     return phrase + faction
// }

//Same Function but shorter
function blizzFan(){
    (k <= 5 ? faction = "Alliance! " : faction = "Horde! ")
    return phrase + faction
}
setInterval(incK, 700)