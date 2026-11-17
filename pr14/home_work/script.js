let confirmBtn = document.querySelector('#confirmBtn');
let status = document.querySelector('#status');

confirmBtn.addEventListener("click", function () {
    status.textContent = 'Changes successfully saved!';
    status.classList.add('success');
    confirmBtn.textContent = 'Confirmed';
})

let userName = document.querySelector('#userName');
let welcome = document.querySelector('#welcome');

userName.addEventListener("input", function () {
    let name = userName.value.trim();
    if (name === "") {
        welcome.textContent = "Welcome, Guest!";
    }
    else {
        welcome.textContent = "Welcome, " + name;
    }
})

let themeSelect = document.querySelector('#themeSelect');
let card = document.querySelector('#card');

themeSelect.addEventListener("change", function () {
    if (themeSelect.value === "dark") {
        card.classList.add('dark');
    } else {
        card.classList.remove('dark');
    }
})

let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');

detailBtn.addEventListener("click", function () {
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = 'Show additional information';
    }
    else {
        detailBtn.textContent = 'Hide additional information';
    }
})