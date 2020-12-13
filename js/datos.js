'use strict'

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
aTrabajos[0].trabajos[1].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[1].imgPrincipal = 'imgs/trabajos/3d/Pala.png';

aTrabajos[0].trabajos[2] = new trabajo();
aTrabajos[0].trabajos[2].titulo = 'Storm Trooper';
aTrabajos[0].trabajos[2].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[2].imgPrincipal = 'imgs/trabajos/3d/Trooper.png';

aTrabajos[0].trabajos[3] = new trabajo();
aTrabajos[0].trabajos[3].titulo = 'Victorinox';
aTrabajos[0].trabajos[3].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[3].imgPrincipal = 'imgs/trabajos/3d/Victorinox.png';

aTrabajos[0].trabajos[4] = new trabajo();
aTrabajos[0].trabajos[4].titulo = 'Xwing';
aTrabajos[0].trabajos[4].descripcion = `Sabemos que solos llegamos más rápido, pero acompañados llegamos más lejos.\n
Por eso es bueno saber que tenés un Álterego dando tu mejor versión.`;
aTrabajos[0].trabajos[4].imgPrincipal = 'imgs/trabajos/3d/Xwing.png';


function trabajo() {
    this.titulo = '',
    this.descripcion = '',
    this.imgPrincipal = '',
    this.contenidoAdicional = []
}