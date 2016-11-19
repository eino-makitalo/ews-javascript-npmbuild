"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AttachableAttribute_1 = require("../../../Attributes/AttachableAttribute");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var EmailMessage_1 = require("./EmailMessage");
/**
 * Represents a meeting-related message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
var MeetingMessage = (function (_super) {
    __extends(MeetingMessage, _super);
    function MeetingMessage(serviceOrParentAttachment) {
        _super.call(this, serviceOrParentAttachment);
    }
    Object.defineProperty(MeetingMessage.prototype, "AssociatedAppointmentId", {
        /**
         * Gets the Id of the appointment associated with the meeting message.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.AssociatedAppointmentId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "IsDelegated", {
        /**
         * Gets a value indicating whether the meeting message is delegated.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.IsDelegated);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "IsOutOfDate", {
        /**
         * Gets a value indicating whether the meeting message is out of date.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.IsOutOfDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "HasBeenProcessed", {
        /**
         * Gets a value indicating whether the meeting message has been processed by Exchange (i.e. Exchange has noted the arrival of a meeting request and has created the associated meeting item in the calendar).
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.HasBeenProcessed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "IsOrganizer", {
        /**
         * Gets the isorganizer property for this meeting
         *
         * @Nullable
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.IsOrganizer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "ResponseType", {
        /**
         * Gets the type of response the meeting message represents.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.ResponseType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "ICalUid", {
        /**
         * Gets the ICalendar Uid.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.ICalUid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "ICalRecurrenceId", {
        /**
         * Gets the ICalendar RecurrenceId.
         *
         * @Nullable
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.ICalRecurrenceId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingMessage.prototype, "ICalDateTimeStamp", {
        /**
         * Gets the ICalendar DateTimeStamp.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingMessageSchema.ICalDateTimeStamp);
        },
        enumerable: true,
        configurable: true
    });
    MeetingMessage.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, MeetingMessage);
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    MeetingMessage.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    MeetingMessage.prototype.GetSchema = function () {
        return Schemas_1.Schemas.MeetingMessageSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    MeetingMessage.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.MeetingMessage;
    };
    MeetingMessage = __decorate([
        AttachableAttribute_1.AttachableAttribute(false), 
        __metadata('design:paramtypes', [Object])
    ], MeetingMessage);
    return MeetingMessage;
}(EmailMessage_1.EmailMessage));
exports.MeetingMessage = MeetingMessage;
