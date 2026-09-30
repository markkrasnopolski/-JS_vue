let age = Number(prompt("Введіть ваш вік:"));
let day = Number(prompt("Введіть день:"));

let price;

if (day === 1) {
    price = 200;
} else if (day === 2) {
    price = 250;
} else {
    console.log("Помилка: неправильний тип дня");
}

if (day === 1 || day === 2) {
    if (age <= 7) {
        price = 0;
    } else if (age <= 17) {
        price = price * 0.5;
    } else if (age >= 60) {
        price = price * 0.6;
    }

    console.log("Вартість квитка: " + price + " грн");
}