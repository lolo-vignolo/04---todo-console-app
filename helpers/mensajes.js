require('colors');

const mostarMenu = () => {
  return new Promise((resolve) => {
    console.log('================================'.green);
    console.log('Lista de Tareas'.green);
    console.log(`================================ \n`.green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Pendientes`);
    console.log(`${'4.'.green} Listar Tareas Completadas`);
    console.log(`${'5.'.green} completar Tarea`);
    console.log(`${'6.'.green} eliminar Tarea`);
    console.log(`${'0.'.green} salir \n`);

    //lo creao para hacer inrteracciones con el ususario
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Ingrese una opcion: ', (opcion) => {
      readline.close();
      resolve(opcion); // esto me va a devolver lo que ingrese el usuario
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(
      `\n Presione tecla ${'ENTER'.green} para continuar \n`,
      (opt) => {
        readline.close();
        resolve(); // no necesito nada en este resolve porque no voy a devolver nada
      }
    );
  });
};

module.exports = { mostarMenu, pausa };
