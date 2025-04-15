// Refactor de codigo - independizamos la logica de pedir carta
// Tenemos que pasarle el deck de cartas como parámetro
   // Cuando llamemos a la función tiene que recibir el deck de cartas en los argumentos

/**
 * Esta función me permite tomar una carta del deck
 * @param {Array<String>} deck El deck de cartas
 * @returns {String} Retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}