class Employee {

    constructor( public age: number ) {}

    protected endShift(): void {
        console.log('Shift has been ended');
    }
}

const employee = new Employee(29);
console.log(employee.age);

class Mechanic extends Employee {
    public startShift(): void {
        console.log('Mechanic start to shift')
    }

    goToWork(): void {
        this.startShift();
        this.endShift();
    }
}

// const employee = new Employee();
// employee.startShift();
// employee.endShift();

// const mechanic = new Mechanic();
// mechanic.goToWork();
// mechanic.endShift();