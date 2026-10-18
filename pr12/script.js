// function isHighScore(score){
//     return score >= 10;
// }
// scores = [12, 5, 4, 11, 10, 9]
//
// let highScore = scores.filter(isHighScore)
// console.log(highScore);

// scores = [12, 5, 4, 11, 10, 9]
// let highScore = scores.filter(score => score => 10);
// console.log(highScore);

// let course = [
//     {id: 1, title: "HTML", description: "HTML", price: 300, active: false},
//     {id: 2, title: "CSS", description: "CSS", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "Js", price: 500, active: true},
//     {id: 4, title: "Vue", description: "Vue+JS", price: 600, active: false},
// ]
// let idCourse = +prompt("What is the course?");
// let found = course.find(course => course.id === idCourse);
// if (found !== undefined) {
//     console.log(found.title);
// }else{
//     console.log("Could not find course");
// }
//
// let activeCourse = course.filter(course => course.active === true);
// console.log(activeCourse);
//
// let titleCourse= course.map(course => course.title);
// let priceCourse= course.map(course => course.price * 0.9);
// console.log(titleCourse);
// console.log(priceCourse);
// let jsSearch = course.filter(course => course.description.includes('JS'));
// console.log(jsSearch);

// let books = [
//     {id: 1, title: "HTML for beginners", author: "XMan", years: 2014, availability: true}
//     {id: 2, title: "CSS for beginners", author: "YMan", years: 2015, availability: true}
//     {id: 3, title: "JS for beginners", author: "EMan", years: 2016, availability: true}
//     {id: 4, title: "JS + VUE for beginners", author: "AMan", years: 2017, availability: true}
// ]
// let year = +prompt("Published")
// let existingBooks = books.filter((book) => book.years === year)
// console.log(existingBooks)
// let titleBooks = books.map(book => book.title)
// console.log(titleBooks)
// let search = books.filter(book => book.title.includes("Beginners"))
// console.log(search)

// let price = [500, 2000, 700]
// console.log(price.sort((a, b) => a - b))

// let books = [
//     {id: 1, title: "HTML for beginners", author: "XMan", years: 2014, availability: true},
//     {id: 2, title: "CSS for beginners", author: "YMan", years: 2015, availability: true},
//     {id: 3, title: "JS for beginners", author: "EMan", years: 2016, availability: false},
//     {id: 4, title: "JS + VUE for beginners", author: "AMan", years: 2017, availability: true}
// ]
// let lowerUpper = [...books].sort((a, b) => a.years - b.years);
// console.log(lowerUpper);
// let existingBooks = books
//     .filter((book) => book.availability === true)
//     .sort((a, b) => a.years - b.years)
//     .map(book => `${book.title} - ${book.author} - ${book.years}`);
// console.log(existingBooks);

// ---------------------------------

let courses = [
    {id: 1, title: "HTML for beginners", category: "Frontend", price: 300, duration: 20, rating: 4.5, available: true},
    {id: 2, title: "CSS Advanced", category: "Frontend", price: 450, duration: 30, rating: 4.7, available: true},
    {id: 3, title: "JavaScript Basics", category: "Programming", price: 500, duration: 40, rating: 4.8, available: true},
    {id: 4, title: "Vue.js", category: "Frontend", price: 650, duration: 35, rating: 4.3, available: false},
    {id: 5, title: "Node.js", category: "Backend", price: 700, duration: 45, rating: 4.6, available: true},
    {id: 6, title: "Python for beginners", category: "Programming", price: 400, duration: 38, rating: 4.9, available: true},
    {id: 7, title: "SQL and Databases", category: "Backend", price: 550, duration: 28, rating: 4.1, available: false},
    {id: 8, title: "UI/UX Design", category: "Design", price: 350, duration: 25, rating: 3.9, available: true},
]

let findById = (id) => courses.find(course => course.id === id);

let filterByCategory = (category) => courses.filter(course => course.category.toLowerCase() === category.toLowerCase());

let filterByPrice = (maxPrice) => courses.filter(course => course.price <= maxPrice);

let searchByTitle = (text) => courses.filter(course => course.title.toLowerCase().includes(text.toLowerCase()));

let getTitles = () => courses.map(course => course.title);

let getDiscountPrices = () => courses.map(course => ({
    title: course.title,
    price: +(course.price * 0.85).toFixed(2)
}));

let sortByPriceAsc = () => [...courses].sort((a, b) => a.price - b.price);

let sortByRatingDesc = () => [...courses].sort((a, b) => b.rating - a.rating);

let sortByTitle = () => [...courses].sort((a, b) => a.title.localeCompare(b.title));

let getAvailableStats = () => {
    let availableCourses = courses.filter(course => course.available === true);
    let total = availableCourses.reduce((sum, course) => sum + course.price, 0);
    let average = availableCourses.length > 0 ? total / availableCourses.length : 0;
    return {count: availableCourses.length, total: total, average: average};
};

let courseToString = (course) =>
    `${course.id}. ${course.title} | ${course.category} | ${course.price} грн | ${course.duration} год | рейтинг ${course.rating} | ${course.available ? "доступний" : "недоступний"}`;

let showCourses = (list, emptyMessage) => {
    if (list.length === 0) {
        alert(emptyMessage);
        return;
    }
    console.log(list);
    alert(list.map(courseToString).join("\n"));
};

let readText = (message) => {
    let value = prompt(message);
    if (value === null || value.trim() === "") {
        alert("Incorrect input!");
        return null;
    }
    return value.trim();
};

let readNumber = (message) => {
    let value = prompt(message);
    if (value === null || value.trim() === "" || isNaN(+value) || +value < 0) {
        alert("Incorrect input!");
        return null;
    }
    return +value;
};

let menuText = `Course catalog:
1 - Find course by id
2 - Courses by category
3 - Courses by max price
4 - Search by title
5 - Only titles
6 - Prices with 15% discount
7 - Sort by price (low to high)
8 - Sort by rating (high to low)
9 - Sort by title (A-Z)
10 - Total and average price of available courses
0 - Exit`;

let choice;
let again;

do {
    choice = prompt(menuText);

    if (choice === null) {
        break;
    }

    switch (choice.trim()) {
        case "1": {
            let id = readNumber("Enter course id:");
            if (id !== null) {
                let found = findById(id);
                if (found !== undefined) {
                    alert(courseToString(found));
                } else {
                    alert("Could not find course");
                }
            }
            break;
        }
        case "2": {
            let category = readText("Enter category (Frontend, Backend, Programming, Design):");
            if (category !== null) {
                showCourses(filterByCategory(category), "No courses in this category");
            }
            break;
        }
        case "3": {
            let maxPrice = readNumber("Enter max price:");
            if (maxPrice !== null) {
                showCourses(filterByPrice(maxPrice), "No courses for this price");
            }
            break;
        }
        case "4": {
            let text = readText("Enter part of the title:");
            if (text !== null) {
                showCourses(searchByTitle(text), "Nothing found");
            }
            break;
        }
        case "5": {
            let titles = getTitles();
            console.log(titles);
            alert(titles.join("\n"));
            break;
        }
        case "6": {
            let discount = getDiscountPrices();
            console.log(discount);
            alert(discount.map(course => `${course.title} - ${course.price} грн`).join("\n"));
            break;
        }
        case "7":
            showCourses(sortByPriceAsc(), "Catalog is empty");
            break;
        case "8":
            showCourses(sortByRatingDesc(), "Catalog is empty");
            break;
        case "9":
            showCourses(sortByTitle(), "Catalog is empty");
            break;
        case "10": {
            let stats = getAvailableStats();
            if (stats.count === 0) {
                alert("No available courses");
            } else {
                alert(`Available courses: ${stats.count}\nTotal: ${stats.total} грн\nAverage: ${stats.average.toFixed(2)} грн`);
            }
            break;
        }
        case "0":
            break;
        default:
            alert("Incorrect choice, try again!");
    }

    if (choice.trim() === "0") {
        break;
    }

    again = confirm("Return to menu?");
} while (again);

alert("Goodbye!");