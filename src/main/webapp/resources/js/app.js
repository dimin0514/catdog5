"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
	let _, js, authjs; //멤버변수, 인스턴스 변수  해당 클래스에서 공유
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x)); 
			onCreate();
	});
	let init =()=>{
		_ = $.ctx();   //메서드? 인스턴스 변수를 가져다 쓸 수 있음
		js = $.js();
		authjs = js+'/cmm/auth.js';
	}
	let onCreate=()=>{
		init();
		$.when(
			$.getScript(authjs)	
		)
		.done(()=>{
			auth.onCreate()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})//~() 할때 성공하면 done() 실패하면 fail() . . .할때마다 엔터 메소드 체인
		 
	}
	return {run};
})();





var player = (()=>{
	var _empNo,_ename,_job,_mgr,_hireDate,_sal,_comm,_deptNo;
	
	var setDeptNo = (deptNo)=>{this.deptNo = deptNo;}
	var setEmpNo = (empNo)=>{this.empNo = empNo;}
	var setEname = (ename)=>{this.ename = ename;}
	var getDeptNo = ()=>{return this._deptNo;}
	var getEmpNo = ()=>{return this. _empNo;}
	var getEname = ()=>{return this._ename;}
	return {
		setDeptNo : setDeptNo,
		setEmpNo  :  setEmpNo ,
		setEname : setEname,
		getDeptNo : getDeptNo,
		getEmpNo : getEmpNo,
		getEname : getEname
	};
})();

var employeeService = (()=>{
	return {
		login : (ctx)=>{
			$('#login_btn').click(()=>{
				if($('#username').val()===''||$('#userpw').val()===''||$('#deptname').val()===''){
					alert('필수값이 없습니다.');
				}else{
					/*alert('입력한 값 아이디'+$('#username').val());*/
					$('#login_form').attr('action',ctx+'/company.do');
					$('#login_form').attr('method','GET');
					$('#login_form').submit();
				}

			});
		},
		join: (ctx)=>{
			$('#join_btn').click(()=>{
				if($('#join_empNo').val()===''||$('#join_ename').val()===''){
					alert('필수값이 없습니다.');
				}else{
					/*alert('입력한 값 아이디'+$('#join_empNo').val());*/
					$('#join_form').attr('action',ctx+'/company.do');
					$('#join_form').attr('method','GET');
					$('#join_form').submit();
				}
			});
		},
		moveJoin : (ctx)=>{
			$('#a_join').click(()=>{
				
				location.assign(ctx+'/facade.do?page=join')
			});
		},
			
		
		search: (ctx)=>{
			$('#find2').click(()=>{
				location.assign(ctx+'/player.do?action=search&page=a_position');
			});
			
			$('#find4').click(()=>{
				location.assign(ctx+'/player.do?action=search&page=4_find_by_teamid_position');
				
			});
			
		}
		
	};
})();
