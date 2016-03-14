/// <reference path="js/typings/chitu.d.ts"/>

const DEFAULT_HEADER_PATH = 'ui/headers/default';
const DEFAULT_WITH_BACK = 'ui/headers/default-with-back';

function createHeaderNode(container: chitu.PageContainer, header_path: string): JQueryPromise<HTMLElement> {
    var result = $.Deferred<HTMLElement>();

    var header_node: HTMLElement = document.createElement('header');
    container.element.appendChild(header_node);


    chitu.Utility.loadjs(['text!' + header_path + '.html']).done(function(html) {
        header_node.innerHTML = html;
        result.resolve(header_node);
    });

    return result;
}

function setHeaderTitle(node: HTMLElement, title: string) {
    $(node).find('title').html(title);
}

function createContainerHeader(container: chitu.PageContainer, routeData: chitu.RouteData) {
    var controller = routeData.values().controller;
    var action = routeData.values().action;
    var header_path = DEFAULT_HEADER_PATH;
    switch (controller) {
        case 'home':
            switch (action) {
                case 'index':
                    createHeaderNode(container, DEFAULT_HEADER_PATH)
                        .done((node) => setHeaderTitle(node, "ChiTu"));
                    break;
            }
            break;
    }
}

class ContaionerFactory {

    static createInstance(app: chitu.Application, routeData: chitu.RouteData, previous: chitu.PageContainer) {
        var c = chitu.PageContainerFactory.createInstance(app, routeData, previous);
        createContainerHeader(c, routeData);
        return c;
    }
}

export = ContaionerFactory;

