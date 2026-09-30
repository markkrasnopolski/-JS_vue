let cars = 0;
let electric = 0;
let total = 0;
let max = 0;

for (let i = 1; i <= 7; i++) {
    let hours = Number(prompt("Введіть кількість годин:"));

    if (hours === 0) {
        break;
    }

    if (hours < 0 || hours > 12) {
        continue;
    }

    let type = Number(prompt("Введіть тип автомобіля: 1 - звичайний, 2 - електромобіль"));

    if (type !== 1 && type !== 2) {
        console.log("Помилка: неправильний тип автомобіля");
        continue;
    }

    let price;

    if (type === 1) {
        price = hours * 40;
    } else {
        price = hours * 30;
        electric++;
    }

    if (hours > 5) {
        price = price * 0.8;
    }

    cars++;
    total = total + price;

    if (price > max) {
        max = price;
    }
}

console.log("Кількість правильно оброблених автомобілів: " + cars);
console.log("Кількість електромобілів: " + electric);
console.log("Загальна сума оплати: " + total + " грн");
console.log("Найбільша оплата за один автомобіль: " + max + " грн");