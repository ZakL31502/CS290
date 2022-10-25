console.log("Hello world")

console.log("==========")
console.log("== Variables")
console.log("==========")

var n = 5
console.log("== n: ", n)

n = "this is a string"
console.log("== n: ", n)

console.log("== 9/5: ", 9/5)

console.log("==========")
console.log("== Comparisons")
console.log("==========")

if (2 == 2) {
    console.log("== 2 == 2 ✅")
}

if (2 == "2") {
    console.log("== 2 == \"2\" ✅")
}


if (2 === "2") {
    console.log("== 2 === \"2\" ✅")
}
else {
    console.log("== 2 === \"2\" ❌")
}

console.log("==========")
console.log("== Strings")
console.log("==========")

var firstString = "this is a string"
var secondString = 'this is a string'

var decathlonString = "decathlon"
console.log(" == decathlonString.indexOf('cat'):", decathlonString.indexOf('cat'))

console.log("==========")
console.log("== Functions")
console.log("==========")

function addThreeThings(a, b, c) {
    return a + b + c
}

console.log(" == addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3))
console.log(" == addThreeThings('con', 'cat', 'onate'):", addThreeThings('con', 'cat', 'onate'))

console.log("==========")
console.log("== Arrays")
console.log("==========")

var Array = [1, "2", addThreeThings, [1, 2, 3]]
Array.push(4)
console.log("== array: ", Array)

Array.forEach(function (elem, idx){
    console.log(" -- inside forEach loop ", idx , ", elem: ", elem)
})