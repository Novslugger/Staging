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
    
    public partial class AF_Param_Emp_Inv_Val
    {
        public int AF_Param_Emp_Inv_ValId { get; set; }
        public int AF_ParamId { get; set; }
        public Nullable<System.DateTime> AF_Inventory_Date { get; set; }
        public int AF_Inv_EmpId { get; set; }
    
        public virtual AF_Param AF_Param { get; set; }
    }
}