function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverse(string) {
    return string.split("").reverse().join("")
}
console.log(reverse("hello"));

function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b == 0) {
        throw new Error('cannot divide by Zero')
    }
    return a / b
}
function calculator() {
    return {
        add,
        substract,
        divide,
        multiply
    }
}


module.exports = { capitalize, reverse, add, substract, divide, multiply, calculator }