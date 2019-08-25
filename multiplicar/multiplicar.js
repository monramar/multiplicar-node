//require
const colors = require('colors');

const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    console.log(`=============================`.red)
    console.log(`Tabla de ${base}`.yellow)
    console.log(`=============================`.red)


    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`)
            // if (data > limite) return;
            // console.log(`${base} x ${i}  = ${data}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor inroducido ${ base } no es un Numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base} al ${limite}.txt`);
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}