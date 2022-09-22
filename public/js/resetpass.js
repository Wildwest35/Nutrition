function ResetPassModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition.com');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.title = ko.observable('Επαναφορά Κωδικού | Nutrition');
	self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');
	self.flag = ko.observable('img/greece.png');
	self.resetpasswrd = ko.observable('Επαναφορά Κωδικού');
	self.pass = ko.observable('Συνθηματικό');
    self.passPlaceholder = ko.observable('Εισάγετε Συνθηματικό');
    self.repeatpass = ko.observable('Επιβεβαίωση Συνθηματικού');
    self.repeatpassPlaceholder = ko.observable('Εισάγετε Επιβεβαίωση Συνθηματικού');
	self.login = ko.observable('Συνδεθείτε');
	self.submit = ko.observable('Καταχώρηση');
	self.opinion = ko.observable('Αλλάξατε γνώμη;');
	self.islockpassword = ko.observable(true);
	self.islockrepeatpasswrord = ko.observable(true);
    self.passwordCheckcError = ko.observable(false);
    self.passwordCheckMessage = ko.observable(null);
	self.errorMessage = ko.observable(null);  
	self.currentActive = ko.observable(1);
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.empties = ko.observable('* Τα πεδία είναι κενά!');

	var url = window.location.search;
	const urlParams = new URLSearchParams(url);

	var number = urlParams.get("number");
	var code = urlParams.get("code");
	var lang = urlParams.get("lang");

	self.lang = ko.observable(lang);
	self.num = ko.observable(number);
	self.code = ko.observable(code);

	self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});    

    self.repeatpassword = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	}); 

    self.password.subscribe(function(newVal) {
        if(self.repeatpassword() != '') {
            self.passwordCheck();
        }
    });

    self.repeatpassword.subscribe(function(newVal) {
        self.passwordCheck();
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

    self.lockerrepeatpassword = function() {
        let password = document.getElementById("repeatpassword");
        self.islockrepeatpasswrord(!self.islockrepeatpasswrord());
        if(password.type == "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    };

    self.passwordCheck = function() {
        if(self.password() == self.repeatpassword()) {
            self.passwordCheckcError(false);
            self.passwordCheckMessage(null);
        } else {
            self.passwordCheckcError(true);
            self.passwordCheckMessage('* Η "Επιβεβαίωση Συνθηματικού" δεν αντιστοιχεί με το "Συνθηματικό".');
        }
    };

	self.checkElements = function() {
		self.changeLanguage();

		let o = {
			number: number,
			code: code
		}

		$.post('./php/checkUrlElement.php', o, function(data) {
			if(data.status == "ok") {

			} else {
				self.currentActive(2);
				//var logo = document.getElementById("logo");
				var alertError = document.getElementById("alertError");
				var errorSub = document.getElementById("errorSub");
				//logo.style.marginRight = 0;
                alertError.style.display = "block";
				errorSub.style.color = "rgb(185, 0, 0)";
				errorSub.style.border = "1px solid rgb(117, 17, 17)";
				errorSub.style.backgroundColor = "rgb(238, 190, 190)";
				errorSub.style.padding = "2rem 1rem";
                self.errorMessage(data.data);
/* 				setTimeout(function() {
					self.loginPage();		
				}, 6000); 	 */	
			}
		});
	};

	self.reset = function() {
		if(!self.passwordCheckcError() && !self.repeatpassword.minLengthError() && !self.password.minLengthError() && self.repeatpassword() != '' && self.password() != '') {
/* 			var url = window.location.search;
			const urlParams = new URLSearchParams(url);

			var number = urlParams.get("number");
			var code = urlParams.get("code"); */
			var alertError = document.getElementById("alertError");
			var errorSub = document.getElementById("errorSub");
			let o = {
				password: self.password(),
				repeatpassword: self.repeatpassword(),
				number: number,
				code: code
			}

			$.post('./php/resetpass.php', o, function(data) {

				if(data.status == "ok") {
					//var logo = document.getElementById("logo");
					self.currentActive(2);
					//logo.style.marginRight = 0;
					alertError.style.display = "block";
					errorSub.style.color = "rgb(51, 134, 33)";
					errorSub.style.border = "1px solid rgb(23, 100, 6)";
					errorSub.style.backgroundColor = "rgb(199, 238, 190)";
					errorSub.style.padding = "2rem 1rem";
					self.errorMessage(data.data);
/* 					setTimeout(function() {
						self.loginPage();		
					}, 6000);  */
				} else {
					self.currentActive(2);
					//var logo = document.getElementById("logo");
					//var alertError = document.getElementById("alertError");
					//var errorSub = document.getElementById("errorSub");
					//logo.style.marginRight = 0;
					alertError.style.display = "block";
					errorSub.style.color = "rgb(185, 0, 0)";
					errorSub.style.border = "1px solid rgb(117, 17, 17)";
					errorSub.style.backgroundColor = "rgb(238, 190, 190)";
					errorSub.style.padding = "2rem 1rem";
					self.errorMessage(data.data);
/* 					setTimeout(function() {
						self.loginPage();		
					}, 6000); */ 
				}
			});
		} else {
			if(self.password() == '') {
				self.password(" ");
				self.password.emptyFieldError(true);
				self.password("");
			}

			if(self.repeatpassword() == '') {
				self.repeatpassword(" ");
				self.password.emptyFieldError(true);
				self.repeatpassword("");
			}
		}
	};

	self.changeLanguage = function() {
		if(self.lang() == 'en') {
			self.loginbtn('Login');
			self.registerbtn('Register');
			self.flag('img/greece.png');
			self.resetpasswrd('Reset Password');
			self.title('Activate Account | Nutrition');
			self.pass('Password');
            self.passPlaceholder('Enter Password');
            self.repeatpass('Confirm Password');
            self.repeatpassPlaceholder('Enter Confirm Password');
			self.login('Login');
			self.submit('Submit');
			self.opinion('Did you change your mind?');
			self.minlenght('* The minimum character lenght is');
			self.empties('* Fields are empty!');
		} else if(self.lang() == 'gr') {
			self.loginbtn('Σύνδεση');
			self.registerbtn('Εγγραφή');
			self.flag('img/united-kingdom.png');
			self.resetpasswrd('Επαναφορά Κωδικού');
			self.title('Ενεργοποίηση Λογαριασμού | Nutrition');
			self.pass('Συνθηματικό');
            self.passPlaceholder('Εισάγετε Συνθηματικό');
            self.repeatpass('Επιβεβαίωση Συνθηματικού');
            self.repeatpassPlaceholder('Εισάγετε Επιβεβαίωση Συνθηματικού');
			self.login('Συνδεθείτε');
			self.submit('Καταχώρηση');
			self.opinion('Αλλάξατε γνώμη;');
			self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.empties('* Τα πεδία είναι κενά!');
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

	self.resetpassPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}
		
		self.resetpassPage();
	};

    self.loginPage = function() {
        window.location.href = `./login.html?lang=${self.lang()}`;
    };
	
	self.registerPage = function() {
		window.location.href = `./register.html?lang=${self.lang()}`;
	};

	self.resetpassPage = function() {
		window.location.href = `./resetpass.html?number=${self.num()}&code=${self.code()}&lang=${self.lang()}`;
	};

	self.indexPage = function() {
		window.location.href = `./?lang=${self.lang()}`;
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

	self.checkElements();
}

$(function() {
	ko.applyBindings(new ResetPassModel(), document.getElementById('body'));
});