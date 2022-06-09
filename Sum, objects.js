//Somar array
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
//pag.45 - Objects
let obj = {
    name : {firstName : "Gandalf", lastName : "The Grey"},
    address : "Middle Earth" 
}
console.log(obj.name, obj.address + " <- Note that's a string")
