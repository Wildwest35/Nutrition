function LoginModel() {
	self = this;
	self.footer = ko.observable(`<section class="footer-container"><h5 class="copyright">© Copyright 2021 Nutrition.com</h5><div class="social"><img src="img/facebook.png" alt="food"><img src="img/instagram.png" alt="food"><img src="img/linkedin.png" alt="food"></div></section>`);
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
		
		self.loginChoosePage();
	};

	self.registerPage = function() {
		window.location.href = './register.html?lang=' + self.lang();
	};

	self.loginPage = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

    self.loginChoosePage = function() {
		window.location.href = './loginchoose.html?lang=' + self.lang();
	};

    self.loginAdminPage = function() {
		window.location.href = './loginAdmin.html?lang=' + self.lang();
	};

	self.indexPage = function() {
		window.location.href = './index.html?lang=' + self.lang();
	};

    self.categorySelection = function(category) {
        let o = {
            category: category
        }

        $.post('./php/setcategoryletter.php', o, function(data) {
            if(data.status == "ok") {
                console.log(data.data);
                self.loginPage();
            }         
        });	
    };

	self.checkLang();
}

$(function() {
	ko.applyBindings(new LoginModel(), document.getElementById('body'));
});