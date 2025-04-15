// Refactor de codigo - independizamos la logica de la creacion del deck
// Tenemos que pasarle los tipos de cartas y los valores especiales
    // Lo vamos a hacer pasándolos por parámetro
// Como vamos a usar aquí la librería de underscore, la vamos a importar.
// Tampoco encuentra el deck porque no lo hemos declarado aquí, así vamos a crear una variable deck con un array vacío.

import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    // Validar tipos de cartas (si existen) - Esto en typescript no es necesario
    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('Tipos de carta son obligatorios como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('Tipos especiales son obligatorios como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}