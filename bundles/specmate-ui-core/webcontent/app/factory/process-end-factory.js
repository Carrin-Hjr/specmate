"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var positionable_element_factory_base_1 = require("./positionable-element-factory-base");
var ProcessEnd_1 = require("../model/ProcessEnd");
var Url_1 = require("../util/Url");
var Id_1 = require("../util/Id");
var config_1 = require("../config/config");
var ProcessEndFactory = (function (_super) {
    __extends(ProcessEndFactory, _super);
    function ProcessEndFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProcessEndFactory.prototype.create = function (parent, commit, compoundId) {
        compoundId = compoundId || Id_1.Id.uuid;
        var id = Id_1.Id.uuid;
        var url = Url_1.Url.build([parent.url, id]);
        var node = new ProcessEnd_1.ProcessEnd();
        node.name = config_1.Config.PROCESS_NEW_END_NAME;
        node.description = config_1.Config.PROCESS_NEW_END_DESCRIPTION;
        node.id = id;
        node.url = url;
        node.x = this.coords.x;
        node.y = this.coords.y;
        return this.dataService.createElement(node, true, compoundId).then(function () { return node; });
    };
    return ProcessEndFactory;
}(positionable_element_factory_base_1.PositionableElementFactoryBase));
exports.ProcessEndFactory = ProcessEndFactory;
//# sourceMappingURL=process-end-factory.js.map