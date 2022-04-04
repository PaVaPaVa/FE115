function Home(){
    this.title = 'Home';
    const elem = document.createElement('div');
    elem.classList.add('home');
    elem.innerHTML = `
    <div class='home__content'>
        <h2>Home</h2>
        <div>
            <img class ="home_img" src="img/home.jpg">
        </div>
    </div>
    `
    this.init = () => {
        return elem;
    }

}

let elem = new Home();
let init = elem.init();
let title = elem.title;

export default init;
export {title};
