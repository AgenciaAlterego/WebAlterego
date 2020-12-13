'use strict'

const d = document;
const mainTextBlock = d.getElementById('mainTextBlock');
const mainTitle = d.getElementById('mainTitle');
const mainParagraph = d.getElementById('mainParagraph');
const mainShowcase = d.getElementById('mainShowcase');


function VaciarCanvas() {
    while (mainTitle.firstChild) {
        mainTitle.removeChild(mainTitle.firstChild);
    }
    while (mainParagraph.firstChild) {
        mainParagraph.removeChild(mainParagraph.firstChild);
    }
    while (mainShowcase.firstChild) {
        mainShowcase.removeChild(mainShowcase.firstChild);
    }

    let botonera = d.getElementById('mainBotonera');
    if (botonera) {
        botonera.remove;
    }

}

function GenerarHome() {

    // Primero vacío mainTitle mainParagraph y mainShowcase
    VaciarCanvas();

    // Ahora cargo el contenido

    mainTitle.innerHTML = 'Somos tu mejor versión';
    mainParagraph.innerHTML = 'Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos <br> Por eso es bueno saber que tenés un Álterego dando tu mejor versión.';

    let botonera = d.createElement('div');
    botonera.id = 'mainBotonera';

    let botonReel = d.createElement('a');
    botonReel.innerHTML = 'Mirá nuestro reel';
    botonReel.href = 'https://www.youtube.com/watch?v=BtFUWzs3HC8';
    botonReel.className = 'boton';
    botonera.appendChild(botonReel);

    let spacer = d.createElement('span');
    spacer.className = 'spacer';
    botonera.appendChild(spacer);

    let botonContacto = d.createElement('a');
    botonContacto.innerHTML = 'Contacto';
    botonContacto.href = '';
    botonContacto.addEventListener('click', GenerarNosotros);
    botonContacto.className = 'boton';
    botonera.appendChild(botonContacto);

    mainTextBlock.appendChild(botonera);

    //console.log('llegué antes del for');
    //console.log(aTrabajos);

    // Loop de carga de datos
    for (let tipoDeTrabajo of aTrabajos) {
        console.log('entre al loop de carga de datos');

        let section = d.createElement('section');
        switch (tipoDeTrabajo.tipoDeTrabajo) {
            case '3D':
                section.id = '3D';
                break;
            case 'Motion':
                section.id = 'Motion';
                break;
            case 'Diseño e Ilustración':
                section.id = 'Diseño e Ilustración';
                break;
            case 'Diseño e Ilustración':
                section.id = 'Diseño e Ilustración';
                break;
            case 'Publicidad':
                section.id = 'Publicidad';
                break;
            case 'Apps y Webs':
                section.id = 'Apps y Webs';
                break;
        }


        //Primero creo la cabecera de este tipo de trabajo
        let block = d.createElement('span');
        block.className = 'showcase2Box';
        let blockHeader = d.createElement('h2');
        blockHeader.innerHTML = tipoDeTrabajo.tituloDeSeccion;
        block.appendChild(blockHeader);
        section.appendChild(block);

        block = d.createElement('span');
        block.className = 'showcaseBox';
        let blockContent = d.createElement('img');
        blockContent.src = 'imgs/isotipo_ae-white.svg';
        blockContent.style.width = '100%';
        blockContent.style.margin = '0';
        blockContent.style.padding = '0';
        block.appendChild(blockContent);
        section.appendChild(block);

        

        for (let trabajo of tipoDeTrabajo.trabajos) {
            // Ahora cargo todos los trabajos por bloque
            block = d.createElement('span');
            block.className = 'showcaseBox';

            blockContent = d.createElement('img');
            blockContent.src = trabajo.imgPrincipal;
            blockContent.style.width = '100%';
            blockContent.style.margin = '0';
            blockContent.style.padding = '0';
            block.appendChild(blockContent);

            section.appendChild(block);

            
        }

        mainShowcase.appendChild(section);
    }
}

function GenerarNosotros() {

}



d.onload = GenerarHome();