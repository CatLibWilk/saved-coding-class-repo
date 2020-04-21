import Animal from './Animal';

export default class Cat extends Animal {

    constructor(protected readonly name: string) {
        super(name);
    }  

    getName(): string {
        return this.name;
    }

    meow(): void {
        console.log("Meow!");
    }

    purr(): void {
        console.log("Purr!");
    }
    
}