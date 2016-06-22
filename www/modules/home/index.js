var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    return (function (_super) {
        __extends(IndexPage, _super);
        function IndexPage(args) {
            _super.call(this, args);
            this.load.add(this.page_load);
        }
        IndexPage.prototype.page_load = function (sender, args) {
            $(this.element).find('[name="text"]').text(args.text);
        };
        return IndexPage;
    }(chitu.Page));
});
//# sourceMappingURL=index.js.map