"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var run = require("run-sequence");
var del = require("del");
var pug = require('gulp-pug');
var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
  outputStyle: 'less',
  /* less || scss || sass || styl */
  columns: 12,
  /* number of grid columns */
  offset: '30px',
  /* gutter width px || % */
  container: {
    maxWidth: '1200px',
    /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: '1100px',
      /* -> @media (max-width: 1100px) */
      fields: '30px' /* side fields */
    },
    md: {
      width: '960px',
      fields: '15px'
    },
    sm: {
      width: '780px',
      fields: '15px'
    },
    xs: {
      width: '560px',
      fields: '15px'
    }
    /*
        We can create any quantity of break points.

        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
  }
};

smartgrid('./less', settings);

// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('pug', function() {
  return gulp.src('templates/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('../lib/')); // указываем gulp куда положить скомпилированные HTML файлы
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 1 version",
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Opera versions",
          "last 2 Edge versions"
        ]
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("style-dev", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      })
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("serve", ["style-dev"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style-dev"]);
  gulp.watch(("templates/*.pug"), ["pug"]).on("change", server.reload);
  gulp.watch("*.html").on("change", server.reload);

});

gulp.task("build", function(fn) {
  run("clean", "copy", "style", "images", "symbols", fn);
});

gulp.task("copy", function() {
  return gulp.src([
      "fonts/**/*.{woff,woff2}",
      "img/**",
      "js/**",
      "*.html"
    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});
