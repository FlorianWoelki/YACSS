const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-clean-css');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const $ = require('gulp-load-plugins')();

const project = require('./package.json');
const head = '\/*\r\n* YACSS ' + project.version + `\r\n* Florian Woelki, Copyright ${(new Date()).getFullYear()}\r\n* http://florianwoelki.github.io/YACSS\r\n*/\r\n`;

gulp.task('compile', () => {
  return gulp.src(['src/default.scss', 'src/**/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe($.header(head))
    .pipe($.size())
    .pipe($.concat('yacss.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', () => {
  return gulp.src(['./dist/yacss.css'])
    .pipe(minify({
      level: {
        1: {
          all: true,
          normalizeUrls: false,
        },
        2: {
          all: false,
          removeDuplicateRules: true,
          reduceNonAdjacentRules: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          mergeAdjacentRules: true,
          mergeIntoShorthands: true,
          mergeMedia: true,
          mergeNonAdjacentRules: true,
          mergeSemantically: false,
          removeEmpty: true,
        },
      },
    }, (details) => {
      console.log('FULL');
      console.log(`${details.name}: ${details.stats.originalSize}B`);
      console.log(`${details.name}-min: ${details.stats.minifiedSize}B`);
    }))
    .pipe($.header(head))
    .pipe($.size())
    .pipe($.concat('yacss.min.css'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
  gulp.watch('./src/*.scss', gulp.series('compile', 'minify'));
});

gulp.task('default', gulp.series('compile', 'minify'));
