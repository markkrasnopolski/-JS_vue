// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true
// }
//
// console.log(book);
// console.log(book.title);
//
// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: 1840,
//         price: 500,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         title: "Лісова пісня",
//         author: "Леся Українка",
//         year: 1918,
//         price: 600,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: 1944,
//         price: 450,
//         isAvailable: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: 1928,
//         price: 550,
//         isAvailable: true
//     }
// ]
//
// for (let book of books) {
//     console.log(`book id: ${book.id} title: ${book.title} author: ${book.author} year: ${book.year} price: ${book.price} isAvailable: ${book.isAvailable}`)
//
// }
//
// books.forEach(book => console.log(book.title))
//
// let isAvailableCount = books.filter(book => book.isAvailable).length;
// let totalPrice = books.filter(book => book.isAvailable).reduce((sum, book) => sum + book.price, 0);
//
// console.log(isAvailableCount, totalPrice)
//
// books[1].price = 750;
// console.log(books)
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// })
//
// let enterID = +prompt("Enter book id");
// let book = books.find(book => book.id === enterID);
//
// let status = book.isAvailable ? "available" : "unavailable";
//
// if (status) alert(`ID: ${book.id} \ntitle: ${book.title} \nauthor: ${book.author} \nyear: ${book.year} \nprice: ${book.price} \nisAvailable: ${book.isAvailable}`)
// else alert("Book not found");

// -------------------------------------

let clubs = [
    {id: 1, name: "Robotics", category: "IT", price: 900, members: 14, active: true},
    {id: 2, name: "Web Design", category: "IT", price: 750, members: 10, active: false},
    {id: 3, name: "Swimming", category: "Sport", price: 800, members: 20, active: true},
    {id: 4, name: "Watercolor Painting", category: "Art", price: 600, members: 8, active: true},
    {id: 5, name: "Football", category: "Sport", price: 500, members: 22, active: false}
];

let clubInfo = (club) => `ID: ${club.id}
Name: ${club.name}
Category: ${club.category}
Price: ${club.price} UAH/month
Members: ${club.members}
Enrollment: ${club.active ? "open" : "closed"}`;

let choice;

do {
    choice = prompt(`CLUBS CATALOG
1 - Show all clubs
2 - Find club by ID
3 - Enroll member
4 - Change enrollment status
5 - Add new club
6 - Show statistics
0 - Exit`);

    if (choice === null) {
        break;
    }

    switch (choice.trim()) {
        case "1": {
            if (clubs.length === 0) {
                alert("Catalog is empty");
                break;
            }
            let list = "";
            clubs.forEach(club => {
                list += clubInfo(club) + "\n\n";
            });
            alert(list);
            break;
        }

        case "2": {
            let idText = prompt("Enter club ID:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Incorrect ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (club) {
                alert(clubInfo(club));
            } else {
                alert("Could not find club");
            }
            break;
        }

        case "3": {
            let idText = prompt("Enter club ID to enroll a member:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Incorrect ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (!club) {
                alert("Could not find club");
                break;
            }
            if (!club.active) {
                alert(`Enrollment in "${club.name}" is closed`);
                break;
            }
            if (confirm(`Enroll a member in "${club.name}"?`)) {
                club.members++;
                alert(`Member enrolled. Now in club: ${club.members}`);
            } else {
                alert("Enrollment canceled");
            }
            break;
        }

        case "4": {
            let idText = prompt("Enter club ID to change enrollment status:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Incorrect ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (!club) {
                alert("Could not find club");
                break;
            }
            if (confirm(`Change enrollment status of "${club.name}"?`)) {
                club.active = !club.active;
                alert(`Enrollment is now ${club.active ? "open" : "closed"}`);
            } else {
                alert("Change canceled");
            }
            break;
        }

        case "5": {
            let name = prompt("Enter club name:");
            if (name === null || name.trim() === "") {
                alert("Name cannot be empty!");
                break;
            }
            let category = prompt("Enter category:");
            if (category === null || category.trim() === "") {
                alert("Category cannot be empty!");
                break;
            }
            let priceText = prompt("Enter price per month (UAH):");
            if (priceText === null || priceText.trim() === "" || isNaN(+priceText) || +priceText < 0) {
                alert("Incorrect price!");
                break;
            }
            let membersText = prompt("Enter number of members:");
            if (membersText === null || membersText.trim() === "" || !Number.isInteger(+membersText) || +membersText < 0) {
                alert("Incorrect number of members!");
                break;
            }

            let newId = 1;
            for (let club of clubs) {
                if (club.id >= newId) {
                    newId = club.id + 1;
                }
            }

            let newClub = {
                id: newId,
                name: name.trim(),
                category: category.trim(),
                price: +priceText,
                members: +membersText,
                active: true
            };
            clubs.push(newClub);
            alert(`Club added:\n${clubInfo(newClub)}`);
            break;
        }

        case "6": {
            if (clubs.length === 0) {
                alert("Catalog is empty, no statistics");
                break;
            }
            let openCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active) {
                    openCount++;
                }
                totalMembers += club.members;
            }
            clubs.forEach(club => totalPrice += club.price);

            alert(`Statistics:
Total clubs: ${clubs.length}
Open enrollment: ${openCount}
Total members: ${totalMembers}
Average price: ${(totalPrice / clubs.length).toFixed(2)} UAH`);
            break;
        }

        case "0":
            break;

        default:
            alert("Incorrect menu item!");
    }
} while (choice.trim() !== "0");