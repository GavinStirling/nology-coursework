let num = -0
if (num > 0){
    console.log("The number is positive.")
} else if (num < 0){
    console.log("The number is Negative.")
} else{
    console.log("The number is zero.")
}

switch (new Date().getDate()){
    case 0:
        console.log("It's already the weekend!");
        break;
    case 1:
        console.log("4 days left!");
        break;
    case 2:
        console.log("3 days left!");
        break;
    case 3:
        console.log("2 days left!");
        break;
    case 4:
        console.log("1 days left!");
        break;
    case 5:
        console.log("0 days left!");
        break;
    case 6:
        console.log("It's already the weekend!");
        break;
}

let vegetable = "Carrot";
switch (vegetable.toLowerCase()){
    case "carrot":
        console.log("1.29 per kg")
        break
    case "tomato":
        console.log("1.45 per kg")
        break
    case "potato":
        console.log("0.80 per kg")
        break
}