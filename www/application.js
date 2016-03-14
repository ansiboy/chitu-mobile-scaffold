define(["require", "exports", 'chitu', 'container-factory'], function (require, exports, chitu, ContainerFactory) {
    var app = new chitu.Application({
        openSwipe: function (routeData) {
            return chitu.SwipeDirection.Left;
        },
        container: function (routeData, previous) {
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
});
