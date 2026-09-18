
let eventType;
let eventName;
let basePrice;

while (true) {
    eventType = Number(prompt(
        "Оберіть подію:\n1 - Кіно\n2 - Театр\n3 - Концерт"
    ));

    switch (eventType) {
        case 1:
            eventName = "Кіно";
            basePrice = 150;
            break;
        case 2:
            eventName = "Театр";
            basePrice = 220;
            break;
        case 3:
            eventName = "Концерт";
            basePrice = 350;
            break;
        default:
            console.log("Неправильний номер події");
            continue;
    }

    break;
}

let dayType;

while (true) {
    dayType = Number(prompt(
        "Оберіть тип дня:\n1 - Будній\n2 - Вихідний"
    ));

    if (dayType === 1 || dayType === 2) {
        break;
    }

    console.log("Неправильний тип дня");
}

let ticketPrice = basePrice;

if (dayType === 2) {
    ticketPrice *= 1.15;
}

let ticketCount;

while (true) {
    ticketCount = Number(prompt(
        "Введіть кількість квитків від 1 до 6:"
    ));

    if (
        Number.isInteger(ticketCount) &&
        ticketCount >= 1 &&
        ticketCount <= 6
    ) {
        break;
    }

    console.log("Неправильна кількість квитків");
}

let processedTickets = 0;
let freeTickets = 0;
let discountTickets = 0;
let fullPriceTickets = 0;
let totalSum = 0;

for (let i = 1; i <= ticketCount; i++) {
    let age;

    while (true) {
        age = Number(prompt(
            "Введіть вік (-1 для завершення):"
        ));

        if (age === -1) {
            break;
        }

        if (
            Number.isInteger(age) &&
            age >= 0 &&
            age <= 120
        ) {
            break;
        }

        console.log("Некоректний вік");
    }

    if (age === -1) {
        break;
    }

    processedTickets++;

    if (age >= 0 && age <= 5) {
        freeTickets++;
        continue;
    }

    let discount = 0;

    if (age >= 6 && age <= 12) {
        discount = 0.5;
    } else if (age >= 13 && age <= 17) {
        discount = 0.2;
    } else if (age >= 60) {
        discount = 0.25;
    }

    let price = ticketPrice * (1 - discount);
    let hasStudentCard = false;

    if (age >= 18 && age <= 25) {
        let student;

        while (true) {
            student = prompt(
                "Є студентський квиток? (так/ні)"
            ).toLowerCase();

            if (student === "так" || student === "ні") {
                break;
            }

            console.log("Введіть так або ні");
        }

        if (student === "так") {
            price *= 0.9;
            hasStudentCard = true;
        }
    }

    if (discount > 0 || hasStudentCard) {
        discountTickets++;
    } else {
        fullPriceTickets++;
    }

    totalSum += price;
}

let extraDiscount = 0;

if (totalSum > 1000) {
    extraDiscount = totalSum * 0.05;
    totalSum -= extraDiscount;
}

console.log("===== TicketFlow =====");
console.log("Подія: " + eventName);
console.log("Оброблено квитків: " + processedTickets);
console.log("Безкоштовних: " + freeTickets);
console.log("Зі знижкою: " + discountTickets);
console.log("За повною ціною: " + fullPriceTickets);
console.log("Додаткова знижка: " + extraDiscount.toFixed(2) + " грн");
console.log("Загальна сума: " + totalSum.toFixed(2) + " грн");