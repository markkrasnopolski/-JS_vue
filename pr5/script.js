// let num: = 1;
// while(num <= 5) {
//     console.log(num);
//     num ++;
// }

// let userNumber = +prompt("Enter your number")
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt("Error. Enter your number")
//     console.log('error')
// }

// console.log(Number("7"));
// console.Log(Number("hello"));

// let age : +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 |1 age >= 100) {
//     age = prompt(' Error. Enter your age');
// }
//  console.log(age);

// const correctPin = 1234
//
// let userPin = +prompt('Enter a valid pin');
// let attempts = 1
// while (correctPin !== userPin && attempts < 3) {
//     userPin = +prompt('Error. Enter a valid pin');
//     attempts++;
// }
// if (userPin === correctPin){
//     console.log('Welcome');
// }
// else{
//     console.log('Wrong pin');
// }

// const correctPin = 1234;
// let attempts = 1;
// while (attempts <= 3) {
//     let userPin = +prompt('Enter a valid pin');
//     if (userPin === correctPin) {
//         console.log('You entered a valid pin');
//         break
//     }
//     console.log('Error pin');
//     attempts++;
// }

// let menuChoice;
// do {
//     menuChoice = prompt("What is your choice? \n" +
//         "1 = Переглянути профіль\n" +
//         "2 = налаштування\n" +
//         "3 = статистика\n" +
//         "0 = вийти");
//
//     if (menuChoice === "1") {
//         console.log("Відкриваємо профіль");
//     } else if (menuChoice === "2") {
//         console.log("Відкриваємо налаштування");
//     } else if (menuChoice === "3") {
//         console.log("Відкриваємо статистику");
//     } else if (menuChoice === "0") {
//         console.log("Вихід");
//     } else {
//         console.log("вибір не правильний");
//     }
// } while (menuChoice !== "0");

// --------------------------------

// let menuChoice
//
// do {
//     menuChoice = prompt("What is your choice? \n" +
//         "1 = переглянути профіль\n" +
//         "2 = налаштування\n" +
//         "3 = статистика\n" +
//         "0 = вийти");
//
//     switch (menuChoice) {
//         case "1":
//             console.log("відкриваємо профіль");
//             break;
//         case "2":
//             console.log("відкриваємо налаштування");
//             break;
//         case "3":
//             console.log("відкриваємо статистику");
//             break;
//         case "0":
//             console.log("вихід");
//             break;
//         default:
//             console.log("вибір не правильний");
//     }
// } while (menuChoice !== "0");

// -----------------------------------

// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt(`Введи оцінку № ${count + 1}`);
//     if(Number.isNaN(grade) || grade < 1 || grade > 12 ) {
//         alert("Не коректна оцінка. Введи ще раз")
//         continue
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum)
// console.log(sum / 5)

// let questionsNumber = 1, score = 0;
// while (questionsNumber <- 5) {
//     let questions = '', correctAnswer = '';
//     switch (questionsNumber) {
//         case 1:
//             questions += "Ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//             case 2:
//                 questions = 'Оператор and'
//             correctAnswer = '&&';
//                 break;
//             case 3:
//                 questions = "Оператор or"
//             correctAnswer = '||';
//                 break;
//             case 4:
//                 questions = "Як зупинити цикл?"
//             correctAnswer = break;
//             case 5:
//                 questions = "Строга нерівність позначається"
//             correctAnswer = '===';
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} is 5\n${questions}`);
//     if (answer === '') {
//         alert("Відповідь не може бути пуста");
//         continue;
//     }
//     if (answer === correctAnswer) {
//         alert("Вірно!");
//         score++;
//     } else {
//         alert("Не вірно!");
//     }
//     questionsNumber++;
// }
// if (score === 5) {
//     alert("Ти молодець!")
// }
// else if (score >= 3) {
//     alert("Ок")
// }
// else {
//     alert("Треба вчитись")
// }

// Homework
let age = +prompt("Enter your age");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Error. Enter your age again");
}

const correctPin = 4321;
let userPin = +prompt("Enter real PIN");
let attempts = 1;

while (correctPin !== userPin && attempts < 3) {
    userPin = +prompt("Error. Enter a real PIN");
    attempts++;
}

if (userPin === correctPin) {
    console.log("Welcome");

    let menuChoice;

    do {
        menuChoice = prompt(
            "Choose an option:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід"
        );

        switch (menuChoice) {
            case "1":
                console.log("Особистий кабінет");
                break;

            case "2":
                console.log("Повідомлення");
                break;

            case "3":
                console.log("Налаштування");
                break;

            case "0":
                console.log("Вихід");
                break;

            default:
                console.log("Такого пункту немає.");
        }
    } while (menuChoice !== "0");

} else {
    console.log("Wrong PIN. Access denied.");
}