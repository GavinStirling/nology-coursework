function isNumberPositive(number){
    if (number >= 0){
        return true;
    }else if (number < 0){
        return false;
    }
}

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

function convertDaysToAge(days){
    return age = days/365;
}

console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18

function getLargestNumber(num1,num2,num3){
    let largest;
    if (num1 > num2 && num1 > num3){
        largest = num1;
    }else if (num2 > num1 && num2 > num3){
        largest = num2;
    }else if (num3 > num1 && num3 > num1){
        largest = num3;
    }
    return largest;
}

console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6

function getLastName(arr){
    return arr.slice(-1);
}

console.log(getLastName(["Charlie","Rob","Andy"])); // returns “Andy”
console.log(getLastName(["Ash","Stu"])); // returns "Stu"