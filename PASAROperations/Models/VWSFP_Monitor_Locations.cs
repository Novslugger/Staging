//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PASAROperations.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class VWSFP_Monitor_Locations
    {
        public Nullable<int> DataId { get; set; }
        public string LocationName { get; set; }
        public int LocationId { get; set; }
        public int SFP_Location_StatusId { get; set; }
        public int SFP_GroupdId { get; set; }
        public string SFP_Location_StatusName { get; set; }
        public Nullable<System.DateTime> SFP_ExpectedDTime { get; set; }
    }
}
