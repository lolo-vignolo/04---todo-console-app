const colors = require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');
console.clear();

const main = async () => {
  const tareas = new Tareas();

  let option = '';
  do {
    // imprime el menu
    option = await inquirerMenu();

    // con el opcionrecupero un numero que me lleva a cada uno de los case
    switch (option) {
      case '1':
        // prompt para agregar una tarea
        const desc = await leerInput('Ingrese descripcion de la tarea: ');

        //esta es la forma de crear una tarea, utilizando el metodo de tareas, que a su ves utiliza la class tarea
        tareas.crearTarea(desc);
        break;
      case '2':
        console.log(tareas._listado);
        break;
    }

    await pausa();
  } while (option !== '0');
};

main();
