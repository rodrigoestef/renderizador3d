import Grid from './grid.js'

export default class KeyEvents{
    static oldMouseX = 0
    static oldMouseY = 0
    constructor(){
        document.querySelector('body').addEventListener('keypress',e=>{
            try{
                eval(`KeyEvents.${e.code}()`)
            }catch(e){}
        })
        document.querySelector('body').addEventListener('mousemove',e=>{

            if (e.pageX < KeyEvents.oldMouseX) {
                Grid.Theta += 0.1
            }
            if (e.pageX > KeyEvents.oldMouseX) {
                Grid.Theta -= 0.1
            }

            if (e.pageY < KeyEvents.oldMouseY) {
                Grid.Alpha += 0.1
            }
            if (e.pageY > KeyEvents.oldMouseY) {
                Grid.Alpha -= 0.1 
            }


            KeyEvents.oldMouseX = e.pageX
            KeyEvents.oldMouseY = e.pageY

        })
    }


    static KeyA(){
        Grid.Ox -= 0.1 
    }

    static KeyD(){
        Grid.Ox += 0.1 
    }

    static KeyW(){
        Grid.Oz += 0.1 
    }
    static KeyS(){
        Grid.Oz -= 0.1 
    }
}