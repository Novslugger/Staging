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
    
    public partial class VWAFAnode_Inventory
    {
        public int AF_ParamId { get; set; }
        public int AF_ParamGroup1Id { get; set; }
        public int AF_ParamGroup2Id { get; set; }
        public int AF_PageId { get; set; }
        public string AFParamName { get; set; }
        public string AFengunit { get; set; }
        public int AF_Param_TypeId { get; set; }
        public bool AFParamValid { get; set; }
        public Nullable<System.DateTime> InvStrDate { get; set; }
        public string StringValue { get; set; }
        public Nullable<double> NumValue { get; set; }
        public Nullable<System.DateTime> InvNumDate { get; set; }
        public Nullable<System.DateTime> PrevNumDate { get; set; }
        public Nullable<long> PreNumVal { get; set; }
        public Nullable<System.DateTime> PrevStrDate { get; set; }
        public string PrevStrVal { get; set; }
    }
}