function isLeap(year){
    var dividefour = year % 4;
    var dividehundred = year % 100;
    var dividefourhundred = year % 400;

    if (dividefour  !== 0){
        return "Not leap year.";
    }

    if (dividefour  === 0 && dividehundred !== 0){
        return "Leap year.";
    }

    if (dividefour  === 0 && dividehundred === 0 && dividefourhundred !== 0){
        return "Not leap year.";
    }

    if (dividefour  === 0 && dividehundred === 0 && dividefourhundred === 0){
        return "Leap year.";
    }
}

var Leap = isLeap(2000)