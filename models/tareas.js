const Tarea = require('./tarea');
const colors = require('colors');

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((id) => {
      listado.push(this._listado[id]);
    });
    return listado;
  }
  // como se va a ser cada instancia de esta clase, aqui vemos que va a ser un objeto
  constructor() {
    this._listado = {};
  }

  cargarTareaFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea; //[tarea.id] es lo mismo que si pongo this._listado.id = tarea
    return tarea;
  }

  listadoCompleto() {
    const listaDeTareas = this.listadoArr;
    listaDeTareas.forEach((tarea, index) => {
      const idxcompleted = `${index + 1}`.green;
      const idxtodo = `${index + 1}`.red;

      const fechaCompletada = tarea.completedE ? tarea.completedE.green : null;
      const completed = `completada el ${fechaCompletada}`;
      const pending = `${'Pending'.red}`;

      if (tarea.completedE) {
        console.log(`${idxcompleted}. ${tarea.description} :: ${completed}`);
      } else {
        console.log(`${idxtodo}. ${tarea.description} :: ${pending}`);
      }
    });
  }

  listaPorHacer() {
    let contador = 0;
    const listaDeTareas = this.listadoArr;
    listaDeTareas.forEach((tarea) => {
      if (!tarea.completedE) {
        contador += 1;
        const pending = `${'Pending'.red}`;
        console.log(
          `${contador.toString().red}. ${tarea.description} :: ${pending}`
        );
      }
    });
  }

  listaCompleted() {
    let contador = 0;
    const listaDeTareas = this.listadoArr;

    listaDeTareas.forEach((tarea) => {
      if (tarea.completedE) {
        contador += 1;
        const fechaCompletada = tarea.completedE
          ? tarea.completedE.green
          : null;
        const completed = `completada el ${fechaCompletada}`;
        console.log(
          `${contador.toString().green}. ${tarea.description} :: ${completed}`
        );
      }
    });
  }

  borrarTarea(id) {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggle(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completedE) {
        tarea.completedE = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        tarea.completedE = null;
      }
    });
  }
}

module.exports = Tareas;
