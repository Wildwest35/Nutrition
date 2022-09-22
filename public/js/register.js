function RegisterModel() {
	self = this;
    self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
    self.count = ko.observable(1);
    self.currentActive = ko.observable(1);
    self.lang = ko.observable('gr');
    self.sendLang = ko.observable(2);
    self.registername = ko.observable('Εγγραφή');
    self.usernamePlaceholder = ko.observable('Εισάγετε Username');
    self.emailPlaceholder = ko.observable('Εισάγετε Email');
    self.pass = ko.observable('Συνθηματικό');
    self.passPlaceholder = ko.observable('Εισάγετε Συνθηματικό');
    self.repeatpass = ko.observable('Επιβεβαίωση Συνθηματικού');
    self.repeatpassPlaceholder = ko.observable('Εισάγετε Επιβεβαίωση Συνθηματικού');
    self.nextbtn = ko.observable('Επόμενο');
    self.member = ko.observable('Είστε ήδη μέλος;');
    self.login = ko.observable('Συνδεθείτε');
    self.sexname = ko.observable('Φύλο');
	self.male = ko.observable('Άρρεν');
	self.female = ko.observable('Θήλυ');
    self.agename = ko.observable('Ηλικία');
    self.agePlaceholder = ko.observable('Εισάγετε την ηλικία σας');
    self.heightname = ko.observable('Ύψος (cm)');
    self.heightPlaceholder = ko.observable('Εισάγετε το ύψος σας');
    self.previousbtn = ko.observable('Πίσω');
    self.weightname = ko.observable('Βάρος (kg)');
    self.weightPlaceholder = ko.observable('Εισάγετε το βάρος σας');
    self.isIncreaseWeightname = ko.observable('Θέλω να');
    self.choosecategory = ko.observable('Επιλέξτε Κατηγορία');
    self.loseWeight = ko.observable('Χάσω Βάρος');
	self.maintainWeight = ko.observable('Διατηρήσω το Βάρος μου');
	self.gainWeight = ko.observable('Πάρω Βάρος');
    self.requestedname = ko.observable('Επιθυμητό Βάρος (kg)');
    self.requestedPlaceholder = ko.observable('Εισάγετε το επιθυμητό βάρος');
	self.lessKilos = ko.observable('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε λιγότερα κιλά από το \"Βάρος\"!');
	self.moreKilos = ko.observable('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε περισσότερα κιλά από το \"Βάρος\"!');
	self.passnotequal = ko.observable('* Η \"Επιβεβαίωση Συνθηματικού\" δεν αντιστοιχεί με το \"Συνθηματικό\"!');
    self.checkparams = ko.observable('ΕΛΕΓΞΤΕ ΟΤΙ ΤΑ ΣΤΟΙΧΕΙΑ ΣΑΣ ΕΙΝΑΙ ΟΡΘΑ!');
    self.submit = ko.observable('Καταχώρηση');
    self.successmsg = ko.observable('Η Εγγραφή σας ολοκληρώθηκε με επιτυχία! ');//Θα σας σταλεί ένα Email για την ενεργοποίηση του λογαριασμού σας!
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.maxlenght = ko.observable('* Το μέγιστο μέγεθος χαρακτήρων είναι');
    self.numeric = ko.observable('* Επιτρέπονται μόνο θετικοί αριθμοί');
	self.alphaNumeric = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
    self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
    self.empties = ko.observable('* Το πεδίο είναι κενό!');
    self.loginbtn = ko.observable('Σύνδεση');
	self.registerbtn = ko.observable('Εγγραφή');
    self.exerciseName = ko.observable('Άσκηση');
    self.exerciseText = ko.observable('');
    self.noExercise = ko.observable('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
    self.lightExercise = ko.observable('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
    self.moderateExercise = ko.observable('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
    self.activeExercise = ko.observable('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
    self.veryActiveExercise = ko.observable('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
    self.fd = ko.observable(1.2);
    self.flag = ko.observable();

    self.weightCheckcError = ko.observable(false);
    self.weightCheckMessage = ko.observable(null);
    self.passwordCheckcError = ko.observable(false);
    self.passwordCheckMessage = ko.observable(null);   
    self.islockpassword = ko.observable(true);
    self.islockrepeatpasswrord = ko.observable(true);
    self.weightcategory = ko.observable('');
    self.sexcategory = ko.observable(''); 
    self.errorMessage = ko.observable(null); 

    self.progress1 = ko.observable(null);
    self.progress2 = ko.observable(null);
    self.progress3 = ko.observable(null);
    self.progress4 = ko.observable(false);
//table: 'users',
	self.username = ko.observable('').extend({
		minimumLength: 2,
		maximumLength: 12,
        alphaNumeric: "* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.",
        isEmptyField: "* Το πεδίο είναι κενό!",
        checkUniqueField: {table: 1, message: '* Αυτό το Username υπάρχει ήδη.'}
	});
    self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email.",
        isEmptyField: "* Το πεδίο είναι κενό!",
        checkUniqueField: {table: 2, message: '* Αυτό το Email υπάρχει ήδη.'}
	});
    self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});    
    self.repeatpassword = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});  
    self.sex = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.age = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.height = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.weight = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 5,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.isweight = ko.observable(0);
    self.isweightError = ko.observable(true);
    self.requestedWeight = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 5,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.exercise = ko.observable(1);
    self.exercise.subscribe(function(newVal) {
        if(self.exercise() == 1) {
            self.exerciseText(self.noExercise());
            self.fd(1.2);
        } else if(self.exercise() == 2) {
            self.exerciseText(self.lightExercise());
            self.fd(1.375);
        } else if(self.exercise() == 3) {
            self.exerciseText(self.moderateExercise());
            self.fd(1.55);
        } else if(self.exercise() == 4) {
            self.exerciseText(self.activeExercise());
            self.fd(1.725);
        } else {
            self.exerciseText(self.veryActiveExercise());
            self.fd(1.9);
        }
    });
    self.kilos = ko.observable('');
    self.kilos.subscribe(function(newVal) {
        //console.log(self.kilos());
    });
    self.kilosError = ko.observable(true);
    self.kilosname = ko.observable('Κιλά/Εβδομάδα');

    self.isweight.subscribe(function(newVal) {
        let idKilos = document.getElementById('kilos');
        if(self.isweight() == 0) {
            self.isweightError(true);
            self.kilosError(true);
            idKilos.value = '0';
            self.kilos(0);
        } else if(self.isweight() == 2) { 
            self.isweightError(true);
            self.kilosError(false);
            idKilos.value = '0';
            self.kilos(0);
        } else {
            self.isweightError(false);
            self.kilosError(false);
        }

        if(self.requestedWeight() != '') {
            self.weightCheck();
        }
    });

    self.password.subscribe(function(newVal) {
        if(self.repeatpassword() != '') {
            self.passwordCheck();
        }
    });

    self.repeatpassword.subscribe(function(newVal) {
        self.passwordCheck();
    });

    self.passwordCheck = function() {
        if(self.password() == self.repeatpassword()) {
            self.passwordCheckcError(false);
            self.passwordCheckMessage(null);
        } else {
            self.passwordCheckcError(true);
            self.passwordCheckMessage(self.passnotequal());
        }
    };

    self.weight.subscribe(function(newVal) {
        if(self.requestedWeight != '') {
            self.weightCheck();
        } else {

        }
    });

    self.requestedWeight.subscribe(function(newVal) {
        self.weightCheck();
    });

    self.weightCheck = function() {
        
        if(self.isweight() == 1) {
            if(self.count() == 2) {
                self.requestedWeight('');
                self.count(1);
            }
            if(parseFloat(self.weight()) > parseFloat(self.requestedWeight())) {
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            } else {
                if(self.requestedWeight() != '') {
                    self.weightCheckcError(true);
                    self.weightCheckMessage(self.lessKilos());
                }
            }
        } else if(self.isweight() == 2) {
            self.count(2);
            if(parseFloat(self.weight()) != parseFloat(self.requestedWeight())) {
                self.requestedWeight(self.weight());
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            } else {
                self.requestedWeight(self.weight());
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            }
        } else if(self.isweight() == 3) {
            if(self.count() == 2) {
                self.requestedWeight('');
                self.count(1);
            
            }
            if(parseFloat(self.weight()) >= parseFloat(self.requestedWeight())) {
                if(self.requestedWeight() != '') {
                    self.weightCheckcError(true);
                    self.weightCheckMessage(self.moreKilos());
                }
            } else {
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            }
        }
    }

    self.sexcategory.subscribe(function(newVal) {
        if(self.sexcategory() == self.male()) {
            self.sex(2);
        } else {
            self.sex(1);
        }
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

    self.isweight.subscribe(function() {
        if(self.isweight() == 1) {
            self.weightcategory(self.loseWeight());
        } else if(self.isweight() == 2) {
            self.weightcategory(self.maintainWeight());
        } else {
            self.weightcategory(self.gainWeight());
        }
    });

    self.register = function() {
        self.switchLoad();
        let o = {
            username: self.username(),
            email: self.email(),
            password: self.password(),
            repeatpassword: self.repeatpassword(),
            sex: self.sex(),
            age: self.age(),
            height: self.height(),
            weight: self.weight(),
            isweight: self.isweight(),
            requestedWeight: self.requestedWeight(),
            exercise: self.exercise(),
            kilos: self.kilos(),
            sendLang: self.sendLang(),
            fd: self.fd()
        }

       $.post('./php/register.php', o, function(data) {
            if(data.status == "ok") {
                self.next();
                self.switchLoad();
            } else if(data.status == "error") {
                var alertError = document.getElementById("alertError");
                alertError.style.display = "block";
                self.errorMessage(data.data);
            }            
        });		
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

	self.changeLanguage = function() {
		if(self.lang() === 'en') {
            self.registername('Register');
            self.usernamePlaceholder('Enter Username');
            self.emailPlaceholder('Enter Email');
            self.pass('Password');
            self.passPlaceholder('Enter Password');
            self.repeatpass('Confirm Password');
            self.repeatpassPlaceholder('Enter Confirm Password');
            self.nextbtn('Next');
            self.member('Are you already a member?');
            self.login('Login');
            self.sexname('Sex');
            self.male('Male');
            self.female('Female');
            self.agename('Age');
            self.agePlaceholder('Enter your age');
            self.heightname('Height (cm)');
            self.heightPlaceholder('Enter your height');
            self.previousbtn('Previous');
            self.weightname('Weight (kg)');
            self.weightPlaceholder('Enter your weight');
            self.isIncreaseWeightname('I want to');
            self.choosecategory('Choose a category');
            self.loseWeight('Lose Weight');
            self.maintainWeight('Maintain my Weight');
            self.gainWeight('Gain weight');
            self.requestedname('Requested Weight (kg)');
            self.requestedPlaceholder('Enter requested weight');
            self.lessKilos('* In \"Requested Weight\" you must enter less kilos than \"Weight\"!');
            self.moreKilos('* In \"Requested Weight\" you have to enter more kilos than \"Weight\"!');
            self.passnotequal('* \"Confirm Password\" does not correspond to \"Password\"!');
            self.checkparams('CHECK THAT YOUR INFORMATION IS CORRECT!');
            self.submit('Submit');
            self.successmsg('Your registration completed successfully!');// Θα σας σταλεί ένα Email για την ενεργοποίηση του λογαριασμού σας!
            self.minlenght('* The minimum character lenght is');
			self.maxlenght('* The maximum lenght is');
            self.numeric('* Only positive numbers are allowed');
			self.alphaNumeric('* Only Latin characters, numbers and underscores are allowed.');
            self.isEmail('* Please enter a valid email.');
            self.empties('* Field is empty!');
            self.kilosname('Kilos/Week');
            self.loginbtn('Login');
            self.registerbtn('Register');
            self.exerciseName('Exercise');
            self.noExercise('Little or No Exercise (0-1 Days/Week)');
            self.lightExercise('Light Exercise (1-3 Days/Week)');
            self.moderateExercise('Moderate Exercise (3-5 Days/Week)');
            self.activeExercise('Intense Exercise (6-7 Days/Week)');
            self.veryActiveExercise('Very Intense Exercise (6-7 Days/Week)');
            self.exerciseText(self.noExercise());
            self.flag('img/greece.png');
            self.sendLang(1);
		} else if(self.lang() === 'gr') {
            self.registername('Εγγραφή');
            self.usernamePlaceholder('Εισάγετε Username');
            self.emailPlaceholder('Εισάγετε Email');
            self.pass('Συνθηματικό');
            self.passPlaceholder('Εισάγετε Συνθηματικό');
            self.repeatpass('Επιβεβαίωση Συνθηματικού');
            self.repeatpassPlaceholder('Εισάγετε Επιβεβαίωση Συνθηματικού');
            self.nextbtn('Επόμενο');
            self.member('Είστε ήδη μέλος;');
            self.login('Συνδεθείτε');
            self.sexname('Φύλο');
            self.male('Άρρεν');
            self.female('Θήλυ');
            self.agename('Ηλικία');
            self.agePlaceholder('Εισάγετε την ηλικία σας');
            self.heightname('Ύψος (cm)');
            self.heightPlaceholder('Εισάγετε το ύψος σας');
            self.previousbtn('Πίσω');
            self.weightname('Βάρος (kg)');
            self.weightPlaceholder('Εισάγετε το βάρος σας');
            self.isIncreaseWeightname('Θέλω να');
            self.choosecategory('Επιλέξτε Κατηγορία');
            self.loseWeight('Χάσω Βάρος');
            self.maintainWeight('Διατηρήσω το Βάρος μου');
            self.gainWeight('Πάρω Βάρος');
            self.requestedname('Επιθυμητό Βάρος (kg)');
            self.requestedPlaceholder('Εισάγετε το επιθυμητό βάρος');
            self.lessKilos('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε λιγότερα κιλά από το \"Βάρος\"!');
            self.moreKilos('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε περισσότερα κιλά από το \"Βάρος\"!');
            self.passnotequal('* Η \"Επιβεβαίωση Συνθηματικού\" δεν αντιστοιχεί με το \"Συνθηματικό\"!');
            self.checkparams('ΕΛΕΓΞΤΕ ΟΤΙ ΤΑ ΣΤΟΙΧΕΙΑ ΣΑΣ ΕΙΝΑΙ ΟΡΘΑ!');
            self.submit('Καταχώρηση');
            self.successmsg('Η Εγγραφή σας ολοκληρώθηκε με επιτυχία!');// Θα σας σταλεί ένα Email για την ενεργοποίηση του λογαριασμού σας!
            self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.maxlenght('* Το μέγιστο μέγεθος χαρακτήρων είναι');
            self.numeric('* Επιτρέπονται μόνο θετικοί αριθμοί');
			self.alphaNumeric('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
            self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');
            self.empties('* Το πεδίο είναι κενό!');
            self.kilosname('Κιλά/Εβδομάδα');
            self.loginbtn('Σύνδεση');
            self.registerbtn('Εγγραφή');
            self.exerciseName('Άσκηση');
            self.noExercise('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
            self.lightExercise('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
            self.moderateExercise('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
            self.activeExercise('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.veryActiveExercise('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.exerciseText(self.noExercise());
            self.flag('img/united-kingdom.png');
            self.sendLang(2);
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

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
        if(close.style.display == "") {
            close.style.display = "none";
        }
    };

    let progress = document.getElementById("progress");
    let circles = document.querySelectorAll(".circle");

    self.previous = function() {
        self.currentActive(self.currentActive() - 1);
        if(self.currentActive() < 1) {
            self.currentActive(1);
        }

        self.update();
    };

    self.next = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.checkUniqueFieldError() && !self.email.checkUniqueFieldError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        self.progress3(!self.weight.maxLengthError() && !self.weight.numericError() && !self.requestedWeight.maxLengthError() && !self.requestedWeight.numericError() && !self.weightCheckcError() && self.weight() != '' && self.requestedWeight() != '' && self.isweight() > 0 && !self.kilosError());   

        if(((self.progress1() && self.currentActive() == 1) || (self.progress2() && self.currentActive() == 2) || (self.progress3() && self.currentActive() >= 3)) && !self.progress4()) {
            self.currentActive(self.currentActive() + 1);
            if(self.currentActive() > circles.length) {
                self.currentActive(circles.length);
            }
            if(self.currentActive() == 5) {
                self.progress4(true);
            }
            self.update();
        } else {
            if(self.currentActive() == 1) {
                if(self.username() == '') {
                    self.username(" ");
                    self.username.emptyFieldError(true);
                    self.username("");
                } 
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
                if(self.repeatpassword() == '') {
                    self.repeatpassword(" ");
                    self.repeatpassword.emptyFieldError(true);
                    self.repeatpassword("");
                }
            } else if(self.currentActive() == 2) {
                if(self.sex() == '') {
                    self.sex(" ");
                    self.sex.emptyFieldError(true);
                    self.sex("");
                }
                if(self.age() == '') {
                    self.age(" ");
                    self.age.emptyFieldError(true);
                    self.age("");
                }
                if(self.height() == '') {
                    self.height(" ");
                    self.height.emptyFieldError(true);
                    self.height("");
                }
            } else if(self.currentActive() == 3) {
                if(self.weight() == '') {
                    self.weight(" ");
                    self.weight.emptyFieldError(true);
                    self.weight("");
                }
                if(self.requestedWeight() == '') {
                    self.requestedWeight(" ");
                    self.requestedWeight.emptyFieldError(true);
                    self.requestedWeight("");
                }
            } else if(self.currentActive() == 4) {

            }
        }
    };

    self.step1 = function() {
        if(!self.progress4()) {
            self.currentActive(1);
            self.update();
        }
    };

    self.step2 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.checkUniqueFieldError() && !self.email.checkUniqueFieldError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        if(self.progress1() && !self.progress4()) {
            self.currentActive(2);
            self.update();
        }
    };

    self.step3 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.checkUniqueFieldError() && !self.email.checkUniqueFieldError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        if(self.progress1() && self.progress2() && !self.progress4()) {
            self.currentActive(3);
            self.update();
        }
    };

    self.step4 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.checkUniqueFieldError() && !self.email.checkUniqueFieldError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        self.progress3(!self.weight.maxLengthError() && !self.weight.numericError() && !self.requestedWeight.maxLengthError()  && !self.requestedWeight.numericError() && !self.weightCheckcError() && self.weight() != '' && self.requestedWeight() != '' && self.isweight() > 0 && !self.kilosError());
        if(self.progress1() && self.progress2() && self.progress3() && !self.progress4()) {
            self.currentActive(4);
            self.update();
        }
    };

    self.update = function() {
        circles.forEach((circle, idx) => {
            if(idx < self.currentActive()) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        const actives = document.querySelectorAll(".active");

        var alertError = document.getElementById("alertError");
        alertError.style.display = "none";

        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    };

    self.switchLoad = function() {
		var modal = document.getElementById("modalLoad");
		
		if(modal.style.display == " " || modal.style.display == "none"|| modal.style.display == "") {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
	};

	self.registerPageFlag = function() {
		if(self.lang() == 'en') {
			self.lang('gr');
		} else {
			self.lang('en');
		}

        self.registerPage();
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

    self.checkLang();
}

$(function() {
	ko.applyBindings(new RegisterModel(), document.getElementById('body'));
});