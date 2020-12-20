export default class CRUD{

    constructor(data){
        if (Array.isArray(data)){
            this.data = data;
        }
    }

    create(){
        let newEl = {};
        this.data.push(newEl);
        return newEl;
    }

    update(el, key){
        let last = this.read(key);
        last = el;
        return last;
    }

    read(key){
        let el = this.data.find(key);
        if (!el){
            new Error(`Not found element by key = ${key}`, key);
        }
        return el;
    }
    
    remove(key){
        let index = this.data.findIndex(key);
        this.data.splice(index, 1);
    }
}