/// <reference path='js/typings/require.d.ts'/>
/// <reference path='js/typings/chitu.d.ts' />
requirejs.config({
    shim: {
        chitu: {
            deps: ['jquery', 'crossroads', 'hammer', 'move']
        },
    },
    paths: {
        chitu: 'js/chitu',
        crossroads: 'js/crossroads',
        css: 'js/css',
        hammer: 'js/hammer',
        iscroll: 'js/iscroll-probe',
        jquery: 'js/jquery-2.1.0',
        move: 'js/move',
        text: 'js/text'
    }
});
requirejs(['chitu', 'jquery'], function () {
    var app = new chitu.Application({});
    var viewPath = 'modules/{controller}/{action}.html';
    var actionPath = 'modules/{controller}/{action}';
    app.routes().mapRoute({
        name: 'Normal',
        url: '{controller}_{action}',
        viewPath: viewPath,
        actionPath: actionPath
    });
    app.run();
    if (!location.hash) {
        location.hash = 'home_index';
    }
});
