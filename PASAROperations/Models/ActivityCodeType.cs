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
    
    public partial class ActivityCodeType
    {
        public ActivityCodeType()
        {
            this.ActivityCodes = new HashSet<ActivityCode>();
        }
    
        public int ActivityCodeTypeId { get; set; }
        public string ActivityCodeTypeName { get; set; }
    
        public virtual ICollection<ActivityCode> ActivityCodes { get; set; }
    }
}