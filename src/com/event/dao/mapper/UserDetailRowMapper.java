package com.event.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.event.dto.UserDetails;

public class UserDetailRowMapper implements RowMapper<UserDetails> {

	public UserDetails mapRow(ResultSet result, int rowSeq) throws SQLException {
		System.out.println("in UserDetailRowMapper of com.event.dao.mapper");
		UserDetails pc = new UserDetails();
		pc.setUserid(result.getInt("userid"));
		pc.setUsername(result.getString("username"));
		pc.setUsernameid(result.getString("usernameid"));
		pc.setUserpwd(result.getString("userpwd"));
		pc.setUsercntno(result.getLong("usercntno"));
		pc.setUseremailid(result.getString("useremailid"));
		
		pc.setUseraddress(result.getString("useraddress"));
		
		pc.setUserrole(result.getString("userrole"));
		pc.setUsercrtdate(result.getDate("usercrtdate"));
		pc.setUserupddate(result.getDate("userupddate"));
		return pc;

	}

}
