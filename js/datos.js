'use strict'

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


function trabajo() {
    this.titulo = '',
        this.descripcion = '',
        this.imgPrincipal = '',
        this.contenidoAdicional = []
}

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
aTrabajos[0].trabajos[0].titulo = 'Asset Pack - Bar';
aTrabajos[0].trabajos[0].descripcion = `Este trabajo es un asset pack de un bar pensado para videojuegos Triple A del estilo GTA con modelos hiperrealistas y funcionales optimizados para tiempo real que permiten al jugador vivir una experiencia inmersiva.`;
aTrabajos[0].trabajos[0].imgPrincipal = 'imgs/trabajos/3d/BarAlterego.jpg';
aTrabajos[0].trabajos[0].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=7wbtd5gTRz8&feature=youtu.be';
aTrabajos[0].trabajos[0].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=4DHwnAoTGv4&feature=youtu.be';

aTrabajos[0].trabajos[1] = new trabajo();
aTrabajos[0].trabajos[1].titulo = 'Pala Mecánica Komatsu WA1200';
aTrabajos[0].trabajos[1].descripcion = `Este trabajo es una representación a escala para el lanzamiento de un nuevo modelo de pala mecánica Komatsu, mod. WA1200, la más grande hasta ahora en el mercado de maquinarias para la industria de la construcción y de la minería.`;
aTrabajos[0].trabajos[1].imgPrincipal = 'imgs/trabajos/3d/Pala.jpg';
aTrabajos[0].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/3d/Pala-adc-1.jpg';
aTrabajos[0].trabajos[1].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=0NBu4LPH10c&feature=youtu.be';
aTrabajos[0].trabajos[1].contenidoAdicional[2] = 'https://www.youtube.com/embed/jpMKuYfHGPU';

aTrabajos[0].trabajos[2] = new trabajo();
aTrabajos[0].trabajos[2].titulo = 'Navaja Suiza Victorinox';
aTrabajos[0].trabajos[2].descripcion = `Este trabajo es una pieza publicitaria hiperrealista con el objetivo de promocionar en medios gráficos el modelo Spartan de las navajas suizas Victorinox.`;
aTrabajos[0].trabajos[2].imgPrincipal = 'imgs/trabajos/3d/Victorinox.jpg';
aTrabajos[0].trabajos[2].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=uoGClgypo5k&feature=youtu.be';
aTrabajos[0].trabajos[2].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=d8t_jYWUdDc&feature=youtu.be';

aTrabajos[0].trabajos[3] = new trabajo();
aTrabajos[0].trabajos[3].titulo = 'Futurama Spaceship';
aTrabajos[0].trabajos[3].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[3].imgPrincipal = 'imgs/trabajos/3d/Futurama.png';
aTrabajos[0].trabajos[3].contenidoAdicional[0] = 'imgs/trabajos/3d/Futurama-adc-1.jpg';
aTrabajos[0].trabajos[3].contenidoAdicional[1] = 'imgs/trabajos/3d/Futurama-adc-2.jpg';
aTrabajos[0].trabajos[3].contenidoAdicional[2] = 'imgs/trabajos/3d/Futurama-adc-3.jpg';

aTrabajos[0].trabajos[4] = new trabajo();
aTrabajos[0].trabajos[4].titulo = 'Storm Trooper';
aTrabajos[0].trabajos[4].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[4].imgPrincipal = 'imgs/trabajos/3d/Stormtrooper.jpg';
aTrabajos[0].trabajos[4].contenidoAdicional[0] = 'imgs/trabajos/3d/Stormtrooper-adc-1.jpg';
aTrabajos[0].trabajos[4].contenidoAdicional[1] = 'imgs/trabajos/3d/Stormtrooper-adc-2.jpg';

aTrabajos[0].trabajos[5] = new trabajo();
aTrabajos[0].trabajos[5].titulo = 'Xwing';
aTrabajos[0].trabajos[5].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[5].imgPrincipal = 'imgs/trabajos/3d/Xwing.png';

aTrabajos[0].trabajos[6] = new trabajo();
aTrabajos[0].trabajos[6].titulo = 'Cámara Steampunk';
aTrabajos[0].trabajos[6].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[6].imgPrincipal = 'imgs/trabajos/3d/Steampunk.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[0] = 'imgs/trabajos/3d/Steampunk-adc-1.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[1] = 'imgs/trabajos/3d/Steampunk-adc-2.jpg';

/* Motion */

aTrabajos[1].trabajos[0] = new trabajo();
aTrabajos[1].trabajos[0].titulo = 'MTV Logo Animation';
aTrabajos[1].trabajos[0].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[0].imgPrincipal = 'imgs/trabajos/Motion/Mtv.jpg';
aTrabajos[1].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/Motion/Mtv-adc-1.jpg';
aTrabajos[1].trabajos[0].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=r8WYG1Z5bUI&feature=youtu.be';

aTrabajos[1].trabajos[1] = new trabajo();
aTrabajos[1].trabajos[1].titulo = `L'oreal - Back to the sun`;
aTrabajos[1].trabajos[1].descripcion = `Evento interno de L’oreal realizado a pedido de una agencia publicitaria multinacional.`;
aTrabajos[1].trabajos[1].imgPrincipal = 'imgs/trabajos/Motion/Loreal.jpg';
aTrabajos[1].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/Motion/Loreal-adc-1.jpg';
aTrabajos[1].trabajos[1].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=mpROsTzl8_8&feature=youtu.be';

aTrabajos[1].trabajos[2] = new trabajo();
aTrabajos[1].trabajos[2].titulo = 'Contenedores para Separar Residuos - La Anónima';
aTrabajos[1].trabajos[2].descripcion = `Campaña de concientización sobre la separación de residuos para la cadena de supermercados nacional La Anónima.`;
aTrabajos[1].trabajos[2].imgPrincipal = 'imgs/trabajos/Motion/LaAnonima-Contenedores.jpg';
aTrabajos[1].trabajos[2].contenidoAdicional[0] = 'imgs/trabajos/Motion/LaAnonima-Contenedores-adc-1.jpg';
aTrabajos[1].trabajos[2].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=DixgvteYBhQ&feature=youtu.be';

aTrabajos[1].trabajos[3] = new trabajo();
aTrabajos[1].trabajos[3].titulo = 'Matte Painting Playa de Estacionamiento';
aTrabajos[1].trabajos[3].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[1].trabajos[3].imgPrincipal = 'imgs/trabajos/Motion/MattePainting.jpg';
aTrabajos[1].trabajos[3].contenidoAdicional[0] = 'imgs/trabajos/Motion/MattePainting-adc-1.jpg';
aTrabajos[1].trabajos[3].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=nqMKVKLLSU4&feature=youtu.be';

aTrabajos[1].trabajos[4] = new trabajo();
aTrabajos[1].trabajos[4].titulo = 'Whatsapp Business - Chevrolet';
aTrabajos[1].trabajos[4].descripcion = `Video explicativo realizado para Chevrolet Argentina sobre la utilización de Whatsapp Business como nuevo canal de ventas.`;
aTrabajos[1].trabajos[4].imgPrincipal = 'imgs/trabajos/Motion/Chevrolet-whatsapp.jpg';
aTrabajos[1].trabajos[4].contenidoAdicional[0] = 'imgs/trabajos/Motion/Chevrolet-whatsapp-adc-1.jpg';
aTrabajos[1].trabajos[4].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=OEFJEAboxf0&feature=youtu.be';

aTrabajos[1].trabajos[5] = new trabajo();
aTrabajos[1].trabajos[5].titulo = 'Un Feliz Personaje - Trackeo de Escena';
aTrabajos[1].trabajos[5].descripcion = `Video explicativo realizado para Chevrolet Argentina sobre la utilización de Whatsapp Business como nuevo canal de ventas.`;
aTrabajos[1].trabajos[5].imgPrincipal = 'imgs/trabajos/Motion/Feliz-Personaje.jpg';
aTrabajos[1].trabajos[5].contenidoAdicional[0] = 'imgs/trabajos/Motion/Feliz-Personaje-adc-1.jpg';
aTrabajos[1].trabajos[5].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=AAuu-kzhftM&feature=youtu.be';
