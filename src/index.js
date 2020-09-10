import Observer from './observer.js';
import Grid from "./grid.js";
import KeyEvents from './keyevents.js';
class main {
    constructor(){
        const grid = new Grid();
        Observer.setList(()=>grid.rePaint())
        const observer = new Observer();
        new KeyEvents()
        observer.start()
    }
    
}

window.addEventListener('load',()=>{
    new main();
})

