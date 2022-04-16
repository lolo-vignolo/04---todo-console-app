const colors = require('colors');
const { guardarArchivo, leerArchivo } = require('./helpers/trabajarArchivo');

const {
  inquirerMenu,
  pausa,
  leerInput,
  listaTareasToDelate,
  confirmDelate,
  checkList,
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');
console.clear();

const main = async () => {
  let option = '';
  const tareas = new Tareas();

  const tareasDB = leerArchivo();

  if (tareasDB) {
    //esto no hace mas que darle un formato al objeto, agregandole de nuvo dos veces el id.
    tareas.cargarTareaFromArray(tareasDB);
  }

  //await pausa();

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
        tareas.listadoCompleto();
        break;

      case '3':
        tareas.listaPorHacer();
        break;

      case '4':
        tareas.listaCompleted();
        break;

      case '5':
        const ids = await checkList(tareas.listadoArr); //devuelve los IDs de las tareas que seteo como completadas.
        tareas.toggle(ids);
        break;

      case '6':
        const id = await listaTareasToDelate(tareas.listadoArr);
        if (id !== '0') {
          const confirm = await confirmDelate();
          confirm &&
            tareas.borrarTarea(id) &&
            console.log('Tarea eliminada'.red);
        }
        break;
    }

    //una vez que pasan todos los switch async  y la DB fue modificada.se guarda lista en la DB con un formato determinado
    guardarArchivo(tareas.listadoArr);

    await pausa();
  } while (option !== '0');
};

main();
