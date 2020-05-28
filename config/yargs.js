const descripcion = {
    demand : true ,
    alias :'d',
    desc : 'Descripcion de la tarea por hacer!!'
};

const completado ={
    demand : true ,
    alias :'a',
    desc : 'Descripcion de la tarea por hacer!!'

};




const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer' , {
        descripcion
    })
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', {
        descripcion,
        completado 
    })
    .command('borrar', 'Borrar un elemento por hacer' , {
        descripcion
    })
    .help()
    .argv

    module.exports = {
        argv
    }
    


module.exports = {
    argv
}