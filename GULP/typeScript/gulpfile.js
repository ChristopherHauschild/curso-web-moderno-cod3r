// Convertendo código TypeScript para JavaScript

const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // Arquivos já definidos em tsconfig.json
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoTS)