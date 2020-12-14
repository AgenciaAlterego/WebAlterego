'use strict'


d.onload = GenerarHome();


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

    let seccionNosotros = d.getElementById('Nosotros');
    if (seccionNosotros) {
        seccionNosotros.remove;
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
    botonContacto.addEventListener('click', function () {
        navigateTo('Nosotros');
    });
    botonContacto.className = 'boton';
    botonera.appendChild(botonContacto);

    mainTextBlock.appendChild(botonera);

    //console.log('llegué antes del for');
    //console.log(aTrabajos);

    // Loop de carga de datos
    for (let tipoDeTrabajo of aTrabajos) {
        //console.log('entre al loop de carga de datos');

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
        block.style.backgroundImage = `url(imgs/isotipo_ae-white.svg)`;
        block.title = 'Isotipo Álterego';

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

            block.style.backgroundImage = `url(${trabajo.imgPrincipal})`;
            block.style.cursor = 'pointer';
            block.title = trabajo.titulo;
            block.dataset.tipoDeTrabajo = tipoDeTrabajo.tipoDeTrabajo;
            block.dataset.tituloDeTrabajo = tipoDeTrabajo.titulo;
            block.addEventListener('click', GenerarTrabajo);

            blockContent = d.createElement('img');
            blockContent.src = trabajo.imgPrincipal;
            blockContent.title = trabajo.titulo;
            blockContent.alt = trabajo.titulo;

            block.appendChild(blockContent);


            section.appendChild(block);

        }

        mainShowcase.appendChild(section);


        let seccionNosotros = d.createElement('section');
        seccionNosotros.id = 'Nosotros';

        /**
         * *****************************************************************
         * 
         * Pendiente completar esta sección, la de "Nosotros"
         * 
         * *****************************************************************
         */


        main.appendChild(seccionNosotros);


    }
}

function GenerarTrabajo(e) {
    console.log('quiero generar un trabajito');
    console.log(e);
}








/**
 * 
 * Armado de Navegación superior
 * 
 */



// Creo las interacciones del nav:
let navElements = d.querySelectorAll('header nav ul li a');

for (let nroElemento in navElements) {

    switch (nroElemento) {
        case '0':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
            });
            break;
        case '1':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
            });
            break;
        case '2':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
            });
            break;
        case '3':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
            });
            break;
        case '4':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
            });
            break;
        case '5':
            navElements[nroElemento].addEventListener('click', function () {
                navigateTo('Nosotros');
            });
            break;
    }
}

function navigateTo(anchor) {
    //console.log(anchor);

    // Posición del scroll:
    let posInicial = window.pageYOffset;
    let posDestino = d.getElementById(anchor).offsetTop;

    //console.log(posDestino);

    // Verificamos que el scroll no esté arriba de todo, de no ser así, animamos el scroll:
    if (posInicial != posDestino) {
        // Me fijo primero si está más arriba o más abajo del destino:
        if (posInicial > posDestino) {
            let fx = setInterval(
                () => {
                    posInicial -= 20;
                    // Cuando llega o supera los 0px, colocar en 0 y detener el intervalo:
                    if (posInicial <= posDestino) {
                        posInicial = posDestino;
                        clearInterval(fx);
                    }
                    window.scrollTo(0, posInicial);
                },
                5
            );
        } else {
            let fx = setInterval(
                () => {
                    posInicial += 25;
                    // Cuando llega o supera los 0px, colocar en 0 y detener el intervalo:
                    if (posInicial >= posDestino) {
                        posInicial = posDestino;
                        clearInterval(fx);
                    }
                    window.scrollTo(0, posInicial);
                },
                5
            );
        }


    }
    return false;

}