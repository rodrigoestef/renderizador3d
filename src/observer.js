export default class observer {
    static list = []
    static setList(e) {
        this.list.push(e)
    }
    start(){
        const ob = new observer();
        window.setInterval(()=>ob.loop(),1)
    }

    loop(){
            for (const func of observer.list) {
                // console.log(func)
                func()

            }
        
    }
}

