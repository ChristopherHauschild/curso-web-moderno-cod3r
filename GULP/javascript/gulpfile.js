// Concatenando e minificando arquivos num só, integrando Babel
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback){
    return gulp.src('src/**/*.js')
        .pipe(babel({ // Convertido para código mais compatível com browsers
            comments: false, // Arquivos de comentário não serão transferidos para arquivo final
            presets: ["env"] // Pega versão mais moderna do JS
        }))
        .pipe(uglify()) // Converte em código minificado
        .pipe(concat('codigo.min.js')) // Concatena arquivos para o arquivo final codigo.min.js
        .pipe(gulp.dest('build')) // Enviando esse código processado para a pasta build
    
        .on('error', err => console.log(err)) // Caso aconteça erro
        
    // return callback()
}

function fim(callback) {
    console.log('Fim!!!')
    return callback()
}

module.exports.default = series(transformacaoJS, fim)