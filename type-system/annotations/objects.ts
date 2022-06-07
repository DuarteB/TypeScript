const client = {
    id: "1234",
    age: 20,
    BMI: 1.5,
    condition: {
        mass: 80,
        height: 187
    },
    setBMI(mass: number, height: number): void {
        this.BMI = mass / ( height * height );
    }
};

const { id, age }: { id: string; age: number } = client;

const { condition: { mass, height } }: { condition: { mass: number; height: number } } = client;

console.log(mass);