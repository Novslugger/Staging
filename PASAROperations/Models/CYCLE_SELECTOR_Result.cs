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
    
    public partial class CYCLE_SELECTOR_Result
    {
        public int CycleId { get; set; }
        public string ConverterName { get; set; }
        public System.DateTime Cycle_Start_Time { get; set; }
        public Nullable<System.DateTime> Cycle_End_Time { get; set; }
        public int CycleNumber { get; set; }
        public Nullable<int> CampaignId { get; set; }
        public Nullable<int> CampaignNumber { get; set; }
        public Nullable<int> CycleStatId { get; set; }
        public string CycleStatusName { get; set; }
        public Nullable<int> ConverterId { get; set; }
    }
}
