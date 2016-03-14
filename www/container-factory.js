/// <reference path="js/typings/chitu.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var DEFAULT_HEADER_PATH = 'ui/headers/default';
    var DEFAULT_WITH_BACK = 'ui/headers/default-with-back';
    function createHeaderNode(container, header_path) {
        var result = $.Deferred();
        var header_node = document.createElement('header');
        container.element.appendChild(header_node);
        chitu.Utility.loadjs(['text!' + header_path + '.html']).done(function (html) {
            header_node.innerHTML = html;
            result.resolve(header_node);
        });
        return result;
    }
    function setHeaderTitle(node, title) {
        $(node).find('title').html(title);
    }
    function createContainerHeader(container, routeData) {
        var controller = routeData.values().controller;
        var action = routeData.values().action;
        var header_path = DEFAULT_HEADER_PATH;
        switch (controller) {
            case 'home':
                switch (action) {
                    case 'index':
                        createHeaderNode(container, DEFAULT_HEADER_PATH)
                            .done(function (node) { return setHeaderTitle(node, "ChiTu"); });
                        break;
                }
                break;
        }
    }
    var ContaionerFactory = (function () {
        function ContaionerFactory() {
        }
        ContaionerFactory.createInstance = function (app, routeData, previous) {
            var c = chitu.PageContainerFactory.createInstance(app, routeData, previous);
            createContainerHeader(c, routeData);
            return c;
        };
        return ContaionerFactory;
    })();
    return ContaionerFactory;
});
