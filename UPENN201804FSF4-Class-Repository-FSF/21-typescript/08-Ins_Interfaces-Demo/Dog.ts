import Animal from './Animal';
import Pet from './Pet';

export default class Dog extends Animal implements Pet {

    constructor(public readonly name: string) {
        super();
    }  

    cuddle(): void {
        console.log(`${this.name} is cuddling with you!`);
    }

    
    getName(): string {
        return this.name;
    }

    bark(): void {
        console.log("Bark!");
    }

    howl(): void {
        console.log("Howl!");
    }
    
}