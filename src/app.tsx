// import { h, render, Component } from 'preact';
import './style/app.less';
import { init } from './game.js';

Zepto(function($: any) {
  init();
});
