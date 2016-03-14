import chitu = require('chitu');
import ContainerFactory = require('container-factory');

var app = new chitu.Application({
    openSwipe: (routeData: chitu.RouteData) => {
        return chitu.SwipeDirection.Left;
    },
    container: (routeData: chitu.RouteData, previous: chitu.PageContainer): chitu.PageContainer => {
        return ContainerFactory.createInstance(app, routeData, previous);
    }
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