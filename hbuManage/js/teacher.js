$(document).ready(function () {
    $('#teacherApend,#teacherChange').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '360px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px">教师姓名:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<label style="font-size: 15px">教师工号:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<label style="font-size: 15px">学院名称:</label>'+
                '<select id="col" style="height: 25px;width: 170px;margin-bottom: 30px"><option></option></select>' +
                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});