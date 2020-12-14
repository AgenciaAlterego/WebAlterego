'use strict'

'use strict'

const d = document;
const main = d.getElementById('main');
const mainTextBlock = d.getElementById('mainTextBlock');
const mainTitle = d.getElementById('mainTitle');
const mainParagraph = d.getElementById('mainParagraph');
const mainShowcase = d.getElementById('mainShowcase');




var manifiesto = `No somos uno, compartimos más que la pasión. De chicos siempre quisimos \n
más. Una galletita más, una vuelta más en bici, un ratito más en el agua. <br>\n
<br>\n
Somos un Nokia 1100 y un iPhone X. Un disquete sin espacio y una nube que todo lo guarda. Somos la\n
generación inalámbrica que creció desenredando luces de navidad. Las ganas de aprender, un camino recorrido\n
con paciencia. Somos tanto que no nos entra en el cuerpo. Con el otro, somos. Lo personal es colectivo, y\n
ahí nos encontramos, queriendo más, trabajando juntos. <br> \n
<br> \n
Y si coincidimos es porque nosotros también somos algo de vos. <br>\n
Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos. Por eso es bueno saber que tenés\n
un Álterego dando tu mejor versión. <br>\n
<br>\n
<strong>:: Agencia Álterego ::</strong>`;


var aDisenadores = [];
aDisenadores[0] = {
    nombre: 'Emiliano Vallaro',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Emiliano-Vallaro.jpg',
    descripcion: 'Emiliano Vallaro, Head Designer de la Agencia especializado en interfaces'
};
aDisenadores[1] = {
    nombre: 'Luisina Scuffi',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Luisina-Scuffi.jpg',
    descripcion: 'Luisina Scuffi, Head Designer de la Agencia especializada en 3D'
};
aDisenadores[0] = {
    nombre: 'Julián Amé',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Julian-Ame.jpg',
    descripcion: 'Julián Amé, Head Designer de la Agencia especializado en desarrollos web'
};



var aTrabajos = [];
aTrabajos[0] = {
    tipoDeTrabajo: '3D',
    tituloDeSeccion: '3D Modelado y texturizado',
    trabajos: []
};
aTrabajos[1] = {
    tipoDeTrabajo: 'Motion',
    tituloDeSeccion: 'Motion Graphics y Animación',
    trabajos: []
};
aTrabajos[2] = {
    tipoDeTrabajo: 'Diseño e Ilustración',
    tituloDeSeccion: 'Diseño e Ilustración',
    trabajos: []
};
aTrabajos[3] = {
    tipoDeTrabajo: 'Publicidad',
    tituloDeSeccion: 'Campañas publicitarias',
    trabajos: []
};
aTrabajos[4] = {
    tipoDeTrabajo: 'Apps y Webs',
    tituloDeSeccion: 'Apps, Webs y Juegos',
    trabajos: []
};


/* Carga de trabajos */

/*
Estructura de datos por trabajo:
- Título
- Descripción
- Imagen principal / destacada
- Contenido adicional. Puede ser:
----- Imagenes
----- Videos
----- Link a web externa

*/

/* 3D */

aTrabajos[0].trabajos[0] = new trabajo();
aTrabajos[0].trabajos[0].titulo = 'Futurama Spaceship';
aTrabajos[0].trabajos[0].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[0].imgPrincipal = 'imgs/trabajos/3d/Futurama.png';
aTrabajos[0].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/3d/Futurama-adc-1.jpg';
aTrabajos[0].trabajos[0].contenidoAdicional[1] = 'imgs/trabajos/3d/Futurama-adc-2.jpg';
aTrabajos[0].trabajos[0].contenidoAdicional[2] = 'imgs/trabajos/3d/Futurama-adc-3.jpg';

aTrabajos[0].trabajos[1] = new trabajo();
aTrabajos[0].trabajos[1].titulo = 'Komatsu';
aTrabajos[0].trabajos[1].descripcion = `Este trabajo es una representación a escala para el lanzamiento de un nuevo modelo de pala mecánica Komatsu, mod. WA1200, la más grande hasta ahora en el mercado de maquinarias para la industria de la construcción y de la minería.`;
aTrabajos[0].trabajos[1].imgPrincipal = 'imgs/trabajos/3d/Pala.jpg';
aTrabajos[0].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/3d/Pala-adc-1.jpg';
aTrabajos[0].trabajos[1].contenidoAdicional[1] = 'https://youtu.be/0NBu4LPH10c';
aTrabajos[0].trabajos[1].contenidoAdicional[2] = 'https://youtu.be/jpMKuYfHGPU';

aTrabajos[0].trabajos[2] = new trabajo();
aTrabajos[0].trabajos[2].titulo = 'Storm Trooper';
aTrabajos[0].trabajos[2].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[2].imgPrincipal = 'imgs/trabajos/3d/Stormtrooper.jpg';
aTrabajos[0].trabajos[2].contenidoAdicional[0] = 'imgs/trabajos/3d/Stormtrooper-adc-1.jpg';
aTrabajos[0].trabajos[2].contenidoAdicional[1] = 'imgs/trabajos/3d/Stormtrooper-adc-2.jpg';

aTrabajos[0].trabajos[3] = new trabajo();
aTrabajos[0].trabajos[3].titulo = 'Victorinox';
aTrabajos[0].trabajos[3].descripcion = `Este trabajo es una pieza publicitaria hiperrealista con el objetivo de promocionar en medios gráficos el modelo Spartan de las navajas suizas Victorinox.`;
aTrabajos[0].trabajos[3].imgPrincipal = 'imgs/trabajos/3d/Victorinox.jpg';
aTrabajos[0].trabajos[3].contenidoAdicional[0] = 'https://youtu.be/uoGClgypo5k';
aTrabajos[0].trabajos[3].contenidoAdicional[1] = 'https://youtu.be/d8t_jYWUdDc';

aTrabajos[0].trabajos[4] = new trabajo();
aTrabajos[0].trabajos[4].titulo = 'Xwing';
aTrabajos[0].trabajos[4].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[4].imgPrincipal = 'imgs/trabajos/3d/Xwing.png';

aTrabajos[0].trabajos[5] = new trabajo();
aTrabajos[0].trabajos[5].titulo = 'Bar Álterego';
aTrabajos[0].trabajos[5].descripcion = `Este trabajo es un asset pack de un bar pensado para videojuegos Triple A del estilo GTA con modelos hiperrealistas y funcionales optimizados para tiempo real que permiten al jugador vivir una experiencia inmersiva.`;
aTrabajos[0].trabajos[5].imgPrincipal = 'imgs/trabajos/3d/BarAlterego.jpg';
aTrabajos[0].trabajos[5].contenidoAdicional[0] = 'https://youtu.be/7wbtd5gTRz8';
aTrabajos[0].trabajos[5].contenidoAdicional[1] = 'https://youtu.be/4DHwnAoTGv4';

aTrabajos[0].trabajos[6] = new trabajo();
aTrabajos[0].trabajos[6].titulo = 'Cámara Steampunk';
aTrabajos[0].trabajos[6].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[6].imgPrincipal = 'imgs/trabajos/3d/Steampunk.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[0] = 'imgs/trabajos/3d/Steampunk-adc-1.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[1] = 'imgs/trabajos/3d/Steampunk-adc-2.jpg';

/* Motion */

aTrabajos[1].trabajos[0] = new trabajo();
aTrabajos[1].trabajos[0].titulo = 'Campaña Whatsapp - Chevrolet Arg';
aTrabajos[1].trabajos[0].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[0].imgPrincipal = 'imgs/trabajos/Motion/Chevrolet-whatsapp.jpg';
aTrabajos[1].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/Motion/Chevrolet-whatsapp-adc-1.jpg';

aTrabajos[1].trabajos[1] = new trabajo();
aTrabajos[1].trabajos[1].titulo = 'Campaña Contenedores - La Anónima';
aTrabajos[1].trabajos[1].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[1].imgPrincipal = 'imgs/trabajos/Motion/LaAnonima-Contenedores.jpg';
aTrabajos[1].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/Motion/LaAnonima-Contenedores-adc-1.jpg';

aTrabajos[1].trabajos[2] = new trabajo();
aTrabajos[1].trabajos[2].titulo = 'Loreal Argentina';
aTrabajos[1].trabajos[2].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[2].imgPrincipal = 'imgs/trabajos/Motion/Loreal.jpg';
aTrabajos[1].trabajos[2].contenidoAdicional[0] = 'imgs/trabajos/Motion/Loreal-adc-1.jpg';

aTrabajos[1].trabajos[3] = new trabajo();
aTrabajos[1].trabajos[3].titulo = 'Mate Painting';
aTrabajos[1].trabajos[3].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[3].imgPrincipal = 'imgs/trabajos/Motion/MattePainting.jpg';
aTrabajos[1].trabajos[3].contenidoAdicional[0] = 'imgs/trabajos/Motion/MattePainting-adc-1.jpg';

aTrabajos[1].trabajos[4] = new trabajo();
aTrabajos[1].trabajos[4].titulo = 'MTV';
aTrabajos[1].trabajos[4].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[4].imgPrincipal = 'imgs/trabajos/Motion/Mtv.jpg';
aTrabajos[1].trabajos[4].contenidoAdicional[0] = 'imgs/trabajos/Motion/Mtv-adc-1.jpg';

aTrabajos[1].trabajos[5] = new trabajo();
aTrabajos[1].trabajos[5].titulo = 'PersonajeFeliz';
aTrabajos[1].trabajos[5].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[5].imgPrincipal = 'imgs/trabajos/Motion/PersonajeFeliz.jpg';
aTrabajos[1].trabajos[5].contenidoAdicional[0] = 'imgs/trabajos/Motion/PersonajeFeliz-adc-1.jpg';



function trabajo() {
    this.titulo = '',
        this.descripcion = '',
        this.imgPrincipal = '',
        this.contenidoAdicional = []
}