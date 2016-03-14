export = function(page: chitu.Page) {
    requirejs(['c!css/app/home/index']);

    var load_result = $.Deferred();
    page.load.add(() => {
        setTimeout(() => load_result.resolve(), 1000);
        return load_result;
    });
}