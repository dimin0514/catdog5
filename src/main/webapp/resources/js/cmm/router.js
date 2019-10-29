"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x +'/resources/js')
	sessionStorage.setItem('css',x +'/resources/css')
	sessionStorage.setItem('img',x +'/resources/img')
	return{
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		css : ()=>{return sessionStorage.getItem('css');},
		img : ()=>{return sessionStorage.getItem('img');},
	}
}
function Customer(x){
	sessionStorage.setItem('cid',x.cid);
	sessionStorage.setItem('pwd',x.pwd);
	sessionStorage.setItem('ssn',x.ssn);
	//cid,pwd,ssn,creditcard,pname,phone,address,email
	return{
		cid:()=>{return sessionStorage.getItem('cid');},
		pwd:()=>{return sessionStorage.getItem('pwd');},
		ssn:()=>{return sessionStorage.getItem('ssn');}
	}
}