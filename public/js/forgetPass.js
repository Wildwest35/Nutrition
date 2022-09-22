function ForgetPassModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.loginMessage = ko.observable('');
	self.lang = ko.observable('gr');
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.maxlenght = ko.observable('* Το μέγιστο μέγεθος χαρακτήρων είναι');
	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumeric = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
	self.isEmptyField = ko.observable('* Το πεδίο είναι κενό!');
	self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
	self.empties = ko.observable('* Τα πεδία είναι κενά!');
	self.remind = ko.observable('Υπενθύμιση Κωδικού');
	self.emailPlaceholder = ko.observable('Εισάγετε Email...');
	self.submit = ko.observable('Καταχώρηση');
	self.opinion = ko.observable('Αλλάξατε γνώμη;');
	self.login = ko.observable('Συνδεθείτε');
	self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');
	self.sendbtn = ko.observable('Αποστολή')
	self.flag = ko.observable();

    self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email.",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

    self.email.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
    });

	self.forgetPassword = function() {
		let o = {
			email: self.email(),
			lang: self.lang()
		}

		if(!self.email.emailError() && self.email() != '') {
			self.switch('modalLoad');
			$.post('./php/forgetPass.php', o, function(data) {
				if(data.status == "ok") {
					//console.log(data.data);
					alertError = document.getElementById("alertError");
					errorSub = document.getElementById("errorSub");
					alertError.style.display = "block";
					errorSub.style.color = "rgb(51, 134, 33)";
					errorSub.style.border = "1px solid rgb(23, 100, 6)";
					errorSub.style.backgroundColor = "rgb(199, 238, 190)";
					self.loginMessage(data.data);
				} else if(data.status == "error") {
					//console.log(data.data);
					alertError = document.getElementById("alertError");
					errorSub = document.getElementById("errorSub");
					alertError.style.display = "block";
					errorSub.style.color = "rgb(185, 0, 0)";
					errorSub.style.border = "1px solid rgb(117, 17, 17)";
					errorSub.style.backgroundColor = "rgb(238, 190, 190)";
					self.loginMessage(data.data);
				}
				self.switch('modalLoad');
			});	
		} else {
			if(self.email() == '') {
				self.email(" ");
				self.email.emptyFieldError(true);
				self.email("");
			}
			self.switch('modalLoad');
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
        });
    };

	self.switch = function(id) {
		var modal = document.getElementById(id);
		
		if(modal.style.display == " " || modal.style.display == "none"|| modal.style.display == "") {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
	};

	self.changeLanguage = function() {
		if(self.lang() === 'en') {
			self.minlenght('* The minimum character lenght is');
			self.maxlenght('* The maximum lenght is');
			self.numeric('* Only numbers are allowed');
			self.alphaNumeric('* Only Latin characters, numbers and underscores are allowed.');
			self.isEmptyField('* The field is empty!');
			self.isEmail('* Please enter a valid email.');
			self.empties('* Fields are empty!');
			self.remind('Remind Password');
			self.emailPlaceholder('Enter Email...');
			self.submit('Submit');
			self.opinion('Did you change your mind?');
			self.login('Sign In');
			self.loginbtn('Login');
			self.registerbtn('Register');
			self.sendbtn('Send');
			self.flag('img/greece.png');
		} else if(self.lang() === 'gr') {
			self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.maxlenght('* Το μέγιστο μέγεθος χαρακτήρων είναι');
			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumeric('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
			self.isEmptyField('* Το πεδίο είναι κενό!');
			self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');
			self.empties('* Τα πεδία είναι κενά!');
			self.remind('Υπενθύμιση Κωδικού');
			self.emailPlaceholder('Εισάγετε Email...');
			self.submit('Καταχώρηση');
			self.opinion('Αλλάξατε γνώμη;');
			self.login('Συνδεθείτε');
			self.loginbtn('Σύνδεση');
			self.registerbtn('Εγγραφή');
			self.sendbtn('Αποστολή');
			self.flag('img/united-kingdom.png');
		}
	}

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

	self.forgetPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}
		
		self.forgetPassPage();
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

	self.forgetPassPage = function() {
		window.location.href = './forgetpassword.html?lang=' + self.lang();
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

	self.checkLang();
}

$(function() {
	ko.applyBindings(new ForgetPassModel(), document.getElementById('body'));
});