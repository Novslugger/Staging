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
    
    public partial class AF_Param_Num_TargetVal
    {
        public int AF_Param_Num_TargetValId { get; set; }
        public int AF_ParamId { get; set; }
        public int AF_Target_DefaultId { get; set; }
        public double AFTargetVal_Min { get; set; }
        public double AFTargetVal_Max { get; set; }
        public string AFDisplayText { get; set; }
    
        public virtual AF_Param AF_Param { get; set; }
        public virtual AF_Target_Default AF_Target_Default { get; set; }
    }
}
