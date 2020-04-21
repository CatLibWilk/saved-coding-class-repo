import Animal from './Animal';
import Pet from './Pet';

export default class Cat extends Animal implements Pet {

    constructor(public readonly name: string) {
        super();
    }  

    cuddle(): void {
        console.log(`${this.name} is cuddling with you!`);
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