export default abstract class Shape {
    


    constructor(protected readonly sides: number, 
                protected readonly sideLength: number) {}  
    
    abstract area(): number;
    
    perimeter(): number {
        return this.sideLength * this.sides;
        
    }

    getSides(): number {
        return this.sides;
    }


    

}