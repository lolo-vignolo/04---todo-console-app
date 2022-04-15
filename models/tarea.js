const { v4: uuidv4 } = require('uuid');

class Tarea {
  id = '';
  description = '';
  completedE = null;

  constructor(desc) {
    this.id = uuidv4();
    this.description = desc;
    this.completedE = null;
  }
}

module.exports = Tarea;
