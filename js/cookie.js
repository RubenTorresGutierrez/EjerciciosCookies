/**
*   Descripción principal del fichero.
*   Descripción secundaria.
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'
window.onload = iniciar;

function iniciar(){

   console.log(document.cookie);

   // Crear la fecha de expiración de la cookie
   let fechaCaducidad = new Date();
   fechaCaducidad.setDate(fechaCaducidad.getDate() + 30);

   // Para borrarla sería restarle uno a la fecha actual
   // fechaCaducidad.setDate(fechaCaducidad.getDate() - 1);

   // Crear la cookie
   document.cookie = `usuario=Ruben;expires=${fechaCaducidad}`;

}