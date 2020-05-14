const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const minifyJs = require('gulp-minify');
const sassVars = require('gulp-sass-vars');
const browserify = require('gulp-browserify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const $ = require('gulp-load-plugins')();

const colors = require('./src/colors');

const project = require('./package.json');
const head = '\/*\r\n* YACSS ' + project.version + `\r\n* Florian Woelki, Copyright ${(new Date()).getFullYear()}\r\n* http://florianwoelki.github.io/YACSS\r\n*/\r\n`;

gulp.task('compile-sass', () => {
  return gulp.src(['src/default.scss', 'src/**/*.scss'])
    .pipe(sassVars(colors, { verbose: true }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe($.header(head))
    .pipe($.size())
    .pipe($.concat('yacss.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compile-ts', () => {
  return gulp.src('src/script/*.ts')
    .pipe(tsProject(), undefined, ts.reporter.fullReporter()).js
    .pipe(browserify({
      standalone: 'yacss'
    }))
    .pipe($.header(head))
    .pipe($.size())
    .pipe($.concat('yacss.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compile', gulp.series('compile-sass', 'compile-ts'));

gulp.task('minify-sass', () => {
  return gulp.src(['./dist/yacss.css'])
    .pipe(cleanCss({
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

gulp.task('minify-js', () => {
  return gulp.src(['./dist/yacss.js'])
    .pipe(minifyJs({
      noSource: true,
    }))
    .pipe($.header(head))
    .pipe($.size())
    .pipe($.concat('yacss.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', gulp.series('minify-sass', 'minify-js'));

gulp.task('watch', () => {
  gulp.watch('./src/**', gulp.series('compile', 'minify'));
});

gulp.task('default', gulp.series('compile', 'minify'));
