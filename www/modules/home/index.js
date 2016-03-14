define(["require", "exports"], function (require, exports) {
    return function (page) {
        requirejs(['c!css/app/home/index']);
        var load_result = $.Deferred();
        page.load.add(function () {
            setTimeout(function () { return load_result.resolve(); }, 1000);
            return load_result;
        });
    };
});
