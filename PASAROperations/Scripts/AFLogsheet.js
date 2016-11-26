var afserverpath = "";
//var afserverpath =  "/PASAROperation";

var selected = 0;
var aflotid_ddl = $('#aflot_ddl').val();
var lastclicked = 0;
var beingclicked = 0;

function SelectProdYear(AFnumId) {

    var prodyearid1 = $(ProdYearlist1).val();
    var prodyearid2 = $(ProdYearlist2).val();

    var prodyearid;

    if (AFnumId == 1) {
        prodyearid = prodyearid1;
    } else if (AFnumId == 2) {
        prodyearid = prodyearid2;
    }


    $.ajax({
        url: afserverpath + '/AnodeFurnace/EditProdYear/',
        data: { afnumid: AFnumId, prodyearid: prodyearid },
        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/AssignYear';
            alert('Prod Year for AF num:' + AFnumId + 'now saved!');
        }
    });
}

$('#af_createlotnum_btn').live('click', function () {
    load_partial_createlotnum();
});

$('#createlot_link').live('click', function () {
    load_partial_createlotnum();
});
//NewAF
$('#newaf_createlotnum_btn').live('click', function () {
    newload_partial_createlotnum();
});

$('#newcreatelot_link').live('click', function () {
    newload_partial_createlotnum();
});

$('#af_blister_rcv_btn').live('click', function () {
    af_lot_checker('addblister');
});

$('#afblister_link').live('click', function () {
    af_lot_checker('addblister');
});

$('#af_manpower_btn').live('click', function () {
    af_lot_checker('manpower');

});

$('#af_manpower_link').live('click', function () {
    af_lot_checker('manpower');
});

$('#af_stage_btn').live('click', function () {
    af_lot_checker('afstage');

});

$('#af_stage_link').live('click', function () {
    af_lot_checker('afstage');

});

$('#mould_casting_time_btn').live('click', function () {
    af_lot_checker('mould_cast_time');

});

$('#mould_casting_time_link').live('click', function () {
    af_lot_checker('mould_cast_time');

});


$('#casting_time_btn').live('click', function () {
    af_lot_checker('cast_time');

});

$('#casting_time_link').live('click', function () {
    af_lot_checker('cast_time');

});

$('#casting2nd_time_btn').live('click', function () {
    af_lot_checker('cast2nd_time');

});

$('#casting2nd_time_link').live('click', function () {
    af_lot_checker('cast2nd_time');

});




$('#casting_manpower_btn').live('click', function () {
    af_lot_checker('cast_manpower');

});

$('#casting_manpower_link').live('click', function () {
    af_lot_checker('cast_manpower');

});

$('#mreplacement_imgbtn').live('click', function () {
    af_lot_checker('cast_mouldreplace');

});

$('#afqig_imgbtn').live('click', function () {
    af_lot_checker('af_qig');

});

$('#afqig_link').live('click', function () {
    af_lot_checker('af_qig');

});

$('#save_reftargets_btn').live('click', function () {
    af_lot_checker('af_targets');

});

$('#save_reftargets_link').live('click', function () {
    af_lot_checker('af_targets');

});

$('#qig_others_imgbtn').live('click', function () {
    af_lot_checker('qig_others_imgbtn');
});


//--------------add reworked--------------------//
$('#reworked_add_btn').live('click', function () {
    load_partial_reworked();
});

$('#adds_datetime_bp').live('click', function () {
    load_partial_addstartdatetime();
});

$('#adde_datetime_bp').live('click', function () {
    load_partial_addenddatetime();
});
$('#reworked_add_lnk').live('click', function () {
    load_partial_reworked();
});
//-----------------end--------------------------//

//--------------add anode Charged---------------//

$('#ancharged_add_btn').live('click', function () {
    load_partial_anodecharged();
});

$('#ancharged_add_lnk').live('click', function () {
    load_partial_anodecharged();
});

//-------------------end------------------------//









function load_partial_manpower() {

    var partialview_link = afserverpath + "/AnodeFurnace/ManPower_Partial/?aflotid=" + aflotid_ddl;
    $('#Dialog_AFManPower').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_afstage() {

    var partialview_link = afserverpath + "/AnodeFurnace/AFStage_Partial/?aflotid=" + aflotid_ddl;
    $('#Dialog_AFStage').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}


function load_partial_createlotnum() {

    var partialview_link = afserverpath + "/AnodeFurnace/CreateLot_Partial";
    $('#Dialog_CreateLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}
//NewAF
function newload_partial_createlotnum() {

    var partialview_link = afserverpath + "/AnodeFurnace/NewCreateLot_Partial";
    $('#Dialog_CreateLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

//-----------------------add reworked-------------------------------//
function load_partial_reworked() {

    var partialview_link1 = afserverpath + "/AnodeFurnace/Add_AFreworked_Partial";
    $('#dialog_reworked_add').load(partialview_link1, function () {
        $(this).dialog('open');
    });

    return false;
}
//---------------------------end-----------------------------------//

//-----------------------add Anode Charged-------------------------//
function load_partial_anodecharged() {

    var partialview_link = afserverpath + "/AnodeFurnace/Add_anodecharged_Partial";
    $('#dialog_ancharged_add').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}
//--------------------------end------------------------------------//



function load_partial_afblister() {

    var partialview_link = afserverpath + "/AnodeFurnace/Add_AFBlister_Partial";
    $('#Dialog_AFBlisterAdd').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_editlotnum() {

    var partialview_link = afserverpath + "/AnodeFurnace/EditLot_Partial";
    $('#Dialog_EditLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}
//NewAF
function load_partial_editlotnum() {

    var partialview_link = afserverpath + "/AnodeFurnace/NewEditLot_Partial";
    $('#Dialog_NewEditLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_mouldcastingtime() {

    var aflotid = $('#aflot_ddl').val();

    var partialview_link = afserverpath + "/AnodeFurnace/MouldCastingTime_Partial/?aflotid=" + aflotid;

    $('#Dialog_MouldCastingTime').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_castingtime() {

    var aflotid = $('#aflot_ddl').val();

    var partialview_link = afserverpath + "/AnodeFurnace/CastingTime_Partial/?aflotid=" + aflotid;

    $('#Dialog_CastingTime').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_casting2ndtime() {

    var aflotid = $('#aflot_ddl').val();

    var partialview_link = afserverpath + "/AnodeFurnace/Casting2ndTime_Partial/?aflotid=" + aflotid;

    //$('#Dialog2nd_CastingTime').load(partialview_link, function () {
    //    $(this).dialog('open');
    //});
    var cast_start1sttime = $('#cast_starttime_td').text();

    if (cast_start1sttime != "-") {
        $('#Dialog2nd_CastingTime').load(partialview_link, function () {
            $(this).dialog('open');
        });
    } else {
        alert('Input 1st Casting Time first.');
    }

    return false;
}

function load_partial_castingmanpower() {

    var partialview_link = afserverpath + "/AnodeFurnace/CastingManPower_Partial/";
    $('#Dialog_CastingManPower').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

function load_partial_castingmouldreplace() {

    var partialview_link = afserverpath + "/AnodeFurnace/CastingMouldReplace_Partial/";
    $('#Dialog_MouldReplace').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}


function load_partial_afqig() {

    var partialview_link = afserverpath + "/AnodeFurnace/AFQIG_Partial/";
    $('#Dialog_QIGInspect').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}
//add start date time for blsiter prep
function load_partial_addstartdatetime() {

    var partialview_link = afserverpath + "/AnodeFurnace/StartBlisterDateTime_Partial/";
    $('#Dialog_StartDateTimeBP').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

//add end date time for blister prep
function load_partial_addenddatetime() {

    var partialview_link = afserverpath + "/AnodeFurnace/EndBlisterDateTime_Partial/";
    $('#Dialog_EndDateTimeBP').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}


$('#afnum_ddl').live('change', function () {

    var afid = $('#afnum_ddl').val();

    var maxlotaf1 = $('#maxlotaf1').text();
    var maxlotaf2 = $('#maxlotaf2').text();

    if (afid == 1) {

        $('#createlot_span').text(maxlotaf1);

    } else if (afid == 2) {
        $('#createlot_span').text(maxlotaf2);
    }

});

$('#add_clotnum_ok_btn').live('click', function () {

    var afid = $('#afnum_ddl').val();
    var lotnum = $('#createlot_span').text();
    var prodyear;

    if (afid == 1) {

        prodyear = $('#maxaf1prodyear').text();

    } else if (afid == 2) {
        prodyear = $('#maxaf2prodyear').text();
    }


    $.ajax({

        url: afserverpath + '/AnodeFurnace/Add_LotNum/',
        data: {

            af_numid: afid,
            prodyearid: prodyear,
            af_lotnum: lotnum
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/CreateLotNo';
            alert('Lot now added.');
        }
    });
});

function view_aflot_edit_partial(afid) {
    var partialview_link = afserverpath + "/AnodeFurnace/EditLot_Partial/?aflotid=" + afid;
    $('#Dialog_EditLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}
//NewAF
function view_aflot_edit_partial(afid) {
    var partialview_link = afserverpath + "/AnodeFurnace/NewEditLot_Partial/?aflotid=" + afid;
    $('#Dialog_NewEditLotNum').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}

$('#edit_clotnum_ok_btn').live('click', function () {


    var aflotid_ = $('#aflotid').text();
    var afnumid_ = $('#afnum_edit_ddl').val();
    var afstatusid_ = $('#afstatus_ddl').val();

    $.ajax({

        url: afserverpath + '/AnodeFurnace/Edit_AFLot/',
        data: {

            af_lotid: aflotid_,
            afnumid: afnumid_,
            afstatusid: afstatusid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/CreateLotNo';
            alert('Lot now edited.');
        }
    });
});
//New AF
$('#newedit_clotnum_ok_btn').live('click', function () {


    var aflotid_ = $('#aflotid').text();
    var afnumid_ = $('#afnum_edit_ddl').val();
    var afstatusid_ = $('#afstatus_ddl').val();

    $.ajax({

        url: afserverpath + '/AnodeFurnace/Edit_AFLot/',
        data: {

            af_lotid: aflotid_,
            afnumid: afnumid_,
            afstatusid: afstatusid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/AFLotLists';
            alert('Lot now edited.');
        }
    });
});


$('#select_aflot_btn').live('click', function () {


    $('#aflot_div').css({ "background-color": "#FFFFCC" });
    $('input[type="text"], td,textarea,select').css({ "background-color": "#FFFFCC" });
    $('#total').css({ "background-color": "#FFFFFF" });
    selected = 1;
    load_af_page();


});

$('#select_date').live('click', function () {

    //$('#aflot_div').css({ "background-color": "#DE9C39" });
    $('#aflot_div').css({ "background-color": "#FFFFCC" });
    $('tr, input[type="text"], select,option, td').css({ "background-color": "#FFFFCC" });

    $('td input ').removeAttr('disabled');
    $('select').removeAttr('disabled');
    $('#btn_inv').removeAttr('disabled');
    selected = 1;
    load_af_page();
});




function load_af_page() {
    //$('#total').css({ "background-color": "#FFFFFF" });
    var pathname = window.location.pathname;
    var afpage = pathname.replace(afserverpath + '/AnodeFurnace/', '');

    switch (afpage) {

        case 'AFBlisterReceive':
            af_lotdetail();
            load_afblister_tbl();

            break;

        case 'AFRefining':
            af_lotdetail();
            load_afrefining_data();
            load_aflims_data();

            load_aflimstarget_data();
            load_pitarget_data();
            load_afpi_data();
            break;


        case 'AFCasting':
            af_lotdetail();
            load_afcasting_data();

            break;

        case 'AFQIG':
            af_lotdetail_qig();
            load_afqig_data_rework();
            load_afqig_data_cast();
            load_afgrade_a();
            load_afgrade_b();
            load_afqig_data_reject();
            qig_remarks_query();
            qig_customer_query();
            qig_others_query();
            break;

        case "AFTargets":
            af_lotdetail();
            load_targets();
            break;

        case "Inventory":
            load_inventory();
            findTotals();
            break;

        case "ReworkedAnodes":
            load_reworked_table();

            break;
        case "AnodeCharged":
            load_ancharged_table();

            break;
    }


}


$('#btn_inv').live('click', function () {
    findTotals();
    specify_cell();
});

function findTotals() {
    $(".af_tbl tr:not(:first)").each(function () {
        row_total = 0;
        $(".add:input", this).each(function () {
            row_total += Number($(this).val());
        });
        if (row_total != 0)
            $(".total", this).attr('value', row_total);
    });

    calculate_totals('ref');
    calculate_totals('lpg');
    calculate_totals('apm');
    calculate_totals('rth');
    calculate_totals('oth');

    calculate_inv_total();
}

function calculate_inv_total() {
    var total = 0;

    //var good = parseInt($('#ref_good_sum_table').val()) + parseInt($('#apm_good_sum_table').val()) + parseInt($('#lpg_good_sum_table').val()) + parseInt($('#rth_good_sum_table').val() + parseInt($('#oth_good_sum_table').val()));

    var gradeA = parseInt($('#ref_gradeA_sum_table').val()) + parseInt($('#apm_gradeA_sum_table').val()) + parseInt($('#lpg_gradeA_sum_table').val()) + parseInt($('#rth_gradeA_sum_table').val() + parseInt($('#oth_gradeA_sum_table').val()));

    var gradeB = parseInt($('#ref_gradeB_sum_table').val()) + parseInt($('#apm_gradeB_sum_table').val()) + parseInt($('#lpg_gradeB_sum_table').val()) + parseInt($('#rth_gradeB_sum_table').val() + parseInt($('#oth_gradeB_sum_table').val()));


    var rew = parseInt($('#ref_rew_sum_table').val()) + parseInt($('#apm_rew_sum_table').val()) + parseInt($('#lpg_rew_sum_table').val()) + parseInt($('#rth_rew_sum_table').val() + parseInt($('#oth_rew_sum_table').val()));
    var reworked = parseInt($('#ref_reworked_sum_table').val()) + parseInt($('#apm_reworked_sum_table').val()) + parseInt($('#lpg_reworked_sum_table').val()) + parseInt($('#rth_reworked_sum_table').val() + parseInt($('#oth_reworked_sum_table').val()));
    var rej = parseInt($('#ref_rej_sum_table').val()) + parseInt($('#apm_rej_sum_table').val()) + parseInt($('#lpg_rej_sum_table').val()) + parseInt($('#rth_rej_sum_table').val() + parseInt($('#oth_rej_sum_table').val()));

    total = gradeA + gradeB + rew + reworked + rej;

    //$('#good_total').val(good);

    $('#gradeA_total').val(gradeA);
    $('#gradeB_total').val(gradeB);

    $('#rew_total').val(rew);
    $('#reworked_total').val(reworked);
    $('#rej_total').val(rej);
    $('#total_total').val(total);
}

function calculate_totals(id) {
    var id_ = id;
    $('#' + id_ + ' tr:not(:first, not:eq(1) td').each(function () {
        var $td = $(this);
        // var goodTotal = 0, reworkableTotal = 0, reworkedTotal = 0, rejectTotal = 0, totalTotal = 0;
        var gradeA = 0, gradeB = 0, reworkableTotal = 0, reworkedTotal = 0, rejectTotal = 0, totalTotal = 0;

        //$('#' + id_ + ' .add[id*="good_"]').each(function () {
        //    goodTotal += Number($(this).val());
        //});
        $('#' + id_ + ' .add[id*="gradeA_"]').each(function () {
            gradeA += Number($(this).val());
        });
        $('#' + id_ + ' .add[id*="gradeB_"]').each(function () {
            gradeB += Number($(this).val());
        });


        $('#' + id_ + ' .add[id*="reworkable_"]').each(function () {
            reworkableTotal += Number($(this).val());
        });
        $('#' + id_ + ' .add[id*="reworked_"]').each(function () {
            reworkedTotal += Number($(this).val());
        });
        $('#' + id_ + ' .add[id*="reject_"]').each(function () {
            rejectTotal += Number($(this).val());
        });
        $('#' + id_ + ' .total[id*="total_"]').each(function () {
            totalTotal += Number($(this).val());
        });


        //$('#' + id_ + '_good_sum_table').val(goodTotal);

        $('#' + id_ + '_gradeA_sum_table').val(gradeA);
        $('#' + id_ + '_gradeB_sum_table').val(gradeB);
        $('#' + id_ + '_rew_sum_table').val(reworkableTotal);
        $('#' + id_ + '_reworked_sum_table').val(reworkedTotal);
        $('#' + id_ + '_rej_sum_table').val(rejectTotal);
        $('#' + id_ + '_total_sum_table').val(totalTotal);
    });
}

function load_inventory() {
    clear_inv_tbl();
    clear_inv_select();
    clear_css();

    var afinv_date_ = $('#thedate').val();

    //alert(afinv_date_);
    //alert('here');

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFInventory_emp_data/',
        data: {
            afinv_date: afinv_date_
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                $('#af_' + value.AF_ParamId).val(value.EmployeeValue);
                $('#af_' + value.AF_ParamId).val(value.EmployeeValue);
                $('#af_' + value.AF_ParamId).val(value.EmployeeValue);
            });



        }


    });
    load_inventory_numtbl(afinv_date_);
    load_inventory_strtbl(afinv_date_);


}
//table
function clear_inv_tbl() {
    //alert('test');
    $('.af_tbl input').each(function () {
        $(this).attr('value', "");
    });

}
//select
function clear_inv_select() {
    //alert('test');
    $('.floating-box select, textarea, .af_tbl input, td').each(function () {
        $(this).attr('value', "");
    });

}
function clear_css() {
    $('.af_tbl, input, td ,select,textarea,.right_div_tbl th').each(function () {
        $(this).css('background', 'border-color', "");
    });
}


function load_inventory_numtbl(afinv_date_) {
    clear_inv_tbl();
    clear_inv_select();
    clear_css();
    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFInventory_tblnum_data/',
        data: {
            afinv_date: afinv_date_
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                //var val = value.PrevDate;
                //var ticks_string = val.substring(6);
                //var ticks_num = parseInt(ticks_string);
                var date = formatDate_only(value.PrevDate);

                //load_inventory_numtbl(date);

                $('#gradeA_' + value.AF_ParamId).attr('value', value.NumValue);
                $('#gradeB_' + value.AF_ParamId).attr('value', value.NumValue);
                $('#total_' + value.AF_ParamId).attr('value', value.NumValue);
                //$('#good_' + value.AF_ParamId).attr('value', value.NumValue);
                $('#reworkable_' + value.AF_ParamId).attr('value', value.NumValue);
                $('#reworked_' + value.AF_ParamId).attr('value', value.NumValue);
                $('#reject_' + value.AF_ParamId).attr('value', value.NumValue);

            });

        }

    });


}

function load_inventory_strtbl(afinv_date_) {
    clear_inv_tbl();
    clear_inv_select();
    clear_css();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFInventory_tblstr_data/',
        data: {
            afinv_date: afinv_date_
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#goodlot_' + value.AF_ParamId).attr('value', value.StringValue);
                $('#reworkablelot_' + value.AF_ParamId).attr('value', value.StringValue);
                $('#reworkedlot_' + value.AF_ParamId).attr('value', value.StringValue);
                $('#rejectlot_' + value.AF_ParamId).attr('value', value.StringValue);

            });

        }

    });
}

$('#af_inventory_imgbtn').live('click', function () {
    var inventory_date = $('#thedate').val();
    var items = [];

    $('#ref, #lpg, #apm, #rth, #oth').find('td').each(function () {
        $(this).find('input').each(function () {
            if ($(this).val() != "") {
                var id = $(this).attr('id');
                var item = parseInt($(this).attr('id').match(/\d+/));
                items.push({
                    date: inventory_date,
                    id: item,
                    Str_Val: getString(item, id),
                    Num_Val: getNum(item, id)
                })
            }
        });
    });

    items = JSON.stringify({ 'items': items });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/Save_Inventory',
        data: items,
        success: function (data) {
            alert('Inventory data now saved.');
        }
    });

    var ins = $('#af_86').val();
    var sup = $('#af_87').val();
    var rev = $('#af_88').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Inv_Emp/',
        data: {
            date: inventory_date,
            empid1: ins,
            empid2: sup,
            empid3: rev,
        },
        type: 'POST',
        cache: false,
        success: function (data) {

        }
    });

});

function getString(i, id) {
    var str = "";
    var val = $('#' + id).val();

    if (!$.isNumeric(val))
        str = val;
    //alert(i);
    //var str = "";
    //if ($('#goodlot_' + i).val() != "")
    //    str = $('#goodlot_' + i).val();

    //if ($('#reworkablelot_' + i).val() != "")
    //    str = $('#reworkablelot_' + i).val();

    //if ($('#reworkedlot_' + i).val() != "")
    //    str = $('#reworkedlot_' + i).val();

    //if ($('#rejectlot_' + i).val() != "")
    //    str = $('#rejectlot_' + i).val();

    return str;
}

function getNum(i, id) {
    var num = -1;
    var val = $('#' + id).val();

    if ($.isNumeric(val))
        num = val;
    //alert(i);
    //var num = 0;

    //if ($('#total_' + i).val() != "")
    //    num = $('#total_' + i).val();

    //if ($('#good_' + i).val() != "")
    //    num = $('#good_' + i).val();

    //if ($('#reworkable_' + i).val() != "")
    //    num = $('#reworkable_' + i).val();

    //if ($('#reworked_' + i).val() != "")
    //    num = $('#reworked_' + i).val();

    //if ($('#reject_' + i).val() != "")
    //    num = $('#reject_' + i).val();

    return num;
}

function load_targets() {

    var aflotid_ = $('#aflot_ddl').val();

    //$('#edit_target_btn').prop("disabled", false);
    //$('#aftarget_ddl').prop("disabled", false);
    //$("#save_target_btn").prop("disabled", false);
    //$('#savetolot_target_btn').prop('disabled', false);
    //$('#saveasnew_target_btn').prop('disabled', false);

    $.ajax({

        url: afserverpath + '/AnodeFurnace/AFTargets_data/',
        data: {
            aflotid: aflotid_
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                //alert('success');
                $("#aftarget_ddl").attr('value', value.AF_Target_DefaultId);
            });

            load_aftarget_tbl();
        }
    });

}

$('#aftarget_ddl').live('change', 'prop', function () {

    var target_defid = $('#aftarget_ddl').val();
    $('#aflot_ddl').prop('disabled', false);
    $('#save_target_btn').prop('disabled', false);
    $('#saveasnew_target_btn').prop('disabled', false);

    load_aftarget_tbl();

});

function load_aftarget_tbl() {
    var target_defid = $('#aftarget_ddl').val();
    //alert(target_defid);

    $.ajax({

        url: afserverpath + '/AnodeFurnace/AFTargets_tbl/',
        data: {
            afdefaultid: target_defid
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                //alert(value.AF_ParamId);
                $('#ptargetmin_' + value.AF_ParamId).text("0");
                $('#ptargetmax_' + value.AF_ParamId).text("0");

                $('#ptargetmin_' + value.AF_ParamId).text(value.AFTargetVal_Min);
                $('#ptargetmax_' + value.AF_ParamId).text(value.AFTargetVal_Max);
            });

        }
    });
}

$('#edit_target_btn').live('click', function () {
    $('.select').each(
            function () {
                if ($(this).find('input').length) {
                    $(this).text($(this).find('input').val());
                    $('.xx').html('<img src="/Content/edit_btn.gif" title="Edit">').fadeIn(); $('#edit_target_btn').prop("value", 'Edit');
                }
                else {
                    var t = $(this).text();
                    $(this).html($('<input type="number" onkeypress="return NumericOnly(event)"/>', { 'value': t }).val(t));
                    $('#edit_target_btn').prop("value", 'Done');
                }
            });

    $('input').focus(function () {
        $(this).select();
    });

    $('.selectdate').each(
        function () {
            if ($(this).find('input').length) {
                $(this).text($(this).find('input').val());
            }
            else {
                var t = $(this).text();
                $(this).html($('<input type="date"/>', { 'value': t }).val(t));
                //$('.xx').html('<img src="/Content/done-icon.png">');
            }
        });
});

function save_target(target_defid) {
    var target_defid_ = target_defid
    var targets = [];

    for (i = 123; i <= 158; i++) {
        if (i == 136 || i == 150 || i == 153)
            i++;
        targets.push({
            defid: target_defid_,
            id: i,
            min: $("#ptargetmin_" + i).text(),
            max: $("#ptargetmax_" + i).text()
        })
    }

    targets = JSON.stringify({ 'targets': targets });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/Save_AFTarget',
        data: targets,
        success: function (data) {
            alert('Target data now saved.');
        }
    });

}

$('#save_target_btn').live('click', function () {
    var target_defid_ = $('#aftarget_ddl').val();
    var null_entry = false;
    $('.select').each(function () {
        if ($(this).text() == "") {
            null_entry = true;
            $(this).css({ "border-color": "red" });
        }
    });
    if (!null_entry) {
        save_target(target_defid_);
        $('.select').css({ "border-color": "#C0C0C0" });
        $('.select').css({ "background-color": "white" });
    } else {
        alert('ERROR: All entries must be filled.');
        $('.changed').css({ "border-color": "red" });
    }
});

$('#aflot_ddl').live('change', function () {
    $('#savetolot_target_btn').prop('disabled', false);
    load_targets();
});

$('#savetolot_target_btn').live('click', function () {
    var aflotid_ = $('#aflot_ddl').val();
    var def_targetid_ = $('#aftarget_ddl').val();
    //alert(aflotid_ + " " + def_targetid_)
    $.ajax({
        url: afserverpath + '/AnodeFurnace/SavetoLot_AFTarget/',
        data: {
            aflotid: aflotid_,
            def_targetid: def_targetid_
        },
        type: 'POST',
        cache: false,
        success: function (data) {
            alert('Target data now saved to current Lot No. ' + aflotid_ + '.');
        }
    });
});

$('#saveasnew_target_btn').live('click', function () {
    var date = Date.now();
    var day = date.getDate();
    var month = date.getMonthName();
    var target_name = prompt('Desired name for new Targets.', 'Default Target ' + month + ' ' + day);

    if (target_name != null) {
        $.ajax({
            url: afserverpath + '/AnodeFurnace/SaveNew_AFTarget/',
            data: {
                afdefaultname: target_name
            },
            type: 'POST',
            cache: false,
            success: function (data) {

                var defaultid_;

                $.ajax({
                    url: afserverpath + '/AnodeFurnace/AFTarget_Default/',
                    data: {
                        aftargetname: target_name
                    },

                    type: 'POST',
                    cache: false,
                    success: function (data) {
                        //$.each(data, function (index, value) {
                        defaultid_ = data
                        //});
                        save_target(defaultid_);
                    }
                });
                //alert('New Target Default has been added.');

                $('#aftarget_ddl').prepend("<option value = " + data + ">" + target_name + "</option>");
            }
        });


    }

});


function af_lotdetail() {
    var aflotid_ = $('#aflot_ddl').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Select_AFLot/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#afnum_span').text(value.AF_NumId);
                $('#aflot_status_span').text(value.AF_StatusName);
                $('#aflotnum_lbl').text(value.AFLotNo);
                $('#aflotid_').text(value.AF_LotId);

            });
        }
    });

}

function af_lotdetail_qig() {
    var aflotid_ = $('#aflot_ddl').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Select_AFLot/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#afnum_span').text(value.AF_NumId);
                $('#aflot_status_span').text(value.AF_StatusName);
                $('#aflotnum_lbl').text(value.AFLotNo);
                $('#aflotid_').text(value.AF_LotId);


                $('#date_cast_qig').text(formatDate_only(value.CastStartTime));
                $('#stime_cast_qig').text(formatDate_time_24h_only(value.CastStartTime));
                $('#etime_cast_qig').text(formatDate_time_24h_only(value.LotEndTime));
                $('#lot_cast_qig').text(value.AFLotNo);

            });
        }
    });

}

function load_afblister_tbl() {

    var aflotid_ = $('#aflot_ddl').val();

    $('#afblister_tbl td').remove();
    $('#afblister_tbl .trdata').remove();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFBlister_Receive_tbl/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            var length = data.length;
            var start_time;
            var end_time;
            $.each(data, function (index, value) {

                $('#afblister_tbl tr:last').after('<tr class = "trdata bls_time"><td id="bls_start">' + formatDate(value.AF_BlisterReceive_StartTime) + '</td><td id="bls_end">' + formatDate(value.AF_BlisterReceive_EndTime) + '</td><td>' + value.ConverterName + '</td><td>' + value.CycleNumber + '</td><td>' + value.AF_BlisterReceive_Wt + '</td><td>' + value.CycleSulfur + '</td><td>' + value.AF_BlisterReceive_Temp + '</td><td><a href="#" onclick="load_afblister_edit(' + value.AF_BlisterReceiveId + ');return false;">&nbsp;&nbsp;&nbsp;<u>Edit</u>&nbsp;&nbsp;&nbsp;</a></td><td><a href="#" onclick="delete_afblister(' + value.AF_BlisterReceiveId + ');return false;">&nbsp;&nbsp;&nbsp;<u>Delete</u>&nbsp;&nbsp;&nbsp;</a></td></tr>');
                if (index == 0)
                    start_time = value.AF_BlisterReceive_StartTime;
                if (index == length - 1)
                    end_time = value.AF_BlisterReceive_EndTime;
            });
            $('.trboldtop').remove();
            load_afblister_tbl_belowdetails(start_time, end_time);
        }
    });



}

function load_afblister_tbl_belowdetails(s_time, e_time) {

    var aflotid_ = $('#aflot_ddl').val();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/afblister_wt_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#afblister_tbl tr:last').after('<tr class="trboldtop"><td class="text_increase" rowspan = "4" colspan="3">* * * Last blister cycle should be prioritized by crane. Must be 30mins only.</br><label style="margin-left: 20px; width: 100px; float:left;">Delay Reason: </label><select name="delay_blister" id="delay_blister" style="float: left; width: 50%; margin-left: 10px;" disabled="disabled" value="' + data.DelayReasonID + '"></select><img type="button" style="float:right;" id="blstr_dly_savebtn" class="save_btn_img_smalls" src="../Images/diskette.png" title="Save Blister Delay Reason" disabled = "disabled"/></td><td class="td_left_blister"><b>Total</b></td><td id="afblister_total">' + data.AF_BlisterReceive_Wt + '</td><td class="grayarea" rowspan = "4" colspan = "4"></td></tr>' +
        '<tr class = "trdata"><td class="td_left_blister"><b>Slag (MT)</b></td><td class="td_tbox"><div class="afblister_tbox_div"><input type="text" class="afblister_tbox" id= "afblister_slag_tbox" value = ' + data.SkimSlag + ' /></div> <img id="saveafblister_mt_imgbtn" class="save_btn_img_small" src="../Images/diskette.png" disabled="disabled" /></td></tr>' + '<tr class = "trdata"><td class="td_left_blister"><b>AF to AF (MT)</b></td><td><input type="text" class="afblister_tbox" id= "afblister_aftoaf_tbox" value = ' + data.AFtoAF + ' /></td></tr>' + '<tr class = "trdata"><td class="td_left_blister"><b>Net</b></td><td id="afblister_net">' + data.BlisterNet + '</td></tr>');
            var reasonid = data.DelayReasonID;
            $.ajax({
                url: afserverpath + '/AnodeFurnace/Blister_Delay_Reasons/',
                type: 'POST',
                data: { delaygroupid: 4 },
                cache: false,
                success: function (data) {
                    $.each(data, function (index, value) {
                        $('#delay_blister').append($("<option />").val(value.AF_DelayReasonId).text(value.DelayReason));
                    });
                    $('#delay_blister').attr('value', reasonid);
                }
            });

            check_time_gap(s_time, e_time, 'blister');

        }
    });



}

$('#blstr_dly_savebtn').live('click', function () {
    var aflotid_ = $('#aflot_ddl').val();
    var delayreasonid_ = $('#delay_blister').attr('value');

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Blister_Delay/',
        data: {
            aflotid: aflotid_,
            delayreasonid: delayreasonid_
        },
        type: 'POST',
        cache: false,
        success: function (data) {
            alert('Blister Delay saved.');
        }
    });

});

function load_afblister_edit(afbrcvid) {

    //alert(afb_rcvid);
    var partialview_link = afserverpath + "/AnodeFurnace/EditAFBlister_Partial/?afbrcvId=" + afbrcvid;
    $('#Dialog_AFBlisterEdit').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}


$('#cvnum_ddl').live('change', function () {

    var cvnumid = $('#cvnum_ddl').val();
    $('#cvcycle_ddl').empty();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/CF_Cyles/',
        data: {
            cvid: cvnumid
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                $('#cvcycle_ddl').append("<option value = " + value.CycleId + ">" + value.CycleNumber + "</option>");
            });

        }
    });

});

$('#cvcycle_ddl').live('change', function () {

    var cycid = $('#cvcycle_ddl').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Cycle_sulfur/',
        data: {
            cycleid_: cycid
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#lbl_sulfur').text(data.CycleSulfur);

        }
    });

});

function delete_afblister(af_brcivid_) {

    var answer = confirm('Are you sure you want to delete this?');



    if (answer) {

        $.ajax({
            url: afserverpath + '/AnodeFurnace/Delete_BlisterReceive/',
            data: {
                af_brcivid: af_brcivid_
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                load_afblister_tbl();
                alert('Blister Receive now Deleted.');

            }
        });
    }

}

$('#add_afblister_ok_btn').live('click', function () {

    add_afblister();
});

function add_afblister() {

    var aflotid_ = $('#aflotid_').text();
    var cycleid_ = $('#cvcycle_ddl').val();

    var add_start_date = new Date($('#start_date_input').val());
    var add_start_min = $('#start_time_min_input').val();
    var add_start_hr = $('#start_time_hr_input').val();

    var add_end_date = new Date($('#end_date_input').val());
    var add_end_min = $('#end_time_min_input').val();
    var add_end_hr = $('#end_time_hr_input').val();

    var add_blister_temp = $('#add_blister_temp').val();
    var add_blister_wt = $('#add_blister_wt').val();

    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    add_end_date = add_end_date.add({
        minutes: add_end_min,
        hours: add_end_hr
    });

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");
    var add_end_date_ = add_end_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var prev_et;

    prev_et = $('tr.trdata').eq(0).find('td').eq(1).text()
    //alert(prev_et);

    var isValidDate = dateChecker(add_start_date, add_end_date);

    isValidDate = check_prev_process_time(prev_et, isValidDate, add_start_date);

    if (isValidDate == 1 && add_blister_wt > 0 && add_blister_wt <= 300) {

        // alert('test');
        $.ajax({
            url: afserverpath + '/AnodeFurnace/Add_BlisterReceive/',
            data: {
                af_lotid: aflotid_,
                cycleid: cycleid_,
                starttime: add_start_date_,
                endtime: add_end_date_,
                blistertemp: add_blister_temp,
                blisterwt: add_blister_wt
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                $('#Dialog_AFBlisterAdd').dialog('close');

                load_afblister_tbl();
                alert('Blister now added.');
            }
        });

    } else if (isValidDate == 2) {
        alert('Must not input future time.');
    } else if (isValidDate == 1 && add_blister_wt <= 0) {
        alert('Weight must not be equal to 0.');
    } else if (isValidDate == 1 && (add_blister_wt >= 301)) {
        alert('Weight must not be greater than 300.');
    } else if (isValidDate == 4) {
        alert('Input Times must be greater than previous Times');
    } else {
        alert('End Time must be greater than Start Time.');
    }

}



$('#edit_afblister_ok_btn').live('click', function () {

    var afb_rcvid_ = $('#Dialog_AFBlisterEdit #afblister_rcvId').text();
    var cycleid_ = $('#Dialog_AFBlisterEdit #cvcycle_ddl').val();

    var add_start_date = new Date($('#Dialog_AFBlisterEdit #start_date_input_mtapedit').val());
    var add_start_min = $('#Dialog_AFBlisterEdit #start_time_min_input').val();
    var add_start_hr = $('#Dialog_AFBlisterEdit #start_time_hr_input').val();

    var add_end_date = new Date($('#Dialog_AFBlisterEdit #end_date_input_mtapedit').val());
    var add_end_min = $('#Dialog_AFBlisterEdit #end_time_min_input').val();
    var add_end_hr = $('#Dialog_AFBlisterEdit #end_time_hr_input').val();

    var add_blister_temp = $('#Dialog_AFBlisterEdit #add_blister_temp').val();
    var add_blister_wt = $('#Dialog_AFBlisterEdit #add_blister_wt').val();

    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    add_end_date = add_end_date.add({
        minutes: add_end_min,
        hours: add_end_hr
    });

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");
    var add_end_date_ = add_end_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var prev_et;

    prev_et = $('tr.trdata').eq(1).find('td').eq(1).text()

    var isValidDate = dateChecker(add_start_date, add_end_date);

    if (isValidDate == 1 && add_blister_wt > 0) {

        if (isValidDate == 1 && add_blister_wt > 0 && add_blister_wt <= 300) {

            $.ajax({
                url: afserverpath + '/AnodeFurnace/Edit_BlisterReceive/',
                data: {
                    af_brcivid: afb_rcvid_,
                    cycleid: cycleid_,
                    starttime: add_start_date_,
                    endtime: add_end_date_,
                    blistertemp: add_blister_temp,
                    blisterwt: add_blister_wt
                },

                type: 'POST',
                cache: false,
                success: function (data) {
                    $('#Dialog_AFBlisterEdit').dialog('close');

                    load_afblister_tbl();
                    alert('Blister Receive now Edited.');
                }
            });

        } else if (isValidDate == 2) {
            alert('Must not input future time.');
        } else if (isValidDate == 1 && (add_blister_wt <= 0)) {
            alert('Weight must not be equal to 0.');
        } else if (isValidDate == 1 && (add_blister_wt >= 301)) {
            alert('Weight must not be greater than 300.');
        } else if (isValidDate == 4) {
            alert('Input Times must be greater than previous Times');
        } else {
            alert('End Time must be greater than Start Time.');
        }

    }
});

function load_afrefining_data() {

    var aflotid_ = $('#aflot_ddl').val();
    clear_css();
    clear_delays_css();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFRefining_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {



            $.each(data, function (index, value) {

                $('#stdate_refining').text(formatDate_only_af(value.ST_Skim1st));
                $('#etdate_refining').text(formatDate_only_af(value.ET_Polling));
                $('#sttime_refining').text(formatDate_time_only(value.ST_Skim1st));
                $('#ettime_refining').text(formatDate_time_only(value.ET_Polling));

                $('#stdate_casting').text(formatDate_only_af(value.ST_Casting));
                $('#etdate_casting').text(formatDate_only_af(value.ET_Casting));
                $('#sttime_casting').text(formatDate_time_only(value.ST_Casting));
                $('#ettime_casting').text(formatDate_time_only(value.ET_Casting));

                //Operator
                if (value.ST_ROperator1 == null && value.ST_ROperator2 == null) {
                    $('#st_roperator').text('-');
                }
                else if (value.ST_ROperator2 == '-') {
                    // alert(value.ST_ROperator2);
                    $('#st_roperator').text(value.ST_ROperator1);
                } else {
                    $('#st_roperator').text(value.ST_ROperator1 + ' / ' + value.ST_ROperator2);
                }



                if (value.ET_ROperator1 == null && value.ET_ROperator2 == null) {
                    $('#et_roperator').text('-');
                }
                else if (value.ET_ROperator2 == '-') {
                    $('#et_roperator').text(value.ET_ROperator1);
                } else {
                    $('#et_roperator').text(value.ET_ROperator1 + ' / ' + value.ET_ROperator2);
                }


                if (value.ST_COperator1 == null && value.ST_COperator2 == null) {
                    $('#st_coperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_coperator').text(value.ST_COperator1);
                } else {
                    $('#st_coperator').text(value.ST_COperator1 + ' / ' + value.ST_COperator2);
                }



                if (value.ET_COperator1 == null && value.ET_COperator2 == null) {
                    $('#et_coperator').text('-');
                }
                else if (value.ET_COperator2 == '-') {
                    $('#et_coperator').text(value.ET_COperator1);
                } else {
                    $('#et_coperator').text(value.ET_COperator1 + ' / ' + value.ET_COperator2);
                }

                //Supervisor
                if (value.ST_RSupervisor1 == null && value.ST_RSupervisor2 == null) {
                    $('#st_rsupervisor').text('-');
                }
                else if (value.ST_RSupervisor2 == '-') {
                    $('#st_rsupervisor').text(value.ST_RSupervisor1);
                } else {
                    $('#st_rsupervisor').text(value.ST_RSupervisor1 + ' / ' + value.ST_RSupervisor2);
                }


                if (value.ET_RSupervisor1 == null && value.ET_RSupervisor2 == null) {
                    $('#et_rsupervisor').text('-');
                }
                else if (value.ET_RSupervisor2 == '-') {
                    $('#et_rsupervisor').text(value.ET_RSupervisor1);
                } else {
                    $('#et_rsupervisor').text(value.ET_RSupervisor1 + ' / ' + value.ET_RSupervisor2);
                }

                if (value.ST_CSupervisor1 == null && value.ST_CSupervisor2 == null) {
                    $('#st_csupervisor').text('-');
                }
                else if (value.ST_CSupervisor2 == '-') {
                    $('#st_csupervisor').text(value.ST_CSupervisor1);
                } else {
                    $('#st_csupervisor').text(value.ST_CSupervisor1 + ' / ' + value.ST_CSupervisor2);
                }

                if (value.ET_CSupervisor1 == null && value.ET_CSupervisor2 == null) {
                    $('#et_csupervisor').text('-');
                }
                else if (value.ET_CSupervisor2 == '-') {
                    $('#et_csupervisor').text(value.ET_CSupervisor1);
                } else {
                    $('#et_csupervisor').text(value.ET_CSupervisor1 + ' / ' + value.ET_CSupervisor2);
                }

                $('#st_skim1st').text(formatDate_af(value.ST_Skim1st));
                $('#et_skim1st').text(formatDate_af(value.ET_Skim1st));
                $('#st_skim2nd').text(formatDate_af(value.ST_Skim2nd));
                $('#et_skim2nd').text(formatDate_af(value.ET_Skim2nd));
                $('#st_skimheatup').text(formatDate_af(value.ST_SkimHeatup));
                $('#et_skimheatup').text(formatDate_af(value.ET_SkimHeatup));


                $('#st_oxpartial').text(formatDate_af(value.ST_OxPartial));
                $('#et_oxpartial').text(formatDate_af(value.ET_OxPartial));
                $('#st_ox1st').text(formatDate_af(value.ST_Ox1st));
                $('#et_ox1st').text(formatDate_af(value.ET_Ox1st));
                $('#st_ox2nd').text(formatDate_af(value.ST_Ox2nd));
                $('#et_ox2nd').text(formatDate_af(value.ET_Ox2nd));
                $('#st_oxheatup').text(formatDate_af(value.ST_OxHeatup));
                $('#et_oxheatup').text(formatDate_af(value.ET_OxHeatup));

                $('#st_poll1st').text(formatDate_af(value.ST_Poll1st));
                $('#et_poll1st').text(formatDate_af(value.ET_Poll1st));
                $('#st_poll2nd').text(formatDate_af(value.ST_Poll2nd));
                $('#et_poll2nd').text(formatDate_af(value.ET_Poll2nd));
                $('#st_pollheatup').text(formatDate_af(value.ST_PollHeatup));
                $('#et_pollheatup').text(formatDate_af(value.ET_PollHeatup));

                $('#skimtemp').text(value.TempSkim);
                $('#oxtemp').text(value.TempOx);
                $('#polltemp').text(value.TempPoll);

                $('#textb_westtop').val(value.TopWest);
                $('#textb_westbottom').val(value.BottomWest);
                $('#textb_easttop').val(value.TopEast);
                $('#textb_eastbottom').val(value.BottomEast);


                $('#textb_leadbars').val(value.LeadBars);
                $('#textb_scrapanode').val(evaluate_value(value.ScrapAnode));
                $('#textb_shorttuyere').val(value.ShortTuyere);

                $('#txtarea_ref_remarks').val(value.RefiningComment);

                $('#delay_skim').multiselect({
                    selectedText: '# reason(s) ',
                });
                $('#delay_ox').multiselect({
                    selectedText: '# reason(s) ',
                });
                $('#delay_poll').multiselect({
                    selectedText: '# reason(s) ',
                });
                //$('#delay_skim').val(value.SkimDelay);
                //$('#delay_ox').val(value.OxDelay);
                //$('#delay_poll').val(value.PollDelay);

                $('#st_blister').text(value.ST_Blister);

                add_delete_buttons(value.ET_Skim1st, value.ET_Skim2nd, value.ET_SkimHeatup,
                                  value.ET_OxPartial, value.ET_Ox1st, value.ET_Ox2nd, value.ET_OxHeatup,
                                  value.ET_Poll1st, value.ET_Poll2nd, value.ET_PollHeatup);

                skim_times(value.ST_Skim1st, value.ET_Skim1st, value.ET_Skim2nd, value.ET_SkimHeatup);
                ox_times(value.ST_OxPartial, value.ST_Ox1st,
                         value.ET_OxPartial, value.ET_Ox1st, value.ET_Ox2nd, value.ET_OxHeatup);
                poll_times(value.ST_Poll1st, value.ET_Poll1st, value.ET_Poll2nd, value.ET_PollHeatup);

                //if (formatDate_af(value.ST_Ox2nd) != "-")
                //    $('#date_entry').html('<span>2nd<span class="remote" title="Deletes 2nd Oxidation dates."><img src="/Content/delete_new.png"></span></span>');

                $('.remote').hide().click(function () {
                    delete_date(aflotid_, $(this).attr('class').replace(' remote', ''));
                    $(this).remove();
                });

                $('.af_tbl tr th').hover(
                function () {
                    $(this).find('.remote').show();
                },
                function () {
                    $(this).find('.remote').hide();
                });
                function clear_css() {
                    $('.af_tbl, input, td ,select').each(function () {
                        $(this).css('background', "");
                    });
                }

            });
            $('#consumable_div .input_textbox').css({ "background-color": "#FFFFCC", "width": "100%" });
            $('#tuyere_div .input_textbox').css({ "background-color": "#FFFFCC", "width": "100%" });
        }

    });

    $.ajax({

        url: serverpath + '/AnodeFurnace/Load_DelayReasons/',
        data: {
            aflotid: aflotid_
        },
        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                $('input[value*="' + value.DelayReasonID + '"]').attr('checked', 'checked');
            });

        }
    });

    function clear_delays_css() {
        $('.af_tbl select').each(function () {
            $(this).attr('value', "");
        });
        $('#delay_skim_ms').prop('disabled', true);
        $('#delay_ox_ms').prop('disabled', true);
        $('#delay_poll_ms').prop('disabled', true);
    }

}


//Skimming
function skim_times(s_skim1, e_skim1, e_skim2, e_skimh) {
    var first = s_skim1;
    var last;

    if (e_skim1 != "-" && e_skim1 != "" && e_skim1 != "/Date(-2209017600000)/")
        last = e_skim1;
    if (e_skim2 != "-" && e_skim2 != "" && e_skim2 != "/Date(-2209017600000)/")
        last = e_skim2;
    if (e_skimh != "-" && e_skimh != "" && e_skimh != "/Date(-2209017600000)/")
        last = e_skimh;

    check_time_gap(first, last, "skim");
}
//Oxidation
function ox_times(s_oxp, s_ox1, e_oxp, e_ox1, e_ox2, e_oxh) {
    var first;
    var last;

    //if (s_oxp != "-" && s_oxp != "" && s_oxp != "/Date(-2209017600000)/")
    //    first = s_oxp;
    //else
    if (s_ox1 != "-" && s_ox1 != "" && s_ox1 != "/Date(-2209017600000)/")
        first = s_ox1;

    //if (e_oxp != "-" && e_oxp != "" && e_oxp != "/Date(-2209017600000)/")
    //    last = e_oxp;
    if (e_ox1 != "-" && e_ox1 != "" && e_ox1 != "/Date(-2209017600000)/")
        last = e_ox1;
    if (e_ox2 != "-" && e_ox2 != "" && e_ox2 != "/Date(-2209017600000)/")
        last = e_ox2;
    if (e_oxh != "-" && e_oxh != "" && e_oxh != "/Date(-2209017600000)/")
        last = e_oxh;

    check_time_gap(first, last, "ox");
}
//Poling
function poll_times(s_poll1, e_poll1, e_poll2, e_pollh) {
    var first = s_poll1;
    var last;

    if (e_poll1 != "-" && e_poll1 != "" && e_poll1 != "/Date(-2209017600000)/")
        last = e_poll1;
    if (e_poll2 != "-" && e_poll2 != "" && e_poll2 != "/Date(-2209017600000)/")
        last = e_poll2;
    if (e_pollh != "-" && e_pollh != "" && e_pollh != "/Date(-2209017600000)/")
        last = e_pollh;

    check_time_gap(first, last, "poll");
}





function check_time_gap(first, last, part) {
    var time_gap = Date.daysBetween(new Date(formatDate_af(first)), new Date(formatDate_af(last)));
    switch (part) {
        case 'skim':
            if (time_gap[2] > 30 || time_gap[0] > 0 || time_gap[1] > 0) {
                //disable dropdown here
                $('#delay_skim_ms').prop('disabled', false);
                $('#skim_savebtn').prop('disabled', false);
            }
            break;
        case 'ox':
            if ((time_gap[1] >= 2 && time_gap[2] > 0) || time_gap[0] > 0) {
                //disable dropdown here
                $('#delay_ox_ms').prop('disabled', false);
                $('#oxid_savebtn').prop('disabled', false);
            }
            break;
        case 'poll':
            if ((time_gap[1] >= 2 && time_gap[2] > 30) || time_gap[0] > 0) {
                //disable dropdown here
                $('#delay_poll_ms').prop('disabled', false);
                $('#reduc_savebtn').prop('disabled', false);
            }
        case 'blister':
            if ((time_gap[1] >= 8 && time_gap[2] > 0) || time_gap[0] > 0) {
                $('#delay_blister').prop('disabled', false);
                $('#blstr_dly_savebtn').prop('disabled', false);
            }
            break;
    }

    //alert(Date.daysBetween(new Date(formatDate_af(first)), new Date(formatDate_af(last))));

}

Date.daysBetween = function (date1, date2) {
    var time = [];

    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);

    time.push(days);
    time.push(hours);
    time.push(minutes);

    //return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
    return time;
}

function add_delete_buttons(skim1, skim2, skimh, oxp, ox1, ox2, oxh, poll1, poll2, pollh) {
    if (formatDate_af(skim1) != "-")
        $('#skim1').html('<span> 1st <span class="skim1 remote" title="Deletes 1st Skimming dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(skim2) != "-")
        $('#skim2').html('<span>2nd<span class="skim2 remote" title="Deletes 2nd Skimming dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(skimh) != "-")
        $('#skimh').html('<span>Heat-up<span class="skimh remote" title="Deletes Heat up dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');

    if (formatDate_af(oxp) != "-")
        $('#oxp').html('<span>Partial<span class="oxp remote" title="Deletes Patial Oxidation dates." style="float: right;">&nbsp;&nbsp;<img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(ox1) != "-")
        $('#ox1').html('<span>1st<span class="ox1 remote" title="Deletes 1st Oxidation dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(ox2) != "-")
        $('#ox2').html('<span>2nd<span class="ox2 remote" title="Deletes 2nd Oxidation dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(oxh) != "-")
        $('#oxh').html('<span>Heat-up<span class="oxh remote" title="Deletes Heat up dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');

    if (formatDate_af(poll1) != "-")
        $('#poll1').html('<span>1st<span class="poll1 remote" title="Deletes 1st Polling dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(poll2) != "-")
        $('#poll2').html('<span>2nd<span class="poll2 remote" title="Deletes 2nd Polling dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');
    if (formatDate_af(pollh) != "-")
        $('#pollh').html('<span>Heat-up<span class="pollh remote" title="Deletes Heat up dates." style="float: right;"><img src="/Content/Disable.gif"></span></span>');


}

//function replace() {
//    $('select , img').each(function () {
//        $(this).replaceAll('disabled');
//    });
//}

//function clear_skimming() {
//    $('select , img').each(function () {
//        $(this).removeAttr('disabled');
//    });
//}

//function clear_oxidation() {
//    $('select , img').each(function () {
//        $(this).removeAttr('disabled');
//    });
//}

//function clear_reduction() {
//    $('select , img').each(function () {
//        $(this).removeAttr('disabled');
//    });
//}

function delete_date(aflotid_, part_) {
    //alert(aflotid_);
    var paramid_;
    switch (part_) {
        case 'skim1':
            paramid_ = 11;
            break;
        case 'skim2':
            paramid_ = 12;
            break;
        case 'skimh':
            paramid_ = 13;
            break;
        case 'oxp':
            paramid_ = 15;
            break;
        case 'ox1':
            paramid_ = 16;
            break;
        case 'ox2':
            paramid_ = 17;
            break;
        case 'oxh':
            paramid_ = 18;
            break;
        case 'poll1':
            paramid_ = 20;
            break;
        case 'poll2':
            paramid_ = 21;
            break;
        case 'pollh':
            paramid_ = 22;
            break;
    }

    var r = confirm("Are you sure you want to delete date?");

    if (r) {
        $.ajax({
            url: afserverpath + '/AnodeFurnace/Remove_RefStage_Dates/',
            data: {
                aflotid: aflotid_,
                date_param_id: paramid_
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                $('#date_entry').html('<span>2nd</span>');
                alert('AF Stage Date now deleted.');
                load_afrefining_data();
            }
        });
    }
}

function load_pitarget_data() {

    //  var aflotid_ = $('#aflot_ddl').val();
    //  clear_ptarget();
    //  alert('test');

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AF_PITarget_data/',

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#ptarget_' + value.AF_ParamId).text(value.AFDisplayTarget);


            });

        }
    });

}

function load_afpi_data() {

    var aflotid_ = $('#aflot_ddl').val();

    // clear_limsdata();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFPI_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#sk_dpressure').text(zerovalue_comma(value.Skim_Dpressure));
                $('#sk_combair').text(zerovalue_comma(value.Skim_Combust));
                $('#sk_hforate').text(zerovalue_comma(value.Skim_HFOFrate));

                $('#ox_dpressure').text(zerovalue_comma(value.Ox_Dpressure));
                $('#ox_combair').text(zerovalue_comma(value.Ox_Combust));
                $('#ox_hforate').text(zerovalue_comma(value.Ox_HFOFrate));

                $('#red_dpressure').text(zerovalue_comma(value.Red_Dpressure));
                $('#red_combair').text(zerovalue_comma(value.Red_Combust));
                $('#red_lpgrate').text(zerovalue_comma(value.Red_LPGFrate));


                $('#lpg_start').text(zerovalue_comma(value.Red_LPGStart));
                $('#lpg_end').text(zerovalue_comma(value.Red_LPGEnd));
                $('#lpg_consumed').text(zerovalue_comma((value.Red_LPGEnd - value.Red_LPGStart)));

                $('#hfo_start').text(zerovalue_comma(value.HFO_TotalizerStart));
                $('#hfo_end').text(zerovalue_comma(value.HFO_TotalizerEnd));
                $('#hfo_consumed').text(zerovalue_comma((value.HFO_TotalizerEnd - value.HFO_TotalizerStart)));

                $('#lfo_start').text(zerovalue_comma(value.LFO_TotalizerStart));
                $('#lfo_end').text(zerovalue_comma(value.LFO_TotalizerEnd));
                $('#lfo_consumed').text(zerovalue_comma((value.LFO_TotalizerEnd - value.LFO_TotalizerStart)));

            });

        }
    });

}
function load_aflims_data() {

    var aflotid_ = $('#aflot_ddl').val();

    clear_limsdata();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFLIMS_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {




            $.each(data, function (index, value) {


                $('#skO2_target').text(evaluate_value(value.SKT_O2));
                $('#skO2_val').text(evaluate_value(value.SK_O2));

                $('#skS_target').text(evaluate_value(value.SKT_S));
                $('#skS_val').text(evaluate_value(value.SK_S));

                $('#skPb_target').text(evaluate_value(value.SKT_Pb));
                $('#skPb_val').text(evaluate_value(value.SK_Pb));

                $('#skAs_target').text(evaluate_value(value.SKT_As));
                $('#skAs_val').text(evaluate_value(value.SK_As));

                $('#oxO2_target').text(evaluate_value(value.OXT_O2));
                $('#oxO2_val').text(evaluate_value(value.OX_O2));

                $('#oxS_target').text(evaluate_value(value.OXT_S));
                $('#oxS_val').text(evaluate_value(value.OX_S));

                $('#reO2_target').text(evaluate_value(value.RET_O2));
                $('#reO2_val').text(evaluate_value(value.RE_O2));

                $('#reS_target').text(evaluate_value(value.RET_S));
                $('#reS_val').text(evaluate_value(value.RE_S));

            });
        }
    });

}

function load_aflimstarget_data() {
    var aflotid_ = $('#aflot_ddl').val();

    clear_limsdata();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFLIMS_Target_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $.each(data, function (index, value) {
                $('#paramid_' + value.AF_ParamId).text(value.AFDisplayText);
            });
        }
    });
}

function evaluate_value(value) {
    if (!isNaN(value) && value.toString().indexOf('.') != -1) {
        return parseFloat(value).toFixed(3);
    } else {
        return value;
    }
}

function clear_limsdata() {

    $('#skO2_target').text('');
    $('#skO2_val').text('');

    $('#skS_target').text('');
    $('#skS_val').text('');

    $('#skPb_target').text('');
    $('#skPb_val').text('');

    $('#skAs_target').text('');
    $('#skAs_val').text('');

    $('#oxO2_target').text('');
    $('#oxO2_val').text('');

    $('#oxS_target').text('');
    $('#oxS_val').text('');

    $('#reO2_target').text('');
    $('#reO2_val').text('');

    $('#reS_target').text('');
    $('#reS_val').text('');

}

function clear_ptarget() {

    $('#skO2_target').text('');
    $('#skO2_val').text('');

    $('#skS_target').text('');
    $('#skS_val').text('');

    $('#skPb_target').text('');
    $('#skPb_val').text('');

    $('#skAs_target').text('');
    $('#skAs_val').text('');

    $('#oxO2_target').text('');
    $('#oxO2_val').text('');

    $('#oxS_target').text('');
    $('#oxS_val').text('');

    $('#reO2_target').text('');
    $('#reO2_val').text('');

    $('#reS_target').text('');
    $('#reS_val').text('');

}


function load_afcasting_data() {

    var aflotid_ = $('#aflot_ddl').val();
    var polling_et;

    //$.ajax({
    //    url: afserverpath + '/AnodeFurnace/AFRefining_data/',
    //    data: {
    //        aflotid: aflotid_
    //    },

    //    type: 'POST',
    //    cache: false,
    //    success: function (data) {

    //        $.each(data, function (index, value) {
    //            polling_et = formatDate_af(value.ET_Poll2nd);
    //            $('#poll_et').val(polling_et);
    //            //alert(polling_et);
    //        });
    //    }
    //});

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFCasting_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {



            $.each(data, function (index, value) {

                polling_et = value.ET_poling;
                $('#poll_et').text(formatDate_af(polling_et));

                $('#mmtemp_start_textb').val(value.MM_STemp);
                $('#mmtemp_mid_textb').val(value.MM_MTemp);
                $('#mmtemp_end_textb').val(value.MM_ETemp);

                $('#mdressing_1st_textb').val(zerovalue(value.Mould_Dens1));
                $('#mdressing_2nd_textb').val(zerovalue(value.Mould_Dens2));
                $('#mdressing_3rd_textb').val(zerovalue(value.Mould_Dens3));

                $('#sminventory_textb').val(value.SMould_Inv_Psr);
                $('#smcasted_textb').val(value.SMould_Inv_Psr_cast);
                $('#crlminventory_textb').val(value.SMould_Inv_Crl);
                $('#crlmcasted_textb').val(value.SMould_Inv_Crl_cast);

                $('#anodecast_mt_textb').val(evaluate_value(value.Tover_Anode_mt));
                $('#anodecast_pcs_textb').val(value.Tover_Anode_pcs);

                $('#txtarea_cast_remarks').val(value.CastingRemark);

                $('#mould_cast_starttime_td').text(formatDate_af(value.MouldCastStart));

                $('#cast_starttime_td').text(formatDate_af(value.CastStart));
                $('#cast_endtime_td').text(formatDate_af(value.CastEnd));

                $('#cast2nd_starttime_td').text(formatDate_af(value.Cast2ndStart));
                $('#cast2nd_endtime_td').text(formatDate_af(value.Cast2ndEnd));



                var cmould1 = value.Wheel1_CastMould == null ? '-' : value.Wheel1_CastMould;
                var cmould2 = value.Wheel2_CastMould == null ? '-' : value.Wheel2_CastMould;

                $('#wheel1_cmould').text(cmould1);
                $('#wheel2_cmould').text(cmould2);


                //Supervisor
                if (value.ST_CSupervisor1 == null && value.ST_CSupervisor2 == null) {
                    $('#st_csupervisor').text('-');
                }
                else if (value.ST_CSupervisor2 == '-') {
                    $('#st_csupervisor').text(value.ST_CSupervisor1);
                } else {
                    $('#st_csupervisor').text(value.ST_CSupervisor1 + ' / ' + value.ST_CSupervisor2);
                }

                if (value.ET_CSupervisor1 == null && value.ET_CSupervisor2 == null) {
                    $('#et_csupervisor').text('-');
                }
                else if (value.ET_CSupervisor2 == '-') {
                    $('#et_csupervisor').text(value.ET_CSupervisor1);
                } else {
                    $('#et_csupervisor').text(value.ET_CSupervisor1 + ' / ' + value.ET_CSupervisor2);
                }


                //Contrl Rm Engineer



                if (value.ST_COperator1 == null && value.ST_COperator2 == null) {
                    $('#st_coperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_coperator').text(value.ST_COperator1);
                } else {
                    $('#st_coperator').text(value.ST_COperator1 + ' / ' + value.ST_COperator2);
                }

                if (value.ET_COperator1 == null && value.ET_COperator2 == null) {
                    $('#et_coperator').text('-');
                }
                else if (value.ET_COperator2 == '-') {
                    $('#et_coperator').text(value.ET_COperator1);
                } else {
                    $('#et_coperator').text(value.ET_COperator1 + ' / ' + value.ET_COperator2);
                }

                //Laddle Operator

                if (value.ST_LOperator1 == null && value.ST_LOperator2 == null) {
                    $('#st_loperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_loperator').text(value.ST_LOperator1);
                } else {
                    $('#st_loperator').text(value.ST_LOperator1 + ' / ' + value.ST_LOperator2);
                }

                if (value.ET_LOperator1 == null && value.ET_LOperator2 == null) {
                    $('#et_loperator').text('-');
                }
                else if (value.ET_LOperator2 == '-') {
                    $('#et_loperator').text(value.ET_LOperator1);
                } else {
                    $('#et_loperator').text(value.ET_LOperator1 + ' / ' + value.ET_LOperator2);
                }


                //Barrite Operator

                if (value.ST_BOperator1 == null && value.ST_BOperator2 == null) {
                    $('#st_boperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_boperator').text(value.ST_BOperator1);
                } else {
                    $('#st_boperator').text(value.ST_BOperator1 + ' / ' + value.ST_BOperator2);
                }

                if (value.ET_BOperator1 == null && value.ET_BOperator2 == null) {
                    $('#et_boperator').text('-');
                }
                else if (value.ET_BOperator2 == '-') {
                    $('#et_boperator').text(value.ET_BOperator1);
                } else {
                    $('#et_boperator').text(value.ET_BOperator1 + ' / ' + value.ET_BOperator2);
                }

                //Crane Operator

                if (value.ST_CraneOperator1 == null && value.ST_CraneOperator2 == null) {
                    $('#st_craneoperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_craneoperator').text(value.ST_CraneOperator1);
                } else {
                    $('#st_craneoperator').text(value.ST_CraneOperator1 + ' / ' + value.ST_CraneOperator2);
                }

                if (value.ET_CraneOperator1 == null && value.ET_CraneOperator2 == null) {
                    $('#et_craneoperator').text('-');
                }
                else if (value.ET_CraneOperator2 == '-') {
                    $('#et_craneoperator').text(value.ET_CraneOperator1);
                } else {
                    $('#et_craneoperator').text(value.ET_CraneOperator1 + ' / ' + value.ET_CraneOperator2);
                }

                //Forklift Operator

                if (value.ST_FOperator1 == null && value.ST_FOperator2 == null) {
                    $('#st_foperator').text('-');
                }
                else if (value.ST_COperator2 == '-') {
                    $('#st_foperator').text(value.ST_FOperator1);
                } else {
                    $('#st_foperator').text(value.ST_FOperator1 + ' / ' + value.ST_FOperator2);
                }

                if (value.ET_FOperator1 == null && value.ET_FOperator2 == null) {
                    $('#et_foperator').text('-');
                }
                else if (value.ET_FOperator2 == '-') {
                    $('#et_foperator').text(value.ET_FOperator1);
                } else {
                    $('#et_foperator').text(value.ET_FOperator1 + ' / ' + value.ET_FOperator2);
                }


                $('.input_textboxc').css({ "background-color": "#FFFFCC" });
                $('.input_textboxc').css({ "width": "100%" });


            });
        }
    });
}


$('#remarks_imgbtn').live('click', function () {

    af_lot_checker('ref_remark');
});

$('#cosumable_imgbtn').live('click', function () {

    af_lot_checker('consumable');
});



$('#tuyere_imgbtn').live('click', function () {

    af_lot_checker('tuyere');
});


$('#mmtemp_imgbtn').live('click', function () {

    af_lot_checker('cast_mmtemp');
});

$('#qig_anode_cust_btn').live('click', function () {

    af_lot_checker('anode_customer');
});



$('#mdressing_imgbtn').live('click', function () {

    af_lot_checker('cast_mdress');
});


$('#sminventory_imgbtn').live('click', function () {

    af_lot_checker('cast_sminventory');
});

$('#tanodes_imgbtn').live('click', function () {

    af_lot_checker('cast_anode_turnover');
});

$('#cast_remarks_imgbtn').live('click', function () {

    af_lot_checker('cast_remarks');
});

$('#qig_remarks_imgbtn').live('click', function () {

    af_lot_checker('qig_remarks');
});

$('#af_inventory_imgbtn').live('click', function () {

    //af_lot_checker('qig_remarks');
});

//afrefining
$('#skim_savebtn').live('click', function () {
    saving_delay('delay_skim', 14, 'Delay');
});
$('#oxid_savebtn').live('click', function () {
    saving_delay('delay_ox', 19, 'Oxidation');
});
$('#reduc_savebtn').live('click', function () {
    saving_delay('delay_poll', 23, 'Polling');
});
////

//delay reason
function saving_delay(part, paramid_, msg) {
    //clear_css();

    var aflotid_ = $('#aflot_ddl').val();
    var items = [];

    //delete
    $.ajax({
        url: afserverpath + '/AnodeFurnace/Delete_Delay/',
        data: {
            aflotid: aflotid_,
            delay_paramid: paramid_,
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            //alert(msg + ' reason now deleted.');

        }
    });

    $('input[id*="' + part + '"]:checked').each(function () {
        items.push({
            cache: false,
            aflotid: aflotid_,
            paramid: paramid_,
            val: $(this).val()
        });
    });

    if (items.length != 0) {
        items = JSON.stringify({ 'items': items });
        //saving
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            type: 'POST',

            url: afserverpath + '/AnodeFurnace/Save_Delay/',
            data:
                items,
            aflotid: aflotid_,
            cache: false,
            success: function (data) {
                alert(msg + ' reason now saved.');


            }

        });

    }

    //$.ajax({

    //    //url: afserverpath + '/AnodeFurnace/Save_Delay/',
    //    data: {
    //        aflotid: aflotid_,
    //        delay_paramid: paramid_,
    //        delay_stage: delay_stage_
    //    },

    //    type: 'POST',
    //    cache: false,
    //    success: function (data) {

    //        alert(msg + ' reason now added.');

    //    }
    //});

}


function refining_remark_save() {

    var aflotid_ = $('#aflot_ddl').val();
    var ref_comment_ = $('#txtarea_ref_remarks').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Ref_Remark/',
        data: {
            aflotid: aflotid_,
            ref_comment: ref_comment_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Remarks now saved.');

        }
    });
}

function cast_mmtemp() {

    var aflotid_ = $('#aflot_ddl').val();
    var mmtemp_start_ = $('#mmtemp_start_textb').val();
    var mmtemp_mid_ = $('#mmtemp_mid_textb').val();
    var mmtemp_end_ = $('#mmtemp_end_textb').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Cast_MTemp/',
        data: {
            aflotid: aflotid_,
            mmtemp_start: mmtemp_start_,
            mmtemp_mid: mmtemp_mid_,
            mmtemp_end: mmtemp_end_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Molten Metal Temp saved.');

        }
    });
}


function cast_mdress() {

    var aflotid_ = $('#aflot_ddl').val();
    var mdress1_ = $('#mdressing_1st_textb').val();
    var mdress2_ = $('#mdressing_2nd_textb').val();
    var mdress3_ = $('#mdressing_3rd_textb').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Cast_MDress/',
        data: {
            aflotid: aflotid_,
            mdress1: mdress1_,
            mdress2: mdress2_,
            mdress3: mdress3_ ? mdress3_ : ""
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Mould Dressing Density saved.');

        }
    });
}

function cast_sminventory() {

    var aflotid_ = $('#aflot_ddl').val();
    var sminventory_ = $('#sminventory_textb').val();
    var smcasted_ = $('#smcasted_textb').val();
    var cminventory_ = $('#crlminventory_textb').val();
    var cmcasted_ = $('#crlmcasted_textb').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Cast_SMInventory/',
        data: {
            aflotid: aflotid_,
            sminventory: sminventory_,
            smcasted: smcasted_,
            cminventory: cminventory_,
            cmcasted: cmcasted_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Spare Moulds Inventory saved.');

        }
    });
}

function cast_anode_turnover() {

    var aflotid_ = $('#aflot_ddl').val();
    var anode_mt_ = $('#anodecast_mt_textb').val();
    var anode_pcs_ = $('#anodecast_pcs_textb').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Cast_AnodeTurnOver/',
        data: {
            aflotid: aflotid_,
            anode_mt: anode_mt_,
            anode_pcs: anode_pcs_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Turnover Anode data now saved.');

        }
    });
}

function cast_remarks() {

    var aflotid_ = $('#aflot_ddl').val();
    var cast_remarks_ = $('#txtarea_cast_remarks').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Cast_Remark/',
        data: {
            aflotid: aflotid_,
            cast_comment: cast_remarks_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Casting Remarks now saved.');

        }
    });
}

function qig_remarks() {

    var aflotid_ = $('#aflot_ddl').val();
    var qig_remarks_ = $('#txtarea_qig_remarks').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_QIG_Remark/',
        data: {
            aflotid: aflotid_,
            qig_remarks: qig_remarks_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('QIG Remarks now saved.');

        }
    });
}

///////////////////-RJ////

//function qig_saverework_imgbtn() {

//    var aflotid_ = $('#aflot_ddl').val();
//    var qig_reworks_ = $('#af_qig_rework_tbl').val();

//    $.ajax({
//        url: afserverpath + '/AnodeFurnace/qig_save_pcs/',
//        data: {
//            aflotid: aflotid_,
//            afparamid: InspectId,
//            afqigtypeid: anodeTypeId,
//            afcw: castingWheelId,
//            afqighrid: hourId,
//            afqighr: val
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {

//            alert('QIG data now saved.');

//            load_afqig_data_rework();
//            load_afqig_data_reject();
//            load_afqig_data_cast();


//        }

//    });
//    alert('QIG data now saved.');
//}
////
//$('#qig_saverework_imgbtn').live('click', function () {

//    af_lot_checker('qig_reworks');
//});





function qig_customer() {

    var aflotid_ = $('#aflot_ddl').val();
    var cw1_cust = $('#cw1_cust_ddl').val();
    var cw2_cust = $('#cw2_cust_ddl').val();

    if (cw1_cust != '') {

        save_qig_customer(aflotid_, 1, cw1_cust);
    }

    if (cw2_cust != '') {

        save_qig_customer(aflotid_, 2, cw2_cust);
    }

    alert('Customer now saved.');
}

function save_qig_customer(aflotid_, cwid_, custid_) {

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_AF_Customer/',
        data: {
            aflotid: aflotid_,
            cwid: cwid_,
            customerid: custid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            // alert('QIG Remarks now saved.');

        }
    });
}



function qig_remarks_query() {

    var aflotid_ = $('#aflot_ddl').val();

    $('#txtarea_qig_remarks').val('');

    $.ajax({
        url: afserverpath + '/AnodeFurnace/QIGRemarks_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#txtarea_qig_remarks').val(data.qig_remarks);

        }
    });
}

function qig_customer_query() {

    var aflotid_ = $('#aflot_ddl').val();

    $('#cw1_cust_ddl').val('');
    $('#cw2_cust_ddl').val('');

    $.ajax({
        url: afserverpath + '/AnodeFurnace/QIG_Customer_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#cw1_cust_ddl').val(data.CW1_CustomerId);
            $('#cw2_cust_ddl').val(data.CW2_CustomerId);

        }
    });
}

function qig_others_query() {
    var aflotid_ = $('#aflot_ddl').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/QIG_RDCFLL_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#paramid_119').attr('value', value.RDC);
                $('#paramid_120').attr('value', value.FLL);
            });
        }
    });
}

function refining_tuyere() {

    var aflotid_ = $('#aflot_ddl').val();
    var twest_ = $('#textb_westtop').val();
    var teast_ = $('#textb_easttop').val();
    var bwest_ = $('#textb_westbottom').val();
    var beast_ = $('#textb_eastbottom').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Ref_Tuyere/',
        data: {
            aflotid: aflotid_,
            twest: twest_,
            teast: teast_,
            bwest: bwest_,
            beast: beast_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            alert('Tuyeres now saved.');
        }
    });
}



function refining_consumable() {

    var aflotid_ = $('#aflot_ddl').val();
    var lbars_ = $('#textb_leadbars').val();
    var sanode_ = $('#textb_scrapanode').val();
    var stuyere_ = $('#textb_shorttuyere').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Ref_Consumable/',
        data: {
            aflotid: aflotid_,
            lbars: lbars_,
            sanode: sanode_,
            stuyere: stuyere_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            alert('Consumables now saved.');
        }
    });
}

function af_targets() {
    var aflotid_ = $('#aflot_ddl').val();

    alert('Data now saved.');
}


function af_lot_checker(eventname) {

    var aflotid_ = $('#aflot_ddl').val();



    if (selected == 1) {

        switch (eventname) {

            case 'addblister':
                load_partial_afblister();
                break;

            case 'ref_remark':
                refining_remark_save();
                color_change_div('ref_remarks_div');
                break;

            case 'consumable':
                refining_consumable();
                color_change_div('consumable_div');
                break;

            case 'tuyere':
                refining_tuyere();
                color_change_div('consumable_div');
                break;

            case 'manpower':
                load_partial_manpower();
                break;

            case 'afstage':
                load_partial_afstage();
                break;

            case 'cast_mmtemp':
                cast_mmtemp();
                break;

            case 'cast_mdress':
                cast_mdress();
                break;

            case 'cast_sminventory':
                cast_sminventory();
                break;

            case 'cast_anode_turnover':
                cast_anode_turnover();
                break;

            case 'cast_remarks':
                cast_remarks();
                break;

            case 'mould_cast_time':
                load_partial_mouldcastingtime();
                break;

            case 'cast_time':
                load_partial_castingtime();
                break;

            case 'cast2nd_time':
                load_partial_casting2ndtime();
                break;

            case 'cast_manpower':
                load_partial_castingmanpower();
                break;

            case 'cast_mouldreplace':
                load_partial_castingmouldreplace();
                break;

            case 'af_qig':
                load_partial_afqig();
                break;

            case 'qig_remarks':
                qig_remarks();
                break;

            case 'anode_customer':

                qig_customer();
                break;

            case 'af_targets':
                af_targets();
                break;
            case 'saving_skimming_delay':
                saving_delay();
                break;

        }
        color_change_div();


    } else {

        alert('Please select an AF Lot Number!');
    }


}

function color_change_div(divname) {
    // $('#' + divname).css({ "background-color": "#6699FF" });
}

$('#af_stage_ddl').live('change', function () {
    var aflotid_ = $('#aflot_ddl').val();
    var stageid_ = $('#af_stage_ddl').val();

    $('#af_mposition_ddl').prop("disabled", false);

    $.ajax({
        url: afserverpath + '/AnodeFurnace/af_manpower_dtime/',
        data: {
            aflotid: aflotid_,
            stageid: stageid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#st_stagetime').text(formatDate_af(data.AF_Stage_StartDate));
            $('#et_stagetime').text(formatDate_af(data.AF_Stage_EndDate));

        }

    });
});

$('#af_refstage_ddl').live('change', function () {

    var stageid_ = $('#af_refstage_ddl').val();

    $('#af_refstage_phase_ddl').prop("disabled", false);
    $('#afref_phase_temp_textb').prop("disabled", false);
    $('#delay_textarea').prop("disabled", false);
    $('#add_afrefstage_ok_btn').prop("disabled", false);

    $('#af_refstage_phase_ddl').empty();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/RefStage_Phase/',
        data: {
            stageid: stageid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {
                $('#af_refstage_phase_ddl').append("<option value = " + value.AF_ParamId + ">" + value.AFParamName + "</option>");
            })
            refstage_phase_data();
        }

    });



});

$('#af_refstage_phase_ddl').live('change', function () {

    var refstage_paramid_ = $('#af_refstage_ddl').val();
    var paramid_ = $('#af_refstage_phase_ddl').val();

    var et_1ststage;

    switch (refstage_paramid_) {

        case '2':
            et_1ststage = $('#et_skim1st').text();
            break;
        case '3':
            et_1ststage = $('#et_ox1st').text();
            break;
        case '4':
            et_1ststage = $('#et_poll1st').text();
            break;

    }

    if (paramid_ == 12 || paramid_ == 17 || paramid_ == 21) {
        if (et_1ststage == "-") {
            alert('Input 1st Phase Times first.');
            $('#add_afrefstage_ok_btn').prop("disabled", true);
        }
    } else {
        $('#add_afrefstage_ok_btn').prop("disabled", false);
    }

});

$('#af_mposition_ddl').live('change', function () {
    var aflotid_ = $('#aflot_ddl').val();
    var stageid_ = $('#af_stage_ddl').val();
    var positionid_ = $('#af_mposition_ddl').val();

    $('#startemp_ddl').prop("disabled", false);
    $('#endemp_ddl').prop("disabled", false);

    if (stageid_ == 1) {
        $.ajax({
            url: afserverpath + '/AnodeFurnace/Refining_Emp_List/',
            data: {
                position: positionid_
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                //alert('change');
                $.each(data, function (index, value) {
                    $('#startemp_ddl').append("<option value = " + value.AF_ParamId + ">" + value.Fullname + "</option>");
                })
                $.each(data, function (index, value) {
                    $('#endemp_ddl').append("<option value = " + value.AF_ParamId + ">" + value.Fullname + "</option>");
                })

            }
            //$.ajax({
            //    url: afserverpath + '/AnodeFurnace/af_manpower_emp/',
            //    data: {
            //        aflotid: aflotid_,
            //        stageid: stageid_,
            //        positionid: positionid_
            //    },

            //    
        });
    } else {
        $.ajax({
            url: afserverpath + '/AnodeFurnace/Casting_Emp_List/',
            data: {
                position: positionid_
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                //alert('change');
                $.each(data, function (index, value) {
                    $('#startemp_ddl').append("<option value = " + value.AF_ParamId + ">" + value.Fullname + "</option>");
                })
                $.each(data, function (index, value) {
                    $('#endemp_ddl').append("<option value = " + value.AF_ParamId + ">" + value.Fullname + "</option>");
                })

            }
        });
    }

});

$('#add_afmanpower_ok_btn').live('click', function () {


    var aflotid_ = $('#aflot_ddl').val();
    var stageid_ = $('#af_stage_ddl').val();
    var positionid_ = $('#af_mposition_ddl').val();
    var startemp_ = $('#startemp_ddl').val();
    var endemp_ = $('#endemp_ddl').val();

    $.ajax({

        url: afserverpath + '/AnodeFurnace/Save_AF_ManPower/',
        data: {
            aflotid: aflotid_,
            stageid: stageid_,
            positionid: positionid_,
            startemp: startemp_,
            endemp: endemp_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            load_afrefining_data();
            alert('Man Power now saved.');
        }
    });
});

$('#af_refstage_phase_ddl').live('change', function () {
    refstage_phase_data();
});


function refstage_phase_data() {
    var aflotid_ = $('#aflot_ddl').val();
    var refstage_paramid_ = $('#af_refstage_ddl').val();
    var paramid_ = $('#af_refstage_phase_ddl').val();

    var temp_paramid_;
    var delay_paramid_;

    switch (refstage_paramid_) {

        //Skimming
        case '2':
            temp_paramid_ = 8;
            delay_paramid_ = 14;
            break;

            //Oxidation
        case '3':
            temp_paramid_ = 9;
            delay_paramid_ = 19;
            break;

            //Polling
        case '4':
            temp_paramid_ = 10;
            delay_paramid_ = 23;
            break;
    }

    $.ajax({

        url: afserverpath + '/AnodeFurnace/RefStage_Data/',
        data: {
            aflotid: aflotid_,
            paramid: paramid_,
            temp_paramid: temp_paramid_,
            delay_paramid: delay_paramid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#afref_phase_temp_textb').val(data.AF_StagePhase_Temperature);
            $('#delay_textarea').val(data.AF_StagePhase_Delay);

            $('#start_date_input').val(formatDate_only(data.AF_StagePhase_StartDate));
            $('#start_time_hr_input').val(formatDate_hr(data.AF_StagePhase_StartDate));
            $('#start_time_min_input').val(formatDate_min(data.AF_StagePhase_StartDate));
            ;

            $('#end_date_input').val(formatDate_only(data.AF_StagePhase_EndDate));
            $('#end_time_hr_input').val(formatDate_hr(data.AF_StagePhase_EndDate));
            $('#end_time_min_input').val(formatDate_min(data.AF_StagePhase_EndDate));


        }
    });
}

$('#add_afrefstage_ok_btn').live('click', function () {

    var aflotid_ = $('#aflot_ddl').val();
    var refstage_paramid_ = $('#af_refstage_ddl').val();
    var paramid_ = $('#af_refstage_phase_ddl').val();
    var temp_ = $('#afref_phase_temp_textb').val();
    var delay_ = $('#delay_textarea').val();

    //Previous Stage End Date
    var prev_et;

    //First Stage End Date
    var et_1ststagetime;

    //Start Date
    var add_start_date = new Date($('#start_date_input').val());
    var add_start_min = $('#start_time_min_input').val();
    var add_start_hr = $('#start_time_hr_input').val();

    //End Date
    var add_end_date = new Date($('#end_date_input').val());
    var add_end_min = $('#end_time_min_input').val();
    var add_end_hr = $('#end_time_hr_input').val();



    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    add_end_date = add_end_date.add({
        minutes: add_end_min,
        hours: add_end_hr
    });



    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");
    var add_end_date_ = add_end_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var isValidDate = dateChecker(add_start_date, add_end_date);

    var temp_paramid_;
    var delay_paramid_;

    switch (refstage_paramid_) {

        //Skimming
        case '2':
            temp_paramid_ = 8;
            delay_paramid_ = 14;
            et_1ststagetime = $('#et_skim1st').text();
            break;

            //Oxidation
        case '3':
            temp_paramid_ = 9;
            delay_paramid_ = 19;
            if (paramid_ != 15) {
                et_1ststagetime = $('#et_ox1st').text();
                isValidDate = check_prev_process_time(($('#et_skim2nd').text() != "-") ? $('#et_skim2nd').text() : $('#et_skim1st').text(), isValidDate, add_start_date);
            } else {
                et_1ststagetime = $('#et_oxpartial').text();
                isValidDate = check_prev_process_time(formatDate_af($('#st_blister').text()), isValidDate, add_start_date);
            }
            break;

            //Polling
        case '4':
            temp_paramid_ = 10;
            delay_paramid_ = 23;
            et_1ststagetime = $('#et_poll1st').text();
            isValidDate = check_prev_process_time(($('#et_ox2nd').text() != "-") ? $('#et_ox2nd').text() : $('#et_ox1st').text(), isValidDate, add_start_date);
            break;
    }

    //alert(isValidDate);

    if (paramid_ == 12 || paramid_ == 17 || paramid_ == 21)
        isValidDate = check_cast1sttime(et_1ststagetime, add_start_date, isValidDate);

    if (isValidDate == 1) {

        $.ajax({

            url: afserverpath + '/AnodeFurnace/Save_RefStage_Data/',
            data: {
                aflotid: aflotid_,
                date_paramid: paramid_,
                temp_paramid: temp_paramid_,
                delay_paramid: delay_paramid_,
                startdate_stage: add_start_date_,
                enddate_stage: add_end_date_,
                temp_stage: temp_,
                delay_stage: delay_
            },

            type: 'POST',
            cache: false,
            success: function (data) {
                load_afrefining_data();
                alert('AF Stage data now added.');

            }
        });

    } else if (isValidDate == 2) {
        alert('ERROR: Must not input future time.');
    } else if (isValidDate == 3) {
        alert('ERROR: 2nd Phase Times must be greater than 1st Phase Times.');
    } else if (isValidDate == 4 && refstage_paramid_ == 3 && paramid_ == 15) {
        alert('ERROR: Partial must be greater than Start of Blister Recieve: ' + formatDate($('#st_blister').text()));
    } else if (isValidDate == 4 && refstage_paramid_ == 3) {
        alert('ERROR: Oxidation Times must be greater than Skimming Times');
    } else if (isValidDate == 4 && refstage_paramid_ == 4) {
        alert('ERROR: Reduction Times must be greater than Oxidation Times');
    } else if (isValidDate == 0 && refstage_paramid_ == 3) {
        alert('ERROR: Input Skimming Times first.');
    } else if (isValidDate == 0 && refstage_paramid_ == 4) {
        alert('ERROR: Input Oxidation Times first.');
    } else {
        alert('End Time must be greater than Start Time.');
    }

});

function check_prev_process_time(prev_et, current, add_start_date) {
    var p_et = new Date(prev_et);
    var r = current;
    //alert(prev_et + " prev " + add_start_date);
    if (add_start_date <= p_et && prev_et != "") {
        r = 4;
    }
    if (prev_et == "-") {
        r = 0;
    }
    return r;
}

function check_cast1sttime(end_1sttime, start_2ndtime, currentstate) {
    var r = currentstate;
    //alert(end_1sttime + " cast " + end_1sttime);
    if (end_1sttime != "-") {
        if (start_2ndtime <= new Date(end_1sttime)) {
            r = 3;
        }
    }
    else {
        r = 0;
    }
    //else {
    //    r = 4;
    //}

    return r;
}

function check_singledate(date) {
    var current_date = new Date.now();
    if (date > current_date)
        return 2;
    else
        return 1;

}

function dateChecker(start_date, end_date) {
    var current_date = new Date.now();
    if (end_date > start_date) {
        if (start_date > current_date || end_date >= current_date) {
            return 2;
        } else {
            return 1;
        }
    } else {
        return -1;
    }
}

$('#add_mouldcastingtime_ok_btn').live('click', function () {

    //   alert('cat');

    var aflotid_ = $('#aflot_ddl').val();

    //Reduction End Date
    var poll_et = $('#poll_et').text();

    //Start Date
    var add_start_date = new Date($('#Dialog_MouldCastingTime #start_date_input3').val());
    var add_start_min = $('#Dialog_MouldCastingTime #start_time_min_input').val();
    var add_start_hr = $('#Dialog_MouldCastingTime #start_time_hr_input').val();

    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var isValidDate = check_singledate(add_start_date);

    isValidDate = check_prev_process_time(poll_et, isValidDate, add_start_date);

    if (isValidDate == 1) {

        $.ajax({

            url: afserverpath + '/AnodeFurnace/Save_MouldCastTime_Data/',
            data: {
                aflotid: aflotid_,
                startdate_cast: add_start_date_,
            },

            type: 'POST',
            cache: false,
            success: function (data) {

                alert('Mould Casting time now saved.');
                $('#Dialog_MouldCastingTime').dialog('close');

                load_afcasting_data();


            }
        });

    } else if (isValidDate == 2) {
        alert('ERROR: Must not input future time.');
    } else if (isValidDate == 4) {
        alert('ERROR: Input Times must be greater than Reduction End Time: ' + poll_et);
    } else if (isValidDate == 0) {
        alert('ERROR: Reduction Time is not present.');
    } else {
        alert('ERROR: End Time must be greater than Start Time.');
    }

});

$('#add_castingtime_ok_btn').live('click', function () {

    //   alert('cat');

    var aflotid_ = $('#aflot_ddl').val();

    //Reduction End Date
    var mould_cast_starttime = $('#mould_cast_starttime_td').text();

    //Start Date
    var add_start_date = new Date($('#Dialog_CastingTime #start_date_input').val());
    var add_start_min = $('#Dialog_CastingTime #start_time_min_input').val();
    var add_start_hr = $('#Dialog_CastingTime #start_time_hr_input').val();

    //End Date
    var add_end_date = new Date($('#Dialog_CastingTime #end_date_input').val());
    var add_end_min = $('#Dialog_CastingTime #end_time_min_input').val();
    var add_end_hr = $('#Dialog_CastingTime #end_time_hr_input').val();

    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    add_end_date = add_end_date.add({
        minutes: add_end_min,
        hours: add_end_hr
    });

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");
    var add_end_date_ = add_end_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var isValidDate = dateChecker(add_start_date, add_end_date);

    isValidDate = check_cast1sttime(mould_cast_starttime, add_start_date, isValidDate);

    if (isValidDate == 1) {

        $.ajax({

            url: afserverpath + '/AnodeFurnace/Save_CastTime_Data/',
            data: {
                aflotid: aflotid_,
                startdate_cast: add_start_date_,
                enddate_cast: add_end_date_
            },

            type: 'POST',
            cache: false,
            success: function (data) {

                alert('Casting time now saved.');
                $('#Dialog_CastingTime').dialog('close');

                load_afcasting_data();


            }
        });

    } else if (isValidDate == 2) {
        alert('ERROR: Must not input future time.');
    } else if (isValidDate == 4) {
        alert('ERROR: Input Times must be greater than Mould Casting Time.');
    } else if (isValidDate == 3) {
        alert("ERROR: 1st Casting Times must be greater than the Mould Casting Times.");
    } else if (isValidDate == 0) {
        alert('ERROR: Input Mould Casting Time first.');
    } else {
        alert('ERROR: End Time must be greater than Start Time.');
    }

});



$('#add_casting2ndtime_ok_btn').live('click', function () {

    //   alert('cat');

    var aflotid_ = $('#aflot_ddl').val();

    //First Casting Dates
    var casting_start_date = new Date($('#cast_starttime_td').text());
    var casting_end_date = new Date($('#cast_endtime_td').text());

    //Start Date
    var add_start_date = new Date($('#Dialog2nd_CastingTime #start_date_input2').val());
    var add_start_min = $('#Dialog2nd_CastingTime #start_time_min_input').val();
    var add_start_hr = $('#Dialog2nd_CastingTime #start_time_hr_input').val();

    //End Date
    var add_end_date = new Date($('#Dialog2nd_CastingTime #end_date_input2').val());
    var add_end_min = $('#Dialog2nd_CastingTime #end_time_min_input').val();
    var add_end_hr = $('#Dialog2nd_CastingTime #end_time_hr_input').val();

    add_start_date = add_start_date.add({
        minutes: add_start_min,
        hours: add_start_hr
    });

    add_end_date = add_end_date.add({
        minutes: add_end_min,
        hours: add_end_hr
    });


    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");
    var add_end_date_ = add_end_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    var isValidDate = dateChecker(add_start_date, add_end_date);

    isValidDate = check_cast1sttime(casting_end_date, add_start_date, isValidDate);

    if (isValidDate == 1) {

        $.ajax({

            url: afserverpath + '/AnodeFurnace/Save_Cast2ndTime_Data/',
            data: {
                aflotid: aflotid_,
                startdate_cast: add_start_date_,
                enddate_cast: add_end_date_
            },

            type: 'POST',
            cache: false,
            success: function (data) {

                alert('Casting time now saved.');
                $('#Dialog_CastingTime').dialog('close');

                load_afcasting_data();


            }
        });

    } else if (isValidDate == 2) {
        alert("ERROR: Must not input future time.");
    } else if (isValidDate == 3) {
        alert("ERROR: 2nd Casting Times must be greater than 1st Casting Times.");
    } else {
        alert("ERROR: End Time must be greater than Start Time.");
    }

});


$('#mouldreplace_ok_btn').live('click', function () {



    var aflotid_ = $('#aflot_ddl').val();
    var afmouldnum_ = $('#mreplace_mouldnum_ddl').val();
    var afwheelnum_ = $('#mreplace_wheel_ddl').val();
    var afmouldstat_ = $('#mreplace_mstatus_ddl').val();


    $.ajax({

        url: afserverpath + '/AnodeFurnace/Save_Cast_WheelMoulding/',
        data: {
            aflotid: aflotid_,
            afmouldnum: afmouldnum_,
            afwheelnum: afwheelnum_,
            afmouldstat: afmouldstat_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            load_afcasting_data();
            alert('Mould replacement data now saved.');

        }
    });
});

//$('#CastPosition_ddl').live('change', function () {
//    var aflotid_ = $('#aflot_ddl').val();
//    var afparamid_ = $('#CastPosition_ddl').val();


//    $.ajax({
//        url: afserverpath + '/AnodeFurnace/af_cast_manpoweremp/',
//        data: {
//            aflotid: aflotid_,
//            afparamid: afparamid_
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {


//            $('#cast_startemp_ddl').val(data.StartEmpId);
//            $('#cast_endemp_ddl').val(data.EndEmpId);
//        }

//    });

//});

$('#cmanpower_ok_btn').live('click', function () {


    var aflotid_ = $('#aflot_ddl').val();
    var positionid_ = $('#CastPosition_ddl').val();
    var startemp_ = $('#cast_startemp_ddl').val();
    var endemp_ = $('#cast_endemp_ddl').val();

    $.ajax({

        url: afserverpath + '/AnodeFurnace/Save_AF_CastManPower/',
        data: {
            aflotid: aflotid_,
            positionid: positionid_,
            startemp: startemp_,
            endemp: endemp_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            load_afcasting_data();
            $('#Dialog_CastingManPower').dialog('close');
            alert('Man Power now saved.');
        }
    });
});


function NumericOnly(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 32 && (charCode > 47 && charCode > 57)) {
        return false;

    }
    return true;

}

function IsEnterKey(evt) {
    //evt = (evt) ? evt : window.event;
    var charCode = evt.keyCode ? evt.keyCode : evt.which;
    if (charCode == 13) {
        return true;
    }
    return false;
}

//function onclick(evt) {
//    //evt = (evt) ? evt : window.event;
//    var charCode = evt.keyCode ? evt.keyCode : evt.which;
//    if (charCode == 13) {
//        return true;
//    }
//    return false;
//}




function AlertSave() {

    if (AlertSave(evt)) {


        var aflotid_ = $('#aflot_ddl').val();

        alert("aflotid:  " + aflotid_ + "Anode Type: " + anodeTypeId + " Hour Id: " + hourId + " Casting Wheel Id: " + castingWheelId + " Inspect Id: " + InspectId);

        var prefixStr = '';

        if (anodeTypeId == 1)
            prefixStr = 'tbox_rework_';
        else if (anodeTypeId == 3)
            prefixStr = 'tbox_cast_';
        else
            prefixStr = 'tbox_reject_';

        var val = $('#' + prefixStr + anodeTypeId + '_' + hourId + '_' + castingWheelId + '_' + InspectId).val();

        //alert("Value: " + val);


        $.ajax({
            url: afserverpath + '/AnodeFurnace/qig_save_pcs/',
            data: {
                aflotid: aflotid_,
                afparamid: InspectId,
                afqigtypeid: anodeTypeId,
                afcw: castingWheelId,
                afqighrid: hourId,
                afqighr: val
            },

            type: 'POST',
            cache: false,
            success: function (data) {


                alert('QIG data now saved.');

                //load_afqig_data_rework();
                //load_afqig_data_reject();
                //load_afqig_data_cast();


            }


        });




        return true;
    }

    alert("Alert Message OnClick");
}

//Save QIG_Reworkables
$('#qig_save_rew_btn').live('click', function () {
    save_qig('af_qig_rework_tbl', 'tbox_rework_', 'Reworkables');
});
//Save QIG_Casting
$('#qig_save_cast_btn').live('click', function () {
    save_qig('af_qig_grade_a_tbl', 'tbox_cast_', 'Grade A');
});
$('#qig_save_cast_btn').live('click', function () {
    save_qig('af_qig_grade_b_tbl', 'tbox_cast_', 'Grade B');
});
$('#qig_save_cast_btn').live('click', function () {
    save_qig('af_qig_casted_tbl', 'tbox_cast_', 'Casting');
});

//Save QIG_Reject
$('#qig_save_rej_btn').live('click', function () {
    save_qig('af_qig_reject_tbl', 'tbox_reject_', 'Reject');
});

function save_qig(tbl_name, prefix, msg) {
    var aflotid_ = $('#aflot_ddl').val();
    var items = [];

    $('#' + tbl_name).find('td').each(function () {
        $(this).find('input.changed').each(function () {
            var attrid = $(this).attr('id');
            var strValue = attrid.replace(prefix, '');
            var params = strValue.split("_");

            var afparamid_ = params[3];
            var afqigtypeid_ = params[0];
            var afcw_ = params[2];
            var afhrid_ = params[1];
            var val_ = $(this).attr('value');

            if (val_ != "") {
                items.push({
                    aflotid: aflotid_,
                    afparamid: afparamid_,
                    afqigtypeid: afqigtypeid_,
                    afcw: afcw_,
                    afhrid: afhrid_,
                    val: val_
                })
            }

        });
    });

    items = JSON.stringify({ 'items': items });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/Save_QIG',
        data: items,
        success: function (data) {
            alert('Changes in ' + msg + ' was now saved.');


            load_afqig_data_rework();
            load_afqig_data_reject();
            load_afqig_data_cast();
            load_afgrade_a();
            load_afgrade_b();
        }
    });

}

function save_afqig_data(evt, anodeTypeId, hourId, castingWheelId, InspectId) {

    if (NumericOnly(evt) || IsEnterKey(evt)) {

        if (IsEnterKey(evt)) {
            var aflotid_ = $('#aflot_ddl').val();

            //alert("aflotid:  " + aflotid_ + "Anode Type: " + anodeTypeId + " Hour Id: " + hourId + " Casting Wheel Id: " + castingWheelId + " Inspect Id: " + InspectId);

            var prefixStr = '';

            if (anodeTypeId == 1)
                prefixStr = 'tbox_rework_';
            else if (anodeTypeId == 3)
                prefixStr = 'tbox_cast_';
            else
                prefixStr = 'tbox_reject_';

            var val = $('#' + prefixStr + anodeTypeId + '_' + hourId + '_' + castingWheelId + '_' + InspectId).val();

            //alert("Value: " + val);


            $.ajax({
                url: afserverpath + '/AnodeFurnace/qig_save_pcs/',
                data: {
                    aflotid: aflotid_,
                    afparamid: InspectId,
                    afqigtypeid: anodeTypeId,
                    afcw: castingWheelId,
                    afqighrid: hourId,
                    afqighr: val
                },

                type: 'POST',
                cache: false,
                success: function (data) {


                    //alert('QIG data now saved.');

                    //load_afqig_data_rework();
                    //load_afqig_data_reject();
                    //load_afqig_data_cast();


                }


            });


        }

        return true;
    }
    else
        return false;


}







function load_afqig_data_rework() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;


    $('#af_qig_rework_tbl td').remove();
    $('#af_qig_rework_tbl .trdata').remove();
    $('.tr_total_qig').remove();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 1
        },

        type: 'POST',
        cache: false,
        success: function (data) {



            $.each(data, function (index, value) {



                $('#af_qig_rework_tbl tr:last').after('<tr id = trqig_' + x + ' class ="trdata"><th>' + x + '</th><th class="td_left">' + value.AFParamName +
                            '</th><td class="af_qig_rework_tbl"><input id="tbox_rework_1_1_1_' + value.AFParamId + '" type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_1ST2ROUND) + '"  name="" onkeypress="return save_afqig_data(event, 1, 1, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_1ST2ROUND) + '" id="tbox_rework_1_1_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 1, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_1H) + '" id="tbox_rework_1_2_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 2, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_1H) + '" id="tbox_rework_1_2_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 2, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_2H) + '" id="tbox_rework_1_3_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 3, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_2H) + '" id="tbox_rework_1_3_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 3, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_3H) + '" id="tbox_rework_1_4_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 4, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_3H) + '" id="tbox_rework_1_4_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 4, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_4H) + '" id="tbox_rework_1_5_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 5, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_4H) + '" id="tbox_rework_1_5_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 5, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_5H) + '" id="tbox_rework_1_6_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 6, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_5H) + '" id="tbox_rework_1_6_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 6, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_6H) + '" id="tbox_rework_1_7_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 7, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_6H) + '" id="tbox_rework_1_7_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 7, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_7H) + '" id="tbox_rework_1_8_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 8, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_7H) + '" id="tbox_rework_1_8_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 8, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_8H) + '" id="tbox_rework_1_9_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 9, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_8H) + '" id="tbox_rework_1_9_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 9, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_9H) + '" id="tbox_rework_1_10_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 10, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_9H) + '" id="tbox_rework_1_10_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 10, 2, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW1_10H) + '" id="tbox_rework_1_11_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 11, 1, ' + value.AFParamId + ')"></td><td class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.CW2_10H) + '" id="tbox_rework_1_11_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 1, 11, 2, ' + value.AFParamId + ')"></td><th class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.TotalCW1) + '" id="tbox_rework_' + value.AFParamId + '_1_1" name="" disabled="true"></th><th class="af_qig_rework_tbl"><input type="text" class="rj" value="'
               + zerovalue_null_af(value.TotalCW2) + '" id="tbox_rework_' + value.AFParamId + '_1_1" name="" disabled="true"></th></tr>');


                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });

                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });

                    $('td, input,textarea,select').change(
                    function () {
                        $(this).css({ 'background-color': '#DFD8D1' });
                        $(this).addClass('changed');
                    });
                });

                //$('#af_qig_rework_tbl tr:last').after('<tr id = trqig_' + x + ' class = "trdata"><td>' + x + '</td><td class="td_left">' + value.AFParamName +
                //    '</td><td>'
                //    + zerovalue_null_af(value.CW1_1ST2ROUND) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_1ST2ROUND) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_1H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_1H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_2H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_2H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_3H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_3H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_4H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_4H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_5H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_5H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_6H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_6H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_7H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_7H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_8H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_8H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_9H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_9H) + '</td><td>'
                //    + zerovalue_null_af(value.CW1_10H) + '</td><td>'
                //    + zerovalue_null_af(value.CW2_10H) + '</td><td>'
                //    + zerovalue_null_af(value.TotalCW1) + '</td><td>'
                //    + zerovalue_null_af(value.TotalCW2) + '</td></tr>');

                if (x <= 14) {
                    cw1_1st2h = cw1_1st2h + zerovalue_null(value.CW1_1ST2ROUND);
                    cw2_1st2h = cw2_1st2h + zerovalue_null(value.CW2_1ST2ROUND);

                    cw1_1h = cw1_1h + zerovalue_null(value.CW1_1H);
                    cw2_1h = cw2_1h + zerovalue_null(value.CW2_1H);

                    cw1_2h = cw1_2h + zerovalue_null(value.CW1_2H);
                    cw2_2h = cw2_2h + zerovalue_null(value.CW2_2H);

                    cw1_3h = cw1_3h + zerovalue_null(value.CW1_3H);
                    cw2_3h = cw2_3h + zerovalue_null(value.CW2_3H);

                    cw1_4h = cw1_4h + zerovalue_null(value.CW1_4H);
                    cw2_4h = cw2_4h + zerovalue_null(value.CW2_4H);

                    cw1_5h = cw1_5h + zerovalue_null(value.CW1_5H);
                    cw2_5h = cw2_5h + zerovalue_null(value.CW2_5H);

                    cw1_6h = cw1_6h + zerovalue_null(value.CW1_6H);
                    cw2_6h = cw2_6h + zerovalue_null(value.CW2_6H);

                    cw1_7h = cw1_7h + zerovalue_null(value.CW1_7H);
                    cw2_7h = cw2_7h + zerovalue_null(value.CW2_7H);

                    cw1_8h = cw1_8h + zerovalue_null(value.CW1_8H);
                    cw2_8h = cw2_8h + zerovalue_null(value.CW2_8H);

                    cw1_9h = cw1_9h + zerovalue_null(value.CW1_9H);
                    cw2_9h = cw2_9h + zerovalue_null(value.CW2_9H);

                    cw1_10h = cw1_10h + zerovalue_null(value.CW1_10H);
                    cw2_10h = cw2_10h + zerovalue_null(value.CW2_10H);

                    cw1_total = cw1_total + zerovalue_null(value.TotalCW1);
                    cw2_total = cw2_total + zerovalue_null(value.TotalCW2);


                }
                if (x == 14) {
                    table_total_qig('#af_qig_rework_tbl', cw1_1st2h, cw2_1st2h,
                                    cw1_1h, cw2_1h,
                                    cw1_2h, cw2_2h,
                                    cw1_3h, cw2_3h,
                                    cw1_4h, cw2_4h,
                                    cw1_5h, cw2_5h,
                                    cw1_6h, cw2_6h,
                                    cw1_7h, cw2_7h,
                                    cw1_8h, cw2_8h,
                                    cw1_9h, cw2_9h,
                                    cw1_10h, cw2_10h,
                                    cw1_total, cw2_total
                                    );
                }


                x = x + 1;

            });

        }
    });

}
//grade A
function load_afgrade_a() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;

    $('#af_qig_grade_a_tbl td.td_graded').remove();
    $('#af_qig_grade_a_tbl th.td_graded').remove();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 4
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#af_qig_grade_a_tbl td:eq(0)').text(zerovalue_null_af(value.CW1_1ST2ROUND));
                $('#af_qig_grade_a_tbl td:eq(1)').text(zerovalue_null_af(value.CW2_1ST2ROUND));
                $('#af_qig_grade_a_tbl td:eq(2)').text(zerovalue_null_af(value.CW1_1H));
                $('#af_qig_grade_a_tbl td:eq(3)').text(zerovalue_null_af(value.CW2_1H));
                $('#af_qig_grade_a_tbl td:eq(4)').text(zerovalue_null_af(value.CW1_2H));
                $('#af_qig_grade_a_tbl td:eq(5)').text(zerovalue_null_af(value.CW2_2H));
                $('#af_qig_grade_a_tbl td:eq(6)').text(zerovalue_null_af(value.CW1_3H));
                $('#af_qig_grade_a_tbl td:eq(7)').text(zerovalue_null_af(value.CW2_3H));
                $('#af_qig_grade_a_tbl td:eq(8)').text(zerovalue_null_af(value.CW1_4H));
                $('#af_qig_grade_a_tbl td:eq(9)').text(zerovalue_null_af(value.CW2_4H));
                $('#af_qig_grade_a_tbl td:eq(10)').text(zerovalue_null_af(value.CW1_5H));
                $('#af_qig_grade_a_tbl td:eq(11)').text(zerovalue_null_af(value.CW2_5H));
                $('#af_qig_grade_a_tbl td:eq(12)').text(zerovalue_null_af(value.CW1_6H));
                $('#af_qig_grade_a_tbl td:eq(13)').text(zerovalue_null_af(value.CW2_6H));
                $('#af_qig_grade_a_tbl td:eq(14)').text(zerovalue_null_af(value.CW1_7H));
                $('#af_qig_grade_a_tbl td:eq(15)').text(zerovalue_null_af(value.CW2_7H));
                $('#af_qig_grade_a_tbl td:eq(16)').text(zerovalue_null_af(value.CW1_8H));
                $('#af_qig_grade_a_tbl td:eq(17)').text(zerovalue_null_af(value.CW2_8H));
                $('#af_qig_grade_a_tbl td:eq(18)').text(zerovalue_null_af(value.CW1_9H));
                $('#af_qig_grade_a_tbl td:eq(19)').text(zerovalue_null_af(value.CW2_9H));
                $('#af_qig_grade_a_tbl td:eq(20)').text(zerovalue_null_af(value.CW1_10H));
                $('#af_qig_grade_a_tbl td:eq(21)').text(zerovalue_null_af(value.CW2_10H));
                $('#af_qig_grade_a_tbl td:eq(22)').text(zerovalue_null_af(value.TotalCW1));
                $('#af_qig_grade_a_tbl td:eq(23)').text(zerovalue_null_af(value.TotalCW2));

                //Grade A
                $('#af_qig_grade_a_tbl th:last').after('<td class="td_graded"><input id="tbox_cast_4_1_1_'
                    + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 4, 1, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_1_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 4, 1, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_2_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1H) + '" onkeypress="return save_afqig_data(event, 4, 2, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_2_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1H) + '" onkeypress="return save_afqig_data(event, 4, 2, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_3_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_2H) + '" onkeypress="return save_afqig_data(event, 4, 3, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_3_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_2H) + '" onkeypress="return save_afqig_data(event, 4, 3, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_4_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_3H) + '" onkeypress="return save_afqig_data(event, 4, 4, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_4_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_3H) + '" onkeypress="return save_afqig_data(event, 4, 4, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_5_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_4H) + '" onkeypress="return save_afqig_data(event, 4, 5, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_5_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_4H) + '" onkeypress="return save_afqig_data(event, 4, 5, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_6_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_5H) + '" onkeypress="return save_afqig_data(event, 4, 6, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_6_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_5H) + '" onkeypress="return save_afqig_data(event, 4, 6, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_7_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_6H) + '" onkeypress="return save_afqig_data(event, 4, 7, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_7_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_6H) + '" onkeypress="return save_afqig_data(event, 4, 7, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_8_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_7H) + '" onkeypress="return save_afqig_data(event, 4, 8, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_8_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_7H) + '" onkeypress="return save_afqig_data(event, 4, 8, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_9_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_8H) + '" onkeypress="return save_afqig_data(event, 4, 9, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_9_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_8H) + '" onkeypress="return save_afqig_data(event, 4, 9, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_10_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_9H) + '" onkeypress="return save_afqig_data(event, 4, 10, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_10_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_9H) + '" onkeypress="return save_afqig_data(event, 4, 10, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_11_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_10H) + '" onkeypress="return save_afqig_data(event, 4, 11, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_11_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_10H) + '" onkeypress="return save_afqig_data(event, 4, 11, 2, '
                     + value.AFParamId + ')"></td><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW1) + '" disabled="true"></th><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW2) + '" disabled="true"></th>');



                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    //alert(value.CW1_1ST2ROUND);
                });
            });
        }

    });
}



function load_afgrade_b() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;

    $('#af_qig_grade_b_tbl td.td_graded').remove();
    $('#af_qig_grade_b_tbl th.td_graded').remove();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 5
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#af_qig_grade_b_tbl td:eq(0)').text(zerovalue_null_af(value.CW1_1ST2ROUND));
                $('#af_qig_grade_b_tbl td:eq(1)').text(zerovalue_null_af(value.CW2_1ST2ROUND));
                $('#af_qig_grade_b_tbl td:eq(2)').text(zerovalue_null_af(value.CW1_1H));
                $('#af_qig_grade_b_tbl td:eq(3)').text(zerovalue_null_af(value.CW2_1H));
                $('#af_qig_grade_b_tbl td:eq(4)').text(zerovalue_null_af(value.CW1_2H));
                $('#af_qig_grade_b_tbl td:eq(5)').text(zerovalue_null_af(value.CW2_2H));
                $('#af_qig_grade_b_tbl td:eq(6)').text(zerovalue_null_af(value.CW1_3H));
                $('#af_qig_grade_b_tbl td:eq(7)').text(zerovalue_null_af(value.CW2_3H));
                $('#af_qig_grade_b_tbl td:eq(8)').text(zerovalue_null_af(value.CW1_4H));
                $('#af_qig_grade_b_tbl td:eq(9)').text(zerovalue_null_af(value.CW2_4H));
                $('#af_qig_grade_b_tbl td:eq(10)').text(zerovalue_null_af(value.CW1_5H));
                $('#af_qig_grade_b_tbl td:eq(11)').text(zerovalue_null_af(value.CW2_5H));
                $('#af_qig_grade_b_tbl td:eq(12)').text(zerovalue_null_af(value.CW1_6H));
                $('#af_qig_grade_b_tbl td:eq(13)').text(zerovalue_null_af(value.CW2_6H));
                $('#af_qig_grade_b_tbl td:eq(14)').text(zerovalue_null_af(value.CW1_7H));
                $('#af_qig_grade_b_tbl td:eq(15)').text(zerovalue_null_af(value.CW2_7H));
                $('#af_qig_grade_b_tbl td:eq(16)').text(zerovalue_null_af(value.CW1_8H));
                $('#af_qig_grade_b_tbl td:eq(17)').text(zerovalue_null_af(value.CW2_8H));
                $('#af_qig_grade_b_tbl td:eq(18)').text(zerovalue_null_af(value.CW1_9H));
                $('#af_qig_grade_b_tbl td:eq(19)').text(zerovalue_null_af(value.CW2_9H));
                $('#af_qig_grade_b_tbl td:eq(20)').text(zerovalue_null_af(value.CW1_10H));
                $('#af_qig_grade_b_tbl td:eq(21)').text(zerovalue_null_af(value.CW2_10H));
                $('#af_qig_grade_b_tbl td:eq(22)').text(zerovalue_null_af(value.TotalCW1));
                $('#af_qig_grade_b_tbl td:eq(23)').text(zerovalue_null_af(value.TotalCW2));

                //Grade B
                $('#af_qig_grade_b_tbl th:last').after('<td class="td_graded"><input id="tbox_cast_5_1_1_'
                    + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 5, 1, 1, '

                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_1_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 5, 1, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_2_1_'

                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1H) + '" onkeypress="return save_afqig_data(event, 5, 2, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_2_2_'

                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1H) + '" onkeypress="return save_afqig_data(event, 5, 2, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_3_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_2H) + '" onkeypress="return save_afqig_data(event, 5, 3, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_3_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_2H) + '" onkeypress="return save_afqig_data(event, 5, 3, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_4_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_3H) + '" onkeypress="return save_afqig_data(event, 5, 4, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_4_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_3H) + '" onkeypress="return save_afqig_data(event, 5, 4, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_5_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_4H) + '" onkeypress="return save_afqig_data(event, 5, 5, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_5_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_4H) + '" onkeypress="return save_afqig_data(event, 5, 5, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_6_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_5H) + '" onkeypress="return save_afqig_data(event, 5, 6, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_6_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_5H) + '" onkeypress="return save_afqig_data(event, 5, 6, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_7_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_6H) + '" onkeypress="return save_afqig_data(event, 5, 7, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_7_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_6H) + '" onkeypress="return save_afqig_data(event, 5, 7, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_8_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_7H) + '" onkeypress="return save_afqig_data(event, 5, 8, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_8_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_7H) + '" onkeypress="return save_afqig_data(event, 5, 8, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_9_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_8H) + '" onkeypress="return save_afqig_data(event, 5, 9, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_9_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_8H) + '" onkeypress="return save_afqig_data(event, 5, 9, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_10_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_9H) + '" onkeypress="return save_afqig_data(event, 5, 10, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_10_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_9H) + '" onkeypress="return save_afqig_data(event, 5, 10, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_11_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_10H) + '" onkeypress="return save_afqig_data(event, 5, 11, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_11_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_10H) + '" onkeypress="return save_afqig_data(event, 5, 11, 2, '
                     + value.AFParamId + ')"></td><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW1) + '" disabled="true"></th><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW2) + '" disabled="true"></th>');





                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    //alert(value.CW1_1ST2ROUND);
                });
            });
        }

    });






}
//grade A
function load_afgrade_a() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;

    $('#af_qig_grade_a_tbl td.td_graded').remove();
    $('#af_qig_grade_a_tbl th.td_graded').remove();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 4
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#af_qig_grade_a_tbl td:eq(0)').text(zerovalue_null_af(value.CW1_1ST2ROUND));
                $('#af_qig_grade_a_tbl td:eq(1)').text(zerovalue_null_af(value.CW2_1ST2ROUND));
                $('#af_qig_grade_a_tbl td:eq(2)').text(zerovalue_null_af(value.CW1_1H));
                $('#af_qig_grade_a_tbl td:eq(3)').text(zerovalue_null_af(value.CW2_1H));
                $('#af_qig_grade_a_tbl td:eq(4)').text(zerovalue_null_af(value.CW1_2H));
                $('#af_qig_grade_a_tbl td:eq(5)').text(zerovalue_null_af(value.CW2_2H));
                $('#af_qig_grade_a_tbl td:eq(6)').text(zerovalue_null_af(value.CW1_3H));
                $('#af_qig_grade_a_tbl td:eq(7)').text(zerovalue_null_af(value.CW2_3H));
                $('#af_qig_grade_a_tbl td:eq(8)').text(zerovalue_null_af(value.CW1_4H));
                $('#af_qig_grade_a_tbl td:eq(9)').text(zerovalue_null_af(value.CW2_4H));
                $('#af_qig_grade_a_tbl td:eq(10)').text(zerovalue_null_af(value.CW1_5H));
                $('#af_qig_grade_a_tbl td:eq(11)').text(zerovalue_null_af(value.CW2_5H));
                $('#af_qig_grade_a_tbl td:eq(12)').text(zerovalue_null_af(value.CW1_6H));
                $('#af_qig_grade_a_tbl td:eq(13)').text(zerovalue_null_af(value.CW2_6H));
                $('#af_qig_grade_a_tbl td:eq(14)').text(zerovalue_null_af(value.CW1_7H));
                $('#af_qig_grade_a_tbl td:eq(15)').text(zerovalue_null_af(value.CW2_7H));
                $('#af_qig_grade_a_tbl td:eq(16)').text(zerovalue_null_af(value.CW1_8H));
                $('#af_qig_grade_a_tbl td:eq(17)').text(zerovalue_null_af(value.CW2_8H));
                $('#af_qig_grade_a_tbl td:eq(18)').text(zerovalue_null_af(value.CW1_9H));
                $('#af_qig_grade_a_tbl td:eq(19)').text(zerovalue_null_af(value.CW2_9H));
                $('#af_qig_grade_a_tbl td:eq(20)').text(zerovalue_null_af(value.CW1_10H));
                $('#af_qig_grade_a_tbl td:eq(21)').text(zerovalue_null_af(value.CW2_10H));
                $('#af_qig_grade_a_tbl td:eq(22)').text(zerovalue_null_af(value.TotalCW1));
                $('#af_qig_grade_a_tbl td:eq(23)').text(zerovalue_null_af(value.TotalCW2));

                //Grade A
                $('#af_qig_grade_a_tbl th:last').after('<td class="td_graded"><input id="tbox_cast_4_1_1_'
                    + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 4, 1, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_1_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 4, 1, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_2_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1H) + '" onkeypress="return save_afqig_data(event, 4, 2, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_2_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1H) + '" onkeypress="return save_afqig_data(event, 4, 2, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_3_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_2H) + '" onkeypress="return save_afqig_data(event, 4, 3, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_3_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_2H) + '" onkeypress="return save_afqig_data(event, 4, 3, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_4_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_3H) + '" onkeypress="return save_afqig_data(event, 4, 4, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_4_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_3H) + '" onkeypress="return save_afqig_data(event, 4, 4, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_5_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_4H) + '" onkeypress="return save_afqig_data(event, 4, 5, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_5_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_4H) + '" onkeypress="return save_afqig_data(event, 4, 5, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_6_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_5H) + '" onkeypress="return save_afqig_data(event, 4, 6, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_6_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_5H) + '" onkeypress="return save_afqig_data(event, 4, 6, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_7_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_6H) + '" onkeypress="return save_afqig_data(event, 4, 7, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_7_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_6H) + '" onkeypress="return save_afqig_data(event, 4, 7, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_8_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_7H) + '" onkeypress="return save_afqig_data(event, 4, 8, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_8_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_7H) + '" onkeypress="return save_afqig_data(event, 4, 8, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_9_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_8H) + '" onkeypress="return save_afqig_data(event, 4, 9, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_9_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_8H) + '" onkeypress="return save_afqig_data(event, 4, 9, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_10_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_9H) + '" onkeypress="return save_afqig_data(event, 4, 10, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_10_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_9H) + '" onkeypress="return save_afqig_data(event, 4, 10, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_11_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_10H) + '" onkeypress="return save_afqig_data(event, 4, 11, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_4_11_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_10H) + '" onkeypress="return save_afqig_data(event, 4, 11, 2, '
                     + value.AFParamId + ')"></td><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW1) + '" disabled="true"></th><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW2) + '" disabled="true"></th>');



                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    //alert(value.CW1_1ST2ROUND);
                });
            });
        }

    });
}



function load_afgrade_b() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;

    $('#af_qig_grade_b_tbl td.td_graded').remove();
    $('#af_qig_grade_b_tbl th.td_graded').remove();


    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 5
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#af_qig_grade_b_tbl td:eq(0)').text(zerovalue_null_af(value.CW1_1ST2ROUND));
                $('#af_qig_grade_b_tbl td:eq(1)').text(zerovalue_null_af(value.CW2_1ST2ROUND));
                $('#af_qig_grade_b_tbl td:eq(2)').text(zerovalue_null_af(value.CW1_1H));
                $('#af_qig_grade_b_tbl td:eq(3)').text(zerovalue_null_af(value.CW2_1H));
                $('#af_qig_grade_b_tbl td:eq(4)').text(zerovalue_null_af(value.CW1_2H));
                $('#af_qig_grade_b_tbl td:eq(5)').text(zerovalue_null_af(value.CW2_2H));
                $('#af_qig_grade_b_tbl td:eq(6)').text(zerovalue_null_af(value.CW1_3H));
                $('#af_qig_grade_b_tbl td:eq(7)').text(zerovalue_null_af(value.CW2_3H));
                $('#af_qig_grade_b_tbl td:eq(8)').text(zerovalue_null_af(value.CW1_4H));
                $('#af_qig_grade_b_tbl td:eq(9)').text(zerovalue_null_af(value.CW2_4H));
                $('#af_qig_grade_b_tbl td:eq(10)').text(zerovalue_null_af(value.CW1_5H));
                $('#af_qig_grade_b_tbl td:eq(11)').text(zerovalue_null_af(value.CW2_5H));
                $('#af_qig_grade_b_tbl td:eq(12)').text(zerovalue_null_af(value.CW1_6H));
                $('#af_qig_grade_b_tbl td:eq(13)').text(zerovalue_null_af(value.CW2_6H));
                $('#af_qig_grade_b_tbl td:eq(14)').text(zerovalue_null_af(value.CW1_7H));
                $('#af_qig_grade_b_tbl td:eq(15)').text(zerovalue_null_af(value.CW2_7H));
                $('#af_qig_grade_b_tbl td:eq(16)').text(zerovalue_null_af(value.CW1_8H));
                $('#af_qig_grade_b_tbl td:eq(17)').text(zerovalue_null_af(value.CW2_8H));
                $('#af_qig_grade_b_tbl td:eq(18)').text(zerovalue_null_af(value.CW1_9H));
                $('#af_qig_grade_b_tbl td:eq(19)').text(zerovalue_null_af(value.CW2_9H));
                $('#af_qig_grade_b_tbl td:eq(20)').text(zerovalue_null_af(value.CW1_10H));
                $('#af_qig_grade_b_tbl td:eq(21)').text(zerovalue_null_af(value.CW2_10H));
                $('#af_qig_grade_b_tbl td:eq(22)').text(zerovalue_null_af(value.TotalCW1));
                $('#af_qig_grade_b_tbl td:eq(23)').text(zerovalue_null_af(value.TotalCW2));

                //Grade B
                $('#af_qig_grade_b_tbl th:last').after('<td class="td_graded"><input id="tbox_cast_5_1_1_'
                    + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 5, 1, 1, '

                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_1_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 5, 1, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_2_1_'

                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1H) + '" onkeypress="return save_afqig_data(event, 5, 2, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_2_2_'

                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1H) + '" onkeypress="return save_afqig_data(event, 5, 2, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_3_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_2H) + '" onkeypress="return save_afqig_data(event, 5, 3, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_3_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_2H) + '" onkeypress="return save_afqig_data(event, 5, 3, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_4_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_3H) + '" onkeypress="return save_afqig_data(event, 5, 4, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_4_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_3H) + '" onkeypress="return save_afqig_data(event, 5, 4, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_5_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_4H) + '" onkeypress="return save_afqig_data(event, 5, 5, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_5_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_4H) + '" onkeypress="return save_afqig_data(event, 5, 5, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_6_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_5H) + '" onkeypress="return save_afqig_data(event, 5, 6, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_6_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_5H) + '" onkeypress="return save_afqig_data(event, 5, 6, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_7_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_6H) + '" onkeypress="return save_afqig_data(event, 5, 7, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_7_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_6H) + '" onkeypress="return save_afqig_data(event, 5, 7, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_8_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_7H) + '" onkeypress="return save_afqig_data(event, 5, 8, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_8_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_7H) + '" onkeypress="return save_afqig_data(event, 5, 8, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_9_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_8H) + '" onkeypress="return save_afqig_data(event, 5, 9, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_9_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_8H) + '" onkeypress="return save_afqig_data(event, 5, 9, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_10_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_9H) + '" onkeypress="return save_afqig_data(event, 5, 10, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_10_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_9H) + '" onkeypress="return save_afqig_data(event, 5, 10, 2, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_11_1_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW1_10H) + '" onkeypress="return save_afqig_data(event, 5, 11, 1, '
                     + value.AFParamId + ')"></td><td class="td_graded"><input id="tbox_cast_5_11_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_10H) + '" onkeypress="return save_afqig_data(event, 5, 11, 2, '
                     + value.AFParamId + ')"></td><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW1) + '" disabled="true"></th><th class="td_graded"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW2) + '" disabled="true"></th>');





                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    //alert(value.CW1_1ST2ROUND);
                });
            });
        }

    });






}







//casting
function load_afqig_data_cast() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;


    //$('#af_qig_casted_tbl td').remove();
    $('#af_qig_casted_tbl td.td_data').remove();
    $('#af_qig_casted_tbl th.td_data').remove();


    ///// Casting 


    //if (aflotid == 70) {

    //}

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 3
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#af_qig_casted_tbl td:eq(0)').text(zerovalue_null_af(value.CW1_1ST2ROUND));
                $('#af_qig_casted_tbl td:eq(1)').text(zerovalue_null_af(value.CW2_1ST2ROUND));
                $('#af_qig_casted_tbl td:eq(2)').text(zerovalue_null_af(value.CW1_1H));
                $('#af_qig_casted_tbl td:eq(3)').text(zerovalue_null_af(value.CW2_1H));
                $('#af_qig_casted_tbl td:eq(4)').text(zerovalue_null_af(value.CW1_2H));
                $('#af_qig_casted_tbl td:eq(5)').text(zerovalue_null_af(value.CW2_2H));
                $('#af_qig_casted_tbl td:eq(6)').text(zerovalue_null_af(value.CW1_3H));
                $('#af_qig_casted_tbl td:eq(7)').text(zerovalue_null_af(value.CW2_3H));
                $('#af_qig_casted_tbl td:eq(8)').text(zerovalue_null_af(value.CW1_4H));
                $('#af_qig_casted_tbl td:eq(9)').text(zerovalue_null_af(value.CW2_4H));
                $('#af_qig_casted_tbl td:eq(10)').text(zerovalue_null_af(value.CW1_5H));
                $('#af_qig_casted_tbl td:eq(11)').text(zerovalue_null_af(value.CW2_5H));
                $('#af_qig_casted_tbl td:eq(12)').text(zerovalue_null_af(value.CW1_6H));
                $('#af_qig_casted_tbl td:eq(13)').text(zerovalue_null_af(value.CW2_6H));
                $('#af_qig_casted_tbl td:eq(14)').text(zerovalue_null_af(value.CW1_7H));
                $('#af_qig_casted_tbl td:eq(15)').text(zerovalue_null_af(value.CW2_7H));
                $('#af_qig_casted_tbl td:eq(16)').text(zerovalue_null_af(value.CW1_8H));
                $('#af_qig_casted_tbl td:eq(17)').text(zerovalue_null_af(value.CW2_8H));
                $('#af_qig_casted_tbl td:eq(18)').text(zerovalue_null_af(value.CW1_9H));
                $('#af_qig_casted_tbl td:eq(19)').text(zerovalue_null_af(value.CW2_9H));
                $('#af_qig_casted_tbl td:eq(20)').text(zerovalue_null_af(value.CW1_10H));
                $('#af_qig_casted_tbl td:eq(21)').text(zerovalue_null_af(value.CW2_10H));
                $('#af_qig_casted_tbl td:eq(22)').text(zerovalue_null_af(value.TotalCW1));
                $('#af_qig_casted_tbl td:eq(23)').text(zerovalue_null_af(value.TotalCW2));

                //Casted Pcs
                $('#af_qig_casted_tbl th').after('<td class="td_data"><input id="tbox_cast_3_1_1_'
                    + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 3, 1, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_1_2_'
                     + value.AFParamId + '" type="text" value="'

                     + zerovalue_null_af(value.CW2_1ST2ROUND) + '" onkeypress="return save_afqig_data(event, 3, 1, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_2_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_1H) + '" onkeypress="return save_afqig_data(event, 3, 2, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_2_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_1H) + '" onkeypress="return save_afqig_data(event, 3, 2, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_3_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_2H) + '" onkeypress="return save_afqig_data(event, 3, 3, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_3_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_2H) + '" onkeypress="return save_afqig_data(event, 3, 3, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_4_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_3H) + '" onkeypress="return save_afqig_data(event, 3, 4, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_4_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_3H) + '" onkeypress="return save_afqig_data(event, 3, 4, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_5_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_4H) + '" onkeypress="return save_afqig_data(event, 3, 5, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_5_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_4H) + '" onkeypress="return save_afqig_data(event, 3, 5, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_6_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_5H) + '" onkeypress="return save_afqig_data(event, 3, 6, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_6_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_5H) + '" onkeypress="return save_afqig_data(event, 3, 6, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_7_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_6H) + '" onkeypress="return save_afqig_data(event, 3, 7, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_7_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_6H) + '" onkeypress="return save_afqig_data(event, 3, 7, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_8_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_7H) + '" onkeypress="return save_afqig_data(event, 3, 8, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_8_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_7H) + '" onkeypress="return save_afqig_data(event, 3, 8, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_9_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_8H) + '" onkeypress="return save_afqig_data(event, 3, 9, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_9_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_8H) + '" onkeypress="return save_afqig_data(event, 3, 9, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_10_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_9H) + '" onkeypress="return save_afqig_data(event, 3, 10, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_10_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_9H) + '" onkeypress="return save_afqig_data(event, 3, 10, 2, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_11_1_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW1_10H) + '" onkeypress="return save_afqig_data(event, 3, 11, 1, '

                     + value.AFParamId + ')"></td><td class="td_data"><input id="tbox_cast_3_11_2_'
                     + value.AFParamId + '" type="text" value="'
                     + zerovalue_null_af(value.CW2_10H) + '" onkeypress="return save_afqig_data(event, 3, 11, 2, '

                     + value.AFParamId + ')"></td><th class="td_data"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW1) + '" disabled="true"></th><th class="td_data"><input type="text" value="'
                     + zerovalue_null_af(value.TotalCW2) + '" disabled="true"></th>');


                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    //alert(value.CW1_1ST2ROUND);
                });
            });
        }

    });

}



function table_total_qig(tablename, cw1_1st2h, cw2_1st2h, cw1_1h, cw2_1h, cw1_2h, cw2_2h, cw1_3h, cw2_3h, cw1_4h, cw2_4h, cw1_5h, cw2_5h, cw1_6h, cw2_6h,
                                        cw1_7h, cw2_7h, cw1_8h, cw2_8h, cw1_9h, cw2_9h, cw1_10h, cw2_10h, cw1_total, cw2_total) {

    $(tablename + ' #trqig_14').after('<tr class="tr_total_qig"><td colspan = 2><i>TOTAL</i></td><td>'
        + cw1_1st2h + '</td><td>'
        + cw2_1st2h + '</td><td>'
        + cw1_1h + '</td><td>'
        + cw2_1h + '</td><td>'
        + cw1_2h + '</td><td>'
        + cw2_2h + '</td><td>'
        + cw1_3h + '</td><td>'
        + cw2_3h + '</td><td>'
        + cw1_4h + '</td><td>'
        + cw2_4h + '</td><td>'
        + cw1_5h + '</td><td>'
        + cw2_5h + '</td><td>'
        + cw1_6h + '</td><td>'
        + cw2_6h + '</td><td>'
        + cw1_7h + '</td><td>'
        + cw2_7h + '</td><td>'
        + cw1_8h + '</td><td>'
        + cw2_8h + '</td><td>'
        + cw1_9h + '</td><td>'
        + cw2_9h + '</td><td>'
        + cw1_10h + '</td><td>'
        + cw2_10h + '</td><td>'
        + cw1_total + '</td><td>'
        + cw2_total + '</td></tr>');

}


function load_afqig_data_reject() {

    var aflotid_ = $('#aflot_ddl').val();

    var x = 1;

    var cw1_1st2h = 0;
    var cw2_1st2h = 0;

    var cw1_1h = 0;
    var cw2_1h = 0;

    var cw1_2h = 0;
    var cw2_2h = 0;

    var cw1_3h = 0;
    var cw2_3h = 0;

    var cw1_4h = 0;
    var cw2_4h = 0;

    var cw1_5h = 0;
    var cw2_5h = 0;

    var cw1_6h = 0;
    var cw2_6h = 0;

    var cw1_7h = 0;
    var cw2_7h = 0;

    var cw1_8h = 0;
    var cw2_8h = 0;

    var cw1_9h = 0;
    var cw2_9h = 0;

    var cw1_10h = 0;
    var cw2_10h = 0;

    var cw1_total = 0;
    var cw2_total = 0;


    $('#af_qig_reject_tbl td').remove();
    $('#af_qig_reject_tbl .trdata').remove();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFQIG_Data/',
        data: {
            aflotid: aflotid_,
            inspect_type: 2
        },

        type: 'POST',
        cache: false,
        success: function (data) {



            $.each(data, function (index, value) {

                /// reject table


                $('#af_qig_reject_tbl tr:last').after('<tr id = trqig_' + x + ' class = "trdata"><td>' + x + '</td><th class="td_left">' + value.AFParamName +
                        '</th><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_1ST2ROUND) + '" id="tbox_reject_2_1_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 1, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_1ST2ROUND) + '" id="tbox_reject_2_1_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 1, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_1H) + '" id="tbox_reject_2_2_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 2, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_1H) + '" id="tbox_reject_2_2_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 2, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_2H) + '" id="tbox_reject_2_3_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 3, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_2H) + '" id="tbox_reject_2_3_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 3, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_3H) + '" id="tbox_reject_2_4_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 4, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_3H) + '" id="tbox_reject_2_4_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 4, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_4H) + '" id="tbox_reject_2_5_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 5, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_4H) + '" id="tbox_reject_2_5_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 5, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_5H) + '" id="tbox_reject_2_6_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 6, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_5H) + '" id="tbox_reject_2_6_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 6, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_6H) + '" id="tbox_reject_2_7_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 7, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_6H) + '" id="tbox_reject_2_7_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 7, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_7H) + '" id="tbox_reject_2_8_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 8, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_7H) + '" id="tbox_reject_2_8_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 8, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_8H) + '" id="tbox_reject_2_9_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 9, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_8H) + '" id="tbox_reject_2_9_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 9, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_9H) + '" id="tbox_reject_2_10_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 10, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_9H) + '" id="tbox_reject_2_10_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 10, 2, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW1_10H) + '" id="tbox_reject_2_11_1_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 11, 1, ' + value.AFParamId + ')"></td><td class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.CW2_10H) + '" id="tbox_reject_2_11_2_' + value.AFParamId + '" name="" onkeypress="return save_afqig_data(event, 2, 11, 2, ' + value.AFParamId + ')"></td><th class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.TotalCW1) + '" id="tbox_reject_' + value.AFParamId + '_1_1" name="" disabled="true"></th><th class="af_qig_reject_tbl"><input type="text" class="rj" value="'
                        + zerovalue_null_af(value.TotalCW2) + '" id="tbox_reject_' + value.AFParamId + '_1_1" name="" disabled="true"></th></tr>');

                $(document).ready(function () {
                    $('input').keyup(function (e) {
                        if (e.which == 39)
                            $(this).closest('td').next().find('input').focus();
                        else if (e.which == 37)
                            $(this).closest('td').prev().find('input').focus();
                        else if (e.which == 40)
                            $(this).closest('tr').next().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                        else if (e.which == 38)
                            $(this).closest('tr').prev().find('td:eq(' + $(this).closest('td').index() + ')').find('input').focus();
                    });
                });
                $(document).ready(function () {
                    $('td, input,textarea,select').blur(
                    function () {
                        $(this).css({ 'background-color': '#FFFFEEE' });
                    });
                    $(document).ready(function () {
                        $('td, input,textarea,select').blur(
                        function () {
                            $(this).css({ 'background-color': '#FFFFEEE' });
                        });

                        $('td, input,textarea,select').change(
                        function () {
                            $(this).css({ 'background-color': '#DFD8D1' });
                            $(this).addClass('changed');
                        });
                    });

                    $('td, input,textarea,select').change(
                    function () {
                        $(this).css({ 'background-color': '#DFD8D1' });
                        $(this).addClass('changed');
                    });
                });

                if (x <= 14) {
                    cw1_1st2h = cw1_1st2h + zerovalue_null(value.CW1_1ST2ROUND);
                    cw2_1st2h = cw2_1st2h + zerovalue_null(value.CW2_1ST2ROUND);

                    cw1_1h = cw1_1h + zerovalue_null(value.CW1_1H);
                    cw2_1h = cw2_1h + zerovalue_null(value.CW2_1H);

                    cw1_2h = cw1_2h + zerovalue_null(value.CW1_2H);
                    cw2_2h = cw2_2h + zerovalue_null(value.CW2_2H);

                    cw1_3h = cw1_3h + zerovalue_null(value.CW1_3H);
                    cw2_3h = cw2_3h + zerovalue_null(value.CW2_3H);

                    cw1_4h = cw1_4h + zerovalue_null(value.CW1_4H);
                    cw2_4h = cw2_4h + zerovalue_null(value.CW2_4H);

                    cw1_5h = cw1_5h + zerovalue_null(value.CW1_5H);
                    cw2_5h = cw2_5h + zerovalue_null(value.CW2_5H);

                    cw1_6h = cw1_6h + zerovalue_null(value.CW1_6H);
                    cw2_6h = cw2_6h + zerovalue_null(value.CW2_6H);

                    cw1_7h = cw1_7h + zerovalue_null(value.CW1_7H);
                    cw2_7h = cw2_7h + zerovalue_null(value.CW2_7H);

                    cw1_8h = cw1_8h + zerovalue_null(value.CW1_8H);
                    cw2_8h = cw2_8h + zerovalue_null(value.CW2_8H);

                    cw1_9h = cw1_9h + zerovalue_null(value.CW1_9H);
                    cw2_9h = cw2_9h + zerovalue_null(value.CW2_9H);

                    cw1_10h = cw1_10h + zerovalue_null(value.CW1_10H);
                    cw2_10h = cw2_10h + zerovalue_null(value.CW2_10H);

                    cw1_total = cw1_total + zerovalue_null(value.TotalCW1);
                    cw2_total = cw2_total + zerovalue_null(value.TotalCW2);


                }
                if (x == 14) {
                    table_total_qig('#af_qig_reject_tbl', cw1_1st2h, cw2_1st2h,
                                    cw1_1h, cw2_1h,
                                    cw1_2h, cw2_2h,
                                    cw1_3h, cw2_3h,
                                    cw1_4h, cw2_4h,
                                    cw1_5h, cw2_5h,
                                    cw1_6h, cw2_6h,
                                    cw1_7h, cw2_7h,
                                    cw1_8h, cw2_8h,
                                    cw1_9h, cw2_9h,
                                    cw1_10h, cw2_10h,
                                    cw1_total, cw2_total
                                    );
                }


                x = x + 1;

            });

        }

    });
    //$('#af_qig_reject_tbl').on('click', 'span', function () {
    //    var $e = $(this).parent();
    //    if ($e.attr('class') === 'af_qig_reject_tbl') {
    //        var val = $(this).html();
    //        $e.html('<input type="text maxlength="5" class="reject_tbl" size="5" value="' + val + '" />');
    //        var $newE = $e.find('input');
    //        $newE.focus();
    //    }
    //    //$newE.on('blur', function () {
    //    //    $(this).parent().html('<span>' + $(this).val() + '</span>');
    //    //});
    //});
}
////////// for reject //////////////
//$('#af_qig_reject_tbl .rj').live('blur', function () {

//    var tboxid = $(this).attr('id');
//    var t = $(this).val();

//    //alert(tboxid);
//    alert("Number " + t + "  is saved.");


//});

$('#QIG_hour_ddl').live('change', function () {

    check_qig_ddl();
});

$('#QIG_wheel_ddl').live('change', function () {

    check_qig_ddl();
});

$('#QIG_anodetype_ddl').live('change', function () {
    check_qig_ddl();

});

$('#QIG_inspect_ddl').live('change', function () {

    check_qig_ddl();
});


function check_qig_ddl() {

    var h_ddl = $('#QIG_hour_ddl').val();
    var w_ddl = $('#QIG_wheel_ddl').val();
    var t_ddl = $('#QIG_anodetype_ddl').val();
    var ins_ddl = $('#QIG_inspect_ddl').val();

    if (h_ddl != '' && w_ddl != '' && t_ddl != '' && ins_ddl != '') {
        check_qig_pcs();

    } else {

    }

}

function check_qig_pcs() {


    var aflotid_ = $('#aflot_ddl').val();
    var h_ddl = $('#QIG_hour_ddl').val();
    var w_ddl = $('#QIG_wheel_ddl').val();
    var t_ddl = $('#QIG_anodetype_ddl').val();
    var ins_ddl = $('#QIG_inspect_ddl').val();

    var pcs;

    $.ajax({
        url: afserverpath + '/AnodeFurnace/qig_inspect_pcs/',
        data: {
            aflotid: aflotid_,
            afparamid: ins_ddl,
            afqigtypeid: t_ddl,
            afcw: w_ddl,
            afqighrid: h_ddl
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $('#qig_pcs').val(data.QIG_PCS);

        }

    });

}




$('#qig_ok_btn').live('click', function () {

    var aflotid_ = $('#aflot_ddl').val();
    var h_ddl = $('#QIG_hour_ddl').val();
    var w_ddl = $('#QIG_wheel_ddl').val();
    var t_ddl = $('#QIG_anodetype_ddl').val();
    var ins_ddl = $('#QIG_inspect_ddl').val();
    var qig_pcs = $('#qig_pcs').val();

    if (ins_ddl == 70) {
        t_ddl = 3;
    }


    $.ajax({
        url: afserverpath + '/AnodeFurnace/qig_save_pcs/',
        data: {
            aflotid: aflotid_,
            afparamid: ins_ddl,
            afqigtypeid: t_ddl,
            afcw: w_ddl,
            afqighrid: h_ddl,
            afqighr: qig_pcs
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('QIG data now saved.');

            load_afqig_data_rework();
            load_afqig_data_reject();
            load_afqig_data_cast();


        }

    });

});

//$('#qig_others_imgbtn').live('click', function () {
//    var aflotid_ = $('#aflot_ddl').val();
//    var rdc = $('#paramid_119').val();
//    var fll = $('#paramid_120').val();

//    $.ajax({
//        url: afserverpath + '/AnodeFurnace/Save_QIG_Others/',
//        data: {
//            aflotid: aflotid_,
//            rdc_paramid: rdc,
//            fll_paramid: fll
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {
//            alert('QIG data now saved.');
//        }
//    });
//});


$('#qig_others_imgbtn').live('click', function () {
    var aflotid_ = $('#aflot_ddl').val();
    var items = [];
    $('#af_others_tbl').find('input[id*="paramid_"].changed').each(function () {
        var attrid = $(this).attr('id');
        var paramid_ = attrid.replace('paramid_', '');
        var numval_ = $(this).val();

        items.push({
            aflotid: aflotid_,
            paramid: paramid_,
            numval: numval_
        });

    });

    items = JSON.stringify({ 'items': items });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/Save_QIG_Others',
        data: items,
        success: function (data) {
            alert('QIG Others now saved.');
        }
    });

});





$('#saveafblister_mt_imgbtn').live('click', function () {

    var aflotid_ = $('#aflot_ddl').val();
    var skimslag_ = $('#afblister_slag_tbox').val();
    var aftoaf_ = $('#afblister_aftoaf_tbox').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_AFBlister_MT/',
        data: {
            aflotid: aflotid_,
            skimslag: skimslag_,
            aftoaf: aftoaf_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            alert('Data now saved.');
            load_afblister_tbl();
        }
    });

});


$(function () {
    $("#thedate").click(function () {
        $(this).datepicker({ maxDate: new Date });
        $(this).datepicker();
        $(this).datepicker("show");
    });
});

//anode inventory
//function load_inventory() {



//date select
//$(document).ready(function () {
//    $('#select_date').click(function () {
//        alert($('#thedate').val());
//    });
//});
//end



/// enabling inputs and buttons in inventory
$(document).ready(function () {
    $('#thedate').change(function () {
        if ($(this).on('change')) {
            $('click').removeAttr('disabled');
            if ($(this).on('click')) {
                $('#select_date').removeAttr('disabled');
                $('#select_date_energy').removeAttr('disabled');
            }
            ///

        } else {
            $('input#enable').attr('disabled', 'disabled');
        }
    });
});
$(document).ready(function () {
    $('#select_date').click(function () {
        if ($(this).on('click')) {
            $('select').removeAttr('disabled');
            if ($(this).on('click')) { // for input and select types
                $('input#enable').removeAttr('disabled');
            } // button for select button
            $('button').removeAttr('disabled');
            if ($(this).on('click')) {
                $('.enable_btn').removeAttr('disabled');
            } //image save button
            $('image').removeAttr('disabled');
            if ($(this).on('click')) {
                $('.save_btn').removeAttr('disabled');
            }
        } else {
            $('input#enable').attr('disabled', 'disabled');
        }
    });
});
//change color after
$(document).ready(function () {
    $('td, input ,select,textarea').blur(
    function () {
        $(this).css({ 'background-color': '#FFFFEEE' });
    });

    $('td, input, select,textarea').change(
    function () {
        //$(this).css({ 'background-color': '#DFD8D1' });
        $(this).addClass('changed');
    });
});

$('#CastPosition_ddl').live('change', function () {
    var position_ = $('#CastPosition_ddl').val();

    $('#cast_startemp_ddl').empty();
    $('#cast_endemp_ddl').empty();



    $.ajax({
        url: afserverpath + '/AnodeFurnace/Casting_Emp_List/',
        data: {
            position: position_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            //alert('change');
            $.each(data, function (index, value) {
                $('#cast_startemp_ddl').append("<option value = " + value.EmpID + ">" + value.Fullname + "</option>");
            })
            $.each(data, function (index, value) {
                $('#cast_endemp_ddl').append("<option value = " + value.EmpID + ">" + value.Fullname + "</option>");
            })

        }

    });

});

//    if (!isNaN(result)) {
//        document.getElementById('total_all').value = result;
//    }
//};

//for auto suggest "Assorted"
$(document).ready(function () {

    var Assorted = ["Assorted"];

    $("#lpg input, #ref input, #apm input, #rth input, #oth input").autocomplete({
        source: Assorted
    });

});

function specify_cell() {
    $('.right_div_tbl th').each(function () {
        $(this).css('border-color', "orange");
    });
}

//NewAF
function listofafcycles(afnumid_, aftable, aflotid_) {

    $('.' + aftable + ' td').remove();

    var sday = Date.today().add(-1).days().toString('MM-dd-yyyy');
    var eday = Date.today().toString('MM-dd-yyyy');


    //alert(eday);

    //alert(sday);

    $.ajax({
        url: serverpath + '/AnodeFurnace/AFView/',

        data: {
            afnumid: afnumid_,
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                //  var test = new Date(value.Cycle_Start_Time);

                //link
                $('.' + aftable + ' tr:last').after('<tr><td class="hide_td">' + value.AF_LotId + '</td><td>' + formatDate_js(value.LotStartTime) + '</td></td><td>' + formatDate_js(value.LotEndTime) + '</td><td class="cyc_num"><a href = ' + serverpath + '/AnodeFurnace/AFLogsheetData/' + value.AF_LotId + '/' + sday + '/' + eday + '/AF' + afnumid_ + '>' + value.AFLotNo + '</a></td><td>' + value.AF_StatusName + '</td></tr>');

            });

        }
    });
}
//NewAF
$('#newadd_clotnum_ok_btn').live('click', function () {

    var afid = $('#afnum_ddl').val();
    var lotnum = $('#createlot_span').text();
    var prodyear;

    if (afid == 1) {

        prodyear = $('#maxaf1prodyear').text();

    } else if (afid == 2) {
        prodyear = $('#maxaf2prodyear').text();
    }


    $.ajax({

        url: afserverpath + '/AnodeFurnace/NewAdd_LotNum/',
        data: {

            af_numid: afid,
            prodyearid: prodyear,
            af_lotnum: lotnum
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/AFLotLists';
            alert('New Lot created.');
        }
    });
});



function load_aflims_skimdata() {

    var aflotid_ = $('#aflot_ddl').val();

    clear_limsvalue();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/AFLIMS_data/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {




            $.each(data, function (index, value) {


                $('#skim_oxtarget').text(evaluate_value(value.SKT_O2));
                $('#skim_oxact').text(evaluate_value(value.SK_O2));

                //$('#skS_target').text(evaluate_value(value.SKT_S));
                //$('#skS_val').text(evaluate_value(value.SK_S));

                //$('#skPb_target').text(evaluate_value(value.SKT_Pb));
                //$('#skPb_val').text(evaluate_value(value.SK_Pb));

                //$('#skAs_target').text(evaluate_value(value.SKT_As));
                //$('#skAs_val').text(evaluate_value(value.SK_As));

                //$('#oxO2_target').text(evaluate_value(value.OXT_O2));
                //$('#oxO2_val').text(evaluate_value(value.OX_O2));

                //$('#oxS_target').text(evaluate_value(value.OXT_S));
                //$('#oxS_val').text(evaluate_value(value.OX_S));

                //$('#reO2_target').text(evaluate_value(value.RET_O2));
                //$('#reO2_val').text(evaluate_value(value.RE_O2));

                //$('#reS_target').text(evaluate_value(value.RET_S));
                //$('#reS_val').text(evaluate_value(value.RE_S));

            });
        }
    });
}

function specify_cell() {
    $('.right_div_tbl th').each(function () {
        $(this).css('border-color', "orange");
    });

}

function clear_limsvalue() {

    $('#skim_oxtarget').text('');
    $('#skim_oxact').text('');

    //$('#skS_target').text('');
    //$('#skS_val').text('');

    //$('#skPb_target').text('');
    //$('#skPb_val').text('');

    //$('#skAs_target').text('');
    //$('#skAs_val').text('');

    //$('#oxO2_target').text('');
    //$('#oxO2_val').text('');

    //$('#oxS_target').text('');
    //$('#oxS_val').text('');

    //$('#reO2_target').text('');
    //$('#reO2_val').text('');

    //$('#reS_target').text('');
    //$('#reS_val').text('');

}

//NewAF
//function listofafcycles(afnumid_, aftable, aflotid_) {

//    $('.' + aftable + ' td').remove();

//    var sday = Date.today().add(-1).days().toString('MM-dd-yyyy');
//    var eday = Date.today().toString('MM-dd-yyyy');


//    //alert(tday);

//        //alert(sday);

//    $.ajax({
//        url: serverpath + '/AnodeFurnace/AFView/',

//        data: {
//            afnumid: afnumid_,
//            aflotid: aflotid_
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {

//            $.each(data, function (index, value) {

//                //  var test = new Date(value.Cycle_Start_Time);

//                //link
//                $('.' + aftable + ' tr:last').after('<tr><td class="hide_td">' + value.AF_LotId + '</td><td>' + formatDate_js(value.LotStartTime) + '</td></td><td>' + formatDate_js(value.LotEndTime) + '</td><td class="cyc_num"><a href = ' + serverpath + '/AnodeFurnace/AFLogsheet/' + value.AF_LotId + '/' + sday + '/' + eday + '/AF' + afnumid_ + '>' + value.AFLotNo + '</a></td><td>' + value.AF_StatusName + '</td></tr>');

//            });

//        }
//    });
//}
//NewAF
$('#newadd_clotnum_ok_btn').live('click', function () {

    var afid = $('#afnum_ddl').val();
    var lotnum = $('#createlot_span').text();
    var prodyear;

    if (afid == 1) {

        prodyear = $('#maxaf1prodyear').text();

    } else if (afid == 2) {
        prodyear = $('#maxaf2prodyear').text();
    }


    $.ajax({

        url: afserverpath + '/AnodeFurnace/NewAdd_LotNum/',
        data: {

            af_numid: afid,
            prodyearid: prodyear,
            af_lotnum: lotnum
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            document.location.href = afserverpath + '/AnodeFurnace/AFLotLists';
            alert('New Lot created.');
        }
    });
});

//tabs functions
//function ddactive_af(partialv_name) {

//    $.ajax({
//        type: "POST",
//        url: serverpath + '/AnodeFurnace/af_tabs/',
//        data: { partialview_name: partialv_name },
//        success: function (result) {
//            $('#htab-panel2').html(result);
//        }
//});
//}

function specify_cell() {
    $('.right_div_tbl th').each(function () {
        $(this).css('border-color', "orange");
    });
}

//NewAF
//function listofafcycles(afnumid_, aftable, aflotid_) {

//    $('.' + aftable + ' td').remove();

//    var sday = Date.today().add(-1).days().toString('MM-dd-yyyy');
//    var eday = Date.today().toString('MM-dd-yyyy');


//    alert(tday);

//        alert(sday);

//    $.ajax({
//        url: serverpath + '/AnodeFurnace/AFView/',

//        data: {
//            afnumid: afnumid_,
//            aflotid: aflotid_
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {

//            $.each(data, function (index, value) {

//                  var test = new Date(value.Cycle_Start_Time);

//                link
//                $('.' + aftable + ' tr:last').after('<tr><td class="hide_td">' + value.AF_LotId + '</td><td>' + formatDate_js(value.LotStartTime) + '</td></td><td>' + formatDate_js(value.LotEndTime) + '</td><td class="cyc_num"><a href = ' + serverpath + '/AnodeFurnace/AFLogsheet/' + value.AF_LotId + '/' + sday + '/' + eday + '/AF' + afnumid_ + '>' + value.AFLotNo + '</a></td><td>' + value.AF_StatusName + '</td></tr>');

//            });

//        }
//    });
//}
//NewAF
//$('#newadd_clotnum_ok_btn').live('click', function () {

//    var afid = $('#afnum_ddl').val();
//    var lotnum = $('#createlot_span').text();
//    var prodyear;

//    if (afid == 1) {

//        prodyear = $('#maxaf1prodyear').text();

//    } else if (afid == 2) {
//        prodyear = $('#maxaf2prodyear').text();
//    }


//    $.ajax({

//        url: afserverpath + '/AnodeFurnace/NewAdd_LotNum/',
//        data: {

//            af_numid: afid,
//            prodyearid: prodyear,
//            af_lotnum: lotnum
//        },

//        type: 'POST',
//        cache: false,
//        success: function (data) {
//            document.location.href = afserverpath + '/AnodeFurnace/AFLotLists';
//            alert('New Lot created.');
//        }
//    });
//});

//tabs functions
function ddactive_af(partialv_name) {

    $.ajax({
        type: "POST",
        url: serverpath + '/AnodeFurnace/af_tabs/',
        data: { partialview_name: partialv_name },
        success: function (result) {
            $('#htab-panel2').html(result);
        }
    });
}

//NEWAF for Blister
//tabs functions
function ddactive_af2(partialv_name) {

    $.ajax({
        type: "POST",
        url: serverpath + '/AnodeFurnace/af_tabs2/',
        data: { partialview_name: partialv_name },
        success: function (result) {
            $('#htab-panel3').html(result);
        }
    });
}


/// enabling inputs and buttons in inventory
$(document).ready(function () {
    $('#thedate').change(function () {
        if ($(this).on('change')) {
            $('click').removeAttr('disabled');
            if ($(this).on('click')) {
                $('#select_date_energy').removeAttr('disabled');
                $('#select_date').removeAttr('disabled');
            }
            ///

        } else {
            $('input#enable').attr('disabled', 'disabled');
        }
    });
});

function af_logsheet_link() {

    //var aflotid = $('#aflotid').text();

    //var afnum = $('#AF_NumId').val();

    //var thelink = serverpath + '/AnodeFurnace/AFView/' + aflotid + '/' + $('#AF_NumId').val();

    //document.location.href = thelink;

}
//Shift report select button
//('#newaf_select_btn').live('click', function () {

//});

//getafprod_id to save man power

function getAFProd_Id() {

    var date_ = $('#newaf_shiftdate').val();
    var shiftid_ = $('#newaf_shiftdate_select').val();

    var af_prod_id = $.ajax({
        url: serverpath + '/AnodeFurnace/Select_newaf_Date/',
        data: {
            af_prod_date: date_,
            af_prod_Shift: shiftid_
        },
        type: 'POST',
        cache: false,
        dataType: 'html',
        context: document.body,
        global: false,
        async: false,

        success: function (data) {
            return data;
        }
    }).responseText;

    return af_prod_id;

}


//Shift-Manpower
$('#newaf_shift_btn').live('click', function () {

    $('#af_log_header').css({ "background-color": "#FFFFCC" });
    $('input[type="text"], select,option').css({ "background-color": "#FFFFCC" });
    $('select , img, span').removeAttr('disabled');
    selected = 1;

    load_af2_page();

    assign_af_prodid();

    var date_ = $('#newaf_shiftdate').val();
    var shiftid_ = $('#newaf_shiftdate_select').val();

    var interfaceid = $('#interfaceid').text();

    switch (interfaceid) {

        case ('1'):
            load_af2_page();
            check_manpower_select();
            break;

        default:
            break;

    }
});

//saving button click
$('#newaf_manpower_btn').live('click', function () {
    AF_Change('af_manpower');
});
$('#newsave_manpower_link').live('click', function () {
    AF_Change('af_manpower');
});

function AF_Change(option) {

    var date = $('#newaf_shiftdate').val();

    if (date == 0) {
        alert('Please select a Date first.');
    } else {

        switch (option) {
            //manpower
            case ('af_manpower'):

                af_savemanpower();

                break;

            default:
                break;
        }
    }
}



function assign_af_prodid() {
    var af_prodid;
    af_prodid = getAFProd_Id();
    af_prodid = af_prodid.substring(1, af_prodid.length - 1);
    $('#af_prod_id').val(af_prodid);

}

function load_af2_page() {
    //disabled();
    clear_value();
    clear_css();
    var afprod = $('#af_prod_id').val();
    var date_ = $('#newaf_shiftdate').val();
    var shiftid_ = $('#newaf_shiftdate_select').val();

    $.ajax({
        url: serverpath + '/AnodeFurnace/Select_ManPower/',
        data: {
            date: date_,
            shiftid: shiftid_

        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $.each(data, function (index, value) {
                //$('#NewAFList_roletypeid_2').val(value.AF_shiftId);
                $('#NewAFList_roletypeid_' + value.AF_RoleTypeId).val(value.AF_EmpId);

                $('#NewAFList_roletypeid_' + value.AF_RoleTypeId + 'a').val(value.Emp1ID);
                $('#NewAFList_roletypeid_' + value.AF_RoleTypeId + 'b').val(value.Emp2ID);
                check_manpower_select();
            });

        }
    });
}

function reset_crew_dll() {
    $('#htab-panel2 select').each(function () {
        $(this).attr('value', '');
    });
}

// select Shift:
$(document).ready(function () {
    $('#newaf_shiftdate_select').change(function () {
        if ($(this).on('change')) {
            $('#newaf_shift_btn').removeAttr('disabled');
            //if ($(this).on('click')) {
            //$('select').prop("disabled", false);
            //}
        } else {
            $('#newaf_shift_btn').attr('disabled', 'disabled');
        }
    });
});

function af_savemanpower() {
    var date_ = $('#newaf_shiftdate').val();
    var shiftid_ = $('#newaf_shiftdate_select').val();
    var afprod = $('#af_prod_id').val();

    var roletypeid_ = $('#NewAFList_roletypeid_2').val();

    $.ajax({
        url: serverpath + '/AnodeFurnace/Select_newaf_Date/',
        data: {
            af_prod_date: date_,
            af_prod_Shift: shiftid_

        },
        type: 'POST',
        cache: false,
        success: function (data) {
            $.ajax({
                url: serverpath + '/AnodeFurnace/getShiftId/',
                data: {
                    date: date_,
                    shiftid: shiftid_

                },
                type: 'POST',
                cache: false,
                success: function (data) {
                    var shiftassignid_ = data;

                    $.ajax({
                        url: serverpath + '/AnodeFurnace/Delete_Manpower/',
                        data: {
                            prodid: data
                        },
                        type: 'POST',
                        cache: false,
                        success: function (data) {
                            var items = [];

                            $('#newaf_manpower_table select[id*="NewAFList_roletypeid_"]').each(function () {
                                var attrid = $(this).attr('id');

                                var roletypeid_ = attrid.replace('NewAFList_roletypeid_', '');
                                var empid_ = $(this).val();

                                var empaid_ = $('#NewAFList_roletypeid_' + roletypeid_ + 'a').val();
                                var empbid_ = $('#NewAFList_roletypeid_' + roletypeid_ + 'b').val();

                                items.push({
                                    shiftassignid: shiftassignid_,
                                    roletypeid: roletypeid_,
                                    empid: empid_,
                                    empaid: empaid_,
                                    empbid: empbid_
                                });
                            });

                            if (items.length != 0) {
                                items = JSON.stringify({ 'items': items })

                                $.ajax({
                                    contentType: 'application/json; charset=utf-8',
                                    dataType: 'json',
                                    type: 'POST',
                                    cache: false,
                                    url: afserverpath + '/AnodeFurnace/Save_Shift_Manpower/',
                                    data: items,
                                    success: function (data) {

                                        alert('Manpower are now saved.');

                                        check_manpower_select();

                                    }
                                });
                            }
                            else
                                alert('No changes were made.');
                        }
                    });
                }
            });
        }
    });
}
function clear_value() {
    //alert('test');
    $('select[id*="NewAFList_roletypeid_"]').each(function () {
        $(this).attr('value', '');
        $(this).removeClass('changed');

    });

}

//function disabled() {
//$('select').change(function () {

//    $(this)
//        .siblings('select')
//        .children('option[value=' + this.value + ']')
//        .attr('disabled', true)
//        .siblings().removeAttr('disabled');

//    })
//};

function check_manpower_select() {
    //check_empty_select();
    $('#newaf_manpower_table select').each(function () {
        var id = $(this).attr('id');
        var val = $(this).val();

        if (val == "") {
            //alert('aa')
            $('.newaf_manpower_table_1').find('select[id="' + id + 'a"]').prop('disabled', false);
            $('.newaf_manpower_table_1').find('select[id="' + id + 'b"]').prop('disabled', false);
        }

        else {
            //alert('sd')
            $('.newaf_manpower_table_1').find('select[id="' + id + 'a"]').prop('disabled', true);
            $('.newaf_manpower_table_1').find('select[id="' + id + 'b"]').prop('disabled', true);
        }
    });



}

function load_AFLogsheetData(afnumid_, aftable, aflotid_) {

    //cyc_active_stage(cyc_id, stageid); // - populate Stage Side
    //cyc_stage_employee_assign(cyc_id, stageid);  // - populate Employee per Stage
    //cyc_activity_perstage(cyc_id, stageid); //  - populate Activity table
    //cyc_activity_perstage_daterange(cyc_id, stageid); //  - populate Stage DateRange
    load_aflims_skimdata(aflotid_); // populate skimming table

}


//------------------------------Reworked_Anode JS------------------------------------------------------//


$('#afreworked_lotid').live('change', function () {

    var aflotid_ = $('#afreworked_lotid').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Select_AFLot/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#reworkedlotid').text(value.AF_LotId);

            });
        }
    });
});

$('#add_reworked_ok_btn').live('click', function () {

    add_reworked();
});

function add_reworked() {
    var date = $('.rworked_monthyear').val();
    var add_start_date = new Date($('#select_reworked_date').val());
    var aflotid_ = $('#reworkedlotid').text();
    var reworked_pcs_ = $('#reworked_pcs').val();

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_Reworked/',
        data: {

            starttime: add_start_date_,
            af_lotid: aflotid_,
            reworked_pcs: reworked_pcs_,
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#dialog_reworked_add').dialog('close');

            alert('Reworked now added.');
            load_reworked_month(date);

        }
    });

}

function load_reworked_month(date_) {

    //var iMonth = iMonth;
    //var iYear = iYear;

    $('#fsfe_controlrm_mattetapper_table td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/AF_Load_reworked_monthyear/',

        data: {

            date: date_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#fsfe_controlrm_mattetapper_table tr:last').after('<tr id="load_rwanode"><td>'
                    + formatDate_only(value.ReworkedAnodeDate) + '</td><td>'
                    + value.ReworkedAnodePcs + '</td><td>' + value.AFLotNo + '</td><td><a href="#" onclick="delete_reworked('
                    + value.AF_ReworkedAnodesId + ');return false;">Delete</a></td></tr>'
                     );
                paginate('fsfe_controlrm_mattetapper_table', 30);
            });
        }
    });
}


function delete_reworked(AF_ReworkedAnodesId) {
    var date = $('.rworked_monthyear').val();
    var answer = confirm('Are you sure you want to delete this?');


    if (answer) {

        $.ajax({
            url: afserverpath + '/AnodeFurnace/Delete_reworked/',
            data: {
                AF_ReworkedAnodesId: AF_ReworkedAnodesId
            },

            type: 'POST',
            cache: false,
            success: function (data) {

                alert('Data now Deleted.');
                load_reworked_month(date);


            }
        });
    }
}

//---------------------------------------------------------END---------------------------------------------------------//

//--------------------------------------------------------Anode ChargedJS----------------------------------------------//


$('#newaf_ancharged_date_selected').live('click', function () {

    $('#af_log_header').css({ "background-color": "#FFFFCC" });
    $('input[type="text"], select,option').css({ "background-color": "#FFFFCC" });
    $('select , img, span').removeAttr('disabled');
    selected = 1;
    load_af_page();

    var date_ = $('#newaf_ancharged_select_date').val();

});


$('#afancharged_lotid').live('change', function () {

    var aflotid_ = $('#afancharged_lotid').val();

    $.ajax({
        url: afserverpath + '/AnodeFurnace/Select_AFLot/',
        data: {
            aflotid: aflotid_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#ancharged_lotid').text(value.AF_LotId);

            });
        }
    });
});




$('#add_ancharged_ok_btn').live('click', function () {

    add_ancharged();

});

$('#edit_ancharged_ok_btn').live('click', function () {

    edit_ancharged();

});


function add_ancharged() {
    var date = $('#anodecharged_monthyear').val();

    var add_start_date = new Date($('#select_ancharged_date').val());
    var aflotid_ = $('#ancharged_lotid').text();
    var prov_weight_ = $('#prov_weight').val();
    var reworked_pcs_ = $('#ancharged_pcs').val();

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");


    $.ajax({
        url: afserverpath + '/AnodeFurnace/Save_ancharged/',
        data: {

            starttime: add_start_date_,
            af_lotid: aflotid_,
            prov_weight: prov_weight_,
            reworked_pcs: reworked_pcs_
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#dialog_ancharged_add').dialog('close');
            alert('Data now added.');

            AF_Load_anodecharged_monthyear(date);



        }
    });
}

function edit_ancharged() {
    var date = $('#anodecharged_monthyear').val();

    var add_start_date = new Date($('#select_ancharged_date_edit').val());
    var aflotid_ = $('#ancharged_lotid_edit').text();
    var prov_weight_ = $('#prov_weight_edit').val();
    var reworked_pcs_ = $('#ancharged_pcs_edit').val();
    var ancharged_id = $('#ancharged_id_edit').text();

    var add_start_date_ = add_start_date.toString("ddd, dd MMM yyyy H:mm:ss ");


    $.ajax({
        url: afserverpath + '/AnodeFurnace/edit_ancharged/',
        data: {

            starttime: add_start_date_,
            af_lotid: aflotid_,
            prov_weight: prov_weight_,
            reworked_pcs: reworked_pcs_,
            ancharged_id: ancharged_id
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#dialog_ancharged_edit').dialog('close');

            alert('Data now updated.');
            AF_Load_anodecharged_monthyear(date);
        }
    });

}

function AF_Load_anodecharged_monthyear(date_) {

    var iMonth = iMonth;
    var iYear = iYear;

    $('#fsfe_controlrm_mattetapper_table td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/AF_Load_anodecharged_monthyear/',

        data: {

            date: date_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#fsfe_controlrm_mattetapper_table tr:last').after('<tr><td>'
                    + formatDate_only(value.AF_DTime) + '</td><td>'
                    + value.AF_Pcs + '</td><td>'
                    + value.AF_Weight + '</td><td>'
                    + value.LotNo + '</td><td><a href="#" onclick="load_ancharged_edit_partial(' + value.AF_AnodeChargedId + ');return false;">Edit</a></td><td><a href="#" onclick="delete_ancharged('
                    + value.AF_AnodeChargedId + ');return false;">Delete</a></td>'
                     );

                paginate('fsfe_controlrm_mattetapper_table', 30);

            });
        }
    });
}


function delete_ancharged(AF_AnodeChargedId) {

    var date = $('#anodecharged_monthyear').val();
    var answer = confirm('Are you sure you want to delete this?');


    if (answer) {

        $.ajax({
            url: afserverpath + '/AnodeFurnace/Delete_ancharged/',
            data: {
                AF_AnodeChargedId: AF_AnodeChargedId
            },

            type: 'POST',
            cache: false,
            success: function (data) {

                alert('Data now Deleted.');

                AF_Load_anodecharged_monthyear(date);

            }
        });
    }
}

function load_ancharged_edit_partial(AF_AnodeChargedId) {

    var partialview_link = serverpath + "/AnodeFurnace/Edit_ancharged_partial/?AF_AnodeChargedId=" + AF_AnodeChargedId;
    $('#dialog_ancharged_edit').load(partialview_link, function () {
        $(this).dialog('open');
    });

    return false;
}


//----------------------------------------------------------End of AnodeCharged JS-------------------------------------------------------//

//-----------------------------------------------------------PreCasting JS--------------------------------------------------------------//

//--------------------------------load ladle measurements-----------------------//

function load_ladle_measure(aflot) {

    var aflotno_ = aflot

    $.ajax({
        url: afserverpath + '/AnodeFurnace/load_ladle/',
        data: {
            aflotno: aflotno_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                $('#pc_lotid').text(value.AF_LotId);

                //CL #  cw1 and cw2    
                if (value.AF_ParamId == 1560) {
                    $('#LM_1560').attr('value', value.AF_NumVal);
                } else if (value.AF_ParamId == 1561) {
                    $('#LM_1561').attr('value', value.AF_NumVal);
                }

                //Spout cw1 and cw2
                if (value.AF_ParamId == 1562) {
                    $('#LM_1562').val(value.AF_NumVal);
                } else if (value.AF_ParamId == 1563) {
                    $('#LM_1563').val(value.AF_NumVal);
                }

                //Skimming Plate cw1 and cw2
                if (value.AF_ParamId == 1564) {
                    $('#LM_1564').val(value.AF_NumVal);
                } else if (value.AF_ParamId == 1565) {
                    $('#LM_1565').val(value.AF_NumVal);
                }

                //Intermediate Ladle # cw1 and cw2
                if (value.AF_ParamId == 1566) {
                    $('#LM_1566').val(value.AF_NumVal);
                } else if (value.AF_ParamId == 1567) {
                    $('#LM_1567').val(value.AF_NumVal);
                }

                //Left Spout (CW1) 
                if (value.AF_ParamId == 1568) {
                    $('#LM_1568').val(value.AF_NumVal);
                    //$('#LMe2').val(value.AF_NumVal);
                }

                //Left Skim Plate Distance
                if (value.AF_ParamId == 1569) {
                    $('#LM_1569').val(value.AF_NumVal);
                    //$('#LMf2').val(value.AF_NumVal);
                }

                //Right Spout (CW2)
                if (value.AF_ParamId == 1570) {
                    //$('#LMg1').val(value.AF_NumVal);
                    $('#LM_1570').val(value.AF_NumVal);
                }

                //Right Skim Plate Distance
                if (value.AF_ParamId == 1571) {
                    //$('#LMh1').val(value.AF_NumVal);
                    $('#LM_1571').val(value.AF_NumVal);
                }

                //Thrust Rods filter by parameter ID
                if (value.AF_ParamId == 1572) {
                    $('#LM_1572').attr('value', value.AF_NumVal);
                } else if (value.AF_ParamId == 1573) {
                    $('#LM_1573').attr('value', value.AF_NumVal);
                }
                if (value.AF_ParamId == 1582) {
                    $('#LM_1582').attr('value', value.AF_NumVal);
                } else if (value.AF_ParamId == 1574) {
                    $('#LM_1574').attr('value', value.AF_NumVal);
                }
                if (value.AF_ParamId == 1575) {
                    $('#LM_1575').attr('value', value.AF_NumVal);
                } else if (value.AF_ParamId == 1576) {
                    $('#LM_1576').attr('value', value.AF_NumVal);
                }

                   //Ladle/Mould Invertory filter by parameter ID
                   if (value.AF_ParamId == 1577) {
                       $('#LM_1577').attr('value', value.AF_NumVal);
                   } else if (value.AF_ParamId == 1578) {
                       $('#LM_1578').attr('value', value.AF_NumVal);
                   }
                   if (value.AF_ParamId == 1579) {
                       $('#LM_1579').attr('value', value.AF_NumVal);
                   } else if (value.AF_ParamId == 1580) {
                       $('#LM_1580').attr('value', value.AF_NumVal);
                   }
                   if (value.AF_ParamId == 1581) {
                       $('#LM_1581').attr('value', value.AF_NumVal);
                   }
                                      
                   $('td, input,select').change(
                    function () {
                        $(this).css({ 'background-color': '#DFD8D1' });
                        $(this).addClass('changed');
                    });


            });
        }
    });
}





function save_precast(tbl_name, prefix, msg) {


    var aflotid = $('#pc_lotid').text();
    var items = [];

    $('#' + tbl_name).find('td').each(function () {
        $(this).find('input.changed').each(function () {
            var attrid = $(this).attr('id');
            var paramid_ = attrid.replace(prefix, '');
            var numval_ = $(this).val();

            items.push({
                aflotid: aflotid,
                paramid: paramid_,
                numval: numval_
            });
        });
    });

    items = JSON.stringify({ 'items': items });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/save_precast',

        data: items,

        success: function (data) {

            alert('Changes in ' + msg + ' was now saved.');

        }
    });

}


function load_mouldr(aflot) {

    var aflotno_ = aflot

    $.ajax({
        url: afserverpath + '/AnodeFurnace/load_mouldr/',
        data: {
            aflotno: aflotno_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {



                if (value.AF_MouldNo == 1 && value.AF_CastingWheel == 1) {
                    $("#cw_1_1").prop('checked', true);
                    $("#cw_1_1").addClass('changed');
                }
                if (value.AF_MouldNo == 1 && value.AF_CastingWheel == 2) {
                    $("#cw_1_2").prop('checked', true);
                    $("#cw_1_2").addClass('changed');
                }
                if (value.AF_MouldNo == 2 && value.AF_CastingWheel == 1) {
                    $("#cw_2_1").prop('checked', true);
                    $("#cw_2_1").addClass('changed');
                } if (value.AF_MouldNo == 2 && value.AF_CastingWheel == 2) {
                    $("#cw_2_2").prop('checked', true);
                    $("#cw_2_2").addClass('changed');
                }
                if (value.AF_MouldNo == 3 && value.AF_CastingWheel == 1) {
                    $("#cw_3_1").prop('checked', true);
                    $("#cw_3_1").addClass('changed');
                } if (value.AF_MouldNo == 3 && value.AF_CastingWheel == 2) {
                    $("#cw_3_2").prop('checked', true);
                    $("#cw_3_2").addClass('changed');
                }
                if (value.AF_MouldNo == 4 && value.AF_CastingWheel == 1) {
                    $("#cw_4_1").prop('checked', true);
                    $("#cw_4_1").addClass('changed');
                }
                if (value.AF_MouldNo == 4 && value.AF_CastingWheel == 2) {
                    $("#cw_4_2").prop('checked', true);
                    $("#cw_4_2").addClass('changed');
                }
                if (value.AF_MouldNo == 5 && value.AF_CastingWheel == 1) {
                    $("#cw_5_1").prop('checked', true);
                    $("#cw_5_1").addClass('changed');
                }
                if (value.AF_MouldNo == 5 && value.AF_CastingWheel == 2) {
                    $("#cw_5_2").prop('checked', true);
                    $("#cw_5_2").addClass('changed');
                }
                if (value.AF_MouldNo == 6 && value.AF_CastingWheel == 1) {
                    $("#cw_6_1").prop('checked', true);
                    $("#cw_6_1").addClass('changed');
                }
                if (value.AF_MouldNo == 6 && value.AF_CastingWheel == 2) {
                    $("#cw_6_2").prop('checked', true);
                    $("#cw_6_2").addClass('changed');
                }
                if (value.AF_MouldNo == 7 && value.AF_CastingWheel == 1) {
                    $("#cw_7_1").prop('checked', true);
                    $("#cw_7_1").addClass('changed');
                }
                if (value.AF_MouldNo == 7 && value.AF_CastingWheel == 2) {
                    $("#cw_7_2").prop('checked', true);
                    $("#cw_7_2").addClass('changed');
                }
                if (value.AF_MouldNo == 8 && value.AF_CastingWheel == 1) {
                    $("#cw_8_1").prop('checked', true);
                    $("#cw_8_1").addClass('changed');
                }
                if (value.AF_MouldNo == 8 && value.AF_CastingWheel == 2) {
                    $("#cw_8_2").prop('checked', true);
                    $("#cw_8_2").addClass('changed');
                }
                if (value.AF_MouldNo == 9 && value.AF_CastingWheel == 1) {
                    $("#cw_9_1").prop('checked', true);
                    $("#cw_9_1").addClass('changed');
                }
                if (value.AF_MouldNo == 9 && value.AF_CastingWheel == 2) {
                    $("#cw_9_2").prop('checked', true);
                    $("#cw_9_2").addClass('changed');
                }
                if (value.AF_MouldNo == 10 && value.AF_CastingWheel == 1) {
                    $("#cw_10_1").prop('checked', true);
                    $("#cw_10_1").addClass('changed');
                }
                if (value.AF_MouldNo == 10 && value.AF_CastingWheel == 2) {
                    $("#cw_10_2").prop('checked', true);
                    $("#cw_10_2").addClass('changed');
                }
                if (value.AF_MouldNo == 11 && value.AF_CastingWheel == 1) {
                    $("#cw_11_1").prop('checked', true);
                    $("#cw_11_1").addClass('changed');
                }
                if (value.AF_MouldNo == 11 && value.AF_CastingWheel == 2) {
                    $("#cw_11_2").prop('checked', true);
                    $("#cw_11_2").addClass('changed');
                }
                if (value.AF_MouldNo == 12 && value.AF_CastingWheel == 1) {
                    $("#cw_12_1").prop('checked', true);
                    $("#cw_12_1").addClass('changed');
                }
                if (value.AF_MouldNo == 12 && value.AF_CastingWheel == 2) {
                    $("#cw_12_2").prop('checked', true);
                    $("#cw_12_2").addClass('changed');
                }
                if (value.AF_MouldNo == 13 && value.AF_CastingWheel == 1) {
                    $("#cw_13_1").prop('checked', true);
                    $("#cw_13_1").addClass('changed');
                }
                if (value.AF_MouldNo == 13 && value.AF_CastingWheel == 2) {
                    $("#cw_13_2").prop('checked', true);
                    $("#cw_13_2").addClass('changed');
                }
                if (value.AF_MouldNo == 14 && value.AF_CastingWheel == 1) {
                    $("#cw_14_1").prop('checked', true);
                    $("#cw_14_1").addClass('changed');
                }
                if (value.AF_MouldNo == 14 && value.AF_CastingWheel == 2) {
                    $("#cw_14_2").prop('checked', true);
                    $("#cw_14_2").addClass('changed');
                }
                if (value.AF_MouldNo == 15 && value.AF_CastingWheel == 1) {
                    $("#cw_15_1").prop('checked', true);
                    $("#cw_15_1").addClass('changed');
                }
                if (value.AF_MouldNo == 15 && value.AF_CastingWheel == 2) {
                    $("#cw_15_2").prop('checked', true);
                    $("#cw_15_2").addClass('changed');
                }
                if (value.AF_MouldNo == 16 && value.AF_CastingWheel == 1) {
                    $("#cw_16_1").prop('checked', true);
                    $("#cw_16_1").addClass('changed');
                }
                if (value.AF_MouldNo == 16 && value.AF_CastingWheel == 2) {
                    $("#cw_16_2").prop('checked', true);
                    $("#cw_16_2").addClass('changed');
                }
                if (value.AF_MouldNo == 17 && value.AF_CastingWheel == 1) {
                    $("#cw_17_1").prop('checked', true);
                    $("#cw_17_1").addClass('changed');
                }
                if (value.AF_MouldNo == 17 && value.AF_CastingWheel == 2) {
                    $("#cw_17_2").prop('checked', true);
                    $("#cw_17_2").addClass('changed');
                }
                if (value.AF_MouldNo == 18 && value.AF_CastingWheel == 1) {
                    $("#cw_18_1").prop('checked', true);
                    $("#cw_18_1").addClass('changed');
                }
                if (value.AF_MouldNo == 18 && value.AF_CastingWheel == 2) {
                    $("#cw_18_2").prop('checked', true);
                    $("#cw_18_2").addClass('changed');
                }


                //$('.cw1').on('change', function () {
                //     //if ($('input.cw1').filter(':checked').length >= 1 || 0) {

                //    //   if   ($('input.cw1').not(this).prop('checked', false)){
                //    if ($("input.cw1").attr("checked", false)) {
                //          $('input.cw1').css({ 'background-color': '#FFFFFF' });
                //          $(this).removeClass('changed');

                //      } else {

                //          $('input').prop(function () {

                //              $(this).css({ 'background-color': '#DFD8D1' });
                //              $(this).addClass('changed');
                //              $(this).removeClass('cw2');
                //              $(this).removeClass('cw1');

                //          });

                //      }
                // });


                // $('.cw2').change(function () {
                //     // if ($('input.cw2').filter(':checked').length >= 1 || 0) {

                //     // if  ($('input.cw2').not(this).prop('checked', false)) {
                //     if ($("input.cw2").attr("checked", false)) {
                //     $('input.cw2').css({ 'background-color': '#FFFFFF' });
                //          $(this).removeClass('changed');

                //      } else {

                //          $('input').prop(function () {

                //              $(this).css({ 'background-color': '#DFD8D1' });
                //              $(this).addClass('changed');
                //              $(this).removeClass('cw2');
                //              $(this).removeClass('cw1');
                //          });                                             
                //      }
                // });




                $('input').prop(function () {

                    $(this).css({ 'background-color': '#DFD8D1' });
                    $(this).addClass('changed');
                    $(this).removeClass('cw2');
                    $(this).removeClass('cw1');

                    if ($(this).prop('checked') == true) {

                        $(this).addClass('changed');

                    } else {

                        $(this).removeClass('changed');
                    }

                });
            });
        }
    });
}


function save_mouldr() {


    var aflotid = $('#pc_lotid').text();

    var items = [];

    $('#aflogsheet_pcmouldr').find('input[id*="cw_"].changed').each(function () {

        var attrid = $(this).attr('id');
        var strValue = attrid.replace('cw_', '');
        var params = strValue.split("_");

        var afwheelnum = params[1];

        if ($(this).prop('checked') == true) {

            $(this).addClass('changed');
            var afmouldnum = params[0];


        } else {
            $(this).removeClass('changed');
            var afmouldnum = 0;
        }

        items.push({
            aflotid: aflotid,
            afwheelnum: afwheelnum,
            afmouldnum: afmouldnum,

        });
    });

    if (items.length != 0) {

        $.ajax({
            url: serverpath + '/AnodeFurnace/Delete_mouldr/',
            data: {

                aflotid: aflotid,

            },
            type: 'POST',
            cache: false,
            success: function (data) {


                items = JSON.stringify({ 'items': items });

                $.ajax({
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    type: 'POST',
                    url: afserverpath + '/AnodeFurnace/save_mouldr',

                    data: items,

                    success: function (data) {

                        // alert('Changes in Mould Replacement now saved.');

                    }
                });
            }
        });

    } else {

        // alert('No changes were made.');

    }
}


function save_precast_cust() {

    var custid = $('#cw1_cust_ddl').val();
    var aflotid = $('#pc_lotid').text();
    var items = [];

    items.push({
        aflotid: aflotid,
        custid: custid
    });

    items = JSON.stringify({ 'items': items });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: afserverpath + '/AnodeFurnace/save_precast_cust',

        data: items,

        success: function (data) {

        }
    });

}

function precast_customer_data(aflot) {

    var aflotno = aflot;

    $.ajax({
        url: afserverpath + '/AnodeFurnace/precast_customer_data/',
        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $.each(data, function (index, value) {

                $('#cw1_cust_ddl').val(value.AF_NumVal);

            });
        }
    });
}


$("#save_blister_prep").live('click', function () {
    save_precast('ladle_measurement_tbl', 'LM_', 'Ladle Measurements');
});

$("#save_blister_prep").live('click', function () {
    save_precast('tbl_thrust_rods', 'LM_', 'Thrust Rods');
});
$("#save_blister_prep").live('click', function () {
    save_precast('tbl_LM_inventory', 'LM_', 'Ladle/Mould Inventory');
});

$("#save_blister_prep").live('click', function () {
    save_mouldr();
});

$("#save_blister_prep").live('click', function () {
    save_precast_cust();
});

$("#save_blister_prep").live('click', function () {
    save_condemned_mould();
});


$("#save_blister_prep").on("click", function () {
    $('#csaved').css({ 'visibility': 'visible' });
    $("#csaved").toggle(900).fadeOut();
});

$("#pcaddrow_btn").live('click', function () {
    addprecast_partial();
});

$("#pcaddrow_lnk").live('click', function () {
    addprecast_partial();
});


$("#add_precast_ok_btn").live('click', function () {


    var aflotid = $('#pc_lotid').text();

    addprecast(aflotid, '#Dialog_AddPreCast');
});


$("#edit_precast_ok_btn").live('click', function () {


    var aflotid = $('#pc_lotid').text();

    save_edit_precast_act('#Dialog_editPreCast');


});

function addprecast_partial() {

    var partialview_link1 = afserverpath + "/AnodeFurnace/addprecast_partial";


    $('#Dialog_AddPreCast').load(partialview_link1, function () {
        $(this).dialog('open');

        //$('body').css('overflow', 'hidden');



    });

    return false;
}

//onkeyup input add activity code
$('#Dialog_AddPreCast .act_add_code_input').live('keyup', function () {

    var actcode_val = $(this).val();
    act_code_intel_af(actcode_val, '#Dialog_AddPreCast');

});

//onkeyup input edit activity code
$('#Dialog_editPreCast .act_add_code_input').live('keyup', function () {

    var actcode_val = $(this).val();
    act_code_intel_af(actcode_val, '#Dialog_editPreCast');

});



function act_code_intel_af(actcode_val, dialogname) {

    $(dialogname + ' .act_add_code_input').val(actcode_val);

    $(dialogname + ' #Act_Desc_div').html('Invalid Code.');


    $.ajax({
        url: serverpath + '/AnodeFurnace/ActivityCode_Intellisense/',

        data: {
            actcode_param: actcode_val
        },

        type: 'post',
        cache: false,
        success: function (data) {
            $(dialogname + ' #Act_Desc_div').text(data.AF_ActivityDesc);

            $(dialogname + ' .actcode_id').val(data.AF_ActivityCodeId);
            $(dialogname + ' .actcode_id').text(data.AF_ActivityCodeId);
            $('.add_pc_actcode_id').val(data.AF_ActivityCodeId);
            $('.add_pc_actcode_id').text(data.AF_ActivityCodeId);

            validation_perbtn_precast(data.AF_ActivityCodeId);
            validation_perbtn_precast_for_edit(data.AF_ActivityCodeId);
            validation_perbtn_casting(data.AF_ActivityCodeId);

        }
    });

}

$('.act_code_desc_td_cast').live('click', function () {

    var actcode_val = $(this).closest('td').prev('td').text();
    var af_val = $(this).closest('td').next('td').next('td').next('td').text();
    var cf_val = $(this).closest('td').next('td').next('td').text();
    var fsfe_val = $(this).closest('td').next('td').text();

    //var af_val = $(this).closest('td').next('td').next('td').text();
    //var cf_val = $(this).closest('td').prev('td').prev('td').prev('td').text();
    //var fsfe_val = $(this).closest('td').prev('td').prev('td').prev('td').prev('td').text();

    var dialogparent = $(this).closest('div.ui-dialog-content').attr('id');

    act_code_intel_af(actcode_val, '#' + dialogparent);



    $('#act_code_table td').css('background', '#FFFFFF');
    $('#act_code_table td').css('font-style', 'normal');


    $(this).css('background', '#FFFF99');
    $(this).css('font-style', 'italic');

    $(this).closest('td').prev('td').css('background', '#FFFF99');
    $(this).closest('td').prev('td').css('font-style', 'italic');
    
});





//start time js for add precast form
$(document).on('change', '#start_time_hr_input', function () {

    validation_perbtn_precast();

});

$(document).on('change', '#start_time_min_input', function () {

    validation_perbtn_precast();

});

$(document).on('change', '#start_date_input', function () {

    validation_perbtn_precast();

});



$(document).on('change', '#start_time_hr_input_editpcact', function () {


    validation_perbtn_precast_for_edit();
});

$(document).on('change', '#start_time_min_input_editpcact', function () {


    validation_perbtn_precast_for_edit();
});

$(document).on('change', '#start_date_input_editpcact', function () {

    validation_perbtn_precast_for_edit();

});



//end time js for add precast form
$(document).on('change', '#end_time_hr_input', function () {

    validation_perbtn_precast();

});
;
$(document).on('change', '#end_time_min_input', function () {

    validation_perbtn_precast();

});

$(document).on('change', '#end_date_input', function () {

    validation_perbtn_precast();

});


$(document).on('change', '#end_time_hr_input_editpcact', function () {

    validation_perbtn_precast_for_edit();
});

$(document).on('change', '#end_time_min_input_editpcact', function () {

    validation_perbtn_precast_for_edit();
});

$(document).on('change', '#end_date_input_editpcact', function () {

    validation_perbtn_precast_for_edit();
});


function validation_perbtn_precast(codeid) {

    var duration_time = $('#Dialog_AddPreCast #the_dur').text();

   
    var s_date = new Date($('#Dialog_AddPreCast #start_date_input').val());
    var s_hr = $('#Dialog_AddPreCast #start_time_hr_input').val();
    var s_min = $('#Dialog_AddPreCast #start_time_min_input').val();



    var e_date = new Date($('#Dialog_AddPreCast #end_date_input').val());
    var end_hr = $('#Dialog_AddPreCast #end_time_hr_input').val();
    var end_min = $('#Dialog_AddPreCast #end_time_min_input').val();


    //var edit_s_date = new Date($('#start_date_input_editpcact').val());
    //var s_hr = $('#start_time_hr_input_editpcact').val();
    //var s_min = $('#start_time_min_input_editpcact').val();

    //var edit_e_date = new Date($('#end_date_input_editpcact').val());
    //var end_hr = $('#end_time_hr_input_editpcact').val();
    //var end_min = $('#end_time_min_input_editpcact').val();

    //edit_start_date = edit_s_date.add({
    //    minutes: s_min,
    //    hours: s_hr
    //});

    //edit_end_date = edit_e_date.add({
    //    minutes: end_min,
    //    hours: end_hr
    //});



    start_date = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    end_date = e_date.add({
        minutes: end_min,
        hours: end_hr
    });

    var dur = Math.floor((end_date - start_date) / 60000);
    var h = Math.floor(dur / 60);
    var m = dur % 60;
    var the_dur = (h + '.' + m);


    //var dur1 = Math.floor((edit_end_date - edit_start_date) / 60000);
    //var h1 = Math.floor(dur1 / 60);
    //var m1 = dur1 % 60;
    //var the_dur1 = (h1 + '.' + m1);



    var actcodedesc_msg = $('#Dialog_AddPreCast #Act_Desc_div').text();
    var actcode_msg = $('#Dialog_AddPreCast .act_add_code_input').val();
    var actduration_msg = $('#Dialog_AddPreCast #the_dur').text();

    if (codeid == '' || codeid == 0 || codeid == '-' || actcodedesc_msg == "Invalid Code." || actcodedesc_msg == '-' || actcodedesc_msg == 'Invalid Code.Invalid Code.' || actcode_msg == "") {

        $('#Dialog_AddPreCast .act_add_code_input').css('background-color', '#FFA8A8');
        $('#Dialog_AddPreCast #error_code').html("Please input a correct Activity Code.");
        $('#Dialog_AddPreCast #add_precast_ok_btn').attr('disabled', true);


    } else if (end_date <= start_date || start_date >= end_date || the_dur == 0 ) {
        $('#Dialog_AddPreCast #error_msg_time_pc').html('ERROR: <b>End Time</b> is lesser than or equal to <b>Start Time</b>.');
        $('#Dialog_AddPreCast #the_dur').text('ERROR');
        $('#Dialog_AddPreCast #add_precast_ok_btn').attr('disabled', true);


    } else {
        $('#Dialog_AddPreCast #error_code').html("");
        $('#Dialog_AddPreCast .act_add_code_input').css('background-color', '#FFFFCC');
        $('#Dialog_AddPreCast #error_msg_time_pc').html('Correct: <b>Time</b> is Good.');
        $('#Dialog_AddPreCast #the_dur').text(the_dur);
        $('#Dialog_AddPreCast #add_precast_ok_btn').attr('disabled', false);


    }


}

function validation_perbtn_precast_for_edit() {

    var duration_time = $('#the_dur1').text();


    //var s_date = new Date($('#start_date_input').val());
    //var s_hr = $('#start_time_hr_input').val();
    //var s_min = $('#start_time_min_input').val();



    //var e_date = new Date($('#end_date_input').val());
    //var end_hr = $('#end_time_hr_input').val();
    //var end_min = $('#end_time_min_input').val();


    var edit_s_date = new Date($('#start_date_input_editpcact').val());
    var s_hr = $('#start_time_hr_input_editpcact').val();
    var s_min = $('#start_time_min_input_editpcact').val();



    var edit_e_date = new Date($('#end_date_input_editpcact').val());
    var end_hr = $('#end_time_hr_input_editpcact').val();
    var end_min = $('#end_time_min_input_editpcact').val();


    edit_start_date = edit_s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    edit_end_date = edit_e_date.add({
        minutes: end_min,
        hours: end_hr
    });

    //start_date = s_date.add({
    //    minutes: s_min,
    //    hours: s_hr
    //});



    //end_date = e_date.add({
    //    minutes: end_min,
    //    hours: end_hr
    //});

    //var dur = Math.floor((end_date - start_date) / 60000);
    //var h = Math.floor(dur / 60);
    //var m = dur % 60;
    //var the_dur = (h + '.' + m);


    var dur1 = Math.floor((edit_end_date - edit_start_date) / 60000);
    var h1 = Math.floor(dur1 / 60);
    var m1 = dur1 % 60;
    var the_dur1 = (h1 + '.' + m1);



    var actcodedesc_msg = $('#Dialog_editPreCast #Act_Desc_div').text();
    var actcode_msg = $('#Dialog_editPreCast .act_add_code_input').val();
    var actduration_msg = $('#Dialog_editPreCast #the_dur1').text();

    if (actcodedesc_msg == 'Invalid Code.' || actcodedesc_msg == '-' || actcodedesc_msg == 'Invalid Code.Invalid Code.') {

        $('#Dialog_editPreCast .act_add_code_input').css('background-color', '#FFA8A8');
        $('#Dialog_editPreCast #error_code').html("Please input a correct Activity Code.");
        $('#Dialog_editPreCast #edit_precast_ok_btn').attr('disabled', true);

    } else if (the_dur1 == 0 || edit_end_date <= edit_start_date || edit_start_date >= edit_end_date) {
        $('#Dialog_editPreCast #error_msg_time_pc_edit').html('ERROR: <b>End Time</b> is lesser than or equal to <b>Start Time</b>.');

        $('#Dialog_editPreCast #the_dur1').text('ERROR');
        $('#Dialog_editPreCast #edit_precast_ok_btn').attr('disabled', true);


    } else {
        $('#Dialog_editPreCast #error_code').html("");
        $('#Dialog_editPreCast .act_add_code_input').css('background-color', '#FFFFCC');
        $('#Dialog_editPreCast #error_msg_time_pc_edit').html('Correct: <b>Time</b> is Good.');

        $('#Dialog_editPreCast #the_dur1').text(the_dur1);
        $('#Dialog_editPreCast #edit_precast_ok_btn').attr('disabled', false);

    }


}



function addprecast(aflotid) {

    var aflotid = $('#pc_lotid').text();

    var actcode_id = $('.add_pc_actcode_id').text();
    var wheelid = 0;
    var pc_remarks = $('#pc_remarks').text();


    var s_date = new Date($('#start_date_input').val());
    var s_hr = $('#start_time_hr_input').val();
    var s_min = $('#start_time_min_input').val();



    var end_date = new Date($('#end_date_input').val());
    var end_hr = $('#end_time_hr_input').val();
    var end_min = $('#end_time_min_input').val();


    add_start_date_ = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    add_end_date_ = end_date.add({
        minutes: end_min,
        hours: end_hr
    });


    var start_date = add_start_date_.toString("ddd, dd MMM yyyy H:mm:ss ");
    var end_date = add_end_date_.toString("ddd, dd MMM yyyy H:mm:ss ");



    $.ajax({
        url: afserverpath + '/AnodeFurnace/add_precast_act/',
        data: {

            aflotid_: aflotid,
            start_date: start_date,
            end_date: end_date,
            actcode_id: actcode_id,
            wheelid: wheelid,
            pc_remarks: pc_remarks
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#Dialog_AddPreCast').dialog('close');

            alert('Data now added.');

            load_PreCast_Act();




        }
    });
}

function load_PreCast_Act() {

    var aflotno = $('#pc_lotid').text();
    $('#precasting_tbl td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_PreCast_Act/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);

                $('#precasting_tbl tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr +'.'+ min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_precast_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_precast_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}

function load_PreCast_Act_for_tab(aflotno) {

    $('#precasting_tbl td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_PreCast_Act_fortab/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);

                $('#precasting_tbl tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr + '.' + min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_precast_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_precast_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}

$("#search_pc").keyup(function () {
    _this = this;
    // Show only matching TR, hide rest of them
    $.each($("#precasting_tbl tbody tr"), function () {
        if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
            $(this).hide();
        else
            $(this).show();
    });
});


$('#precasting_tbl tr').live('click', function () {

    // var cycstat = $('#cyc_statval').text();

    // if (check_ongoing_cyc()) {

    //var theval = $(this).find('td:first-child').text();
    //  beingclicked = theval;

     $('#precasting_tbl td').css('background-color', '#fafafa');

    //alert('select: ' + theval);
    //alert(lastclicked);
    // if (lastclicked == theval) {
    // } else {
    //     if (lastclicked == 0) {

    //         $(this).children().find('#pcdel_id' + theval).removeClass();
    //         $(this).children().find('#pcedit_id' + theval).removeClass();

    //        $('#pcdel_id' + theval).removeClass();
    //        $('#pcedit_id' + theval).removeClass();
    //        //$(this).children('#pcadd_id').removeClass();
    //} else {
    //    $(this).children().find('#pcdel_id' + lastclicked).addClass('disable_cfact');
    //    $(this).children().find('#pcedit_id' + lastclicked).addClass('edit_cfact');

    //        $('#pcdel_id' + lastclicked).addClass('disable_cfact');
    //        $('#pcedit_id' + lastclicked).addClass('edit_cfact');
    //       // $(this).children('#pcadd_id').removeClass();


                //$(this).children().find('#pcdel_id' + theval).removeClass();
                //$(this).children().find('#pcedit_id' + theval).removeClass();
        //         $('#pcdel_id' + theval).removeClass();
        //         $('#pcedit_id' + theval).removeClass();
        //       // $('#pcadd_id').addClass('insertmiddle_cfact');                  
        //   }
        //}
           $(this).children('td').css('background-color', '#FFFFCC');
           //$(this).children().find('#pcdel_id' + theval).addClass('select_disable_cfact');
           //$(this).children().find('#pcedit_id' + theval).addClass('select_edit_cfact');
          // $(this).find('td').toggleClass("select_edit_cfact");
          // $('#precasting_tbl tr').eq(0).addClass('select_edit_cfact');
          // $(this).children('#pcadd_id').addClass('select_insertmiddle_cfact');

    // lastclicked = theval;

    //}
});




function delete_precast_act(ActDesc, ActId_) {

    themsg = 'Are you sure you want to delete the Activity: ' + ActDesc + ' ?';

    var answer = confirm(themsg);

    if (answer) {
        $.ajax({
            url: serverpath + '/AnodeFurnace/delete_precast_act/',
            data: {
                actid: ActId_
            },
            type: 'POST',
            cache: false,
            success: function (data) {

                load_PreCast_Act();

            }
        });
    }
}

function edit_precast_act(ActId_) {


    var partialview_link = serverpath + "/AnodeFurnace/editprecast_partial/?actid=" + ActId_;


    $('#Dialog_editPreCast').load(partialview_link, function () {

        $(this).dialog('open');

        //$('body').css('overflow', 'hidden');


    });

    return false;
}

function save_edit_precast_act() {

    var pc_timelog_Id = $('#pc_timelog_Id').text();

    var aflotid = $('#pc_lotid').text();

    var actcode_id = $('.actcode_id').text();
    var wheelid = 0;
    var pc_remarks = $('#pc_remarks_edit').text();


    var s_date = new Date($('#start_date_input_editpcact').val());
    var s_hr = $('#start_time_hr_input_editpcact').val();
    var s_min = $('#start_time_min_input_editpcact').val();



    var end_date = new Date($('#end_date_input_editpcact').val());
    var end_hr = $('#end_time_hr_input_editpcact').val();
    var end_min = $('#end_time_min_input_editpcact').val();


    add_start_date_ = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    add_end_date_ = end_date.add({
        minutes: end_min,
        hours: end_hr
    });


    var start_date = add_start_date_.toString("ddd, dd MMM yyyy H:mm:ss ");
    var end_date = add_end_date_.toString("ddd, dd MMM yyyy H:mm:ss ");



    $.ajax({
        url: afserverpath + '/AnodeFurnace/save_edit_precast_act/',
        data: {

            pc_timelog_Id: pc_timelog_Id,
            aflotid_: aflotid,
            start_date: start_date,
            end_date: end_date,
            actcode_id: actcode_id,
            wheelid: wheelid,
            pc_remarks: pc_remarks
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#Dialog_editPreCast').dialog('close');

            alert('Data now updated.');

            load_PreCast_Act();




        }
    });

}

//----------------------------------------------------------------End of PreCasting JS----------------------------------------------------//

//----------------------------------------------------------Casting JS--------------------------------------------------------------------//


$("#cast1addrow_btn").live('click', function () {
    addcasting_partial();
});

$("#cast1addrow_lnk").live('click', function () {
    addcasting_partial();
});


$("#add_casting_ok_btn").live('click', function () {

    var wheelid = $('#af_cwlist').val();
    var aflotno = $('#cfcyclenum_cycledetail').text();


    if (wheelid =='') {
        alert('Please select Casting Wheel');
    } else {

        addcasting(aflotno, '#Dialog_addcasting');
    }

});


$("#edit_cast_ok_btn").live('click', function () {

    save_edit_casting_act();

});



function addcasting_partial() {

    var partialview_link1 = afserverpath + "/AnodeFurnace/addcasting_partial";


    $('#Dialog_addcasting').load(partialview_link1, function () {
        $(this).dialog('open');

        //$('body').css('overflow', 'hidden');
    });

    return false;
}

function edit_casting_act(ActId_) {


    var partialview_link = serverpath + "/AnodeFurnace/edit_casting_partial/?actid=" + ActId_;


    $('#Dialog_editcasting').load(partialview_link, function () {

        $(this).dialog('open');

        //$('body').css('overflow', 'hidden');


    });

    return false;
}



//start time js for add casting form
$(document).on('change', '#start_time_hr_input_cast,#start_time_min_input_cast,#start_date_input_cast', function () {

     validation_perbtn_casting();

});

//end time js for add casting form
$(document).on('change', '#end_time_hr_input_cast,#end_time_min_input_cast,#end_date_input_cast', function () {

    validation_perbtn_casting();

});

//onkeyup input add activity code
$('#Dialog_addcasting .act_add_code_input').live('keyup', function () {

    var actcode_val = $(this).val();
    act_code_intel_af(actcode_val, '#Dialog_addcasting');

});





//start time js for edit casting form
$(document).on('change', '#start_time_hr_input_edit_cast,#start_time_min_input_edit_cast,#start_date_input_edit_cast', function () {

    validation_perbtn_cast_for_edit();

});

//end time js for edit casting form
$(document).on('change', '#end_time_hr_input_edit_cast,#end_time_min_input_edit_cast,#end_date_input_edit_cast', function () {

    validation_perbtn_cast_for_edit();

});

//onkeyup input edit activity code
$('#Dialog_editcasting .act_add_code_input').live('keyup', function () {

    var actcode_val = $(this).val();
    act_code_intel_af(actcode_val, '#Dialog_editcasting');

});



function validation_perbtn_casting(codeid) {

    var duration_time = $('#Dialog_addcasting #the_dur').text();
    var wheelid = $('#af_cwlist').text();

    var s_date = new Date($('#Dialog_addcasting #start_date_input_cast').val());
    var s_hr = $('#Dialog_addcasting #start_time_hr_input_cast').val();
    var s_min = $('#Dialog_addcasting #start_time_min_input_cast').val();



    var e_date = new Date($('#Dialog_addcasting #end_date_input_cast').val());
    var end_hr = $('#Dialog_addcasting #end_time_hr_input_cast').val();
    var end_min = $('#Dialog_addcasting #end_time_min_input_cast').val();


    

    start_date = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    end_date = e_date.add({
        minutes: end_min,
        hours: end_hr
    });

    var dur = Math.floor((end_date - start_date) / 60000);
    var h = Math.floor(dur / 60);
    var m = dur % 60;
    var the_dur = (h + '.' + m);



    var actcodedesc_msg = $('#Dialog_addcasting #Act_Desc_div').text();
    var actcode_msg = $('#Dialog_addcasting .act_add_code_input').val();
    var actduration_msg = $('#Dialog_addcasting #the_dur').text();

    if (codeid == '' || codeid == 0 || codeid == '-' || actcodedesc_msg == "Invalid Code." || actcodedesc_msg == '-' || actcodedesc_msg == 'Invalid Code.Invalid Code.' || actcode_msg == "") {

        $('#Dialog_addcasting .act_add_code_input').css('background-color', '#FFA8A8');
        $('#Dialog_addcasting #error_code').html("Please input a correct Activity Code.");
        $('#Dialog_addcasting #add_casting_ok_btn').attr('disabled', true);


    } else if (end_date <= start_date || start_date >= end_date || the_dur == 0 || the_dur == "ERROR") {
        $('#Dialog_addcasting #error_msg_time_pc').html('ERROR: <b>End Time</b> is lesser than or equal to <b>Start Time</b>.');
        $('#Dialog_addcasting #the_dur').text('ERROR');
        $('#Dialog_addcasting #add_casting_ok_btn').attr('disabled', true);


    } else {
        $('#Dialog_addcasting #error_code').html("");
        $('#Dialog_addcasting .act_add_code_input').css('background-color', '#FFFFCC');
        $('#Dialog_addcasting #error_msg_time_pc').html('Correct: <b>Time</b> is Good.');
        $('#Dialog_addcasting #the_dur').text(the_dur);
        $('#Dialog_addcasting #add_casting_ok_btn').attr('disabled', false);
    }
       
}



function validation_perbtn_cast_for_edit() {

    var duration_time = $('Dialog_editcasting #the_dur1').text();
    
    var edit_s_date = new Date($('#start_date_input_edit_cast').val());
    var s_hr = $('#start_time_hr_input_edit_cast').val();
    var s_min = $('#start_time_min_input_edit_cast').val();



    var edit_e_date = new Date($('#end_date_input_edit_cast').val());
    var end_hr = $('#end_time_hr_input_edit_cast').val();
    var end_min = $('#end_time_min_input_edit_cast').val();


    edit_start_date = edit_s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    edit_end_date = edit_e_date.add({
        minutes: end_min,
        hours: end_hr
    });

   
    var dur1 = Math.floor((edit_end_date - edit_start_date) / 60000);
    var h1 = Math.floor(dur1 / 60);
    var m1 = dur1 % 60;
    var the_dur1 = (h1 + '.' + m1);



    var actcodedesc_msg = $('#Dialog_editcasting #Act_Desc_div').text();
    var actcode_msg = $('#Dialog_editcasting .act_add_code_input').val();
    var actduration_msg = $('#Dialog_editcasting #the_dur1').text();

    if (actcodedesc_msg == 'Invalid Code.' || actcodedesc_msg == '-' || actcodedesc_msg == 'Invalid Code.Invalid Code.') {

        $('#Dialog_editcasting .act_add_code_input').css('background-color', '#FFA8A8');
        $('#Dialog_editcasting #error_code').html("Please input a correct Activity Code.");
        $('#Dialog_editcasting #edit_cast_ok_btn').attr('disabled', true);

    } else if (the_dur1 == 0 || edit_end_date <= edit_start_date || edit_start_date >= edit_end_date) {
        $('#Dialog_editcasting #error_msg_time_pc_edit').html('ERROR: <b>End Time</b> is lesser than or equal to <b>Start Time</b>.');

        $('#Dialog_editcasting #the_dur1').text('ERROR');
        $('#Dialog_editcasting #edit_cast_ok_btn').attr('disabled', true);


    } else {
        $('#Dialog_editcasting #error_code').html("");
        $('#Dialog_editcasting .act_add_code_input').css('background-color', '#FFFFCC');
        $('#Dialog_editcasting #error_msg_time_pc_edit').html('Correct: <b>Time</b> is Good.');

        $('#Dialog_editcasting #the_dur1').text(the_dur1);
        $('#Dialog_editcasting #edit_cast_ok_btn').attr('disabled', false);

    }

}


function addcasting(aflotno) {
      

    var actcode_id = $('.add_pc_actcode_id').text();
    var wheelid = $('#af_cwlist').val();
    var cast_remarks = $('#cast_remarks').text();


    var s_date = new Date($('#start_date_input_cast').val());
    var s_hr = $('#start_time_hr_input_cast').val();
    var s_min = $('#start_time_min_input_cast').val();



    var end_date = new Date($('#end_date_input_cast').val());
    var end_hr = $('#end_time_hr_input_cast').val();
    var end_min = $('#end_time_min_input_cast').val();


    add_start_date_ = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    add_end_date_ = end_date.add({
        minutes: end_min,
        hours: end_hr
    });


    var start_date = add_start_date_.toString("ddd, dd MMM yyyy H:mm:ss ");
    var end_date = add_end_date_.toString("ddd, dd MMM yyyy H:mm:ss ");



    $.ajax({
        url: afserverpath + '/AnodeFurnace/add_casting_act/',
        data: {

            aflotno_: aflotno,
            start_date: start_date,
            end_date: end_date,
            actcode_id: actcode_id,
            wheelid: wheelid,
            cast_remarks: cast_remarks
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#Dialog_addcasting').dialog('close');

            alert('Data now added.');

            load_cast_Act_cw1();
            load_cast_Act_cw2();

         

        }
    });
}


function save_edit_casting_act() {

    var pc_timelog_Id = $('#pc_timelog_Id').text();
    var castingwheelId = $('#castingwheelId').text();
    var aflotid = $('#casting_lotid').text();

    var actcode_id = $('.actcode_id').text();
    var pc_remarks = $('#pc_remarks_edit').text();


    var s_date = new Date($('#start_date_input_edit_cast').val());
    var s_hr = $('#start_time_hr_input_edit_cast').val();
    var s_min = $('#start_time_min_input_edit_cast').val();



    var end_date = new Date($('#end_date_input_edit_cast').val());
    var end_hr = $('#end_time_hr_input_edit_cast').val();
    var end_min = $('#end_time_min_input_edit_cast').val();


    add_start_date_ = s_date.add({
        minutes: s_min,
        hours: s_hr
    });



    add_end_date_ = end_date.add({
        minutes: end_min,
        hours: end_hr
    });


    var start_date = add_start_date_.toString("ddd, dd MMM yyyy H:mm:ss ");
    var end_date = add_end_date_.toString("ddd, dd MMM yyyy H:mm:ss ");



    $.ajax({
        url: afserverpath + '/AnodeFurnace/save_edit_casting_act/',
        data: {

            pc_timelog_Id: pc_timelog_Id,
            aflotid_: aflotid,
            castingwheelId: castingwheelId,
            start_date: start_date,
            end_date: end_date,
            actcode_id: actcode_id,
            pc_remarks: pc_remarks
        },

        type: 'POST',
        cache: false,
        success: function (data) {
            $('#Dialog_editcasting').dialog('close');

            alert('Data now updated.');

            load_cast_Act_cw1();
            load_cast_Act_cw2();


        }
    });

}

function delete_casting_act(ActDesc, ActId_) {

    themsg = 'Are you sure you want to delete the Activity: ' + ActDesc + ' ?';

    var answer = confirm(themsg);

    if (answer) {
        $.ajax({
            url: serverpath + '/AnodeFurnace/delete_casting_act/',
            data: {
                actid: ActId_
            },
            type: 'POST',
            cache: false,
            success: function (data) {

                load_cast_Act_cw1();
                load_cast_Act_cw2();
            }
        });
    }
}



function load_cast_Act_cw1() {

    var aflotno = $('#cfcyclenum_cycledetail').text();

    $('#aftable_cast1 td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_cast_Act_cw1/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var aflotid = $('#casting_lotid').text(value.AF_LotId);

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);


                $('#aftable_cast1 tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr + '.' + min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_casting_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_casting_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}

function load_cast_Act_fortab_cw1(aflotno) {

    $('#aftable_cast1 td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_cast_Act_fortab_cw1/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var aflotid = $('#casting_lotid').text(value.AF_LotId);

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);

                $('#aftable_cast1 tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr + '.' + min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_casting_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_casting_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}


function load_cast_Act_cw2() {

    var aflotno = $('#cfcyclenum_cycledetail').text();

    $('#aftable_cast2 td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_cast_Act_cw2/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var aflotid = $('#casting_lotid').text(value.AF_LotId);

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);

                $('#aftable_cast2 tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr + '.' + min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_casting_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_casting_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}

function load_cast_Act_fortab_cw2(aflotno) {

    $('#aftable_cast2 td').parent().remove();

    $.ajax({
        url: serverpath + '/AnodeFurnace/load_cast_Act_fortab_cw2/',

        data: {
            aflotno: aflotno
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {

                var aflotid = $('#casting_lotid').text(value.AF_LotId);

                var hr = Math.floor(value.Duration / 60);
                var min = (value.Duration % 60);

                $('#aftable_cast2 tr:last').after('<tr><td class="border_color">'
                    + formatDate(value.AF_StartTimeVal) + '</td><td class="border_color">'
                    + formatDate(value.AF_EndTimeVal) + '</td><td class="border_color">'
                    + value.ActivityCodeName + '</td><td class="border_color">'
                    + value.ActivityDesc + '</td><td class="border_color">'
                    + hr + '.' + min + '</td><td class="border_color">'
                    + value.AF_TimeLog_Remarks + '</td><td id= "pcdel_id' + formatDate(value.AF_StartTimeVal) + '" class="select_disable_cfact" onclick="delete_casting_act(\'' + value.ActivityDesc + '\',' + value.AF_TimeLogId + ');return false;">Delete</td><td  id= "pcedit_id' + formatDate(value.AF_StartTimeVal) + '" class="select_edit_cfact"  onclick="edit_casting_act(' + value.AF_TimeLogId + ');return false;">Edit</td></tr>'
                     );
                //paginate('precasting_tbl', 20);
            });
        }
    });
}


function ddactive_af_casting(partialv_name) {

    $.ajax({
        type: "POST",
        url: serverpath + '/AnodeFurnace/load_condemned_reason/',
        data: { partialview_name: partialv_name },
        success: function (result) {
            $('#htab-panel2').html(result);
        }
    });
}


function save_condemned_mould() {

    var lotno = $('#cfcyclenum_cycledetail').text();
    var aflotid = $('#casting_lotid').text();
    var items = [];
       
    
$('#aflogsheet_condem_mould').find('input[id*="cmw_"].changed').each(function () {
        
           
            var attrid = $(this).attr('id');           
            var strValue = attrid.replace('cmw_','');
            var params = strValue.split("_");
     
            var cms_reason_id_ = $(this).closest('td').next('td').find('select').val();
            

            var afwheelnum = params[1];

            if ($(this).prop('checked') == true) {

                $(this).addClass('changed');
                var afmouldnum = params[0];

            } else {
                $(this).removeClass('changed');
                var afmouldnum = 0;
            }


            items.push({
                aflotid: aflotid,
                afwheelnum: afwheelnum,
                afmouldnum: afmouldnum,
                afreasonid: cms_reason_id_
            });
        });
    
   
   

    if (items.length != 0) {

        $.ajax({
            url: serverpath + '/AnodeFurnace/Delete_condem_mould/',
            data: {

                aflotid: aflotid,

            },
            type: 'POST',
            cache: false,
            success: function (data) {
                
            items = JSON.stringify({ 'items': items });

            $.ajax({
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    type: 'POST',
                    url: afserverpath + '/AnodeFurnace/save_condemned_mould',

                    data: items,

                    success: function (data) {

                        // alert('Changes in condemned mould  now saved.');
                        load_condemned_mould(lotno);
                    }
                });
            }
        });

    } else {

        // alert('No changes were made.');
    }
}

function load_condemned_mould(aflot) {

    var aflotno_ = aflot

    $.ajax({
        url: afserverpath + '/AnodeFurnace/load_condemned_mould/',
        data: {
            aflotno: aflotno_
        },

        type: 'POST',
        cache: false,
        success: function (data) {

            $.each(data, function (index, value) {


                if (value.AF_MouldNo == 1 && value.AF_CastingWheel == 1) {
                    $("#cmw_1_1").prop('checked', true);
                    $("#cms_1_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_1_1").addClass('changed');
                  
                }
                if (value.AF_MouldNo == 1 && value.AF_CastingWheel == 2) {
                    $("#cmw_1_2").prop('checked', true);
                    $("#cms_1_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_1_2").addClass('changed');
                    
                }
                if (value.AF_MouldNo == 2 && value.AF_CastingWheel == 1) {
                    $("#cmw_2_1").prop('checked', true);
                    $("#cms_2_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_2_1").addClass('changed');

                } if (value.AF_MouldNo == 2 && value.AF_CastingWheel == 2) {
                    $("#cmw_2_2").prop('checked', true);
                    $("#cms_2_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_2_2").addClass('changed');

                }
                if (value.AF_MouldNo == 3 && value.AF_CastingWheel == 1) {
                    $("#cmw_3_1").prop('checked', true);
                    $("#cms_3_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_3_1").addClass('changed');

                } if (value.AF_MouldNo == 3 && value.AF_CastingWheel == 2) {
                    $("#cmw_3_2").prop('checked', true);
                    $("#cms_3_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_3_2").addClass('changed');
                }
                if (value.AF_MouldNo == 4 && value.AF_CastingWheel == 1) {
                    $("#cmw_4_1").prop('checked', true);
                    $("#cms_4_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_4_1").addClass('changed');
                }
                if (value.AF_MouldNo == 4 && value.AF_CastingWheel == 2) {
                    $("#cmw_4_2").prop('checked', true);
                    $("#cms_4_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_4_2").addClass('changed');
                }
                if (value.AF_MouldNo == 5 && value.AF_CastingWheel == 1) {
                    $("#cmw_5_1").prop('checked', true);
                    $("#cms_5_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_5_1").addClass('changed');
                }
                if (value.AF_MouldNo == 5 && value.AF_CastingWheel == 2) {
                    $("#cmw_5_2").prop('checked', true);
                    $("#cms_5_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_5_2").addClass('changed');
                }
                if (value.AF_MouldNo == 6 && value.AF_CastingWheel == 1) {
                    $("#cmw_6_1").prop('checked', true);
                    $("#cms_6_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_6_1").addClass('changed');
                }
                if (value.AF_MouldNo == 6 && value.AF_CastingWheel == 2) {
                    $("#cmw_6_2").prop('checked', true);
                    $("#cms_6_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_6_2").addClass('changed');
                }
                if (value.AF_MouldNo == 7 && value.AF_CastingWheel == 1) {
                    $("#cmw_7_1").prop('checked', true);
                    $("#cms_7_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_7_1").addClass('changed');
                }
                if (value.AF_MouldNo == 7 && value.AF_CastingWheel == 2) {
                    $("#cmw_7_2").prop('checked', true);
                    $("#cms_7_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_7_2").addClass('changed');
                }
                if (value.AF_MouldNo == 8 && value.AF_CastingWheel == 1) {
                    $("#cmw_8_1").prop('checked', true);
                    $("#cms_8_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_8_1").addClass('changed');
                }
                if (value.AF_MouldNo == 8 && value.AF_CastingWheel == 2) {
                    $("#cmw_8_2").prop('checked', true);
                    $("#cms_8_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_8_2").addClass('changed');
                }
                if (value.AF_MouldNo == 9 && value.AF_CastingWheel == 1) {
                    $("#cmw_9_1").prop('checked', true);
                    $("#cms_9_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_9_1").addClass('changed');
                }
                if (value.AF_MouldNo == 9 && value.AF_CastingWheel == 2) {
                    $("#cmw_9_2").prop('checked', true);
                    $("#cms_9_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_9_2").addClass('changed');
                }
                if (value.AF_MouldNo == 10 && value.AF_CastingWheel == 1) {
                    $("#cmw_10_1").prop('checked', true);
                    $("#cms_10_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_10_1").addClass('changed');
                }
                if (value.AF_MouldNo == 10 && value.AF_CastingWheel == 2) {
                    $("#cmw_10_2").prop('checked', true);
                    $("#cms_10_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_10_2").addClass('changed');
                }
                if (value.AF_MouldNo == 11 && value.AF_CastingWheel == 1) {
                    $("#cmw_11_1").prop('checked', true);
                    $("#cms_11_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_11_1").addClass('changed');
                }
                if (value.AF_MouldNo == 11 && value.AF_CastingWheel == 2) {
                    $("#cmw_11_2").prop('checked', true);
                    $("#cms_11_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_11_2").addClass('changed');
                }
                if (value.AF_MouldNo == 12 && value.AF_CastingWheel == 1) {
                    $("#cmw_12_1").prop('checked', true);
                    $("#cms_12_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_12_1").addClass('changed');
                }
                if (value.AF_MouldNo == 12 && value.AF_CastingWheel == 2) {
                    $("#cmw_12_2").prop('checked', true);
                    $("#cms_12_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_12_2").addClass('changed');
                }
                if (value.AF_MouldNo == 13 && value.AF_CastingWheel == 1) {
                    $("#cmw_13_1").prop('checked', true);
                    $("#cms_13_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_13_1").addClass('changed');
                }
                if (value.AF_MouldNo == 13 && value.AF_CastingWheel == 2) {
                    $("#cmw_13_2").prop('checked', true);
                    $("#cms_13_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_13_2").addClass('changed');
                }
                if (value.AF_MouldNo == 14 && value.AF_CastingWheel == 1) {
                    $("#cmw_14_1").prop('checked', true);
                    $("#cms_14_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_14_1").addClass('changed');
                }
                if (value.AF_MouldNo == 14 && value.AF_CastingWheel == 2) {
                    $("#cmw_14_2").prop('checked', true);
                    $("#cms_14_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_14_2").addClass('changed');
                }
                if (value.AF_MouldNo == 15 && value.AF_CastingWheel == 1) {
                    $("#cmw_15_1").prop('checked', true);
                    $("#cms_15_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_15_1").addClass('changed');
                }
                if (value.AF_MouldNo == 15 && value.AF_CastingWheel == 2) {
                    $("#cmw_15_2").prop('checked', true);
                    $("#cms_15_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_15_2").addClass('changed');
                }
                if (value.AF_MouldNo == 16 && value.AF_CastingWheel == 1) {
                    $("#cmw_16_1").prop('checked', true);
                    $("#cms_16_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_16_1").addClass('changed');
                }
                if (value.AF_MouldNo == 16 && value.AF_CastingWheel == 2) {
                    $("#cmw_16_2").prop('checked', true);
                    $("#cms_16_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_16_2").addClass('changed');
                }
                if (value.AF_MouldNo == 17 && value.AF_CastingWheel == 1) {
                    $("#cmw_17_1").prop('checked', true);
                    $("#cms_17_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_17_1").addClass('changed');
                }
                if (value.AF_MouldNo == 17 && value.AF_CastingWheel == 2) {
                    $("#cmw_17_2").prop('checked', true);
                    $("#cms_17_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_17_2").addClass('changed');
                }
                if (value.AF_MouldNo == 18 && value.AF_CastingWheel == 1) {
                    $("#cmw_18_1").prop('checked', true);
                    $("#cms_18_1").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_18_1").addClass('changed');
                }
                if (value.AF_MouldNo == 18 && value.AF_CastingWheel == 2) {
                    $("#cmw_18_2").prop('checked', true);
                    $("#cms_18_2").val(value.AF_CondemnedMould_ReasonId);
                    $("#cmw_18_2").addClass('changed');
                }      
                
                $('input').prop(function () {

                    $(this).css({ 'background-color': '#DFD8D1' });
                    $(this).addClass('changed');
                    $(this).removeClass('cw2');
                    $(this).removeClass('cw1');

                    if ($(this).prop('checked') == true) {

                        $(this).addClass('changed');

                    } else {

                        $(this).removeClass('changed');
                    }

                });
            });
        }
    });
}















//-----------------------------------------------------------End of Casting JS----------------------------------------------------------// 