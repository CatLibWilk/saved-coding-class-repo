export default class AnimalOld {

    private fed: boolean = false;

    constructor(protected readonly name: string) {}  

    move(): void {
        console.log("This animal just moved.");
    }

    feed(): void {
        this.fed = true;
        console.log("This animal was just fed.");
    }

    isFed(): boolean {
        return this.fed;
    }

}