const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {
  console.clear();

  console.log('==============================='.green);
  console.log('      Lista de Tareas'.white);
  console.log(`=============================== \n`.green);

  const { opcion } = await inquirer.prompt([
    // el opcion desestructurado es el opcion que viene del 'name' del objeto
    {
      type: 'list',
      name: 'opcion',
      message: 'Seleccione una opcion',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} Agregar Tarea`,
        },
        {
          value: '2',
          name: `${'2.'.green} Listar Tareas`,
        },
        {
          value: '3',
          name: `${'3.'.green} Listar Tareas Pendientes`,
        },
        {
          value: '4',
          name: `${'4.'.green} Listar Tareas Completadas`,
        },
        {
          value: '5',
          name: `${'5.'.green} Completar Tarea`,
        },
        {
          value: '6',
          name: `${'6.'.green} Eliminar Tarea`,
        },
        {
          value: '0',
          name: `${'0.'.red} Salir`,
        },
      ],
    },
  ]);

  return opcion;
};

const pausa = async () => {
  const { continuar } = await inquirer.prompt([
    {
      type: 'input',
      name: 'continuar',
      message: `\n Presione tecla ${'ENTER'.green} para continuar \n`,
    },
  ]);

  return continuar;
};

const leerInput = async (mensaje) => {
  // mensaje es lo que sale en el prompt como pregunta. Lo que el usuario responde viene de la instancia que creo luego.
  const { desc } = await inquirer.prompt([
    {
      type: 'input',
      name: 'desc',
      message: mensaje,
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Debe ingresar una descripcion';
        }
      },
    },
  ]);

  return desc;
};

const listaTareasToDelate = async (tareas = []) => {
  const choices = tareas.map((tarea, index) => {
    return {
      value: tarea.id,
      name: `${index + 1}. ${tarea.description}`,
    };
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione una opcion a borrar',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);

  return id;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listaTareasToDelate,
};
