export default class User {
    constructor(data) {
        this.data = {
            id: data.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address
        }
    }
    edit(obj) {
        this.data = {
            id: (obj.id) ? obj.id : this.data.id,
            name: (obj.name) ? obj.name : this.data.name,
            phone: (obj.phone) ? obj.phone : this.data.phone,
            email: (obj.email) ? obj.email : this.data.email,
            address: (obj.address) ? obj.address : this.data.address
        }
    }
    get() {
        return {...this.data};
    }
}