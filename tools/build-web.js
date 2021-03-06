'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var path = require('path');
var header = require('gulp-header');

var DEST = path.join(__dirname, '../pub/web');

var pkg = require('../package.json');
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ` * Copyright (C) ${new Date().getFullYear()} club <club.10086.cn>`,
  ' * @version v<%= pkg.version %>',
  ' */',
  ''
].join('\n');

gulp.task('js', function() {
  return gulp
    .src([path.join(__dirname, '../dist/app.js')])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(DEST));
});

gulp.task('lib', function() {
  return gulp
    .src([
      path.join(__dirname, '../fla/introduce_modal.js'),
      path.join(__dirname, '../fla/select_modal.js'),
      path.join(__dirname, '../fla/common_modal.js'),
      path.join(__dirname, '../fla/success_modal.js'),
      path.join(__dirname, '../fla/getAward_modal.js'),
      path.join(__dirname, '../fla/rule_modal.js'),
      path.join(__dirname, '../fla/wards_modal.js'),
      path.join(__dirname, '../fla/share_modal.js'),
      path.join(__dirname, '../fla/knowledge_madal.js'),
      path.join(__dirname, '../fla/liuliang_modal.js'),
      path.join(__dirname, '../fla/sanfang_modal.js'),
      path.join(__dirname, '../fla/walkpower.js'),
      path.join(__dirname, '../static/lib/fx.js'),
      path.join(__dirname, '../static/lib/kinerLottery.js'),
      path.join(__dirname, '../static/lib/fastclick.js'),
      path.join(__dirname, '../static/lib/sosh.js')
    ])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(path.join(DEST, 'lib')));
});

gulp.task('css', function() {
  gulp
    .src(path.join(__dirname, '../dist/app.css'))
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(gulp.dest(DEST));
});

gulp.task('images', function() {
  gulp
    .src([path.join(__dirname, '../static/images/*'), path.join(__dirname, '../fla/images/*')])
    .pipe(gulp.dest(path.join(DEST, 'images')));
});

gulp.task('cp', function() {
  gulp
    .src([
      path.join(__dirname, '../static/index.html'),
      path.join(__dirname, '../static/favicon.ico')
    ])
    .pipe(gulp.dest(DEST));
});

gulp.task('cp2', function() {
  gulp
    .src([
      path.join(__dirname, '../static/lib/polyfill.min.js'),
      path.join(__dirname, '../static/lib/axios.min.js'),
      path.join(__dirname, '../static/lib/zepto.min.js'),
      path.join(__dirname, '../static/lib/createjs-2015.11.26.min.js'),
      path.join(__dirname, '../static/lib/layer.js')
    ])
    .pipe(gulp.dest(path.join(DEST, 'lib')));
});

gulp.task('cp3', function() {
  gulp
    .src([path.join(__dirname, '../static/lib/need/**')])
    .pipe(gulp.dest(path.join(DEST, 'lib/need')));
});

gulp.task('cp4', function() {
  gulp
    .src([path.join(__dirname, '../static/lib/webTrends/webtrends.min.js')])
    .pipe(gulp.dest(path.join(DEST, 'lib/webTrends')));
});

gulp.task('cp5', function() {
  return gulp
    .src([
      path.join(__dirname, '../static/lib/webTrends/siteStatistics_web.js'),
      path.join(__dirname, '../static/lib/webTrends/webtrends_web.load.js')
    ])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(path.join(DEST, 'lib/webTrends')));
});

gulp.task('default', ['js', 'lib', 'css', 'images', 'cp', 'cp2', 'cp3', 'cp4', 'cp5']);
