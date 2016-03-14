/// <reference path='js/typings/require.d.ts'/>
/// <reference path='js/typings/chitu.d.ts' />

// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };

// app.initialize();

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

requirejs(['chitu', 'jquery'], function() {
    var app = new chitu.Application({

    });

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