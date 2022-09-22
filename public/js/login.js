function LoginModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.loginMessage = ko.observable('');
    self.islockpassword = ko.observable(true);
	self.csrfLogin = ko.observable();
	self.lang = ko.observable('gr');
	self.connect = ko.observable('Σύνδεση');
	self.username = ko.observable('Username ή Email');
	self.usernamePlaceholder = ko.observable('Εισάγετε Username ή Email...');
	self.pass = ko.observable('Συνθηματικό');
	self.passPlaceholder =ko.observable('Εισάγετε Συνθηματικό...');
	self.forget = ko.observable('Ξεχάσατε τον κωδικό πρόσβασης;');
	self.submit = ko.observable('Καταχώρηση');
	self.notaccount = ko.observable('Δεν έχετε λογαριασμό;');
	self.register = ko.observable('Εγγραφτείτε');
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.maxlenght = ko.observable('* Το μέγιστο μέγεθος χαρακτήρων είναι');
    self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumeric = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
	self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
	self.empties = ko.observable('* Τα πεδία είναι κενά!');
	self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');
	self.flag = ko.observable();
	self.categorySelection = ko.observable('u');
	self.isSelectingCategory = ko.observable(true);
	self.nameCategory = ko.observable('');

	var alertError;

	self.email = ko.observable('').extend({
		alphaNumericMail: "",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});
	self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

    self.email.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
    });

    self.password.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
    });

    self.lockerpassword = function() {
        let password = document.getElementById("password");
        self.islockpassword(!self.islockpassword());
        if(password.type == "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    };

    self.checkLang = function() {
		var url = window.location.search;
		const urlParams = new URLSearchParams(url);

		var lang = urlParams.get("lang");

		let o = {
			lang: lang
		};

        $.post('./php/checkLang.php', o, function(data) {
            if(data.status == "ok") {
                self.lang(data.data);
            } else {
                self.lang(data.data);
            }
			self.changeLanguage();
			self.csrf();
			//self.getCategorySelection();
        });
    };

	self.csrf = function() {
		let o = {}

		$.post('./php/csrftoken.php', o, function(data) {
			if(data.status == "ok") {
				self.csrfLogin(data.data);
			} else if(data.status == "error") {
				
			}            
		});	
	}

    self.getCategorySelection = function() {
		let o = {};
        $.post('./php/getcategoryletter.php', o, function(data) {
            if(data.status == "ok") {
				console.log(data.data);
                self.categorySelection(data.data);
            }         
        });	
    };

    self.login = function() {
		if(!self.email.alphaNumericMailError() && !self.password.minLengthError() && self.email() != '' && self.password() != '') {
			let o = {
				email: self.email(),
				password: self.password(),
				csrf: self.csrfLogin() 
			}
				
			//if(self.nameCategory() == 'User') {
			$.post('./php/login.php', o, function(data) {
				if(data.status == "ok") {
					self.dashboardpage();
				} else if(data.status == "error") {
					alertError = document.getElementById("alertError");
					alertError.style.display = "block";
					self.loginMessage(data.data);
					self.openLoginWarning();
				}            
			});
/* 			} else {
				$.post('./php/loginadmin.php', o, function(data) {
					if(data.status == "ok") {
						self.dashboardAdminPage();
						//console.log('Welcome Admin');
					} else if(data.status == "error") {
						alertError = document.getElementById("alertError");
						alertError.style.display = "block";
						self.loginMessage(data.data);
						self.openLoginWarning();
					}            
				});				
			} */
		} else {
			if(self.email() == '') {
				self.email(" ");
				self.email.emptyFieldError(true);
				self.email("");
			} 

			if(self.password() == '') {
				self.password(" ");
				self.password.emptyFieldError(true);
				self.password("");
			}
		}
    };	

	self.changeLanguage = function() {
		if(self.lang() === 'en') {
			self.connect('Login');
			self.username('Username or Email');
			self.usernamePlaceholder('Enter Username or Email...');
			self.pass('Password');
			self.passPlaceholder('Enter Password...');
			self.forget('Did you Forgot your password?');
			self.submit('Submit');
			self.notaccount('You do not have an account?');
			self.register('Register');
			self.minlenght('* The minimum character lenght is');
			self.maxlenght('* The maximum lenght is');
			self.numeric('* Only numbers are allowed');
			self.alphaNumeric('* Only Latin characters, numbers and underscores are allowed.');
			self.isEmail('* Please enter a valid email.');
			self.empties('* Fields are empty!');
			self.loginbtn('Login');
			self.registerbtn('Register');
			self.flag('img/greece.png');
		} else if(self.lang() === 'gr') {
			self.connect('Σύνδεση');
			self.username('Username ή Email');
			self.usernamePlaceholder('Εισάγετε Username ή Email...');
			self.pass('Συνθηματικό');
			self.passPlaceholder('Εισάγετε Συνθηματικό...');
			self.forget('Ξεχάσατε τον κωδικό πρόσβασης;');
			self.submit('Καταχώρηση');
			self.notaccount('Δεν έχετε λογαριασμό;');
			self.register('Εγγραφτείτε');
            self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.maxlenght('* Το μέγιστο μέγεθος χαρακτήρων είναι');
            self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumeric('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
			self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');
			self.empties('* Τα πεδία είναι κενά!');
			self.loginbtn('Σύνδεση');
			self.registerbtn('Εγγραφή');
			self.flag('img/united-kingdom.png');
		}
	};

    self.collapse = function() {
        var options = document.getElementById("nav-bar-options");
        var account = document.getElementById("nav-bar-account");

        if(options.style.display == "") {
            options.style.display = "flex";
        } else {
            options.style.display = "";
        }

        if(account.style.display == "") {
            account.style.display = "flex";
        } else {
            account.style.display = "";
        }
    }

	self.openLoginWarning = function() {
		$('.alert').removeClass("hide");
		$('.alert').addClass("show");
    };

	self.closeLoginWarning = function() {
		$('.alert').removeClass("show");
		$('.alert').addClass("hide");
    };

	self.loginPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}
		
		self.loginPage();
	};

	self.dashboardpage = function() {
		window.location.href = './dashboarduser';
	};

	self.dashboardAdminPage = function() {
		window.location.href = './dashboardadmin.html';
	};

	self.forgetPassPage = function() {
		window.location.href = './forgetpassword.html?lang=' + self.lang();
	};

	self.registerPage = function() {
		window.location.href = './register.html?lang=' + self.lang();
	};

	self.loginPage = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

	self.indexPage = function() {
		window.location.href = './?lang=' + self.lang();
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

    self.categorySelection = function(category) {
        let o = {
            category: category
        }

        $.post('./php/setcategoryletter.php', o, function(data) {
            if(data.status == "ok") {

				self.isSelectingCategory(false);
				if(category == 'u') {
					self.nameCategory('User');
				} else {
					self.nameCategory('Admin');
				}
                //self.loginPage();
            }         
        });	
    };

	self.checkLang();
}

$(function() {
	ko.applyBindings(new LoginModel(), document.getElementById('body'));
});