"use strict"
var brd = brd || {};
brd = (()=>{
	let _,js,brd_vuejs,brd_js, $cid, $form , router_js
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		brd_js = js+'/brd/brd.js';
		brd_vuejs = js+'/vue/brd_vue.js';
		router_js= js+'cmm/router.js'
		$cid = $.cid()
		
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
			recent_updates()
	}
	let recent_updates=()=>{                        //x가 d.count
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
		$('#recent_updates .d-block').remove()
		$.getJSON(_+'/articles/',d=>{
			alert('성공')
			$.each(d,(i,j)=>{
				$( '<div class="media text-muted pt-3">'+
						'<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
						'          <p id="id_'+i+'"class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
						'          </p></div>').appendTo('#recent_updates')
				$('<strong class="d-block text-gray-dark">@<a>'+j.cid+'</a></strong>')
				.appendTo("#id_"+i)
				.click(()=>{
					alert('id클릭')	
				})
				$('<a>'+j.title+'</a>')
				.appendTo("#id_"+i)
				.click(()=>{
					alert('제목클릭')
					detail(j)
				})
//				
//				res += '<div class="media text-muted pt-3">'+
//				'<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
//				'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
//				'            <strong class="d-block text-gray-dark">@</strong>'+
//				'          </p>'+
//				'        </div>'
			})
			//i가 인덱스 j 가 벨류인데 이게 아티클! ui 가 들어가야함
//				for(let i=0;i<d.count;i++){res += ui}
//			$('<a>',{
//				text:j.title
//			}).appendTo('div.media p')
//			.click(()=>{
//				alert('제목클릭')
//			})
//			$('<a>',{
//				text:j.cid
//			}).appendTo('div.media p strong')
//			.click(()=>{
//				alert('아이디클릭')
//			})
//			$('#recent_updates').append(res)
		})  
	}
	
	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write())
		alert('사용자 아이디'+$cid)
		$('#write_form input[name="writer"]').val($cid)
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
			$.ajax({		//ajax 는 무조건 리턴이 있어야함!! 파라미터가 있는 녀석과 없는 녀석, 람다함수는 fuction. supply
				url:_+'/articles/',
				type:'POST',
				data:JSON.stringify(json),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					
					$('#recent_updates div.container-fluid').remove()
					recent_updates()
					
//					$.getScript(brd_vuejs).done(()=>{
//                        $('#recent_updates').html('<h1>목록 불러오기</h1>')
//                    })
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
	let detail = x =>{
		alert('dd')
		$('#recent_updates').html(brd_vue.brd_write())
		$('#recent_updates div.container-fluid h1').html("아티클 디테일")
		$('#write_form input[name="writer"]').val(x.cid)
		$('#write_form input[name="title"]').val(x.title)
		$('#write_form input[name="content"]').val(x.content)
		$('#suggestions').remove()
		$('<input>',{
			style:'float:right;width:100px;margin-right:10px',
			value:'삭제'	
		})
		.addClass('btn btn-primary')
		.appendTo('#write_form')
		.click(()=>{
			alert('넘어오는값?'+x.articleseq)
			$ajax({
				url:_+'articles/'+x.articleseq,
				type:'DELETE',
				data:JSON.stringify(x),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('삭제 성공')
					recent_updates()
				},
				error:d=>{
					alert('ajax 실패')
				}
			})
			
		})
		$('<input>',{
			style:'float:right;width:100px;margin-right:10px',
			type:'submit',
			value:'수정'	
		})
		.addClass('btn btn-danger')
		.appendTo('#write_form')
		.click(()=>{			
		})
	}
	
	return {onCreate}
		
})();
	