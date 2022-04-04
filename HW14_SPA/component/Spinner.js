export default function spinner() {
    let spinner = document.createElement('div');
    spinner.classList.add('loader');
    spinner.innerHTML = 'Loading...'

    return spinner;
}