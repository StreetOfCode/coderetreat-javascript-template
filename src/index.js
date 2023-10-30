function sum(a, b) {
    return a + b
}

console.log(sum(1, 3))

module.exports = {
    // all functions which are used by the tests need to be exported (added here)
    sum
}