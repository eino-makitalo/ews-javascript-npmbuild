"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ImAddressKey_1 = require("../Enumerations/ImAddressKey");
var DictionaryEntryProperty_1 = require("./DictionaryEntryProperty");
var ImAddressEntry = (function (_super) {
    __extends(ImAddressEntry, _super);
    function ImAddressEntry(key, imAddress) {
        if (key === void 0) { key = ImAddressKey_1.ImAddressKey.ImAddress1; }
        if (imAddress === void 0) { imAddress = null; }
        _super.call(this, key);
        this.imAddress = null;
        this.imAddress = imAddress;
    }
    Object.defineProperty(ImAddressEntry.prototype, "ImAddress", {
        get: function () {
            return this.imAddress;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.imAddress; }, setValue: function (address) { _this.imAddress = address; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    ImAddressEntry.prototype.InternalToJson = function (service) { throw new Error("ImAddressEntry.ts - InternalToJson : Not implemented."); };
    ImAddressEntry.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("ImAddressEntry.ts - LoadFromJson : Not implemented."); };
    ImAddressEntry.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        this.Key = ImAddressKey_1.ImAddressKey[jsonProperty[XmlAttributeNames_1.XmlAttributeNames.Key]];
        this.ImAddress = jsonProperty[XmlElementNames_1.XmlElementNames.Entry]; // ImAddress];//ElementValue becomes Same ElementName when it has attribute. 
    };
    ImAddressEntry.prototype.WriteElementsToXml = function (writer) { writer.WriteValue(this.ImAddress, XmlElementNames_1.XmlElementNames.ImAddress); };
    return ImAddressEntry;
}(DictionaryEntryProperty_1.DictionaryEntryProperty));
exports.ImAddressEntry = ImAddressEntry;
