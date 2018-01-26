function g_list(){

	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		success:function(data){
//			alert(data);
			showdata(data);
		},
		dataType:"json"
	});
}

function showdata(datas){

	
	for(let i=0;i<datas.length;i++){
		let $liDom=$("<li></li>");
		$(".s_t2 ul").append($liDom);
			let $t2_d1Dom=$("<div class='t2_d1'></div>");
			$liDom.append($t2_d1Dom);
				$t2_d1Dom.append("<img src='"+datas[i].beiyong1+"'/>");
				
			let $t2_d2Dom=$("<div class='t2_d2'></div>");
			$liDom.append($t2_d2Dom);
				$t2_d2Dom.append("<div><a href='#'><img src='"+datas[i].goodsImg+"'/></a></div>");
				$t2_d2Dom.append("<div><p><span>"+datas[i].goodsPrice+"</span><span>"+datas[i].beiyong2+"</span></p><p><a href='#'><span>"+datas[i].goodsDesc+"</span>"+datas[i].beiyong3+"</a></p></div>");	
	}
}

$(function(){
	g_list();
});

//<li>
//	<div class="t2_d1">
//		<img src="imgs/goodslist_p.png"/>
//	</div>
//	<div class="t2_d2">
//		<div>
//			<a href="">
//				<img src="imgs/goodslist1.jpg"/>
//			</a>
//		</div>
//		<div>
//			<p>
//				<span>¥299.00</span>
//				<span>¥399.00</span>
//			</p>
//			<p>
//				<a href="#">
//					<span>京城之霜</span>深层滋润紧致光泽凝冻超值组*2瓶
//				</a>
//			</p>
//		</div>
//	</div>
//</li>