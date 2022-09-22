function ConfirmNewEmailModel() {
	self = this;	
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.errorMessage = ko.observable(null);  
	self.flag = ko.observable('img/greece.png');
	self.confirmEmailWord = ko.observable('Ταυτοποίηση Email');
	self.title = ko.observable('Ταυτοποίηση Email | Nutrition');
	self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');

	var url = window.location.search;
	const urlParams = new URLSearchParams(url);

	var number = urlParams.get("number");
	var code = urlParams.get("code");
	var lang = urlParams.get("lang");

	self.lang = ko.observable(lang);
	self.num = ko.observable(number);
	self.code = ko.observable(code);

	self.confirmEmail = function() {
		
		var alertError = document.getElementById("alertError");
		var errorSub = document.getElementById("errorSub");

		let o = {
			number: number,
			code: code
		}

		self.changeLanguage();

		$.post('./php/confirmNewEmail.php', o, function(data) {
			if(data.status == "ok") {
				alertError.style.display = "block";
				errorSub.style.color = "rgb(51, 134, 33)";
				errorSub.style.border = "1px solid rgb(23, 100, 6)";
				errorSub.style.backgroundColor = "rgb(199, 238, 190)";
				errorSub.style.padding = "2rem 1rem";
				self.errorMessage(data.data);
/* 				setTimeout(function() {
					self.loginPage();		
				}, 6000);  */
			} else {
                alertError.style.display = "block";
				errorSub.style.color = "rgb(185, 0, 0)";
				errorSub.style.border = "1px solid rgb(117, 17, 17)";
				errorSub.style.backgroundColor = "rgb(238, 190, 190)";
				errorSub.style.padding = "2rem 1rem";
                self.errorMessage(data.data);
/* 				setTimeout(function() {
					self.loginPage();		
				}, 6000);  */
			}
		});
	};

	self.changeLanguage = function() {
		if(self.lang() == 'en') {
			self.loginbtn('Login');
			self.registerbtn('Register');
			self.flag('img/greece.png');
			self.confirmEmailWord('Activate Account');
			self.title('Email Identification | Nutrition');
		} else if(self.lang() == 'gr') {
			self.loginbtn('Σύνδεση');
			self.registerbtn('Εγγραφή');
			self.flag('img/united-kingdom.png');
			self.confirmEmailWord('Ενεργοποίηση Λογαριασμού');
			self.title('Ταυτοποίηση Email | Nutrition');
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

	self.confirmNewEmailPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}
		
		self.confirmNewEmailPage();
	};
 
    self.loginPage = function() {
        window.location.href = `./login.html?lang=${self.lang()}`;
    };
	
	self.registerPage = function() {
		window.location.href = `./register.html?lang=${self.lang()}`;
	};

	self.confirmNewEmailPage = function() {
		window.location.href = `./confirmNewEmail.html?number=${self.num()}&code=${self.code()}&lang=${self.lang()}`;
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

	self.confirmEmail();
}

$(function() {
	ko.applyBindings(new ConfirmNewEmailModel(), document.getElementById('body'));
});