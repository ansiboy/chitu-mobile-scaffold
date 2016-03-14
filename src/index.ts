/// <reference path='js/typings/require.d.ts'/>
/// <reference path='js/typings/chitu.d.ts' />

requirejs.config({
    shim: {
        chitu: {
            deps: ['jquery', 'crossroads', 'hammer', 'move'],
        },
        move: {
            exports: window['move']
        }
    },
    paths: {
        chitu: 'js/chitu',
        crossroads: 'js/crossroads',
        c: 'js/css',
        hammer: 'js/hammer',
        iscroll: 'js/iscroll-probe',
        jquery: 'js/jquery-2.1.0',
        move: 'js/move',
        text: 'js/text'
    }
});

requirejs(['application', 'chitu', 'jquery'], function(move, app: chitu.Application) {    
    if (!location.hash) {
        location.hash = 'home_index';
    }
});