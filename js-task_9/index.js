let doc = document,
    head = doc.head;
doc.querySelector("html").setAttribute("lang", "en");

let metaCod = doc.createElement("meta");
metaCod.setAttribute("charset", "UTF-8");
let metaView = doc.createElement("meta");
metaView.setAttribute("name", "viewport");
metaView.setAttribute("content", "width=device-width, initial-scale=1.0");

let title = doc.createElement("title");
title.innerHTML = "Document";

let link = doc.createElement("link");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap");
link.setAttribute("rel", "stylesheet");

let arrElemHead = [metaCod, metaView, title, link];
    for(i=0; i < arrElemHead.length; i++) {
        head.appendChild(arrElemHead[i]);
}

// body 
let div = doc.createElement("div"),
    divPage = div.cloneNode();

divPage.classList.add("page");
let script = doc.querySelector("script");
doc.body.insertBefore(divPage, script);

// header start
let header = doc.createElement("header"),
    headerContainer = doc.createElement("div");
divPage.appendChild(header).appendChild(headerContainer);
header.classList.add("header");
headerContainer.classList.add("container");

let h1 = doc.createElement("h1"),
    p = doc.createElement("p");
headerContainer.appendChild(h1);
headerContainer.appendChild(p);
h1.innerHTML = "Choose Your Option";
p.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";

// header end --- > section start

let section = doc.createElement("section"),
    sectionContainer = doc.createElement("div"),
    containerCreatWrap = doc.createElement("div"),
// Block_1
    creatWrapBlock = doc.createElement("div"),
    wrapBlockName = doc.createElement("div"),
    h2_creatWrapBlock = doc.createElement("h2"),
    p_creatWrapBlock = doc.createElement("p"),
    button_creatWrapBlock = doc.createElement("button");

divPage.appendChild(section).appendChild(sectionContainer).appendChild(containerCreatWrap).appendChild(creatWrapBlock)
.appendChild(wrapBlockName);

let arrElemCreatWrapBlock = [h2_creatWrapBlock, p_creatWrapBlock, button_creatWrapBlock];
    for(i=0; i < arrElemCreatWrapBlock.length; i++) {
        creatWrapBlock.appendChild(arrElemCreatWrapBlock[i]);
    };

section.classList.add("creator");
sectionContainer.classList.add("container");
containerCreatWrap.classList.add("creator__wrapper");
// Block_1
creatWrapBlock.classList.add("creator__block");
wrapBlockName.classList.add("creator_name");
button_creatWrapBlock.classList.add("button");
wrapBlockName.innerHTML = "Freelancer";
h2_creatWrapBlock.innerHTML = "Initially designed to ";
p_creatWrapBlock.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";
button_creatWrapBlock.innerHTML = "Start here";

// end Block_1 --> start Block_2

let blockActive = doc.createElement("div"),
    blockActiveName = doc.createElement("div"),
    h2_blockActive = doc.createElement("h2"),
    p_blockActive = doc.createElement("p"),
    button_blockActive = doc.createElement("button");

containerCreatWrap.appendChild(blockActive);
blockActive.classList.add("creator__block", "creator__block_active");

let arrElemBlockActive = [blockActiveName, h2_blockActive, p_blockActive, button_blockActive];
    for(i=0; i < arrElemBlockActive.length; i++) {
        blockActive.appendChild(arrElemBlockActive[i]);
    };

blockActiveName.classList.add("creator_name");
button_blockActive.classList.add("button");
blockActiveName.innerHTML = "Studio";
h2_blockActive.innerHTML = "Initially designed to ";
p_blockActive.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";
button_blockActive.innerHTML = "Start here";

/// end Block_2 --->  end section ;) Ура!


// STYLE

let allElements = doc.querySelectorAll('*')
allElements.forEach(item => {
    item.style.cssText =` 
    padding: 0;
    margin: 0;
    box-sizing: border-box;`
});


doc.body.style.cssText =
`font-family: "Open Sans", sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 26px;
color: #9FA3A7;`;

h1.style.cssText =
`font-size: 36px;
line-height: 48px;
font-family: Arvo;
font-style: normal;
font-weight: normal;
color: #212121;
margin-bottom: 10px;`

h2_creatWrapBlock.style.cssText =
`font-size: 36px;
line-height: 48px;
font-family: Arvo;
font-style: normal;
font-weight: normal;
color: #212121;
margin-bottom: 25px;`

h2_blockActive.style.cssText =
`font-size: 36px;
line-height: 48px;
font-family: Arvo;
font-style: normal;
font-weight: normal;
color: white;
margin-bottom: 25px;`;

button_creatWrapBlock.style.cssText =
`background: none;
border: 0;`;
button_blockActive.style.cssText =
`background: none;
border: 0;`;

let arrButton = doc.getElementsByClassName('button');
    for(i=0; i < arrButton.length; i++) {
        arrButton[i].style.cssText =
        `font-family: Montserrat;
        background: white;
        letter-spacing: 2.4px;
        font-size: 12px;
        border: 3px solid #FFC80A;
        padding: 17px 33px;
        font-weight: bold;
        color: #212121;
        text-transform: uppercase;
        border-radius: 50px;`;
};

let arrPage = doc.getElementsByClassName('page');
    for(i=0; i < arrPage.length; i++) {
        arrPage[i].style.cssText =`min-width: 800px;`
    };

let arrContainer = doc.getElementsByClassName('container');
    for(i=0; i < arrContainer.length; i++) {
        arrContainer[i].style.cssText =
        `width: 800px;
        margin: 0 auto;
        text-align: center;`
    };

let arrHeader = doc.getElementsByClassName('header');
    for(i=0; i < arrHeader.length; i++) {
        arrHeader[i].style.cssText =
        `margin-top: 122px;
        margin-bottom: 55px;`
    };

let arrCreator = doc.getElementsByClassName('creator');
    for(i=0; i < arrCreator.length; i++) {
        arrCreator[i].style.marginBottom = "122px"; 
    }

let arrCreatorWrap = doc.getElementsByClassName('creator__wrapper');
    for(i=0; i < arrCreatorWrap.length; i++) {
        arrCreatorWrap[i].style.display = 'flex'; 
    }

let arrCreatorBlock = doc.getElementsByClassName('creator__block');
    for(i=0; i < arrCreatorBlock.length; i++) {
        arrCreatorBlock[i].style.cssText =
        `border: 1px solid #E8E9ED;
        padding: 81px;`
    };

let arrBlockActive = doc.getElementsByClassName('creator__block_active');
    for(i=0; i < arrBlockActive.length; i++) {
        arrBlockActive[i].style.borderColor = '#8F75BE';
        arrBlockActive[i].style.background = '#8F75BE';
        arrBlockActive[i].style.color = '#FFFFFF';
};

let arrCreateName = doc.getElementsByClassName('creator_name');
    for(i=0; i < arrCreateName.length; i++) {
        arrCreateName[i].style.cssText =
        `text-transform: uppercase;
        font-family: Montserrat;
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: 2.4px;
        margin-bottom: 19px;`
    };

let blockFirst = doc.querySelectorAll('.creator__block:first-child');
    blockFirst.forEach(item => {
        item.style.borderTopLeftRadius = '10px';
        item.style.borderBottomLeftRadius = '10px';
    });

let blockLast = doc.querySelectorAll('.creator__block:last-child');
    blockLast.forEach(item => {
        item.style.borderTopRightRadius = '10px';
        item.style.borderBottomRightRadius = '10px';
    }); 

let arrBlockActiveCN = doc.querySelectorAll('.creator__block_active .creator_name');
    arrBlockActiveCN.forEach(item => {
        item.style.color = '#FFC80A';
    });

let arrBlockActiveBut = doc.querySelectorAll('creator__block_active .button');
    arrBlockActiveBut.forEach(item => {
        item.style.color = '#fff;';
    });

let arrCreateBlockP = doc.querySelectorAll('.creator__block p');
    arrCreateBlockP.forEach(item => {
        item.style.cssText = 
        `margin-bottom: 58px;
        font-size: 12px;
        line-height: 22px;`
    });

button_blockActive.style.background = '#8F75BE';
button_blockActive.style.color = 'white';

/// СОБЫТИЯ ---- >>>
doc.querySelector('.button').addEventListener('mouseenter', e => {
    e.target.style.background = '#8F75BE';
    e.target.style.color = 'white';
    e.target.style.cursor ='pointer';
    e.target.style.transform = 'scale(1.1)';
});

doc.querySelector('.button').addEventListener('mouseleave', e => {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
    e.target.style.transform = 'scale(1)';
});

button_blockActive.addEventListener('mouseenter', e => {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
    e.target.style.cursor ='pointer';
    e.target.style.transform = 'scale(1.1)';
});

button_blockActive.addEventListener('mouseleave', e => {
    e.target.style.background = '#8F75BE';
    e.target.style.color = 'white';
    e.target.style.cursor ='pointer';
    e.target.style.transform = 'scale(1)';
});

// ГЕНЕРАТОР СЛУЧАЙНОГО ФОНА body ПРИ клике на любую из кнопок.

bgChange =function() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    doc.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
};

let buttons = doc.querySelectorAll('.button');
buttons.forEach(function(element){
    console.log(element);
    element.addEventListener('click', bgChange);
});