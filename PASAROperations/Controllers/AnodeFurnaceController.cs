using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Linq.SqlClient;
using System.IO;
using PASAROperations.Models;
//using System.IO.File;

namespace PASAROperations.Controllers
{
    public class AnodeFurnaceController : Controller
    {
        //
        // GET: /AnodeFurnace/

        Models.PASAROperationEntities operationdb = new Models.PASAROperationEntities();
        //
        //public ActionResult AF_Users()
        //{
        //    var ausers = (from auser in operationdb.AF_Users orderby auser.AF_UserId ascending select auser);



        //public ActionResult AF_UserRoles()
        //{
        //    var user_roles = (from uroles in operationdb.AF_UserRoles orderby uroles.AF_UserRolesId ascending select uroles);

        //    return View();

        //}
        //public ActionResult AF_UserAccess()
        //{
        //    var af_uc = (from afacess in operationdb.AF_UserAccess orderby afacess.AF_UserAccessId ascending select afacess);

        //    return View();

        //}


        public ActionResult AFLots()
        {
            return View();
        }

        public ActionResult Inventory()
        {
            var af_inspect = (from mpower in operationdb.VWAF_Employee orderby mpower.Fullname ascending select mpower);

            SelectList QI_List = new SelectList(af_inspect, "CompanyId", "Fullname");

            ViewData["QI_List"] = QI_List;

            return View();
        }
        //
        public ActionResult AFRefining()
        {

            ////Deleting Data First
            //var af_delay1 = (from dreason in operationdb.VWAF_DelayReasons where dreason.AF_DelayReasonGroupId == 1 orderby dreason.DelayReason ascending select new { dreason.AF_DelayReasonId, dreason.DelayReason });

            ////Add New Checkbox
            ////var af_delay1 = (from dreason in operationdb.VWAF_DelayReasons where dreason.AF_DelayReasonGroupId == 1 orderby dreason.DelayReason ascending select new { dreason.AF_DelayReasonId, dreason.DelayReason });

            //CheckBoxList dreason_List1 = new CheckBoxList(af_delay1, "AF_DelayReasonId", "DelayReason");

            //ViewData["dreason_List1"] = dreason_List1;

            var af_delay1 = (from dreason in operationdb.VWAF_DelayReasons where dreason.AF_DelayReasonGroupId == 1 orderby dreason.DelayReason ascending select new { dreason.AF_DelayReasonId, dreason.DelayReason });

            var af_delay2 = (from dreason in operationdb.VWAF_DelayReasons where dreason.AF_DelayReasonGroupId == 2 orderby dreason.DelayReason ascending select new { dreason.AF_DelayReasonId, dreason.DelayReason });

            var af_delay3 = (from dreason in operationdb.VWAF_DelayReasons where dreason.AF_DelayReasonGroupId == 3 orderby dreason.DelayReason ascending select new { dreason.AF_DelayReasonId, dreason.DelayReason });

            SelectList dreason_List1 = new SelectList(af_delay1, "AF_DelayReasonId", "DelayReason");

            SelectList dreason_List2 = new SelectList(af_delay2, "AF_DelayReasonId", "DelayReason");

            SelectList dreason_List3 = new SelectList(af_delay3, "AF_DelayReasonId", "DelayReason");

            ViewData["dreason_List1"] = dreason_List1;
            ViewData["dreason_List2"] = dreason_List2;
            ViewData["dreason_List3"] = dreason_List3;


            ViewData["af_lot_list"] = AFLot_list_data();

            return View();
        }


        public ActionResult AFCasting()
        {
            ViewData["af_lot_list"] = AFLot_list_data();

            return View();
        }
        //

        public ActionResult AFQIG()
        {
            ViewData["af_lot_list"] = AFLot_list_data();

            var af_cust = (from acust in operationdb.AF_Customer select acust);

            SelectList Cust_List = new SelectList(af_cust, "AF_CustomerId", "AF_CustomerName");

            ViewData["Cust_List"] = Cust_List;




            return View();
        }

        public JsonResult AFQIG_Data(int aflotid, int inspect_type)
        {
            var afqig_data = (from qigdata in operationdb.AFQIG_DATA_SP(aflotid, inspect_type)
                              orderby qigdata.AFParamId ascending
                              select qigdata);

            return Json(afqig_data, JsonRequestBehavior.AllowGet);
        }



        public ActionResult AFBlisterReceive()
        {
            //


            //
            ViewData["af_lot_list"] = AFLot_list_data();

            return View();
        }
        //List
        public SelectList AFLot_list_data()
        {

            var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                          orderby alot.AFLotNo descending
                          select alot);

            SelectList af_lot_list = new SelectList(af_lot, "AF_LotId", "AFLotNo");

            return af_lot_list;
        }

        public ActionResult CreateLotNo()
        {

            var results = (from alots in operationdb.VWAF_Lot_ProdYearDetail orderby alots.AFLotNo descending select alots).ToList();

            return View(results);
        }
        public ActionResult AssignYear()
        {
            var results = (from c in operationdb.VWAF_AFNum select c).ToList();
            var prodyear = (from pyear in operationdb.ProdYears select pyear);

            var af1_prodyear = (from pyear in operationdb.VWAF_AFNum where pyear.AF_NumId == 1 select pyear.ProdYearId).First();
            var af2_prodyear = (from pyear in operationdb.VWAF_AFNum where pyear.AF_NumId == 2 select pyear.ProdYearId).First();


            SelectList ProdYear_list1 = new SelectList(prodyear, "ProdYearId", "ProdYear1", af1_prodyear);
            SelectList ProdYear_list2 = new SelectList(prodyear, "ProdYearId", "ProdYear1", af2_prodyear);

            ViewData["ProdYear_list1"] = ProdYear_list1;
            ViewData["ProdYear_list2"] = ProdYear_list2;

            return View(results);

        }


        public void EditProdYear(int afnumid, int prodyearid)
        {
            //UPDATE
            var af_num = operationdb.AF_Num.Where(a => a.AF_NumId == afnumid).First();

            af_num.ProdYearId = prodyearid;

            operationdb.SaveChanges();

        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult CreateLot_Partial()
        {
            var afnumlist = (from afnum in operationdb.VWAF_AFNum select afnum);

            var afnum_slist = new SelectList(afnumlist, "AF_NumId", "AFNum", 1);

            var af1_prodyearid = (from af1 in operationdb.VWAF_AFNum where af1.AF_NumId == 1 select af1.ProdYearId).First();
            var af2_prodyearid = (from af2 in operationdb.VWAF_AFNum where af2.AF_NumId == 2 select af2.ProdYearId).First();

            int maxlotnum_af1;
            int maxlotnum_af2;

            try
            {
                maxlotnum_af1 = (from maxlot in operationdb.AF_Lot where maxlot.ProdYearId == af1_prodyearid select maxlot.AFLotNo).Max();
                maxlotnum_af2 = (from maxlot in operationdb.AF_Lot where maxlot.ProdYearId == af2_prodyearid select maxlot.AFLotNo).Max();
            }
            catch (Exception)
            {
                maxlotnum_af1 = 0;
                maxlotnum_af2 = 0;
            }


            ViewBag.afnum_slist = afnum_slist;

            ViewBag.maxlotnum_af1 = maxlotnum_af1 + 1;
            ViewBag.maxlotnum_af2 = maxlotnum_af2 + 1;

            ViewBag.af1_prodyearid = af1_prodyearid;
            ViewBag.af2_prodyearid = af2_prodyearid;


            return PartialView("_AFLotNumCreate");
        }
        //NewAF
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult NewCreateLot_Partial()
        {
            var afnumlist = (from afnum in operationdb.VWAF_AFNum select afnum);

            var afnum_slist = new SelectList(afnumlist, "AF_NumId", "AFNum", 1);

            var af1_prodyearid = (from af1 in operationdb.VWAF_AFNum where af1.AF_NumId == 1 select af1.ProdYearId).First();
            var af2_prodyearid = (from af2 in operationdb.VWAF_AFNum where af2.AF_NumId == 2 select af2.ProdYearId).First();

            int maxlotnum_af1;
            int maxlotnum_af2;

            try
            {
                maxlotnum_af1 = (from maxlot in operationdb.AF_Lot where maxlot.ProdYearId == af1_prodyearid select maxlot.AFLotNo).Max();
                maxlotnum_af2 = (from maxlot in operationdb.AF_Lot where maxlot.ProdYearId == af2_prodyearid select maxlot.AFLotNo).Max();
            }
            catch (Exception)
            {
                maxlotnum_af1 = 0;
                maxlotnum_af2 = 0;
            }


            ViewBag.afnum_slist = afnum_slist;

            ViewBag.maxlotnum_af1 = maxlotnum_af1 + 1;
            ViewBag.maxlotnum_af2 = maxlotnum_af2 + 1;

            ViewBag.af1_prodyearid = af1_prodyearid;
            ViewBag.af2_prodyearid = af2_prodyearid;


            return PartialView("_NewAFLotNumCreate");
        }



        public void Add_LotNum(int af_numid, int prodyearid, int af_lotnum)
        {
            //INSERT

            Models.AF_Lot aflot = new Models.AF_Lot();

            aflot.AF_NumId = af_numid;
            aflot.ProdYearId = prodyearid;
            aflot.AFLotNo = af_lotnum;
            aflot.AF_StatusId = 1;

            operationdb.AF_Lot.Add(aflot);

            operationdb.SaveChanges();

        }

        //NewAF

        public void NewAdd_LotNum(int af_numid, int prodyearid, int af_lotnum)
        {
            //INSERT

            Models.AF_Lot aflot = new Models.AF_Lot();

            aflot.AF_NumId = af_numid;
            aflot.ProdYearId = prodyearid;
            aflot.AFLotNo = af_lotnum;
            aflot.AF_StatusId = 1;

            operationdb.AF_Lot.Add(aflot);

            operationdb.SaveChanges();

        }
        


        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult EditLot_Partial(int aflotid)
        {
            var af_status = (from astat in operationdb.AF_Status select astat);
            var af_num = (from anum in operationdb.VWAF_AFNum select anum);

            var aflot = (from alot in operationdb.AF_Lot where alot.AF_LotId == aflotid select alot).First();


            SelectList Status_list = new SelectList(af_status, "AF_StatusId", "AF_StatusName", aflot.AF_StatusId);
            SelectList afnum_list = new SelectList(af_num, "AF_NumId", "AFNum", aflot.AF_NumId);

            ViewData["Status_list"] = Status_list;
            ViewData["afnum_list"] = afnum_list;

            ViewBag.aflotnum = aflot.AFLotNo;
            ViewBag.aflotid = aflot.AF_LotId;

            return PartialView("_AFLotNumEdit");
        }
        //New AF
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult NewEditLot_Partial(int aflotid)
        {
            var af_status = (from astat in operationdb.AF_Status select astat);
            var af_num = (from anum in operationdb.VWAF_AFNum select anum);

            var aflot = (from alot in operationdb.AF_Lot where alot.AF_LotId == aflotid select alot).First();


            SelectList Status_list = new SelectList(af_status, "AF_StatusId", "AF_StatusName", aflot.AF_StatusId);
            SelectList afnum_list = new SelectList(af_num, "AF_NumId", "AFNum", aflot.AF_NumId);

            ViewData["Status_list"] = Status_list;
            ViewData["afnum_list"] = afnum_list;

            ViewBag.aflotnum = aflot.AFLotNo;
            ViewBag.aflotid = aflot.AF_LotId;

            return PartialView("_NewAFLotNumEdit");
        }

        public void Edit_AFLot(int af_lotid, int afnumid, int afstatusid)
        {
            //UPDATE

            var aflot = operationdb.AF_Lot.Where(alot => alot.AF_LotId == af_lotid).First();

            aflot.AF_NumId = afnumid;
            aflot.AF_StatusId = afstatusid;

            operationdb.SaveChanges();

        }

        public JsonResult Select_AFLot(int aflotid)
        {
            var aflot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                         where alot.AF_LotId == aflotid
                         select alot);

            return Json(aflot, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFBlister_Receive_tbl(int aflotid)
        {
            var ablister_ = (from ablister in operationdb.VWAF_BlisterReceive
                             where ablister.AF_LotId == aflotid
                             orderby ablister.AF_BlisterReceive_StartTime
                                 ascending
                             select ablister);

            return Json(ablister_, JsonRequestBehavior.AllowGet);
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult Add_AFBlister_Partial()
        {
            @ViewBag.DateTimeNow = DateTime.Now;

            var cvnum = (from cv in operationdb.Converters select cv);

            SelectList cv_list = new SelectList(cvnum, "ConverterId", "ConverterName");

            ViewData["cv_list"] = cv_list;

            return PartialView("_AFBlisterReceive");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult EditAFBlister_Partial(int afbrcvId)
        {
            @ViewBag.DateTimeNow = DateTime.Now;

            var afblister_rcv = (from rcv in operationdb.VWAF_BlisterReceive
                                 where
                                     rcv.AF_BlisterReceiveId == afbrcvId
                                 select rcv).First();


            var cf_cv = (from cv in operationdb.Converters select cv);
            var cf_cycle = (from cyc in operationdb.VWCycleDetails
                            where cyc.ConverterId == afblister_rcv.ConverterId &&
                            cyc.CampaignId == afblister_rcv.CampaignId
                            select cyc);

            SelectList cv_list = new SelectList(cf_cv, "ConverterId", "ConverterName", afblister_rcv.ConverterId);
            SelectList cf_cycle_list = new SelectList(cf_cycle, "CycleId", "CycleNumber", afblister_rcv.CycleId);
            ViewData["cv_list"] = cv_list;
            ViewData["cf_cycle_list"] = cf_cycle_list;

            ViewBag.ppmSulfur = afblister_rcv.CycleSulfur;
            ViewBag.blisterWt = afblister_rcv.AF_BlisterReceive_Wt;
            ViewBag.blisterTemp = afblister_rcv.AF_BlisterReceive_Temp;

            ViewBag.afblister_rcvId = afblister_rcv.AF_BlisterReceiveId;

            ViewBag.StartTime = afblister_rcv.AF_BlisterReceive_StartTime;
            ViewBag.EndTime = afblister_rcv.AF_BlisterReceive_EndTime;

            return PartialView("_AFBlisterReceiveEdit");
        }

        public JsonResult CF_Cyles(int cvid)
        {
            var campaignid = (from camp in operationdb.Converters
                              where camp.ConverterId == cvid
                              select camp).First();

            var cycles = (from cycs in operationdb.VWCycleDetails
                          where cycs.ConverterId == cvid && cycs.CampaignId == campaignid.CampaignId
                          select cycs);

            return Json(cycles, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Cycle_sulfur(int cycleid_)
        {
            var cycle = (from cyc in operationdb.VWCycleDetails
                         where cyc.CycleId == cycleid_
                         select cyc).First();

            return Json(cycle, JsonRequestBehavior.AllowGet);
        }


        public void Add_BlisterReceive(int af_lotid, int cycleid,
            DateTime starttime, DateTime endtime, float blistertemp, float blisterwt)
        {
            //INSERT

            Models.AF_BlisterReceive blister_rcv = new Models.AF_BlisterReceive();
            blister_rcv.AF_LotId = af_lotid;
            blister_rcv.CycleId = cycleid;
            blister_rcv.AF_BlisterReceive_StartTime = starttime;
            blister_rcv.AF_BlisterReceive_EndTime = endtime;
            blister_rcv.AF_BlisterReceive_Temp = blistertemp;
            blister_rcv.AF_BlisterReceive_Wt = blisterwt;

            operationdb.AF_BlisterReceive.Add(blister_rcv);

            operationdb.SaveChanges();

        }

        public void Edit_BlisterReceive(int af_brcivid, int cycleid,
            DateTime starttime, DateTime endtime, float blistertemp, float blisterwt)
        {
            //UPDATE

            var blister_rcv = operationdb.AF_BlisterReceive.Where(a => a.AF_BlisterReceiveId == af_brcivid).First();

            blister_rcv.CycleId = cycleid;
            blister_rcv.AF_BlisterReceive_StartTime = starttime;
            blister_rcv.AF_BlisterReceive_EndTime = endtime;
            blister_rcv.AF_BlisterReceive_Temp = blistertemp;
            blister_rcv.AF_BlisterReceive_Wt = blisterwt;


            operationdb.SaveChanges();

        }


        public void Delete_BlisterReceive(int af_brcivid)
        {
            //Delete

            var blister_rcv = operationdb.AF_BlisterReceive.Where(a => a.AF_BlisterReceiveId == af_brcivid).First();

            operationdb.AF_BlisterReceive.Remove(blister_rcv);
            operationdb.SaveChanges();

        }
        public JsonResult AFRefining_data(int aflotid)
        {
            var afrefining_ = (from arefine in operationdb.VWAFRefining_Data
                               where arefine.AF_LotId == aflotid
                               select arefine);

            return Json(afrefining_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Load_DelayReasons(int aflotid)
        {
            var afreasons = (from afreason in operationdb.VWAF_Refining_Delays
                             where afreason.AF_LotId == aflotid
                             select afreason);

            return Json(afreasons, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFCasting_data(int aflotid)
        {
            var afcasting_ = (from acast in operationdb.VWAFCasting_Data
                              where acast.AF_LotId == aflotid
                              select acast);

            return Json(afcasting_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFLIMS_Target_data(int aflotid)
        {
            var aftar_ = (from atar in operationdb.VWAF_Lot_Targets
                          where atar.AF_LotId == aflotid
                          select atar);
            return Json(aftar_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFLIMS_data(int aflotid)
        {
            var aflims_ = (from alims in operationdb.AF_LIMS_AFLAB_DATA_TABLE(aflotid)
                           select alims);

            return Json(aflims_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFPI_data(int aflotid)
        {
            var afpidata_ = (from afpi in operationdb.AF_REFINING_PIDATA(aflotid)
                             select afpi);

            return Json(afpidata_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AF_PIdata(int aflotid)
        {
            ///
            //var results = (from c in operationdb.VWAF_LotDetail where c.AF_LotId == aflotid select c).First();
            //ViewBag.aflotid = aflotid;

            //ViewBag.AFlogsheet_aflotId = results.AF_LotId;

            //ViewBag.AFlogsheet_AFLotNo = results.AFLotNo;
            /////

            var afpidata_ = (from afpi in operationdb.AF_REFINING_PIDATA(aflotid)
                             select afpi);

            return Json(afpidata_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AF_PITarget_data()
        {
            var ptarget_ = (from ptarget in operationdb.AF_Param_Num_Default_TargetVal
                            select new { ptarget.AF_ParamId, ptarget.AFDisplayTarget });

            return Json(ptarget_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult QIGRemarks_data(int aflotid)
        {
            var qig_remarks_ = (from str in operationdb.AF_Param_Str_Val
                                where
                                    str.AF_LotId == aflotid && str.AF_ParamId == 85
                                select str).FirstOrDefault();

            if (qig_remarks_ == null)
                return Json("", JsonRequestBehavior.AllowGet);
            else
                return Json(new { qig_remarks = qig_remarks_.AF_StrVal ?? "" }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult QIG_Customer_data(int aflotid)
        {
            var qig_cust_ = (from qcust in operationdb.VWAF_QIGOthers
                             where
                                 qcust.AF_LotId == aflotid
                             select qcust).First();


            return Json(qig_cust_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult QIG_last_hour_data(int aflotid)
        {
            var qig_reject_during_casting = (from val in operationdb.AF_Param_Num_Val
                                             where val.AF_LotId == aflotid && val.AF_ParamId == 119
                                             select val).FirstOrDefault();

            int reject_during_casting = 0;

            if (qig_reject_during_casting != null && qig_reject_during_casting.AF_NumVal != null)
            {
                reject_during_casting = (Int32)qig_reject_during_casting.AF_NumVal;
            }

            var qig_failed_lug_to_lug = (from val in operationdb.AF_Param_Num_Val
                                         where val.AF_LotId == aflotid && val.AF_ParamId == 120
                                         select val).FirstOrDefault();

            int failed_lug_to_lug = 0;

            if (qig_failed_lug_to_lug != null && qig_reject_during_casting.AF_NumVal != null)
            {
                failed_lug_to_lug = (Int32)qig_failed_lug_to_lug.AF_NumVal;
            }

            return Json(new { qig_reject_during_casting = reject_during_casting, qig_failed_lug_to_lug = failed_lug_to_lug }, JsonRequestBehavior.AllowGet);
        }

        public void Save_Ref_Remark(int aflotid, string ref_comment)
        {
            operationdb.AF_PARAM_STR_SP(aflotid, 27, ref_comment);
            operationdb.SaveChanges();
        }
        public void Save_Cast_Remark(int aflotid, string cast_comment)
        {
            operationdb.AF_PARAM_STR_SP(aflotid, 45, cast_comment);
            operationdb.SaveChanges();
        }
        public void Save_QIG_Remark(int aflotid, string qig_remarks)
        {
            operationdb.AF_PARAM_STR_SP(aflotid, 85, qig_remarks);
            operationdb.SaveChanges();
        }

        public void Save_QIG_Last_Hour(int aflotid, int reject_during_casting, int failed_lug_to_lug)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 119, reject_during_casting);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 120, failed_lug_to_lug);
            operationdb.SaveChanges();
        }

        public void Save_AF_Customer(int aflotid, int cwid, int customerid)
        {
            operationdb.AF_PARAM_CUSTOMER_SP(aflotid, cwid, customerid);
            operationdb.SaveChanges();
        }

        public void Save_Ref_Consumable(int aflotid, float lbars, float sanode, float stuyere)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 5, lbars);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 6, sanode);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 7, stuyere);

            operationdb.SaveChanges();
        }
        public void Save_Ref_Tuyere(int aflotid, float twest, float teast, float bwest, float beast)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 1, twest);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 2, teast);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 3, bwest);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 4, beast);

            operationdb.SaveChanges();
        }

        public void Save_Cast_MTemp(int aflotid, string mmtemp_start, string mmtemp_mid, string mmtemp_end)
        {
            if (mmtemp_start != "" && mmtemp_start != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 28, Double.Parse(mmtemp_start));
            if (mmtemp_mid != "" && mmtemp_mid != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 29, Double.Parse(mmtemp_mid));
            if (mmtemp_end != "" && mmtemp_end != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 30, Double.Parse(mmtemp_end));

            operationdb.SaveChanges();
        }

        public void Save_Cast_MDress(int aflotid, string mdress1, string mdress2, string mdress3)
        {
            if (mdress1 != "" && mdress1 != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 31, Double.Parse(mdress1));
            if (mdress2 != "" && mdress2 != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 32, Double.Parse(mdress2));
            if (mdress3 != "" && mdress3 != "-")
                operationdb.AF_PARAM_NUMERIC_SP(aflotid, 33, Double.Parse(mdress3));

            operationdb.SaveChanges();
        }

        public void Save_Cast_SMInventory(int aflotid, string sminventory, string smcasted,
                                                       string cminventory, string cmcasted)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 36, Double.Parse(sminventory));
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 37, Double.Parse(smcasted));
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 38, Double.Parse(cminventory));
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 39, Double.Parse(cmcasted));

            operationdb.SaveChanges();
        }

        public void Save_AFBlister_MT(int aflotid, float skimslag, float aftoaf)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 116, skimslag);
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 117, aftoaf);

            operationdb.SaveChanges();
        }



        public void Save_Cast_AnodeTurnOver(int aflotid, string anode_mt, string anode_pcs)
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 41, Double.Parse(anode_mt));
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, 40, Double.Parse(anode_pcs));

            operationdb.SaveChanges();
        }


        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult ManPower_Partial(int aflotid)
        {
            var af_manpower = (from mpower in operationdb.VWAF_Employee orderby mpower.Fullname ascending select mpower);

            SelectList MP_List = new SelectList(af_manpower, "CompanyId", "Fullname");

            ViewData["MP_List"] = MP_List;

            return PartialView("_AFManPower");
        }
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult AFStage_Partial(int aflotid)
        {
            @ViewBag.DateTimeNow = DateTime.Now;

            return PartialView("_AFStage");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult MouldCastingTime_Partial(int aflotid)
        {
            var cast_dtime = (from rphase_dtime in operationdb.AF_Param_DTime_Val
                              where rphase_dtime.AF_ParamId == 122
                               && rphase_dtime.AF_LotId == aflotid
                              select rphase_dtime).FirstOrDefault();

            if (cast_dtime == null)
            {
                @ViewBag.MouldCast_StartDate = DateTime.Now;
                @ViewBag.MouldCast_EndDate = DateTime.Now;
            }
            else
            {
                @ViewBag.MouldCast_StartDate = cast_dtime.AF_StartTimeVal;
                @ViewBag.MouldCast_EndDate = cast_dtime.AF_EndTimeVal;
            }


            return PartialView("_AFMouldCastingTime");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult CastingTime_Partial(int aflotid)
        {

            var cast_dtime = (from rphase_dtime in operationdb.AF_Param_DTime_Val
                              where rphase_dtime.AF_ParamId == 24
                               && rphase_dtime.AF_LotId == aflotid
                              select rphase_dtime).FirstOrDefault();



            if (cast_dtime == null)
            {
                @ViewBag.Cast_StartDate = DateTime.Now;
                @ViewBag.Cast_EndDate = DateTime.Now;
            }
            else
            {
                @ViewBag.Cast_StartDate = cast_dtime.AF_StartTimeVal;
                @ViewBag.Cast_EndDate = cast_dtime.AF_EndTimeVal;
            }


            return PartialView("_AFCastingTime");
        }



        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult Casting2ndTime_Partial(int aflotid)
        {

            var cast_dtime = (from rphase_dtime in operationdb.AF_Param_DTime_Val
                              where rphase_dtime.AF_ParamId == 118
                               && rphase_dtime.AF_LotId == aflotid
                              select rphase_dtime).FirstOrDefault();



            if (cast_dtime == null)
            {
                @ViewBag.Cast_StartDate = DateTime.Now;
                @ViewBag.Cast_EndDate = DateTime.Now;
            }
            else
            {
                @ViewBag.Cast_StartDate = cast_dtime.AF_StartTimeVal;
                @ViewBag.Cast_EndDate = cast_dtime.AF_EndTimeVal;
            }


            return PartialView("_AF2ndCastingTime");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult CastingManPower_Partial()
        {
            var af_manpower = (from mpower in operationdb.VWAF_Employee orderby mpower.Fullname ascending select mpower);

            var cast_emp_position = (from cposition in operationdb.VWAF_ParamDetail
                                     where
                                     cposition.AFengunit == "employee" &&
                                     cposition.AF_ParamGroup2Name == "Casting"

                                     orderby cposition.AFParamName ascending
                                     select cposition);

            SelectList Position_List = new SelectList(cast_emp_position, "AF_ParamId", "AFParamName");

            SelectList MP_List = new SelectList(af_manpower, "CompanyId", "Fullname");

            ViewData["MP_List"] = MP_List;
            ViewData["Position_List"] = Position_List;

            return PartialView("_AFCastingManPower");
        }

        public JsonResult Casting_Emp_List(int position)
        {

            var list = (from emplist in operationdb.VWAFCasting_Employee_List
                        where emplist.AF_ParamId == position
                        select new { AF_ParamId = emplist.AF_ParamId, Fullname = emplist.Fullname, AFParamName = emplist.AFParamName, EmpID = emplist.EmpId });

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Refining_Emp_List(int position)
        {

            var list = (from emplist in operationdb.VWAFRefining_Employee_List
                        where emplist.AF_ParamId == position
                        select new { AF_ParamId = emplist.AF_ParamId, Fullname = emplist.Fullname, AFParamName = emplist.AFParamName, EmpID = emplist.EmpId });

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult CastingMouldReplace_Partial()
        {
            return PartialView("_AFMouldReplace");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult AFQIG_Partial()
        {
            var af_qigtype = (from qigt in operationdb.AF_QIGType where qigt.AF_QIGTypeId == 1 || qigt.AF_QIGTypeId == 2 select qigt);

            var af_qighour = (from qigh in operationdb.AF_QIGHour select qigh);

            var af_qig_inspect_type = (from qiginspect in operationdb.VWAF_ParamDetail
                                       where
                                       qiginspect.AFengunit == "pcs" &&
                                       qiginspect.AF_PageName == "QIG"
                                       select qiginspect);

            SelectList QIGType_List = new SelectList(af_qigtype, "AF_QIGTypeId", "AF_QIGTypeName");

            SelectList QIGHr_List = new SelectList(af_qighour, "AF_QIGHourId", "AF_QIGHour1");

            SelectList QIGInspect_List = new SelectList(af_qig_inspect_type, "AF_ParamId", "AFParamName");

            ViewData["QIGType_List"] = QIGType_List;
            ViewData["QIGHr_List"] = QIGHr_List;
            ViewData["QIGInspect_List"] = QIGInspect_List;


            return PartialView("_AFQIG_Inspect");
        }



        public JsonResult af_manpower_dtime(int aflotid, int stageid)
        {
            var af_manpower = (from mpower in operationdb.VWAFRefining_Data
                               where mpower.AF_LotId == aflotid
                               select mpower).First();

            Models.AFStage AF_Stage = new Models.AFStage();

            if (stageid == 1)
            {
                AF_Stage.AF_Stage_StartDate = af_manpower.ST_Skim1st;
                AF_Stage.AF_Stage_EndDate = af_manpower.ET_Polling;

            }
            else if (stageid == 2)
            {
                AF_Stage.AF_Stage_StartDate = af_manpower.ST_Casting;
                AF_Stage.AF_Stage_EndDate = af_manpower.ET_Casting;

            }


            return Json(AF_Stage, JsonRequestBehavior.AllowGet);
        }

        public JsonResult af_manpower_emp(int aflotid, int stageid, int positionid)
        {
            var af_manpower = (from mpower in operationdb.VWAFRefining_Data
                               where mpower.AF_LotId == aflotid
                               select mpower).First();

            Models.AFStageEmp AF_StageEmp = new Models.AFStageEmp();

            //Refining
            if (stageid == 1 && positionid == 1)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_ROperator1Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_ROperator1Id;
            }
            else if (stageid == 1 && positionid == 2)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_ROperator2Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_ROperator2Id;
            }
            else if (stageid == 1 && positionid == 3)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_RSupervisor1Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_RSupervisor1Id;
            }
            else if (stageid == 1 && positionid == 4)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_RSupervisor2Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_RSupervisor2Id;
            }

            //Casting
            if (stageid == 2 && positionid == 1)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_COperator1Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_COperator1Id;
            }
            else if (stageid == 2 && positionid == 2)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_COperator2Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_COperator2Id;
            }
            else if (stageid == 2 && positionid == 3)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_CSupervisor1Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_CSupervisor1Id;
            }
            else if (stageid == 2 && positionid == 4)
            {
                AF_StageEmp.StartEmpId = af_manpower.ST_CSupervisor2Id;
                AF_StageEmp.EndEmpId = af_manpower.ET_CSupervisor2Id;
            }


            return Json(AF_StageEmp, JsonRequestBehavior.AllowGet);
        }

        public void Save_AF_ManPower(int aflotid, int stageid, int positionid, int startemp, int endemp)
        {

            if (stageid == 1)
            {

                switch (positionid)
                {

                    case 1:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 114, startemp, endemp);
                        break;

                    case 2:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 115, startemp, endemp);
                        break;

                    case 3:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 25, startemp, endemp);
                        break;

                    case 4:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 110, startemp, endemp);
                        break;
                }
            }

            else if (stageid == 2)
            {

                switch (positionid)
                {

                    case 1:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 112, startemp, endemp);
                        break;

                    case 2:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 113, startemp, endemp);
                        break;

                    case 3:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 26, startemp, endemp);
                        break;

                    case 4:
                        operationdb.AF_PARAM_EMP_SP(aflotid, 111, startemp, endemp);
                        break;
                }
            }
            operationdb.SaveChanges();

        }
        public JsonResult RefStage_Phase(int stageid)
        {

            var ref_phase = (from rphase in operationdb.VWAF_ParamDetail
                             where rphase.AF_ParamGroup1Id == stageid
                             && rphase.AF_ParamGroup2Id == 2
                             && rphase.AFengunit == "date"
                             select rphase).ToList();



            return Json(ref_phase, JsonRequestBehavior.AllowGet);
        }

        public JsonResult afblister_wt_data(int aflotid)
        {

            var ablister_wt = (from ablister in operationdb.VWAF_BlisterReceive_Wt
                               where ablister.AF_LotId == aflotid
                               select ablister).First();

            return Json(ablister_wt, JsonRequestBehavior.AllowGet);
        }


        public JsonResult qig_inspect_pcs(int aflotid, int afparamid, int afqigtypeid,
                                          int afcw, int afqighrid)
        {

            var qig_inspect = (from qinspect in operationdb.AF_QIG_Val
                               where
                                   qinspect.AF_LotId == aflotid &&
                                   qinspect.AF_ParamId == afparamid &&
                                   qinspect.AF_QIGTypeId == afqigtypeid &&
                                   qinspect.AFCW == afcw &&
                                   qinspect.AF_QIGHourId == afqighrid
                               select qinspect).FirstOrDefault();

            Models.AF_QIG_PC_VAL qig_pc = new Models.AF_QIG_PC_VAL();

            qig_pc.QIG_PCS = qig_inspect.AFQIG_pcs;


            return Json(qig_pc, JsonRequestBehavior.AllowGet);
        }

        public void qig_save_pcs(int aflotid, int afparamid, int afqigtypeid,
                                          int afcw, int afqighrid, float afqighr)
        {

            if (afparamid == 70)
            {
                operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, 3, afcw, afqighrid, afqighr);
            }
            else
            {
                operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, afqigtypeid, afcw, afqighrid, afqighr);
            }

            operationdb.SaveChanges();
        }



        public JsonResult RefStage_Data(int aflotid, int paramid, int temp_paramid, int delay_paramid)
        {

            var ref_phase_dtime = (from rphase_dtime in operationdb.AF_Param_DTime_Val
                                   where rphase_dtime.AF_ParamId == paramid
                                    && rphase_dtime.AF_LotId == aflotid
                                   select rphase_dtime).FirstOrDefault();

            var ref_phase_temp = (from rphase_temp in operationdb.AF_Param_Num_Val
                                  where rphase_temp.AF_ParamId == temp_paramid
                                    && rphase_temp.AF_LotId == aflotid
                                  select rphase_temp).FirstOrDefault();

            var ref_phase_delay = (from rphase_delay in operationdb.AF_Param_Str_Val
                                   where rphase_delay.AF_ParamId == delay_paramid
                                    && rphase_delay.AF_LotId == aflotid
                                   select rphase_delay).FirstOrDefault();

            Models.AFRefPhase AFRef_Phase = new Models.AFRefPhase();



            if (ref_phase_dtime == null)
            {
                AFRef_Phase.AF_StagePhase_StartDate = DateTime.UtcNow;
                AFRef_Phase.AF_StagePhase_EndDate = DateTime.UtcNow;
            }
            else
            {
                AFRef_Phase.AF_StagePhase_StartDate = ref_phase_dtime.AF_StartTimeVal;
                AFRef_Phase.AF_StagePhase_EndDate = ref_phase_dtime.AF_EndTimeVal;
            }

            if (ref_phase_temp == null)
            { AFRef_Phase.AF_StagePhase_Temperature = 0; }
            else { AFRef_Phase.AF_StagePhase_Temperature = ref_phase_temp.AF_NumVal; }

            if (ref_phase_delay == null)
            { AFRef_Phase.AF_StagePhase_Delay = "-"; }
            else { AFRef_Phase.AF_StagePhase_Delay = ref_phase_delay.AF_StrVal; }

            return Json(AFRef_Phase, JsonRequestBehavior.AllowGet);
        }

        public void Save_RefStage_Data(int aflotid, int date_paramid, int temp_paramid, int delay_paramid,
            DateTime startdate_stage, DateTime enddate_stage, float temp_stage, string delay_stage
            )
        {
            operationdb.AF_PARAM_NUMERIC_SP(aflotid, temp_paramid, temp_stage);
            //operationdb.AF_PARAM_STR_SP(aflotid, delay_paramid, delay_stage);
            operationdb.AF_PARAM_DTIME_SP(aflotid, date_paramid, startdate_stage, enddate_stage);

            operationdb.SaveChanges();

        }

        public void Save_MouldCastTime_Data(int aflotid, DateTime startdate_cast)
        {
            operationdb.AF_PARAM_DTIME_SP(aflotid, 122, startdate_cast, startdate_cast);

            operationdb.SaveChanges();
        }
        //saving delays 
        public void Save_Delay(List<DelayReason> items)
        {
            var delays = items;
            int aflotid;
            int paramid;
            int delay;

            for (int i = 0; i < delays.Count; i++)
            {
                aflotid = delays[i].aflotid;
                paramid = delays[i].paramid;
                delay = delays[i].val;

                operationdb.AF_PARAM_REASON_SP(aflotid, paramid, delay);
                operationdb.SaveChanges();
            }


        }

        public class DelayReason
        {
            public int aflotid { get; set; }
            public int paramid { get; set; }
            public int val { get; set; }
        }
        //Deleting delays
        public void Delete_Delay(int aflotid, int delay_paramid)
        {
            operationdb.AF_DELETE_REASON_SP(aflotid, delay_paramid);
            operationdb.SaveChanges();
        }

        //
        public void Save_CastTime_Data(int aflotid, DateTime startdate_cast, DateTime enddate_cast)
        {
            operationdb.AF_PARAM_DTIME_SP(aflotid, 24, startdate_cast, enddate_cast);

            operationdb.SaveChanges();

        }

        public void Save_Cast2ndTime_Data(int aflotid, DateTime startdate_cast, DateTime enddate_cast)
        {
            operationdb.AF_PARAM_DTIME_SP(aflotid, 118, startdate_cast, enddate_cast);

            operationdb.SaveChanges();

        }

        public void Save_Cast_WheelMoulding(int aflotid, int afmouldnum, int afwheelnum, int afmouldstat)
        {
            int afparamid = afwheelnum == 1 ? 34 : 35;

            operationdb.AF_PARAM_MOULD_SP(aflotid, afmouldnum, afparamid, afwheelnum, afmouldstat);

            operationdb.SaveChanges();

        }

        public JsonResult af_cast_manpoweremp(int aflotid, int afparamid)
        {
            var castmanpower = (from emp in operationdb.AF_Param_Emp_Val
                                where emp.AF_LotId == aflotid && emp.AF_ParamId == afparamid
                                select emp).FirstOrDefault();

            Models.AFCastManPower cmanpower = new Models.AFCastManPower();

            cmanpower.StartEmpId = castmanpower.AF_StartEmpId;
            cmanpower.EndEmpId = castmanpower.AF_EndEmpId;

            return Json(cmanpower, JsonRequestBehavior.AllowGet);
        }

        public void Save_AF_CastManPower(int aflotid, int positionid, int startemp, int endemp)
        {
            operationdb.AF_PARAM_EMP_SP(aflotid, positionid, startemp, endemp);

            operationdb.SaveChanges();

        }

        public void Remove_RefStage_Dates(int aflotid, int date_param_id)
        {
            PASAROperations.Models.AF_Param_DTime_Val dTimeVal = operationdb.AF_Param_DTime_Val.Where(dt => dt.AF_LotId == aflotid && dt.AF_ParamId == date_param_id).FirstOrDefault();

            if (dTimeVal != null)
            {
                operationdb.AF_Param_DTime_Val.Remove(dTimeVal);
                operationdb.SaveChanges();
            }

        }

        public SelectList AFTarget_list_data()
        {

            var af_target = (from alot in operationdb.AF_Target_Default
                             orderby alot.AF_Target_DefaultId descending
                             select alot);

            SelectList af_target_list = new SelectList(af_target, "AF_Target_DefaultId", "TargetName");

            return af_target_list;
        }

        public ActionResult AFTargets()
        {
            ViewData["af_lot_list"] = AFLot_list_data();
            ViewData["af_target_list"] = AFTarget_list_data();

            return View();
        }

        public JsonResult AFTargets_tbl(int afdefaultid)
        {
            var atargets_ = (from targets in operationdb.VWAF_Targets
                             where targets.AF_Target_DefaultId == afdefaultid
                             select targets);

            return Json(atargets_, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFTargets_data(int aflotid)
        {
            var target_ = (from targets in operationdb.VWAF_Lot_Targets
                           where targets.AF_LotId == aflotid
                           select targets);

            return Json(target_, JsonRequestBehavior.AllowGet);
        }


        public void SavetoLot_AFTarget(int aflotid, int def_targetid)
        {
            operationdb.AF_PARAM_LOT_TARGET_SP(aflotid, def_targetid);
            operationdb.SaveChanges();
        }

        public void SaveNew_AFTarget(string afdefaultname)
        {
            operationdb.AF_TARGET_DEFAULT_SP(afdefaultname, 1);

            operationdb.SaveChanges();
        }

        public void Save_AFTarget(List<Target> targets)
        {
            var t = targets;
            int defid;
            int paramid;
            double min;
            double max;
            String display;

            for (int i = 0; i < t.Count; i++)
            {
                defid = t[i].defid;
                paramid = t[i].id;
                min = Double.Parse(t[i].min);
                max = Double.Parse(t[i].max);
                display = t[i].display ?? "";

                operationdb.AF_PARAM_NUM_TARGETVAL_SP(defid, paramid, min, max, display);

                operationdb.SaveChanges();
            }
        }

        public JsonResult AFTarget_Default(string aftargetname)
        {
            var target = operationdb.AF_Target_Default.Where(afdefaultid => afdefaultid.TargetName == aftargetname).First();
            var defaultid = target.AF_Target_DefaultId;

            return Json(defaultid, JsonRequestBehavior.AllowGet);
        }

        public class Target
        {
            public int defid { get; set; }
            public int id { get; set; }
            public String min { get; set; }
            public String max { get; set; }
            public String display { get; set; }
        }

        public JsonResult AFInventory_emp_data(DateTime afinv_date)
        {
            var date = afinv_date.Date;
            var emp_ = (from emp in operationdb.VWAFAnode_Inventory_Employee
                        where emp.InvEmpDate == date
                        select emp);

            return Json(emp_, JsonRequestBehavior.AllowGet);
        }
        //Refining
        //public JsonResult AFDelay_Reason_data(DateTime afinv_date)
        //{
        //    var date = afinv_date.Date;
        //    var emp_ = (from emp in operationdb.VWAF_DelayReasons
        //                where emp.InvEmpDate == date
        //                select emp);

        //    return Json(emp_, JsonRequestBehavior.AllowGet);
        //}
        //
        public JsonResult AFInventory_tblnum_data(DateTime afinv_date)
        {
            var inv_num = (from inv in operationdb.VWAFAnode_PreviousInventory
                           where inv.InvNumDate != null
                           select inv);
            var inv_curr = (from inv in operationdb.VWAFAnode_Inventory
                            where inv.InvNumDate == afinv_date
                            select inv);
            if (inv_curr.Count() == 0)
            {
                return Json(inv_num, JsonRequestBehavior.AllowGet);
            }
            else
                return Json(inv_curr, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AFInventory_tblstr_data(DateTime afinv_date)
        {
            var inv_str = (from inv in operationdb.VWAFAnode_PreviousInventory
                           where inv.InvStrDate != null
                           select inv);
            var inv_curr = (from inv in operationdb.VWAFAnode_Inventory
                            where inv.InvStrDate == afinv_date
                            select inv);
            if (inv_curr.Count() == 0)
            {
                return Json(inv_str, JsonRequestBehavior.AllowGet);
            }
            else
                return Json(inv_curr, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AF_Inventory_prev_val(DateTime afinv_date)
        {
            var inv_prev = (from inv in operationdb.AF_Param_Num_Inv_Val
                            where inv.AF_Inventory_Date == afinv_date
                            select new { inv.AF_NumVal });

            return Json(inv_prev, JsonRequestBehavior.AllowGet);
        }

        public void Save_Inventory(List<Inventory_Obj> items)
        {
            var inv = items;
            DateTime date = items[0].date;
            int id;
            string Str_Val;
            int Num_Val;

            for (int i = 0; i < inv.Count; i++)
            {
                id = inv[i].id;
                Str_Val = inv[i].Str_Val;
                Num_Val = inv[i].Num_Val;

                //operationdb.AF_PARAM_INVENTORY_STRING_SP(date, id, Str_Val);
                if (Str_Val != null && Num_Val == -1)
                {
                    operationdb.AF_PARAM_INVENTORY_STRING_SP(date, id, Str_Val);
                }
                if (Str_Val == null && Num_Val != -1)
                {
                    operationdb.AF_PARAM_INVENTORY_NUMERIC_SP(date, id, Num_Val);
                }
                operationdb.SaveChanges();
            }

        }

        public void Save_Inv_Emp(DateTime date, int empid1, int empid2, int empid3)
        {
            operationdb.AF_PARAM_INVENTORY_Emp_SP(date, 86, empid1);
            operationdb.AF_PARAM_INVENTORY_Emp_SP(date, 87, empid2);
            operationdb.AF_PARAM_INVENTORY_Emp_SP(date, 88, empid3);
            operationdb.SaveChanges();
        }

        public class Inventory_Obj
        {
            public DateTime date { get; set; }
            public int id { get; set; }
            public String Str_Val { get; set; }
            public int Num_Val { get; set; }
        }

        public void Save_QIG(List<QIG_data> items)
        {
            var qig_data = items;
            int aflotid;
            int afparamid;
            int afqigtypeid;
            int afcw;
            int afhrid;
            float val;

            for (int i = 0; i < qig_data.Count; i++)
            {
                aflotid = qig_data[i].aflotid;
                afparamid = qig_data[i].afparamid;
                afqigtypeid = qig_data[i].afqigtypeid;
                afcw = qig_data[i].afcw;
                afhrid = qig_data[i].afhrid;
                val = qig_data[i].val;

                if (val != -1)
                {
                    if (afparamid == 70 && afparamid == 1304 && afparamid == 1306)
                    {
                        operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, 3, afcw, afhrid, val);
                        operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, 4, afcw, afhrid, val);
                        operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, 5, afcw, afhrid, val);
                    }

                    else
                    {
                        operationdb.AF_PARAM_QIG_SP(aflotid, afparamid, afqigtypeid, afcw, afhrid, val);
                    }
                }
            }

            operationdb.SaveChanges();
        }

        public class QIG_data
        {
            public int aflotid { get; set; }
            public int afparamid { get; set; }
            public int afqigtypeid { get; set; }
            public int afcw { get; set; }
            public int afhrid { get; set; }
            public float val { get; set; }
        }

        public JsonResult QIG_RDCFLL_data(int aflotid)
        {
            var qig_rf = (from RF in operationdb.VWAF_QIGOthers
                          where RF.AF_LotId == aflotid
                          select RF);
            return Json(qig_rf, JsonRequestBehavior.AllowGet);
        }

        //public void Save_QIG_Others(int aflotid, string rdc_paramid, string fll_paramid)
        //{
        //    if (rdc_paramid != "")
        //        operationdb.AF_PARAM_NUMERIC_SP(aflotid, 119, Double.Parse(rdc_paramid));
        //    if (fll_paramid != "")
        //        operationdb.AF_PARAM_NUMERIC_SP(aflotid, 120, Double.Parse(fll_paramid));
        //    operationdb.SaveChanges();
        //}

        public void Save_QIG_Others(List<QIG_Others> items)
        {
            var others = items;
            int aflotid;
            int paramid;
            int numval;

            for (int i = 0; i < others.Count; i++)
            {
                aflotid = others[i].aflotid;
                paramid = others[i].paramid;
                numval = others[i].numval;

                operationdb.AF_PARAM_NUMERIC_SP(aflotid, paramid, numval);
                operationdb.SaveChanges();
            }
        }

        public class QIG_Others
        {
            public int aflotid { get; set; }
            public int paramid { get; set; }
            public int numval { get; set; }
        }


        public JsonResult Blister_Delay_Reasons(int delaygroupid)
        {
            var dly_bls = (from dly in operationdb.AF_Delay_Reason
                           where dly.AF_DelayReasonGroupId == delaygroupid
                           select new { dly.AF_DelayReasonId, dly.DelayReason });
            return Json(dly_bls, JsonRequestBehavior.AllowGet);
        }

        public void Save_Blister_Delay(int aflotid, int delayreasonid)
        {
            operationdb.AF_PARAM_NUMERIC_INT_SP(aflotid, 1287, delayreasonid);
            operationdb.SaveChanges();
        }

        public JsonResult Lot_1()
        {
            var results1 = (from alots in operationdb.VWAF_Lot_ProdYearDetail where alots.AF_NumId == 1 select alots).ToList();

            return Json(results1, JsonRequestBehavior.AllowGet);
    }
        public JsonResult Lot_2()
        {
            var results1 = (from alots in operationdb.VWAF_Lot_ProdYearDetail where alots.AF_NumId == 2 select alots).ToList();

            return Json(results1, JsonRequestBehavior.AllowGet);
        }

        //New AF Logsheet
        public ActionResult AFLotLists()
        {


            var results1 = (from c in operationdb.VWAF_LotDetail where c.AF_LotId == 1 select c).First();
            var results2 = (from c in operationdb.VWAF_LotDetail where c.AF_LotId == 2 select c).First();


            ViewBag.AF1 = results1.AF_LotId;
            ViewBag.AF2 = results2.AF_LotId;

            var afnum = (from num in operationdb.AF_Lot select num).ToList();
            SelectList num_list = new SelectList(afnum, "AF_LotId", "AF_NumId");
          
            ViewData["num_list"] = num_list;


            return View("AFLotLists");
        }
        //public ActionResult AFLotLists2()
        //{
        //    //var results = (from alots in operationdb.VWAF_Lot_ProdYearDetail orderby alots.AFLotNo descending select alots).ToList();
           



        //    return View(results2);
        //}
    //
        //public ActionResult AFLot_List(int aflotid)
    //{

        //    var aflot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
        //                 where alot.AF_LotId == aflotid
        //                 select alot);

        //    return Json(aflot, JsonRequestBehavior.AllowGet);
        //}

        //AFView
        //public ActionResult AFView()
        //{


        //    return View();
        //}

        public JsonResult AFView(int afnumid, int aflotid)
        {
            var cyclelistperaf = (from afcyc in operationdb.VWAF_Lot_ProdYearDetail
                                  where afcyc.AF_NumId == afnumid
                                  orderby afcyc.AFLotNo descending
                                  select afcyc);


            return Json(cyclelistperaf, JsonRequestBehavior.AllowGet);
        }
        //
        public ActionResult AFLogsheetData(int id, string sdate, string edate, string aflotid)
        {
            //var aflist = new SelectList(new[]{
            //new {id = "AF1", Name = "AF 1"},
            //new {id = "AF2", Name = "AF 2"},
            
            //new {id = "All", Name = "All"}
            //}, "ID", "Name", aflotid);



            //ViewData["AFList"] = aflotid;

            var af_cust = (from acust in operationdb.AF_Customer select acust);
            SelectList Cust_List = new SelectList(af_cust, "AF_CustomerId", "AF_CustomerName");
            ViewData["Cust_List"] = Cust_List;




            var results = (from c in operationdb.VWAF_LotDetail where c.AF_LotId == id select c).First();
            
            //upper part of AFlogsheetData
            ViewBag.aflotselectsdate = sdate;
            ViewBag.aflotselectedate = edate;
            ViewBag.aflotid = aflotid;

            ViewBag.AFlogsheet_aflotId = results.AF_LotId;

            ViewBag.AFlogsheet_AFLotNo = results.AFLotNo;
            ViewBag.AFlogsheet_AFNum = results.AF_NumId;
            ViewBag.AFlogsheet_StartTime = results.LotStartTime.HasValue ? results.LotStartTime.Value.ToString("yyyy-MM-dd HH:mm:ss")
                                           : "-";
            ViewBag.AFlogsheet_EndTime = results.LotEndTime.HasValue ? results.LotEndTime.Value.ToString("yyyy-MM-dd HH:mm:ss")
                                          : "-";
            ViewBag.AFlogsheet_AFStatId = results.AF_StatusId;
            ViewBag.AFlogsheet_CycStatus = results.AF_StatusName;
            //end of upper part


            //ViewBag.CFlogsheet_CycStatus = results.AF_StatusName;

            //var activity = (from ac in operationdb.ActivityCode where ac.ActivityDesc == id select ac).First();

            return View();
        }


        //Shift Reports
        public ActionResult ShiftReports()
        {
            var af_manpower = (from manpower in operationdb.VWAF_Employee orderby manpower.Fullname ascending select manpower);

            SelectList ManP_List = new SelectList(af_manpower, "CompanyId", "Fullname");

            ViewData["ManP_List"] = ManP_List;

            return View();
        }
        public PartialViewResult af_tabs(string partialview_name)
        {
            var af_manpower = (from manpower in operationdb.VWAF_Employee orderby manpower.Fullname ascending select manpower);

            SelectList ManP_List = new SelectList(af_manpower, "CompanyId", "Fullname");

            ViewData["ManP_List"] = ManP_List;

            //FSF_Manpower_data();
            return PartialView(partialview_name);
        }

        //New AF 
        public PartialViewResult af_tabs2(string partialview_name)
        {
           
            return PartialView(partialview_name);
        }


        public JsonResult Select_newaf_Date(DateTime af_prod_date, int af_prod_Shift)
        {
            var prod = operationdb.AF_PRODID_CHANGE(af_prod_date, af_prod_Shift);
            operationdb.SaveChanges();

            return Json(prod, JsonRequestBehavior.AllowGet);
        }



        //public JsonResult Load_Shift_ManPower(DateTime date, int shiftid)
    //{
        //    var mp = (from m in operationdb.VWAF_Manpower
        //              where m.AF_ProductionDate == date && m.AF_ShiftId == shiftid
        //              select m);

        //    return Json(mp, JsonRequestBehavior.AllowGet);
    //}

        public ActionResult Select_ManPower(DateTime date, int shiftid)
        {
            var result = (from fc in operationdb.VWAF_Manpower
                          where fc.AF_ProductionDate == date && fc.AF_ShiftId == shiftid
                          select new
                            { 
                                  fc.AF_RoleTypeId,
                                  fc.AF_EmpId,
                                  fc.AF_ShiftId,
                                  fc.Emp1ID,
                                  fc.Emp2ID
                            }).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
        }

        public void Save_ShiftManpower(DateTime date, int shiftid)
        {
            operationdb.AF_SHIFTASSIGN_SP(date, shiftid);
            operationdb.SaveChanges();
        }
        public int getShiftId(DateTime date, int shiftid)
        {
            int shiftassignid = operationdb.AF_Prod.FirstOrDefault(a => a.AF_Prod_Date == date && a.AF_Prod_Shift == shiftid).AF_Prod_Id;
          
            return shiftassignid;
        }

        public void Delete_Manpower(int prodid)
        {
            operationdb.Database.ExecuteSqlCommand("DELETE FROM [AF_Manpower] WHERE AF_Prod_Id = @p0", prodid);
            operationdb.SaveChanges();
        }

        public void Save_Shift_Manpower(List<Shift_Manpower> items)
        {
            var mp = items;
            int shiftassignid;
            int roletypeid;
            int empid;

            string afemp_AddidA;
            string afemp_AddidB;


            for (int i = 0; i < mp.Count; i++)
            {
                int tempa;
                int tempb;

                shiftassignid = mp[i].shiftassignid;
                roletypeid = mp[i].roletypeid;
                empid = mp[i].empid;

                afemp_AddidA = mp[i].empaid;
                afemp_AddidB = mp[i].empbid;

                if (afemp_AddidA == null)
                    tempa = 0;
                else
                    tempa = Int32.Parse(afemp_AddidA);

                if (afemp_AddidB == null)
                    tempb = 0;
                else
                    tempb = Int32.Parse(afemp_AddidB);

                operationdb.AF_MANPOWER_SP(shiftassignid, roletypeid, empid, tempa, tempb);
                operationdb.SaveChanges();
            }
        }
        public class Shift_Manpower
        {
            public int shiftassignid { get; set; }
            public int roletypeid { get; set; }
            public int empid { get; set; }

            public string empaid { get; set; }
            public string empbid { get; set; }
         

        }

        //public object empid { get; set; }

        public object AF_Prod_Date { get; set; }

        public object AF_Prod_Shift { get; set; }

        public int af_prod_shift { get; set; }

        public DateTime af_prod_date { get; set; }

        public object prod { get; set; }

        public int shiftid { get; set; }


        public ActionResult AFTimes()
        {
            //var af_manpower = (from manpower in operationdb.VWAF_Employee orderby manpower.Fullname ascending select manpower);

            //SelectList ManP_List = new SelectList(af_manpower, "CompanyId", "Fullname");

            //ViewData["ManP_List"] = ManP_List;
          

            return View();
        }


        //public ActionResult add_new_bp()
        //{
            //var activity_codelist = (from act in operationdb.AF_ActivityCode where act.ActivityCodeId select act);

            //var act_codelist = new SelectList(activity_codelist, "ActivityCodeId", "ActivityCodeName");

            //ViewBag.activity_codelist = activity_codelist;

           // return PartialView("_AF_add_start_end_time");
       // }


        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult startend_bp_Partial()
        {

            return PartialView("_AFstartend_bp");
        }

        //[OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        //public ActionResult startend_bp_Partial(int id, string sdate, string edate, string aflotid)
        //{
        //    var results = (from c in operationdb.VWAF_LotDetail where c.AF_LotId == id select c).First();


        //    ViewBag.aflotselectsdate = sdate;
        //    ViewBag.aflotselectedate = edate;
        //    ViewBag.aflotid = aflotid;

        //    ViewBag.AFlogsheet_aflotId = results.AF_LotId;

        //    ViewBag.AFlogsheet_AFLotNo = results.AFLotNo;
        //    ViewBag.AFlogsheet_AFNum = results.AF_NumId;
        //    ViewBag.AFlogsheet_StartTime = results.LotStartTime.HasValue ? results.LotStartTime.Value.ToString("yyyy-MM-dd HH:mm:ss")
        //                                   : "-";
        //    ViewBag.AFlogsheet_EndTime = results.LotEndTime.HasValue ? results.LotEndTime.Value.ToString("yyyy-MM-dd HH:mm:ss")
        //                                  : "-";
        //    ViewBag.AFlogsheet_AFStatId = results.AF_StatusId;
        //    ViewBag.AFlogsheet_CycStatus = results.AF_StatusName;

        //    return PartialView("_AFstartend_bp");
        //}

        //public JsonResult ActivityCode_autocomplete(string actcode_param)
        //{

        //    var ActCode_auto = (from afactcode in operationdb.AF_ActivityCode where afactcode.ActivityCodeName == actcode_param select new { afactcode.ActivityDesc, afactcode.ActivityCodeId, afactcode.FSFE_Charge, afactcode.CF_Charge, afactcode.AF_Charge }).First();

        //    return Json(ActCode_auto, JsonRequestBehavior.AllowGet);
        //}
        //Start Date Time Blister Prep
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult StartBlisterDateTime_Partial()
        {


            ViewBag.BlisterPrepDate_Today = DateTime.Today;

            ViewBag.Start_BlisterPrep = DateTime.Now;

            ViewBag.End_BlisterPrep = DateTime.Now.AddMinutes(1);
            return PartialView("_startdatetimebp");
        }
        //End Date Time Blister Prep
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult EndBlisterDateTime_Partial()
        {
            ViewBag.BlisterPrepDate_Today = DateTime.Today;

            ViewBag.Start_BlisterPrep = DateTime.Now;

            ViewBag.End_BlisterPrep = DateTime.Now.AddMinutes(1);
            return PartialView("_enddatetimebp");
        }

//----------------------------------------Reworked_Anode controllers---------------------------------//


        public ActionResult ReworkedAnodes()
        {
            return View();
        }

        public ActionResult Add_AFreworked_Partial()
        {

            ViewData["lotlist"] = AFLot_list_data();
            
            return PartialView("_AFreworked_add");
        }

        public void Save_Reworked(DateTime starttime, int af_lotid, double reworked_pcs)
        {
            operationdb.AF_REWORKEDANODES_SP(starttime, af_lotid, reworked_pcs);
            operationdb.SaveChanges();
        }
            
        public JsonResult AF_Load_reworked_monthyear(string date)
        {
            //var month_ = iMonth + 1;

            var load_reworkedanode = (from reworked_anode in operationdb.VWAF_ReworkedAnodes where reworked_anode.MonthYear == date orderby reworked_anode.ReworkedAnodeDate ascending select reworked_anode);
            return Json(load_reworkedanode, JsonRequestBehavior.AllowGet);
        }

        public void Delete_reworked(int AF_ReworkedAnodesId)
        {
            //Delete
            var del = operationdb.AF_ReworkedAnodes.Where(a => a.AF_AnodeReworkedId == AF_ReworkedAnodesId).First();
            operationdb.AF_ReworkedAnodes.Remove(del);
            operationdb.SaveChanges();
        }


//---------------------------------------------END---------------------------------------------------------------//

//--------------------------------------------AnodeCharged Controllers-------------------------------------------//


        public ActionResult AnodeCharged()
        {
            return View();
        }

        public ActionResult Add_anodecharged_Partial()
        {
         
            ViewData["lotlist"] = AFLot_list_data();

            return PartialView("_AFanodecharged_add");
        }

        public void Save_ancharged(DateTime starttime, int af_lotid, float prov_weight, int reworked_pcs)
        {
            operationdb.AF_AnodeCharged_SP(starttime, af_lotid, prov_weight, reworked_pcs);
            operationdb.SaveChanges();

        }

        public JsonResult AF_Load_anodecharged_monthyear(string date)
        {
            //var month_ = iMonth + 1;

            var load_anodecharged = (from anode_charged in operationdb.VWAF_AnodeCharged where anode_charged.MonthYear == date orderby anode_charged.AF_DTime ascending select anode_charged);
            return Json(load_anodecharged, JsonRequestBehavior.AllowGet);
        }


            
        public ActionResult Edit_ancharged_partial(int AF_AnodeChargedId)
        {
           

            var af_ancharged = (from ancharged in operationdb.AF_AnodeCharged where ancharged.AF_AnodeChargedId == AF_AnodeChargedId select  ancharged).First();

            ViewBag.ancharged_id = af_ancharged.AF_AnodeChargedId;
            ViewBag.AF_DTime = af_ancharged.AF_DTime.ToShortDateString();           
            ViewBag.AF_LotId = af_ancharged.AF_LotId;
            ViewBag.AF_Weight = af_ancharged.AF_Weight;
            ViewBag.AF_Pcs = af_ancharged.AF_Pcs;
            
            var AF_LotId = af_ancharged.AF_LotId;


            var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail where alot.AF_LotId == AF_LotId orderby alot.AFLotNo descending select alot).First();
            ViewBag.lotno = af_lot.AFLotNo;

            //SelectList af_lot_list = new SelectList(af_lot, "AF_LotId", "AFLotNo",AF_LotId);
            //ViewData["lotlist"] = af_lot_list;
            
            return PartialView("_AFanodecharged_edit");
        }
        
        public void edit_ancharged(int ancharged_id, DateTime starttime, float prov_weight, int reworked_pcs, int af_lotid)
        {
            //UPDATE
            var edit_ancharged = operationdb.AF_AnodeCharged.Where(a => a.AF_AnodeChargedId == ancharged_id && a.AF_LotId == af_lotid && a.AF_DTime == starttime).First();

            edit_ancharged.AF_DTime = starttime;
            edit_ancharged.AF_LotId = af_lotid;
            edit_ancharged.AF_Weight = prov_weight;
            edit_ancharged.AF_Pcs = reworked_pcs;
            operationdb.SaveChanges();

        }


        public void Delete_ancharged(int AF_AnodeChargedId)
        {
            //Delete
            var del = operationdb.AF_AnodeCharged.Where(a => a.AF_AnodeChargedId == AF_AnodeChargedId ).First();

            operationdb.AF_AnodeCharged.Remove(del);
            operationdb.SaveChanges();
        }

        

//----------------------------------------------END----------------------------------------//

//--------------------------------------------PreCasting Controllers-----------------------------------------//


        public JsonResult load_ladle(int aflotno)
        {
           

            var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                          where alot.AFLotNo == aflotno                      
                          select alot).First();

           var selectval = (from alots in operationdb.AF_Param_Num_Val
                         where alots.AF_LotId == af_lot.AF_LotId  
                         select alots);

           var af_lot_empty = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                               where alot.AFLotNo == aflotno
                               select alot);

           //disable child objects that may be creating some circular loop that will never ending
            operationdb.Configuration.ProxyCreationEnabled = false;
          
            if (selectval.Count() > 0)
            {
                return Json(selectval, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(af_lot_empty, JsonRequestBehavior.AllowGet);
            }
        
        }
         
       public void save_precast(List<save_items> items)
       {                   
            var item_lm = items;
            int aflotid;
            int paramid;
            int numval;

            for (int x = 0; x < item_lm.Count; x++)
            {
                aflotid = item_lm[x].aflotid;
                paramid = item_lm[x].paramid;
                numval = item_lm[x].numval;

                operationdb.AF_PARAM_NUMERIC_SP(aflotid, paramid, numval);
                operationdb.SaveChanges();
            }
            
        }
      

       public JsonResult load_mouldr(int aflotno)
       {

           var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                         where alot.AFLotNo == aflotno
                         select alot).First();

           var selectval = (from alots in operationdb.AF_MouldReplacement
                            where alots.AF_LotId == af_lot.AF_LotId
                            select alots);

           //disable child objects that may be creating some circular loop that will never ending
           operationdb.Configuration.ProxyCreationEnabled = false;

           return Json(selectval, JsonRequestBehavior.AllowGet);
       }

       public void save_mouldr(List<save_mouldreplace> items)
       {                     
            var item_lm = items;
            int aflotid;
            int afmouldnum;
            int afwheelnum;

           


            for (int x = 0; x < item_lm.Count; x++)
            {
                aflotid = item_lm[x].aflotid;
                afwheelnum = item_lm[x].afwheelnum;
                afmouldnum = item_lm[x].afmouldnum;
                if (afmouldnum == 0)
                {
                    operationdb.Database.ExecuteSqlCommand("DELETE FROM [AF_MouldReplacement] WHERE  AF_MouldNo = @p0", afmouldnum);
                }
                else
                {
                    operationdb.AF_PARAM_MOULDREPLACEMENT_SP(aflotid, afmouldnum, afwheelnum);
                    operationdb.SaveChanges();
                }
                
            
            } 
        }


       public void Delete_mouldr(int aflotid)
       {
          
           operationdb.Database.ExecuteSqlCommand("DELETE FROM [AF_MouldReplacement] WHERE AF_LotId = @p0", aflotid);
           operationdb.SaveChanges();
       }

       public void save_precast_cust(List<save_customer_pc> items)
       {
           var item_lm = items;
           int aflotid;
           int custid;

           for (int x = 0; x < item_lm.Count; x++)
           {
               aflotid = item_lm[x].aflotid;
               custid = item_lm[x].custid;
               
               operationdb.AF_PARAM_NUMERIC_SP(aflotid, 1583, custid);
               operationdb.SaveChanges();
           }

       }
       public JsonResult precast_customer_data(int aflotno)
       {           
            var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                          where alot.AFLotNo == aflotno                      
                          select alot).First();

            var precast_cust = (from pcust in operationdb.AF_Param_Num_Val
                                where pcust.AF_LotId == af_lot.AF_LotId && pcust.AF_ParamId == 1583
                                select pcust);

           //disable child objects that may be creating some circular loop that will never ending
           operationdb.Configuration.ProxyCreationEnabled = false; 

           return Json(precast_cust, JsonRequestBehavior.AllowGet);
       }

       public ActionResult addprecast_partial()
       {
           @ViewBag.DateTimeNow = DateTime.Now;


           var activitycode_result = (from actcode in operationdb.AF_ActivityCode orderby actcode.AF_ActivityDesc ascending select actcode).ToList();


           return PartialView("_AFaddprecast", activitycode_result);
       
       }

       public ActionResult editprecast_partial(int actid)
       {
           var editact = (from act in operationdb.VWAF_TimeLogs where act.AF_TimeLogId == actid select act).First();

           ViewBag.starttime = editact.AF_StartTimeVal;
           ViewBag.endtime = editact.AF_EndTimeVal;
           ViewBag.remarks = editact.AF_TimeLog_Remarks;
           ViewBag.ActivityCodeName = editact.ActivityCodeName;
           ViewBag.ActivityDesc = editact.ActivityDesc;
           ViewBag.Duration = editact.Duration;
           ViewBag.AF_TimeLogId = editact.AF_TimeLogId;
           ViewBag.actcode_id = editact.AF_ActivityCodeId;
           
           var activitycode_result = (from actcode in operationdb.AF_ActivityCode orderby actcode.AF_ActivityDesc ascending select actcode).ToList();
           
           return PartialView("_AFeditprecast", activitycode_result);

       }

       public void add_precast_act(int aflotid_, int wheelid, int actcode_id, DateTime start_date, DateTime end_date, string pc_remarks)
       {

           operationdb.AF_TIMELOG_SP(aflotid_, wheelid, actcode_id, start_date, end_date, pc_remarks, 2);
           operationdb.SaveChanges();
         
       }



       public void save_edit_precast_act( int pc_timelog_Id, int aflotid_, int wheelid, int actcode_id, DateTime start_date, DateTime end_date, string pc_remarks)
       {

           var edit_precast_act = operationdb.AF_TimeLog.Where(a => a.AF_TimeLogId == pc_timelog_Id).First();

           edit_precast_act.AF_LotId = aflotid_;
           edit_precast_act.AF_StartTimeVal = start_date;
           edit_precast_act.AF_EndTimeVal = end_date;
           edit_precast_act.CastingWheelId = wheelid;
           edit_precast_act.AF_ActivityCodeId = actcode_id;
           edit_precast_act.AF_TimeLog_Remarks = pc_remarks;


           operationdb.SaveChanges();
       }        

       public void delete_precast_act(int actid)
       {
           //Delete
           var del = operationdb.AF_TimeLog.Where(a => a.AF_TimeLogId == actid).First();
           operationdb.AF_TimeLog.Remove(del);
           operationdb.SaveChanges();
       }


       public JsonResult load_PreCast_Act(int aflotno)
       {
                    

           var selectval = (from alots in operationdb.VWAF_TimeLogs
                            where alots.AF_LotId == aflotno && alots.AF_TabId == 2
                            select alots);

           //disable child objects that may be creating some circular loop that will never ending
           operationdb.Configuration.ProxyCreationEnabled = false;

           return Json(selectval, JsonRequestBehavior.AllowGet);
       }

       public JsonResult load_PreCast_Act_fortab(int aflotno)
       {

           var af_lot = (from alot in operationdb.VWAF_Lot_ProdYearDetail
                         where alot.AFLotNo == aflotno
                         select alot).First();


           var selectval = (from alots in operationdb.VWAF_TimeLogs
                            where alots.AF_LotId == af_lot.AF_LotId && alots.AF_TabId == 2
                            select alots);

           //disable child objects that may be creating some circular loop that will never ending
           operationdb.Configuration.ProxyCreationEnabled = false;

           return Json(selectval, JsonRequestBehavior.AllowGet);
       }

       public JsonResult ActivityCode_Intellisense(string actcode_param)
       {

           var ActCode_i = (from cfactcode in operationdb.AF_ActivityCode where cfactcode.AF_ActivityCodeName == actcode_param select new { cfactcode.AF_ActivityDesc, cfactcode.AF_ActivityCodeId}).FirstOrDefault();



           return Json(ActCode_i, JsonRequestBehavior.AllowGet);
       }
        
        

        public class save_items
        {
            public int aflotid { get; set; }
            public int paramid { get; set; }
            public int numval { get; set; }
        
        }

       public class save_mouldreplace
        {
            public int aflotid { get; set; }
            public int afwheelnum { get; set; }
            public int afmouldnum { get; set; }
          
        }
       public class save_customer_pc
       {
           public int aflotid { get; set; }
           public int custid { get; set; }

       }


      


 


          
//------------------------------------------End of PreCasting Controller--------------------------------------------------//
        //Af phase 2 partial view add new activity
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult AddnewActivity(string actcode_param)
        {
            //Date and Time
            ViewBag.AFStartDate_Today = DateTime.Today;
            ViewBag.Start_AFActivity = DateTime.Now;
            ViewBag.End_AFActivity = DateTime.Now.AddMinutes(1);
            //End

            //var ActCode_i = (from afactcode in operationdb.AF_ActivityCode where operationdb.AF_ActivityCodeName == actcode_param select new { operationdb.AF_ActivityDesc, operationdb.AF_ActivityCodeId}).First();

           
            return PartialView("_addnewactivity");
        }

//-------------------------------------------AF2 Casting Controller----------------------------------------------------------//


        public ActionResult addcasting_partial()
        {
            @ViewBag.DateTimeNow = DateTime.Now;
            
            var af_cw = (from cast in operationdb.AF_CastingWheel
                          orderby cast.CastingWheelId ascending
                          select cast);

            SelectList af_cwlist = new SelectList(af_cw, "CastingWheelId", "CastingWheelName");

            ViewData["af_cwlist"] = af_cwlist;    

            var activitycode_result = (from actcode in operationdb.AF_ActivityCode orderby actcode.AF_ActivityDesc ascending select actcode).ToList();

            return PartialView("_AFaddcasting", activitycode_result);

        }










//-------------------------------------------End of AF2 Casting Controller---------------------------------------------------//







    }
}
