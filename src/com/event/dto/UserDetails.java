package com.event.dto;

import java.util.Date;

public class UserDetails {

	private int userid;
	private String username;
	private String usernameid;
	private String userpwd;
	private long usercntno;
	private String useremailid;
	private String useraddress;
	private String userrole;
	private Date usercrtdate;
	private Date userupddate;

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsernameid() {
		return usernameid;
	}

	public void setUsernameid(String usernameid) {
		this.usernameid = usernameid;
	}

	public String getUserpwd() {
		return userpwd;
	}

	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}

	public long getUsercntno() {
		return usercntno;
	}

	public void setUsercntno(long usercntno) {
		this.usercntno = usercntno;
	}

	public String getUseremailid() {
		return useremailid;
	}

	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}

	public String getUseraddress() {
		return useraddress;
	}

	public void setUseraddress(String useraddress) {
		this.useraddress = useraddress;
	}

	public String getUserrole() {
		return userrole;
	}

	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}

	public Date getUsercrtdate() {
		return usercrtdate;
	}

	public void setUsercrtdate(Date usercrtdate) {
		this.usercrtdate = usercrtdate;
	}

	public Date getUserupddate() {
		return userupddate;
	}

	public void setUserupddate(Date userupddate) {
		this.userupddate = userupddate;
	}

}
