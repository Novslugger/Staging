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
    
    public partial class FSFE_Crew
    {
        public FSFE_Crew()
        {
            this.FSFE_AssignCrew = new HashSet<FSFE_AssignCrew>();
        }
    
        public int FSFE_CrewId { get; set; }
        public string FSFE_CrewName { get; set; }
    
        public virtual ICollection<FSFE_AssignCrew> FSFE_AssignCrew { get; set; }
    }
}