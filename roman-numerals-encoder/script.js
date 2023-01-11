function solution(number) {
    const numeralArr = [
        {
            symbol: "I",
            value: 1,
        },
        {
            symbol: "V",
            value: 5,
        },
        {
            symbol: "X",
            value: 10,
        },
        {
            symbol: "L",
            value: 50,
        },
        {
            symbol: "C",
            value: 100,
        },
        {
            symbol: "D",
            value: 500,
        },
        {
            symbol: "M",
            value: 1000,
        },
    ]

    const splitNum = number.toString().split("")
    const length = splitNum.length

    for (let numeral of numeralArr) {
        console.log(`${numeral.symbol} : ${numeral.value}`)
        if (number === numeral.value) {
            return numeral.symbol
        } else {
            for (let i = 0; i < length; i++) {
                splitNum[length - 1]
            }
        }
    }
}

console.log(solution(2345))
