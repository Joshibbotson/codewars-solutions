var isSquare = function (n) {
    return Math.sqrt(n) - Math.round(Math.sqrt(n)) === 0 ? true : false
}

console.log(isSquare(26))
