import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validate from './modules/validate';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('31 december 2023');
menu();
modal();
smoothScroll();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'portfolio-item-active', 'dot-active');
validate();
calc(100);
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total',
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [{type: 'block', id: 'total',}]
});
sendForm({
    formId: 'form3',
    someElem: [{type: 'block', id: 'total',}]
});