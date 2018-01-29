$(function(){
	$("#s11").click(function(){
		$('.l_nr').css({"display":"block"});
		$('.l_nr2').css({"display":"none"});
	});
	$("#s12").click(function(){
		$('.l_nr2').css({"display":"block"});
		$('.l_nr').css({"display":"none"});
	});
	$("#btnlogin").click(function(){
		login();
	});
	
	
	
	$("#phoneId").keyup(function(){
		var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;
		var phone = this.value;
		if(!regPhone.test(phone)){
			$(".userMsg").css({"color":"red"});
			$(".userMsg").html("请输入11位手机号码");
		}else{
			$(".userMsg").css({"color":"green"});
			$(".userMsg").html("手机号码输入合法") ;
		}
	});
	
	$("#dxyzmId").keyup(function(){
		var regPhone = /^[0-9]\d{3}$/;
		var phone = this.value;
		if(!regPhone.test(phone)){
			$(".userMsg2").css({"color":"red"});
			$(".userMsg2").html("请输入4位短信验证码");
		}else{
			$(".userMsg2").css({"color":"green"});
			$(".userMsg2").html("验证码输入合法") ;
		}
	});
	
	$("#username").keyup(function(){
		var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;
		var phone = this.value;
		if(!regPhone.test(phone)){
			$(".userMsg3").css({"color":"red"});
			$(".userMsg3").html("请输入11位手机号码");
		}else{
			$(".userMsg3").css({"color":"green"});
			$(".userMsg3").html("手机号码输入合法") ;
		}
	});
	
	$("#userpass").keyup(function(){
		var regPhone = /^[a-zA-Z_0-9]\w{5,19}$/;
		var phone = this.value;
		if(!regPhone.test(phone)){
			$(".userMsg4").css({"color":"red"});
			$(".userMsg4").html("请输入您的密码,您的密码可能为字母、数字或符号组合");
		}else{
			$(".userMsg4").css({"color":"green"});
			$(".userMsg4").html("密码输入合法") ;
		}
	});
	
	var arr=['a','b','c'];
	var oBtn=$("#btn");
	oBtn.click(function(){
		var iNum=parseInt(Math.random()*10000)
		while(iNum<1000){
			iNum=parseInt(Math.random()*10000)
			}
		oBtn.val()=iNum;
	});
	$("#Code").keyup(function(){
		var CodeS=$("#Code").val();
		if(CodeS!=(oBtn.val())){
			$(".userMsg5").css({"color":"red"});
			$(".userMsg5").html("验证码输入不正确，请重新输入");
		}else{
			$(".userMsg5").css({"color":"green"});
			$(".userMsg5").html("验证码输入正确");
		}
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