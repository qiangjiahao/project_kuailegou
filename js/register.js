$(function(){
	//用户名是否存在
	var usernameExists = true;
    //用户名存在性验证
    $("#txtusername").blur(function () {
            $.ajax({
                url:"php/usercheck.php",
                method:"get",
                data:{"username":$("#txtusername").val()},
                success:function (data) {
                    if(data=="0"){
                        usernameExists = false;
                        $("#usernameMsg").html("该用户名可用");
                    }else{
                        usernameExists = true;
                        $("#usernameMsg").html("该用户名已存在");
                    }
                }
            });
        });
    $("#f").submit(function () {
        if(usernameExists){
            alert("亲，用户名已经存在");
            return false;//阻止浏览器的默认行为。
        }
    });
});
