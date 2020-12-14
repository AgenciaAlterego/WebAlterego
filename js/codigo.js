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
        botonera.remove();
    }

    let seccionNosotros = d.getElementById('Nosotros');
    if (seccionNosotros) {
        seccionNosotros.remove();
    }

    let botonVolver = d.getElementById('botonVolver');
    if (botonVolver) {
        botonVolver.remove();
    }

}

function GenerarHome() {

    // Primero vacío mainTitle mainParagraph y mainShowcase
    VaciarCanvas();

    // Ahora cargo el contenido

    mainTitle.innerHTML = 'Somos tu mejor versión';
    mainParagraph.innerHTML = 'Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos. <br> Por eso es bueno saber que tenés un Álterego dando tu mejor versión.';

    let botonera = d.createElement('div');
    botonera.id = 'mainBotonera';

    let botonReel = d.createElement('a');
    botonReel.innerHTML = 'Mirá nuestro reel';
    botonReel.href = 'https://www.youtube.com/watch?v=BtFUWzs3HC8';
    botonReel.target = 'blank';
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
            block.dataset.tituloDeTrabajo = trabajo.titulo;
            block.addEventListener('click', GenerarTrabajo);

            blockContent = d.createElement('img');
            blockContent.src = trabajo.imgPrincipal;
            blockContent.title = trabajo.titulo;
            blockContent.alt = trabajo.titulo;

            block.appendChild(blockContent);


            section.appendChild(block);

        }

        mainShowcase.appendChild(section);

    }


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









/**
 * *****************************************************************
 * 
 * Generación de vistas de trabajos
 * 
 * *****************************************************************
 */


function GenerarTrabajo() {
    console.log('quiero generar un trabajito');


    // Primero vacío mainTitle mainParagraph y mainShowcase
    VaciarCanvas();

    // 

    mainTitle.innerHTML = this.dataset.tituloDeTrabajo;

    for (let tipoDeTrabajo of aTrabajos) {
        //recorro todo el array de trabajos
        if (tipoDeTrabajo.tipoDeTrabajo == this.dataset.tipoDeTrabajo) {
            //Busco el típo de trabajo correpondiente
            for (let trabajo of tipoDeTrabajo.trabajos) {
                //Recorro todos los trabajos de ese tipo
                if (trabajo.titulo == this.dataset.tituloDeTrabajo) {
                    //Encontré el trabajo!
                    mainParagraph.innerHTML = trabajo.descripcion;

                    // Creo la sección (que tiene flex)
                    let section = d.createElement('section');


                    //Cargo primero su imagen principal

                    let block = d.createElement('span');
                    block.className = 'showcase2Box';
                    block.style.backgroundImage = `url(${trabajo.imgPrincipal})`;
                    block.title = trabajo.titulo;
                    block.style.cursor = 'pointer';
                    block.dataset.tipoContenido = 'imagen';
                    block.dataset.contenido = trabajo.imgPrincipal;
                    block.addEventListener('click', AbrirModal);

                    let blockContent = d.createElement('img');
                    blockContent.src = trabajo.imgPrincipal;
                    blockContent.title = trabajo.titulo;
                    blockContent.alt = trabajo.titulo;

                    block.appendChild(blockContent);
                    section.appendChild(block);

                    //Ahora recorro y cargo todas sus img secundarias
                    //Primero me aseguro que exista contenido adicional
                    if (trabajo.contenidoAdicional) {
                        for (let contenido of trabajo.contenidoAdicional) {

                            block = d.createElement('span');
                            block.style.cursor = 'pointer';

                            if (contenido.includes('youtu')) {
                                // El contenido es un video de youtube
                                block.className = 'showcaseBox';

                                contenido = contenido.replace('watch?v=', 'embed/');
                                let regex = new RegExp('\&(.*)');
                                contenido = contenido.replace(regex, '');

                                block.dataset.tipoContenido = 'video';
                                block.dataset.contenido = contenido;
                                block.addEventListener('click', AbrirModal);

                                let blockContent = d.createElement('iframe');
                                blockContent.src = contenido;
                                //blockContent.frameBorder = '0';

                                block.appendChild(blockContent);

                            } else if (contenido.includes('.com') || contenido.includes('www.') || contenido.includes('http')) {
                                // El contenido es una página web
                                block.className = 'showcaseBox';

                            } else {
                                // El contenido es una imagen
                                block.className = 'showcaseBox';
                                block.style.backgroundImage = `url(${contenido})`;
                                block.title = trabajo.titulo;
                                block.dataset.tipoContenido = 'imagen';
                                block.dataset.contenido = contenido;
                                block.addEventListener('click', AbrirModal);

                                let blockContent = d.createElement('img');
                                blockContent.src = contenido;
                                blockContent.title = trabajo.titulo;
                                blockContent.alt = trabajo.titulo;

                                block.appendChild(blockContent);
                            }

                            section.appendChild(block);
                        }

                        mainShowcase.appendChild(section);
                    }
                }
            }
        }
    }

    let botonVolver = d.createElement('a');
    botonVolver.id = 'botonVolver';
    botonVolver.innerHTML = '> VOLVER <';
    botonVolver.addEventListener('click', GenerarHome);

    main.appendChild(botonVolver);


    console.log();
    console.log();



}


/**
 * *****************************************************************
 * 
 * Modal
 * 
 * *****************************************************************
 */

function AbrirModal(e) {
    e.preventDefault();

    let canvas = d.createElement('div');
    canvas.id = 'modalCanvas';

    let closebtn = d.createElement('span');
    closebtn.id = 'modalCerrar';
    closebtn.addEventListener('click', CerrarModal);
    let closebtnTxt = d.createElement('p');
    closebtnTxt.innerHTML = 'X';

    closebtn.appendChild(closebtnTxt);
    canvas.appendChild(closebtn);

    let visor = d.createElement('div');
    visor.id = 'modalVisor';

    if (this.dataset.tipoContenido == 'imagen') {
        let imagen = d.createElement('img');
        imagen.src = this.dataset.contenido;
        imagen.title = this.title;
        imagen.alt = this.title;
        visor.appendChild(imagen);
    } else if (this.dataset.tipoContenido == 'video') {
        let iframe = d.createElement('iframe');
        iframe.src = this.dataset.contenido;
        visor.appendChild(iframe);
    }

    canvas.appendChild(visor);
    d.body.appendChild(canvas);

}

function CerrarModal() {
    let modal = d.getElementById('modalCanvas');
    modal.remove();
}




/**
 * *****************************************************************
 * 
 * Armado de Navegación superior
 * 
 * *****************************************************************
 */

// Creo las interacciones del nav:
let navElements = d.querySelectorAll('header nav ul li a');

for (let nroElemento in navElements) {

    switch (nroElemento) {
        case '0':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome();
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '1':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome();
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '2':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome();
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '3':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome();
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '4':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome();
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '5':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById('Nosotros')) {
                    navigateTo('Nosotros');
                } else {
                    GenerarHome();
                    navigateTo('Nosotros');
                }
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
                        posInicial = posDestino - 110;
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
                        posInicial = posDestino - 110;
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