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
    
    public partial class AF_ParamGroup1
    {
        public AF_ParamGroup1()
        {
            this.AF_Param = new HashSet<AF_Param>();
        }
    
        public int AF_ParamGroup1Id { get; set; }
        public string AFParamGroup1Name { get; set; }
    
        public virtual ICollection<AF_Param> AF_Param { get; set; }
    }
}
