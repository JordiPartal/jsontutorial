class Employees {
    constructor() {
        this.employees =  null;
    }

    static Surnames = class {
        constructor() {
            this.surname = null;
            this.lastname = null;
        }

        setSurname(surname) {
            this.surname = surname;
            return this;
        }

        setLastName(lastname) {
            this.lastname = lastname;
            return this;
        }

        build() {
            return {
                surname : this.surname,
                lastname : this.lastname
            }
        }
    }

    static Employee = class {
        constructor() {
            this.name = null;
            this.surnames = null;
            this.age = null;
            this.single = null;
        }

        setName(name) {
            this.name = name;
            return this;
        }

        setSurname(surnames) {
            this.surnames = surnames;
            return this;
        }

        setAge(age) {
            this.age = age;
            return this
        }

        setSingle(isSingle) {
            this.single = isSingle;
            return this;
        }

        build() {
            return {
                name : this.name,
                surnames : this.surnames,
                age : this.age,
                single : this.single
            }
        }
    }

    setEmployees(employee) {
        this.employees = employee;
        return this;
    }

    build() {
        return {
            employees : this.employees
        }
    }
}