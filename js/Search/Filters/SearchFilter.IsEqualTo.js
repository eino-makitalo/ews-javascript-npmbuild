"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var SearchFilter_RelationalFilter_1 = require("./SearchFilter.RelationalFilter");
/**
 * Represents a search filter that checks if a property is equal to a given value or other property.
 */
var IsEqualTo = (function (_super) {
    __extends(IsEqualTo, _super);
    function IsEqualTo(propertyDefinition, otherPropertyDefinitionOrValue) {
        arguments.length === 0 ? _super.call(this) : _super.call(this, propertyDefinition, otherPropertyDefinitionOrValue);
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    IsEqualTo.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IsEqualTo; };
    return IsEqualTo;
}(SearchFilter_RelationalFilter_1.RelationalFilter));
exports.IsEqualTo = IsEqualTo;
