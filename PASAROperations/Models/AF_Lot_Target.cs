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
    
    public partial class AF_Lot_Target
    {
        public int AF_Lot_TargetId { get; set; }
        public int AF_LotId { get; set; }
        public int AFTargetDefaultId { get; set; }
    
        public virtual AF_Target_Default AF_Target_Default { get; set; }
    }
}
