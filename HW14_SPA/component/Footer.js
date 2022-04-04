function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer');
    elem.innerHTML = `
    <div class='logo'>
        <a href ="\">
            <img src="img/logo.png">
        </a>
    </div>
    <div class='phone'>+37529 777 66 66</div>
    <div class='address'>г.Брест, ул.Победы,75</div>
    `
    this.init = () => {
        return elem;
    }

}

export default new Footer().init()