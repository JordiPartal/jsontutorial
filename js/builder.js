let content;

async function onLoad() {
    try {
        await getJsonData();
        addItem("body", "div");
        setId("body", 2, "main");

        addItems(isId("main"), 5, "div");
        setId(isId("main"), 0, "intro");
        setId(isId("main"), 1, "structure");

        addItem(isId("intro"), "h2");
        addItem(isId("intro"), "p");
        addTxtInto(isId("intro"), 0, "Introducción");
        addTxtInto(isId("intro"), 1, content.introduction);

        addItem(isId("structure"), "h2");
        addItem(isId("structure"), "p");
        addItem(isId("structure"), "div");
        addTxtInto(isId("structure"), 0, "Tipos de datos");
        addTxtInto(isId("structure"), 1, content.datatype);

        setId(isId("structure"), 2, "datatype");

    } catch (e) {
        console.log(e.message);
    }
}

function getJsonData() {
    return fetch("./js/json/contenido.json")
        .then(response => response.json())
        .then(json => {
            content = json;
        })
        .catch(error =>{
            console.log(error.message);
        });
}

function addItems(domItemParent, max, domItemChild) {
    for (let count = 0; count < max; count++) {
        addItem(domItemParent, domItemChild);
    }
}

function addItem(domItemParent, domItemChild) {
    let parent = getItemNode(domItemParent);
    let inside = document.createElement(domItemChild);
    parent.appendChild(inside);
}

function addTxtInto(domItemParent, child, txt) {
    getItemNode(domItemParent).children.item(child).innerHTML = txt;
}

function getItemNode(domItem) {
    return document.querySelector(domItem);
}

function setId(domItem, child, identifier) {
    getItemNode(domItem).children.item(child).setAttribute('id', identifier);
}

function setClass(domItem, child, identifier) {
    getItemNode(domItem).children.item(child).setAttribute('class', identifier);
}

function isId(domItem) {
    return "#".concat(domItem);
}

function isClass(domItem) {
    return ".".concat(domItem);
}