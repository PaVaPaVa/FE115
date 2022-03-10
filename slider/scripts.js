const slider = function(className) {
    let container = document.querySelector(className);
    let ul = document.querySelector('ul');
    if(!ul) return
    let sliderItems = ul.querySelectorAll('li');
    if(!sliderItems || !(sliderItems.length > 1)) return

    const next = function(event) {
        let saveNext = event.target.classList.contains('btn-next') ? 'next' : 'prev';
        console.log(saveNext);
        let x = ul.style.transform || '0';
        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x));
        console.log(x);
        if(saveNext === 'next' && x < ((sliderItems.length * 100) -100)) {
            if(x < ((sliderItems.length * 100) -100)) x += 100;
            else x = 0
        }
        if(saveNext === 'prev') {
            if(x > 0) x -= 100;
            else x = (sliderItems.length * 100) - 100;
        }
        ul.style.transform = `translateX(-${x}%)`


    }
    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', next));

}
slider('.my-slider');