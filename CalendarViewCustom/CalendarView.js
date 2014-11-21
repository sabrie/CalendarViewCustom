Type.registerNamespace("CalendarViewCustom");

CalendarViewCustom.CalendarView = function (element) {
    CalendarViewCustom.CalendarView.initializeBase(this, [element]);
}

CalendarViewCustom.CalendarView.prototype = {
    initialize: function () {
        CalendarViewCustom.CalendarView.callBaseMethod(this, 'initialize');
    },
    dispose: function () {
        CalendarViewCustom.CalendarView.callBaseMethod(this, 'dispose');
    },

    _onSchedulerAppointmentDataBoundHandler: function (sender, args) {
        var calendarColor = this._getAttributeValueByKey(args.get_data().Attributes, "CalendarColor");
        args.get_data()["IsEditable"] = this._getAttributeValueByKey(args.get_data().Attributes, "IsEditable");
        var allDay = this._getAttributeValueByKey(args.get_data().Attributes, "AllDay");
        if (calendarColor) {
            args.get_appointment().set_backColor(calendarColor);
        }
    },
    _onSchedulerRequestSuccessHandler: function (sender, args) {
        this.set_startDST(args.get_result().StartDST);
        this.set_endDST(args.get_result().EndDST);
    }
}

CalendarViewCustom.CalendarView.registerClass('CalendarViewCustom.CalendarView', Telerik.Sitefinity.Modules.Events.Web.UI.Public.CalendarView);