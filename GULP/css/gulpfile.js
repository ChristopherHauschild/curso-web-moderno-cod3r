// Gerar arquivo com resultado final de aplicação com SASS
const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss') // index.scss contém os demais arquivos importados
        .pipe(sass().on('error', sass.logError)) // Caso aconteça um erro ele será logado
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css')) // Arquivo que será gerado com arquivos concatenados
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

module.exports.default = parallel(transformacaoCSS, copiarHTML)