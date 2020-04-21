export default class Triangle {
    
    constructor() {
    
    }  


    // Needed to calculate area of a triangle
    private getHeight(): number {
        return this.sideLength * Math.sin(60 * (Math.PI/180));
    }
        
}







