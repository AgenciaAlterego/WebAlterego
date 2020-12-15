'use strict'

const d = document;
const main = d.getElementById('main');
const mainTextBlock = d.getElementById('mainTextBlock');
const mainTitle = d.getElementById('mainTitle');
const mainParagraph = d.getElementById('mainParagraph');
const mainShowcase = d.getElementById('mainShowcase');




const manifiesto = `No somos uno, compartimos más que la pasión. De chicos siempre quisimos \n
más.<br>\n
Una galletita más, una vuelta más en bici, un ratito más en el agua. <br>\n
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


const aDisenadores = [];
aDisenadores[0] = {
    nombre: 'Emiliano Vallaro',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Emiliano-Vallaro.jpg',
    descripcion: 'Emiliano Vallaro, Head Designer de la Agencia especializado en interfaces.'
};
aDisenadores[1] = {
    nombre: 'Luisina Scuffi',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Luisina-Scuffi.jpg',
    descripcion: 'Luisina Scuffi, Head Designer de la Agencia especializada en 3D.'
};
aDisenadores[2] = {
    nombre: 'Julián Amé',
    foto: 'imgs/FotosAgencia/Foto-Perfil-Julian-Ame.jpg',
    descripcion: 'Julián Amé, Head Designer de la Agencia especializado en desarrollos web.'
};