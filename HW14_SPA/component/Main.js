import product from "./ProductCard.js";
function Main(){
    let elem = document.createElement('div');
    elem.classList.add('main');
    /*elem.innerHTML = `
    <div class='main__content'>
        <h2>Home</h2>
        <p>Наша главная страница.</p>
    </div>
    `*/
    const routing = async () => {
        let hash =location.hash.slice(1);
        if(!hash) hash = 'home';
        if(hash.indexOf('/') !== -1) {
            elem.innerHTML = '';
            let index = hash.indexOf('/');
            let id = hash.slice(index + 1);
            let item = await product.render(id);
            document.title = product.title;
            elem.append(item);
        }
        import(`./${hash}.js`)
            .then(module => {
                elem.innerHTML = '';
                elem.append(module.default.init());
                document.title = module.title;
            });
    }

    window.addEventListener('hashchange', routing)
    this.init = () => {
        return elem;
    }

    window.addEventListener('load',() => {
        const a = document.querySelectorAll('a[href="\"]');
        a.forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                //location.hash = '';
                window.history.pushState('', '','http://127.0.0.1:5500/FE115/HW14_SPA/index.html');
                routing()
            })
        })
        routing()
    })

    this.init = () => {
        return elem;
    }
}

export default new Main().init()