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
    
    public partial class VWAF_QIGOthers
    {
        public int AF_LotId { get; set; }
        public int AF_NumId { get; set; }
        public int ProdYearId { get; set; }
        public int AFLotNo { get; set; }
        public int AF_StatusId { get; set; }
        public Nullable<System.DateTime> LotStartTime { get; set; }
        public Nullable<System.DateTime> LotEndTime { get; set; }
        public Nullable<System.DateTime> CastStartTime { get; set; }
        public string AF_StatusName { get; set; }
        public Nullable<int> ProdYear { get; set; }
        public string Remarks { get; set; }
        public Nullable<int> CW1_CustomerId { get; set; }
        public string CW1_CustomerName { get; set; }
        public Nullable<int> CW2_CustomerId { get; set; }
        public string CW2_CustomerName { get; set; }
        public Nullable<double> RDC { get; set; }
        public Nullable<double> FLL { get; set; }
    }
}
