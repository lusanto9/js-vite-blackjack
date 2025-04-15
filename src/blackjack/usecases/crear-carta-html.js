
/**
 * 
 * @param {String} carta Es una carta de la baraja
 * @returns {HTMLImageElement} Devuelve una imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('La carta es un argumento necesario');

    // Crear la carta HTML
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;

}