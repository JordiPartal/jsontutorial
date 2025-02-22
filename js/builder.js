let dataset, employees;

async function init() {
    try {
        await getData("gen.json");
        addABunchOfEmployees(20);
    } catch (e) {
        console.log(e.message);
    }
}

function getData(file) {
    return fetch(rootFile(file))
        .then(response => response.json())
        .then(data => {
            dataset = data;
        })
        .catch(error => {
            console.log(error);
        })
}

function addABunchOfEmployees(max) {
    let collection = [];
    for (let count = 0; count < max; count++) {
        collection[count] = addEmployee(dataset);
    }
    employees = new Employees().setEmployees(collection).build();
}

function addEmployee(data) {
    let surnames = new Employees.Surnames()
        .setSurname(dataGen(data.apellido.primero))
        .setLastName(dataGen(data.apellido.segundo)).build();

    return new Employees.Employee()
        .setName(dataGen(data.name))
        .setSurname(surnames)
        .setAge(getNumberBetween(20, 40))
        .setSingle(getBooleanValue()).build();
}

function dataGen(data) {
    let position = randomize(data);
    return data[position];
}

function randomize(data) {
    return Math.round(Math.random() * (data.length - 1));
}

function getNumberBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getBooleanValue() {
    let boolean = [ true, false ];
    return boolean[Math.round(Math.random())];
}

function rootFile(file) {
    return "./js/json/".concat(file);
}