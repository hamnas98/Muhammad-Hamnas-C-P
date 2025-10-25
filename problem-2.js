// generate n odd numbers based on input

function generateOddNumbers(n) {
    let result = [];
    for(let i = 1; i < 2 * n; i++) {
        if( i % 2 !== 0) {
            result.push(i)
        }
    }
    console.log(result.join(','))
}

generateOddNumbers(1)
generateOddNumbers(4)
generateOddNumbers(6)