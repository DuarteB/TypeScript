class Employee {
    protected endShift(): void {
        console.log('Shift has been ended');
    }
}

class Mechanic extends Employee {
    private startShift(): void {
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

const mechanic = new Mechanic();
mechanic.goToWork();
mechanic.endShift();