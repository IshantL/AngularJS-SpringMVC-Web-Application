package com.event.controller;

import java.net.CookieStore;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.event.dto.ClientDetails;
import com.event.dto.DashBoardDetails;
import com.event.dto.TaskDetails;
import com.event.dto.UserDetails;

import com.event.service.ClientDetailsService;

import com.google.gson.Gson;

@Controller
public class ClientDetailsController {
	@Autowired
	ClientDetailsService clientDetailsService;

	ClientDetailsController() {
		// TODO Auto-generated constructor stub
		System.out.println("Inside ClientDetailsController controller constructor");
	}

	// Get all Details for Dash board

	@RequestMapping(value = "/event/getDashboarddtl", method = RequestMethod.GET)
	public @ResponseBody String getDashboarddtl() {
		System.out.println("Inside getDashboarddtl ClientDetailsController");

		List<DashBoardDetails> dashboarddtl = clientDetailsService.getDashboarddtl();

		Gson gson = new Gson();
		String resultJson = gson.toJson(dashboarddtl);

		return resultJson;

	}

	// Client Details

	// Get all client details
	@RequestMapping(value = "/event/getAlladdclientCode", method = RequestMethod.GET)
	public @ResponseBody String getAlladdclientCode() {
		System.out.println("Inside getAlladdclientCode ClientDetailsController");

		List<ClientDetails> clientCodeList = clientDetailsService.getAlladdclientCode();

		Gson gson = new Gson();
		String resultJson = gson.toJson(clientCodeList);

		System.out.println("in getAlladdclientCode ClientDetailsController" + clientCodeList);

		return resultJson;

	}

	// Add client code
	@RequestMapping(value = "/event/addclientCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<ClientDetails> addclientCode(@RequestBody ClientDetails pc) {
		System.out.println("in addclientCode ClientDetailsController");
		return clientDetailsService.addclientCode(pc);
	}

	// Update client code
	@RequestMapping(value = "/event/updateclientCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String updateclientCode(@RequestBody String user1) throws JSONException {

		ClientDetails pc = new ClientDetails();
		System.out.println("in updateclientCode ClientDetailsController" + user1);
		user1.toString();

		JSONObject jsonobj = new JSONObject(user1);

		System.out.println("ClientId: " + jsonobj.getInt("clientid"));

		System.out.println("Checking pan no");

		System.out.println("user1: " + user1);
		// System.out.println("Clientpanno: " +
		// jsonobj.getJSONObject(user1).getString("clientpanno"));

		pc.setClientId(jsonobj.getInt("clientid"));

		// pc.setClientname(jsonobj.getString("clientname"));

		if (jsonobj.has("clientname")) {
			pc.setClientname(jsonobj.getString("clientname"));
		} else {
			pc.setClientname(null);
		}

		// pc.setClientcntno(jsonobj.getLong("clientcntno"));

		if (jsonobj.has("clientcntno")) {
			pc.setClientcntno(jsonobj.getLong("clientcntno"));
		} else {
			pc.setClientcntno(0);
		}

		// pc.setClientpanno(jsonobj.getString("clientpanno"));

		if (jsonobj.has("clientpanno")) {
			pc.setClientpanno(jsonobj.getString("clientpanno"));
		} else {
			pc.setClientpanno(null);
		}

		// pc.setClientemailid(jsonobj.getString("clientemailid"));

		if (jsonobj.has("clientemailid")) {
			pc.setClientemailid(jsonobj.getString("clientemailid"));
		} else {
			pc.setClientemailid(null);
		}

		if (jsonobj.has("clientfilenumber")) {
			pc.setClientfilenumber(jsonobj.getInt("clientfilenumber"));
		} else {
			pc.setClientfilenumber(0);
		}

		// pc.setClientcomments(jsonobj.getString("clientcomments"));

		if (jsonobj.has("clientcomments")) {
			pc.setClientcomments(jsonobj.getString("clientcomments"));
		} else {
			pc.setClientcomments(null);
		}

		return clientDetailsService.updateclientCode(pc);

	}

	// delete client code
	@RequestMapping(value = "event/deleteclientCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<ClientDetails> deleteclientCode(@RequestBody int clientid) {
		System.out.println(clientid);
		System.out.println("in deleteclientCode ClientDetailsController");
		// promoCodeService);
		return clientDetailsService.deleteclientCode(clientid);

	}

	// Task Details

	// Get all task details
	@RequestMapping(value = "/event/getAlltaskCode", method = RequestMethod.GET)
	public @ResponseBody String getAlltaskCode() {
		System.out.println("Inside getAlltaskCode ClientDetailsController");

		List<TaskDetails> taskCodeList = clientDetailsService.getAlltaskCode();

		Gson gson = new Gson();
		String resultJson = gson.toJson(taskCodeList);

		return resultJson;

	}

	// Add task details

	@RequestMapping(value = "/event/addtaskcode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<TaskDetails> addtaskcode(@RequestBody TaskDetails pc) throws ParseException {
		System.out.println("AAAAAAAAAAAAAAAAAAAA in addtaskcode ClientDetailsController");
		return clientDetailsService.addtaskcode(pc);
	}

	// Update task details
	@RequestMapping(value = "/event/updatetaskcode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String updateclientcode(@RequestBody String user1) throws JSONException, ParseException {
		TaskDetails pc = new TaskDetails();
		System.out.println("in updatetaskcode ClientDetailsController" + user1);
		user1.toString();
		JSONObject jsonobj = new JSONObject(user1);

		pc.settaskid(jsonobj.getInt("taskid"));

		pc.setclientnames(jsonobj.getString("clientnames"));

		pc.setservicetype(jsonobj.getString("servicetype"));

		pc.settaskstat(jsonobj.getString("taskstat"));

		pc.settaskassigneename(jsonobj.getString("taskassigneename"));

		pc.settaskassignedname(jsonobj.getString("taskassignedname"));

		pc.setTaskassigneddte(jsonobj.getString("taskassigneddte"));

		// pc.setTaskduedte(jsonobj.getString("taskduedte"));

		// pc.setTaskcompletedte(jsonobj.getString("taskcompletedte"));

		if (jsonobj.has("taskcompletedte")) {
			pc.setTaskcompletedte(jsonobj.getString("taskcompletedte"));
		} else {
			pc.setTaskcompletedte(null);
		}

		if (jsonobj.has("taskduedte")) {
			pc.setTaskduedte(jsonobj.getString("taskduedte"));
		} else {
			pc.setTaskduedte(null);
		}

		if (jsonobj.has("feecharged")) {
			pc.setfeecharged(jsonobj.getDouble("feecharged"));
		} else {
			pc.setfeecharged(0);
		}

		if (jsonobj.has("feereceived")) {
			pc.setfeereceived(jsonobj.getDouble("feereceived"));
		} else {
			pc.setfeereceived(0);
		}

		if (jsonobj.has("feeoutstanding")) {
			pc.setfeeoutstanding(jsonobj.getDouble("feeoutstanding"));
		} else {
			pc.setfeeoutstanding(0);
		}

		if (jsonobj.has("taskcomments")) {
			pc.settaskcomments(jsonobj.getString("taskcomments"));
		} else {
			pc.settaskcomments(null);
		}

		return clientDetailsService.updatetaskcode(pc);

	}

	// delete task details
	@RequestMapping(value = "event/deletetaskcode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<TaskDetails> deletetaskcode(@RequestBody int taskid) {

		System.out.println(taskid);

		System.out.println("in deletetaskcode of ClientDetailsController");
		// promoCodeService);

		return clientDetailsService.deletetaskcode(taskid);

	}

	// User Details
	
	/*// Get all user logout details
		@RequestMapping(value = "/event/getAllUserloginoutDetail", method = RequestMethod.GET)
		public @ResponseBody String getAllUserloginoutDetail(HttpServletRequest request) {
			System.out.println("Inside getAllUserloginDetail of ClientDetailsController");
			HttpSession session=request.getSession(false);
			session.invalidate();
			Cookie [] cookies=request.getCookies();
			for(Cookie ck:cookies){
				if(ck.getName().equalsIgnoreCase("JSESSIONID")){
					ck.setMaxAge(0);
				}
				
			}
			session.removeAttribute("USER_ID");

			return resultJson;

		}*/

	// Get all user login details
	@RequestMapping(value = "/event/getAllUserloginDetail", method = RequestMethod.GET)
	public @ResponseBody String getAllUserloginDetail() {
		System.out.println("Inside getAllUserloginDetail of ClientDetailsController");

		List<UserDetails> userloginList = clientDetailsService.getAllUserloginDetail();

		Gson gson = new Gson();
		String resultJson = gson.toJson(userloginList);

		return resultJson;

	}

	// Add User details
	@RequestMapping(value = "/event/adduserCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<UserDetails> addusercode(@RequestBody UserDetails pc) {
		System.out.println("in adduserCode of ClientDetailsController");
		return clientDetailsService.adduserCode(pc);
	}

	// Update User details
	@RequestMapping(value = "/event/updateuserCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String updateusercode(@RequestBody String user1) throws JSONException {
		UserDetails pc = new UserDetails();
		System.out.println("in updateuserCode of ClientDetailsController" + user1);
		user1.toString();
		JSONObject jsonobj = new JSONObject(user1);

		pc.setUserid(jsonobj.getInt("userid"));
		pc.setUsername(jsonobj.getString("username"));
		pc.setUsernameid(jsonobj.getString("usernameid"));
		pc.setUserpwd(jsonobj.getString("userpwd"));
		pc.setUserrole(jsonobj.getString("userrole"));

		if (jsonobj.has("usercntno")) {
			pc.setUsercntno(jsonobj.getLong("usercntno"));
		} else {
			pc.setUsercntno(0);
		}

		if (jsonobj.has("useremailid")) {
			pc.setUseremailid(jsonobj.getString("useremailid"));
		} else {
			pc.setUseremailid(null);
		}

		if (jsonobj.has("useraddress")) {
			pc.setUseraddress(jsonobj.getString("useraddress"));
		} else {
			pc.setUseraddress(null);
		}

		return clientDetailsService.updateuserCode(pc);

	}

	// delete User details
	@RequestMapping(value = "event/deleteuserCode", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<UserDetails> deleteuserCode(@RequestBody int userid) {
		System.out.println(userid);
		System.out.println("in deleteuserCode of ClientDetailsController");
		// promoCodeService);
		return clientDetailsService.deleteuserCode(userid);

	}
}
