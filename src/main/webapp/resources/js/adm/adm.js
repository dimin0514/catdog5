var adm = adm || {}
adm = (()=>{
	let _, js, css, img, navi_js, navi_vue_js, brd_vue_js
	let init=()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		navi_js = js+'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		brd_vue_js = js+'/brd/brd_vue.js'
	}
	let onCreate = () => {
		alert('환영합니다')
		init()
		$.when(
				$.getScript(navi_js),
				$.getScript(navi_vue_js)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	
	}
	let setContentView = () => {
		$('body').empty()
		$(navi_vue.nav())
		.appendTo('body')
		$('<table id="tab"><tr></tr></table>')
		.css({border: '1px solid #ddd', width: '80%', height: '80%', margin: '0 auto'})
		.appendTo('body')
//		let arr1 = [{a:'left',b:'20%'},{a:'right',b:'80%'}]
		$.each([{a:'left',b:'20%'},{a:'right',b:'80%'}],
				(i,j)=>{
			$('<td id="'+j.a+'"></td>')
			.css({border: '1px solid #ddd', width: j.b, 'vertical-align': 'top'})
			.appendTo('#tab tr')
		})
//		let arr = ['고객관리','상품등록','상품조회','상품관리','상품삭제']  //제이슨!!!
		$.each([
			{text:'맵크롤링',name:'web_crawl'},
			{text:'상품등록',name:'Item_reg'},
			{text:'상품조회',name:'Item_srch'},
			{text:'상품수정',name:'Item_mod'},
			{text:'상품삭제',name:'Item_del'}],
			(i,j)=>{			
			$('<div name="'+j.name+'">'+j.text+'</div>')
			.css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
			.appendTo('#left')
			.hover(function(){
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				let that = $(this).attr('name')
//				alert(that+'that/메뉴클릭'+j.name)
				switch($(this).attr('name')){
				case'web_crawl' : 
					webCrawl()
					break;
				case'Item_reg' : 
					break;
				case'Item_srch' : 
					break;
				case'Item_mod' : 
					break;
				case'Item_del' : 
					break;
				}
			})
		})
//		$('#left div').css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
//		$('#left').css({border: '1px solid #ddd', width: '20%', 'vertical-align': 'top'})
//		.append('<div id = "custManager">'+arr[0]+'</div>')
//		.append('<div></div>')
//		.append('<div></div>')
//		.append('<div></div>')
//		.append('<div></div>')
//		$('#custManager')
//		.click(()=>{
//			custManager()
//		})
//		$('#left div').css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
//		
		

	}
	let webCrawl = ()=>{
//		$('<div id="select"><select  name="cars" size="4" multiple></select></div>')
//				.appendTo('#right')
//			let arr = [{a1:'a1',a2:'a2'},{b1:'b1',a2:'b2'},{c1:'c1',c2:'c2'},{d1:'d1',d2:'d2'}]
//			$.each(arr,(i,j)=>{
//				$('<option value="'+j.a1+'">'+j.a2+'</option>')
//			}).appendTo('#select select')
//			$('<input type="submit">').appendTo('#select')
//			$('<input type="text">').appendTo('#select')
		
		$('#right').empty()
		$('</br></br></br></br></br><h2>Web Crawling</h2></br></br></br></br></br></br></br>'+
				'<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
				'  <select name="site" size="1" multiple>'+
				'  </select>'+
		          '<input class="form-control mr-sm-2" type="text" placeholder="insert URL for crawling" aria-label="Search">'+
//		          '<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>'+
				'</form>')
		.appendTo('#right')
		$('#crawl_form input[class="form-control mr-sm-2"]')
		.css({width:'80%'})
		$.each([{sub:'naver.com'},{sub:'daum.net'},{sub:'google.co.kr'},{sub:'youtube.com'}],(i,j)=>{
			$('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
		})
		$('<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')	
		.appendTo('#crawl_form')
		.click(e=>{
			e.preventDefault() //tx/crawling/google/spring
			//겟제이슨 이미 존재하는 데이터 그 주소를 가져와 버리는거!!. db 즉 sql문도 이미 실행이 되있는것. 그것도 가져올 수 있다. 쿼리문 던지는 그런 개념이 아님.
			//이미 매퍼의 sql 문은 다 실행이 되어 답이 있는상태.
			$.getJSON(_+'/tx/crawling/'+$('form#crawl_form select[name="site"]').val()
					+'/'+$('form#crawl_form input[type="text"]').val(),d=>{
				alert(d.text)
			})
		})
//		$.ajax({
//			url:_+'/tx/tt',
//			type:'POST',
//			data:JSON.stringify({url:'www.google.co.kr'}),
//			dataType:'json',
//			contentType:'application/json',
//			success:d=>{
//				alert('보내기 성공')
//			},
//			error:e=>{
//				alert('보내기 실패')
//			}
//		})
	
	}
	return {onCreate}
})()