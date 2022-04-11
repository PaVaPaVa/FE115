function Card(){
    this.card = [];
    this.totalPrice = 0;
    this.prices = [];
    this.title = 'Card';
    const elem = document.createElement('div');
    elem.classList.add('card');
    elem.innerHTML = `
    <div class='about__content'>
        <h2>Корзина</h2>
    </div>
    `
    const cardItems = document.createElement('div');
    cardItems.classList.add('card_items')
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total_price');
    //////// - очистка корзины
    let btnRemoveAll = document.createElement('button');
    btnRemoveAll.classList.add('btn_removeAll');
    btnRemoveAll.innerHTML = `Очистить корзину`;
    btnRemoveAll.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.clear();
        //addCard();
        location.reload();
    })
    ///////- очистка корзины
    this.render= () => {
        cardItems.innerHTML = '';
        this.prices = [];
        this.card.forEach(data => {
            let cardItem = document.createElement('div')
            cardItem.classList.add('card_item')
            cardItem.innerHTML = `
                <div class="item_image">
                    <img src="${data.image}" alt="#">
                </div>
                <div>
                    <h3>${data.title}</h3>
                </div>
            `
            let tPrice = document.createElement('div');
            tPrice.classList.add('t_price');
            tPrice.innerText =`${data.price * (data.count ? data.count : 1)} $`;
            this.prices.push(parseFloat(tPrice.innerText));  /// используем т.к. есть знаки, кроме чисел


            let counter = document.createElement('input');
            counter.setAttribute('type','number');
            counter.setAttribute('min','1');
            counter.value = data.count ? data.count : 1;

            counter.addEventListener('change', () => {
                if(counter.value > 0) {
                    data.count = +counter.value;
                    this.render();
                    localStorage.setItem('card', JSON.stringify(this.card))
                } else {
                    counter.value = 1;
                }
            })

            let btnRemove = document.createElement('button');
            btnRemove.classList.add('btn_remove');
            btnRemove.innerHTML = `X`;

            cardItem.append(tPrice, counter, btnRemove);
            ////------------------------------------------ УДАЛЕНИЕ ЭЛЕМЕНТОВ по одному -----------////
            this.cardRemove = (id) => {
                this.card = this.card.filter(data => data.id !== id);
                this.render();
                localStorage.setItem('card', JSON.stringify(this.card));
                location.reload();
            }
            ////----------------------------------------------------------------------------------//// 
            cardItems.append(cardItem, btnRemoveAll);   
            btnRemove.addEventListener('click', _ => (this.cardRemove(data.id)))
        })
        console.log(this.prices);
        totalPrice.innerText =`Итого: ${this.prices.reduce((count, item) => count + item, 0).toFixed(2)} $`;
        elem.append(cardItems,totalPrice);
        return elem
    }

    this.cardWidget =() => {
        let elem = document.createElement('div');
        elem.classList.add('card_widget')
        elem.innerHTML = `
        <a class ="basket" href="#card"></span><img src="img/basket.png"><div class ="count">${this.card.length}</div></a>
        ` 
        return elem;
    }

    this.addCard = (obj) => {
        console.log(obj)
        if(obj){
            obj.counter = 1;
            this.card.push(obj);
        }

        let count = document.querySelector('.count');
        count.innerText = this.card.length;
        localStorage.setItem('card', JSON.stringify(this.card)) /// локальное хранилище помещаем card
        let flag = this.card.some(data => data.id === obj.id) 
        console.log(flag);
        return flag;
    }
    
    this.init = () => {
        
        if(localStorage.getItem('card')){
            this.card = JSON.parse(localStorage.getItem('card'))
        }
        return this.render();
    }

}
let elem = new Card();
let init = elem.init();
let widget = elem.cardWidget();
let addCard = elem.addCard;
let title = elem.title;
export default elem;
export {widget, addCard, title}