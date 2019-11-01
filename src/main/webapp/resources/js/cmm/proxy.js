"use strict"
//공통소스! 같이 쓰는거 만드는 사람이 리더! 어려움.  
$.prototype.nullChecker =x=>{
	let flag = false
	let i = 0
	for (i in x){
		if(x[i] ===''){
			flag = true
		}
	}
	return flag
}