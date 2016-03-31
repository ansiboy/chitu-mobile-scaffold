import $ = require('jquery');

// var _ajax = $.ajax;
// $.extend($, {
//     ajax: function(options) {
//         options.data = options.data || {};
//         var result = $.Deferred();
//         _ajax(options).done($.proxy(function(data, textStatus, jqXHR) {
//             if (data.Type == 'ErrorObject') {
//                 if (data.Code == 'Success') {
//                     this._result.resolve(data, textStatus, jqXHR);
//                     return;
//                 }

//                 if ($.isFunction(this._result.element)) {
//                     data.element = this._result.element();
//                 }

//                 services.error.fire(data, textStatus, jqXHR);
//                 this._result.reject(data, textStatus, jqXHR);

//                 return;
//             }

//             this._result.resolve(data);
//         }, { _result: result }))
//             .fail($.proxy(function(jqXHR, textStatus) {

//                 var err = { Code: textStatus, status: jqXHR.status, Message: jqXHR.statusText };
//                 if ($.isFunction(this._result.element)) {
//                     err['element'] = this._result.element();
//                 }

//                 services.error.fire(err);
//                 this._result.reject(err);
//             }, { _result: result }));



//         return result;
//     }
// });

class Service {
    error = $.Callbacks();
    ajax(options: any): JQueryPromise<any> {
        var result = $.Deferred();
        var self = this;
        $.ajax(options)
            .done(function(data, textStatus, jqXHR) {
                var args = [].slice.call(arguments);
                if (data.Type == 'ErrorObject') {
                    if (data.Code == 'Success') {
                        //result.resolve(data, textStatus, jqXHR);
                        result.resolve.apply(result, args);
                        return;
                    }

                    if ($.isFunction((<any>result).element)) {
                        data.element = (<any>result).element();
                    }

                    //self.error.fire(data, textStatus, jqXHR);
                    //result.reject(data, textStatus, jqXHR);
                    self.error.fire.apply(self.error, args);
                    result.reject.apply(result, args);
                    return;
                }
            })
            .fail(function(jqXHR, textStatus) {
                var err = { Code: textStatus, status: jqXHR.status, Message: jqXHR.statusText };
                if ($.isFunction((<any>result).element)) {
                    err['element'] = (<any>result).element();
                }

                self.error.fire(err);
                result.reject(err);
            });

        return result;
    }
}

export = Service;