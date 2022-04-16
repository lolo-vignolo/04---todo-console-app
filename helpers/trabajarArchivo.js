const fs = require('fs');

const guardarArchivo = (data) => {
  fs.writeFileSync('./db/data.json', JSON.stringify(data), (err) => {
    if (err) throw new Error('No se pudo guardar', err);
  });
};

const leerArchivo = () => {
  if (!fs.existsSync('./db/data.json')) {
    return null;
  }
  const data = fs.readFileSync('./db/data.json', 'utf-8');
  const dataJSON = JSON.parse(data);
  return dataJSON;
};

module.exports = { guardarArchivo, leerArchivo };
