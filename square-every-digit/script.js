function squareDigits(num) {
    return Number(
        num
            .toString()
            .split("")
            .map(num => {
                return num * num
            })
            .join("")
    )
}

console.log(squareDigits(9119))
