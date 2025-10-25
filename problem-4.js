function countMultiples(arr) {
    let result = {};
    for(let i = 1; i <= 9; i++) {
        let count = 0
        for(let num of arr) {
            if(num % i === 0 ){
                count ++
            }
        }
        result[i] = count
    }
    console.log(result)
}

countMultiples([1,2,8,9,12,46,76,82,15,20,30])