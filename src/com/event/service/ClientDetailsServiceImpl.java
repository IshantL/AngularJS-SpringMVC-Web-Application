
package com.event.service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.dao.ClientDetailsDAO;

import com.event.dto.ClientDetails;
import com.event.dto.DashBoardDetails;
import com.event.dto.TaskDetails;
import com.event.dto.TaskDetailsTO;
import com.event.dto.UserDetails;

@Service
public class ClientDetailsServiceImpl implements ClientDetailsService {

	@Autowired
	ClientDetailsDAO ClientDetailsDAO;

	ClientDetailsServiceImpl() {
		System.out.println("Inside ClientDetailsServiceImpl controller");

	}

	// Dash Board Details

	public List<DashBoardDetails> getDashboarddtl() {
		System.out.println("Inside getDashboarddtl ClientDetailsServiceImpl controller");

		return ClientDetailsDAO.getDashboarddtl();

	}

	// Client Details

	public List<ClientDetails> getAlladdclientCode() {
		System.out.println("Inside getAlladdclientCode ClientDetailsServiceImpl controller");
		return ClientDetailsDAO.getAlladdclientCode();
	}

	public List<ClientDetails> addclientCode(ClientDetails clientcode) {
		System.out.println("Inside addclientCode ClientDetailsServiceImpl controller");
		int insertCount = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();

		clientcode.setClientcrtdte(date);
		clientcode.setClientupddte(date);

		insertCount = ClientDetailsDAO.addclientCode(clientcode);
		return null;
	}

	public String updateclientCode(ClientDetails clientcode) {

		System.out.println("in updateclientcode of ClientDetailsServiceImpl in " + clientcode.getClientId());
		ClientDetailsDAO.updateclientCode(clientcode);
		int insertCount1 = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();

		clientcode.setClientupddte(date);

		insertCount1 = ClientDetailsDAO.updateclientCode(clientcode);

		return null;
	}

	public List<ClientDetails> deleteclientCode(int clientid) {

		System.out.println("in clientcode service" + clientid);
		ClientDetailsDAO.deleteclientCode(clientid);
		return null;
	}

	// Task Details

	public List<TaskDetails> getAlltaskCode() {
		System.out.println("Inside getAlltaskCode ClientDetailsServiceImpl controller");

		return ClientDetailsDAO.getAlltaskCode();
	}

	public List<TaskDetails> addtaskcode(TaskDetails taskcode) throws ParseException {

		System.out.println("Inside addtaskcode ClientDetailsServiceImpl controller");

		TaskDetailsTO taskcodeTO = new TaskDetailsTO();
		// taskDetailsTO.setClientNames(taskcode.getclientnames());

		int insertCount5 = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

		Date date = new Date();
		// DateFormat dateFormat = new SimpleDateFormat("date");

		// taskcode.settaskduedte(date);

		// taskcode.settaskcrtdte(date);
		// taskcode.settaskupddte(date);

		taskcodeTO.settaskid(taskcode.gettaskid());

		taskcodeTO.setclientnames(taskcode.getclientnames());

		taskcodeTO.setservicetype(taskcode.getservicetype());

		taskcodeTO.settaskstat(taskcode.gettaskstat());

		taskcodeTO.settaskduedte(taskcode.getTaskduedte() != null && !(taskcode.getTaskduedte() == "")
				? new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskduedte()) : null);

		taskcodeTO.settaskassigneddte(new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskassigneddte()));

		taskcodeTO.settaskcompletedte(taskcode.getTaskcompletedte() != null && !(taskcode.getTaskcompletedte() == "")
				? new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskcompletedte()) : null);
		
		//taskcodeTO.settaskcompletedte(new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskcompletedte()));

		taskcodeTO.settaskassigneename(taskcode.gettaskassigneename());
		taskcodeTO.settaskassignedname(taskcode.gettaskassignedname());

		taskcodeTO.settaskcrtdte(date);
		taskcodeTO.settaskupddte(date);

		taskcodeTO.settaskcomments(taskcode.gettaskcomments());

		taskcodeTO.setfeecharged(taskcode.getfeecharged());
		taskcodeTO.setfeereceived(taskcode.getfeereceived());
		taskcodeTO.setfeeoutstanding(taskcode.getfeeoutstanding());

		// insertCount5 = ClientDetailsDAO.addtaskcode(taskcode);
		insertCount5 = ClientDetailsDAO.addtaskcode(taskcodeTO);

		return null;
	}

	public String updatetaskcode(TaskDetails taskcode) throws ParseException {

		System.out.println("in updatetaskcode in ClientDetailsServiceImpl" + taskcode.getclientnames());

		TaskDetailsTO taskcodeTO = new TaskDetailsTO();
		// taskDetailsTO.setClientNames(taskcode.getclientnames());

		int insertCount11 = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();

		taskcodeTO.settaskid(taskcode.gettaskid());

		taskcodeTO.setclientnames(taskcode.getclientnames());

		taskcodeTO.setservicetype(taskcode.getservicetype());

		taskcodeTO.settaskstat(taskcode.gettaskstat());

		taskcodeTO.settaskduedte(taskcode.getTaskduedte() != null && !(taskcode.getTaskduedte() == "")
				? new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskduedte()) : null);

		taskcodeTO.settaskassigneddte(new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskassigneddte()));
		
		taskcodeTO.settaskcompletedte(taskcode.getTaskcompletedte() != null && !(taskcode.getTaskcompletedte() == "")
				? new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskcompletedte()) : null);

		//taskcodeTO.settaskcompletedte(new SimpleDateFormat("yyyy-MM-dd").parse(taskcode.getTaskcompletedte()));

		taskcodeTO.settaskassigneename(taskcode.gettaskassigneename());
		taskcodeTO.settaskassignedname(taskcode.gettaskassignedname());
		// date
		taskcodeTO.settaskcrtdte(date);
		taskcodeTO.settaskupddte(date);

		taskcodeTO.settaskcomments(taskcode.gettaskcomments());

		taskcodeTO.setfeecharged(taskcode.getfeecharged());
		taskcodeTO.setfeereceived(taskcode.getfeereceived());
		taskcodeTO.setfeeoutstanding(taskcode.getfeeoutstanding());

		insertCount11 = ClientDetailsDAO.updatetaskcode(taskcodeTO);

		return null;

	}

	public List<TaskDetails> deletetaskcode(int taskid) {

		System.out.println("in deletetaskCode in ClientDetailsServiceImpl taskid" + taskid);

		ClientDetailsDAO.deletetaskcode(taskid);
		return null;
	}

	// User Details

	public List<UserDetails> getAllUserloginDetail() {
		System.out.println("in getAllUserloginDetail in ClientDetailsServiceImpl");
		return ClientDetailsDAO.getAllUserloginDetail();
	}

	public List<UserDetails> adduserCode(UserDetails usercode) {
		System.out.println("in adduserCode in ClientDetailsServiceImpl");
		int insertCount3 = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		usercode.setUsercrtdate(date);
		usercode.setUserupddate(date);
		insertCount3 = ClientDetailsDAO.adduserCode(usercode);
		return null;
	}

	public String updateuserCode(UserDetails usercode) {
		System.out.println("in updateuserCode in ClientDetailsServiceImpl" + usercode.getUserid());

		int insertCount4 = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();

		usercode.setUserupddate(date);

		insertCount4 = ClientDetailsDAO.updateuserCode(usercode);

		ClientDetailsDAO.updateuserCode(usercode);

		return null;
	}

	public List<UserDetails> deleteuserCode(int userid) {
		System.out.println("in deleteuserCode in ClientDetailsServiceImpl" + userid);
		ClientDetailsDAO.deleteuserCode(userid);
		return null;
	}
}
