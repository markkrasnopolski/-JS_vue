let attempts = 0;
let correct = false;

while (attempts < 3) {
    let pin = Number(prompt("Введіть PIN-код:"));
    attempts++;

    if (pin === 2026) {
        console.log("Доступ дозволено");
        correct = true;
        break;
    } else {
        console.log("Залишилося спроб: " + (3 - attempts));
    }
}

if (!correct) {
    console.log("Доступ заблоковано");
}