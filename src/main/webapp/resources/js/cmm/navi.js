"use strict"
var navi = navi || {}
navi = (()=>{
	let _,js,brd_vuejs, brd_js, navi_vuejs, auth_js, app_js
	let init=()=>{
		_ = $.ctx()
		js = $.js()
		app_js = js+'app.js'
		brd_js = js+'/brd/brd.js'
		brd_vuejs = js+'/vue/brd_vue.js'
		navi_vuejs = js+'/vue/navi_vue.js'
		auth_js = js+'/cmm/auth.js'

	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(auth_js),
			$.getScript(brd_js)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=> {
		$('<a>',{
        	href : '#',
	        text : '글쓰기'
        })
        .addClass('nav-link')
        .appendTo('#menu_write')
        .click(e=>{
        	e.preventDefault()
        	brd.write()

        })
        $('<a>',{
        	href : '#',
	        text : '로그아웃'
        })
        .addClass('nav-link')
        .appendTo('#menu_logout')
        .click(e=>{
        	e.preventDefault()
        	alert('로그아웃 클릭시')
        	deleteCookie()
        	app.run(_)
        })
	}

	return {onCreate}
})()