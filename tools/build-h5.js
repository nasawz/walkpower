'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var path = require('path');
var header = require('gulp-header');

var DEST = path.join(__dirname, '../pub/h5');

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
    .src([path.join(__dirname, '../dist/h5.js')])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(DEST));
});

gulp.task('lib', function() {
  return gulp
    .src([
      path.join(__dirname, '../fla_h5/introduce_modal.js'),
      path.join(__dirname, '../fla_h5/select_modal.js'),
      path.join(__dirname, '../fla_h5/common_modal.js'),
      path.join(__dirname, '../fla_h5/success_modal.js'),
      path.join(__dirname, '../fla_h5/getAward_modal.js'),
      path.join(__dirname, '../fla_h5/rule_modal.js'),
      path.join(__dirname, '../fla_h5/wards_modal.js'),
      path.join(__dirname, '../fla_h5/share_modal.js'),
      path.join(__dirname, '../fla_h5/knowledge_madal.js'),
      path.join(__dirname, '../fla_h5/liuliang_modal.js'),
      path.join(__dirname, '../fla_h5/sanfang_modal.js'),
      path.join(__dirname, '../fla_h5/walkpower.js'),
      path.join(__dirname, '../static/lib/fx.js'),
      path.join(__dirname, '../static/lib/kinerLottery.js'),
      path.join(__dirname, '../static/lib/soshm.js'),
      path.join(__dirname, '../static/lib/fastclick.js'),
      path.join(__dirname, '../static/lib/leadeon.js')
    ])
    .pipe(uglify())
    .pipe(gulp.dest(path.join(DEST, 'lib')));
});

gulp.task('css', function() {
  gulp
    .src(path.join(__dirname, '../dist/h5.css'))
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
    .src([path.join(__dirname, '../fla_h5/images/*'), path.join(__dirname, '../static/images/*')])
    .pipe(gulp.dest(path.join(DEST, 'images')));
});

gulp.task('cp', function() {
  gulp
    .src(path.join(__dirname, '../static/h5.html'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(DEST));

  gulp.src(path.join(__dirname, '../static/favicon.ico')).pipe(gulp.dest(DEST));
});

gulp.task('cp2', function() {
  gulp
    .src([
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
      path.join(__dirname, '../static/lib/webTrends/siteStatistics_h5.js'),
      path.join(__dirname, '../static/lib/webTrends/webtrends_h5.load.js')
    ])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(path.join(DEST, 'lib/webTrends')));
});

gulp.task('default', ['js', 'lib', 'css', 'images', 'cp', 'cp2', 'cp3', 'cp4', 'cp5']);
