// generete odd till n or n-1 (if n is not odd)

function generateOdds(n) {
    n = n % 2 !== 0 ? n : n-1
    let result = []
    for(let i = 0; i <= n * 2; i ++) {
        if(i % 2 !== 0) {
            result.push(i)
        }
    }
    console.log(result.join(','))
}


generateOdds(1)
generateOdds(2)
generateOdds(3)
generateOdds(4)