using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.UI;

namespace CalendarViewCustom
{
    class CalendarView : Telerik.Sitefinity.Modules.Events.Web.UI.Public.CalendarView
    {
        protected override string ScriptDescriptorTypeName
        {
            get
            {
                return typeof(CalendarView).FullName;
            }
        }

        public override IEnumerable<System.Web.UI.ScriptReference> GetScriptReferences()
        {
            return new List<ScriptReference>(base.GetScriptReferences())
            {
                new ScriptReference(this.scriptReference, typeof(CalendarView).Assembly.FullName)
            };
        }

        public string scriptReference = "CalendarViewCustom.CalendarView.js";
    }
}
