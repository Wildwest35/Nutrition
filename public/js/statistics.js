function StatisticsModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
    self.lang = ko.observable('gr');
    self.sendLang = ko.observable(2);
    self.flag = ko.observable();
	self.idUser = ko.observable('');
	self.nameUser = ko.observable('');
	self.user = ko.observable('User');
	self.admin = ko.observable('Admin');
	self.categoryUser = ko.observable('');
    self.title = ko.observable('Γραφήματα | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
    self.username = ko.observable();
    self.dashboardArray = ko.observableArray([]);
	self.weigthArray = ko.observableArray([]);
	self.weightBoneArray = ko.observableArray([]);
	self.fatPercentageArray = ko.observableArray([]);
	self.waterPercentageArray = ko.observableArray([]);
	self.searchRegisterArray = ko.observableArray([]);
	self.registerArray = ko.observableArray([]);

	self.totalPages = ko.observable(0);
	self.limit = ko.observable(0);
	self.helptotalPages = ko.observable(0);
	self.helppage = ko.observable(1);
	self.page = ko.observable(1);
	self.offset = ko.observable(0);
	self.total = ko.observable(0);
	self.totalWeight = ko.observable(0);
	self.totalWeightBone = ko.observable(0);
	self.totalFatPercentage = ko.observable(0);
	self.totalWaterPercentage = ko.observable(0);
	self.monthNumber = ko.observable(0);
	self.categoryName = ko.observable('weight');
	self.tolocalestring = ko.observable('el-GR');
	
	self.counterDate = ko.observable(0);
	self.isStatToggle = ko.observable(true);
	self.noWeightMeasurements = ko.observable('Δεν Βρέθηκαν Μετρήσεις Βάρους');
	self.noWeightBoneMeasurements = ko.observable('Δεν Βρέθηκαν Μετρήσεις Βάρους Οστών');
	self.noFatPercentageMeasurements = ko.observable('Δεν Βρέθηκαν Μετρήσεις Ποσοστού Λίπους');
	self.noWaterPercentsgeMeasurements = ko.observable('Δεν Βρέθηκαν Μετρήσεις Ποσοστού Νερό');
	self.noMeasurements = ko.observable(self.noWeightMeasurements());

	self.startWeightDate = ko.observable('');
	self.lastWeightDate = ko.observable('');
	self.monthDifference = ko.observable('');
	self.counter = ko.observable(0);
	self.counterTotalDays = ko.observable(31);
	
	self.startFullDate = ko.observable('');
/* 	self.startYYYY = ko.observable('');
	self.startMM = ko.observable('');
	self.startDD = ko.observable(''); */


	self.weightName = ko.observable('Βάρος');
	self.weightBoneName = ko.observable('Βάρος Οστών');
	self.fatPercentageName = ko.observable('Ποσοστό Λίπους');
	self.waterPercentageName = ko.observable('Ποσοστό Νερού');
	self.diagramName = ko.observable('');
	self.weightProgressName = ko.observable('Εξέλιξη Βάρος');
	self.weightBoneProgressName = ko.observable('Εξέλιξη Βάρος Οστών');
	self.fatPercentageProgressName = ko.observable('Εξέλιξη Ποσοστό Λίπους');
	self.waterPercentageProgressName = ko.observable('Εξέλιξη Ποσοστό Νερού');
	self.progressName = ko.observable('');
	self.month = ko.observable('Μήνας');
	self.months = ko.observable('Μήνες');
	self.allMonths = ko.observable('Όλοι οι Μήνες');

	self.countArray = ko.observable(0);
	self.difYYYY = ko.observable(0);
	self.totalMM = ko.observable(0);
	self.sumDD = ko.observable(0);
	self.endLastDay = ko.observable(0);
	self.diagramDate = ko.observable('');
	self.num = ko.observable(0);
	self.isToggle = ko.observable(true);

	self.currentDate = ko.observable(new Date());
	self.currentYYYY = ko.observable(self.currentDate().getFullYear());
	self.currentMM = ko.observable(self.currentDate().getMonth() + 1);
	self.currentDD = ko.observable(self.currentDate().getDate());
	
	self.registerUserDate = ko.observable('');
	self.registerUserYYYY = ko.observable('');
	self.registerUserMM = ko.observable('');
	self.registerUserDD = ko.observable('');


	self.lastFullDate = ko.observable('');
	self.lastYYYY = ko.observable('');
	self.lastMM = ko.observable('');
	self.lastDD = ko.observable('');
	self.startDate = ko.observable('');
	self.startYYYY = ko.observable('');
	self.startMM = ko.observable('');
	self.startDD = ko.observable('');
	self.endDate = ko.observable('');
	self.endYYYY = ko.observable('');
	self.endMM = ko.observable('');
	self.endDD = ko.observable('');

	self.fullDate = ko.observable('');
	self.yyyy = ko.observable('');
	self.mm = ko.observable('');
	self.dd = ko.observable('');

	self.weightDate = ko.observable('');
	self.weightYYYY = ko.observable('');
	self.weightMM = ko.observable('');
	self.weightDD = ko.observable('');

	self.weightBoneDate = ko.observable('');
	self.weightBoneYYYY = ko.observable('');
	self.weightBoneMM = ko.observable('');
	self.weightBoneDD = ko.observable('');

	self.fatPercentageDate = ko.observable('');
	self.fatPercentageYYYY = ko.observable('');
	self.fatPercentageMM = ko.observable('');
	self.fatPercentageDD = ko.observable('');

	self.waterPercentageDate = ko.observable('');
	self.waterPercentageYYYY = ko.observable('');
	self.waterPercentageMM = ko.observable('');
	self.waterPercentageDD = ko.observable('');

	const swiper1 = new Swiper('.mySwiper1', {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 0,
		// Pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		// Navigation
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		// Responsive breakpoints
		breakpoints: {
		  // when window width is >= 1200px  
		  1200: {
			slidesPerView: 6
		  },
		  // when window width is >= 992px
		  993: {
			slidesPerView: 5
		  },
		  // when window width is >= 768px
		  769: {
			slidesPerView: 4
		  },
		  // when window width is >= 580px
		  580: {
			slidesPerView: 4
		  },
		  // when window width is >= 460px
		  461: {
			slidesPerView: 3
		  },
 		  // when window width is >= 365px
		  366: {
			slidesPerView: 3
		  },
		  285: {
			slidesPerView: 2
		  }
		}
	});

	const swiper2 = new Swiper('.mySwiper2', {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 0,
		// Pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		// Navigation
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		// Responsive breakpoints
		breakpoints: {
		  // when window width is >= 1200px  
		  1200: {
			slidesPerView: 4
		  },
		  // when window width is >= 992px
		  993: {
			slidesPerView: 4
		  },
		  // when window width is >= 768px
		  769: {
			slidesPerView: 4
		  },
		  // when window width is >= 580px
		  581: {
			slidesPerView: 4
		  },
		  // when window width is >= 460px
		  461: {
			slidesPerView: 3
		  },
 		  // when window width is >= 365px
		  366: {
			slidesPerView: 3
		  },
		  285: {
			slidesPerView: 2
		  }
		}
	});

	window.addEventListener('resize', function() {
		if(self.monthNumber() === 0) {
			self.allRegisters(self.categoryName());
		} else {
			self.currentMonth(self.monthNumber());
		}
	});	

	self.getUsername = function() {
		let o = {}; 

		$.post('./php/dashboarduser.php', o, function(data) {
			if(data.status == "ok") {
				self.username(data.data.username);
				self.lang(data.data.lang);
				self.changeLanguage();
				if(data.data.category == 2) {
					self.categoryUser(self.admin());
				} else {
					self.categoryUser(self.user());
				}
				if(data.data.idUser && data.data.nameUser) {
					self.idUser(data.data.idUser);
					self.nameUser(data.data.nameUser);
				}
                self.fillDashboardArray();
				self.updateGetFunctions();
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.currentMonth = function(months) {		
		let con1, con2, con3;
		self.monthNumber(months);
		self.chooseMonth(months);

		self.startDate(new Date(self.currentYYYY(), self.currentMM() - months, 1));
		self.startYYYY(self.startDate().getFullYear());
		self.startMM(self.startDate().getMonth());
		self.startDD(self.startDate().getDate());

 		if(self.startDate() < self.registerUserDate()) {
/*			self.startDate(self.registerUserDate());
			self.startYYYY(self.registerUserYYYY());
			self.startMM(self.registerUserMM());
			self.startDD(self.registerUserDD());
			self.sumDD(self.sumDD() - (self.startDD() - 1));*/
		} 

		self.endDate(new Date(self.currentYYYY(), self.currentMM() - 1, self.currentDD()));
		self.endYYYY(self.endDate().getFullYear());
		self.endMM(self.endDate().getMonth());
		self.endDD(self.endDate().getDate());

		//google.charts.load('current', {'packages':['corechart']});
		//google.charts.setOnLoadCallback(drawChart);
		drawChart();
	};

	self.allRegisters = function(categoryName) {
		self.monthNumber(0);
		if(categoryName != '') {
			self.categoryName(categoryName);
		}
		
		self.chooseCategory(self.categoryName());

		self.startDate(self.registerUserDate());
		self.startYYYY(self.registerUserYYYY());
		self.startMM(self.registerUserMM());
		self.startDD(self.registerUserDD());
		self.sumDD(self.sumDD() - (self.startDD() - 1));
					
		self.endDate(new Date(self.currentYYYY(), self.currentMM() - 1, self.currentDD()));
		self.endYYYY(self.endDate().getFullYear());
		self.endMM(self.endDate().getMonth());
		self.endDD(self.endDate().getDate());

		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
	};

	function drawChart() {
		let o = [];
		o.push(['Days', self.diagramName()]);

		self.difYYYY(Math.abs(self.endYYYY() - self.startYYYY()));

		self.totalMM(self.endMM() + (12*(self.difYYYY() - 1)) + (12 - self.startMM()));

		for(var i=0; i<self.totalMM(); i++) {
			self.endLastDay(new Date(self.endYYYY(), self.endMM() - i, 0).getDate());
			self.sumDD(self.sumDD() + self.endLastDay());
		}
		self.sumDD(self.sumDD() + (self.endDD()));
		console.log(self.sumDD());
		for(var i=0; i<self.sumDD(); i++) {
			self.diagramDate(self.startDate().toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "2-digit"}));
			
			do {
				if(self.registerArray() != '') {
					self.fullDate(new Date(self.registerArray()[self.total() - 1 - self.countArray()].date));
					self.yyyy(self.fullDate().getFullYear());
					self.mm(self.fullDate().getMonth());
					self.dd(self.fullDate().getDate());
				
					if(self.fullDate() <= self.startDate()) {
						self.isToggle(true);
						self.countArray(self.countArray() + 1);
						if(self.total() == self.countArray()) {
							self.countArray(self.total() - 1);
							self.isToggle(false);
						}
					} else {
						self.isToggle(false);
					}
				} else {
					self.yyyy(self.currentYYYY());

					self.mm(self.currentMM());
					if(self.currentMM() < 10) {
						self.mm('0' + self.currentMM());
					}
					self.dd(self.currentDD());
					if(self.currentDD() < 10) {
						self.dd('0' + self.currentDD());
					}
					self.isToggle(false);
				}
			} while(self.isToggle());			

			if((self.yyyy() + '-' + (self.mm() + 1)+ '-' + self.dd()) == (self.startYYYY() + '-' + (self.startMM() + 1)+ '-' + self.startDD())) {
				self.num(self.registerArray()[self.total() - 1 - self.countArray()].number);
				self.countArray(self.countArray() + 1);
				if(self.total() == self.countArray()) {
					self.countArray(0);
				}
			} else {
				self.num(0);
			}

			self.startDate(new Date(self.startYYYY(), self.startMM(), self.startDD() + 1));
			
 			self.startYYYY(self.startDate().getFullYear());
			self.startMM(self.startDate().getMonth());
			self.startDD(self.startDate().getDate()); 
			if(self.num() != 0) {
				o.push([self.diagramDate(), parseFloat(self.num())]);
			}
		}
		
		self.countArray(0);
		self.sumDD(0);
		console.log(o.length);
		if(o.length > 1) {
			self.isStatToggle(false);
			var data = google.visualization.arrayToDataTable(o);

			var options = {
				type: 'line',
				responsive: true,
				title: self.progressName(),
				curveType: 'none',
				legend: { position: 'bottom' },
			};

			var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

			chart.draw(data, options);
		} else {
			if(self.categoryName() == 'weight') {
				self.noMeasurements(self.noWeightMeasurements());
			} else if(self.categoryName() == 'weightBone') {
				self.noMeasurements(self.noWeightBoneMeasurements());
			} else if(self.categoryName() == 'fatPercentage') {
				self.noMeasurements(self.noFatPercentageMeasurements());
			} else if(self.categoryName() == 'waterPercentage') {
				self.noMeasurements(self.noWaterPercentsgeMeasurements());
			}
			
			self.isStatToggle(true);
		}
	}

	self.updateGetFunctions = function() {
		self.weigthArray([]);
		self.weightBoneArray([]);
		self.fatPercentageArray([]);
		self.waterPercentageArray([]);
		self.registerArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: 10000000000,
			offset: 0
		}; 

		$.post('./php/getweightinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.weigthArray.push(el);
					//console.log(el);
				});

				$.post('./php/getweightboneinfo.php', o, function(data) {
					if(data.status == "ok") {
						var tmp = data.data.map(function(el) { 
							self.weightBoneArray.push(el);
						});
						
						$.post('./php/getfatpercentageinfo.php', o, function(data) {
							if(data.status == "ok") {
								var tmp = data.data.map(function(el) { 
									self.fatPercentageArray.push(el);
								});
								
								$.post('./php/getwaterpercentageinfo.php', o, function(data) {
									if(data.status == "ok") {
										var tmp = data.data.map(function(el) { 
											self.waterPercentageArray.push(el);
										});
										$.post('./php/getregisterdateinfo.php', o, function(data) {
											if(data.status == "ok") {
												self.registerUserDate(new Date(data.data.dateCreated));
												self.registerUserYYYY(self.registerUserDate().getFullYear());
												self.registerUserMM(self.registerUserDate().getMonth());
												self.registerUserDD(self.registerUserDate().getDate());

												self.updateTotalRegisters();
											} else if(data.status == "error") {
						
											}	
										});
									} else if(data.status == "error") {
				
									}	
								});
							} else if(data.status == "error") {
		
							}	
						});
					} else if(data.status == "error") {

					}	
				});
			} else if(data.status == "error") {

			}	
		});	
	};

	self.updateTotalRegisters = function() {
		o1 = {
			username: self.username(),
			idLang: self.sendLang(),
		}

		$.post('./php/gettotalregisters.php', o1, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.totalWeight.map(function(el) { 
					self.totalWeight(el.totalWeight);
				});
				var tmp = data.data.totalWeightBone.map(function(el) { 
					self.totalWeightBone(el.totalWeightBone);
				});
				var tmp = data.data.totalFatPercentage.map(function(el) {
					self.totalFatPercentage(el.totalFatPercentage);
				});
				var tmp = data.data.totalWaterPercentage.map(function(el) {
					self.totalWaterPercentage(el.totalWaterPercentage);
				});

				self.allRegisters(self.categoryName());
			} else {
				console.log('Something wrong with total registers...');
			}
		});
	};

	self.chooseCategory = function(category) {
		self.categoryName(category);
		self.registerArray([]);
		self.removeCheck();
		self.removeMon();

		if(self.categoryName() == 'weight') {
			let check1 = document.getElementById('weight');
			check1.style.backgroundColor = '#DBF5F0';

			self.registerArray(self.weigthArray());
			self.total(self.totalWeight());
			self.diagramName(self.weightName());
			self.progressName(self.weightProgressName());
		} else if(self.categoryName() == 'weightBone') {
			let check2 = document.getElementById('weightbone');
			check2.style.backgroundColor = '#DBF5F0';

			self.registerArray(self.weightBoneArray ());
			self.total(self.totalWeightBone());
			self.diagramName(self.weightBoneName());
			self.progressName(self.weightBoneProgressName());
		} else if(self.categoryName() == 'fatPercentage') {
			let check3 = document.getElementById('fatpercentage');
			check3.style.backgroundColor = '#DBF5F0';

			self.registerArray(self.fatPercentageArray());
			self.total(self.totalFatPercentage());
			self.diagramName(self.fatPercentageName());
			self.progressName(self.fatPercentageProgressName());
		} else if(self.categoryName() == 'waterPercentage') {
			let check4 = document.getElementById('waterpercentage');
			check4.style.backgroundColor = '#DBF5F0';

			self.registerArray(self.waterPercentageArray());
			self.total(self.totalWaterPercentage());
			self.diagramName(self.waterPercentageName());
			self.progressName(self.waterPercentageProgressName());
		}
		let check = document.getElementById('all');
		check.style.backgroundColor = '#DBF5F0';
		
		//self.allRegisters();
	};

	self.chooseMonth = function(mon) {
		self.removeMon();

		if(mon == 1) {
			let check1 = document.getElementById('one');
			check1.style.backgroundColor = '#DBF5F0';
		} else if(mon == 3) {
			let check2 = document.getElementById('three');
			check2.style.backgroundColor = '#DBF5F0';
		} else if(mon == 6) {
			let check3 = document.getElementById('six');
			check3.style.backgroundColor = '#DBF5F0';
		} else if(mon == 9) {
			let check4 = document.getElementById('nine');
			check4.style.backgroundColor = '#DBF5F0';
		} else if(mon == 12) {
			let check5 = document.getElementById('twelve');
			check5.style.backgroundColor = '#DBF5F0';
		}
	};

	self.removeCheck = function() {
		let check1 = document.getElementById('weight');
		let check2 = document.getElementById('weightbone');
		let check3 = document.getElementById('fatpercentage');
		let check4 = document.getElementById('waterpercentage');

		check1.style.backgroundColor = '';
		check2.style.backgroundColor = '';
		check3.style.backgroundColor = '';
		check4.style.backgroundColor = '';
	}

	self.removeMon = function() {
		let check1 = document.getElementById('all');
		let check2 = document.getElementById('one');
		let check3 = document.getElementById('three');
		let check4 = document.getElementById('six');
		let check5 = document.getElementById('nine');
		let check6 = document.getElementById('twelve');

		check1.style.backgroundColor = '';
		check2.style.backgroundColor = '';
		check3.style.backgroundColor = '';
		check4.style.backgroundColor = '';
		check5.style.backgroundColor = '';
		check6.style.backgroundColor = '';
	}

	self.changeLanguage = function() {
		if(self.lang() === 'en') {
			self.flag('img/greece.png');

			self.home('Home');
			self.biometrics('Biometrics');
			self.measurements('Measurements');
			self.statistics('Charts');
			self.createfood('Create Food');
			self.addfood('Add Food');
			self.settings('Settings');
			self.logsout('Logout');
			self.title('Charts | Nutrition');
			self.tolocalestring('en-GB');
			self.weightName('Weight (kg)');
			self.weightBoneName('Weight Bone (kg)');
			self.fatPercentageName('Fat Percentage (%)');
			self.waterPercentageName('Water Percentage (%)');
			self.weightProgressName('Weight Progress');
			self.weightBoneProgressName('Weight Bone Progress');
			self.fatPercentageProgressName('Fat Percentage Progress');
			self.waterPercentageProgressName('Water Percentage Progress');
			self.month('Month');
			self.months('Months');
			self.allMonths('All Months');
			self.noWeightMeasurements('No Weight Measurements Found');
			self.noWeightBoneMeasurements('No Weight Bone Measurements Found');
			self.noFatPercentageMeasurements('No Body Fat Percentage Measurements Found');
			self.noWaterPercentsgeMeasurements('No Water Percentage Measurements Found');
			self.noMeasurements(self.noWeightMeasurements());
			self.panel('Admin Panel');

			self.sendLang(1);
		} else if(self.lang() === 'gr') {
			self.flag('img/united-kingdom.png');

			self.home('Αρχική');
			self.biometrics('Βιομετρικά');
			self.measurements('Μετρήσεις');
			self.statistics('Γραφήματα');
			self.createfood('Δημιουργία Φαγητού');
			self.addfood('Προσθήκη Φαγητού');
			self.settings('Ρυθμίσεις');
			self.logsout('Αποσύνδεση');
			self.title('Γραφήματα | Nutrition');
			self.tolocalestring('el-GR');
			self.weightName('Βάρος (kg)');
			self.weightBoneName('Βάρος Οστών (kg)');
			self.fatPercentageName('Ποσοστό Λίπους (%)');
			self.waterPercentageName('Ποσοστό Νερού (%)');
			self.weightProgressName('Εξέλιξη Βάρους');
			self.weightBoneProgressName('Εξέλιξη Βάρους Οστών');
			self.fatPercentageProgressName('Εξέλιξη Ποσοστού Λίπους');
			self.waterPercentageProgressName('Εξέλιξη Ποσοστού Νερού');
			self.month('Μήνας');
			self.months('Μήνες');
			self.allMonths('Όλοι οι Μήνες');
			self.noWeightMeasurements('Δεν Βρέθηκαν Μετρήσεις Βάρους');
			self.noWeightBoneMeasurements('Δεν Βρέθηκαν Μετρήσεις Βάρους Οστών');
			self.noFatPercentageMeasurements('Δεν Βρέθηκαν Μετρήσεις Ποσοστού Λίπους');
			self.noWaterPercentsgeMeasurements('Δεν Βρέθηκαν Μετρήσεις Ποσοστού Νερό');
			self.noMeasurements(self.noWeightMeasurements());
			self.panel('Admin Πάνελ');

			self.sendLang(2);
		}
	};

	self.fillDashboardArray = function() {
		var o = {
			name: self.home(), 
			icons: "fas fa-th-large",
			redirect: "dashboard",
			activelabel: "",
			title: self.home()
		}

		var o1 = {
			name: self.biometrics(), 
			icons: "fa-solid fa-screwdriver-wrench",
			redirect: "biometrics",
			activelabel: "",
			title: self.biometrics()
		}

		var o2 = {
			name: self.measurements(), 
			icons: "fa-solid fa-weight-scale",
			redirect: "measurements",
			activelabel: "",
			title: self.measurements()
		}

		var o3 = {
			name: self.statistics(), 
			icons: "fas fa-chart-pie",
			redirect: "statistics",
			activelabel: "active",
			title: self.statistics()
		}

		var o4 = {
			name: self.createfood(), 
			icons: "las la-drumstick-bite", 
			redirect: "settings",
			activelabel: "",
			title: self.createfood()
		}

		var o5 = {
			name: self.addfood(), 
			icons: "fa-solid fa-utensils",
			redirect: "addfood",
			activelabel: "",
			title: self.addfood()
		}

		var o6 = {
			name: self.settings(), 
			icons: "fas fa-cog",
			redirect: "settings",
			activelabel: "",
			title: self.settings()
		}

		var o7 = {
			name: self.logsout(), 
			icons: "fa-solid fa-right-from-bracket",//fas fa-sign-out-alt
			redirect: "logout",
			activelabel: "",
			title: self.logsout()
		}

		var o8 = {
			name: self.panel(),
			icons: "fa-solid fa-headset",
			redirect: "panel",
			activelabel: "",
			title: self.panel()
		}

		var o9 = {
			name: self.nameUser(),
			icons: "fa-solid fa-user",
			redirect: "pop",
			activelabel: "activeuser",
			title: self.nameUser()
		}

		self.dashboardArray.push(new AddFood(o));
		if(self.categoryUser() == 'Admin') {
			self.dashboardArray.push(new AddFood(o8));
		}
		self.dashboardArray.push(new AddFood(o1));
		self.dashboardArray.push(new AddFood(o2));
		self.dashboardArray.push(new AddFood(o3));
		//self.dashboardArray.push(new AddFood(o4));
		self.dashboardArray.push(new AddFood(o5));
		self.dashboardArray.push(new AddFood(o6));
		self.dashboardArray.push(new AddFood(o7));
		if(self.idUser() != '' && self.nameUser() != '') {
			self.dashboardArray.push(new AddFood(o9));
		}
	};

    function AddFood(data) {
		var add = this;

		add.name = ko.observable(data.name);
		add.icons = ko.observable(data.icons);
		add.redirect = ko.observable(data.redirect);
		add.activelabel = ko.observable(data.activelabel);
		add.title = ko.observable(data.title);

		add.redirect.subscribe(function(newVal) {
			if(data.redirect === 'settings') {
				self.settingspage();
			} else if(data.redirect === 'dashboard') {
				self.dashboardpage();
			} else if(data.redirect === 'addfood') {
				self.addfoodpage();
			} else if(data.redirect === 'biometrics') {
				self.biometricspage();
			} else if(data.redirect === 'measurements') {
				self.measurementspage();
			} else if(data.redirect === 'statistics') {
				self.statisticspage();
			} else if(data.redirect === 'panel') {
				self.panelpage();
			} else if(data.redirect === 'logout') {
				self.logout();
			}
		});
	};

    self.langSubmit = function() {
		let o = {
			username: self.username(),
			newVal: self.sendLang()
		};

		$.post('./php/updatelang.php', o, function(data) {
			if(data.status == "ok") {
				self.statisticspage();
			} else if(data.status == "error") {

			}	
		});	
	}
    
	self.logout = function() {
		let o = {};

		$.post('./php/logout.php', o, function(data) {
			if(data.status == "ok") {
				self.login();
			} else if(data.status == "error") {
				self.login();
			}            
		});			
	};

	self.login = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

	self.dashboardpage = function() {
		window.location.href = './dashboarduser';
	};

	self.settingspage = function() {
		window.location.href = './settingsuser';
	};

    self.addfoodpage = function() {
        window.location.href = './addFood';
    };

    self.biometricspage = function() {
        window.location.href = './biometrics';
    };

    self.measurementspage = function() {
        window.location.href = './measurements';
    };

    self.statisticspage = function() {
        window.location.href = './statistics';
    };

	self.panelpage = function() {
        window.location.href = './dashboardadmin';
    };

	self.facebookpage = function() {
		window.open('https://www.facebook.com/kostas.perros', '_blank');
	};

	self.instagrampage = function() {
		window.open('https://www.instagram.com/kostasperros?utm_source=gr', '_blank');
	};

	self.linkedinpage = function() {
		window.open('https://www.linkedin.com/in/konstantinos-perros-331810195', '_blank');
	};

	self.getUsername();
}

$(function() {
	ko.applyBindings(new StatisticsModel(), document.getElementById('body'));
});