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
    
    public partial class FSFE_SlagTap
    {
        public int SlagTapId { get; set; }
        public int FSFE_ProdId { get; set; }
        public System.DateTime SlagTap_StartTime { get; set; }
        public System.DateTime SlagTap_EndTime { get; set; }
        public int LaddlePitNo { get; set; }
        public double SlagTemperature { get; set; }
        public Nullable<System.DateTime> SlagTap_ReadyTime { get; set; }
        public Nullable<int> Launder1 { get; set; }
        public Nullable<int> Launder2 { get; set; }
        public Nullable<int> Slag_Tender1 { get; set; }
        public Nullable<int> Slag_Tender2 { get; set; }
    
        public virtual FSFE_Prod FSFE_Prod { get; set; }
    }
}
