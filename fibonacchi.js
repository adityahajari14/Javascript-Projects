function fibonacciGenerator (n) {
    var i = 2;
    var fibonacci = [];

    if (n === 1){
        fibonacci.push(0);
    } else if (n === 2){
        fibonacci.push(0);
        fibonacci.push(1);
    } else {
        fibonacci.push(0);
        fibonacci.push(1);
        while (i<n){
            var length = fibonacci.length;
            fibonacci.push((fibonacci[length-1])+(fibonacci[length-2]));
            i++;
        }
    }

    return fibonacci;
    }

console.log(fibonacciGenerator(5))