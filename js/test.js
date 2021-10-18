/**
 * Pictogramas PICTOS
 * Núcleo de Investigación en Accesibilidad e Inclusión PUCV
 */

let data;
let manifestSelect;
let container;

function setup() {
    manifestSelect = createSelect();
    manifestSelect.option('ES');
    manifestSelect.option('EN');
    manifestSelect.value('ES');
    manifestSelect.changed(defineData);
    manifestSelect.class('huge');

    container = createDiv();
    container.id('container');


    defineData();
}

function defineData(){

    let path;
    if(manifestSelect.value() === 'ES'){
        path = "../public/es/manifest.json";
    }else{
        path ="../public/en/manifest.json";
    }
    data = loadJSON(path, gotData, "json");
}

function draw() {}

function gotData() {
    document.getElementById('container').innerHTML = "";
    let mainTitle = createElement('h1', data.title);
    let mainP = createElement('p', data.description);
    mainTitle.parent('container');
    mainP.parent('container');
    for (let key in data.properties.pictos) {
        let picto = data.properties.pictos[key];
        let pictoDiv = createDiv();
        pictoDiv.parent('container');
        let setId = manifestSelect.value() + key;
        pictoDiv.id(setId);
        pictoDiv.class('picto capa'+picto.layer);
        let title = createElement('h3', picto.label);
        title.parent(setId);
        let img = createImg("../dist/"+picto.path, picto.label);
        img.class('pictogram layer'+picto.layer);
        img.parent(setId);
        let tagContainer = createDiv('<h4>Tags</h4>');
        tagContainer.parent(setId);
        tagContainer.class('tags');
        let tags = picto.tags;
        for(index in tags){
            let tag = tags[index];
            let t = createSpan(tag);
            t.class('tag');
            t.parent(tagContainer);
        }
       let catContainer = createDiv('<h4>Categories</h4>');
       catContainer.parent(setId);
       catContainer.class('tags');
       let cats = picto.category;
        for(index in cats){
            let cat = cats[index];
            let c = createSpan(cat);
            c.class('tag');
            c.parent(catContainer);
        }
    }
    
}