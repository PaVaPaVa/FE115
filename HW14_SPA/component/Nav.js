import { widget } from "./Card.js";

function Nav(){
    const elem = document.createElement('div');
    elem.classList.add('navigation');
    elem.innerHTML = `
        <nav class ="nav">
            <ul>
                <li><a href="\">Home</a></li>
                <li><a href="#catalog">Catalog</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
        ${widget.outerHTML}
    `
    this.init = () => {
        return elem;
    }

}

export default new Nav().init()