$(document).ready(function () {
    $(".panTitle").click(function () {
        $(".fa-plus").toggle();
    });
    $("#college").click(function () {
        $("#content-box").attr("src","college.html")
    });
    $("#basicRoom").click(function () {
        $("#content-box").attr("src","basicRoom.html")
    });
    $("#basicTeacher").click(function () {
        $("#content-box").attr("src","basicTeacher.html")
    });
    $("#basicCourse").click(function () {
        $("#content-box").attr("src","basicCourse.html")
    });
    $("#basicTest").click(function () {
        $("#content-box").attr("src","basicTest.html")
    });
    $("#noticeChange").click(function () {
        $("#content-box").attr("src","noticeChange.html")
    });
    $("#teachingTask").click(function () {
        $("#content-box").attr("src","teachingTask.html")
    });
    $("#room").click(function () {
        $("#content-box").attr("src","room.html")
    });
    $("#exroom").click(function () {
        $("#content-box").attr("src","exroom.html")
    });
    $("#teacher").click(function () {
        $("#content-box").attr("src","teacher.html")
    });
    $("#beforeTeachingTask").click(function () {
        $("#content-box").attr("src","beforeTeachingTask.html")
    });
    $("#roomCondition").click(function () {
        $("#content-box").attr("src","roomCondition.html")
    });
    $("#ImportInfringementInfor").click(function () {
        $("#content-box").attr("src","ImportInfringementInfor.html")
    });
    $("#infringementInfo").click(function () {
        $("#content-box").attr("src","infringementInfo.html")
    });
    $("#discipline").click(function () {
        $("#content-box").attr("src","discipline.html")
    });
    $("#doorForm").click(function () {
        $("#content-box").attr("src","doorForm.html")
    });
    $("#Examinee").click(function () {
        $("#content-box").attr("src","Examinee.html")
    });
    $("#deskForm").click(function () {
        $("#content-box").attr("src","deskForm.html")
    });
    $("#ticket").click(function () {
        $("#content-box").attr("src","ticket.html")
    });
    $("#otherForm").click(function () {
        $("#content-box").attr("src","otherForm.html")
    });
    $("#printStastics").click(function () {
        $("#content-box").attr("src","printStastics.html")
    });
    $("#deanAccount").click(function () {
        $("#content-box").attr("src","deanAccount.html")
    });
    $("#collegeAccount").click(function () {
        $("#content-box").attr("src","collegeAccount.html")
    });
    $("#bakeup").click(function () {
        $("#content-box").attr("src","bakeup.html")
    });
    $("#printStastics").click(function () {
        $("#content-box").attr("src","printStastics.html")
    });
    $("#message").click(function () {
        $("#content-box").attr("src","message.html")
    });
    $("#comment").click(function () {
        $("#content-box").attr("src","comment.html")
    });
    $('#btn_delete').on('click', function(){
        layer.msg('你确定删除吗？', {
            time: 0 //不自动关闭
            , btn: ['确定', '取消'],
        })
    });
});

