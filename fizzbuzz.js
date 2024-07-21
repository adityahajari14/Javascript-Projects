var output = [];
var count = 1;

function fizzbuzz(){
    if (count%15 === 0){
        output.push("fizzbuzz");
    } else if (count%5 === 0){
        output.push("buzz");
            } else if (count%3 === 0){
        output.push("fizz");
            } else{
        output.push(count)
            }
    count++;
    console.log(output);
}