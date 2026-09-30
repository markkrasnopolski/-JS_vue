let n = Number(prompt("Введіть кількість учнів:"));

let sum = 0;
let good = 0;
let bad = 0;
let max = 0;

for (let i = 1; i <= n; i++) {
    let grade = Number(prompt("Введіть оцінку:"));

    sum = sum + grade;

    if (grade >= 7) {
        good = good + 1;
    } else {
        bad = bad + 1;
    }

    if (grade > max) {
        max = grade;
    }
}

let average = sum / n;

console.log("Сума: " + sum);
console.log("Середня: " + average);
console.log("Оцінок 7 і вище: " + good);
console.log("Оцінок нижче 7: " + bad);
console.log("Найбільша оцінка: " + max);