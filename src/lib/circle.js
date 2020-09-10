import Grid from '../grid.js';

export default class {
    constructor(Cx,Cy,Cz,R,color){
        this.Cx = Cx
        this.Cy = Cy
        this.Cz = Cz
        this.R = R
        this.color = color
    }

    getX(){
        return this.Cx - Grid.Ox
    }
    getY(){
        return this.Cy - Grid.Oy
    }
    getZ(){
        return this.Cz - Grid.Oz
    }

    paint(c2d){
        c2d.fillStyle = this.color
        for (let x = -Grid.width/2; x <= Grid.width/2; x++) {
            for(let y = -Grid.height/2 ; y<= Grid.height/2; y++){
                const {Px,Py,Pz} = Grid.pixelToViewPoint(x,y)
                const A = Px*Px + Py*Py + Pz*Pz
                const B = 2*(Px*this.getX() + Py*this.getY() + Pz*this.getZ())
                const C = this.getX()*this.getX() + this.getY()*this.getY() + this.getZ()*this.getZ() - this.R*this.R

                const delta = B*B - (4 * A*C)
                if (delta>=0) {
                    const t1 = (-B + Math.sqrt(delta))/(2*A)
                    const t2 = (-B - Math.sqrt(delta))/(2*A)
                    if (t1 <1 && t2 < 1) {
                        c2d.fillRect(Grid.Sx(x),Grid.Sy(y),1,1)
                        
                    }
                   
                    
                }
            
            }
        }
    }
}