const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
  }
  // como se va a ser cada instancia de esta clase, aqui vemos que va a ser un objeto
  constructor() {
    this._listado = {};
  }

  crearTarea = (desc) => {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea; //[tarea.id] es lo mismo que si pongo this._listado.id = tarea
    return tarea;
  };
}

module.exports = Tareas;
