let $ = document.createElement.bind(document);
let sectionParagrafo = $('section');
let container = $('div');
let paragrafo = $('p');

paragrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus ducimus eos magni exercitationem expedita veritatis illo velit, sequi optio veniam quia iure earum placeat asperiores unde eveniet nobis est!";

sectionParagrafo.classList.add('sectionParagrafo');
container.classList.add('container');
paragrafo.classList.add('paragrafoACrescer');

document.body.appendChild(sectionParagrafo);
sectionParagrafo.appendChild(container);
container.appendChild(paragrafo);






