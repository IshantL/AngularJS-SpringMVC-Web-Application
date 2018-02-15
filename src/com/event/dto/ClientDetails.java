package com.event.dto;

import java.util.Date;

public class ClientDetails {
	
	private int clientid;

	private String clientname;
	
	private String clientpanno;
	
	private long clientcntno;
	
	private String clientemailid;
	
	private int clientfilenumber;
	
	private String clientcomments;

	private Date clientcrtdte;
	private Date clientupddte;
	
	public int getClientId() {
		
		return clientid;
	}
	public void setClientId(int clientId) {
		this.clientid = clientId;
	}
	
	public String getClientname() {
		System.out.println("in ClientDetails of com.event.dto");
		return clientname;
	}
	public void setClientname(String clientname) {
		this.clientname = clientname;
	}
	
	public String getClientpanno() {
		return clientpanno;
	}
	public void setClientpanno(String clientpanno) {
		this.clientpanno = clientpanno;
	}
	
	public long getClientcntno() {
		return clientcntno;
	}
	public void setClientcntno(long clientcntno) {
		this.clientcntno = clientcntno;
	}
	
	public String getClientemailid() {
		return clientemailid;
	}
	public void setClientemailid(String clientemailid) {
		this.clientemailid = clientemailid;
	}
	
	public int getClientfilenumber() {
		return clientfilenumber;
	}

	public void setClientfilenumber(int clientfilenumber) {
		this.clientfilenumber = clientfilenumber;
	}
	
	public String getClientcomments() {
		return clientcomments;
	}
	public void setClientcomments(String clientcomments) {
		this.clientcomments = clientcomments;
	}
	
	public Date getClientcrtdte() {
		return clientcrtdte;
	}
	public void setClientcrtdte(Date clientcrtdte) {
		this.clientcrtdte = clientcrtdte;
	}
	
	public Date getClientupddte() {
		return clientupddte;
	}
	public void setClientupddte(Date clientupddte) {
		this.clientupddte = clientupddte;
	}

}
