package com.event.dto;

import java.util.Date;

public class TaskDetails {

	private int taskid;

	private String clientnames;

	private String servicetype;
	private String taskstat;

	private String taskduedte;
	private String taskassigneddte;
	private String taskcompletedte;

	private String taskassigneename;
	private String taskassignedname;

	private Date taskcrtdte;
	private Date taskupddte;

	private String taskcomments;

	private double feecharged;
	private double feereceived;
	private double feeoutstanding;

	public int gettaskid() {
		return taskid;
	}

	public void settaskid(int taskid) {
		this.taskid = taskid;
	}

	public String getclientnames() {
		return clientnames;
	}

	public void setclientnames(String clientnames) {
		this.clientnames = clientnames;
	}

	public String getservicetype() {
		return servicetype;
	}

	public void setservicetype(String servicetype) {
		this.servicetype = servicetype;
	}

	public String gettaskstat() {
		return taskstat;
	}

	public void settaskstat(String taskstat) {
		this.taskstat = taskstat;
	}

	/*
	 * public Date gettaskduedte() { return taskduedte; }
	 * 
	 * public void settaskduedte(Date taskduedte) { this.taskduedte =
	 * taskduedte; }
	 * 
	 * public Date gettaskassigneddte() { return taskassigneddte; }
	 * 
	 * public void settaskassigneddte(Date taskassigneddte) {
	 * this.taskassigneddte = taskassigneddte; }
	 * 
	 * public Date gettaskcompletedte() { return taskcompletedte; }
	 * 
	 * public void settaskcompletedte(Date taskcompletedte) {
	 * this.taskcompletedte = taskcompletedte; }
	 */

	public String gettaskassigneename() {
		return taskassigneename;
	}

	public String getTaskduedte() {
		return taskduedte;
	}

	public void setTaskduedte(String taskduedte) {
		this.taskduedte = taskduedte;
	}

	public String getTaskassigneddte() {
		return taskassigneddte;
	}

	public void setTaskassigneddte(String taskassigneddte) {
		this.taskassigneddte = taskassigneddte;
	}

	public String getTaskcompletedte() {
		return taskcompletedte;
	}

	public void setTaskcompletedte(String taskcompletedte) {
		this.taskcompletedte = taskcompletedte;
	}

	public void settaskassigneename(String taskassigneename) {
		this.taskassigneename = taskassigneename;
	}

	public String gettaskassignedname() {
		return taskassignedname;
	}

	public void settaskassignedname(String taskassignedname) {
		this.taskassignedname = taskassignedname;
	}

	public Date gettaskcrtdte() {
		return taskcrtdte;
	}

	public void settaskcrtdte(Date taskcrtdte) {
		this.taskcrtdte = taskcrtdte;
	}

	public Date gettaskupddte() {
		return taskupddte;
	}

	public void settaskupddte(Date taskupddte) {
		this.taskupddte = taskupddte;
	}

	public String gettaskcomments() {
		return taskcomments;
	}

	public void settaskcomments(String taskcomments) {
		this.taskcomments = taskcomments;
	}

	public double getfeecharged() {
		return feecharged;
	}

	public void setfeecharged(double feecharged) {
		this.feecharged = feecharged;
	}

	public double getfeereceived() {
		return feereceived;
	}

	public void setfeereceived(double feereceived) {
		this.feereceived = feereceived;
	}

	public double getfeeoutstanding() {
		return feeoutstanding;
	}

	public void setfeeoutstanding(double feeoutstanding) {
		this.feeoutstanding = feeoutstanding;
	}

}
