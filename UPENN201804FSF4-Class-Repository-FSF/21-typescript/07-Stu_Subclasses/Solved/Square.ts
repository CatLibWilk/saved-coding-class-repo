import Shape from './Shape';

export default class Triangle extends Shape {
    
    constructor(protected readonly sideLength: number) { 
        super(4, sideLength);
    }  
    
    area(): number {
        return this.sideLength * this.sideLength;
    }

}