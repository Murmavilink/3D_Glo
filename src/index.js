import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validate from './modules/validate';

timer('31 december 2023');
menu();
modal();
smoothScroll();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'portfolio-item-active', 'dot-active');
validate();