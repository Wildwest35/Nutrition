function DailyStatsModel() {
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
    self.title = ko.observable('Καθημερινά Στατιστικά | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
    self.dailyStats = ko.observable('Καθημερινά Στατιστικά');
	self.fatWord = ko.observable('Λίπος');
	self.carbWord = ko.observable('Υδατάνθρακες');
	self.proteinWord = ko.observable('Πρωτεΐνες');
	self.fitWord = ko.observable('Φυτικές Ίνες');
	self.sugarWord = ko.observable('Σάκχαρα');
	self.saturatedWord = ko.observable('Κορεσμένα');
	self.unsaturatedWord = ko.observable('Ακόρεστα');
	self.bitaminDWord = ko.observable('Βιταμίνη C');
	self.calorieWord = ko.observable('Θερμίδες');
	self.nutrientWord = ko.observable('Θρεπτικές Ουσίες');
	self.moreNutrientWord = ko.observable('Περισσότερες Θρεπτικές Ουσίες');
    self.username = ko.observable();
    self.dashboardArray = ko.observableArray([]);
	self.dailyStatArray = ko.observableArray([]);
	self.currentDate = ko.observable(new Date());
	self.createdDate = ko.observable();
	self.createdYYYY = ko.observable();
	self.createdMM = ko.observable();
	self.createdDD = ko.observable();
	self.fullDate = ko.observable('');
	self.changedDate = ko.observable('');
	self.limit = ko.observable(10);
	self.offset = ko.observable(0);
	self.totalDailyStats = ko.observable(0);
	self.countPrevDay = ko.observable(0);
	self.countLoads = ko.observable(1);
	self.tolocalestring = ko.observable('el-GR');
	self.isLoadToggle = ko.observable(true);
	self.lessConsume = ko.observable('Καταναλώθηκαν Λιγότερα');
	self.moreConsume = ko.observable('Καταναλώθηκαν Περισσότερα');
	self.consumed = ko.observable('Καταναλώθηκαν');
	self.noFoodData = ko.observable('Δεν Βρέθηκαν Δεδομένα Τροφίμων');
	self.loadMore = ko.observable('Φόρτωσε Περισσότερα');
	self.caloriesConsume = ko.observable('');
	self.proteinConsume = ko.observable('');
	self.carbConsume = ko.observable('');
	self.fatConsume = ko.observable('');
	self.isExistToggle = ko.observable(false);

	self.getUsername = function() {
		let o = {}; 

		$.post('./php/dashboarduser.php', o, function(data) {
			if(data.status == "ok") {
				self.username(data.data.username);
				self.lang(data.data.lang);
				self.changeLanguage();
				if(data.data.category == 1) {
					self.categoryUser(self.user());
				} else {
					self.categoryUser(self.admin());
				}
				if(data.data.idUser && data.data.nameUser) {
					self.idUser(data.data.idUser);
					self.nameUser(data.data.nameUser);
				}
                self.fillDashboardArray();
				$.post('./php/getregisterdateinfo.php', o, function(data) {
					if(data.status == "ok") {
						self.createdDate(new Date(data.data.dateCreated));

						self.createdYYYY(self.createdDate().getFullYear());
						self.createdMM(self.createdDate().getMonth() + 1);
						if(self.createdMM() < 10) {
							self.createdMM('0' + self.createdMM());
						}
						self.createdDD(self.createdDate().getDate());
						if(self.createdDD() < 10) {
							self.createdDD('0' + self.createdDD());
						}

						self.fullDate(self.createdYYYY() + '-' + self.createdMM() + '-' + self.createdDD());

						/* console.log(self.createdDate());
						console.log(self.currentDate());
						console.log(self.fullDate()); */

						let o1 = {
							fullDate: self.fullDate()
						};

						$.post('./php/gettotaldailystats.php', o1, function(data) {
							if(data.status == "ok") {
								self.totalDailyStats(data.data);				
								self.getDailyStat();
							} else if(data.status == "error") {

							}
						});
					} else if(data.status == "error") {

					}	
				});	
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.getDailyStat = function() {
		//console.log(self.fullDate());
		self.countLoads(self.countLoads() + 1);
		let o1 = {
			fullDate: self.fullDate(),
			limit: self.limit(),
			offset: self.offset()
		};
		//console.log(o1);
		$.post('./php/getdailystatinfo.php', o1, function(data) {
			if(data.status == "ok") {
				//console.log(data.data.length);
				var tmp = data.data.map(function(el) {
					self.fillDailyStatArray(el);
				});
				
				self.offset(self.offset() + self.limit());
				
			} else {

			}
		});
	};

	self.fillDailyStatArray = function(el) {
		self.changedDate(new Date(self.currentDate().getFullYear(), self.currentDate().getMonth(), self.currentDate().getDate() + self.countPrevDay()));
		//self.changedDate(new Date(el.dailyEatingsDate));
		var changeDate, changeDateMM, changeDateDD;
		changeDate = self.changedDate().toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"});

		changeDateMM = self.changedDate().getMonth() + 1;
		if(changeDateMM < 10) {
			changeDateMM = '0' + changeDateMM;
		}
		changeDateDD = self.changedDate().getDate();
		if(changeDateDD < 10) {
			changeDateDD = '0' + changeDateDD;
		}
		
		if(self.createdDate() < self.changedDate() || (self.createdYYYY() == self.changedDate().getFullYear() && self.createdMM() == changeDateMM && self.createdDD() == changeDateDD)) {
			let isStatToggle, caloriesNumber, carbNumber, proteinNumber, fatNumber;

			if(self.countPrevDay() == 0) {
				isStatToggle = true;
			} else {
				isStatToggle = false;
			}
			
			if((el.calories - el.startCalories) < 0) {
				self.caloriesConsume(self.moreConsume());
			} else {
				self.caloriesConsume(self.lessConsume());
			}
			
			if((el.carb - el.startCarb) < 0) {
				self.carbConsume(self.moreConsume());
			} else {
				self.carbConsume(self.lessConsume());
			}			
			
			if((el.protein - el.startProtein) < 0) {
				self.proteinConsume(self.moreConsume());
			} else {
				self.proteinConsume(self.lessConsume());
			}
			
			if((el.fat - el.startFat) < 0) {
				self.fatConsume(self.moreConsume());
			} else {
				self.fatConsume(self.lessConsume());
			}

			//console.log('Calories = ' + el.startCalories + ', Protein = ' + el.startProtein + ', Carb = ' + el.startCarb + ', Fat = ' + el.startFat);
			if(parseFloat(el.startCalories) === 0 && parseFloat(el.startCarb) === 0 && parseFloat(el.startProtein) === 0 && parseFloat(el.startFat) === 0) {
				self.isExistToggle(false);
			} else {
				self.isExistToggle(true);
			}

			caloriesNumber = Math.abs(el.calories - el.startCalories);
			carbNumber = Math.abs(el.carb - el.startCarb);
			proteinNumber =  Math.abs(el.protein - el.startProtein);
			fatNumber = Math.abs(el.fat - el.startFat);
			
			var o = {
				fullDate: changeDate,
				isExistToggle: self.isExistToggle(),
				isStatToggle: true, 
				caloriesNumber: self.roundOff(caloriesNumber, 2),
				carbNumber: self.roundOff(carbNumber, 2),
				proteinNumber: self.roundOff(proteinNumber, 2), 
				fatNumber: self.roundOff(fatNumber, 2),
				fiberNumber: self.roundOff(el.startFiber, 2),
				sugarNumber: self.roundOff(el.startSugar, 2),
				saturatedNumber: self.roundOff(el.startSaturated, 2), 
				unsaturatedNumber: self.roundOff(el.startUnsaturated, 2), 
				bitaminDNumber: self.roundOff(el.startBitamins, 2),
				caloriesConsume: self.caloriesConsume(),
				carbConsume: self.carbConsume(), 
				proteinConsume: self.proteinConsume(),
				fatConsume: self.fatConsume()
			}

			self.countPrevDay(self.countPrevDay() - 1);

			if(self.totalDailyStats() <= 10*self.countLoads()) {
				self.isLoadToggle(false);
			}

			self.dailyStatArray.push(new DailyStat(o));
		} else {
			self.isLoadToggle(false);
		}
	};

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
			self.title('Daily Stats | Nutrition');
            self.dailyStats('Daily Stats');
			self.fatWord('Fat');
			self.carbWord('Carb');
			self.proteinWord('Protein');
			self.fitWord('Fiber');
			self.sugarWord('Sugar');
			self.saturatedWord('Saturated');
			self.unsaturatedWord('Unsaturated');
			self.bitaminDWord('Vitamin C');
			self.tolocalestring('en-GB');
			self.lessConsume('Less Consumed');
			self.moreConsume('More Consumed');
			self.consumed('Consumed');
			self.noFoodData('No Food Data Found');
			self.loadMore('Load More');
			self.calorieWord('Calories');
			self.nutrientWord('Nutrients');
			self.moreNutrientWord('More Nutrients');
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
			self.title('Καθημερινά Στατιστικά | Nutrition');
            self.dailyStats('Καθημερινά Στατιστικά');
			self.fatWord('Λίπος');
			self.carbWord('Υδατάνθρακες');
			self.proteinWord('Πρωτεΐνες');
			self.fitWord('Φυτικές Ίνες');
			self.sugarWord('Σάκχαρα');
			self.saturatedWord('Κορεσμένα');
			self.unsaturatedWord('Ακόρεστα');
			self.bitaminDWord('Βιταμίνη C');
			self.tolocalestring('el-GR');
			self.lessConsume('Καταναλώθ. Λιγότ.');
			self.moreConsume('Καταναλώθ. Περισσότ.');
			self.consumed('Καταναλώθηκαν');
			self.noFoodData('Δεν Βρέθηκαν Δεδομένα Τροφίμων');
			self.loadMore('Φόρτωσε Περισσότερα');
			self.calorieWord('Θερμίδες');
			self.nutrientWord('Θρεπτικές Ουσίες');
			self.moreNutrientWord('Περισσότερες Θρεπτικές Ουσίες');
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
			activelabel: "",
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
			icons: "fas fa-sign-out-alt",
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

	function DailyStat(data) {
		var stat = this;

		stat.fullDate = ko.observable(data.fullDate);
		stat.isExistToggle = ko.observable(data.isExistToggle);
		stat.isStatToggle = ko.observable(data.isStatToggle);
		stat.isCaloriesToggle = ko.observable(true);
		stat.isNutrientToggle = ko.observable(true);
		stat.isMoreNutrientToggle = ko.observable(false);

		stat.noFoodData = ko.observable(self.noFoodData());
		stat.caloriesNumber = ko.observable(data.caloriesNumber);
		stat.carbNumber = ko.observable(data.carbNumber);
		stat.proteinNumber = ko.observable(data.proteinNumber);
		stat.fatNumber = ko.observable(data.fatNumber);
		stat.fiberNumber = ko.observable(data.fiberNumber);
		stat.sugarNumber = ko.observable(data.sugarNumber);
		stat.saturatedNumber = ko.observable(data.saturatedNumber);
		stat.unsaturatedNumber = ko.observable(data.unsaturatedNumber);
		stat.bitaminDNumber = ko.observable(data.bitaminDNumber);

		stat.caloriesConsume = ko.observable(data.caloriesConsume);
		stat.carbConsume = ko.observable(data.carbConsume);
		stat.proteinConsume = ko.observable(data.proteinConsume);
		stat.fatConsume = ko.observable(data.fatConsume);
		stat.consumed = ko.observable(self.consumed());
		stat.fatWord = ko.observable(self.fatWord());
		stat.carbWord = ko.observable(self.carbWord());
		stat.proteinWord = ko.observable(self.proteinWord());
		stat.fitWord = ko.observable(self.fitWord());
		stat.sugarWord = ko.observable(self.sugarWord());
		stat.saturatedWord = ko.observable(self.saturatedWord());
		stat.unsaturatedWord = ko.observable(self.unsaturatedWord());
		stat.bitaminDWord = ko.observable(self.bitaminDWord());
		stat.calorieWord = ko.observable(self.calorieWord());
		stat.nutrientWord = ko.observable(self.nutrientWord());
		stat.moreNutrientWord = ko.observable(self.moreNutrientWord());


		stat.openStat = function() {
			stat.isStatToggle(!stat.isStatToggle());
		};

		stat.openCalories = function() {
			stat.isCaloriesToggle(!stat.isCaloriesToggle());
		};

		stat.openNutrient = function() {
			stat.isNutrientToggle(!stat.isNutrientToggle());
		};

		stat.openMoreNutrient = function() {
			stat.isMoreNutrientToggle(!stat.isMoreNutrientToggle());
		};
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
	};

    self.langSubmit = function() {
		let o = {
			username: self.username(),
			newVal: self.sendLang()
		};

		$.post('./php/updatelang.php', o, function(data) {
			if(data.status == "ok") {
				self.dailystatspage();
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

	self.dailystatspage = function() {
        window.location.href = './dailystats';
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
	ko.applyBindings(new DailyStatsModel(), document.getElementById('body'));
});