// api/sendMails.js

const fs = require('fs');

const sendMails = async () => {
    try {
        // Lógica de envío de correos electrónicos aquí

        // Mensaje para imprimir en la consola
        console.log('Envío de correos electrónicos realizado con éxito.');

        // Mensaje para escribir en un archivo
        fs.appendFileSync('output.log', 'Envío de correos electrónicos realizado con éxito.\n');

    } catch (error) {
        // Manejar errores aquí

        // Imprimir errores en la consola y en el archivo
        console.error('Error al enviar correos electrónicos:', error);
        fs.appendFileSync('output.log', `Error al enviar correos electrónicos: ${error}\n`);
    }
};

module.exports = sendMails;