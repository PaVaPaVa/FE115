import User from "./User.js"
export default class Contacts {
    constructor() {
        this.data = [];
    }
    add(obj) {
        this.data.push(new User(obj));
    }
    edit(id, obj) {
        this.data = this.data.map(item => {
            if (item.data.id == id) {
                item.edit(obj);
                item.get();
            }
            return item;
        })
    }
    remove(id) {
        this.data = this.data.filter(item => item.data.id != id);
    }
    getCont() {
        return this.data
    }
}
