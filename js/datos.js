'use strict'

var aTrabajos = [];
aTrabajos[0] = {
    tipoDeTrabajo: '3D',
    tituloDeSeccion: '3D Modelado y Texturizado',
    trabajos: []
};
aTrabajos[1] = {
    tipoDeTrabajo: 'Motion',
    tituloDeSeccion: 'Postproducción y Motion Graphics',
    trabajos: []
};
aTrabajos[2] = {
    tipoDeTrabajo: 'Diseño e Ilustración',
    tituloDeSeccion: 'Diseño e Ilustración',
    trabajos: []
};
aTrabajos[3] = {
    tipoDeTrabajo: 'Apps y Webs',
    tituloDeSeccion: 'Webs, Apps y Juegos',
    trabajos: []
};
aTrabajos[4] = {
    tipoDeTrabajo: 'Publicidad',
    tituloDeSeccion: 'Campañas Publicitarias',
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
aTrabajos[0].trabajos[1].contenidoAdicional[2] = 'https://www.youtube.com/watch?v=jpMKuYfHGPU&feature=youtu.be';

aTrabajos[0].trabajos[2] = new trabajo();
aTrabajos[0].trabajos[2].titulo = 'Navaja Suiza Victorinox';
aTrabajos[0].trabajos[2].descripcion = `Este trabajo es una pieza publicitaria hiperrealista con el objetivo de promocionar en medios gráficos el modelo Spartan de las navajas suizas Victorinox.`;
aTrabajos[0].trabajos[2].imgPrincipal = 'imgs/trabajos/3d/Victorinox.jpg';
aTrabajos[0].trabajos[2].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=uoGClgypo5k&feature=youtu.be';
aTrabajos[0].trabajos[2].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=d8t_jYWUdDc&feature=youtu.be';

aTrabajos[0].trabajos[3] = new trabajo();
aTrabajos[0].trabajos[3].titulo = 'X Wing Star Wars Spaceship';
aTrabajos[0].trabajos[3].descripcion = `Una de las naves más icónica de Star Wars.`;
aTrabajos[0].trabajos[3].imgPrincipal = 'imgs/trabajos/3d/Xwing.png';
aTrabajos[0].trabajos[3].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=eEdbsAXMMkI&feature=youtu.be';
aTrabajos[0].trabajos[3].contenidoAdicional[1] = 'imgs/trabajos/3d/Xwing-adc-1.jpg';
aTrabajos[0].trabajos[3].contenidoAdicional[2] = 'https://www.youtube.com/watch?v=SOOKeBWOM3I&feature=youtu.be';
aTrabajos[0].trabajos[3].contenidoAdicional[3] = 'imgs/trabajos/3d/Xwing-adc-2.jpg';

aTrabajos[0].trabajos[4] = new trabajo();
aTrabajos[0].trabajos[4].titulo = 'Futurama Spaceship';
aTrabajos[0].trabajos[4].descripcion = `Esta nave fue realizada bajo un texturizado realista con detalles de óxido y manchas de pintura desgastada.`;
aTrabajos[0].trabajos[4].imgPrincipal = 'imgs/trabajos/3d/Futurama.png';
aTrabajos[0].trabajos[4].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=kUvryowso90&feature=youtu.be';
aTrabajos[0].trabajos[4].contenidoAdicional[1] = 'imgs/trabajos/3d/Futurama-adc-1.png';
aTrabajos[0].trabajos[4].contenidoAdicional[2] = 'imgs/trabajos/3d/Futurama-adc-2.jpg';
aTrabajos[0].trabajos[4].contenidoAdicional[3] = 'https://www.youtube.com/watch?v=7UIb2GDqA4M&feature=youtu.be';

aTrabajos[0].trabajos[5] = new trabajo();
aTrabajos[0].trabajos[5].titulo = 'Steampunk Camera';
aTrabajos[0].trabajos[5].descripcion = `Esta cámara fue modelada bajo la línea estética retrofuturista Steampunk.`;
aTrabajos[0].trabajos[5].imgPrincipal = 'imgs/trabajos/3d/Steampunk.jpg';
aTrabajos[0].trabajos[5].contenidoAdicional[0] = 'https://www.youtube.com/watch?v=Gc1fMVaBi2c&feature=youtu.be';
aTrabajos[0].trabajos[5].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=R-7xVzw6_ls&feature=youtu.be';
aTrabajos[0].trabajos[5].contenidoAdicional[2] = 'imgs/trabajos/3d/Steampunk-adc-1.jpg';
aTrabajos[0].trabajos[5].contenidoAdicional[3] = 'imgs/trabajos/3d/Steampunk-adc-2.jpg';

aTrabajos[0].trabajos[6] = new trabajo();
aTrabajos[0].trabajos[6].titulo = 'Storm Trooper';
aTrabajos[0].trabajos[6].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[6].imgPrincipal = 'imgs/trabajos/3d/Stormtrooper.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[0] = 'imgs/trabajos/3d/Stormtrooper-adc-1.jpg';
aTrabajos[0].trabajos[6].contenidoAdicional[1] = 'imgs/trabajos/3d/Stormtrooper-adc-2.jpg';



/* Motion */

aTrabajos[1].trabajos[0] = new trabajo();
aTrabajos[1].trabajos[0].titulo = 'MTV Logo Animation';
aTrabajos[1].trabajos[0].descripcion = `Animación en motion graphics 3D para los MTV Music Awards.`;
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
aTrabajos[1].trabajos[3].descripcion = `A través de la técnica de matte painting se ambientó una playa de estacionamiento con estética post apocalíptica.`;
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
aTrabajos[1].trabajos[5].descripcion = `Se le dio vida a un personaje en tres dimensiones, insertándolo en una escena realista mediante el trackeo de la misma.`;
aTrabajos[1].trabajos[5].imgPrincipal = 'imgs/trabajos/Motion/Feliz-Personaje.jpg';
aTrabajos[1].trabajos[5].contenidoAdicional[0] = 'imgs/trabajos/Motion/Feliz-Personaje-adc-1.jpg';
aTrabajos[1].trabajos[5].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=AAuu-kzhftM&feature=youtu.be';

/* Diseño e ilustración */

aTrabajos[2].trabajos[0] = new trabajo();
aTrabajos[2].trabajos[0].titulo = 'Heisenberg - Say my name!';
aTrabajos[2].trabajos[0].descripcion = `Ilustración en arte vectorial de Heisenberg realizada para la convocatoria oficial en RRSS del lanzamiento de la última temporada de Breaking Bad.`;
aTrabajos[2].trabajos[0].imgPrincipal = 'imgs/trabajos/Diseno/Heisenberg.jpg';
aTrabajos[2].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/Diseno/Heisenberg-adc-1.jpg';
aTrabajos[2].trabajos[0].contenidoAdicional[1] = 'imgs/trabajos/Diseno/Heisenberg-adc-2.jpg';
aTrabajos[2].trabajos[0].contenidoAdicional[2] = 'imgs/trabajos/Diseno/Heisenberg-adc-3.png';

aTrabajos[2].trabajos[1] = new trabajo();
aTrabajos[2].trabajos[1].titulo = 'Nike Running Trainers';
aTrabajos[2].trabajos[1].descripcion = `Ilustración vectorial utilizada para lanzar un nuevo modelo de zapatillas de la reconocida marca Nike.`;
aTrabajos[2].trabajos[1].imgPrincipal = 'imgs/trabajos/Diseno/Nike.jpg';
aTrabajos[2].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/Diseno/Nike-adc-1.jpg';
aTrabajos[2].trabajos[1].contenidoAdicional[1] = 'imgs/trabajos/Diseno/Nike-adc-2.jpg';
aTrabajos[2].trabajos[1].contenidoAdicional[2] = 'imgs/trabajos/Diseno/Nike-adc-3.jpg';
aTrabajos[2].trabajos[1].contenidoAdicional[3] = 'imgs/trabajos/Diseno/Nike-adc-4.jpg';
aTrabajos[2].trabajos[1].contenidoAdicional[4] = 'https://www.youtube.com/watch?v=JZiC6lZqhE4&feature=youtu.be';

aTrabajos[2].trabajos[2] = new trabajo();
aTrabajos[2].trabajos[2].titulo = 'Nissan - Smart & Wild';
aTrabajos[2].trabajos[2].descripcion = `Fotomontaje publicitario realizado para el lanzamiento de la nueva camioneta Nissan que conecta la naturaleza con el concepto Smart & Wild.`;
aTrabajos[2].trabajos[2].imgPrincipal = 'imgs/trabajos/Diseno/Nissan.jpg';
aTrabajos[2].trabajos[2].contenidoAdicional[0] = 'imgs/trabajos/Diseno/Nissan-adc-1.jpg';
aTrabajos[2].trabajos[2].contenidoAdicional[1] = 'https://www.youtube.com/watch?v=Mw0PPxGaDt8&feature=youtu.be';
aTrabajos[2].trabajos[2].contenidoAdicional[2] = 'imgs/trabajos/Diseno/Nissan-adc-2.jpg';

aTrabajos[2].trabajos[3] = new trabajo();
aTrabajos[2].trabajos[3].titulo = 'Day of the Dead Flower Woman - Agencia Álterego';
aTrabajos[2].trabajos[3].descripcion = `Ilustración realizada a pedido para el día de los muertos 2020.`;
aTrabajos[2].trabajos[3].imgPrincipal = 'imgs/trabajos/Diseno/FlowerWoman.jpg';
aTrabajos[2].trabajos[3].contenidoAdicional[0] = 'imgs/trabajos/Diseno/FlowerWoman-adc-1.jpg';
aTrabajos[2].trabajos[3].contenidoAdicional[1] = 'imgs/trabajos/Diseno/FlowerWoman-adc-2.jpg';
aTrabajos[2].trabajos[3].contenidoAdicional[2] = 'https://www.youtube.com/watch?v=afcGNlp2fv4&feature=youtu.be';
aTrabajos[2].trabajos[3].contenidoAdicional[3] = 'imgs/trabajos/Diseno/FlowerWoman-adc-3.png';

aTrabajos[2].trabajos[4] = new trabajo();
aTrabajos[2].trabajos[4].titulo = 'Choi, The Traveler';
aTrabajos[2].trabajos[4].descripcion = `Ilustración creada para el cuento infantil Choi, The Traveler. Un pequeño osito que viaja por el mundo.`;
aTrabajos[2].trabajos[4].imgPrincipal = 'imgs/trabajos/Diseno/Choi.jpg';
aTrabajos[2].trabajos[4].contenidoAdicional[0] = 'imgs/trabajos/Diseno/Choi-adc-1.jpg';
aTrabajos[2].trabajos[4].contenidoAdicional[1] = 'imgs/trabajos/Diseno/Choi-adc-2.jpg';
aTrabajos[2].trabajos[4].contenidoAdicional[2] = 'imgs/trabajos/Diseno/Choi-adc-3.png';


/* Webs, Apps y Juegos */

aTrabajos[3].trabajos[0] = new trabajo();
aTrabajos[3].trabajos[0].titulo = 'Farmashop';
aTrabajos[3].trabajos[0].descripcion = `App mobile diseñada para comprar artículos de farmacia y medicamentos con y sin receta, sin tener que moverte de tu casa.`;
aTrabajos[3].trabajos[0].imgPrincipal = 'imgs/trabajos/Webs/Farmashop.png';
aTrabajos[3].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/Webs/Farmashop-adc-1.png';
aTrabajos[3].trabajos[0].contenidoAdicional[1] = 'https://bit.ly/FarmaShop-EV';
aTrabajos[3].trabajos[0].contenidoAdicional[2] = 'imgs/trabajos/Webs/Farmashop-adc-2.png';

aTrabajos[3].trabajos[1] = new trabajo();
aTrabajos[3].trabajos[1].titulo = 'BeerPoint - Cervecería Artesanal';
aTrabajos[3].trabajos[1].descripcion = `Landing Page realizada para BeerPoint, una cervecería artesanal porteña.`;
aTrabajos[3].trabajos[1].imgPrincipal = 'imgs/trabajos/Webs/Beerpoint.jpg';
aTrabajos[3].trabajos[1].contenidoAdicional[0] = 'imgs/trabajos/Webs/Beerpoint-adc-1.jpg';
aTrabajos[3].trabajos[1].contenidoAdicional[1] = 'imgs/trabajos/Webs/Beerpoint-adc-2.jpg';
aTrabajos[3].trabajos[1].contenidoAdicional[2] = 'https://www.youtube.com/watch?v=uhrQd0jsqA8&feature=youtu.be';

aTrabajos[3].trabajos[2] = new trabajo();
aTrabajos[3].trabajos[2].titulo = 'Prime - El juego más seguro';
aTrabajos[3].trabajos[2].descripcion = `Advert-Game para campaña de concientización sobre sexo seguro para la marca de preservativos Prime.`;
aTrabajos[3].trabajos[2].imgPrincipal = 'imgs/trabajos/Webs/Prime.png';
aTrabajos[3].trabajos[2].contenidoAdicional[0] = 'imgs/trabajos/Webs/Prime-adc-1.png';
aTrabajos[3].trabajos[2].contenidoAdicional[1] = 'https://github.com/imperioame/Prime_game';
aTrabajos[3].trabajos[2].contenidoAdicional[2] = 'imgs/trabajos/Webs/Prime-adc-2.png';
aTrabajos[3].trabajos[2].contenidoAdicional[3] = 'https://imperioame.github.io/Prime_game/';

aTrabajos[3].trabajos[3] = new trabajo();
aTrabajos[3].trabajos[3].titulo = 'Afstation';
aTrabajos[3].trabajos[3].descripcion = `Advert-Game para campaña de concientización sobre sexo seguro para la marca de preservativos Prime.`;
aTrabajos[3].trabajos[3].imgPrincipal = 'imgs/trabajos/Webs/Afstation.jpg';
aTrabajos[3].trabajos[3].contenidoAdicional[0] = 'imgs/trabajos/Webs/Afstation-adc-1.jpg';
aTrabajos[3].trabajos[3].contenidoAdicional[1] = 'imgs/trabajos/Webs/Afstation-adc-2.jpg';
aTrabajos[3].trabajos[3].contenidoAdicional[2] = 'imgs/trabajos/Webs/Afstation-adc-3.jpg';

aTrabajos[3].trabajos[4] = new trabajo();
aTrabajos[3].trabajos[4].titulo = 'Staley Martial Arts';
aTrabajos[3].trabajos[4].descripcion = `Sitio web institucional diseñado y realizado en wordpress para el dojo de artes marciales Staley Martial Arts, ubicado en Chicago, EEUU.`;
aTrabajos[3].trabajos[4].imgPrincipal = 'imgs/trabajos/Webs/Staley.jpg';
aTrabajos[3].trabajos[4].contenidoAdicional[0] = 'imgs/trabajos/Webs/Staley-adc-1.jpg';
aTrabajos[3].trabajos[4].contenidoAdicional[1] = 'imgs/trabajos/Webs/Staley-adc-2.jpg';

aTrabajos[3].trabajos[5] = new trabajo();
aTrabajos[3].trabajos[5].titulo = 'Antrieb Sudamericana S.A.';
aTrabajos[3].trabajos[5].descripcion = `Sitio web institucional con catálogo web para una empresa Argentina, fabricante de elementos de máquina.`;
aTrabajos[3].trabajos[5].imgPrincipal = 'imgs/trabajos/Webs/AntriebSa.png';
aTrabajos[3].trabajos[5].contenidoAdicional[0] = 'imgs/trabajos/Webs/AntriebSa-adc-1.png';
aTrabajos[3].trabajos[5].contenidoAdicional[1] = 'imgs/trabajos/Webs/AntriebSa-adc-2.png';
aTrabajos[3].trabajos[5].contenidoAdicional[2] = 'http://www.antriebsa.com';

aTrabajos[3].trabajos[6] = new trabajo();
aTrabajos[3].trabajos[6].titulo = 'Vecindad';
aTrabajos[3].trabajos[6].descripcion = `Juego web de estrategia por turnos realizado en jquery, incluye un sistema de economía e inteligencia artificial como oponentes.`;
aTrabajos[3].trabajos[6].imgPrincipal = 'imgs/trabajos/Webs/Vecindad.png';
aTrabajos[3].trabajos[6].contenidoAdicional[0] = 'imgs/trabajos/Webs/Vecindad-adc-1.png';
aTrabajos[3].trabajos[6].contenidoAdicional[1] = 'https://github.com/imperioame/vecindad';
aTrabajos[3].trabajos[6].contenidoAdicional[2] = 'imgs/trabajos/Webs/Vecindad-adc-2.png';
aTrabajos[3].trabajos[6].contenidoAdicional[3] = 'https://imperioame.github.io/vecindad/';

aTrabajos[3].trabajos[7] = new trabajo();
aTrabajos[3].trabajos[7].titulo = 'Web institucional Agencia Álterego';
aTrabajos[3].trabajos[7].descripcion = `Sitio web institucional de la agencia, realizado internamente en la agencia, en javascript y css puro - sin uso de frameworks adicionales.`;
aTrabajos[3].trabajos[7].imgPrincipal = 'imgs/trabajos/Webs/AgenciaAlterego.png';
aTrabajos[3].trabajos[7].contenidoAdicional[0] = 'imgs/trabajos/Webs/AgenciaAlterego-adc-1.png';
aTrabajos[3].trabajos[7].contenidoAdicional[1] = 'imgs/trabajos/Webs/AgenciaAlterego-adc-2.png';
aTrabajos[3].trabajos[7].contenidoAdicional[2] = 'https://github.com/AgenciaAlterego/WebAlterego';
aTrabajos[3].trabajos[7].contenidoAdicional[3] = 'https://agenciaalterego.com.ar/';


/* Campañas publicitarias */

aTrabajos[4].trabajos[0] = new trabajo();
aTrabajos[4].trabajos[0].titulo = 'Potrero Digital';
aTrabajos[4].trabajos[0].descripcion = `En esta campaña realizada para Potrero Digital, una escuela de oficios digitales de La Matanza, se desarrolló un concepto de marca: “Poniéndose la camiseta del futuro” y también se implementaron 5 campañas publicitarias para distintos targets bajo ese concepto madre. Además, se llevó a cabo un refresh de toda la identidad de la marca y del look and feel de sus redes sociales. Además, se entregó un set de ideas no tradicionales para implementar a futuro con distintas perspectivas. <br>\n
Dada la magnitud de Potrero Digital y la buena ejecución de la campaña, la misma pudo ser exportada a Brasil y a México, convirtiéndose en una campaña internacional de alto impacto.`;
aTrabajos[4].trabajos[0].imgPrincipal = 'imgs/trabajos/Campanas/PotreroDigital.jpg';
aTrabajos[4].trabajos[0].contenidoAdicional[0] = 'imgs/trabajos/Campanas/PotreroDigital-adc-1.jpg';
aTrabajos[4].trabajos[0].contenidoAdicional[1] = 'imgs/trabajos/Campanas/PotreroDigital-adc-2.jpg';
aTrabajos[4].trabajos[0].contenidoAdicional[2] = 'https://www.youtube.com/watch?v=D-nu9M0oNCw&feature=youtu.be';