// api/schedule.js

const sendMails = require('./sendMails');

async function runScheduledTask() {
    // Invoca la lógica de envío de correos electrónicos
    await sendMails();

    // Salida exitosa
    console.log('Tarea programada ejecutada con éxito.');
}

// Ejecuta la tarea programada
runScheduledTask();