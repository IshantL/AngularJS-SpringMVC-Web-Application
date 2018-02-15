package com.event.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.event.dto.ClientDetails;

public class ClientDetailsRowMapper implements RowMapper<ClientDetails> {

	public ClientDetails mapRow(ResultSet result, int rowSeq) throws SQLException {
		System.out.println("in ClientDetailsRowMapper of com.event.dao.mapper");
		ClientDetails pc = new ClientDetails();

		pc.setClientId(result.getInt("clientid"));
		
		pc.setClientname(result.getString("clientname"));

		pc.setClientpanno(result.getString("clientpanno"));

		pc.setClientcntno(result.getLong("clientcntno"));

		pc.setClientemailid(result.getString("clientemailid"));
		
		pc.setClientfilenumber(result.getInt("clientfilenumber"));

		pc.setClientcomments(result.getString("clientcomments"));

		pc.setClientcrtdte(result.getDate("clientcrtdte"));

		pc.setClientupddte(result.getDate("clientupddte"));

		return pc;

	}

}
