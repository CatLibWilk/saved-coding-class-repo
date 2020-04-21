export default class Triangle {
    
    private static readonly sides: number = 3;

    constructor(private readonly sideLength: number) {
        //
    }  
    
    area(): number {
        return 0.5 * this.sideLength * this.getHeight();
    }
    
    perimeter(): number {
        return this.sideLength * Triangle.sides;
        
    }

    getSides(): number {
        return Triangle.sides;
    }

    // Needed to calculate area of a triangle
    private getHeight(): number {
        return this.sideLength * Math.sin(60 * (Math.PI/180));
    }


}







