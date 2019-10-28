"use strict"
var brd = brd || {};
brd = (()=>{
	let _,js,brd_vuejs,brd_js, $cusId, $form 
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		brd_js = js+'/brd/brd.js';
		brd_vuejs = js+'/vue/brd_vue.js';
		$cusId = $.cusId()
		$form = 'form'
		
	}
	let onCreate=()=>{                 //동적인거 여기에다 다 넣음?
		init()
		$.getScript(brd_vuejs,()=>{
		setContentView()
		navigation()
//		$('<a>',{
//			href:'#',
//			click:e=>{
//				e.preventDefault();
//				write()
//			},
//			text:'글쓰기'
//		})
//		.css('color','white')
//		.addClass('nav-link')
//		.appendTo('#go_write')	
		})
		
	}
	let setContentView=()=>{
		
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
			$('body').addClass('text-center').html(brd_vue.brd_body({css: $.css(), img: $.img()}))
			$('#recent_updates .media').remove()
			$('#recent_updates .d-block').remove()
			$('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
		
	}
	
	/*	+' <input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
	+'<input name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'*/
	
	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write())
		alert('사용자 아이디'+$cusId)
		$('#write_form input[name="writer"]').val($cusId)
		$('#suggestions').remove()
//		$('<a>',{
//			href:'#',
//			click:e=>{
//				e.preventDefault();
//			
//			},
//			text:'리셋'
//		})
//		.css('float:right','width:100px','margin-right:10px')
//		.addClass('btn btn-danger')
//		.appendTo('#reset_btn')
//		$('<a>',{
//			href:'#',
//			click:e=>{
//				e.preventDefault();
//			
//			},
//			text:'전송'
//		})
//		.css('float:right','width:100px','margin-right:10px')
//		.addClass('btn btn-primary')
//		.appendTo('#write_btn')
		$('<input>',{
			style:'float:right;width:100px;margin-right:10px',
			value:'전송'	
		})
		.addClass('btn btn-primary')
		.appendTo('#write_form')
		.click(e=>{
			e.preventDefault();
			let json = {
					cid:$('#write_form input[name="writer"]').val(),
					title:$('#write_form input[name="title"]').val(),
					content:$('#write_form textarea').val()
			}
			alert('id'+json.cid+'글제목'+json.title+'글내용'+json.content)
//			console.log('글제목'+josn.title)
//			console.log('글내용'+josn.content)
			$.ajax({
				url:_+'/articles/',
				type:'POST',
				data:JSON.stringify(json),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('ajax 성공')
					$.getScript(brd_vuejs).done(()=>{
                        $('#recent_updates').html('<h1>목록 불러오기</h1>')
                    })
				},
				error:d=>{
					alert('ajax 실패')
				}
			})
			
		})
		$('<input>',{
			style:'float:right;width:100px;margin-right:10px',
			type:'submit',
			value:'취소'	
		})
		.addClass('btn btn-danger')
		.appendTo('#write_form')
		.click(()=>{
			
		})
		
		

	}
	let navigation=()=>{
		$('<a>',{
			href:'#',
			click:e=>{
				e.preventDefault();
				write()
			},
			text:'글쓰기'
		})
		.css('color','white')
		.addClass('nav-link')
		.appendTo('#go_write')	
	}
	return {onCreate}
		
})();
	