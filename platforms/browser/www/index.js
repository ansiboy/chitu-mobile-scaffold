/// <reference path='Scripts/typings/require.d.ts'/>
/// <reference path='Scripts/typings/chitu.d.ts' />
requirejs.config({});
requirejs(['Scripts/chitu'], function () {
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
});
