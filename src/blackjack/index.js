// Importamos la librería de underscore de esta manera
    // Si pulsamos entre las llaves (ahora no se ven porque he puesto el guion bajo) con control + espacio veremos todas las opciones que tenemos para importar de la librería
    // Con guien bajo importamos toda la librería (underscore en inglés significa guion bajo)
import _ from 'underscore';

// =============================================================================
// importamos la función crearDeck (que hemos exportado en el archivo crear-deck.js)
   // Con {} las llaves decimos que queremos importar una función en específico
   // En la importación de una función, es posible que pudiera haber otra que se llamara igual, para eso podríamos usar un alias con la palabra "as" de esta forma: import { crearDeck as crearNuevoDeck } from './usecases/crear-deck'; y luego renombrar la llamada a la función en el código con el nombre que le hemos dado (crearNuevoDeck)
   // Ver código comentado de Fernando, donde hace importaciones por defecto y por nombre...
// import { crearDeck } from './usecases/crear-deck';

// importamos la función pedirCarta (que hemos exportado en el archivo pedir-carta.js)
    // Con {} las llaves decimos que queremos importar una función en específico
    // Cuando invoquemos la función, tenemos que pasarle el deck de cartas como argumento
// import { pedirCarta } from './usecases/pedir-carta';

// importamos la función valorCarta (que hemos exportado en el archivo valor-carta.js)
    // Con {} las llaves decimos que queremos importar una función en específico
    // Cuando invoquemos la función, tenemos que pasarle la carta como argumento
// import { valorCarta } from './usecases/valor-carta';
// =============================================================================

// COMO EL ARCHIVO INDEX.JS SE ESTÁ HACIENDO MUY GRANDE, LO QUE HACEMOS ES CREAR UN NUEVO ARCHIVO (INDEX.JS - ES IMPORTANTE EL NOMBRE) EN USECASES, DONDE EXPORTAMOS LAS FUNCIONES QUE NECESITAMOS Y LUEGO LAS IMPORTAMOS AQUÍ EN EL ARCHIVO INDEX.JS
   // Ojo a la sintaxis, importamos los 3 archivos de la siguiente manera:
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';
// ESTO QUE HEMOS HECHO CAMBIANDO LAS IMPORTACIONES Y CREANDO UN ARCHIVO PARA UNIFICAR, SE LLAMA "BARRELING" (ARCHIVO DE BARRIL)
// Y LO QUE HEMOS HECHO ES UN "BARREL" (QUE EN INGLÉS SIGNIFICA BARRIL) QUE ES UNA TÉCNICA DE ORGANIZACIÓN DE CÓDIGO QUE PERMITE AGRUPAR MÚLTIPLES EXPORTACIONES EN UN SOLO ARCHIVO, LO QUE FACILITA LA IMPORTACIÓN Y MEJORA LA LEGIBILIDAD DEL CÓDIGO.

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


// Aquí tenemos que mandar los tipos de cartas y los valores especiales, que podemos usar las constantes que habiamos creado arriba. También tenemos que guardar la ejecución de la función en la variable deck para poder usarla en la función
deck = crearDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // Crear la carta HTML
    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

