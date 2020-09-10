import Circle from './lib/circle.js';

export default class Grid {
    static width   = 600
    static height  = 600
    static Alpha = 0
    static Theta = 0
    static Ox = 0
    static Oy = 0
    static Oz = 0
    static viewSize = 1
    constructor(){
        const body = document.querySelector('body')
        body.style.backgroundColor = 'black'
        body.style.margin = '0'
        body.style.height = '100vh'
        body.style.display = 'flex'
        body.style.alignItems = 'center'
        body.style.justifyContent = 'center'
        const canvas = document.createElement('canvas')
        canvas.style.backgroundColor = 'white'
        canvas.width = Grid.width
        canvas.height = Grid.height
        this.c2d = canvas.getContext('2d')
        document.querySelector('body').appendChild(canvas)
        this.sun = new Circle(10,20,100,10,'#ff0')
        this.earth = new Circle(0,-10000,0,9999,'#0f0')
        
    }
    static Sy(h){
        return  Grid.height/2 - h
    }
    static Sx(w){
        return  Grid.width/2 + w
    }
    clearGrid(){
        this.c2d.fillStyle = '#fff'
        this.c2d.fillRect(0,0,Grid.width,Grid.height)
    }
    static pixelToViewPoint(x,y){
        const tmpX = x* (Grid.viewSize/Grid.width)
        const tmpY = y* (Grid.viewSize/Grid.height)
        const tmpZ = 1
        return {
            Px:tmpX*Math.cos(Grid.Theta) + tmpY*Math.sin(Grid.Theta)*Math.sin(Grid.Alpha) - tmpZ*Math.sin(Grid.Theta)*Math.cos(Grid.Alpha),
            Py:tmpY*Math.cos(Grid.Alpha) + tmpZ* Math.sin(Grid.Alpha),
            Pz:tmpX*Math.sin(Grid.Theta) - tmpY*Math.cos(Grid.Theta)*Math.sin(Grid.Alpha) + tmpZ*Math.cos(Grid.Theta)*Math.cos(Grid.Alpha)
        }
    }
    rePaint(){
        this.clearGrid()
        this.sun.paint(this.c2d)
        this.earth.paint(this.c2d)
    }

    
}