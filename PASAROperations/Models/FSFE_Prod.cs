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
    
    public partial class FSFE_Prod
    {
        public FSFE_Prod()
        {
            this.FSFE_Bed = new HashSet<FSFE_Bed>();
            this.FSFE_KPI_Val = new HashSet<FSFE_KPI_Val>();
            this.FSFE_MatteTapperCrew = new HashSet<FSFE_MatteTapperCrew>();
            this.FSFE_OnboardCrew = new HashSet<FSFE_OnboardCrew>();
            this.FSFE_Param_Val = new HashSet<FSFE_Param_Val>();
            this.FSFE_RegularCrew = new HashSet<FSFE_RegularCrew>();
            this.FSFE_SPOTap_MatteSlag = new HashSet<FSFE_SPOTap_MatteSlag>();
            this.FSFE_Checklist_Val = new HashSet<FSFE_Checklist_Val>();
            this.FSFE_FPatternFII_Val = new HashSet<FSFE_FPatternFII_Val>();
            this.FSFE_SlagTap = new HashSet<FSFE_SlagTap>();
            this.FSFE_Matte_Tapping = new HashSet<FSFE_Matte_Tapping>();
            this.FSF_AssignCrew = new HashSet<FSF_AssignCrew>();
            this.FSFE_AssignCrew = new HashSet<FSFE_AssignCrew>();
            this.FSFE_DustlineInspection_Val = new HashSet<FSFE_DustlineInspection_Val>();
            this.FSFE_Param_StrVal = new HashSet<FSFE_Param_StrVal>();
        }
    
        public int FSFE_Prod_Id { get; set; }
        public System.DateTime FSFE_Prod_Date { get; set; }
        public int FSFE_Prod_Shift { get; set; }
    
        public virtual ICollection<FSFE_Bed> FSFE_Bed { get; set; }
        public virtual ICollection<FSFE_KPI_Val> FSFE_KPI_Val { get; set; }
        public virtual ICollection<FSFE_MatteTapperCrew> FSFE_MatteTapperCrew { get; set; }
        public virtual ICollection<FSFE_OnboardCrew> FSFE_OnboardCrew { get; set; }
        public virtual ICollection<FSFE_Param_Val> FSFE_Param_Val { get; set; }
        public virtual ICollection<FSFE_RegularCrew> FSFE_RegularCrew { get; set; }
        public virtual ICollection<FSFE_SPOTap_MatteSlag> FSFE_SPOTap_MatteSlag { get; set; }
        public virtual ICollection<FSFE_Checklist_Val> FSFE_Checklist_Val { get; set; }
        public virtual ICollection<FSFE_FPatternFII_Val> FSFE_FPatternFII_Val { get; set; }
        public virtual ICollection<FSFE_SlagTap> FSFE_SlagTap { get; set; }
        public virtual ICollection<FSFE_Matte_Tapping> FSFE_Matte_Tapping { get; set; }
        public virtual ICollection<FSF_AssignCrew> FSF_AssignCrew { get; set; }
        public virtual ICollection<FSFE_AssignCrew> FSFE_AssignCrew { get; set; }
        public virtual ICollection<FSFE_DustlineInspection_Val> FSFE_DustlineInspection_Val { get; set; }
        public virtual ICollection<FSFE_Param_StrVal> FSFE_Param_StrVal { get; set; }
    }
}