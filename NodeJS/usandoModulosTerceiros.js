// Geralmente se utiliza '_' para importar modulos de terceiros
const _ = require('lodash') // Não se utiliza caminho relativo
setInterval(() => console.log(_.random(50, 100)), 2000)

// Nodemon -> executar linhas de comando no terminal através do node 