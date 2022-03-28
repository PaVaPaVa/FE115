console.log('Стили')

"use strict";

class User {
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
class Contacts {
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

class ContactsApp extends Contacts{  //наследуем класс
    constructor() {
        super();
        this.init();
    }
    init() {

        let mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'contacts');

        let formBase = document.createElement('form');
        formBase.setAttribute('class', 'cont_form');

        let baseTitle = document.createElement('h1');
        baseTitle.setAttribute('class', 'cont_title');
        baseTitle.innerText = 'База контактов'

        let contId = document.createElement('input');
        contId.setAttribute('type', 'text');
        contId.setAttribute('name', 'id');
        contId.setAttribute('class', 'cont_text_id');
        contId.setAttribute('placeholder', 'ID');

        let contName = document.createElement('input');
        contName.setAttribute('type', 'text');
        contName.setAttribute('name', 'name');
        contName.setAttribute('class', 'cont_text_name');
        contName.setAttribute('placeholder', 'ФИО');

        let contEmail = document.createElement('input');
        contEmail.setAttribute('type', 'email');
        contEmail.setAttribute('name', 'email');
        contEmail.setAttribute('class', 'cont_text_email');
        contEmail.setAttribute('placeholder', 'Email');

        let contAddress = document.createElement('input');
        contAddress.setAttribute('type', 'text');
        contAddress.setAttribute('name', 'address');
        contAddress.setAttribute('class', 'cont_text_address');
        contAddress.setAttribute('placeholder', 'Адрес');

        let contPhone = document.createElement('input');
        contPhone.setAttribute('type', 'tel');
        contPhone.setAttribute('name', 'phone');
        contPhone.setAttribute('class', 'cont_text_tel');
        contPhone.setAttribute('placeholder', 'Телефон');

        let formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.setAttribute('class', 'cont_button_submit');
        formButton.innerText = 'Сохранить';

        let contList = document.createElement('ul');
        contList.setAttribute('class', 'cont_list');
        this.contList = contList;

        formBase.append(contId, contName, contEmail,  contAddress, contPhone, formButton);

        mainContainer.append(baseTitle, formBase, contList)

        document.body.append(mainContainer);

        this.textInputs = [contId, contName, contEmail, contAddress, contPhone];

        formBase.addEventListener('submit', (e) => {
            this.onAdd(e);
        });

        /// КУКИ ///
        let cookie = this.getCookie('contactsExp');
        if(!cookie) {
            this.storage = [];
        }

        let dataStorage = this.storage;
        if (dataStorage === null || dataStorage.length === 0) {
            this.getData();
        } else {
            dataStorage.forEach(elem =>this.add(elem.data));
            this.createCont();
        }
    }

    onAdd(e) {
        e.preventDefault();

        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
        this.add(data);
        this.textInputs.forEach(elem => elem.value = '') //очищаем инпут после отправки
        this.createCont();
    }

    onRemove(itemId) {
        this.remove(itemId);
        this.createCont();
    }

    onEdit = function (contId, contName, contEmail, contAddress, contPhone) {
        contId.setAttribute('contenteditable', 'true');
        contName.setAttribute('contenteditable', 'true');
        contEmail.setAttribute('contenteditable', 'true');
        contAddress.setAttribute('contenteditable', 'true');
        contPhone.setAttribute('contenteditable', 'true')
    }

    createCont() {

        this.contList.innerHTML = '';

        let dataList = this.getCont();

        for (let item in dataList) {
            let elem;
            elem = dataList[item].get();

            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'cont_list_item');

            let listId = document.createElement('div');
            listId.setAttribute('class', 'cont_list_item_id');
            let contId = document.createElement('span');
            contId.setAttribute('class', 'item item_id');
            contId.innerText = elem.id;
            contId.setAttribute('element-id', elem.id);
            listId.innerText = 'Id:';
            listId.append(contId);

            let listName = document.createElement('div');
            listName.setAttribute('class', 'cont_list_item_name');
            let contName = document.createElement('span');
            contName.setAttribute('class', 'item item_name');
            contName.innerText = elem.name;
            listName.innerText = 'Name: ';
            listName.append(contName);

            let listEmail = document.createElement('div');
            listEmail.setAttribute('class', 'cont_list_item_email');
            let contEmail = document.createElement('span');
            contEmail.setAttribute('class', 'item item_email');
            contEmail.innerText = elem.email;
            listEmail.innerText = 'Email: ';
            listEmail.append(contEmail);

            let listAddress = document.createElement('div');
            listAddress.setAttribute('class', 'cont_list_item_address');
            let contAddress = document.createElement('span');
            contAddress.setAttribute('class', 'item item_address');
            contAddress.innerText = elem.address;
            listAddress.innerText ='Address: ';
            listAddress.append(contAddress);

            let listPhone = document.createElement('div');
            listPhone.setAttribute('class', 'cont_list_item_tel');
            let contPhone = document.createElement('span');
            contPhone.setAttribute('class', 'item item_tel');
            contPhone.innerText = elem.phone;
            listPhone.innerText = 'Phone: ';
            listPhone.append(contPhone);

            let saveBtn = document.createElement("button");
            saveBtn.setAttribute('class', 'cont_list_item_save');
            saveBtn.innerText = 'Save'

            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'cont_list_item_edit');
            editBtn.innerText = 'Edit'

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'cont_list_item_remove');
            removeBtn.innerText = 'Delete';

            elemList.append(listId, listName, listEmail, listAddress, listAddress, listPhone, saveBtn, editBtn, removeBtn)
            this.contList.append(elemList);

            editBtn.addEventListener('click', _ => {
                this.onEdit(contId, contName, contEmail, contAddress, contPhone)
            })

            saveBtn.addEventListener('click', _ => {
                this.onSave(contId, contName, contEmail, contAddress, contPhone)
                contId.setAttribute('element-id', contId.innerText);
            })

            removeBtn.addEventListener('click', _ => this.onRemove(elem.id))
        }
        console.log(dataList)
        this.storage = this.data;
        //     /// КУКИ //// ТАЙМИНГ ------------------
        this.setCookie('contactsExp', 1, {'max-age': 14400});
    }

    get storage() {            ///------ Локальное хранилище GET/ SET-----------
        let storage = localStorage.getItem('contact');
        return JSON.parse(storage)
    }
    set storage(data) {
        let dataStorage = JSON.stringify(data);
        localStorage.setItem('contact', dataStorage)
    }

    saveNote(contId, contName, contEmail, contAddress, contPhone){
        let currentItemId = contId.getAttribute('element-id');
        let dataList = this.getCont();
        for (let item in dataList) {
            let elem = dataList[item].data;
            if (elem.id == currentItemId) {
                dataList[item].data = {
                    id: contId.innerText,
                    name: contName.innerText,
                    email: contEmail.innerText,
                    address: contAddress.innerText,
                    phone: contPhone.innerText
                }
            }
        }
        this.storage = this.data;
    }

    onSave = function (contId, contName, contEmail, contAddress, contPhone) {
        contId.setAttribute('contenteditable', 'false');
        contName.setAttribute('contenteditable', 'false');
        contEmail.setAttribute('contenteditable', 'false');
        contAddress.setAttribute('contenteditable', 'false');
        contPhone.setAttribute('contenteditable', 'false');
        this.saveNote(contId, contName, contEmail, contAddress, contPhone);
    }

    //API start
    async getData() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let dataApi = [];
        await fetch(url).then(response => {
            if (response.status === 200) {
                return response.json();
            }
        }).then(json => json.map(data => dataApi.push(data)))
        const formattedData = this.formatData(dataApi);
        formattedData.forEach(elem =>this.add(elem.data))
        this.createCont();
    }

    formatData = function(data) {
        return data.map(d => {
            let {id, name, email,address:{city}, phone} = d;
            return {data: {id, name, email,address: city, phone}}
        })
    }
/// API end

//// КУКИ start
    getCookie(name) {
        document.cookie = "user=John"; // обновляем только куки с именем 'user'
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    setCookie(name, value, options = {}) {

        options = {
          path: '/',
          samesite: 'strict',
          // при необходимости добавьте другие значения по умолчанию
          ...options
        };

        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }

        document.cookie = updatedCookie;
    }
//// КУКИ end
}

const myContactsApp = new ContactsApp()
