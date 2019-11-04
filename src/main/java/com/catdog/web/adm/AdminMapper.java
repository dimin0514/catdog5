package com.catdog.web.adm;

import java.util.HashMap;

public interface AdminMapper {

	Admin deleteAdmin(Admin param);
	Admin updateAdmin(Admin param);
	Admin selectAdmin(HashMap<?,?> param);
	
	Admin selectAdminByIdPw(Admin param);
	
	Admin selectAdminById(String param);
	Admin selectUserByIdPw(Admin param);

}
