package com.event.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.event.dto.TaskDetailsTO;

public class TaskDetailTORowMapper implements RowMapper<TaskDetailsTO> {

	public TaskDetailsTO mapRow(ResultSet result, int rowSeq) throws SQLException {
		TaskDetailsTO pc = new TaskDetailsTO();

		pc.settaskid(result.getInt("taskid"));
		
		pc.setclientnames(result.getString("clientnames"));

		pc.setservicetype(result.getString("servicetype"));

		pc.settaskstat(result.getString("taskstat"));

		pc.settaskduedte(result.getDate("taskduedte"));
		pc.settaskassigneddte(result.getDate("taskassigneddte"));
		pc.settaskcompletedte(result.getDate("taskcompletedte")); 
		

		pc.settaskassigneename(result.getString("taskassigneename"));
		pc.settaskassignedname(result.getString("taskassignedname"));

		pc.settaskcrtdte(result.getDate("taskcrtdte"));
		pc.settaskupddte(result.getDate("taskupddte"));

		pc.settaskcomments(result.getString("taskcomments"));

		pc.setfeecharged(result.getDouble("feecharged"));
		pc.setfeereceived(result.getDouble("feereceived"));
		pc.setfeeoutstanding(result.getDouble("feeoutstanding"));

		return pc;

	}

}
