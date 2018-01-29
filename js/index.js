$(function(){
	//注册既得新人专享288元购物红包
	$("#shopBags").click(function(){
		$("#shopBag").css({"display":"none"});
	})
	//顶部上面 所有a的效果	
	$(".header_topz a").mouseenter(function(){
		$(this).css({"color":"#c4193f","text-decoration":"underline"});
	});
	$(".header_topz a").mouseleave(function(){
		$(this).css({"color":"#8c8c8c","text-decoration":"none"});
	});
	//合作招商
	$(".rightA").mouseenter(function(){
		$("#rightA1").css({"background-color":"#fff","border-color":"#ccc"});
		$("#h_t_r_div1").css({"display":"block"});
	});
	$(".rightA").mouseleave(function(){
		$("#rightA1").css({"background-color":"#fbfbfb","border-color":"#fbfbfb"});
		$("#h_t_r_div1").css({"display":"none"});
	});
	//客服中心
	$(".rightA2").mouseenter(function(){
		$("#rightA21").css({"background-color":"#fff","border-color":"#ccc"});
		$("#h_t_r_div2").css({"display":"block"});
	});
	$(".rightA2").mouseleave(function(){
		$("#rightA21").css({"background-color":"#fbfbfb","border-color":"#fbfbfb"});
		$("#h_t_r_div2").css({"display":"none"});
	});
	//顶部搜索框a的效果
	$(".h_c_ssk_nr a").mouseenter(function(){
		$(this).css({"color":"#94193f"});
	});
	$(".h_c_ssk_nr a").mouseleave(function(){
		$(this).css({"color":"#8c8c8c"});
	});
	//顶部导航条a的效果
	$(".header_bottomz a").mouseenter(function(){
		$(this).css({"color":"#94193f"});
		$(".z_a1").css({"color":"#fff"});
		$(".z_a2").css({"color":"#94193f"});
	});
	$(".header_bottomz a").mouseleave(function(){
		$(this).css({"color":"#303030"});
		$(".z_a1").css({"color":"#fff"});
		$(".z_a2").css({"color":"#94193f"});
	});
	//轮播图右拉菜单
	$(".slideshow_01").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(1)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div1").css({"display":"block"});
	});
	$(".slideshow_01").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(1)").css({"background":"#fff"});
		$("#s_m_n_div1").css({"display":"none"});
	});
	$(".slideshow_02").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(2)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div2").css({"display":"block"});
	});
	$(".slideshow_02").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(2)").css({"background":"#fff"});
		$("#s_m_n_div2").css({"display":"none"});
	});
	$(".slideshow_03").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(3)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div3").css({"display":"block"});
	});
	$(".slideshow_03").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(3)").css({"background":"#fff"});
		$("#s_m_n_div3").css({"display":"none"});
	});
	$(".slideshow_04").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(4)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div4").css({"display":"block"});
	});
	$(".slideshow_04").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(4)").css({"background":"#fff"});
		$("#s_m_n_div4").css({"display":"none"});
	});
	$(".slideshow_05").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(5)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div5").css({"display":"block"});
	});
	$(".slideshow_05").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(5)").css({"background":"#fff"});
		$("#s_m_n_div5").css({"display":"none"});
	});
	$(".slideshow_06").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(6)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div6").css({"display":"block"});
	});
	$(".slideshow_06").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(6)").css({"background":"#fff"});
		$("#s_m_n_div6").css({"display":"none"});
	});
	$(".slideshow_07").mouseenter(function(){
		$(".slideshow_menu li:nth-of-type(7)").css({"background":"DeepSkyBlue"});
		$("#s_m_n_div7").css({"display":"block"});
	});
	$(".slideshow_07").mouseleave(function(){
		$(".slideshow_menu li:nth-of-type(7)").css({"background":"#fff"});
		$("#s_m_n_div7").css({"display":"none"});
	});
	//HOT
	setInterval(function(){
		$("#hot").ready(function(){
  			$("#hot").animate({top: '+3px'},600);
		});
		$("#hot").ready(function(){
  			$("#hot").animate({top: '-3px'},600);
		});	
	},3000);

	
	
	//今日直播 昨日疯抢    新品推荐
	$(".tshop li").hover(
		function(){
			$(this).css({"border-color":"#c4193f","transition": "all 0.3s ease-in 0s","text-decoration":"underline"});
		},
		function(){
			$(this).css({"border-color":"#fff","transition": "all 0s ease-in 0s","text-decoration":"none"});
		}
	);
	
	$(".jkPhoto li").hover(
		function(){
			$(this).css({"border-color":"#c4193f","transition": "all 0.3s ease-in 0s","text-decoration":"underline"});
			$(".jkPhoto li:nth-of-type(1)").css({"border-color":"#fff"});
		},
		function(){
			$(this).css({"border-color":"#fff","transition": "all 0s ease-in 0s","text-decoration":"none"});
		}
	);
	
	$(".title2_uls a").hover(
		function(){
			$(this).css({"border-color":"#c4193f","transition": "all 0.3s ease-in 0s"});
		},
		function(){
			$(this).css({"border-color":"#fbfbfb","transition": "all 0s ease-in 0s"});
		}
	);
	
	$(".title5 a").hover(
		function(){
			$(this).css({"border-color":"#c4193f","transition": "all 0.3s ease-in 0s"});
		},
		function(){
			$(this).css({"border-color":"#fbfbfb","transition": "all 0s ease-in 0s"});
		}
	);
	
	//右侧导航
	$(".nR_c_t_zh").mouseenter(function(){
		$(".zh_dl").css({"display":"block"});
	});
	$(".nR_c_t_zh").mouseleave(function(){
		$(".zh_dl").css({"display":"none"});
	});
	
	$(".n_c_b_div1").mouseenter(function(){
		$(".d_d").css({"display":"block"});
	});
	$(".n_c_b_div1").mouseleave(function(){
		$(".d_d").css({"display":"none"});
	});
	
	$(".n_c_b_div2").mouseenter(function(){
		$(".d2_d2").css({"display":"block"});
	});
	$(".n_c_b_div2").mouseleave(function(){
		$(".d2_d2").css({"display":"none"});
	});
	
	$(".d2_d2 a").mouseenter(function(){
		$(this).css({"color":"#c4193f","text-decoration":"underline"});
	});
	$(".d2_d2 a").mouseleave(function(){
		$(this).css({"color":"#8c8c8c","text-decoration":"none"});
	});
	
	$(".ared").mouseenter(function(){
		$(this).css({"background-color":"#94193f"});
	});
	$(".ared").mouseleave(function(){
		$(this).css({"background-color":"#444851"});
	});
	
	$(".n_c_b_div3").click(function(){
		$('body,html').animate({scrollTop:0},1000);
	});

	//左侧导航
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log($(".xs").offset().top);
		if(top>=$(".jz").offset().top){
			$(".h_ssk").css({"display":"block"});
		}else if(top<=$(".jz").offset().top){
			$(".h_ssk").css({"display":"none"});
		}
		if(top>=$(".xs").offset().top){
			$(".navLeft").show();
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "-40px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#c4193f","color":"#fff"});
			
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
		}
		if(top>=$(".xptj").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "-40px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jxhd").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "-40px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".spjk").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "-40px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk1").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "-40px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk2").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "-40px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk3").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "-40px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk4").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "-40px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk5").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "0px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "-40px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top>=$(".jk6").offset().top){
			$(".navLeft li:nth-of-type(1) span").css({"background-position": "0px 0px"});
			$(".navLeft li:nth-of-type(1) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(2) span").css({"background-position": "0px -43px"});
			$(".navLeft li:nth-of-type(2) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(3) span").css({"background-position": "0px -450px"});
			$(".navLeft li:nth-of-type(3) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(4) span").css({"background-position": "0px -166px"});
			$(".navLeft li:nth-of-type(4) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(5) span").css({"background-position": "0px -421px"});
			$(".navLeft li:nth-of-type(5) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(6) span").css({"background-position": "0px -128px"});
			$(".navLeft li:nth-of-type(6) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(7) span").css({"background-position": "0px -211px"});
			$(".navLeft li:nth-of-type(7) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(8) span").css({"background-position": "0px -253px"});
			$(".navLeft li:nth-of-type(8) a").css({"background-color": "#fff","color":"#434343"});
			$(".navLeft li:nth-of-type(9) span").css({"background-position": "0px -336px"});
			$(".navLeft li:nth-of-type(9) a").css({"background-color": "#fff","color":"#434343"});
			
			$(".navLeft li:nth-of-type(10) span").css({"background-position": "-40px -376px"});
			$(".navLeft li:nth-of-type(10) a").css({"background-color": "#c4193f","color":"#fff"});
		}
		if(top+40<=$(".xs").offset().top){
        	$(".navLeft").css({"display":"none"});
        }
		
	});
});

//轮播图
var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function  initUI() {
    $("#box li:first").css({"backgroundColor":"#94193f"});
}

function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });

    $("#box").mouseleave(function () {
        autoPlay();
    });

    $("#box li").click(function () {
        goImg($("#box li").index(this));
    });

    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });

    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}

//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},2000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},2000);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#94193f"}).siblings().css({"backgroundColor":"#fff"});
    },3000);
}

//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},2000);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},2000);
    //2、改变豆豆的颜色；
    $("#box li").eq(ord).css({"backgroundColor":"#94193f"}).siblings().css({"backgroundColor":"#fff"});
}


$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});