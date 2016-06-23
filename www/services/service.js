define(["require", "exports", 'jquery'], function (require, exports, $) {
    "use strict";
    var Service = (function () {
        function Service() {
            this.error = $.Callbacks();
        }
        Service.prototype.ajax = function (options) {
            var result = $.Deferred();
            var self = this;
            $.ajax(options)
                .done(function (data, textStatus, jqXHR) {
                var args = [].slice.call(arguments);
                if (data.Type == 'ErrorObject') {
                    if (data.Code == 'Success') {
                        result.resolve.apply(result, args);
                        return;
                    }
                    if ($.isFunction(result.element)) {
                        data.element = result.element();
                    }
                    self.error.fire.apply(self.error, args);
                    result.reject.apply(result, args);
                    return;
                }
            })
                .fail(function (jqXHR, textStatus) {
                var err = { Code: textStatus, status: jqXHR.status, Message: jqXHR.statusText };
                if ($.isFunction(result.element)) {
                    err['element'] = result.element();
                }
                self.error.fire(err);
                result.reject(err);
            });
            return result;
        };
        return Service;
    }());
    return Service;
});
