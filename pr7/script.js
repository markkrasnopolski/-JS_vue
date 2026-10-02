// function name(Аргументи) : void{
// }

// function hello(): void{
//     alert("Hello World!");
// }
//
// hello();
// hello();
// hello();

// function showInfo(name, price = 'No in stock', count) {
//     console.log("Shop from Sasha")
//     console.log("Timetable: 08:00-12:00")
//     console.log(`Product${name}, Price: ${price}uah`);
//     console.count(`Sum for payment: ${count + price}`);
// }
//
// showInfo('Green tea');

// function calculate(price, total) {
//     let suma = price * total, discount, totalPrice;
//     if (suma >= 5000) {
//         discount = 0.1;
//     }
//     else {
//         discount = 0;
//     }
//     totalPrice = suma * (1 - discount);
//     return totalPrice;
// }
//
// let total = calculate(500, 3);
// console.log(total);

// function showInfo(name, price = "No stock available", count) {
//     console.log('Shop Vadim');
//     console.log('Working hours: 08:00-11:00');
// }
//
// function getProductTotal(price,count) {
//     return price * count;
// }
// function getDiscountPercent(total) {
//     if (total >= 10000) {
//         return 15;
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else if(total >= 2000) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent) {
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt("Enter your product name");
// let productPrice = prompt("Enter your product price");
// let productCount = prompt("Enter quantity of your product count");
//
// let ProductTotal = getDiscountValue(productPrice, productCount);
// let discountPercent = getDiscountPercent(ProductTotal);
// let discountValue = getDiscountValue(ProductTotal, discountPercent);
// let finalPrice = getFinalPrice(ProductTotal, discountPercent);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Product: ${productName}`);
// console.log(`Price: ${productPrice} uah`);
// console.log(`Count: ${productCount} pieces`);
// console.log(`Sum: ${ProductTotal} uah`);
// console.log(`Discount: ${discountPercent} %`);
// console.log(`Sum discount: ${discountValue} uah`);
// console.log(`Total payment: ${finalPrice} uah`);
// ----------------------------------------------------------
// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     }
//     else if (total >= 1000) {
//         return 10;
//     }
//     else if (total >= 500) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * percent / 100;
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let ticketPrice = Number(prompt("Enter ticket price:"));
// let ticketCount = Number(prompt("Enter ticket count:"));
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let percent = getTicketDiscount(total);
// let discount = calculateTicketDiscount(total, percent);
// let finalPrice = calculateTicketFinalPrice(total, discount);
//
// console.log("=== Cinema ===");
// console.log(`Ticket price: ${ticketPrice} uah`);
// console.log(`Ticket count: ${ticketCount} pcs`);
// console.log(`Total without discount: ${total} uah`);
// console.log(`Discount: ${percent}%`);
// console.log(`Discount amount: ${discount} uah`);
// console.log(`Final price: ${finalPrice} uah`);
// --------------------------------------------
// let userLogin = "";
// let userPassword = "";
//
// function register(login, password) {
//     userLogin = login;
//     userPassword = password;
//     console.log("Registration successful!");
// }
//
// function checkLogin(login, password) {
//     if (login === userLogin && password === userPassword) {
//         return true;
//     }
//     return false;
// }
//
// let action;
//
// do {
//     action = +prompt(
//         "Choose action:\n" +
//         "1 - Register\n" +
//         "2 - Login\n" +
//         "0 - Exit"
//     );
//
//     if (action === 1) {
//         let login = prompt("Enter login:");
//         let password = prompt("Enter password:");
//         register(login, password);
//     }
//
//     else if (action === 2) {
//         let attempts = 3;
//
//         while (attempts > 0) {
//             let login = prompt("Enter login:");
//             let password = prompt("Enter password:");
//
//             if (checkLogin(login, password)) {
//                 console.log("Login successful!");
//                 break;
//             }
//
//             attempts = attempts - 1;
//             console.log(`Wrong login or password. Attempts left: ${attempts}`);
//         }
//
//         if (attempts === 0) {
//             console.log("No attempts left!");
//         }
//     }
//
//     else if (action === 0) {
//         console.log("Program closed");
//     }
//
//     else {
//         console.log("Unknown command");
//     }
//
// } while (action !== 0);