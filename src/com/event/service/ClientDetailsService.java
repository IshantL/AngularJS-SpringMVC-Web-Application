package com.event.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.event.dao.ClientDetailsDAO;

import com.event.dto.ClientDetails;
import com.event.dto.DashBoardDetails;
import com.event.dto.TaskDetails;
import com.event.dto.UserDetails;

public interface ClientDetailsService {
	
	//Dash board Details
	
	public List<DashBoardDetails> getDashboarddtl();
	
	
	// Client Details

	public List<ClientDetails> getAlladdclientCode();

	public List<ClientDetails> addclientCode(ClientDetails clientcode);

	public String updateclientCode(ClientDetails clientcode);

	public List<ClientDetails> deleteclientCode(int clientid);
	
	
	//Task Details
	
	public List<TaskDetails> getAlltaskCode();

	public List<TaskDetails> addtaskcode(TaskDetails taskcode) throws ParseException;

	public String updatetaskcode(TaskDetails taskcode) throws ParseException;

	public List<TaskDetails> deletetaskcode(int taskid);
	
	
	//User Details
	
	public List<UserDetails> getAllUserloginDetail();
	
	public List<UserDetails> adduserCode(UserDetails usercode);

	public String updateuserCode(UserDetails usercode);

	public List<UserDetails> deleteuserCode(int userid);

}
