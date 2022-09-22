function MainViewModel() {
	self = this;
    self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
    self.isModalOpen = ko.observable(false);
    self.currentActive = ko.observable(1);
    self.lang = ko.observable('gr');
    self.flag = ko.observable();
    self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumeric = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
    self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
    self.alphaNumericLatin = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, ελληνικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
    self.fillAll = ko.observable('Πρέπει να συμπληρώσετε όλα τα πεδία');
    self.fillAllError = ko.observable(false);
    self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');
    self.name = ko.observable('Όνομα');
    self.email = ko.observable('Email');
    self.subject = ko.observable('Θέμα');
    self.message = ko.observable('Μήνυμα');
    self.send = ko.observable('Αποστολή');
    self.namePlaceholder = ko.observable('Πληκτρολόγησε Όνομα...');
    self.emailPlaceholder = ko.observable('Πληκτρολόγησε Email...');
    self.subjectPlaceholder = ko.observable('Πληκτρολόγησε Θέμα...');
    self.messagePlaceholder = ko.observable('Πληκτρολόγησε Μήνυμα...');
    self.home = ko.observable('Αρχική');
    self.about = ko.observable('Σχετικά');
    self.aboutUs = ko.observable('Σχετικά Με Μας');
    self.communication = ko.observable('Επικοινωνία');
    self.supervisor = ko.observable('Επιβλέπων');
    self.webdev = ko.observable('Web Developer');
    self.minas = ko.observable('Δρ. Μηνάς Δασυγένης');
    self.kostas = ko.observable('Κωνσταντίνος Πέρρος');
    self.keepTouch = ko.observable('Κρατήστε Επαφή');
    self.filltheform = ko.observable('Συμπληρώστε τη φόρμα επικοινωνίας και σε λιγότερο από 24 ώρες η ομάδα μας θα σας απαντήσει');

    self.nameInput = ko.observable('').extend({
        alphaNumericLatins: "* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα."
	});
    self.emailInput = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email."
	});
    self.subjectInput = ko.observable('');
    self.messageInput = ko.observable('');

    self.nameInput.subscribe(function(newVal) {
        self.fillAllError(false);
    });

    self.emailInput.subscribe(function(newVal) {
        self.fillAllError(false);
    });

    self.subjectInput.subscribe(function(newVal) {
        self.fillAllError(false);
    });

    self.messageInput.subscribe(function(newVal) {
        self.fillAllError(false);
    });

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
            self.flag('img/greece.png');
            self.numeric('* Only numbers are allowed');
			self.alphaNumeric('* Only Latin characters, numbers and underscores are allowed.');
            self.isEmail('* Please enter a valid email.');
            self.alphaNumericLatin('* Only Latin characters, greek characters, numbers and underscores are allowed.');
            self.fillAll('* You must fill in all filds to submit!');
            self.loginbtn('Login');
            self.registerbtn('Register');
            self.name('Name');
            self.email('Email');
            self.subject('Subject');
            self.message('Message');
            self.send('Submit');
            self.namePlaceholder('Type Name...');
            self.emailPlaceholder('Type Email...');
            self.subjectPlaceholder('Type Subject...');
            self.messagePlaceholder('Type Message...');
            self.home('Home');
            self.about('About');
            self.aboutUs('About Us');
            self.communication('Communication');
            self.supervisor('Supervisor');
            self.webdev('Web Developer');
            self.minas('Dr. Minas Dasigenis');
            self.kostas('Konstantinos Perros');
            self.keepTouch('Keep in Touch');
            self.filltheform('Fill out the contact form and in less than 24 hours our team will answer you');
        } else if(self.lang() === 'gr') {
            self.flag('img/united-kingdom.png');
            self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumeric('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
            self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');
            self.alphaNumericLatin('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, ελληνικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
            self.fillAll('* Πρέπει να συμπληρώσετε όλα τα πεδία για να κάνετε αποστολή!');
            self.loginbtn('Σύνδεση');
            self.registerbtn('Εγγραφή');
            self.name('Όνομα');
            self.email('Email');
            self.subject('Θέμα');
            self.message('Μήνυμα');
            self.send('Αποστολή');
            self.namePlaceholder('Πληκτρολόγησε Όνομα...');
            self.emailPlaceholder('Πληκτρολόγησε Email...');
            self.subjectPlaceholder('Πληκτρολόγησε Θέμα...');
            self.messagePlaceholder('Πληκτρολόγησε Μήνυμα...');
            self.home('Αρχική');
            self.about('Σχετικά');
            self.aboutUs('Σχετικά Με Μας');
            self.communication('Επικοινωνία');
            self.supervisor('Επιβλέπων');
            self.webdev('Web Developer');
            self.minas('Δρ. Μηνάς Δασυγένης');
            self.kostas('Κωνσταντίνος Πέρρος');
            self.keepTouch('Κρατήστε Επαφή');
            self.filltheform('Συμπληρώστε τη φόρμα επικοινωνίας και σε λιγότερο από 24 ώρες η ομάδα μας θα σας απαντήσει');
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

    self.sendEmail = function() {
        if(!self.nameInput.alphaNumericLatinError() && !self.emailInput.emailError() && self.nameInput() !== '' && self.emailInput() !== '' && self.subjectInput() !== '' && self.messageInput() !== '') {
            let o = {
                name: self.nameInput(),
                email: self.emailInput(),
                subject: self.subjectInput(),
                message: self.messageInput()
            }

            console.log(o);

            $.post('./php/sendwebmail.php', o, function(data) {
                if(data.status == "ok") {
                    console.log('success!');
                } else {
                    console.log('Fail!');
                }
            });
        } else {
            if(self.nameInput() === '' && self.emailInput() === '' && self.subjectInput() === '' && self.messageInput() === '') {
                self.fillAllError(false);
            } else if(self.nameInput() === '' || self.emailInput() === '' || self.subjectInput() === '' || self.messageInput() === '') {
                self.fillAllError(true);
            } else {
                self.fillAllError(false);
            }
        }
    };

    self.modalLogin = function() {
        
        var modal = document.getElementById("modal");
        
        if(modal.style.visibility == "") {
            modal.style.visibility = "visible";
        } else {
            modal.style.visibility = "";
        }
       
        self.isModalOpen(!self.isModalOpen());            
    };    

	self.indexPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}
        
		window.location.href = './index.html?lang=' + self.lang();
	};

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
        if(close.style.display == "") {
            close.style.display = "none";
        }
    };

	self.indexPage = function() {
		window.location.href = './index.html?lang=' + self.lang();
	};

	self.loginPage = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

	self.registerPage = function() {
		window.location.href = './register.html?lang=' + self.lang();
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
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});