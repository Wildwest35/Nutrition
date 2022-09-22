function BiometricsModel() {
	self = this;

	self.footer = ko.observable(`<section class="footer-container"><h5 class="copyright">© Copyright 2021 Nutrition.com</h5><div class="social"><img src="img/facebook.png" alt="food"><img src="img/instagram.png" alt="food"><img src="img/linkedin.png" alt="food"></div></section>`);
    self.lang = ko.observable('gr');
    self.sendLang = ko.observable(2);
    self.flag = ko.observable();
    self.title = ko.observable('Βιομετρικά | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Διαγράμματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
    self.username = ko.observable();
    self.dashboardArray = ko.observableArray([]);

	self.getUsername = function() {
		let o = {}; 

		$.post('./php/dashboarduser.php', o, function(data) {
			if(data.status == "ok") {
				self.username(data.data.username);
				self.lang(data.data.lang);
				self.changeLanguage();
                self.fillDashboardArray();
/* 				$.post('./php/getuserinfo.php', {user: self.username()}, function(data) {
					if(data.status == "ok") {

					} else if(data.status == "error") {

					}	
				});	 */
			} else if(data.status == "error") {
				self.login();
			}            
		});
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

			self.sendLang(1);
		} else if(self.lang() === 'gr') {
			self.flag('img/united-kingdom.png');

			self.home('Αρχική');
			self.biometrics('Βιομετρικά');
			self.measurements('Μετρήσεις');
			self.statistics('Διαγράμματα');
			self.createfood('Δημιουργία Φαγητού');
			self.addfood('Προσθήκη Φαγητού');
			self.settings('Ρυθμίσεις');
			self.logsout('Αποσύνδεση');
			self.title('Βιομετρικά | Nutrition');
		
			self.sendLang(2);
		}
	};

	self.fillDashboardArray = function() {
		var o = {
			name: self.home(), 
			icons: "las la-igloo", 
			redirect: "dashboard",
			activelabel: ""
		}

		var o1 = {
			name: self.biometrics(), 
			icons: "las la-tools", 
			redirect: "biometrics",
			activelabel: "active"
		}

		var o2 = {
			name: self.measurements(), 
			icons: "las la-weight", 
			redirect: "measurements",
			activelabel: ""
		}

		var o3 = {
			name: self.statistics(), 
			icons: "las la-chart-bar", 
			redirect: "statistics",
			activelabel: ""
		}

		var o4 = {
			name: self.createfood(), 
			icons: "las la-drumstick-bite", 
			redirect: "settings",
			activelabel: ""
		}

		var o5 = {
			name: self.addfood(), 
			icons: "las la-utensils", 
			redirect: "addfood",
			activelabel: ""
		}

		var o6 = {
			name: self.settings(), 
			icons: "las la-cog", 
			redirect: "settings",
			activelabel: ""
		}

		var o7 = {
			name: self.logsout(), 
			icons: "las la-sign-in-alt", 
			redirect: "logout",
			activelabel: ""
		}

		self.dashboardArray.push(new AddFood(o));
		self.dashboardArray.push(new AddFood(o1));
		self.dashboardArray.push(new AddFood(o2));
		self.dashboardArray.push(new AddFood(o3));
		//self.dashboardArray.push(new AddFood(o4));
		self.dashboardArray.push(new AddFood(o5));
		self.dashboardArray.push(new AddFood(o6));
		self.dashboardArray.push(new AddFood(o7));
	};

    function AddFood(data) {
		var add = this;

		add.name = ko.observable(data.name);
		add.icons = ko.observable(data.icons);
		add.redirect = ko.observable(data.redirect);
		add.activelabel = ko.observable(data.activelabel);

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
				//console.log("Didn\'t logout!");
			}            
		});			
	};

	self.login = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

	self.dashboardpage = function() {
		window.location.href = './dashboarduser.html';
	};

	self.settingspage = function() {
		window.location.href = './settingsuser.html';
	};

    self.addfoodpage = function() {
        window.location.href = './addFood.html';
    };

    self.biometricspage = function() {
        window.location.href = './biometrics.html';
    };

    self.measurementspage = function() {
        window.location.href = './measurements.html';
    };

    self.statisticspage = function() {
        window.location.href = './statistics.html';
    };

	self.getUsername();
}

$(function() {
	ko.applyBindings(new BiometricsModel(), document.getElementById('body'));
});