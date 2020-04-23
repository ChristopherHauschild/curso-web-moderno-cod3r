const gulp = require('gulp')
const { series, parallel } = require('gulp') 
// series -> tasks em série | const series = gulp.series
// parallel -> tasks em paralelo | const parallel = gulp.parallel

const antes1 = callback => {
    console.log('Tarefa Antes 1')
    return callback() // return define que task foi concluída
}

const antes2 = callback => {
    console.log('Tarefa Antes 2')
    return callback()
}

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // gulp.src -> seleciona quais arquivos serão utilizados como entrada
   
    gulp.src('pastaA/**/*.txt') // Seleciona qualquer arquivo dentro da pastaA com extensão .txt
    // gulp.dest -> define pasta destino para arquivos de entrada    
    .pipe(gulp.dest('pastaB')) // pipe -> aplica alterações nos arquivos de entrada
    
    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim!')
    return callback()
}

// Arquivo gulp precisa ser exportado
// default -> porta de entrada para que gulp execute as tarefas
module.exports.default = series(
    parallel(antes1, antes2), // Após executar antes1 e antes2 em parelelo, segue na série
    copiar,
    fim
)

