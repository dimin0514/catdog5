"use strict";
var auth = auth || {};  // 있으면 가져오고 없으면 새로 널(빈땅)객체로 새로 만들어라.
auth = (()=>{
	let _,js,auth_vue_js;
	
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		auth_vue_js = js+'/vue/auth_vue.js'
		
	}
//	let onCreate =()=>{
//		init();
//		$('#a_go_join').click(e=>{
//			setContentView()
//			e.preventDefault();
//			$('<a>',{
//				text:'추가된 a 태그2',
//				href: '#',
//				click: ()=>{
//					alert('고스트가 클릭!!')
//				}
//			})
//			.appendTo('#test')
//			$('#join_btn').click(()=>{
//				alert('회원가입')
//
//			})
//			
//		});		
//	}
    let onCreate =()=>{
        init()
        $.getScript(auth_vue_js).done(()=>{
        	setContentView()					// 경로따가라면 이게 첫 페이지임!!
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
         				$.getScript(auth_vue_js)
		$('head').html(auth_vue.join_head())
        $('body').html(auth_vue.join_body())
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
				if(existId(data.cid)==='true')
					alert(existId(data.cid))
					join(data)
			} 
        })
		.addClass("btn btn-primary btn-lg btn-block")
		.appendTo('#btn_join')  
    		})
        }).fail(()=>{alert(WHEN_ERR)})
    }
	let existId = x =>{

		$.ajax({
			url : _+'/customers/'+x+'/exist', 
			type : 'GET',
			contentType : 'application/json',
			success : d =>{
				if (d.msg==='SUCCESS') {
					alert('없는 아이디 입니다 ' + d.msg);
					return true;
				}else{
					alert('있는 아이디 입니다.');	
				return false;
				}
			},
			error : e =>{
				alert('error' )
				return false;
			}
		})    
		
	}
	
    let setContentView =()=>{
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
	    let x = {css: $.css(), img: $.img()}
	    $('head').html(auth_vue.login_head(x))
	    $('body').addClass('text-center')
	      .html(auth_vue.login_body(x))
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
	        			success: d =>{
	        				alert(d.pname+' 님 환영합니다')
	        				mypage(d)
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

