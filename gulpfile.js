const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


const files = { 
    scssPath: 'styles/main.scss',
}

function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist')
    );
}

function watchTask(){
    watch([files.scssPath], scssTask);    
}

exports.default = series(
    scssTask,
    watchTask
);
