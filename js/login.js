$(function(){
	$("#sp123").click(function(){
		$('.l_nr').css({"display":"block"});
		$('.l_nr2').css({"display":"none"});
	});
	$("#sp1231").click(function(){
		$('.l_nr2').css({"display":"block"});
		$('.l_nr').css({"display":"none"});
	});
	$("#btnlogin").click(function(){
		login();
	});
});

function login(){
	$.ajax({
       	type:"POST",
       	url:"php/logincheck.php",
       	data:{
          "username":$("#username").val(),
          "userpass":$("#userpass").val()
       },
        success:function (t) {
            if(t=="1"){
                //保存cookie
                location.href="index.html";
            }
            else{
//                  $("#errorMsg").html("用户名或者密码错误");
//                  $("#errorMsg").show();
				alert("用户名或者密码错误");
            }
        }
	});
}

