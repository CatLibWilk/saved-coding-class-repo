import Animal from './Animal';

export default class Dog extends Animal {

    constructor(protected readonly name: string) {
        super(name);
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