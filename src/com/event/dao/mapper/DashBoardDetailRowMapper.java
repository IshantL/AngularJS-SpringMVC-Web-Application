package com.event.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.event.dto.DashBoardDetails;

public class DashBoardDetailRowMapper implements RowMapper<DashBoardDetails> {

	public DashBoardDetails mapRow(ResultSet result, int rowSeq) throws SQLException {
		DashBoardDetails pc = new DashBoardDetails();

		pc.settaskid(result.getInt("taskid"));
		
		pc.setclientnames(result.getString("clientnames"));

		pc.setservicetype(result.getString("servicetype"));

		pc.settaskstat(result.getString("taskstat"));

		pc.settaskassigneename(result.getString("taskassigneename"));
		pc.settaskassignedname(result.getString("taskassignedname"));

		pc.settaskduedte(result.getDate("taskduedte"));
		pc.settaskassigneddte(result.getDate("taskassigneddte"));
		pc.settaskcompletedte(result.getDate("taskcompletedte"));

		pc.settaskcomments(result.getString("taskcomments"));

		pc.setfeecharged(result.getDouble("feecharged"));
		pc.setfeereceived(result.getDouble("feereceived"));
		pc.setfeeoutstanding(result.getDouble("feeoutstanding"));

		pc.settaskcrtdte(result.getDate("taskcrtdte"));
		pc.settaskupddte(result.getDate("taskupddte"));

		return pc;

	}

}
