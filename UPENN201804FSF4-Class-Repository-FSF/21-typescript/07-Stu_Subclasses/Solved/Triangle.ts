import Shape from './Shape';

export default class Triangle extends Shape {
    
    constructor(protected readonly sideLength: number) { 
        super(3, sideLength);
    }  
    
    area(): number {
        return 0.5 * this.sideLength * this.getHeight();
    }
    
    // Needed to calculate area of a triangle
    private getHeight(): number {
        return this.sideLength * Math.sin(60 * (Math.PI/180));
    }

}







