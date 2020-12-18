'use strict'

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

    /* Esto es solo para seminario, debería eliminarlo luego */
    let fraseFinal = d.getElementById('fraseFinal');
    if (fraseFinal) {
        fraseFinal.remove();
    }


}

function GenerarHome(tipoDeTrabajoSolcitado, offset) {
    // Tipo de trabajo puede venir vacío, en ese caso, tengo que renderear todo.
    // Si viene con algúna tipología de trabajo, entonces tengo qeu renderear solo eso.

    // Primero vacío mainTitle mainParagraph y mainShowcase
    VaciarCanvas();

    // Me aseguro que el logo no tenga "volver atras"
    let headerLogo = d.querySelector('header div img');
    headerLogo.className = '';
    headerLogo.onclick = null;
    /*
    //Tengo que hacerlo con onclick porque el addeventlistener se stackea, y no lo puedo borrar
    headerLogo.removeEventListener('click', function () {
        GenerarHome(tipoDeTrabajoSolcitado, offset);
    });
    */


    // Ahora cargo el contenido

    if (!tipoDeTrabajoSolcitado) {
        //Si entró acá, es porque no se solicitó un tipo de trabajo particular, entonces tengo que renderear todo.
        mainTitle.innerHTML = titularWeb;
        mainParagraph.innerHTML = bajadaWeb;

        let botonera = d.createElement('div');
        botonera.id = 'mainBotonera';

        let spacer = d.createElement('span');
        spacer.className = 'spacer';
        botonera.appendChild(spacer);

        let botonReel = d.createElement('a');
        botonReel.innerHTML = 'Mirá nuestro reel';
        botonReel.href = urlReel;
        botonReel.target = 'blank';
        botonReel.className = 'boton';
        botonera.appendChild(botonReel);

        let botonManifiesto = d.createElement('a');
        botonManifiesto.innerHTML = 'Mirá nuestro manifiesto';
        botonManifiesto.target = 'blank';
        botonManifiesto.href = urlManifiesto;
        botonManifiesto.className = 'boton';
        botonera.appendChild(botonManifiesto);

        spacer = d.createElement('span');
        spacer.className = 'spacer';
        botonera.appendChild(spacer);

        mainTextBlock.appendChild(botonera);

        //console.log('llegué antes del for');
        //console.log(aTrabajos);

        // Loop de carga de datos
        for (let tipoDeTrabajo of aTrabajos) {
            //console.log('entre al loop de carga de datos');

            let section = d.createElement('section');
            section.id = tipoDeTrabajo.tipoDeTrabajo;


            //Primero creo la cabecera de este tipo de trabajo
            let block = d.createElement('span');
            block.className = 'showcase2Box notHovereable BackgroundAecolorBlanco flexContainer col-2-sd';
            let blockHeader = d.createElement('h2');
            blockHeader.className = 'AecolorNegro';
            blockHeader.innerHTML = tipoDeTrabajo.tituloDeSeccion;
            block.appendChild(blockHeader);
            section.appendChild(block);

            block = d.createElement('span');
            block.className = 'showcaseBox notHovereable BackgroundAecolorBlanco col-2-sd';
            block.style.backgroundImage = `url(imgs/isotipo_ae-black.svg)`;
            block.style.backgroundSize = '40%';
            block.style.backgroundRepeat = 'no-repeat';
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

        GenerarNosotros();
    } else {
        //Si entró acá, es porque se solicitó un tipo de trabajo particular,rendereo solo los trabajos de ese tipo.
        // Loop de carga de datos
        for (let tipoDeTrabajo of aTrabajos) {

            if (tipoDeTrabajo.tipoDeTrabajo == tipoDeTrabajoSolcitado) {

                //Esto lo saco porque no es para seminario
                //mainTitle.innerHTML = `Trabajos de ${tipoDeTrabajo.tituloDeSeccion}`;
                //mainParagraph.innerHTML = 'Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos. <br> Por eso es bueno saber que tenés un Álterego dando tu mejor versión.';


                mainTitle.innerHTML = TitularLandingSeminario;
                mainParagraph.innerHTML = BajadaLandingSeminario;

                let section = d.createElement('section');
                section.id = tipoDeTrabajo.tipoDeTrabajo;


                //Primero creo la cabecera de este tipo de trabajo
                let block = d.createElement('span');
                block.className = 'showcase2Box notHovereable';
                let blockHeader = d.createElement('h2');
                blockHeader.innerHTML = tipoDeTrabajo.tituloDeSeccion;
                block.appendChild(blockHeader);
                section.appendChild(block);

                block = d.createElement('span');
                block.className = 'showcaseBox notHovereable';
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
        }


        //Incluyo un mensaje final ----- esto es para seminario. Debería borrarse a posterior.
        let fraseFinal = d.createElement('p');
        fraseFinal.id = 'fraseFinal';
        fraseFinal.innerHTML = fraseFinalLandingSeminario;
        main.appendChild(fraseFinal);
    }

    if (offset) {
        //Si entro acá, es porque hay información de offset vertical, entonces tengo que scrollear a ahí
        navigateTo(null, offset);
    }
}



function GenerarNosotros() {
    let seccionNosotros = d.createElement('section');
    seccionNosotros.id = 'Nosotros';

    let h2 = d.createElement('h2');
    h2.innerHTML = 'Quiénes somos, la agencia y las personas'
    seccionNosotros.appendChild(h2);

    let p = d.createElement('p');
    p.innerHTML = manifiesto;
    seccionNosotros.appendChild(p);

    let article = d.createElement('article');
    article.id = 'disenadores';

    for (let disenador of aDisenadores) {
        let span = d.createElement('span');
        let imgDiv = d.createElement('div');
        imgDiv.id = 'imagenesDisenadores';
        imgDiv.style.backgroundImage = `url(${disenador.foto})`;
        imgDiv.title = disenador.nombre;

        let img = d.createElement('img');
        img.src = disenador.foto;
        img.title = disenador.nombre;
        img.alt = disenador.descripcion;
        img.className = 'hidden';
        imgDiv.appendChild(img);

        span.appendChild(imgDiv);


        let textDiv = d.createElement('div');

        let nombreDisenador = d.createElement('h3');
        nombreDisenador.innerHTML = disenador.nombre;
        textDiv.appendChild(nombreDisenador);

        let descripcion = d.createElement('p');
        descripcion.innerHTML = disenador.descripcion;
        textDiv.appendChild(descripcion);

        span.appendChild(textDiv);

        article.appendChild(span);
    }

    seccionNosotros.appendChild(article);
    main.appendChild(seccionNosotros);
}




/**
 * *****************************************************************
 * 
 * Generación de vistas de trabajos
 * 
 * *****************************************************************
 */


function GenerarTrabajo(e) {

    navigateTo(null,0);

    // Primero vacío mainTitle mainParagraph y mainShowcase
    VaciarCanvas();

    // Hago el "volver atras" en el logo
    let headerLogo = d.querySelector('header div img');
    headerLogo.className = 'cursorPointer';
    headerLogo.onclick = function(){
        GenerarHome(publicTipoDeTrabajoSolicitado, e.offsetY);
    };
    
    
    /*
    //Tengo que hacerlo con onclick porque el addeventlistener se stackea, y no lo puedo borrar
    headerLogo.addEventListener('click', function () {
        GenerarHome(publicTipoDeTrabajoSolicitado, e.offsetY);
    });*/

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
                                block.className = 'showcaseBox notHovereable';


                                contenido = contenido.replace('watch?v=', 'embed/');
                                let regex = new RegExp('\&(.*)');
                                contenido = contenido.replace(regex, '');
                                contenido += "?rel=0&showinfo=0&autoplay=0&enbalejsapi=1";

                                //block.dataset.tipoContenido = 'video';
                                //block.dataset.contenido = contenido;

                                let blockContent = d.createElement('iframe');
                                blockContent.src = contenido;
                                blockContent.setAttribute("frameborder", "0");
                                blockContent.setAttribute("allowfullscreen", "");
                                block.appendChild(blockContent);


                            } else if (contenido.includes('github.com')) {
                                // El contenido es un repo en GIT
                                block.style.backgroundImage = `url(imgs/repo-github.png)`;
                                block.className = 'showcaseBox';
                                block.title = 'Ver Código';
                                block.addEventListener('click', function () {
                                    window.open(contenido, '_blank');
                                });

                            } else if (contenido.includes('.com') || contenido.includes('www.') || contenido.includes('http')) {
                                // El contenido es una página web
                                block.className = 'showcaseBox';
                                block.style.backgroundImage = `url(imgs/click-me.png)`;
                                block.title = 'Ver Online';
                                block.addEventListener('click', function () {
                                    window.open(contenido, '_blank');
                                });


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
    botonVolver.className = 'boton';
    botonVolver.innerHTML = 'VOLVER';
    botonVolver.addEventListener('click', function () {
        GenerarHome(publicTipoDeTrabajoSolicitado, e.offsetY);
    });

    main.appendChild(botonVolver);

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
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '1':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '2':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '3':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '4':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById(aTrabajos[nroElemento].tipoDeTrabajo)) {
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                } else {
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo(aTrabajos[nroElemento].tipoDeTrabajo);
                }
            });
            break;
        case '5':
            navElements[nroElemento].addEventListener('click', function () {
                if (d.getElementById('Nosotros')) {
                    navigateTo('Nosotros');
                } else {
                    GenerarHome(publicTipoDeTrabajoSolicitado);
                    navigateTo('Nosotros');
                }
            });
            break;
    }
}

function navigateTo(anchor, offset) {
    //console.log(anchor);

    // Posición del scroll:
    let posInicial = window.pageYOffset;
    let posDestino ;
    if (offset || offset == 0) {
        //Si entro acá es es porque le doy offset, de ser así, primero tengo que navegar ahí.
        posDestino = offset - 300;
    } else {
        posDestino = d.getElementById(anchor).offsetTop;
    }


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