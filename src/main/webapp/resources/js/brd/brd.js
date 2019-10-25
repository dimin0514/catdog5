"use strict"
var brd = brd || {};
brd = (()=>{
	let _,js,brd_vuejs,brd_js; 
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		brd_js = js+'/brd/brd.js';
		brd_vuejs = js+'/vue/brd_vue.js';
		
	}
	let onCreate=()=>{                 //동적인거 여기에다 다 넣음?
		init()
		$.getScript(brd_vuejs,()=>{
		setContentView()
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
		})
//		$('<input>',{
//			type:'text',
//			placeholder='작성자 이름',
//			name='writer'			
//		})
//		.addClass('form-control')
//		.appendTo('#scid')	
		
	}
	let setContentView=()=>{
		
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
			$('body').addClass('text-center').html(brd_vue.brd_body({css: $.css(), img: $.img()}))
			$('#recent_updates .media').remove()
			$('#recent_updates .d-block').remove()
			$('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
					
			
		
	}
	let write=()=>{
		alert("글쓰기를 클릭")
		$('#recent_updates').html(brd_vue.brd_write())
		$('#suggestions').remove()

	}
	return {onCreate}
		
})();
	