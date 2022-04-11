
function About(){
    this.title = 'About';
    const elem = document.createElement('div');
    elem.classList.add('about');
    elem.innerHTML = `
    <div class='about__content'>
        <h2>About</h2>
        <p>Найти нас можно тут!</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.5463575900167!2d23.695932508370266!3d52.0856917748447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c0223630975%3A0x4d319ea41f64ae99!2z0JHRgNC10YHRgg!5e0!3m2!1sru!2sby!4v1649061005863!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `
    this.init = () => {
        return elem;
    }

}

let elem = new About();
let init = elem.init();
let title = elem.title;

export default elem;
export {title};
