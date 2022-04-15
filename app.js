const colors = require('colors');
const { mostarMenu, pausa } = require('./helpers/mensajes');
console.clear();

const main = async () => {
  console.log('hola mundo');

  let option = '';
  do {
    option = await mostarMenu();
    console.log(`opcion elegida: ${option}`);
    option !== '0' && (await pausa());
  } while (option !== '0');
};

main();
