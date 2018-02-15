//User Login Details
app
		.controller(
				"loginCtrl",
				function($scope, $rootScope, $timeout, $http, $window) {

					console.log("Inside loginCtrl!!");
					$rootScope.hideit = true;

					var userDetails = [];
					function init() {

						$http
								.get('rest/event/getAllUserloginDetail')
								.success(
										function(userObj) {
											userDetails = userObj;

											$scope.user;
											$scope.user = userObj;
											console.log(userObj);

											console.log(userDetails);

											console
													.log("Success while fetching the user login details!!");

										})
								.error(
										function() {
											console
													.log("Error while getting the user login details!!");
										});
					}
					init();// init end of dropdown code

					// login functionality validation begins

					$scope.login = function(user) {

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						console.log("user: " + user);

						var continueloginloop = true;

						if (user == undefined) {
							console
									.log("Checked when all field are spaces while logging");

							$scope.errormsg = "Username & Password details are not correct";
						}

						// else {
						if (user != undefined && $scope.errormsg == "") {
							userDetails
									.forEach(function(arrayItem) {

										if (continueloginloop) {

											console
													.log("arrayItem.usernameid: "
															+ arrayItem.usernameid);
											console.log("arrayItem.userpwd: "
													+ arrayItem.userpwd);

											console.log("user.usernameid: "
													+ user.usernameid);
											console.log("user.userpwd: "
													+ user.userpwd);

											console.log("continueloginloop: "
													+ continueloginloop);

											if (continueloginloop) {
												if (user.usernameid == undefined) {
													console
															.log("Username cannot be spaces");

													$scope.errormsg = "Username cannot be spaces";
												}

												else if (user.userpwd == undefined) {
													console
															.log("Password cannot be spaces");

													$scope.errormsg = "Password cannot be spaces";
												}

												else if (arrayItem.usernameid == user.usernameid
														&& arrayItem.userpwd == user.userpwd) {
													console
															.log("login Success and ready to show home/dashboard page");
													console
															.log("user role in loginCtrl: "
																	+ arrayItem.userrole)

													$rootScope.role = arrayItem.userrole;

													console
															.log("$rootScope.role loginCtrl: "
																	+ $rootScope.role);

													$window.sessionStorage.role = arrayItem.userrole;

													$window.sessionStorage.role1 = arrayItem.username;

													console
															.log("$window.sessionStorage.role loginCtrl: "
																	+ $window.sessionStorage.role);

													console
															.log("$rootScope.hideit in login page: "
																	+ $rootScope.hideit);

													$window.location.href = '#/home';

													continueloginloop = false;

													console
															.log("continueloginloop: "
																	+ continueloginloop);

												} else {
													if (continueloginloop == true
															&& $scope.errormsg == ""
															&& arrayItem.usernameid != user.usernameid
															&& arrayItem.userpwd != user.userpwd) {
														// alert('Login
														// incorrect');

														console
																.log("continueloginloop: "
																		+ continueloginloop);

														$scope.errormsg = "Username & Password details are not correct";
														console
																.log("Username & Password details are not correct");

													}
												}
											}
										}

										console.log("continueloginloop: "
												+ continueloginloop);

									});

						}
						$scope.showLabel = true;

					};

				});

// Log-Out Controller

app.controller("logoutCtrl", function($scope, $rootScope, $timeout, $http,
		$window, $location) {

	console.log("Inside logoutCtrl!!");
	$rootScope.hideit = true;

	// Session.clear();
	sessionStorage.clear();
	$location.path('#/logoutUser');

});

// userLoginName Controller

app.controller("userLoginNameCtrl", function($scope, $rootScope, $timeout,
		$http, $window, $location) {

	console.log("Inside userLoginNameCtrl!!");
	$rootScope.hideit = false;

	$scope.userloginname = function() {
		var userloginname1 = "";

		userloginname1 = $window.sessionStorage.role1;

		console.log("userloginname1: " + userloginname1);

		return userloginname1;

	}

});

// Client-Task Detail Dashboard

app
		.controller(
				"detaildashboardCtrl",
				function($scope, $rootScope, $timeout, $http, $window) {

					// insert Client Details in database here
					console.log("Inside detaildashboardCtrl!!");
					$rootScope.hideit = false;

					$scope.query = {}
					$scope.queryBy = '$'
					$scope.orderProp = "name";
					$scope.currentPage = 1;
					$scope.pageSize = 5;
					$scope.pageChangeHandler = function(num) {
						console.log('meals page changed to ' + num);
					};
					function OtherController($scope) {
						$scope.pageChangeHandler = function(num) {
							console.log('going to page ' + num);
						};
					}
					console.log("Going to get client-task dashboard details");

					function init() {

						console
								.log("$rootScope.role checking detalDashboardCtrl: "
										+ $rootScope.role);

						console
								.log("$window.sessionStorage.role detailDashboardCtrl"
										+ $window.sessionStorage.role);

						// here writing condition to check admin or user
						// if ($rootScope.role == "Admin") {

						if ($window.sessionStorage.role == "Admin") {

							$scope.myVarHide1 = false;

							$rootScope.hideit1 = true;

							console
									.log("$rootScope.role is admin in dashboardctrl"
											+ $rootScope.role);
							console.log("$window.sessionStorage.role: "
									+ $window.sessionStorage.role);
							console
									.log("$rootScope.hideit1 admin in dashboardctrl: "
											+ $rootScope.hideit1);

						} else {
							$scope.myVarHide1 = true;

							$rootScope.hideit1 = false;

							console
									.log("$rootScope.role is user in dashboardctrl"
											+ $rootScope.role);
							console.log("$window.sessionStorage.role: "
									+ $window.sessionStorage.role);
							console
									.log("$rootScope.hideit1 user in dashboardctrl: "
											+ $rootScope.hideit1);
						}

						$http
								.get('rest/event/getDashboarddtl')
								.success(
										function(taskdata) {
											$scope.taskCode;
											$scope.taskCode = taskdata;
											console.log(taskdata);

											console
													.log("got client-task dashboard details!!");

											// Below logic will calculate the
											// total of feecharged,
											// feereceived, feeoutstanding
											// and display on the dashboard

											console
													.log("$rootScope.role dashboard: "
															+ $rootScope.role);

											console
													.log("$window.sessionStorage.role in dashboard: "
															+ $window.sessionStorage.role);

											// if ($rootScope.role == "Admin") {
											if ($window.sessionStorage.role == "Admin") {

												$scope.feechargedtotal = function() {
													var total1 = 0;
													angular
															.forEach(
																	$scope.taskCode,
																	function(
																			key,
																			value) {
																		total1 += key.feecharged;
																	});
													return total1;
												}

												$scope.feereceivedtotal = function() {
													var total2 = 0;
													angular
															.forEach(
																	$scope.taskCode,
																	function(
																			key,
																			value) {
																		total2 += key.feereceived;
																	});
													return total2;
												}

												$scope.feeoutstandingtotal = function() {
													var total3 = 0;
													angular
															.forEach(
																	$scope.taskCode,
																	function(
																			key,
																			value) {
																		total3 += key.feeoutstanding;
																	});
													return total3;
												}
											}
										})
								.error(
										function() {
											console
													.log("Error while getting the client-task dashboard details!!");
										});
					}
					init();// init

					// DOWNLOAD TO EXPORT

					$scope.exportData = function() {
						console
								.log("Inside Detail Dash Board and ready to export to excel");

						console
								.log("$rootScope.role dashboard export excel file: "
										+ $rootScope.role);
						console
								.log("$window.sessionStorage.role dashboard excel file: "
										+ $window.sessionStorage.role);

						// if ($rootScope.role == "Admin") {
						if ($window.sessionStorage.role == "Admin") {
							alasql(
									'SELECT clientnames as Client_Name, servicetype as Service_Type, taskstat as Task_Status, taskassigneddte as Task_Assigned_Date, taskduedte as Task_Due_Date, taskcompletedte as Task_Complete_Date, taskassigneename as Task_Assignee_Name, taskassignedname as Task_Assigned_Name, taskcrtdte as Task_Created_Date, taskupddte as Task_Updated_Date, taskcomments as Task_Comments, feecharged as Fee_Charged, feereceived as Fee_Received, feeoutstanding as Fee_Outstanding INTO XLS("AdminReport.xls",{headers:true}) FROM ? ',
									[ $scope.taskCode ]);
						}

						// if ($rootScope.role == "User") {
						if ($window.sessionStorage.role == "User") {
							alasql(
									'SELECT clientnames as Client_Name, servicetype as Service_Type, taskstat as Task_Status, taskassigneddte as Task_Assigned_Date, taskduedte as Task_Due_Date, taskcompletedte as Task_Complete_Date, taskassigneename as Task_Assignee_Name, taskassignedname as Task_Assigned_Name, taskcrtdte as Task_Created_Date, taskupddte as Task_Updated_Date, taskcomments as Task_Comments INTO XLS("UserReport.xls",{headers:true}) FROM ? ',
									[ $scope.taskCode ]);
						}

					};

					init();

				});

// Client Details

app
		.controller(
				"clientdetailCtrl",
				function($scope, $rootScope, $timeout, $http, $window) {
					$rootScope.hideit = false;

					if ($window.sessionStorage.role == "Admin") {
						$rootScope.hideit1 = true;
					} else {
						$rootScope.hideit1 = false;
					}

					// Get all clients

					console
							.log("Inside getAlladdclientCode of clientdetailCtrl");

					var clientDetails = [];

					function init() {
						$http
								.get('rest/event/getAlladdclientCode')
								.success(
										function(clientCodedata) {

											$scope.clientCode;
											$scope.clientCode = clientCodedata;

											clientDetails = clientCodedata;
											console.log(clientDetails);

											console.log(clientCodedata);

											console
													.log("Success in getAlladdclientCode details!!");
										})
								.error(
										function() {
											console
													.log("Error while getting the client details!!");
										});
					}
					init();

					// Add Client Details in database here
					console.log("Inside addclient of clientdetailCtrl!!");

					$scope.addclient = function(pc) {
						console
								.log("Inside addclient function of clientdetailCtrl!!");
						console.log(pc);
						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueaddclientloop = true;

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "Client Name cannot be spaces";
						}

						else if (pc.clientname == undefined
								|| pc.clientname == "" || pc.clientname == null) {
							console.log("Checked when clientname is space");

							$scope.errormsg = "Client Name cannot be spaces";

						} else if (pc.clientcntno == undefined
								|| pc.clientcntno == ""
								|| pc.clientcntno == null) {

							console
									.log("Checked when client contact no is space");

							$scope.errormsg = "Client Contact No cannot be spaces";

						} else if (pc.clientfilenumber == undefined
								|| pc.clientfilenumber == ""
								|| pc.clientfilenumber == null) {
							console.log("Checked when filenumber  is space");

							$scope.errormsg = "File/Folder number cannot be spaces or should be numeric";

						} else if (pc.clientname != undefined
								&& pc.clientcntno != undefined
								&& pc.clientfilenumber != undefined) {

							var phoneno = /^\d{10}$/;

							// var validemailid =
							// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

							var validemailid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

							var panno = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;

							if (!phoneno.test(pc.clientcntno)) {
								console
										.log("Checked client contact no is enetered incorrectly");

								$scope.errormsg = "Enter Client Contact No in valid format e.g.'9933445566'";

							}

							if (!panno.test(pc.clientpanno)
									&& (pc.clientpanno != undefined && pc.clientpanno != "")) {
								console.log("checking entered valid PAN No");

								$scope.errormsg = "Enter PAN No in valid format e.g.'ATQPB1234T'";
							}

							if (!validemailid.test(pc.clientemailid)
									&& (pc.clientemailid != undefined && pc.clientemailid != "")) {
								console.log("checking entered valid Email Id");

								$scope.errormsg = "Enter Email Id in valid format 'example@gmail.com / example@yahoo.co.in'";
							}

							if (pc.clientfilenumber != undefined
									&& pc.clientfilenumber != "") {

								clientDetails
										.forEach(function(arrayItem) {

											console
													.log("continueaddclientloop: "
															+ continueaddclientloop);

											if (continueaddclientloop) {

												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);
												console
														.log("arrayItem.clientfilenumber: "
																+ arrayItem.clientfilenumber);

												console
														.log("pc.clientfilenumber: "
																+ pc.clientfilenumber);

												if (continueaddclientloop) {
													if (arrayItem.clientfilenumber == pc.clientfilenumber) {
														console
																.log("checking entered filenumber is already used for client");

														continueaddclientloop = false;

														$scope.errormsg = "File/Folder No. '"
																+ pc.clientfilenumber
																+ "' has already used for client '"
																+ arrayItem.clientname
																+ "'";

													}
												}
											}

										})

							}

							if (pc.clientname != undefined
									&& pc.clientname != "") {

								if (!continueaddclientloop) {
									continueaddclientloop = true;
								}

								clientDetails
										.forEach(function(arrayItem) {

											if (continueaddclientloop) {

												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);

												console.log("pc.clientname: "
														+ pc.clientname);

												if (continueaddclientloop) {
													if (arrayItem.clientname == pc.clientname) {
														console
																.log("checking entered client number is already present or not");

														continueaddclientloop = false;

														$scope.errormsg = "Client '"
																+ pc.clientname
																+ "' is already present";

													}
												}
											}

										})

							}

							if ($scope.errormsg == "") {

								$http
										.post('rest/event/addclientCode', pc)
										.success(
												function(clientdata) {
													console
															.log('Inside addclientCode');

													$scope.clientCode = clientdata;

													$scope.successmsg = "Client added successfully";
													console
															.log("Client added successfully!!");

													pc.clientname = null;
													pc.clientpanno = null;
													pc.clientcntno = 0;
													pc.clientemailid = null;
													pc.clientfilenumber = null;
													pc.clientcomments = null;

												})
										.error(
												function() {

													$scope.errormsg = "Error while inserting the client details or trying to insert same client name";
													console
															.log("Error while inserting the client details!!");

												});
							}

							$scope.showLabel = true;

						}

					};

					$scope.query = {}
					$scope.queryBy = '$'
					$scope.orderProp = "name";
					$scope.currentPage = 1;
					$scope.pageSize = 5;
					$scope.pageChangeHandler = function(num) {
						console.log('meals page changed to ' + num);
					};
					function OtherController($scope) {
						$scope.pageChangeHandler = function(num) {
							console.log('going to page ' + num);
						};
					}

					// update Client code
					$scope.updateclientCode = function($index, pc) {
						console.log(pc);
						console.log("Update Client Code");

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueupdclientloop = true;

						if (pc.discountAccess == "coded") {
							pc.namePublicDiscount = "";
						}

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "Client Name cannot be spaces";
						}

						else if (pc.clientname == undefined
								|| pc.clientname == "" || pc.clientname == null) {
							console.log("Checked when clientname is space");

							$scope.errormsg = "Client Name cannot be spaces";

						} else if (pc.clientcntno == undefined
								|| pc.clientcntno == ""
								|| pc.clientcntno == null) {

							console
									.log("Checked when client contact no is space");

							$scope.errormsg = "Client Contact No cannot be spaces";

						} else if (pc.clientfilenumber == undefined
								|| pc.clientfilenumber == ""
								|| pc.clientfilenumber == null) {
							console.log("Checked when filenumber  is space");

							$scope.errormsg = "File/Folder number cannot be spaces or should be numeric";

						} else if (pc.clientname != undefined
								&& pc.clientcntno != undefined
								&& pc.clientfilenumber != undefined) {

							var phoneno = /^\d{10}$/;

							// var validemailid =
							// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+([\.-]?\w+)*(\.\w{2,2})+$/;

							var validemailid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

							var panno = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;

							if (!phoneno.test(pc.clientcntno)) {
								console
										.log("Checked client contact no is enetered incorrectly");

								$scope.errormsg = "Enter Client Contact No in valid format e.g.'9933445566'";
							}
							if (!panno.test(pc.clientpanno)
									&& (pc.clientpanno != undefined && pc.clientpanno != "")) {
								console.log("checking entered valid PAN No");

								$scope.errormsg = "Enter PAN No in valid format e.g.'ATQPB1234T'";
							}
							if (!validemailid.test(pc.clientemailid)
									&& (pc.clientemailid != undefined && pc.clientemailid != "")) {
								console.log("checking entered valid Email Id");

								$scope.errormsg = "Enter Email Id in valid format 'example@gmail.com / example@yahoo.co.in'";
							}

							if ($scope.errormsg == "") {
								var clientnamefound = 'N';
								var filenofound = 'N';
							} else {
								var clientnamefound = "";
								var filenofound = "";
							}

							// To find same client name

							if (pc.clientname != undefined
									&& pc.clientname != ""
									&& $scope.errormsg == "") {

								clientDetails
										.forEach(function(arrayItem) {

											console
													.log("continueupdclientloop: "
															+ continueupdclientloop);

											if (continueupdclientloop) {
												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);

												console
														.log("arrayItem.clientid: "
																+ arrayItem.clientid);

												console.log("pc.clientname: "
														+ pc.clientname);

												console.log("pc.clientid: "
														+ pc.clientid);

												console.log("clientnamefound: "
														+ clientnamefound);

												if (continueupdclientloop) {

													if (arrayItem.clientname == pc.clientname) {

														if (arrayItem.clientid != pc.clientid) {
															console
																	.log("checking entered client number is already present or not");

															clientnamefound = 'Y';

															continueupdclientloop = false;

															$scope.errormsg = "Client '"
																	+ pc.clientname
																	+ "' is already present";
														}

													}

													console
															.log("clientnamefound: "
																	+ clientnamefound);

												}
											}

										})
							}

							// to check same file no

							if (pc.clientfilenumber != undefined
									&& pc.clientfilenumber != ""
									&& $scope.errormsg == "") {

								if (!continueupdclientloop) {
									continueupdclientloop == true;
								}

								clientDetails
										.forEach(function(arrayItem) {

											console
													.log("continueupdclientloop: "
															+ continueupdclientloop);

											if (continueupdclientloop) {

												console
														.log("arrayItem.clientid: "
																+ arrayItem.clientid);

												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);

												console
														.log("arrayItem.clientfilenumber: "
																+ arrayItem.clientfilenumber);

												console.log("pc.clientid: "
														+ pc.clientid);

												console.log("pc.clientname: "
														+ pc.clientname);

												console
														.log("pc.clientfilenumber: "
																+ pc.clientfilenumber);

												console.log("filenofound: "
														+ filenofound);

												if (continueupdclientloop) {

													if (arrayItem.clientname != pc.clientname) {
														if (arrayItem.clientid != pc.clientid) {
															if (arrayItem.clientfilenumber == pc.clientfilenumber) {
																console
																		.log("checking entered client file no is already present or not");

																filenofound = 'Y';

																continueupdclientloop = false;

																$scope.errormsg = "File No '"
																		+ pc.clientfilenumber
																		+ "' is already present for Client '"
																		+ arrayItem.clientname
																		+ "'";
															}
														}
													}

													console.log("filenofound: "
															+ filenofound);
												}

											}

										})
							}

							console.log("clientnamefound: " + clientnamefound);

							console.log("filenofound: " + filenofound);

							// if ($scope.errormsg == "") {
							if (clientnamefound == 'N' && filenofound == 'N') {

								$scope.successmsg = "";
								$scope.errormsg = "";

								$http
										.post('rest/event/updateclientCode', pc)
										.success(
												function(clientdata) {

													$scope.successmsg = "Client details for '"
															+ pc.clientname
															+ "' updated successfully";

													console
															.log("update successful for client details");

													console.log(clientdata);

													$scope.clientdata = clientdata;

													init();

												})
										.error(
												function(clientdata) {

													$scope.errormsg = "Error while updating client details for '"
															+ pc.clientname
															+ "'";

													console
															.log("Error while updating client details");
													console.log(clientdata);
												});
							}

							$scope.showLabel = true;

						}

					};

					// delete client details
					$scope.deleteclientCode = function($index, clientid) {

						console.log("Inside delete client code");
						console.log(clientid);

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						if ($window.sessionStorage.role == "Admin") {

							$http
									.post('rest/event/deleteclientCode',
											clientid)
									.success(
											function(clientdata) {
												console
														.log("delete successful for client details");

												$scope.successmsg = "Client details deleted successfully";

												console.log(clientdata);

												$scope.clientdata = clientdata;
												init();
											})
									.error(
											function(clientdata) {
												console
														.log("Error while deleting client details");

												$scope.errormsg = "Error while deleting client details";

												console.log(clientdata);
											});

						}

						if ($window.sessionStorage.role == "User") {
							console
									.log("Delete Authority is not provided for User role in client details");
							$scope.errormsg = "Not authorized to delete Client Details, Please check with Admin";
						}

						$scope.showLabel = true;

					};

				});

// Task Details

app
		.controller(
				"taskCtrl",
				function($scope, $rootScope, $timeout, $http, $window) {

					// insert Task Details in database here
					console.log("Inside taskCtrl!!");
					$rootScope.hideit = false;

					// Get User Details

					var userDetails = [];

					console.log("Inside getAllUserloginDetail");

					function init2() {
						$http
								.get('rest/event/getAllUserloginDetail')
								.success(
										function(userdata) {
											$scope.userCode;
											$scope.userCode = userdata;
											console.log(userdata);

											userDetails = userdata;
											console.log(userDetails);

											console
													.log("Success in getAllUserloginDetail!!");

										})
								.error(
										function() {
											console
													.log("Error in getAllUserloginDetail!!");
										});
					}
					init2();// init

					// Get Client Details
					var clientDetails = [];

					function init1() {
						$http
								.get('rest/event/getAlladdclientCode')
								.success(
										function(clientCodedata) {

											$scope.clientCode;
											$scope.clientCode = clientCodedata;

											clientDetails = clientCodedata;
											console.log(clientDetails);

											console.log(clientCodedata);

											console
													.log("Success in getAlladdclientCode details in taskCtrl!!");
										})
								.error(
										function() {
											console
													.log("Error while getting the client details in taskCtrl!!");
										});
					}
					init1();

					// Get Task Details
					var taskDetails = [];

					console.log("Inside getAlltaskCode of taskCtrl");

					function init() {

						$http
								.get('rest/event/getAlltaskCode')
								.success(
										function(taskdata) {
											console
													.log("success in getting the task details !!");

											// here writing condition to check
											// admin or user

											console
													.log("$rootScope.role checking taskctrl: "
															+ $rootScope.role);
											console
													.log("$window.sessionStorage.role taskctrl: "
															+ $window.sessionStorage.role);

											// if ($rootScope.role == "Admin") {
											if ($window.sessionStorage.role == "Admin") {

												$scope.myVarHide = false;

												$rootScope.hideit1 = true;

												console
														.log("$rootScope.role is admin in taskCtrl: "
																+ $rootScope.role);
												console
														.log("$window.sessionStorage.role is admin in taskctrl: "
																+ $window.sessionStorage.role);

											} else {
												$scope.myVarHide = true;

												$rootScope.hideit1 = false;

												console
														.log("$rootScope.role is user in taskCtrl: "
																+ $rootScope.role);
												console
														.log("$window.sessionStorage.role is user in taskctrl: "
																+ $window.sessionStorage.role);
											}

											$scope.taskCode;
											$scope.taskCode = taskdata;
											console.log(taskdata);

											taskDetails = taskdata;
											console.log(taskDetails);

										})
								.error(
										function() {
											console
													.log("Error while getting the new task details !!");
										});
					}
					init();// init

					// addTask
					$scope.addtask = function(pc) {
						console.log(pc);

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueaddtaskloop = true;

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "Client Name cannot be spaces";
						}

						else if (pc.clientnames == undefined) {
							console.log("Checked when clientname is space");

							$scope.errormsg = "Client Name cannot be spaces";

						} else if (pc.servicetype == undefined) {

							console.log("Checked when service is space");

							$scope.errormsg = "Service Type cannot be unselected";

						} else if (pc.taskstat == undefined) {
							console.log("Checked when task status is space");

							$scope.errormsg = "Task status cannot be unselected";

						} else if (pc.taskassigneename == undefined) {

							console.log("Checked when assignee name is space");

							$scope.errormsg = "Task Assignee name cannot be spaces";

						} else if (pc.taskassignedname == undefined) {
							console
									.log("Checked when taskassignedname  is space");

							$scope.errormsg = "Task Assigned name cannot be spaces";

						} else if (pc.taskassigneddte == undefined) {

							console
									.log("Checked when taskassigneddte is space or incorrect format");

							$scope.errormsg = "Task Assigned Date cannot be spaces or enter in valid date format YYYY-MM-DD";

						}
						/*
						 * else if (pc.taskcompletedte == undefined) {
						 * 
						 * console .log("Checked when taskcompletedte is
						 * space");
						 * 
						 * $scope.errormsg = "Task Completed Date cannot be
						 * spaces or or enter in valid date format YYYY-MM-DD"; }
						 */
						// else if (pc.feecharged == undefined) {
						// console.log("Checked when feecharged is space");
						// $scope.errormsg = "Fee charged cannot be spaces or
						// should be numeric";
						// }
						else if (pc.clientnames != undefined
								&& pc.servicetype != undefined
								&& pc.taskstat != undefined
								&& pc.taskassigneename != undefined
								&& pc.taskassignedname != undefined
								&& pc.taskassigneddte != undefined) {
							// && pc.taskcompletedte != undefined) {

							// && pc.feecharged != undefined) {

							console.log("Inside If all true cond");

							// var taskdate =
							// /^(((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])-((19|[2-9]\d)\d{2}))|((0[13456789]|1[012])-(0[1-9]|[12]\d|30)-((19|[2-9]\d)\d{2}))|(02-(0[1-9]|1\d|2[0-8])-((19|[2-9]\d)\d{2}))|(02-29-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

							var taskdate = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

							if (!taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined) {
								console
										.log("Checked Task Completed Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Completed Date in valid format YYYY-MM-DD";
							}

							if (!taskdate.test(pc.taskduedte)
									&& pc.taskduedte != undefined) {
								console
										.log("Checked Task Due Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Due Date in valid format YYYY-MM-DD";
							}

							if (!taskdate.test(pc.taskassigneddte)) {
								console
										.log("Checked Task Assigned Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Assigned Date in valid format YYYY-MM-DD";
							}

							console.log("taskdate.test(pc.taskassigneddte): "
									+ taskdate.test(pc.taskassigneddte));
							console.log("taskdate.test(pc.taskcompletedt): "
									+ taskdate.test(pc.taskcompletedte));
							console.log("taskdate.test(pc.taskduedte): "
									+ taskdate.test(pc.taskduedte));
							console.log("$scope.errormsg: " + $scope.errormsg);

							if ((taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined && (taskdate
									.test(pc.taskassigneddte)))) {
								if (pc.taskcompletedte < pc.taskassigneddte) {
									console
											.log("Checked Task completed Date is less than assigned date");

									$scope.errormsg = "Task completed Date cannot be less than Task Assigned Date";
								}

							}

							if ((taskdate.test(pc.taskduedte)
									&& (taskdate.test(pc.taskassigneddte)) && pc.taskduedte != undefined)) {
								if (pc.taskduedte < pc.taskassigneddte) {
									console
											.log("Checked Task Due Date is less than assigned date");

									$scope.errormsg = "Task Due Date cannot be less than Task Assigned Date";
								}

							}

							if (taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined) {

								if (taskdate.test(pc.taskassigneddte)
										&& pc.taskassigneddte != undefined) {

									if (pc.taskcompletedte < pc.taskassigneddte) {
										console
												.log("Checked Task Completed Date is less than task assigned date");

										$scope.errormsg = "Task Completed Date cannot be less than Task Assigned Date";
									}
								}

							}

							if (pc.feecharged == undefined
									|| pc.feecharged == "") {
								pc.feecharged = 0;
							}

							if (pc.feereceived == undefined
									|| pc.feereceived == "") {
								pc.feereceived = 0;
							}

							pc.feeoutstanding = 0;

							if (pc.feecharged != undefined
									|| pc.feecharged != "") {

								if (pc.feecharged == 0) {
									pc.feeoutstanding == 0;
									pc.feereceived = 0;
								}

								if (pc.feereceived > pc.feecharged) {
									console
											.log("Checked Fee Recceived is greater than Fee Charged");

									$scope.errormsg = "Fee Received cannot be greater than Fee Charged";
								}

								if (pc.feecharged > pc.feereceived) {

									console
											.log("Checked Fee Charged is greater than Fee Received");

									pc.feeoutstanding = pc.feecharged
											- pc.feereceived;
								}

								console.log("feecharged: " + pc.feecharged);

								console.log("feereceived: " + pc.feereceived);

								console.log("feeoutstanding: "
										+ pc.feeoutstanding);

							}

							console.log("Checking Fee charged = Fee received");

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskstat != undefined
									&& pc.taskstat != ""
									&& pc.feecharged != undefined
									&& pc.feecharged != ""
									&& pc.feereceived != undefined
									&& pc.feereceived != "") {

								if (pc.taskstat == "completed") {
									if (pc.feecharged != pc.feereceived) {
										console
												.log("Checked Fee Charged = Fee Received when task staus is completed");

										$scope.errormsg = "Task status cannot be changed to 'Completed' staus as Fee Charged is not equal to Fee Received";
									}
								}
							}

							console.log("feecharged: " + pc.feecharged);

							console.log("feereceived: " + pc.feereceived);

							console.log("feeoutstanding: " + pc.feeoutstanding);

							console
									.log("$scope.successmsg: "
											+ $scope.errormsg);

							if ($scope.errormsg == "") {
								var found = 'N';
								var found1 = 'N';
								var found2 = 'N';
								var duptaskfound = 'N';
							} else {
								var found = "";
								var found1 = "";
								var found2 = "";
								var duptaskfound = "";
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& $scope.errormsg == "") {
								clientDetails
										.forEach(function(arrayItem) {

											if (continueaddtaskloop) {

												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);

												console.log("pc.clientname: "
														+ pc.clientnames);

												console
														.log("continueaddtaskloop: "
																+ continueaddtaskloop);

												console.log("found: " + found);

												if (continueaddtaskloop) {

													if (arrayItem.clientname == pc.clientnames) {
														console
																.log("Entered client number is present in clientdetail table");
														found = 'Y';
														continueaddtaskloop = false;

														console.log("found: "
																+ found);
														console
																.log("continueaddtaskloop: "
																		+ continueaddtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found: "
															+ found);

													if (found == 'N') {
														console
																.log("checking entered client number is present or not in clientdetail table");

														$scope.errormsg = "Client '"
																+ pc.clientnames
																+ "' is not present";
													}
												}
											}

										})
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskassigneename != undefined
									&& pc.taskassigneename != ""
									&& $scope.errormsg == "") {

								if (!continueaddtaskloop) {
									continueaddtaskloop = true;
								}

								userDetails
										.forEach(function(arrayItem) {

											if (continueaddtaskloop) {

												console
														.log("arrayItem.username: "
																+ arrayItem.username);

												console
														.log("pc.taskassigneename: "
																+ pc.taskassigneename);

												console
														.log("continueaddtaskloop: "
																+ continueaddtaskloop);

												console
														.log("found1: "
																+ found1);

												if (continueaddtaskloop) {

													if (arrayItem.username == pc.taskassigneename) {
														console
																.log("Entered assignee name is present in userdetail table");
														found1 = 'Y';
														continueaddtaskloop = false;

														console.log("found1: "
																+ found1);
														console
																.log("continueaddtaskloop: "
																		+ continueaddtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found1: "
															+ found1);

													if (found1 == 'N') {
														console
																.log("checking entered taskassignee name is present or not in userdetail table");

														$scope.errormsg = "Assignee Name '"
																+ pc.taskassigneename
																+ "' is not present";
													}

												}
											}

										})
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskassignedname != undefined
									&& pc.taskassignedname != ""
									&& $scope.errormsg == "") {

								if (!continueaddtaskloop) {
									continueaddtaskloop = true;
								}

								userDetails
										.forEach(function(arrayItem) {

											if (continueaddtaskloop) {

												console
														.log("arrayItem.username: "
																+ arrayItem.username);

												console
														.log("pc.taskassignedname: "
																+ pc.taskassignedname);

												console
														.log("continueaddtaskloop: "
																+ continueaddtaskloop);

												console
														.log("found2: "
																+ found2);

												if (continueaddtaskloop) {

													if (arrayItem.username == pc.taskassignedname) {
														console
																.log("Entered assigned name is present in userdetail table");
														found2 = 'Y';
														continueaddtaskloop = false;

														console.log("found2: "
																+ found2);
														console
																.log("continueaddtaskloop: "
																		+ continueaddtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found2: "
															+ found2);

													if (found2 == 'N') {
														console
																.log("checking entered taskassigned name is present or not in userdetail table");

														$scope.errormsg = "Assigned Name '"
																+ pc.taskassignedname
																+ "' is not present";
													}

												}
											}

										})
							}

							/*
							 * if (pc.clientnames != undefined && pc.clientnames != "" &&
							 * pc.servicetype != undefined && pc.servicetype != "" &&
							 * pc.taskstat != undefined && pc.taskstat != "" &&
							 * pc.taskassigneename != undefined &&
							 * pc.taskassigneename != "" && pc.taskassignedname !=
							 * undefined && pc.taskassignedname != "" &&
							 * $scope.errormsg == "") { taskDetails
							 * .forEach(function(arrayItem) { console
							 * .log("arrayItem.clientnames: " +
							 * arrayItem.clientnames);
							 * 
							 * console.log("pc.clientnames: " + pc.clientnames);
							 * 
							 * console.log("continueaddtaskloop: " +
							 * continueaddtaskloop);
							 * 
							 * console.log("duptaskfound: " + duptaskfound);
							 * 
							 * if (!continueaddtaskloop) { continueaddtaskloop =
							 * true; }
							 * 
							 * console.log("continueaddtaskloop: " +
							 * continueaddtaskloop);
							 * 
							 * if (continueaddtaskloop) {
							 * 
							 * if (arrayItem.clientnames == pc.clientnames &&
							 * arrayItem.servicetype == pc.servicetype &&
							 * arrayItem.taskassigneename == pc.taskassigneename &&
							 * arrayItem.taskassignedname == pc.taskassignedname &&
							 * arrayItem.taskassigneddte == pc.taskassigneddte &&
							 * arrayItem.taskduedte == pc.taskduedte &&
							 * arrayItem.taskcompletedte == pc.taskcompletedte) {
							 * 
							 * if (arrayItem.taskstat == 'Completed' &&
							 * pc.taskstat == 'Completed') { console
							 * .log("Entered Task Details are already present in
							 * taskdetail table - Duplicate"); duptaskfound =
							 * 'Y'; continueaddtaskloop = false;
							 * 
							 * console .log(duptaskfound); console
							 * .log("continueaddtaskloop: " +
							 * continueaddtaskloop);
							 * 
							 * $scope.successmsg = ""; $scope.errormsg = ""; }
							 * else { console .log("Entered Task Details are not
							 * present in taskdetail table - Duplicate");
							 * duptaskfound = 'N'; continueaddtaskloop = false;
							 * 
							 * console .log(duptaskfound); console
							 * .log("continueaddtaskloop: " +
							 * continueaddtaskloop);
							 * 
							 * $scope.successmsg = ""; $scope.errormsg = ""; } }
							 * 
							 * console.log(duptaskfound);
							 * 
							 * if (duptaskfound == 'Y') { console .log("checking
							 * task details are already present or not in
							 * taskdetail table - Duplicate Entry");
							 * 
							 * $scope.errormsg = "Task Details '" +
							 * pc.clientnames + "' , '" + pc.servicetype + "'
							 * are already present with " + pc.taskstat + "
							 * Staus"; } } }) }
							 */

							// if ($scope.errormsg == "") {
							/*
							 * if (found == 'Y' && found1 == 'Y' && found2 ==
							 * 'Y' && duptaskfound == 'N') {
							 */

							console.log("$scope.errormsg: " + $scope.errormsg);

							console.log("found: " + found);
							console.log("found1: " + found1);
							console.log("found2: " + found2);

							if (found == 'Y' && found1 == 'Y' && found2 == 'Y') {
								$http
										.post('rest/event/addtaskcode', pc)
										.success(
												function(taskdata) {
													console
															.log('Inside add task code success condition');
													$scope.taskcode = taskdata;
													$scope.successmsg = "New Task Created successfully";
													console
															.log("New Task Created successfully");

													pc.clientnames = "";

													console.log("clientnames: "
															+ pc.clientnames);

													pc.clientnames = null;

													pc.servicetype = null;

													pc.taskstat = null;

													pc.taskassigneename = null;
													pc.taskassignedname = null;

													pc.taskassigneddte = null;
													pc.taskduedte = null;
													pc.taskcompletedte = null;

													pc.feecharged = 0;
													pc.feereceived = 0;
													pc.feeoutstanding = 0;

													pc.taskcomments = null;

												})
										.error(
												function() {
													$scope.errormsg = "Error while inserting the task details";
													console
															.log("Error while inserting the task details");
												});

							}
							$scope.showLabel = true;

						}

					};

					$scope.query = {}
					$scope.queryBy = '$'
					$scope.orderProp = "name";
					$scope.currentPage = 1;
					$scope.pageSize = 5;
					$scope.pageChangeHandler = function(num) {
						console.log('taskCtrl page changed to ' + num);
					};
					function OtherController($scope) {
						$scope.pageChangeHandler = function(num) {
							console.log('taskCtrl going to page ' + num);
						};
					}

					// update task code

					$scope.updatetaskcode = function($index, pc) {
						console.log(pc);
						console.log("Inside updatetaskcode");

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueupdtaskloop = true;

						if (pc.discountAccess == "coded") {
							pc.namePublicDiscount = "";
						}

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "Client Name cannot be spaces";
						}

						else if (pc.clientnames == undefined
								|| pc.clientnames == ""
								|| pc.clientnames == null) {
							console.log("Checked when clientname is space");

							$scope.errormsg = "Client Name cannot be spaces";

						} else if (pc.servicetype == undefined
								|| pc.servicetype == ""
								|| pc.servicetype == null) {

							console.log("Checked when service is space");

							$scope.errormsg = "Service Type cannot be unselected";

						} else if (pc.taskstat == undefined
								|| pc.taskstat == "" || pc.taskstat == null) {
							console.log("Checked when task status is space");

							$scope.errormsg = "Task status cannot be unselected";

						} else if (pc.taskassigneename == undefined
								|| pc.taskassigneename == ""
								|| pc.taskassigneename == null) {

							console.log("Checked when assignee name is space");

							$scope.errormsg = "Task Assignee name cannot be spaces";

						} else if (pc.taskassignedname == undefined
								|| pc.taskassignedname == ""
								|| pc.taskassignedname == null) {
							console
									.log("Checked when taskassignedname  is space");

							$scope.errormsg = "Task Assigned name cannot be spaces";

						} else if (pc.taskassigneddte == undefined
								|| pc.taskassigneddte == ""
								|| pc.taskassigneddte == null) {

							console
									.log("Checked when taskassigneddte is space or incorrect format");

							$scope.errormsg = "Task Assigned Date cannot be spaces or enter in valid date format YYYY-MM-DD";

						}
						/*
						 * else if (pc.taskcompletedte == undefined) {
						 * 
						 * console .log("Checked when taskcompletedte is
						 * space");
						 * 
						 * $scope.errormsg = "Task Completed Date cannot be
						 * spaces or or enter in valid date format YYYY-MM-DD"; }
						 */
						// else if (pc.feecharged == undefined) {
						// console.log("Checked when feecharged is space");
						// $scope.errormsg = "Fee charged cannot be spaces or
						// should be numeric";
						// }
						else if (pc.clientnames != undefined
								&& pc.servicetype != undefined
								&& pc.taskstat != undefined
								&& pc.taskassigneename != undefined
								&& pc.taskassignedname != undefined
								&& pc.taskassigneddte != undefined) {
							// && pc.taskcompletedte != undefined) {
							// && pc.feecharged != undefined) {

							console.log("Inside If all true cond");

							// var taskdate =
							// /^(((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])-((19|[2-9]\d)\d{2}))|((0[13456789]|1[012])-(0[1-9]|[12]\d|30)-((19|[2-9]\d)\d{2}))|(02-(0[1-9]|1\d|2[0-8])-((19|[2-9]\d)\d{2}))|(02-29-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

							var taskdate = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

							if (!taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined) {
								console
										.log("Checked Task Completed Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Completed Date in valid format YYYY-MM-DD";
							}

							if (!taskdate.test(pc.taskduedte)
									&& pc.taskduedte != undefined) {
								console
										.log("Checked Task Due Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Due Date in valid format YYYY-MM-DD";
							}

							if (!taskdate.test(pc.taskassigneddte)) {
								console
										.log("Checked Task Assigned Date has enetered incorrectly");

								$scope.errormsg = "Enter Task Assigned Date in valid format YYYY-MM-DD";
							}

							console.log("taskdate.test(pc.taskassigneddte): "
									+ taskdate.test(pc.taskassigneddte));
							console.log("taskdate.test(pc.taskcompletedt): "
									+ taskdate.test(pc.taskcompletedte));
							console.log("taskdate.test(pc.taskduedte): "
									+ taskdate.test(pc.taskduedte));
							console.log("$scope.errormsg: " + $scope.errormsg);

							if ((taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined && (taskdate
									.test(pc.taskassigneddte)))) {
								if (pc.taskcompletedte < pc.taskassigneddte) {
									console
											.log("Checked Task completed Date is less than assigned date");

									$scope.errormsg = "Task completed Date cannot be less than Task Assigned Date";
								}

							}

							if ((taskdate.test(pc.taskduedte)
									&& (taskdate.test(pc.taskassigneddte)) && pc.taskduedte != undefined)) {
								if (pc.taskduedte < pc.taskassigneddte) {
									console
											.log("Checked Task Due Date is less than assigned date");

									$scope.errormsg = "Task Due Date cannot be less than Task Assigned Date";
								}

							}

							if (taskdate.test(pc.taskcompletedte)
									&& pc.taskcompletedte != undefined) {

								if (taskdate.test(pc.taskassigneddte)
										&& pc.taskassigneddte != undefined) {

									if (pc.taskcompletedte < pc.taskassigneddte) {
										console
												.log("Checked Task Completed Date is less than task assigned date");

										$scope.errormsg = "Task Completed Date cannot be less than Task Assigned Date";
									}
								}

							}

							if (pc.feecharged == undefined
									|| pc.feecharged == "") {
								pc.feecharged = 0;
							}

							if (pc.feereceived == undefined
									|| pc.feereceived == "") {
								pc.feereceived = 0;
							}

							pc.feeoutstanding = 0;

							if (pc.feecharged != undefined
									|| pc.feecharged != "") {

								if (pc.feecharged == 0) {
									pc.feeoutstanding == 0;
									pc.feereceived = 0;
								}

								if (pc.feereceived > pc.feecharged) {
									console
											.log("Checked Fee Recceived is greater than Fee Charged");

									$scope.errormsg = "Fee Received cannot be greater than Fee Charged";
								}

								if (pc.feecharged > pc.feereceived) {
									pc.feeoutstanding = pc.feecharged
											- pc.feereceived;
								}

								console.log("feecharged: " + pc.feecharged);

								console.log("feereceived: " + pc.feereceived);

								console.log("feeoutstanding: "
										+ pc.feeoutstanding);

							}

							console.log("Checking Fee charged = Fee received");

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskstat != undefined
									&& pc.taskstat != ""
									&& pc.feecharged != undefined
									&& pc.feecharged != ""
									&& pc.feereceived != undefined
									&& pc.feereceived != "") {
								if (pc.taskstat == "completed") {
									if (pc.feecharged != pc.feereceived) {
										console
												.log("Checked Fee Charged = Fee Received when task staus is completed");

										$scope.errormsg = "Task status cannot be changed to 'Completed' staus as Fee Charged is not equal to Fee Received";
									}
								}
							}

							console.log("feecharged: " + pc.feecharged);

							console.log("feereceived: " + pc.feereceived);

							console.log("feeoutstanding: " + pc.feeoutstanding);

							console
									.log("$scope.successmsg: "
											+ $scope.errormsg);

							if ($scope.errormsg == "") {
								var found = 'N';
								var found1 = 'N';
								var found2 = 'N';
								var duptaskfound = 'N';
							} else {
								var found = "";
								var found1 = "";
								var found2 = "";
								var duptaskfound = "";
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& $scope.errormsg == "") {
								clientDetails
										.forEach(function(arrayItem) {

											if (continueupdtaskloop) {

												console
														.log("arrayItem.clientname: "
																+ arrayItem.clientname);

												console.log("pc.clientname: "
														+ pc.clientnames);

												console
														.log("continueupdtaskloop: "
																+ continueupdtaskloop);

												console.log("found: " + found);

												if (continueupdtaskloop) {

													if (arrayItem.clientname == pc.clientnames) {
														console
																.log("Entered client number is present in clientdetail table");
														found = 'Y';
														continueupdtaskloop = false;

														console.log("found: "
																+ found);
														console
																.log("continueupdtaskloop: "
																		+ continueupdtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found: "
															+ found);

													if (found == 'N') {
														console
																.log("checking entered client number is present or not in clientdetail table");

														$scope.errormsg = "Client '"
																+ pc.clientnames
																+ "' is not present";
													}
												}
											}

										})
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskassigneename != undefined
									&& pc.taskassigneename != ""
									&& $scope.errormsg == "") {

								if (!continueupdtaskloop) {
									continueupdtaskloop = true;
								}

								userDetails
										.forEach(function(arrayItem) {

											if (continueupdtaskloop) {

												console
														.log("arrayItem.username: "
																+ arrayItem.username);

												console
														.log("pc.taskassigneename: "
																+ pc.taskassigneename);

												console
														.log("continueupdtaskloop: "
																+ continueupdtaskloop);

												console
														.log("found1: "
																+ found1);

												if (continueupdtaskloop) {

													if (arrayItem.username == pc.taskassigneename) {
														console
																.log("Entered assignee name is present in userdetail table");
														found1 = 'Y';
														continueupdtaskloop = false;

														console.log("found1: "
																+ found1);
														console
																.log("continueupdtaskloop: "
																		+ continueupdtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found1: "
															+ found1);

													if (found1 == 'N') {
														console
																.log("checking entered taskassignee name is present or not in userdetail table");

														$scope.errormsg = "Assignee Name '"
																+ pc.taskassigneename
																+ "' is not present";
													}

												}
											}

										})
							}

							if (pc.clientnames != undefined
									&& pc.clientnames != ""
									&& pc.taskassignedname != undefined
									&& pc.taskassignedname != ""
									&& $scope.errormsg == "") {

								if (!continueupdtaskloop) {
									continueupdtaskloop = true;
								}

								userDetails
										.forEach(function(arrayItem) {

											if (continueupdtaskloop) {

												console
														.log("arrayItem.username: "
																+ arrayItem.username);

												console
														.log("pc.taskassignedname: "
																+ pc.taskassignedname);

												console
														.log("continueupdtaskloop: "
																+ continueupdtaskloop);

												console
														.log("found2: "
																+ found2);

												if (continueupdtaskloop) {

													if (arrayItem.username == pc.taskassignedname) {
														console
																.log("Entered assigned name is present in userdetail table");
														found2 = 'Y';
														continueupdtaskloop = false;

														console.log("found2: "
																+ found2);
														console
																.log("continueupdtaskloop: "
																		+ continueupdtaskloop);

														$scope.successmsg = "";
														$scope.errormsg = "";

													}

													console.log("found2: "
															+ found2);

													if (found2 == 'N') {
														console
																.log("checking entered taskassigned name is present or not in userdetail table");

														$scope.errormsg = "Assigned Name '"
																+ pc.taskassignedname
																+ "' is not present";
													}

												}
											}

										})
							}

							/*
							 * if (pc.clientnames != undefined && pc.clientnames != "" &&
							 * pc.servicetype != undefined && pc.servicetype != "" &&
							 * pc.taskstat != undefined && pc.taskstat != "" &&
							 * pc.taskassigneename != undefined &&
							 * pc.taskassigneename != "" && pc.taskassignedname !=
							 * undefined && pc.taskassignedname != "" &&
							 * $scope.errormsg == "") { taskDetails
							 * .forEach(function(arrayItem) { console
							 * .log("arrayItem.clientnames: " +
							 * arrayItem.clientnames);
							 * 
							 * console.log("pc.clientnames: " + pc.clientnames);
							 * 
							 * console.log("continueupdtaskloop: " +
							 * continueupdtaskloop);
							 * 
							 * console.log("duptaskfound: " + duptaskfound);
							 * 
							 * if (!continueupdtaskloop) { continueupdtaskloop =
							 * true; }
							 * 
							 * console.log("continueupdtaskloop: " +
							 * continueupdtaskloop);
							 * 
							 * if (continueupdtaskloop) {
							 * 
							 * if (arrayItem.clientnames == pc.clientnames &&
							 * arrayItem.servicetype == pc.servicetype &&
							 * arrayItem.taskassigneename == pc.taskassigneename &&
							 * arrayItem.taskassignedname == pc.taskassignedname &&
							 * arrayItem.taskassigneddte == pc.taskassigneddte &&
							 * arrayItem.taskduedte == pc.taskduedte &&
							 * arrayItem.taskcompletedte == pc.taskcompletedte) {
							 * 
							 * if (arrayItem.taskstat == 'Completed' &&
							 * pc.taskstat == 'Completed') { console
							 * .log("Entered Task Details are already present in
							 * taskdetail table - Duplicate"); duptaskfound =
							 * 'Y'; continueupdtaskloop = false;
							 * 
							 * console .log(duptaskfound); console
							 * .log("continueupdtaskloop: " +
							 * continueupdtaskloop);
							 * 
							 * $scope.successmsg = ""; $scope.errormsg = ""; }
							 * else { console .log("Entered Task Details are not
							 * present in taskdetail table - Duplicate");
							 * duptaskfound = 'N'; continueupdtaskloop = false;
							 * 
							 * console .log(duptaskfound); console
							 * .log("continueupdtaskloop: " +
							 * continueupdtaskloop);
							 * 
							 * $scope.successmsg = ""; $scope.errormsg = ""; } }
							 * 
							 * console.log(duptaskfound);
							 * 
							 * if (duptaskfound == 'Y') { console .log("checking
							 * task details are already present or not in
							 * taskdetail table - Duplicate Entry");
							 * 
							 * $scope.errormsg = "Task Details '" +
							 * pc.clientnames + "' , '" + pc.servicetype + "'
							 * are already present with " + pc.taskstat + "
							 * Staus"; } } }) }
							 */

							// if ($scope.errormsg == "") {
							/*
							 * if (found == 'Y' && found1 == 'Y' && found2 ==
							 * 'Y' && duptaskfound == 'N') {
							 */

							console.log("$scope.errormsg: " + $scope.errormsg);

							console.log("found: " + found);
							console.log("found1: " + found1);
							console.log("found2: " + found2);

							if (found == 'Y' && found1 == 'Y' && found2 == 'Y') {

								$http
										.post('rest/event/updatetaskcode', pc)
										.success(
												function(taskdata) {
													console
															.log("update successful for task details");

													$scope.successmsg = "Task details for client '"
															+ pc.clientnames
															+ "' , Service '"
															+ pc.servicetype
															+ "' , Task-Status '"
															+ pc.taskstat
															+ "' updated successfully";

													console.log(taskdata);

													$scope.taskdata = taskdata;
													init();

												})
										.error(
												function(taskdata) {
													console
															.log("Error while updating task details");

													$scope.errormsg = "Error while updating task details for client '"
															+ pc.clientnames
															+ "' , Service '"
															+ pc.servicetype
															+ "' , Task-Status '"
															+ pc.taskstat
															+ "' updated successfully";

													console.log(taskdata);

													$scope.errormsg = "Error while updating task details";

												});

							}
							$scope.showLabel = true;

						}

					};

					// delete task code..final
					$scope.deletetaskcode = function($index, taskid) {
						console.log("Inside Delete Task Code");

						console.log(taskid);

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						if ($window.sessionStorage.role == "Admin") {
							$http
									.post('rest/event/deletetaskcode', taskid)
									.success(
											function(taskdata) {
												console
														.log("delete successful for task details");

												$scope.successmsg = "User details deleted successfully";

												console.log(taskdata);

												$scope.taskdata = taskdata;
												init();
											})
									.error(
											function(taskdata) {
												console
														.log("Error while Deleting task details");

												$scope.errormsg = "Error while deleting task details";

												console.log(taskdata);
											});
						}

						if ($window.sessionStorage.role == "User") {
							console
									.log("Delete Authority is not provided for User role for task details");
							$scope.errormsg = "Not authorized to delete Task Details, Please check with Admin";
						}

						$scope.showLabel = true;

					};

				});

// User Details

app
		.controller(
				"userCtrl",
				function($scope, $rootScope, $timeout, $http, $window) {

					// insert User Details in database here
					console.log("Inside userCtrl!!");
					$rootScope.hideit = false;

					if ($window.sessionStorage.role == "Admin") {
						$rootScope.hideit1 = true;
					} else {
						$rootScope.hideit1 = false;
					}

					console.log("$rootScope.role in userCtrl: "
							+ $rootScope.role)

					console.log("$window.sessionStorage.role in userctrl: "
							+ $window.sessionStorage.role);

					var userDetails = [];
					// get user detail
					console.log("Inside getAllUserloginDetail");

					function init() {
						$http
								.get('rest/event/getAllUserloginDetail')
								.success(
										function(userdata) {
											$scope.userCode;
											$scope.userCode = userdata;
											console.log(userdata);

											userDetails = userdata;
											console.log(userDetails);

											console
													.log("Success in getAllUserloginDetail!!");

										})
								.error(
										function() {
											console
													.log("Error in getAllUserloginDetail!!");
										});
					}
					init();// init

					$scope.adduser = function(pc) {
						console.log(pc);

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueadduserloop = true;

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "User Name cannot be spaces";
						}

						else if (pc.username == undefined || pc.username == ""
								|| pc.username == null) {
							console.log("Checked when username is space");

							$scope.errormsg = "User Name cannot be spaces";

						} else if (pc.usernameid == undefined
								|| pc.usernameid == "" || pc.usernameid == null) {
							console.log("Checked when usernameid is space");

							$scope.errormsg = "User Name-Id cannot be spaces";

						} else if (pc.userpwd == undefined || pc.userpwd == ""
								|| pc.userpwd == null) {

							console.log("Checked when user password is space");

							$scope.errormsg = "User Password cannot be spaces";

						} else if (pc.userrole == undefined
								|| pc.userrole == "" || pc.userrole == null) {

							console.log("Checked when user role is space");

							$scope.errormsg = "User Role cannot be spaces";

						} else if (pc.username != undefined
								&& pc.usernameid != undefined
								&& pc.userpwd != undefined
								&& pc.userrole != undefined) {
							var phoneno = /^\d{10}$/;

							// var validemailid =
							// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
							// var validemailid =
							// /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([com
							// net org]{3}(?:\.[a-z]{6})?)$/;

							var validemailid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

							console.log(pc.usercntno);
							console.log(pc.useremailid);

							console.log(phoneno.test(pc.usercntno));
							console.log(validemailid.test(pc.useremailid));

							console.log("Username" + pc.username);

							if (!phoneno.test(pc.usercntno)
									&& (pc.usercntno != undefined && pc.usercntno != "")) {
								console
										.log("Checked client contact no is enetered incorrectly");

								$scope.errormsg = "Enter Client Contact No in valid format like e.g.'9933445566'";

							} else if (!validemailid.test(pc.useremailid)
									&& (pc.useremailid != undefined && pc.useremailid != "")) {

								console.log("checking entered valid Email Id");

								$scope.errormsg = "Enter Email Id in valid format like e.g.'example@gmail.com / example@yahoo.co.in'";

							} else {

								console.log("Username:" + pc.username);

								console.log(userDetails);

								if (pc.usernameid != undefined
										&& pc.usernameid != "") {

									console.log("Username11:" + pc.usernameid);

									userDetails
											.forEach(function(arrayItem) {

												if (continueadduserloop) {

													console
															.log("arrayItem.usernameid: "
																	+ arrayItem.usernameid);
													console
															.log("pc.usernameid: "
																	+ pc.usernameid);

													if (continueadduserloop) {
														if (arrayItem.usernameid == pc.usernameid) {
															console
																	.log("checking entered username is already present or not");

															continueadduserloop = false;

															$scope.errormsg = "User Name-Id '"
																	+ pc.usernameid
																	+ "' is already present for User Name '"
																	+ arrayItem.username
																	+ "'";

														}
													}
												}

											})
								}

								/*
								 * if (pc.username != undefined && pc.username !=
								 * "") {
								 * 
								 * console.log("Username11:" + pc.username);
								 * 
								 * if (!continueadduserloop) {
								 * continueadduserloop = true; }
								 * 
								 * userDetails .forEach(function(arrayItem) {
								 * 
								 * if (continueadduserloop) {
								 * 
								 * console .log("arrayItem.username: " +
								 * arrayItem.username);
								 * console.log("pc.username: " + pc.username);
								 * 
								 * if (continueadduserloop) { if
								 * (arrayItem.username == pc.username) { console
								 * .log("checking entered username is already
								 * present or not");
								 * 
								 * continueadduserloop = false;
								 * 
								 * $scope.errormsg = "User Name '" +
								 * arrayItem.username + "' is already present"; } } } }) }
								 */

								if ($scope.errormsg == "") {
									$http
											.post('rest/event/adduserCode', pc)
											.success(
													function(userdata) {
														console
																.log('Inside addusercode');
														$scope.userCode = userdata;
														$scope.successmsg = "New user added successfully";
														console
																.log("New user added successfully");

														pc.username = null;
														pc.usernameid = null;
														pc.userpwd = null;
														pc.usercntno = 0;
														pc.useremailid = null;
														pc.useraddress = null;
														pc.userrole = null;

													})
											.error(
													function() {
														$scope.errormsg = "Error while inserting the user details";
														console
																.log("Error while inserting the user details");
													});
								}

								$scope.showLabel = true;

							}
						}
					};

					$scope.query = {}
					$scope.queryBy = '$'
					$scope.orderProp = "name";
					$scope.currentPage = 1;
					$scope.pageSize = 5;
					$scope.pageChangeHandler = function(num) {
						console.log('meals page changed to ' + num);
					};
					function OtherController($scope) {
						$scope.pageChangeHandler = function(num) {
							console.log('going to page ' + num);
						};
					}

					// update user details
					$scope.updateuserCode = function($index, pc) {
						console.log(pc);
						console.log("Inside update user detail");

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						var continueupduserloop = true;

						if (pc.discountAccess == "coded") {
							pc.namePublicDiscount = "";
						}

						if (pc == undefined) {
							console.log("Checked when all field are spaces");

							$scope.errormsg = "User Name cannot be spaces";
						}

						else if (pc.username == undefined || pc.username == ""
								|| pc.username == null) {
							console.log("Checked when username is space");

							$scope.errormsg = "User Name cannot be spaces";

						} else if (pc.usernameid == undefined
								|| pc.usernameid == "" || pc.usernameid == null) {
							console.log("Checked when usernameid is space");

							$scope.errormsg = "User Name-Id cannot be spaces";

						} else if (pc.userpwd == undefined || pc.userpwd == ""
								|| pc.userpwd == null) {

							console.log("Checked when user password is space");

							$scope.errormsg = "User Password cannot be spaces";

						} else if (pc.userrole == undefined
								|| pc.userrole == "" || pc.userrole == null) {

							console.log("Checked when user role is space");

							$scope.errormsg = "User Role cannot be spaces";

						} else if (pc.username != undefined
								&& pc.usernameid != undefined
								&& pc.userpwd != undefined
								&& pc.userrole != undefined) {
							var phoneno = /^\d{10}$/;

							// var validemailid =
							// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

							var validemailid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

							console.log(pc.usercntno);
							console.log(pc.useremailid);

							console.log(phoneno.test(pc.usercntno));
							console.log(validemailid.test(pc.useremailid));

							console.log("Username" + pc.username);

							if (!phoneno.test(pc.usercntno)
									&& (pc.usercntno != undefined && pc.usercntno != "")) {
								console
										.log("Checked client contact no is enetered incorrectly");

								$scope.errormsg = "Enter Client Contact No in valid format like e.g.'9933445566'";

							}
							if (!validemailid.test(pc.useremailid)
									&& (pc.useremailid != undefined && pc.useremailid != "")) {

								console.log("checking entered valid Email Id");

								$scope.errormsg = "Enter Email Id in valid format like 'example@gmail.com / example@yahoo.co.in'";
							}

							if ($scope.errormsg == "") {
								var userfound = 'N';
							} else {
								var userfound = "";
							}

							if (pc.usernameid != undefined
									&& pc.usernameid != ""
									&& $scope.errormsg == "") {

								userDetails
										.forEach(function(arrayItem) {

											console.log("continueupduserloop: "
													+ continueupduserloop);

											if (continueupduserloop) {

												console
														.log("arrayItem.usernameid: "
																+ arrayItem.usernameid);

												console
														.log("arrayItem.userid: "
																+ arrayItem.userid);

												console.log("pc.usernameid: "
														+ pc.usernameid);

												console.log("pc.userid: "
														+ pc.userid);

												console.log("userfound: "
														+ userfound);

												if (continueupduserloop) {
													if (arrayItem.usernameid == pc.usernameid) {

														if (arrayItem.userid != pc.userid) {

															console
																	.log("Checking User Name-Id is already present or not");

															continueupduserloop = false;

															userfound = 'Y';

															$scope.errormsg = "User Name-Id '"
																	+ pc.usernameid
																	+ "' is already present for User Name '"
																	+ arrayItem.username
																	+ "'";

														}

														console
																.log("userfound: "
																		+ userfound);
													}
												}
											}

										})
							}

							/*
							 * if (pc.username != undefined && pc.username !=
							 * "") {
							 * 
							 * if (!continueupduserloop) { continueupduserloop ==
							 * true; }
							 * 
							 * userDetails .forEach(function(arrayItem) {
							 * 
							 * if (continueupduserloop) {
							 * 
							 * console .log("arrayItem.username: " +
							 * arrayItem.username); console.log("pc.username: " +
							 * pc.username);
							 * 
							 * if (continueupduserloop) { if (arrayItem.username ==
							 * pc.username) {
							 * 
							 * continueupduserloop = false;
							 * 
							 * if (arrayItem.userid == pc.userid) {
							 * 
							 * console .log("No fields has changed during
							 * update"); } else {
							 * 
							 * console .log("checking entered username is
							 * already present or not");
							 * 
							 * $scope.errormsg = "User Name '" +
							 * arrayItem.username + "' is already present"; } } } } }) }
							 */

							// if ($scope.errormsg == "") {
							console.log("userfound: " + userfound);

							if (userfound == 'N') {
								$http
										.post('rest/event/updateuserCode', pc)
										.success(
												function(userdata) {
													console
															.log("update successful for user details");

													$scope.successmsg = "User details for username-id '"
															+ pc.usernameid
															+ "' updated successfully";

													console.log(userdata);

													$scope.userdata = userdata;
													init();

												})
										.error(
												function(userdata) {
													console
															.log("Error while updating user details");

													$scope.errormsg = "Error while updating user details for username-id '"
															+ pc.usernameid
															+ "'";

													console.log(userdata);
												});

							}
							$scope.showLabel = true;

						}

					};

					// delete user details
					$scope.deleteuserCode = function($index, userid) {
						console.log("Inside delete user code");
						console.log(userid);

						console.log('Spaceout Error and Success Message');
						$scope.successmsg = "";
						$scope.errormsg = "";

						$http
								.post('rest/event/deleteuserCode', userid)
								.success(
										function(userdata) {
											console
													.log("delete successful for user details");

											$scope.successmsg = "User details deleted successfully";

											console.log(userdata);

											$scope.userdata = userdata;
											init();
										})
								.error(
										function(userdata) {
											console
													.log("Error while Deleting user details");

											$scope.errormsg = "Error while deleting User details";

											console.log(userdata);
										});

						$scope.showLabel = true;

					};

				});
