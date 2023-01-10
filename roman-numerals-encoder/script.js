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

    const splitNumIntoArr = number.toString().split("")

    for (let numeral of numeralArr) {
        console.log(`${numeral.symbol} : ${numeral.value}`)
    }
}

console.log(solution(1000))
