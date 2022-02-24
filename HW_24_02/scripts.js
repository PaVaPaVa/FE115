console.log('Домашка tab')
const doc = document;
const tabs = function (selector) {
    const tabsContainer = doc.querySelector(selector).children;
    console.log(tabsContainer);

    let tabs = doc.querySelector('.tab').children;
    console.log(tabs);
    if(tabs.length === 0) return;

    let tabContent = doc.querySelector('.tabs_content').children;
    if(tabContent.length === 0 || tabContent.length !== tabs.length) return;

    [...tabs].map((elem, i) => {
        elem.addEventListener('click', function(event) {
            show(event, i);
        })
    });
    function show(event, i) {
        [...tabs].map((elem, i) => {
            elem.classList.remove('active');
            tabContent[i].classList.remove('active')
        })
        tabs[i].classList.add('active');
        tabContent[i].classList.add('active');
    };

};
tabs('.container_tabs')

function tooltip() {
    let elements = doc.querySelectorAll('.tooltip');
    elements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            createToolTip(e)
        })
        element.addEventListener('mouseleave', function(e) {
            deleteToolTip(e)
        })

    });

    function createToolTip(e) {
        console.log(e.target.value);
        let toolDiv = doc.createElement('div');
        toolDiv.setAttribute('class', 'tooltip-element')
        toolDiv.textContent = e.target.attributes[1].value

        e.target.append(toolDiv)
    }

    function deleteToolTip() {
        doc.querySelector(".tooltip-element").remove()
    }
}
tooltip()