function SettingsModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.menusetting = ko.observable('ΜΕΝΟΥ ΡΥΘΜΙΣΕΩΝ');
	self.successMsg = ko.observable();
	self.lang = ko.observable('gr');
	self.sendLang = ko.observable(2);
	self.flag = ko.observable();
	self.idUser = ko.observable('');
	self.nameUser = ko.observable('');
	self.user = ko.observable('User');
	self.admin = ko.observable('Admin');
	self.categoryUser = ko.observable('');
	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumeric = ko.observable('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
	self.isEmptyField = ko.observable('* Το πεδίο είναι κενό!');
	self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
	self.empties = ko.observable('* Τα πεδία είναι κενά!');
	self.save = ko.observable('ΑΠΟΘΗΚΕΥΣΗ');
	self.change = ko.observable('ΑΛΛΑΓΗ');
	self.loseWeight = ko.observable('Χάσω Βάρος');
	self.maintainWeight = ko.observable('Διατηρήσω το Βάρος μου');
	self.gainWeight = ko.observable('Πάρω Βάρος');
	self.male = ko.observable('Άρρεν');
	self.female = ko.observable('Θήλυ');
	self.lessKilos = ko.observable('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε λιγότερα κιλά από το \"Βάρος\"!');
	self.moreKilos = ko.observable('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε περισσότερα κιλά από το \"Βάρος\"!');
	self.passnotequal = ko.observable('* Η \"Επιβεβαίωση Συνθηματικού\" δεν αντιστοιχεί με το \"Συνθηματικό\"!');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
	self.title = ko.observable('Ρυθμίσεις | Nutrition');
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.maxlenght = ko.observable('* Το μέγιστο μέγεθος χαρακτήρων είναι');

	self.usernameH = ko.observable('Ισχύον Username');
	self.newUsernameH = ko.observable('Νέο Username');
	self.passH = ko.observable('Συνθηματικό');
	self.repeatpassH = ko.observable('Επιβεβαίωση Συνθηματικού');
	self.emailH = ko.observable('Ισχύον Email');
	self.newEmailH = ko.observable('Νέο Email');
	self.ageH = ko.observable('Ηλικία');
	self.newAgeH = ko.observable('Νέα Ηλικία');
	self.sexH = ko.observable('Φύλο');
	self.weightsH = ko.observable('Βάρος');
	self.newWeightsH = ko.observable('Νέο Βάρος');
	self.heightH = ko.observable('Ύψος');
	self.newHeightH = ko.observable('Νέο Ύψος');
	self.isIncreaseWeightH = ko.observable('Θέλω να');
	self.requestedWeightH = ko.observable('Επιθυμητό Βάρος');
	self.language = ko.observable('Ελληνικά');
	self.english = ko.observable('Αγγλικά');
	self.greek = ko.observable('Ελληνικά');
	self.kilosH = ko.observable('Κιλά / Εβδομάδα');
	self.exerciseH = ko.observable('Άσκηση');
	self.kilos = ko.observable('');

	self.usernamePlaceHolder = ko.observable('Εισάγετε Νέο Username...');
	self.emailPlaceHolder = ko.observable('Εισάγετε Νέο Email...');	
	self.passPlaceHolder = ko.observable('Εισάγετε Νέο Συνθηματικό...');	
	self.repeatpassPlaceHolder = ko.observable('Επιβεβαίωση Συνθηματικού...');
	self.agePlaceHolder = ko.observable('Εισάγετε Νέα Ηλικία...');
	self.weightsPlaceHolder = ko.observable('Εισάγετε Νέο Βάρος...');
	self.heightPlaceHolder = ko.observable('Εισάγετε Νέο Υψος...');
	self.requestedWeightPlaceHolder = ko.observable('Εισάγετε Επιθυμητό Βάρος...');

	self.isRequestedError = ko.observable(true);
	self.isRequestedErrorInput = ko.observable(true);
	self.isRequestedMessage = ko.observable();
	self.passwordCheckcError = ko.observable(false);
    self.passwordCheckMessage = ko.observable(null);  

	self.usernameForm = ko.observable();
	self.username = ko.observable();
	self.email = ko.observable();
	self.age = ko.observable();
	self.sex = ko.observable();
	self.sexNum = ko.observable();
	self.weights = ko.observable();
	self.height = ko.observable();
	self.isIncreaseWeight = ko.observable();
	self.isIncreaseWeightNum = ko.observable();
	self.requestedWeight = ko.observable();
	self.exercise = ko.observable(1);

	self.usernameInput = ko.observable();
	self.passInput = ko.observable();
	self.repeatpassInput = ko.observable();
	self.emailInput = ko.observable();
	self.ageInput = ko.observable();
	self.sexInput = ko.observable();
	self.weightsInput = ko.observable();
	self.heightInput = ko.observable();
	self.isIncreaseWeightInput = ko.observable();
	self.requestedWeightInput = ko.observable();

    self.islockpassword = ko.observable(true);
    self.islockrepeatpasswrord = ko.observable(true);

	self.sumName = ko.observable('Σύνοψη');
	self.userName = ko.observable('Αλλαγή Username');
	self.emailName = ko.observable('Αλλαγή Email');
	self.passwordName = ko.observable('Αλλαγή Συνθηματικού');
	self.sexName = ko.observable('Αλλαγή Φύλου');
	self.ageName = ko.observable('Αλλαγή Ηλικίας');
	self.heightName = ko.observable('Αλλαγή Υψους');
	self.weightsName = ko.observable('Αλλαγή Βάρους');
	self.targetName = ko.observable('Αλλαγή Στόχου');
	self.exerciseName = ko.observable('Αλλαγή Άσκησης');
	self.langName = ko.observable('Εναλλαγή Γλώσσας');
	self.kilosName = ko.observable('Αλλαγή Κιλών / Εβδομάδα');

	self.sumInfo = ko.observable('Εδώ μπορείτε να δείτε όλα τα προσωπικά σας στοιχεία!');
	self.userInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του username που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί με ένα καινούργιο εφόσον δεν υπάρχει.');
	self.emailInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του email που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί με ένα καινούργιο  εφόσον δεν υπάρχει. Για να ολοκληρωθεί η διαδιακασία θα πρέπει πρώτα όμως να γίνει ταυτοποίησή του!');
	self.passwordInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του συνθηματικού που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.sexInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του φύλου που έχετε δηλώσει. Αφού πατήσετε \"ΑΛΛΑΓΗ\" θα αντικατασταθεί!');
	self.ageInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή της ηλικίας που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.heightInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του ύψους που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.weightsInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του αρχικού βάρους που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.targetInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή του αρχικού στόχου που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.exerciseInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή της άσκησης που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
	self.langInfo = ko.observable('Εδώ μπορείτε να κάνετε ενναλαγής Γλώσσας. Αφού πατήσετε \"ΑΛΛΑΓΗ\" θα αντικατασταθεί!');
	self.kilosInfo = ko.observable('Εδώ μπορείτε να κάνετε αλλαγή των κιλών που έχετε δηλώσει να χάνετε ή να παίρνετε ανά εβδομάδα. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');

	self.noExercise = ko.observable('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
    self.lightExercise = ko.observable('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
    self.moderateExercise = ko.observable('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
    self.activeExercise = ko.observable('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
    self.veryActiveExercise = ko.observable('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
	self.exerciseText = ko.observable('');
	self.fd = ko.observable(1.2);

	self.sumHtml = ko.observable('');
	self.userHtml = ko.observable('');
	self.emailHtml = ko.observable('');
	self.passwordHtml = ko.observable('');
	self.sexHtml = ko.observable('');
	self.ageHtml = ko.observable('');
	self.weightsHtml = ko.observable('');
	self.heightHtml = ko.observable('');
	self.targetHtml = ko.observable('');
	self.exerciseHtml = ko.observable('');
	self.langHtml = ko.observable('');
	self.kilosHtml = ko.observable('');

	self.settingsArray = ko.observableArray([]);
	self.dashboardArray = ko.observableArray([]);

	self.usernameInput = ko.observable('').extend({
		minimumLength: 2,
		maximumLength: 12,
		alphaNumeric: '',
		isEmptyField: self.isEmptyField()
	});
	self.emailInput = ko.observable('').extend({
		isEmail: self.isEmail(),
		isEmptyField: self.isEmptyField()
	});
	self.passInput = ko.observable('').extend({
		minimumLength: 8,
		isEmptyField: self.isEmptyField()
	});    
	self.repeatpassInput = ko.observable('').extend({
		minimumLength: 8,
		isEmptyField: self.isEmptyField()
	});  
	self.ageInput = ko.observable('').extend({
		numeric: self.numeric(),
		maximumLength: 3,
		isEmptyField: self.isEmptyField()
	});
	self.heightInput = ko.observable('').extend({
		numeric: self.numeric(),
		maximumLength: 3,
		isEmptyField: self.isEmptyField()
	});
	self.weightsInput = ko.observable('').extend({
		numeric: self.numeric(),
		maximumLength: 6,
		isEmptyField: self.isEmptyField()
	});
	self.requestedWeightInput = ko.observable('').extend({
		numeric: self.numeric(),
		maximumLength: 6,
		isEmptyField: self.isEmptyField()
	});

	self.isIncreaseWeightInput.subscribe(function(newVal) {
		if(newVal == 1) {
			self.isRequestedErrorInput(true);
		} else if(newVal == 2) {
			self.requestedWeightInput(self.weights());
			self.isRequestedErrorInput(false);
		} else {
			self.isRequestedErrorInput(true);
		}
		self.RequestedWeightCheck();
	});

	self.email.subscribe(function(newVal) {
		self.email(newVal);
	});

 	self.passInput.subscribe(function(newVal) {
		if(self.repeatpassInput.minLengthMessage() === self.empties()) {
			self.repeatpassInput.minLengthMessage("");
		}

		if(self.repeatpassInput() == "") {
			self.passwordCheckMessage("");
		} else {
			self.passwordCheck();
		}
	});

	self.repeatpassInput.subscribe(function(newVal) {
		if(newVal == "") {
			self.passwordCheckMessage("");
		} else {
			self.passwordCheck();
		}
	});
	
	self.requestedWeightInput.subscribe(function(newVal) {
		self.RequestedWeightCheck();
	});

	self.closeLoginWarning = function() {
		$('.alert').removeClass("show");
		$('.alert').addClass("hide");
    };

	self.openLoginWarning = function() {
		$('.alert').removeClass("hide");
		$('.alert').addClass("show");
    };

    self.RequestedWeightCheck = function() {
		console.log(self.isIncreaseWeightInput());
		console.log(self.weights());
		console.log(self.requestedWeightInput());

		if(self.roundOff(self.isIncreaseWeightInput(), 2) == 1 && self.roundOff(self.weights(), 2) <= self.roundOff(self.requestedWeightInput(), 2)) {
			self.isRequestedMessage(self.lessKilos());
			return false;
		}else if(self.roundOff(self.isIncreaseWeightInput(), 2) == 3 && self.roundOff(self.weights(), 2) >= self.roundOff(self.requestedWeightInput(), 2)) {
			self.isRequestedMessage(self.moreKilos());
			return false;
		} else {
			self.isRequestedMessage("");
			return true;
		}
    }; 

	self.passwordCheck = function() {
        if(self.passInput() == self.repeatpassInput()) {
            self.passwordCheckcError(false);
            self.passwordCheckMessage(null);
			return true;
        } else {
            self.passwordCheckcError(true);
	        self.passwordCheckMessage(self.passnotequal());		
			return false;
        }
    };

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

	self.getUsername = function() {
		let o = {}; 

		$.post('./php/dashboarduser.php', o, function(data) {
			if(data.status == "ok") {
				self.username(data.data.username);
				self.usernameForm(data.data.username);
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
					//self.username(data.data.nameUser);
					self.usernameForm(data.data.nameUser);
				}
				$.post('./php/getuserinfo.php', {user: self.username()}, function(data) {
					if(data.status == "ok") {
						self.email(data.data.email);
						self.age(data.data.age);
						self.sexNum(data.data.sex);
						if(self.sexNum() == 2) {
							self.sex(self.male());
						} else {
							self.sex(self.female());	
						}
						self.weights(data.data.weights);//self.roundOff(, 2)
						self.height(data.data.height);
						self.isIncreaseWeightNum(data.data.isIncreaseWeight);
						if(data.data.isIncreaseWeight == 1) {
							self.isIncreaseWeight(self.loseWeight());
						} else if(data.data.isIncreaseWeight == 2) {
							self.isIncreaseWeight(self.maintainWeight());
							self.isRequestedError(false);
							self.isRequestedErrorInput(false);
						} else {
							self.isIncreaseWeight(self.gainWeight());
						}

						if(self.lang() === 'en') {
							self.language(self.greek());
						} else {
							self.language(self.english());
						}

						self.requestedWeight(data.data.requestedWeight);//self.roundOff(, 2)
						self.sexInput(self.sex());
						self.isIncreaseWeightInput(data.data.isIncreaseWeight);
						self.requestedWeightInput(data.data.requestedWeight);//self.roundOff(, 2)
						self.RequestedWeightCheck();
						self.sumHtml('<div class=\"setting-field\"><h4>Username</h4><div class=\"setting-block\"><p data-bind=\"text: self.usernameForm\"></p></div></div><div class=\"setting-field\"><h4>Email</h4><div class=\"setting-block\"><p data-bind=\"text: self.email\"></p></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.sexH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.sex\"></p></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.ageH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.age\"></p></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.heightH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.height\"></p>cm</div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.weightsH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.weights\"></p>kg</div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.isIncreaseWeightH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.isIncreaseWeight\"></p></div></div><div class=\"setting-field\" data-bind=\"visible: self.isRequestedError\"><h4 data-bind=\"text: self.requestedWeightH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.requestedWeight\"></p>kg</div></div><div class=\"setting-field\" data-bind=\"visible: self.isRequestedError\"><h4 data-bind=\"text: self.exerciseH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.exerciseText\"></p></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.kilosH\">Κιλά / Εβδομάδα</h4><div class=\"setting-block\"><p data-bind=\"text: self.kilos\"></p></div></div>');
						self.userHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.usernameH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.usernameForm\"></p><span class=\"fa fa-check\" id=\"checkuser\"></span></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.newUsernameH\"></h4><div class=\"setting-block\"><input type=\"text\" data-bind=\"value: self.usernameInput, attr: {placeholder: self.usernamePlaceHolder}\"></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.usernameInput.minLengthError, text: self.usernameInput.minLengthMessage\"></span><span class=\"error\" data-bind=\"visible: self.usernameInput.maxLengthError, text: self.usernameInput.maxLengthMessage\"></span><span class=\"error\" data-bind=\"visible: self.usernameInput.alphaNumericError, text: self.usernameInput.alphaNumericMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.userSubmit, text: self.save\"></button></div></div>');
						self.emailHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.emailH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.email\"></p><span class=\"fa fa-check\" id=\"checkemail\"></span></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.newEmailH\"></h4><div class=\"setting-block\"><input type=\"text\" data-bind=\"value: self.emailInput, attr: {placeholder: self.emailPlaceHolder}\"></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.emailInput.emailError, text: self.emailInput.emailErrorMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.emailSubmit, text: self.save\"></button></div></div>');
						self.passwordHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.passH\"></h4><div class=\"setting-block\"><input type=\"password\" data-bind=\"value: self.passInput, attr: {placeholder: self.passPlaceHolder}\" id=\"password\" autocomplete=\"off\"><i data-bind=\"click: self.lockerpassword, visible: self.islockpassword\" class=\"fas fa-eye-slash\"></i><i data-bind=\"click: self.lockerpassword, visible: !self.islockpassword()\" class=\"fas fa-eye\"></i></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.passInput.minLengthError, text: self.passInput.minLengthMessage\"></span></div><div class=\"setting-field\"><h4 data-bind=\"text: self.repeatpassH\"></h4><div class=\"setting-block\"><input id=\"repeatpassword\" type=\"password\" data-bind=\"value: self.repeatpassInput, attr: {placeholder: self.repeatpassPlaceHolder}\" autocomplete=\"off\"><i data-bind=\"click: self.lockerrepeatpassword, visible: self.islockrepeatpasswrord\" class=\"fas fa-eye-slash\"></i><i data-bind=\"click: self.lockerrepeatpassword, visible: !self.islockrepeatpasswrord()\" class=\"fas fa-eye\"></i></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.repeatpassInput.minLengthError, text: self.repeatpassInput.minLengthMessage\"></span><span class=\"error\" data-bind=\"visible: self.passwordCheckcError, text: self.passwordCheckMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.passSubmit, text: self.save\"></button></div></div>');
						self.sexHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.sexH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.sex, value: self.sexInput\"></p><span class=\"fa fa-check\" id=\"checksex\"></span></div></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.sexSubmit, text: self.change\"></button></div></div>');
						self.ageHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.ageH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.age\"></p><span class=\"fa fa-check\" id=\"checkage\"></span></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.newAgeH\"></h4><div class=\"setting-block\"><input type=\"number\" data-bind=\"value: self.ageInput, attr: {placeholder: self.agePlaceHolder}\"></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.ageInput.maxLengthError, text: self.ageInput.maxLengthMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.ageSubmit, text: self.save\"></button></div></div>');
						self.heightHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.heightH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.height\"></p><span class=\"fa fa-check\" id=\"checkheight\"></span></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.newHeightH\"></h4><div class=\"setting-block\"><input type=\"number\" data-bind=\"value: self.heightInput, attr: {placeholder: self.heightPlaceHolder}\"></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.heightInput.maxLengthError, text: self.heightInput.maxLengthMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.heightSubmit, text: self.save\"></button></div></div>');
						self.weightsHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.weightsH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.weights\"></p><span class=\"fa fa-check\" id=\"checkweight\"></span></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.newWeightsH\"></h4><div class=\"setting-block\"><input type=\"number\" data-bind=\"value: self.weightsInput, attr: {placeholder: self.weightsPlaceHolder}\"></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.weightsInput.maxLengthError, text: self.weightsInput.maxLengthMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.weightSubmit, text: self.save\"></button></div></div>');
						self.targetHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.weightsH\"></h4><div class=\"setting-block\"><p data-bind=\"text: self.weights\"></p></div></div><div class=\"setting-field\"><h4 data-bind=\"text: self.isIncreaseWeightH\"></h4><div class=\"setting-block\"><select id=\"weight\" name=\"isweight\" data-bind=\"value: self.isIncreaseWeightInput\"><option value=\"1\" data-bind=\"text: self.loseWeight\">Χάσω βάρος</option><option value=\"2\" data-bind=\"text: self.maintainWeight\">Διατηρήσω το βάρος μου</option><option value=\"3\" data-bind=\"text: self.gainWeight\">Πάρω βάρος</option></select><span class=\"fa fa-check\" id=\"checkwant\"></span></div></div><div class=\"setting-field\"  data-bind=\"visible: self.isRequestedErrorInput\"><h4 data-bind=\"text: self.requestedWeightH\"></h4><div class=\"setting-block\"><input type=\"number\" data-bind=\"value: self.requestedWeightInput, attr: {placeholder: self.requestedWeightPlaceHolder}\"><span class=\"fa fa-check\" id=\"checkrequestedweight\"></span></div></div><div class=\"wrong\"><span class=\"error\" data-bind=\"visible: self.requestedWeightInput.maxLengthError, text: self.requestedWeightInput.maxLengthMessage\"></span><span class=\"error\" data-bind=\"visible: self.requestedWeightInput.numericError, text: self.requestedWeightInput.numericMessage\"></span><span class=\"error\" data-bind=\"visible: self.isRequestedErrorInput, text: self.isRequestedMessage\"></span></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.targetSubmit, text: self.save\"></button></div></div>');
						self.exerciseHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.exerciseH\"></h4><div class=\"setting-block\"><select id=\"exercise\" data-bind=\"value: self.exercise\"><option value=\"1\" data-bind=\"text: self.noExercise\">Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)</option><option value=\"2\" data-bind=\"text: self.lightExercise\">Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)</option><option value=\"3\" data-bind=\"text: self.moderateExercise\">Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)</option><option value=\"4\" data-bind=\"text: self.activeExercise\">Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)</option><option value=\"5\" data-bind=\"text: self.veryActiveExercise\">Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)</option></select><span class=\"fa fa-check\" id=\"checkexercise\"></span></div></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.exerciseSubmit, text: self.save\"></button></div></div>');
						self.kilosHtml('<div class=\"setting-field\"><h4 data-bind=\"text: self.kilosH\"></h4><div class=\"setting-block\"><select id=\"kilos\" name=\"kilos\" data-bind=\"value: self.kilos\"><option value=\"0\">0</option><option value=\"0.5\">0.5</option><option value=\"1\">1</option><option value=\"1.5\">1.5</option><option value=\"2\">2</option></select><span class=\"fa fa-check\" id=\"checkkilos\"></span></div></div><div class=\"setting-field\"><div class=\"place-btn\"><button data-bind=\"click: self.kilosSubmit, text: self.save\"></button></div></div>');
						self.fillDashboardArray();					
						self.fillSettingArray();
//<span class=\"error\" data-bind=\"visible: self.ageInput.numericError, text: self.ageInput.numericMessage\"></span>
//<span class=\"error\" data-bind=\"visible: self.heightInput.numericError, text: self.heightInput.numericMessage\"></span>
//<span class=\"error\" data-bind=\"visible: self.weightsInput.numericError, text: self.weightsInput.numericMessage\"></span>
						let idKilos = document.getElementById('kilos');
						self.kilos(data.data.kilos);
						idKilos.value = self.kilos();

						self.exercise(data.data.exercise);
						self.exerciseMode();
					} else if(data.status == "error") {

					}	
				});	
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.exerciseMode = function() {
		if(parseFloat(self.exercise()) == 1) {
			self.exerciseText(self.noExercise());
			self.fd(1.2);
		} else if(parseFloat(self.exercise()) == 2) {
			self.exerciseText(self.lightExercise());
			self.fd(1.375);
		} else if(parseFloat(self.exercise()) == 3) {
			self.exerciseText(self.moderateExercise());
			self.fd(1.55);
		} else if(parseFloat(self.exercise()) == 4) {
			self.exerciseText(self.activeExercise());
			self.fd(1.725);
		} else {
			self.exerciseText(self.veryActiveExercise());
			self.fd(1.9);
		}
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
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
			self.flag('img/greece.png');
			self.menusetting('SETTING MENU');
			self.sumName('Overview');
			self.userName('Change Username');
			self.emailName('Change Email');
			self.passwordName('Change Password');
			self.sexName('Change Sex');
			self.ageName('Change Age');
			self.heightName('Change Height');
			self.weightsName('Change Weight');
			self.targetName('Change Target');
			self.exerciseName('Change Exercise');
			self.langName('Change Language');
			self.kilosName('Change Kilos / Week');
		
			self.sumInfo('Here you can see all your personal information!');
			self.userInfo('Here you can change the username you have declared. After clicking \"SAVE\" it will be replaced with a new one if it does not exist.');
			self.emailInfo('Here you can change the email you have stated. After clicking \"SAVE\" it will be replaced with a new one if it does not exist. In order to complete the process, however, it must first be identified!');
			self.passwordInfo('Here you can change the password you have stated. After clicking \"SAVE\" it will be replaced!');
			self.sexInfo('Here you can change the gender you have declared. After pressing \"CHANGE\" it will be replaced!');
			self.ageInfo('Here you can change the age you have stated. After clicking \"SAVE\" it will be replaced!');
			self.heightInfo('Here you can change the height you have declared. After clicking \"SAVE\" it will be replaced!');
			self.weightsInfo('Here you can change the initial weight you have declared. After clicking \"SAVE\" it will be replaced!');
			self.targetInfo('Here you can change the original goal you have stated. After clicking \"SAVE\" it will be replaced!');
			self.langInfo('Here you can switch between languages. After pressing \"CHANGE\" it will be replaced!');
			self.kilosInfo('Here you can change the kilos you have declared to take or lose per week. After clicking \"SAVE\" it will be replaced!');
			self.exerciseInfo('Here you can change the exercise you have declared. After clicking \"SAVE\" it will be replaced!');

			self.numeric('* Only numbers are allowed');
			self.alphaNumeric('* Only Latin characters, numbers and underscores are allowed.');
			self.isEmptyField('* The field is empty!');
			self.isEmail('* Please enter a valid email.');
			self.empties('* Fields are empty!');
			self.save('SAVE');
			self.change('CHANGE');

			self.usernameH('Valid Username');
			self.newUsernameH('New Username');
			self.passH('Password');
			self.repeatpassH('Confirm Password');
			self.emailH('Valid Email');
			self.newEmailH('New Email');
			self.ageH('Age');
			self.newAgeH('New Age');
			self.sexH('Sex');
			self.weightsH('Weight');
			self.newWeightsH('New Weight');
			self.heightH('Height');
			self.newHeightH('New Height');
			self.isIncreaseWeightH('I want to');
			self.requestedWeightH('Desired Weight');
			self.language('Greek');
			self.english('English');
			self.greek('Greek');
			self.kilosH('Kilos / Week');
			self.exerciseH('Exercise');

			self.usernamePlaceHolder('Enter New Username...');
			self.emailPlaceHolder('Enter New Email...');	
			self.passPlaceHolder('Enter New Password...');	
			self.repeatpassPlaceHolder('Confirm Password...');
			self.agePlaceHolder('Enter New Age...');
			self.weightsPlaceHolder('Enter New Weight...');
			self.heightPlaceHolder('Enter New Height...');
			self.requestedWeightPlaceHolder('Enter Requested Weight...');

			self.loseWeight('Lose Weight');
			self.maintainWeight('Maintain my Weight');
			self.gainWeight('Gain weight');
			self.male('Male');
			self.female('Female');
			self.lessKilos('* In \"Requested Weight\" you must enter less kilos than \"Weight\"!');
			self.moreKilos('* In \"Requested Weight\" you have to enter more kilos than \"Weight\"!');
			self.passnotequal('* \"Confirm Password\" does not correspond to \"Password\"!');

            self.noExercise('Little or No Exercise (0-1 Days/Week)');
            self.lightExercise('Light Exercise (1-3 Days/Week)');
            self.moderateExercise('Moderate Exercise (3-5 Days/Week)');
            self.activeExercise('Intense Exercise (6-7 Days/Week)');
            self.veryActiveExercise('Very Intense Exercise (6-7 Days/Week)');
			
			self.home('Home');
			self.biometrics('Biometrics');
			self.measurements('Measurements');
			self.statistics('Charts');
			self.createfood('Create Food');
			self.addfood('Add Food');
			self.settings('Settings');
			self.logsout('Logout');
			self.title('Settings | Nutrition');
			self.minlenght('* The minimum character lenght is');
			self.maxlenght('* The maximum lenght is');
			self.panel('Admin Panel');

			self.sendLang(1);
		} else if(self.lang() === 'gr') {
			self.flag('img/united-kingdom.png');
			self.menusetting('ΜΕΝΟΥ ΡΥΘΜΙΣΕΩΝ');
			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumeric('* Επιτρέπονται μόνο λατινικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
			self.isEmptyField('* Το πεδίο είναι κενό!');
			self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');
			self.empties('* Τα πεδία είναι κενά!');
			self.save('ΑΠΟΘΗΚΕΥΣΗ');
			self.change('ΑΛΛΑΓΗ');
			self.loseWeight('Χάσω Βάρος');
			self.maintainWeight('Διατηρήσω το Βάρος μου');
			self.gainWeight('Πάρω Βάρος');
			self.male('Άρρεν');
			self.female('Θήλυ');
			self.lessKilos('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε λιγότερα κιλά από το \"Βάρος\"!');
			self.moreKilos('* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε περισσότερα κιλά από το \"Βάρος\"!');
			self.passnotequal('* Η \"Επιβεβαίωση Συνθηματικού\" δεν αντιστοιχεί με το \"Συνθηματικό\"!');
			self.home('Αρχική');
			self.biometrics('Βιομετρικά');
			self.measurements('Μετρήσεις');
			self.statistics('Γραφήματα');
			self.createfood('Δημιουργία Φαγητού');
			self.addfood('Προσθήκη Φαγητού');
			self.settings('Ρυθμίσεις');
			self.logsout('Αποσύνδεση');
			self.title('Ρυθμίσεις | Nutrition');
			self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.maxlenght('* Το μέγιστο μέγεθος χαρακτήρων είναι');
		
			self.usernameH('Ισχύον Username');
			self.newUsernameH('Νέο Username');
			self.passH('Συνθηματικό');
			self.repeatpassH('Επιβεβαίωση Συνθηματικού');
			self.emailH('Ισχύον Email');
			self.newEmailH('Νέο Email');
			self.ageH('Ηλικία');
			self.newAgeH('Νέα Ηλικία');
			self.sexH('Φύλο');
			self.weightsH('Βάρος');
			self.newWeightsH('Νέο Βάρος');
			self.heightH('Ύψος');
			self.newHeightH('Νέο Ύψος');
			self.isIncreaseWeightH('Θέλω να');
			self.requestedWeightH('Επιθυμητό Βάρος');
			self.language('Αγγλικά');
			self.english('Αγγλικά');
			self.greek('Ελληνικά');
			self.kilosH('Κιλά / Εβδομάδα');
			self.exerciseH('Άσκηση');
		
			self.usernamePlaceHolder('Εισάγετε Νέο Username...');
			self.emailPlaceHolder('Εισάγετε Νέο Email...');	
			self.passPlaceHolder('Εισάγετε Νέο Συνθηματικό...');	
			self.repeatpassPlaceHolder('Επιβεβαίωση Συνθηματικού...');
			self.agePlaceHolder('Εισάγετε Νέα Ηλικία...');
			self.weightsPlaceHolder('Εισάγετε Νέο Βάρος...');
			self.heightPlaceHolder('Εισάγετε Νέο Υψος...');
			self.requestedWeightPlaceHolder('Εισάγετε Επιθυμητό Βάρος...');

			self.sumName('Σύνοψη');
			self.userName('Αλλαγή Username');
			self.emailName('Αλλαγή Email');
			self.passwordName('Αλλαγή Συνθηματικού');
			self.sexName('Αλλαγή Φύλου');
			self.ageName('Αλλαγή Ηλικίας');
			self.heightName('Αλλαγή Ύψους');
			self.weightsName('Αλλαγή Βάρους');
			self.targetName('Αλλαγή Στόχου');
			self.exerciseName('Αλλαγή Άσκησης');
			self.langName('Εναλλαγή Γλώσσας');
			self.kilosName('Αλλαγή Κιλών / Εβδομάδα');
		
            self.noExercise('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
            self.lightExercise('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
            self.moderateExercise('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
            self.activeExercise('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.veryActiveExercise('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');

			self.sumInfo('Εδώ μπορείτε να δείτε όλα τα προσωπικά σας στοιχεία!');
			self.userInfo('Εδώ μπορείτε να κάνετε αλλαγή του username που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί με ένα καινούργιο εφόσον δεν υπάρχει.');
			self.emailInfo('Εδώ μπορείτε να κάνετε αλλαγή του email που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί με ένα καινούργιο  εφόσον δεν υπάρχει. Για να ολοκληρωθεί η διαδιακασία θα πρέπει πρώτα όμως να γίνει ταυτοποίησή του!');
			self.passwordInfo('Εδώ μπορείτε να κάνετε αλλαγή του συνθηματικού που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.sexInfo('Εδώ μπορείτε να κάνετε αλλαγή του φύλου που έχετε δηλώσει. Αφού πατήσετε \"ΑΛΛΑΓΗ\" θα αντικατασταθεί!');
			self.ageInfo('Εδώ μπορείτε να κάνετε αλλαγή της ηλικίας που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.heightInfo('Εδώ μπορείτε να κάνετε αλλαγή του ύψους που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.weightsInfo('Εδώ μπορείτε να κάνετε αλλαγή του αρχικού βάρους που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.targetInfo('Εδώ μπορείτε να κάνετε αλλαγή του αρχικού στόχου που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.langInfo('Εδώ μπορείτε να κάνετε ενναλαγής Γλώσσας. Αφού πατήσετε \"ΑΛΛΑΓΗ\" θα αντικατασταθεί!');
			self.kilosInfo('Εδώ μπορείτε να κάνετε αλλαγή των κιλών που έχετε δηλώσει να χάνετε ή να παίρνετε ανά εβδομάδα. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.exerciseInfo('Εδώ μπορείτε να κάνετε αλλαγή της άσκησης που έχετε δηλώσει. Αφού πατήσετε \"ΑΠΟΘΗΚΕΥΣΗ\" θα αντικατασταθεί!');
			self.panel('Admin Πάνελ');
			
			self.sendLang(2);
		}
	};

	self.fillSettingArray = function() {
		self.settingsArray([]);
		var o = {
			isSettingToggle: true,
			name: self.sumName(), 
			info: self.sumInfo(), 
			elements: self.sumHtml()
		}
		var o1 = {
			isSettingToggle: false,
			name: self.userName(), 
			info: self.userInfo(), 
			elements: self.userHtml()
		}
		var o2 = {
			isSettingToggle: false,
			name: self.emailName(), 
			info: self.emailInfo(), 
			elements: self.emailHtml()
		}
		var o3 = {
			isSettingToggle: false,
			name: self.passwordName(), 
			info: self.passwordInfo(), 
			elements: self.passwordHtml()
		}
		var o4 = {
			isSettingToggle: false,
			name: self.sexName(), 
			info: self.sexInfo(), 
			elements: self.sexHtml()
		}
		var o5 = {
			isSettingToggle: false,
			name: self.ageName(), 
			info: self.ageInfo(), 
			elements: self.ageHtml()
		}
		var o6 = {
			isSettingToggle: false,
			name: self.heightName(), 
			info: self.heightInfo(), 
			elements: self.heightHtml()
		}		
		var o7 = {
			isSettingToggle: false,
			name: self.weightsName(), 
			info: self.weightsInfo(), 
			elements: self.weightsHtml()
		}
		var o8 = {
			isSettingToggle: false,
			name: self.targetName(), 
			info: self.targetInfo(), 
			elements: self.targetHtml()
		}
		var o9 = {
			isSettingToggle: false,
			name: self.exerciseName(), 
			info: self.exerciseInfo(), 
			elements: self.exerciseHtml()
		}
		var o10 = {
			name: self.kilosName(), 
			info: self.kilosInfo(), 
			elements: self.kilosHtml()
		}

		self.settingsArray.push(new Settings(o));
		self.settingsArray.push(new Settings(o1));
		self.settingsArray.push(new Settings(o2));
		self.settingsArray.push(new Settings(o3));
		self.settingsArray.push(new Settings(o4));
		self.settingsArray.push(new Settings(o5));
		self.settingsArray.push(new Settings(o6));
		self.settingsArray.push(new Settings(o7));
		self.settingsArray.push(new Settings(o8));
		self.settingsArray.push(new Settings(o9));
		self.settingsArray.push(new Settings(o10));
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
			activelabel: "active",
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

		self.dashboardArray.push(new Dashboard(o));
		if(self.categoryUser() == 'Admin') {
			self.dashboardArray.push(new Dashboard(o8));
		}
		self.dashboardArray.push(new Dashboard(o1));
		self.dashboardArray.push(new Dashboard(o2));
		self.dashboardArray.push(new Dashboard(o3));
		//self.dashboardArray.push(new Dashboard(o4));
		self.dashboardArray.push(new Dashboard(o5));
		self.dashboardArray.push(new Dashboard(o6));
		self.dashboardArray.push(new Dashboard(o7));
		if(self.idUser() != '' && self.nameUser() != '') {
			self.dashboardArray.push(new Dashboard(o9));
		}
	};

	function Settings(data) {
		var set = this;

		set.isSettingToggle = ko.observable(data.isSettingToggle);
		set.name = ko.observable(data.name);
		set.info = ko.observable(data.info);
		set.elements = ko.observable(data.elements);

		set.openSettings = function() {
			set.isSettingToggle(!set.isSettingToggle());
		};
	};

	function Dashboard(data) {
		var dash = this;

		dash.name = ko.observable(data.name);
		dash.icons = ko.observable(data.icons);
		dash.redirect = ko.observable(data.redirect);
		dash.activelabel = ko.observable(data.activelabel);
		dash.title = ko.observable(data.title);

		dash.redirect.subscribe(function(newVal) {
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

	self.userSubmit = function() {
		if(!self.usernameInput.minLengthError() && !self.usernameInput.maxLengthError() && !self.usernameInput.alphaNumericError()) {
			self.switch('modalLoad');
			let o;

			if(self.idUser() != '' && self.nameUser() != '') {
				o = {
					username: self.usernameForm(),
					newVal: self.usernameInput()
				};
			} else {
				o = {
					username: self.username(),
					newVal: self.usernameInput()
				};				
			}

			var check = document.getElementById("checkuser");
			
			$.post('./php/updateusername.php', o, function(data) {
				if(data.status == "ok") {
					self.username(data.data);
					self.usernameForm(data.data);
					self.usernameInput("");
					self.successMsg("Επιτυχής Αλλαγή Username");
					check.style.color = "rgb(51, 134, 33)";
					self.closeLoginWarning();
					self.openLoginWarning();
/* 					setTimeout(function() {
						self.closeLoginWarning();		
					}, 5000);  */
				} else if(data.status == "error") {
					self.usernameInput.minLengthError(true);
					self.usernameInput.minLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});	
		}
	};

	self.emailSubmit = function() {
		if(!self.emailInput.emailError()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				newVal: self.emailInput(),
				lang: self.lang()
			};

			var check = document.getElementById("checkemail");

			$.post('./php/updateemail.php', o, function(data) {
				if(data.status == "ok") {
					//self.email(data.data);
					self.emailInput("");
					check.style.color = "rgb(51, 134, 33)";
				} else if(data.status == "error") {
					self.emailInput.emailError(true);
					self.emailInput.emailErrorMessage(data.data);
				}
				self.switch('modalLoad');
			});
		}
	};

	self.passSubmit = function() {
		if(!self.passInput.minLengthError() && !self.repeatpassInput.minLengthError() && self.passwordCheck()) {//!self.passwordCheckcError()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				newVal1: self.passInput(),
				newVal2: self.repeatpassInput()
			};
			
			$.post('./php/updatepassword.php', o, function(data) {
				if(data.status == "ok") {
					self.passInput("");
					self.repeatpassInput("");
				} else if(data.status == "error") {
					self.repeatpassInput.minLengthError(true);
					self.repeatpassInput.minLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});	
		}
	};

	self.sexSubmit = function() {
		self.switch('modalLoad');
			
		let o = {
			username: self.username(),
			newVal: self.sexNum(),
			sendLang: self.sendLang(),
			age: self.age(),
			height: self.height(),
			weight: self.weights(),
			isIncreaseWeight: self.isIncreaseWeightNum(),
			exercise: self.exercise(),
			kilos: self.kilos(),
			fd: self.fd()
		};

		var check = document.getElementById("checksex");
		
		$.post('./php/updatesex.php', o, function(data) {
			if(data.status == "ok") {
				console.log(data.data);
				if(data.data == 2) {
					self.sex(self.male());
					self.sexInput(self.male());
				} else {
					self.sex(self.female());
					self.sexInput(self.female());
				}
				self.sexNum(data.data);
				check.style.color = "rgb(51, 134, 33)";
			} else if(data.status == "error") {

			}
			self.switch('modalLoad');
		});	
	};

	self.ageSubmit = function() {
		if(!self.ageInput.numericError() && !self.ageInput.maxLengthError()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				sendLang: self.sendLang(),
				newVal: Math.round(self.ageInput()),
				height: self.height(),
				weight: self.weights(),
				isIncreaseWeight: self.isIncreaseWeightNum(),
				exercise: self.exercise(),
				kilos: self.kilos(),
				sex: self.sexNum(),
				fd: self.fd()
			};

			var check = document.getElementById("checkage");

			$.post('./php/updateage.php', o, function(data) {
				if(data.status == "ok") {
					self.age(data.data);
					self.ageInput("");
					check.style.color = "rgb(51, 134, 33)";
				} else if(data.status == "error") {
					self.ageInput.maxLengthError(true);
					self.ageInput.maxLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});
		}
	};

	self.heightSubmit = function() {
		if(!self.heightInput.numericError() && !self.heightInput.maxLengthError()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				sendLang: self.sendLang(),
				newVal: Math.round(self.heightInput()),
				age: self.age(),
				weight: self.weights(),
				isIncreaseWeight: self.isIncreaseWeightNum(),
				exercise: self.exercise(),
				kilos: self.kilos(),
				sex: self.sexNum(),
				fd: self.fd()
			};

			var check = document.getElementById("checkheight");

			$.post('./php/updateheight.php', o, function(data) {
				if(data.status == "ok") {
					self.height(data.data);
					self.heightInput("");
					check.style.color = "rgb(51, 134, 33)";
				} else if(data.status == "error") {
					self.heightInput.maxLengthError(true);
					self.heightInput.maxLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});
		}
	};

	self.weightSubmit = function() {
		if(!self.weightsInput.maxLengthError() && !self.weightsInput.numericError()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				sendLang: self.sendLang(),
				newVal: self.roundOff(self.weightsInput(), 2),
				age: self.age(),
				height: self.height(),
				isIncreaseWeight: self.isIncreaseWeightNum(),
				exercise: self.exercise(),
				kilos: self.kilos(),
				sex: self.sexNum(),
				fd: self.fd()
			};

			var check = document.getElementById("checkweight");
			
			$.post('./php/updateweight.php', o, function(data) {
				if(data.status == "ok") {
					self.weights(data.data.weights);//self.roundOff(, 2)
					self.requestedWeight(data.data.requestedWeight);//self.roundOff(, 2)
					self.weightsInput("");
					self.requestedWeightInput(data.data.requestedWeight);//self.roundOff(, 2)
					self.requestedWeightInput.maxLengthError(false);
					check.style.color = "rgb(51, 134, 33)";
				} else if(data.status == "error") {
					self.weightsInput.maxLengthError(true);
					self.weightsInput.maxLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});
		}
	};

	self.targetSubmit = function() {
		if(!self.requestedWeightInput.maxLengthError() && !self.requestedWeightInput.numericError() && self.RequestedWeightCheck()) {
			self.switch('modalLoad');
			
			let o = {
				username: self.username(),
				sendLang: self.sendLang(),
				newVal1: self.isIncreaseWeightInput(),
				newVal2: self.roundOff(self.requestedWeightInput(), 2),
				newVal3: self.roundOff(self.weights(), 2),
				kilos: self.kilos(),
				sex: self.sexNum(),
				age: self.age(),
				height: self.height(),
				exercise: self.exercise(),
				fd: self.fd()
			};

			var check1 = document.getElementById("checkwant");
			var check2 = document.getElementById("checkrequestedweight");

			$.post('./php/updatetarget.php', o, function(data) {
				if(data.status == "ok") {
					if(data.data.isIncreaseWeight == 1) {
						self.isIncreaseWeight(self.loseWeight());
						self.isRequestedError(true);
					} else if(data.data.isIncreaseWeight == 2) {
						self.isIncreaseWeight(self.maintainWeight());
						self.isRequestedError(false);
					} else {
						self.isIncreaseWeight(self.gainWeight());
						self.isRequestedError(true);
					}
					self.requestedWeight(data.data.requestedWeight);//self.roundOff(, 2)
					self.isIncreaseWeightInput(data.data.isIncreaseWeight);
					self.requestedWeightInput(data.data.requestedWeight);//self.roundOff(, 2)
					check1.style.color = "rgb(51, 134, 33)";
					check2.style.color = "rgb(51, 134, 33)";
				} else if(data.status == "error") {
					self.requestedWeightInput.maxLengthError(true);
					self.requestedWeightInput.maxLengthMessage(data.data);
				}
				self.switch('modalLoad');
			});
		}
	};

	self.exerciseSubmit = function() {
		self.exerciseMode();
		self.switch('modalLoad');
			
		let o = {
			username: self.username(),
			kilos: self.kilos(),
			sendLang: self.sendLang(),
			age: self.age(),
			height: self.height(),
			weight: self.weights(),
			isIncreaseWeight: self.isIncreaseWeightNum(),
			exercise: self.exercise(),
			sex: self.sexNum(),
			fd: self.fd()
		};
		console.log(o);
		var check = document.getElementById("checkexercise");

		$.post('./php/updateexercise.php', o, function(data) {
			if(data.status == "ok") {
				check.style.color = "rgb(51, 134, 33)";
			} else if(data.status == "error") {

			}
			self.switch('modalLoad');
		});	
	};

	self.kilosSubmit = function() {
		self.switch('modalLoad');
			
		let o = {
			username: self.username(),
			newVal: self.kilos(),
			sendLang: self.sendLang(),
			age: self.age(),
			height: self.height(),
			weight: self.weights(),
			isIncreaseWeight: self.isIncreaseWeightNum(),
			exercise: self.exercise(),
			sex: self.sexNum(),
			fd: self.fd()
		};

		console.log(o);

		var check = document.getElementById("checkkilos");

		$.post('./php/updatekilos.php', o, function(data) {
			if(data.status == "ok") {
				self.kilos(data.data);
				check.style.color = "rgb(51, 134, 33)";
			} else if(data.status == "error") {

			}
			self.switch('modalLoad');	
		});	
	};

	self.langSubmit = function() {
		let o = {
			username: self.username(),
			newVal: self.sendLang()
		};

		$.post('./php/updatelang.php', o, function(data) {
			if(data.status == "ok") {
				self.settingspage();
			} else if(data.status == "error") {

			}	
		});	
	};

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
	ko.applyBindings(new SettingsModel(), document.getElementById('body'));
});