"use strict";
var auth = auth || {};  // 있으면 가져오고 없으면 새로 널(빈땅)객체로 새로 만들어라.
auth = (()=>{
	let _,js,css,img,auth_vue_js,brd_js,router_js,cookie_js;
	
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		auth_vue_js = js + '/vue/auth_vue.js'
		brd_js = js+'/brd/brd.js'
		router_js = js + '/cmm/router.js'
		cookie_js = js + '/cmm/cookie.js'
		
	}
    let onCreate =()=>{
        init()
        $.when(
        		$.getScript(auth_vue_js),
        		$.getScript(router_js),
        		$.getScript(brd_js),
        		$.getScript(cookie_js)
        ).done(()=>{
        	setContentView()
        	$('a_go_join').click(e=>{
        		 e.preventDefault()
        		 $('head').html(auth_vue.join_head())
         		 $('body').html(auth_vue.join_body())
         		 $('#userid').keyup(()=>{
         			if($('#userid').val().length>2){
 	        			$.ajax({
 	        				url : _+'/customers/'+$('#userid').val()+'/exist', 
 	        				contentType : 'application/json',
 	        				success : d =>{
 	        					alert("ajax d 진입"+d.msg)
 	        					if (d.msg==='SUCCESS') {
 	        						$('#dupl_check')
 	        						.val("사용가능한 아이디 입니다.")
 	        						.css('color','blue')
// 	        						return true;
 	        					}else{
 	        						$('#dupl_check')
 	        						.val("이미 있는 아이디 입니다.")
 	        						.css('color','red')
// 	        						alert('있는 아이디 입니다.');	
// 	        					return false;
 	        					}
 	        				},
 	        				error : e =>{
 	        					alert('error' )
 	        					return false;
 	        				}
 	        			})
         			}
         		});
         		$('<button>',{
         			text : 'Continue to checkout', // text에 값이 있으면 set 방식 , 빈칸으로 하면
 											// get방식
         			href : '#',
         			click: e=>{
         				e.preventDefault(); // 이게 form 태그를 막는거? form 태그 방식으로 하려면 홈컨트롤러에서
 									// soap 방식으로 해야함. ajax 는 soap 방식 안됨!! herf 도
 									// 삭제..
 						// e 는 이벤트 디폴트 방식을 방지한다...
 						let data = {cid:$('#userid').val(), pwd:$('#password').val(),pname:$('#pname').val()} 
 						// 제이슨 타입으로 보내야 하니깐.. 제이슨이 들어가야함!! 중요한건 자바 받는녀석과 맞춰야함!
 		//				if(existId(data.cid)==='true')
 		//					alert(existId(data.cid))
 						join(data)
 			} 
         })
 		.addClass("btn btn-primary btn-lg btn-block")
 		.appendTo('#btn_join') 
        })     		 
        }).fail(()=>{alert(WHEN_ERR)})
    }
//	let existId = x =>{
//
//		$.ajax({
//			url : _+'/customers/'+x+'/exist', 
//			type : 'GET',
//			contentType : 'application/json',
//			success : d =>{
//				if (d.msg==='SUCCESS') {
//					alert('없는 아이디 입니다 ' + d.msg);
//					return true;
//				}else{
//					alert('있는 아이디 입니다.');	
//				return false;
//				}
//			},
//			error : e =>{
//				alert('error' )
//				return false;
//			}
//		})    
//		
//	}
	
    let setContentView =()=>{
       	$('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
    	 login();
    }
	

	let join =data=>{

				$.ajax({
					url : _+'/customers/',
					type : 'POST',       // 일단은 그냥 빠르게 보이게... 원래는 숨겨야 해서 POST
											// 방식이어야함! 타입은 4개 crud, put get
											// delete
					dataType : 'json',  // 자바스크립트의 객체를 던진다?
					data : JSON.stringify(data), // ify ~화 하다. 제이슨 던지는데 스트링화
													// 해라! 받는입장(컨트롤러)와 맞춘다!
													// 컨트롤러에서 스트링으로 받는다고 해놔서
													// 스트링화.
					contentType : 'application/json',   //밈? jsp 에서도 contentType="text/html; 이라고 있
					success : d =>{
						alert('AJAX 성공 ' + d.msg)
						if (d.msg==='SUCCESS') 
							login()
					},
					error : e =>{
						alert('AJAX실패' )
					}
				})    
	}
	let login =()=>{
//
//	    $('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
//	    $('body').addClass('text-center')
//	      .html(auth_vue.login_body({css: $.css(), img: $.img()}))
	        $('<button>',{
	        	text : "Sign in",
	        	click : e => {
	        		e.preventDefault()
	        		$.ajax({
	        			url: _+'/customers/login',
	        			type: 'POST',
	        			data: JSON.stringify({cid:$('#cid').val(),pwd:$('#pwd').val()}),
	        			dataType: 'json',
	        			contentType: 'application/json',
	        			success: d =>{  //d가 곧 customer(ctrl의 login param )
	        				setCookie("cid",d.cid);
							alert('저장된 쿠키:'+getCookie("cid"))
							brd.onCreate()
//   	        					sessionStorage.setItem('cid',d.cid);
//    	        					$.extend(new Customer(d))				
	        			},
	        			error: e =>{
	        				alert('AJAX 실패 ')
	        			}
	        			
	        		})
	        	}
	        })
	        .addClass("btn btn-lg btn-primary btn-block")
	        .appendTo('#btn_login')
	}
	let mypage =d=>{
		let x = {css : $.css(), img : $.img(), js:$.js(), resultData: d}
			$('head').html(auth_vue.brd_head(x))
			$('body')
			.addClass('text-center')
			.html(auth_vue.brd_body(x))
	}
	return{onCreate, join, login}
})();