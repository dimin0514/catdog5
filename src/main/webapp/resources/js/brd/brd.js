"use strict"
//sessionStorage.getItem('ctx')
//sessionStorage.getItem('js')
//var _ = sessionStorage.getItem('ctx',web);
//var js = sessionStorage.getItem('js',_ + '/resources/js')
var brd = brd || {};
brd = (()=>{
	let _,js,brd_vuejs, brd_js , navi_js, navi_vue_js, page_vue_js , compo_vue_js

	let init=()=>{
		_ = sessionStorage.getItem('ctx')
		js = $.js()
		brd_js = js+'/brd/brd.js'
		brd_vuejs = js+'/vue/brd_vue.js'
		navi_js = js+'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		page_vue_js = js+'/vue/page_vue.js'
		compo_vue_js = js + '/vue/compo_vue.js/'
		alert('page_vue'+page_vue)
	}
	let onCreate=()=>{                 //동적인거 여기에다 다 넣음?
		init()
		$.when(
				$.getScript(brd_vuejs),
				$.getScript(navi_js),
				$.getScript(navi_vue_js),
				$.getScript(page_vue_js),
				$.getScript(compo_vue_js)
				).done(()=>{
					setContentView()
					navi.onCreate()
				}).fail(()=>{
					alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
			$('body').addClass('text-center').html(brd_vue.brd_body({css: $.css(), img: $.img()}))

			$(navi_vue.nav()).appendTo('#navi')
			recent_updates({page:'1',size:'5'})
			
	}
	let recent_updates=x=>{                        //x가 d.count
		alert('호출된 페이지번호:'+x)
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
		$('#recent_updates .d-block').remove()
		$.getJSON(_+'/articles/page/'+x.page+'/size/'+x.size,d=>{
			alert('길이'+Object.keys(d).length)
			$.each(d.articles,(i,j)=>{
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
			$(page_vue.pagination()).appendTo('#recent_updates')
			
			
			
			
//			$('#crawl_form input[class="form-control mr-sm-2"]')
//			.css({width:'80%'})
//			$.each([{sub:'naver.com'},{sub:'daum.net'},{sub:'google.co.kr'},{sub:'youtube.com'}],(i,j)=>{
//			$('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#recent_updates')
//			})
//			$('#pNum').html(compo_vue.pageSize())
//			$(compo_vue.pageSize()).appendTo('#recent_updates')
//			$(compo_vue.pageSiez2()).appendTo('#recent_updates')
		
			
			$('#paginagtion').empty()
			$('#recent_updates div.container h2').remove() 
			$('<form id="paging_form" class="form-inline my-2 my-lg-0" style="float: right">'+
				'  <select name="site" size="1">'+
				'  </select>'+
				'</form>').prependTo('#recent_updates div.container')
			$('#paging_form input[class="form-control mr-sm-2"]').css({width:'80%'})
			
			$.each([{sub:'5개보기'},{sub:'10개보기'},{sub:'15개보기'},{sub:'20개 보기'}],(i,j)=>{
				$('<option value='+j.sub+'>'+j.sub+'</option>')
				.appendTo('#paging_form select')
			})

			
			
			
			
			
			
			
//			let t =''
//			let i = 0
//			for(;i<(d.length)/10;i++){
//				t += '<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a>'
//			}
//			$(t).appendTo('#paginagtion')
			
			$.each(d.pages,(i,j)=>{
				$('<li class="page-item"><a class="page-link" href="#">'+j+'</a></li>').appendTo('#paginagtion')
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
//		alert('사용자 아이디'+cid)
		$('#write_form input[name="writer"]').val(getCookie("cid"))
		$('#suggestions').remove()
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
			alert('-?'+_)
			$.ajax({		//ajax 는 무조건 리턴이 있어야함!! 파라미터가 있는 녀석과 없는 녀석, 람다함수는 fuction. supply
				url: sessionStorage.getItem('ctx')+'/articles/',
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
	
	let detail = x =>{
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
		.click(e=>{
				e.preventDefault()
				$.ajax({
				url : _+'/articles/'+x.articleseq,
				type : 'DELETE',
				dataType : 'json',
				data : JSON.stringify(x),
				contentType:'application/json',
				success:d=>{
					alert('삭제 성공')
				    write()
					$('#recent_updates div.container-fluid').remove()
					recent_updates()
				},
				error:d=>{
					alert('ajax 삭제 실패')
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
		.click(e=>{		
			e.preventDefault()
	 		alert('수정 시작')
	 		let json = { 
				articleseq :  $('#write_form input[name="brdseq"]').val() ,
				content : $('#write_form textarea[name="content"]').val()
			}     	
			$.ajax({
				url : _+'/articles/'+x.articleseq,
				type : 'PUT',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify({
					articleseq : x.articleseq,
				    cid :$('#write_form input[name="writer"]').val() ,
					title : $('#write_form input[name="title"]').val(),
					content :$('#write_form textarea[name="content"]').val() 
				}),
//				url : _+'/articles/'+x.articleseq, 
//				type : 'PUT',
//				dataType : 'json',
//				data: JSON.stringify(json) , 
//				contentType : 'application/json',
				success : d =>{
					alert('수정성공');
					write()
					$('#recent_updates div.container-fluid').remove()
					recent_updates()
				},
				error : e =>{
					alert('게시수정성공 실패');
				}
			})      	
		})
	}
	
	return {onCreate,write}  //나가는게 public !! 다른곳에서 끌고올때 퍼블릭 상태로 해줘야함!
		
})();