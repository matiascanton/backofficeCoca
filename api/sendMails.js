// api/sendMails.js

import { Resend } from 'resend';

const resend = new Resend('re_GJn2n4EZ_NiFUDPTr3gbHKkhjRDs1d9xz');


const fs = require('fs');

const sendMails = async () => {
    try {
        // Lógica de envío de correos electrónicos aquí

        // Mensaje para imprimir en la consola
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'matiasacanton@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        console.log('Envío de correos electrónicos realizado con éxito.');
        console.log('----------------------------------.');

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