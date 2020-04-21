export default class Square {
    
    private static readonly sides: number = 4;

    constructor(private readonly sideLength: number) {
        //
    }  
    
    area(): number {
        return this.sideLength * this.sideLength;
    }
    
    perimeter(): number {
        return this.sideLength * Square.sides;
        
    }

    getSides(): number {
        return Square.sides;
    }

}