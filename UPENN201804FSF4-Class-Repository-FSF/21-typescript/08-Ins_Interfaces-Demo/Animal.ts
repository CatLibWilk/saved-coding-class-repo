export default class Animal {

    private fed: boolean = false;

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