const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log('Archivo Creado:' + archivo.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no Reconocido');




}

//console.log(argv);




//console.log(process.argv);
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/* */