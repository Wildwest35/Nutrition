function BiometricsModel() {
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
    self.title = ko.observable('Βιομετρικά | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
	self.noExercise = ko.observable('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
    self.lightExercise = ko.observable('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
    self.moderateExercise = ko.observable('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
    self.activeExercise = ko.observable('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
    self.veryActiveExercise = ko.observable('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
	self.exerciseName = ko.observable('Άσκηση');
    self.exerciseText = ko.observable('');
	self.type = ko.observable('Τύπος');
	self.where = ko.observable('Όπου');
	self.weightBody = ko.observable('Βάρος Σώματος');
	self.heightBody = ko.observable('Ύψος Σώματος');
	self.weightName = ko.observable('Βάρος');
	self.heightName = ko.observable('Υψος');
	self.ageName = ko.observable('Ηλικία');
	self.sexName = ko.observable('Γένος');
	self.bmrName = ko.observable('Βασικός Μεταβολικός Ρυθμός');
	self.factorName = ko.observable('Συντελεστής');
	self.bmiInfo = ko.observable('Ο Δείκτη μάζας σώματος ειναι 21.92. Αυτό θεωρείται φυσιολογικό.');
	self.bmiInfo1 = ko.observable('Ο Δείκτη μάζας σώματος ειναι');
	self.bmiInfo2 = ko.observable('Αυτό θεωρείται');
	self.bmrInfo = ko.observable('Το σώμα σας χρειάζεται τουλάχιστον 8888 Θερμίδες για μία φυσιολογική λειτουργία του σώματος!');
	self.bmrInfo1 = ko.observable('Το σώμα σας χρειάζεται τουλάχιστον');
	self.bmrInfo2 = ko.observable('Θερμίδες για μία φυσιολογική λειτουργία του σώματος!');
	self.amrInfo = ko.observable('Για να παραμείνετε στο τρέχον βάρος σας πρέπει να καταναλώνετε κάθε μέρα 2450 Θερμίδες!');
	self.amrInfo1 = ko.observable('Για να παραμείνετε στο τρέχον βάρος σας πρέπει να καταναλώνετε κάθε μέρα');
	self.amrInfo2 = ko.observable('Θερμίδες!');
	self.bmiInfoTitle = ko.observable('Information BMI');
	self.bmrInfoTitle = ko.observable('Information BMR');
	self.amrInfoTitle = ko.observable('Information AMR');
	self.information = ko.observable('Πληροφορίες');
	self.bmiCalculate = ko.observable('Υπολογισμός ΔΜΣ');
	self.bmrCalculate = ko.observable('Υπολογισμός ΒΜΡ');
	self.amrCalculate = ko.observable('Υπολογισμός AMR');
	self.categoryHealth = ko.observable('');
	self.severeThinness = ko.observable('Σοβαρή Λεπτότητα');
	self.moderateThinness = ko.observable('Μέτρια Λεπτότητα');
	self.mildThinness = ko.observable('Ήπια Λεπτότητα');
	self.normal = ko.observable('Φυσιολογικό');
	self.overweight = ko.observable('Υπέρβαρος');
	self.obeseClass1 = ko.observable('Παχύσαρκοι Κατηγορία 1');
	self.obeseClass2 = ko.observable('Παχύσαρκοι Κατηγορία 2');
	self.obeseClass3 = ko.observable('Παχύσαρκοι Κατηγορία 3');
	self.result = ko.observable('Αποτέλεσμα');
	self.male = ko.observable('Άντρας');
	self.female = ko.observable('Γυναίκα');
	self.gender = ko.observable('');
    self.username = ko.observable();
    self.dashboardArray = ko.observableArray([]);
	self.sex = ko.observable(2);
	self.age = ko.observable(23);
	self.height = ko.observable(175);
	self.weight = ko.observable(75);
	self.bmi = ko.observable(0);
	self.bmr = ko.observable(0);
	self.bmrHelp = ko.observable(0);
	self.amr = ko.observable(0);
	self.exercise = ko.observable(1);
	self.factor = ko.observable(1.2);
	self.typeBMR = ko.observable('');

	self.sex.subscribe(function(newVal) {
		if(newVal == 1) {
			self.gender(self.female());
			self.typeBMR('655.1 + 9.563*W + 1.85*H - 4.676*A');
		} else {
			self.gender(self.male());
			self.typeBMR('66.47 + 13.75*W + 5.003*H - 6.755*A');
		}
		self.sex(newVal);
		self.calculateBMR();
		self.bmrInfo(self.bmrInfo1() + ' ' + self.bmr() + ' ' + self.bmrInfo2());
	});

	self.age.subscribe(function(newVal) {
		self.age(newVal);
		self.calculateBMR();
		self.bmrInfo(self.bmrInfo1() + ' ' + self.bmr() + ' ' + self.bmrInfo2());
	});

	self.height.subscribe(function(newVal) {
		self.height(newVal);
		self.calculateBMR();
		self.calculateBMI();
		self.bmiStages();
		self.bmrInfo(self.bmrInfo1() + ' ' + self.bmr() + ' ' + self.bmrInfo2());
		self.bmiInfo(self.bmiInfo1() + ' ' + self.bmi() + '. ' + self.bmiInfo2() + ' ' + self.categoryHealth() + '.');
	});

	self.weight.subscribe(function(newVal) {
		self.weight(newVal);
		self.calculateBMR();
		self.calculateBMI();
		self.bmiStages();
		self.bmrInfo(self.bmrInfo1() + ' ' + self.bmr() + ' ' + self.bmrInfo2());
		self.bmiInfo(self.bmiInfo1() + ' ' + self.bmi() + '. ' + self.bmiInfo2() + ' ' + self.categoryHealth() + '.');
	});

	self.bmr.subscribe(function(newVal) {
		self.bmr(newVal);
		self.calculateAMR();
		self.amrInfo(self.amrInfo1() + ' ' + self.amr() + ' ' + self.amrInfo2());
	});

	self.bmrHelp.subscribe(function(newVal) {
		self.bmrHelp(newVal);
		self.calculateAMR();
		self.amrInfo(self.amrInfo1() + ' ' + self.amr() + ' ' + self.amrInfo2());
	});

	self.exercise.subscribe(function(newVal) {
		self.exercise(newVal);
		self.calculateAMR();
		self.amrInfo(self.amrInfo1() + ' ' + self.amr() + ' ' + self.amrInfo2());
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
				$.post('./php/getuserinfo.php', {user: self.username()}, function(data) {
					if(data.status == "ok") {
						//console.log(data.data);
						self.sex(data.data.sex);
						self.age(data.data.age);
						self.height(data.data.height);
						self.weight(data.data.weights);
					} else if(data.status == "error") {

					}	
				});	
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.calculateBMI = function() {
		if(self.weight() != 0 && self.height() != 0) {
			self.bmi(parseFloat(self.weight()) / Math.pow(parseFloat(self.height())/100, 2));
			self.bmi(self.roundOff(self.bmi(), 2));
		} else {
			self.bmi(0);
		}
	};

	self.calculateBMR = function() {
		if(self.weight() != 0 && self.height() != 0 && self.age() != 0) {
			if(parseFloat(self.sex()) == 2) {
				self.bmr(66.47 + (13.75*self.weight()) + (5.003*self.height()) - (6.755*self.age()));
			} else {
				self.bmr(655.1 + (9.563*self.weight()) + (1.85*self.height()) - (4.676*self.age()));
			}
			self.bmr(self.roundOff(self.bmr(), 2));
		} else {
			self.bmr(0);
		}
		self.bmrHelp(self.bmr());
	};

	self.calculateAMR = function() {
		if(self.bmrHelp() != 0) {
			if(self.exercise() == 1) {
				self.factor(1.2);
			} else if(self.exercise() == 2) {
				self.factor(1.375);
			} else if(self.exercise() == 3) {
				self.factor(1.55);
			} else if(self.exercise() == 4) {
				self.factor(1.725);
			} else {
				self.factor(1.9);
			}
			self.amr(self.bmrHelp() * self.factor());
			self.amr(self.roundOff(self.amr(), 2));
		} else {
			self.amr(0);
		}
	};

	self.bmiStages = function() {
		if(self.bmi() < 16) {
			self.categoryHealth(self.severeThinness());
		} else if(self.bmi() < 17) {
			self.categoryHealth(self.moderateThinness());
		} else if(self.bmi() < 18.5) {
			self.categoryHealth(self.mildThinness());
		} else if(self.bmi() < 25) {
			self.categoryHealth(self.normal());
		} else if(self.bmi() < 30) {
			self.categoryHealth(self.overweight());
		} else if(self.bmi() < 35) {
			self.categoryHealth(self.obeseClass1());
		} else if(self.bmi() < 40) {
			self.categoryHealth(self.obeseClass2());
		} else {
			self.categoryHealth(self.obeseClass3());
		}
	};

	self.switch = function(id) {
		var modal = document.getElementById(id);
		
		if(modal.style.display == " " || modal.style.display == "none"|| modal.style.display == "") {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
	};

	self.stopProp = function(event) {
		event.stopPropagation();
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
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
			self.title('Biometrics | Nutrition');
			self.exerciseName('Exercise');
            self.noExercise('Little or No Exercise (0-1 Days/Week)');
            self.lightExercise('Light Exercise (1-3 Days/Week)');
            self.moderateExercise('Moderate Exercise (3-5 Days/Week)');
            self.activeExercise('Intense Exercise (6-7 Days/Week)');
            self.veryActiveExercise('Very Intense Exercise (6-7 Days/Week)');
            self.exerciseText(self.noExercise());
			self.type('Type');
			self.where('Where');
			self.weightBody('Weight Body');
			self.heightBody('Height Body');
			self.ageName('Age');
			self.sexName('Sex');
			self.weightName('Weight');
			self.heightName('Height');
			self.bmrName('Basal Metabolic Rate');
			self.factorName('Factor');
			self.bmiInfo('Body mass index is 21.92. This is considered normal.');
			self.bmrInfo('Your body needs at least 8888 Calories for normal body function!');
			self.bmrInfo1('Your body needs at least');
			self.bmrInfo2('Calories for normal body function!');
			self.amrInfo('To stay at your current weight you need to consume 2450 Calories every day!');
			self.amrInfo1('To stay at your current weight you need to consume');
			self.amrInfo2('Calories every day!');
			self.bmiInfo1('Body mass index is');
			self.bmiInfo2('This is considered');
			self.bmiInfoTitle('Information BMI');
			self.bmrInfoTitle('Information BMR');
			self.amrInfoTitle('Information AMR');
			self.information('Information');
			self.bmiCalculate('Calculate BMI');
			self.bmrCalculate('Calculate BMR');
			self.amrCalculate('Calculate AMR');
			self.severeThinness('Severe Thinness');
			self.moderateThinness('Moderate Thinness');
			self.mildThinness('Mild Thinness');
			self.normal('Normal');
			self.overweight('Overweight');
			self.obeseClass1('Obese Class 1');
			self.obeseClass2('Obese Class 2');
			self.obeseClass3('Obese Class 3');
			self.result('Result');
			self.male('Male');
			self.female('Female');
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
			self.title('Βιομετρικά | Nutrition');
            self.exerciseName('Άσκηση');
            self.noExercise('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
            self.lightExercise('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
            self.moderateExercise('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
            self.activeExercise('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.veryActiveExercise('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.exerciseText(self.noExercise());			
			self.type('Τύπος');
			self.where('Όπου');
			self.weightBody('Βάρος Σώματος');
			self.heightBody('Ύψος Σώματος');
			self.ageName('Ηλικία');
			self.sexName('Φύλο');
			self.weightName('Βάρος');
			self.heightName('Υψος');
			self.bmrName('Βασικός Μεταβολικός Ρυθμός');
			self.factorName('Συντελεστής');
			self.bmiInfo('Ο Δείκτη μάζας σώματος ειναι 21.92. Αυτό θεωρείται φυσιολογικό.');
			self.bmrInfo('Το σώμα σας χρειάζεται τουλάχιστον 8888 Θερμίδες για μία φυσιολογική λειτουργία του σώματος!');
			self.bmrInfo1('Το σώμα σας χρειάζεται τουλάχιστον');
			self.bmrInfo2('Θερμίδες για μία φυσιολογική λειτουργία του σώματος!');
			self.amrInfo('Για να παραμείνετε στο τρέχον βάρος σας πρέπει να καταναλώνετε κάθε μέρα 2450 Θερμίδες!');
			self.amrInfo1('Για να παραμείνετε στο τρέχον βάρος σας πρέπει να καταναλώνετε κάθε μέρα');
			self.amrInfo2('Θερμίδες!');
			self.bmiInfo1('Ο Δείκτη μάζας σώματος ειναι');
			self.bmiInfo2('Αυτό θεωρείται');
			self.bmiInfoTitle('Πληροφορίες ΔΜΣ');
			self.bmrInfoTitle('Πληροφορίες ΒΜΡ');
			self.amrInfoTitle('Πληροφορίες ΕΜΡ');
			self.information('Πληροφορίες');
			self.bmiCalculate('Υπολογισμός ΔΜΣ');
			self.bmrCalculate('Υπολογισμός ΒΜΡ');
			self.amrCalculate('Υπολογισμός ΕΜΡ');
			self.severeThinness('Σοβαρή Λεπτότητα');
			self.moderateThinness('Μέτρια Λεπτότητα');
			self.mildThinness('Ήπια Λεπτότητα');
			self.normal('Φυσιολογικό');
			self.overweight('Υπέρβαρος');
			self.obeseClass1('Παχύσαρκοι Κατηγορία 1');
			self.obeseClass2('Παχύσαρκοι Κατηγορία 2');
			self.obeseClass3('Παχύσαρκοι Κατηγορία 3');
			self.result('Αποτέλεσμα');
			self.male('Άντρας');
			self.female('Γυναίκα');
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
			activelabel: "active",
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

    self.langSubmit = function() {
		let o = {
			username: self.username(),
			newVal: self.sendLang()
		};

		$.post('./php/updatelang.php', o, function(data) {
			if(data.status == "ok") {
				self.biometricspage();
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
	ko.applyBindings(new BiometricsModel(), document.getElementById('body'));
});