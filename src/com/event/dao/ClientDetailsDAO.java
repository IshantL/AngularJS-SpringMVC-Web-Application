package com.event.dao;

import java.util.Date;
import java.util.List;

import com.event.dto.ClientDetails;
import com.event.dto.DashBoardDetails;
import com.event.dto.TaskDetails;
import com.event.dto.TaskDetailsTO;
import com.event.dto.UserDetails;

public interface ClientDetailsDAO {

	//Dash Board Details
	
	public List<DashBoardDetails> getDashboarddtl();
	
	
	//Client Details
	
	public List<ClientDetails> getAlladdclientCode();

	public int addclientCode(ClientDetails clientcode);

	public int updateclientCode(ClientDetails clientcode);

	public int deleteclientCode(int clientid);
	
	
	//Task Details
	
	public List<TaskDetails> getAlltaskCode();

	//public int addtaskcode(TaskDetails taskcode);
	
	public int addtaskcode(TaskDetailsTO taskcodeTO);

	public int updatetaskcode(TaskDetailsTO taskcodeTO);
	
	public int deletetaskcode(int taskid );

	
	//User Details
	
	public List<UserDetails> getAllUserloginDetail();

	public int adduserCode(UserDetails usercode);

	public int updateuserCode(UserDetails usercode);

	public int deleteuserCode(int userid);

}
