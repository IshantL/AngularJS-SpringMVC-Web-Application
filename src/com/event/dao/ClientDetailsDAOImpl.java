package com.event.dao;

import java.util.Date;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.event.dao.mapper.ClientDetailsRowMapper;
import com.event.dao.mapper.DashBoardDetailRowMapper;
import com.event.dao.mapper.TaskDetailRowMapper;
import com.event.dao.mapper.TaskDetailTORowMapper;
import com.event.dao.mapper.UserDetailRowMapper;

import com.event.dto.ClientDetails;
import com.event.dto.DashBoardDetails;
import com.event.dto.TaskDetails;
import com.event.dto.TaskDetailsTO;
import com.event.dto.UserDetails;

@Repository
public class ClientDetailsDAOImpl implements ClientDetailsDAO {

	DataSource dataSource;
	JdbcTemplate jdbcTemplate;

	ClientDetailsDAOImpl() {
		System.out.println("Inside ClientDetailsDAOImpl controller");

	}

	@Autowired
	public void setDataSource(DataSource dataSource) {
		System.out.println("inside ClientDetailsDAOImpl datasource");
		this.dataSource = dataSource;
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	// Dash Board Details

	public List<DashBoardDetails> getDashboarddtl() {
		System.out.println("inside getDashboarddtl in ClientDetailsDAOImpl");
		// return jdbcTemplate.query("select * from taskdetails order by
		// clientnames", new DashBoardDetailRowMapper());

		return jdbcTemplate.query("select * from taskdetails order by clientnames", new DashBoardDetailRowMapper());

	}

	// Client Details

	public List<ClientDetails> getAlladdclientCode() {
		System.out.println("Inside getAlladdclientCode in ClientDetailsDAOImpl");
		return jdbcTemplate.query("select * from clientdetails order by clientname", new ClientDetailsRowMapper());

	}

	public int addclientCode(ClientDetails clientCode) {
		System.out.println("Inside addclientCode in ClientDetailsDAOImpl");
		return jdbcTemplate.update(
				"INSERT INTO simplyof_simplyoffice.clientdetails( clientname, clientpanno, clientcntno, clientemailid, clientfilenumber, clientcomments, clientcrtdte, clientupddte) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				new Object[] { clientCode.getClientname(), clientCode.getClientpanno(), clientCode.getClientcntno(),
						clientCode.getClientemailid(), clientCode.getClientfilenumber(), clientCode.getClientcomments(),
						clientCode.getClientcrtdte(), clientCode.getClientupddte() });
	}

	public int updateclientCode(ClientDetails clientCode) {
		System.out.println("Inside ClientDetailsDAOImpl - updateclientCode: " + clientCode.getClientId());

		return jdbcTemplate.update(
				// "UPDATE public.clientdetails SET clientname=?, clientpanno=?,
				// clientcntno=?,clientemailid=?, clientcomments=?,
				// clientcrtdte=?, clientupddte=? WHERE clientid=?",
				"UPDATE simplyof_simplyoffice.clientdetails SET clientname=?, clientpanno=?, clientcntno=?, clientemailid=?, clientfilenumber=?, clientcomments=?, clientupddte=? WHERE clientid=?",
				new Object[] { clientCode.getClientname(), clientCode.getClientpanno(), clientCode.getClientcntno(),
						clientCode.getClientemailid(), clientCode.getClientfilenumber(), clientCode.getClientcomments(),
						// clientCode.getClientcrtdte(),
						clientCode.getClientupddte(), clientCode.getClientId() });
	}

	public int deleteclientCode(int clientid) {
		System.out.println("in deleteclientCode in ClientDetailsDAOImpl");
		return jdbcTemplate.update("DELETE from simplyof_simplyoffice.clientdetails where clientid = ?", new Object[] { clientid });

	}

	// Task Details

	public List<TaskDetails> getAlltaskCode() {
		System.out.println("inside getAlltaskCode in ClientDetailsDAOImpl");
		return jdbcTemplate.query("select * from taskdetails order by clientnames", new TaskDetailRowMapper());

	}

	// public int addtaskcode(TaskDetails taskcode) {
	public int addtaskcode(TaskDetailsTO taskcodeTO) {
		System.out.println("Inside addtaskcode in ClientDetailsDAOImpl");
		return jdbcTemplate.update(
				"INSERT INTO simplyof_simplyoffice.taskdetails( clientnames, servicetype, taskstat, taskduedte, taskassigneddte, taskcompletedte, taskassigneename, taskassignedname, taskcrtdte, taskupddte, taskcomments,"
						+ "feecharged, feereceived, feeoutstanding) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				// new Object[] { taskcode.getclientnames(),
				// taskcode.getservicetype(), taskcode.gettaskstat(),
				// taskcode.getaskduedte(), taskcode.gettaskassigneddte(),
				// taskcode.gettaskcompletedte(),
				// taskcode.getTaskduedte(), taskcode.getTaskassigneddte(),
				// taskcode.getTaskcompletedte(),
				// taskcode.gettaskassigneename(),
				// taskcode.gettaskassignedname(), taskcode.gettaskcrtdte(),
				// taskcode.gettaskupddte(), taskcode.gettaskcomments(),
				// taskcode.getfilenumber(),
				// taskcode.getfeecharged(), taskcode.getfeereceived(),
				// taskcode.getfeeoutstanding() });

				new Object[] { taskcodeTO.getclientnames(), taskcodeTO.getservicetype(), taskcodeTO.gettaskstat(),
						taskcodeTO.gettaskduedte(), taskcodeTO.gettaskassigneddte(), taskcodeTO.gettaskcompletedte(),
						taskcodeTO.gettaskassigneename(), taskcodeTO.gettaskassignedname(), taskcodeTO.gettaskcrtdte(),
						taskcodeTO.gettaskupddte(), taskcodeTO.gettaskcomments(), taskcodeTO.getfeecharged(),
						taskcodeTO.getfeereceived(), taskcodeTO.getfeeoutstanding() });

	}

	// public int updatetaskcode(TaskDetails taskcode) {
	public int updatetaskcode(TaskDetailsTO taskcodeTO) {

		System.out.println("Inside ClientDetailsDAOImpl - updateclientCode: " + taskcodeTO.gettaskid());

		return jdbcTemplate.update(
				"UPDATE simplyof_simplyoffice.taskdetails SET clientnames=?, servicetype=?, taskstat=?, taskduedte=?, taskassigneddte=?, taskcompletedte=?, taskassigneename=?, taskassignedname=?, taskcrtdte=?, taskupddte=?, taskcomments=?, feecharged=?, feereceived=?, feeoutstanding=? WHERE taskid=?",
				new Object[] { taskcodeTO.getclientnames(), taskcodeTO.getservicetype(), taskcodeTO.gettaskstat(),
						taskcodeTO.gettaskduedte(), taskcodeTO.gettaskassigneddte(), taskcodeTO.gettaskcompletedte(),
						taskcodeTO.gettaskassigneename(), taskcodeTO.gettaskassignedname(), taskcodeTO.gettaskcrtdte(),
						taskcodeTO.gettaskupddte(), taskcodeTO.gettaskcomments(), taskcodeTO.getfeecharged(),
						taskcodeTO.getfeereceived(), taskcodeTO.getfeeoutstanding(), taskcodeTO.gettaskid() });

	}

	public int deletetaskcode(int taskid) {
		System.out.println("inside deleteclientcode in ClientDetailsDAOImpl");
		return jdbcTemplate.update("DELETE from simplyof_simplyoffice.taskdetails where taskid = ?", new Object[] { taskid });

	}

	// User Details

	public List<UserDetails> getAllUserloginDetail() {
		System.out.println("inside getAllUserloginDetail of ClientDetailsDAOImpl");
		return jdbcTemplate.query("select * from userlogindetails order by username", new UserDetailRowMapper());
	}

	public int adduserCode(UserDetails userCode) {
		System.out.println("Inside adduserCode in ClientDetailsDAOImpl");
		return jdbcTemplate.update(
				"INSERT INTO simplyof_simplyoffice.userlogindetails( username, usernameid, userpwd, usercntno, useremailid, useraddress, userrole, usercrtdate, userupddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
				new Object[] { userCode.getUsername(), userCode.getUsernameid(), userCode.getUserpwd(),
						userCode.getUsercntno(), userCode.getUseremailid(), userCode.getUseraddress(),
						userCode.getUserrole(), userCode.getUsercrtdate(), userCode.getUserupddate() });
	}

	public int updateuserCode(UserDetails userCode) {
		System.out.println("Inside updateuserCode in ClientDetailsDAOImpl" + userCode.getUserid());

		System.out.println("Inside updateuserCode in ClientDetailsDAOImpl" + userCode.getUseraddress());

		return jdbcTemplate.update(
				// "UPDATE public.userlogindetails SET username=?, userpwd=?,
				// usercntno=?, useremailid=?, useraddress=?, userrole=?,
				// usercrtdate=?, userupddate=? WHERE userid=?",
				"UPDATE simplyof_simplyoffice.userlogindetails SET username=?, usernameid=?, userpwd=?, usercntno=?, useremailid=?, useraddress=?, userrole=?, userupddate=? WHERE userid=?",
				new Object[] { userCode.getUsername(), userCode.getUsernameid(), userCode.getUserpwd(),
						userCode.getUsercntno(), userCode.getUseremailid(), userCode.getUseraddress(),
						userCode.getUserrole(),
						// userCode.getUsercrtdate(),
						userCode.getUserupddate(), userCode.getUserid() });
	}

	public int deleteuserCode(int userid) {
		System.out.println("inside deleteuserCode in ClientDetailsDAOImpl");
		return jdbcTemplate.update("DELETE from simplyof_simplyoffice.userlogindetails where userid = ?", new Object[] { userid });

	}

}
