import {CatalogData} from "./CatalogApi.js";
import spinner from "./spinner.js";
function Catalog(){
    this.title = 'Catalog';
    const elem = document.createElement('div');
    elem.classList.add('catalog');
    elem.innerHTML = `<h2>Каталог</h2>`
    const container = document.createElement('div');
    container.classList.add('catalog__container');
    let data = [];

    const render = async () => {
        let spin = spinner();
        container.append(spin);
        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard)
        data = await CatalogData();
        container.removeChild(spin);
        data.forEach(data => {
        let productCard = document.createElement('div');
        productCard.classList.add('card');
        let imgLink = document.createElement('a');
        imgLink.setAttribute('href', `#catalog/${data.id}`);
        let img = document.createElement('img');
        img.classList.add('card_img');
        img.setAttribute('src', data.image);
        imgLink.append(img);
        let title = document.createElement('h3');
        title.classList.add('card_title');
        let titleLink = document.createElement('a');
        titleLink.setAttribute('href', `#catalog/${data.id}`);
        titleLink.innerText = data.title;
        title.append(titleLink);
        let priceCard = document.createElement('p');
        priceCard.classList.add('card_price');
        priceCard.innerText = `${data.price} $`;
        let category = document.createElement('p');
        category.classList.add('card_category');
        category.innerHTML = `
            <div class="catalog__section">Раздел:
                <span>${data.category}</span>
            </div>`;
        let btnAdd = document.createElement('button');
        if(localCard && localCard.some(d => d.id === data.id)){
            btnAdd.innerText = 'В корзине';
            btnAdd.disabled = true;
        } else btnAdd.innerText = 'В корзину';

        productCard.append(imgLink,title,priceCard,category,btnAdd);
        container.append(productCard)

            btnAdd.addEventListener('click', () => {
            import('./Card.js')
                .then(module => {
                    if(module.addCard(data)) {
                        btnAdd.innerText = 'В корзине';
                        btnAdd.disabled = true;
                    }
                })
            })
        });

    }

    render();

    elem.append(container);

    this.init = () => {
        return elem;
    }

}

let elem = new Catalog();
let init = elem.init();
let title = elem.title;

export default init;
export {title};
