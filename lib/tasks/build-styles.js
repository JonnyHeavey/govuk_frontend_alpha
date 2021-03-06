'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const runSequence = require('run-sequence')
const rename = require('gulp-rename')
const flatten = require('gulp-flatten')

const sass = require('gulp-sass')
const nano = require('gulp-cssnano')

// Compile Sass to CSS
gulp.task('build:styles', cb => {
  runSequence('lint:styles', 'build:styles:copy', 'build:styles:compile', cb)
})

gulp.task('build:styles:copy', cb => {
  runSequence('build:styles:copy:scss', 'build:styles:copy:components', 'build:styles:copy:scopes', cb)
})

gulp.task('build:styles:copy:scss', () => {
  return gulp.src(paths.assetsScss + '**/*.scss')
    .pipe(gulp.dest(paths.bundleScss))
})

gulp.task('build:styles:copy:components', () => {
  return gulp.src(paths.srcComponents + '**/*.scss')
    .pipe(flatten())
    .pipe(gulp.dest(paths.bundleScss + 'components'))
})

gulp.task('build:styles:copy:scopes', () => {
  return gulp.src(paths.srcScopes + '**/**/*.scss')
    .pipe(flatten())
    .pipe(gulp.dest(paths.bundleScss + 'scopes'))
})

gulp.task('build:styles:compile', () => {
  return gulp.src(paths.bundleScss + '**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.bundleCss))
    .pipe(gulp.dest(paths.publicCss))
    .pipe(rename({ suffix: '.min' }))
    .pipe(nano())
    .pipe(gulp.dest(paths.bundleCss))
})
