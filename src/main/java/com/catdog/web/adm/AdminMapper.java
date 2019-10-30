package com.catdog.web.adm;

public interface AdminMapper {

	Admin selectAdminByIdPw(Admin param);
	Admin deleteAdmin(Admin param);
	Admin updateAdmin(Admin param);
	Admin selectAdminById(String param);
	Admin selectUserByIdPw(Admin param);

}
