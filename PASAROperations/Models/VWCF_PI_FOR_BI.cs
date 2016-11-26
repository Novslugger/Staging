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
    
    public partial class VWCF_PI_FOR_BI
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
        public double CycleSulfur { get; set; }
        public Nullable<double> CycleTotalDur { get; set; }
        public Nullable<double> IronSilicaRatio { get; set; }
        public Nullable<int> TuyereBlocked { get; set; }
        public Nullable<double> AF_BLISTER { get; set; }
        public Nullable<double> FSF_MATTE { get; set; }
        public Nullable<double> MATTE_CONVERTED { get; set; }
        public Nullable<double> MC_SCATTER { get; set; }
        public Nullable<double> Cu_ToFurnace { get; set; }
        public string Supervisor_SB1 { get; set; }
        public string Supervisor_CB { get; set; }
        public string CntrlEngr_SB1 { get; set; }
        public string CntrlEngr_CB { get; set; }
        public string Skimmer_SB1 { get; set; }
        public string Skimmer_SB2 { get; set; }
        public string Skimmer_SB3 { get; set; }
        public string Skimmer_CB { get; set; }
    }
}
