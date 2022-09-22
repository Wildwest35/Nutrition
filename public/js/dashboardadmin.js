function DashboardAdminModel() {
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
    self.title = ko.observable('Admin Πάνελ | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
    self.username = ko.observable();
	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumericLatin = ko.observable('* Επιτρέπονται μόνο λατινικοί και ελληνικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
	self.empties = ko.observable('* Το πεδίο είναι κενό!');
	self.isEmail = ko.observable('* Παρακαλώ εισάγετε ένα έγκυρο email.');
	self.minlenght = ko.observable('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
	self.maxlenght = ko.observable('* Το μέγιστο μέγεθος χαρακτήρων είναι');
    self.dashboardArray = ko.observableArray([]);
	self.usersArray = ko.observableArray([]);
	self.foodsArray = ko.observableArray([]);
	self.foodCategoryArray = ko.observableArray([]);
	self.createFoodArray = ko.observableArray([]);
	self.unitsArray = ko.observableArray([]);
	self.activationLinkArray = ko.observableArray([]);
	self.confirmNewEmailsArray = ko.observableArray([]);
	self.searchArray = ko.observableArray([]);
	self.elementOptionArray = ko.observableArray([]);
	self.itemOptionArray = ko.observableArray([]);
	self.showInfoArray = ko.observableArray([]);
	self.seachUser = ko.observable('');
	self.recoverSearchUser = function() {
		self.seachUser('');
		self.sorting('sortNumberDesc');
		self.sortNumber();
	};
	self.searchUserName = ko.observable('Αναζήτηση...');
	self.sorting = ko.observable('sortNumberAsc');
	self.limit = ko.observable(50);
	self.offset = ko.observable(0);
	self.liTag = ko.observable('');
	self.categoryName = ko.observable('users');
	self.isWaitFavourite = ko.observable(true);
	self.isHideStar = ko.observable(true);
	self.isHideEdit = ko.observable(false);
	self.isImg = ko.observable(true);
	self.male = ko.observable('Άρρεν');
	self.female = ko.observable('Θήλυ');
	self.sex = ko.observable('');
	self.totalUsers = ko.observable(0);
	self.totalFoods = ko.observable(0);
	self.totalCreatedFoods = ko.observable(0);
	self.totalFoodCategories = ko.observable(0);
	self.totalUnits = ko.observable(0);
	self.totalActivationLinks = ko.observable(0);
	self.totalConfirmNewEmails = ko.observable(0);
	self.page = ko.observable(1);
	self.helptotalPages = ko.observable(0);
	self.helppage = ko.observable(1);
	self.type = ko.observable('');
	self.thUser = ko.observable(``);
	self.thFood = ko.observable(``);
	self.thOption = ko.observable(``);
	self.userInfo = ko.observable('Πληροφορίες Χρήστη');
	self.foodInfo = ko.observable('Πληροφορίες Φαγητού');
	self.createdFoodInfo = ko.observable('Δημιουργημένο Φαγητό');
	self.info = ko.observable('');
	self.sharp = ko.observable('#');
	self.idName = ko.observable('ID');
	self.newIdCategory = ko.observable('');
	self.newIdUnit = ko.observable('');

	self.newImg = ko.observable('');
	self.newImgPath = ko.observable('./img_public/');
	self.imgPath = ko.observable('./img/');

	self.newCategoryInput = ko.observable('').extend({
		alphaNumericLatins: ""
	});

	self.newCategoryInput.subscribe(function(newVal) {
		const name = document.getElementById('nameEdit3');
		name.style.color = 'rgb(0, 0, 0)';
    });

	self.newUnitInput = ko.observable('').extend({
		alphaNumericLatins: ""
	});

	self.newUnitInput.subscribe(function(newVal) {
		const name = document.getElementById('nameEdit4');
		name.style.color = 'rgb(0, 0, 0)';
    });

	self.newImgName = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newImgHash = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.uniqueNameError = ko.observable(false);
	self.uniqueNameMsg = ko.observable('* Η ονομασία του φαγητού υπάρχει ήδη!');	
	
	self.newUsername = ko.observable('').extend({
		alphaNumericLatins: "",
		isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newFoodName = ko.observable('').extend({
		alphaNumericLatins: "",
		isEmptyField: "* Το πεδίο είναι κενό!"
	});
	
	self.newFoodName.subscribe(function(newVal) {
		const name = document.getElementById('nameEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('nameCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('nameEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('nameEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newPortion = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newPortion.subscribe(function(newVal) {
		const name = document.getElementById('portionEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('portionCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('portionEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('portionEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newUnit = ko.observable('')
	self.newCategoryFood = ko.observable('')

	self.newCategoryFood.subscribe(function(newVal) {
		const name = document.getElementById('categoryEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('categoryCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('categoryEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('categoryEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newCalories = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newCalories.subscribe(function(newVal) {
		const name = document.getElementById('caloriesEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('caloriesCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('caloriesEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('caloriesEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newProtein = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newProtein.subscribe(function(newVal) {
		const name = document.getElementById('proteinEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('proteinCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('proteinEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('proteinEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newCarb = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newCarb.subscribe(function(newVal) {
		const name = document.getElementById('carbEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('carbCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('carbEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('carbEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newFat = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	
	self.newFat.subscribe(function(newVal) {
		const name = document.getElementById('fatEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('fatCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('fatEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('fatEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newFiber = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newFiber.subscribe(function(newVal) {
		const name = document.getElementById('fitEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('fitCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('fitEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('fitEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newSugar = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newSugar.subscribe(function(newVal) {
		const name = document.getElementById('sugarEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('sugarCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('sugarEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('sugarEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newSaturated = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newSaturated.subscribe(function(newVal) {
		const name = document.getElementById('saturatedEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('saturatedCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('saturatedEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('saturatedEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newUnsaturated = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newUnsaturated.subscribe(function(newVal) {
		const name = document.getElementById('unsaturatedEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('unsaturatedCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('unsaturatedEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('unsaturatedEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newBitaminD = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newBitaminD.subscribe(function(newVal) {
		const name = document.getElementById('bitaminDEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('bitaminDCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('bitaminDEdit1');
		name2.style.color = 'rgb(0, 0, 0)';
		const name3 = document.getElementById('bitaminDEdit2');
		name3.style.color = 'rgb(0, 0, 0)';
    });

	self.newUsernameInput = ko.observable('').extend({
		alphaNumericLatins: ""
	});

	self.newUsernameInput.subscribe(function(newVal) {
		const name = document.getElementById('categoryEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('categoryCreate');
		name1.style.color = 'rgb(0, 0, 0)';
    });

	self.newEmail = ko.observable('').extend({
		isEmail: ""
	});

	self.newAge = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newWeight = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newHeight = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newRequestedWeight = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newKilos = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newPassword = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});    
    self.newRepeatpassword = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newFoodCategoryName = ko.observable('').extend({
		alphaNumericLatins: ""
	});

	self.newFoodCategoryName.subscribe(function(newVal) {
		const name = document.getElementById('nameCategory');
		name.style.color = 'rgb(0, 0, 0)';
    });

	self.newUnitName = ko.observable('').extend({
		alphaNumericLatins: ""
	});

	self.newUnitName.subscribe(function(newVal) {
		const name = document.getElementById('nameUnit');
		name.style.color = 'rgb(0, 0, 0)';
    });

	self.newSexName = ko.observable('');
	self.newExercise = ko.observable('');
	self.newExercise.subscribe(function(newVal) {
        if(self.newExercise() == 1) {
            self.exerciseText(self.noExercise());
            self.fd(1.2);
        } else if(self.newExercise() == 2) {
            self.exerciseText(self.lightExercise());
            self.fd(1.375);
        } else if(self.newExercise() == 3) {
            self.exerciseText(self.moderateExercise());
            self.fd(1.55);
        } else if(self.newExercise() == 4) {
            self.exerciseText(self.activeExercise());
            self.fd(1.725);
        } else {
            self.exerciseText(self.veryActiveExercise());
            self.fd(1.9);
        }
    });
	self.newIsIncreaseWeight = ko.observable('');
	self.users = ko.observable('Χρήστες');
	self.foods = ko.observable('Φαγητά Συστήματος');
	self.userFoods = ko.observable('Φαγητά Χρηστών');
	self.categoryFoods = ko.observable('Κατηγορίες Φαγητών');
	self.units = ko.observable('Μονάδες Μέτρησης');
	self.activationLinks = ko.observable('Ενεργοποίηση Λογαριασμών');
	self.confirmNewEmails = ko.observable('Επιβεβαιώσεις Νέων Email');
	self.enable = ko.observable('Ενεργοποιημένος');
	self.disable = ko.observable('Απενεργοποιημένος');
	self.no = ko.observable('Όχι');
	self.yes = ko.observable('Ναι');
	self.deletes = ko.observable('Διαγραφή');
	self.activate = ko.observable('Ενεργοποίηση');
	self.editFood = ko.observable('Επεξεργασία Φαγητού');
	self.editFoodCategory = ko.observable('Επεξεργασία Κατηγορίας');
	self.editUnit = ko.observable('Επεξεργασία Μονάδων');
	self.addFoodCategory = ko.observable('Προσθήκη Κατηγορίας');
	self.noAvailableUser = ko.observable('Δεν υπάρχει κανένας χρήστης');
	self.noAvailableFood = ko.observable('Δεν υπάρχει κανένα φαγητό');
	self.noAvailableCreatedFood = ko.observable('Δεν υπάρχει κανένα φαγητό χρηστών');
	self.noAvailableFoodCategory = ko.observable('Δεν υπάρχει καμία κατηγορία φαγητού');
	self.noAvailableUnit = ko.observable('Δεν υπάρχει καμία μονάδα μέτρησης');
	self.noAvailableActivationLink = ko.observable('Δεν υπάρχει κανένας λογαριασμός προς ενεργοποίηση');
	self.noAvailableConfirmEmail = ko.observable('Δεν υπάρχει κανένα νέο email για επιβεβαίωση');
	self.noAvailable = ko.observable(self.noAvailableUser());
	self.addUnit = ko.observable('Προσθήκη Μονάδων');
	self.userName = ko.observable('Όνομα Χρήστη');
	self.emailName = ko.observable('Email');
	self.sexName = ko.observable('Φύλο');
	self.weightName = ko.observable('Βάρος');
	self.heightName = ko.observable('Ύψος');
	self.isIncreaseWeightName = ko.observable('Θέλω να');
	self.requestedWeightName = ko.observable('Επιθυμητό Βάρος');
	self.ageName = ko.observable('Ηλικία');
	self.exerciseName = ko.observable('Άσκηση');
	self.kilosName = ko.observable('Κιλά/Εβδομάδα');
	self.foodName = ko.observable('Όνομα Φαγητού');
	self.categoryWord = ko.observable('Κατηγορία');
	self.quantityName = ko.observable('Ποσότητα');
	self.accountName = ko.observable('Λογαριασμός');
	self.foodCategoryName = ko.observable('Κατηγορία Φαγητού');
	self.dateCreatedName = ko.observable('Ημερομηνία Δημιουργίας');
	self.expireDateLinkName = ko.observable('Ημερομηνία Λήξης Συνδέσμου');
	self.tolocalestring = ko.observable('el-GR');
	self.cancelWord = ko.observable('Ακύρωση');
	self.okWord = ko.observable('Εντάξει');
	self.updateName = ko.observable('Ενημέρωση');
	self.idFoodName = ko.observable('ID Φαγητού');
	self.idUnitName = ko.observable('ID Μονάδας Μέτρησης');
	self.imgPathName = ko.observable('Μονοπάτη Εικόνας');
	self.imgName = ko.observable('Εικόνα');
	self.imgNameName = ko.observable('Όνομα Εικόνας');
	self.imgHashName = ko.observable('Hash Εικόνας');
	self.unitName = ko.observable('Μονάδα Μέτρησης');
	self.portionName = ko.observable('Μερίδα');
	self.caloriesName = ko.observable('Θερμίδες');
	self.proteinName = ko.observable('Πρωτείνες');
	self.carbName = ko.observable('Υδατάναθρακες');
	self.fatName = ko.observable('Λίπη');
	self.fiberName = ko.observable('Φυτικές Ίνες');
	self.saturatedName = ko.observable('Κορεσμένα');
	self.unsaturatedName = ko.observable('Ακόρεστα');
	self.sugarName = ko.observable('Σάκγχαρα');
	self.bitaminsName = ko.observable('Βιταμίνη D');
	self.isFavouriteName = ko.observable('Αγαπημένο');
	self.emailName = ko.observable('Email');
    self.exerciseText = ko.observable('');
    self.noExercise = ko.observable('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
    self.lightExercise = ko.observable('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
    self.moderateExercise = ko.observable('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
    self.activeExercise = ko.observable('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
    self.veryActiveExercise = ko.observable('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
	self.choosecategory = ko.observable('Επιλέξτε Κατηγορία');
    self.loseWeight = ko.observable('Χάσω Βάρος');
	self.maintainWeight = ko.observable('Διατηρήσω το Βάρος μου');
	self.gainWeight = ko.observable('Πάρω Βάρος');
	self.fd = ko.observable(1.2);
	self.pass = ko.observable('Συνθηματικό');
    self.repeatpass = ko.observable('Επιβεβαίωση Συνθηματικού');
    self.usernamePlaceholder = ko.observable('Εισάγετε Username');
    self.emailPlaceholder = ko.observable('Εισάγετε Email');
	self.passPlaceholder = ko.observable('Εισάγετε Συνθηματικό');
	self.repeatpassPlaceholder = ko.observable('Εισάγετε Επιβεβαίωση Συνθηματικού');
	self.weightPlaceholder = ko.observable('Εισάγετε το βάρος σας');
    self.heightPlaceholder = ko.observable('Εισάγετε το ύψος σας');
	self.agePlaceholder = ko.observable('Εισάγετε την ηλικία σας');
	self.requestedPlaceholder = ko.observable('Εισάγετε το επιθυμητό βάρος');
	let i;
	var users = document.getElementById('users');
	var foods = document.getElementById('foods');
	var createdFoods = document.getElementById('createdFoods');
	var foodCategory = document.getElementById('foodCategory');
	var units = document.getElementById('units');
	var activationLink = document.getElementById('activationLink');
	var confirmNewEmails = document.getElementById('confirmNewEmails');

	self.thUserArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortUsername", thName: 'self.userName()', thSort: "(sorting() != 'usernameAsc') && (sorting() != 'usernameDesc')", thCaretup: "sorting() == 'usernameAsc'", thCaretdown: "sorting() == 'usernameDesc'"},
		{thClick: "sortEmail", thName: 'self.emailName()', thSort: "(sorting() != 'emailAsc') && (sorting() != 'emailDesc')", thCaretup: "sorting() == 'emailAsc'", thCaretdown: "sorting() == 'emailDesc'"},
		{thClick: "sortConfirmAccount", thName: 'self.accountName()', thSort: "(sorting() != 'confirmAccountAsc') && (sorting() != 'confirmAccountDesc')", thCaretup: "sorting() == 'confirmAccountAsc'", thCaretdown: "sorting() == 'confirmAccountDesc'"}
/*		{thClick: "sortSex", thName: 'self.sexName()', thSort: "(sorting() != 'sexAsc') && (sorting() != 'sexDesc')", thCaretup: "sorting() == 'sexrAsc'", thCaretdown: "sorting() == 'sexDesc'"}
 		{thClick: "sortWeight", thName: 'self.weightName()', thSort: "(sorting() != 'weightAsc') && (sorting() != 'weightDesc')", thCaretup: "sorting() == 'weightAsc'", thCaretdown: "sorting() == 'weightDesc'"},
		{thClick: "sortHeight", thName: 'self.heightName()', thSort: "(sorting() != 'heightAsc') && (sorting() != 'heightDesc')", thCaretup: "sorting() == 'heightAsc'", thCaretdown: "sorting() == 'heightDesc'"},
		{thClick: "sortAge", thName: 'self.ageName()', thSort: "(sorting() != 'ageAsc') && (sorting() != 'ageDesc')", thCaretup: "sorting() == 'ageAsc'", thCaretdown: "sorting() == 'ageDesc'"} */
	]);

	self.thFoodArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortFoodName", thName: 'self.foodName()', thSort: "(sorting() != 'foodNameAsc') && (sorting() != 'foodNameDesc')", thCaretup: "sorting() == 'foodNameAsc'", thCaretdown: "sorting() == 'foodNameDesc'"},
		{thClick: "sortCategory", thName: 'self.foodCategoryName()', thSort: "(sorting() != 'categoryAsc') && (sorting() != 'categoryDesc')", thCaretup: "sorting() == 'categoryAsc'", thCaretdown: "sorting() == 'categoryDesc'"}
		/* {thClick: "sortSex", thName: 'self.quantityName()', thSort: "(sorting() != 'sexAsc') && (sorting() != 'sexDesc')", thCaretup: "sorting() == 'sexrAsc'", thCaretdown: "sorting() == 'sexDesc'"} */
	]);

	self.thCreatedFoodArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortUsername", thName: 'self.userName()', thSort: "(sorting() != 'usernameAsc') && (sorting() != 'usernameDesc')", thCaretup: "sorting() == 'usernameAsc'", thCaretdown: "sorting() == 'usernameDesc'"},
		{thClick: "sortFoodName", thName: 'self.foodName()', thSort: "(sorting() != 'foodNameAsc') && (sorting() != 'foodNameDesc')", thCaretup: "sorting() == 'foodNameAsc'", thCaretdown: "sorting() == 'foodNameDesc'"},
		{thClick: "sortCategory", thName: 'self.foodCategoryName()', thSort: "(sorting() != 'categoryAsc') && (sorting() != 'categoryDesc')", thCaretup: "sorting() == 'categoryAsc'", thCaretdown: "sorting() == 'categoryDesc'"}
		/* {thClick: "sortSex", thName: 'self.quantityName()', thSort: "(sorting() != 'sexAsc') && (sorting() != 'sexDesc')", thCaretup: "sorting() == 'sexrAsc'", thCaretdown: "sorting() == 'sexDesc'"} */
	]);

	self.thFoodCategoryArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortCategory", thName: 'self.foodCategoryName()', thSort: "(sorting() != 'categoryAsc') && (sorting() != 'categoryDesc')", thCaretup: "sorting() == 'categoryAsc'", thCaretdown: "sorting() == 'categoryDesc'"}
	]);

	self.thUnitArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortUnit", thName: 'self.unitName()', thSort: "(sorting() != 'unitAsc') && (sorting() != 'unitDesc')", thCaretup: "sorting() == 'unitAsc'", thCaretdown: "sorting() == 'unitDesc'"}
	]);

	self.thActivationLinkArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortUsername", thName: 'self.userName()', thSort: "(sorting() != 'usernameAsc') && (sorting() != 'usernameDesc')", thCaretup: "sorting() == 'usernameAsc'", thCaretdown: "sorting() == 'usernameDesc'"},
		{thClick: "sortDateCreated", thName: 'self.dateCreatedName()', thSort: "(sorting() != 'dateCreatedAsc') && (sorting() != 'dateCreatedDesc')", thCaretup: "sorting() == 'dateCreatedAsc'", thCaretdown: "sorting() == 'dateCreatedDesc'"},
		{thClick: "sortExpireLink", thName: 'self.expireDateLinkName()', thSort: "(sorting() != 'expireLinkAsc') && (sorting() != 'expireLinkDesc')", thCaretup: "sorting() == 'expireLinkAsc'", thCaretdown: "sorting() == 'expireLinkDesc'"}
	]);

	self.thConfirmNewEmailsArray = ko.observableArray([
		{thClick: "sortNumber", thName: 'self.sharp()', thSort: "(sorting() != 'sortNumberAsc') && (sorting() != 'sortNumberDesc')", thCaretup: "sorting() == 'sortNumberAsc'", thCaretdown: "sorting() == 'sortNumberDesc'"},
		{thClick: "sortUsername", thName: 'self.userName()', thSort: "(sorting() != 'usernameAsc') && (sorting() != 'usernameDesc')", thCaretup: "sorting() == 'usernameAsc'", thCaretdown: "sorting() == 'usernameDesc'"},
		{thClick: "sortEmail", thName: 'self.emailName()', thSort: "(sorting() != 'emailAsc') && (sorting() != 'emailDesc')", thCaretup: "sorting() == 'emailAsc'", thCaretdown: "sorting() == 'emailDesc'"},
		{thClick: "sortDateCreated", thName: 'self.dateCreatedName()', thSort: "(sorting() != 'dateCreatedAsc') && (sorting() != 'dateCreatedDesc')", thCaretup: "sorting() == 'dateCreatedAsc'", thCaretdown: "sorting() == 'dateCreatedDesc'"}
	]);

	self.userVarNamesArray = ko.observableArray([
		{varNames: 'self.sharp()'},
		{varNames: 'self.userName()'},
		{varNames: 'self.emailName()'},
		{varNames: 'self.accountName()'},
		{varNames: 'self.sexName()'},
		{varNames: 'self.ageName()'},
		{varNames: 'self.weightName()'},
		{varNames: 'self.heightName()'},
		{varNames: 'self.isIncreaseWeightName()'},
		{varNames: 'self.requestedWeightName()'},
		{varNames: 'self.exerciseName()'},
		{varNames: 'self.kilosName()'}
	]);

	self.foodVarNamesArray = ko.observableArray([
		{varNames: 'self.sharp()'},
		{varNames: 'self.idFoodName()'},
		{varNames: 'self.foodName()'},		
		{varNames: 'self.imgPathName()'},
		{varNames: 'self.imgNameName()'},
		{varNames: 'self.imgName()'},
		{varNames: 'self.categoryWord()'},
		{varNames: 'self.unitName()'},
		{varNames: 'self.portionName()'},
		{varNames: 'self.caloriesName()'},
		{varNames: 'self.proteinName()'},
		{varNames: 'self.carbName()'},
		{varNames: 'self.fatName()'},
		{varNames: 'self.fiberName()'},
		{varNames: 'self.saturatedName()'},
		{varNames: 'self.unsaturatedName()'},
		{varNames: 'self.sugarName()'},
		{varNames: 'self.bitaminsName()'}
	]);

	self.createdFoodVarNamesArray = ko.observableArray([
		{varNames: 'self.sharp()'},
		{varNames: 'self.idFoodName()'},
		{varNames: 'self.userName()'},
		{varNames: 'self.foodName()'},
		{varNames: 'self.imgPathName()'},
		{varNames: 'self.imgNameName()'},
		{varNames: 'self.imgName()'},
		{varNames: 'self.categoryWord()'},		
		{varNames: 'self.unitName()'},
		{varNames: 'self.isFavouriteName()'},
		{varNames: 'self.portionName()'},
		{varNames: 'self.caloriesName()'},
		{varNames: 'self.proteinName()'},
		{varNames: 'self.carbName()'},
		{varNames: 'self.fatName()'},
		{varNames: 'self.fiberName()'},
		{varNames: 'self.saturatedName()'},
		{varNames: 'self.unsaturatedName()'},
		{varNames: 'self.sugarName()'},
		{varNames: 'self.bitaminsName()'},
		{varNames: 'self.idFoodName()'}
	]);

	self.namesArray = ko.observableArray([]);

	self.thOptionArray = ko.observableArray([]);
	self.tdOptionArray = ko.observableArray([]);

	const swiper = new Swiper('.mySwiper', {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 0,
		// Pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		// Navigation
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		// Responsive breakpoints
		breakpoints: {
		  1201: {
			slidesPerView: 4
		  },
		  581: {
			slidesPerView: 3
		  },
		  328: {
			slidesPerView: 2
		  }
		}
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
					self.logout();
				}
				if(data.data.idUser && data.data.nameUser) {
					self.idUser(data.data.idUser);
					self.nameUser(data.data.nameUser);
				}
                self.fillDashboardArray();
				self.chooseOption('all');
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.fileUpload = function(data, e) {
		var file = e.target.files[0];
		console.log(file);

		if(file !== undefined) {
			let type = file.type.split("\/");
			self.type(type[1]);
		}
		console.log(self.type());
	};

	self.removeStyle = function() {
		users.removeAttribute('style');
		foods.removeAttribute('style');
		createdFoods.removeAttribute('style');
		foodCategory.removeAttribute('style');
		units.removeAttribute('style');
		activationLink.removeAttribute('style');
		confirmNewEmails.removeAttribute('style');
	};

	self.chooseOption = function(category) {
		//self.removeStyle();
		if(category == 'users') {
			self.categoryName('users');
			//users.style.backgroundColor = '#DBF5F0';
		} else if(category == 'foods') {
			self.categoryName('foods');
			//foods.style.backgroundColor = '#DBF5F0';
		} else if(category == 'createdFoods') {
			self.categoryName('createdFoods');
			//createdFoods.style.backgroundColor = '#DBF5F0';
		} else if(category == 'foodCategory') {
			self.categoryName('foodCategory');
			//foodCategory.style.backgroundColor = '#DBF5F0';
		} else if(category == 'units') {
			self.categoryName('units');
			//units.style.backgroundColor = '#DBF5F0';
		} else if(category == 'activationLink') {
			self.categoryName('activationLink');
			//activationLink.style.backgroundColor = '#DBF5F0';
		} else if(category == 'confirmNewEmails') {
			self.categoryName('confirmNewEmails');
			//confirmNewEmails.style.backgroundColor = '#DBF5F0';
		} else {
			self.categoryName('all');
			//users.style.backgroundColor = '#DBF5F0';
		}

		self.thOptionFun();
	};

	self.thOptionFun = function() {
		self.thOptionArray([]);
		self.tdOptionArray([]);
		self.thOption('');

		if(self.categoryName() == 'users') {
			self.noAvailable(self.noAvailableUser());
			self.thOption(self.thOption() + `<th class="food-main-color"></th><th class="food-main-color"></th>`);
			self.thOptionArray(self.thUserArray());
			self.updateAllUsers(1, 1);
		} else if(self.categoryName() == 'foods') {
			self.noAvailable(self.noAvailableFood());
			self.thOption(self.thOption() + `<th class="food-main-color"></th><th class="food-main-color"></th>`);
			self.thOptionArray(self.thFoodArray());
			self.updateAllFoods(1, 1);
		} else if(self.categoryName() == 'createdFoods') {
			self.noAvailable(self.noAvailableCreatedFood());
			self.thOption(self.thOption() + `<th class="food-main-color"></th><th class="food-main-color"></th>`);
			self.thOptionArray(self.thCreatedFoodArray());
			self.updateAllCreatedFoods(1, 1);
		} else if(self.categoryName() == 'foodCategory') {
			self.noAvailable(self.noAvailableFoodCategory());
			self.thOption(self.thOption() + `<th class="food-main-color"></th>`);
			self.thOptionArray(self.thFoodCategoryArray());
			self.updateFoodCategories(1, 1);
		} else if(self.categoryName() == 'units') {
			self.noAvailable(self.noAvailableUnit());
			self.thOption(self.thOption() + `<th class="food-main-color"></th>`);
			self.thOptionArray(self.thUnitArray());
			self.updateUnit(1, 1);
		} else if(self.categoryName() == 'activationLink') {
			self.noAvailable(self.noAvailableActivationLink());
			self.thOption(self.thOption() + `<th class="food-main-color"></th>`);
			self.thOptionArray(self.thActivationLinkArray());
			self.activationLink(1, 1);
		} else if(self.categoryName() == 'confirmNewEmails') {
			self.noAvailable(self.noAvailableConfirmEmail());
			self.thOption(self.thOption() + `<th class="food-main-color"></th>`);
			self.thOptionArray(self.thConfirmNewEmailsArray());
			self.confirmNewEmail(1, 1);
		} else {
			self.noAvailable(self.noAvailableUser());
			self.thOption(self.thOption() + `<th class="food-main-color"></th><th class="food-main-color"></th>`);
			self.thOptionArray(self.thUserArray());
			self.updateGetFunctions(1, 1);
		}
		self.thOption(self.thOption() + `<th class="food-main-color"></th>`);
		for(var i=0; i<self.thOptionArray().length; i++) {
			self.thOption(self.thOption() + 
			`<th class="food-main-color">
				<div class="food-titles summary-touch" data-bind="click: ${self.thOptionArray()[i].thClick}">
					<div class="summary-info" data-bind="text: ${self.thOptionArray()[i].thName}">Βάρος</div>
					<i data-bind="visible: ${self.thOptionArray()[i].thSort}" class="fas fa-sort"></i>
					<i data-bind="visible: ${self.thOptionArray()[i].thCaretup}" class="fas fa-caret-up"></i>
					<i data-bind="visible: ${self.thOptionArray()[i].thCaretdown}" class="fas fa-caret-down"></i>
				</div>
			</th>`);
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

	self.chooseSearch = function() {
		if(self.categoryName() == 'users') {
			self.updateAllUsers(1, 1);
		} else if(self.categoryName() == 'foods') {
			self.updateAllFoods(1, 1);
		} else if(self.categoryName() == 'createdFoods') {
			self.updateAllCreatedFoods(1, 1);
		} else if(self.categoryName() == 'foodCategory') {
			self.updateFoodCategories(1, 1);
		} else if(self.categoryName() == 'units') {
			self.updateUnit(1, 1);
		} else if(self.categoryName() == 'activationLink') {
			self.activationLink(1, 1);
		} else if(self.categoryName() == 'confirmNewEmails') {
			self.confirmNewEmail(1, 1);
		} else {
			self.updateAllUsers(1, 1);
		}
	};

	self.updateFoodCategories = function(totalPages, page) {
		self.foodCategoryArray([]);
		i = 0;
		
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o = {
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getfoodcategoriesinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) { 
					self.foodCategoryArray.push(el);
					self.elementOption(el);
				});
				self.totalNumOfElements();
			} else {
				self.elementOptionArray([]);
				self.totalNumOfElements();
				console.log('Something wrong with update foodCategories foods...');
			}
		});
	};

	self.updateUnit = function(totalPages, page) {
		self.unitsArray([]);
		i = 0;

		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o = {
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getunitinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) { 
					self.unitsArray.push(el);
					self.elementOption(el);
				});
				self.totalNumOfElements();
			} else {
				self.elementOptionArray([]);
				self.totalNumOfElements();
				console.log('Something wrong with update unit foods...');
			}
		});
	};

	self.activationLink = function(totalPages, page) {
		self.activationLinkArray([]);
		i = 0;

		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o = {
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getactivationlinkinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) { 
					self.activationLinkArray.push(el);
					self.elementOption(el);
				});
				self.totalNumOfElements();
			} else {
				self.elementOptionArray([]);
				self.totalNumOfElements();
				console.log('Something wrong with update unit foods...');
			}
		});
	};

	self.confirmNewEmail = function(totalPages, page) {
		self.confirmNewEmailsArray([]);
		i = 0;

		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}


		o = {
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getconfirmnewemailinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) { 
					self.confirmNewEmailsArray.push(el);
					self.elementOption(el);
				});
				self.totalNumOfElements();
			} else {
				self.elementOptionArray([]);
				self.totalNumOfElements();
				console.log('Something wrong with update unit foods...');
			}
		});
	};

	self.totalNumOfElements = function() {
		let o = {}

		if(self.seachUser() != '') {
			self.proccessPagination();
		} else {
			$.post('./php/gettotaladminelements.php', o, function(data) {
				if(data.status == "ok") {
					//console.log(data.data);
					self.totalUsers(data.data.totalUsers);
					self.totalFoods(data.data.totalFoods);
					self.totalCreatedFoods(data.data.totalCreatedFoods);
					self.totalFoodCategories(data.data.totalFoodCategories);
					self.totalUnits(data.data.totalUnits);
					self.totalActivationLinks(data.data.totalActivationLinks);
					self.totalConfirmNewEmails(data.data.totalConfirmNewEmails);
					self.proccessPagination();
				} else {
					console.log('Something wrong with total elements...');
				}
			});
		}
	}

	self.proccessPagination = function() {
		self.page(1);
		self.removeStyle();

		if(self.categoryName() == 'users') {
			users.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalUsers();
			} else {
				self.helptotalPages(Math.ceil(self.totalUsers()/self.limit()));
			}
		} else if(self.categoryName() == 'foods') {
			foods.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalFoods();
			} else {
				self.helptotalPages(Math.ceil(self.totalFoods()/self.limit()));
			}
		} else if(self.categoryName() == 'createdFoods') {
			createdFoods.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalCreatedFoods();
			} else {
				self.helptotalPages(Math.ceil(self.totalCreatedFoods()/self.limit()));
			}
		} else if(self.categoryName() == 'foodCategory') {
			foodCategory.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchFoodCategories();
			} else {
				self.helptotalPages(Math.ceil(self.totalFoodCategories()/self.limit()));
			}
		} else if(self.categoryName() == 'units') {
			units.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalUnits();
			} else {
				self.helptotalPages(Math.ceil(self.totalUnits()/self.limit()));
			}			
		} else if(self.categoryName() == 'activationLink') {
			activationLink.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalActivationLink();
			} else {
				self.helptotalPages(Math.ceil(self.totalActivationLinks()/self.limit()));
			}
		} else if(self.categoryName() == 'confirmNewEmails') {
			confirmNewEmails.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalConfirmEmail();
			} else {
				self.helptotalPages(Math.ceil(self.totalConfirmNewEmails()/self.limit()));
			}
		} else {
			users.style.backgroundColor = '#DBF5F0';
			if(self.seachUser() != '') {
				self.searchTotalUsers();
			} else {
				self.helptotalPages(Math.ceil(self.totalUsers()/self.limit()));
			}
		}

		if(self.seachUser() == '') {
			self.createPagination(self.helptotalPages(), self.helppage());
		}
	}

	self.searchTotalUsers = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchusers.php', o, function(data) {
			if(data.status == "ok") {
				self.totalUsers(data.data);
				self.helptotalPages(Math.ceil(self.totalUsers()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalFoods = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchfoods.php', o, function(data) {
			if(data.status == "ok") {
				self.totalFoods(data.data);
				self.helptotalPages(Math.ceil(self.totalFoods()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalCreatedFoods = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchcreatedfoods.php', o, function(data) {
			if(data.status == "ok") {
				self.totalCreatedFoods(data.data)
				self.helptotalPages(Math.ceil(self.totalCreatedFoods()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	}

	self.searchFoodCategories = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchfoodcategories.php', o, function(data) {
			if(data.status == "ok") {
				self.totalFoodCategories(data.data);
				self.helptotalPages(Math.ceil(self.totalFoodCategories()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalUnits = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchunits.php', o, function(data) {
			if(data.status == "ok") {
				self.totalUnits(data.data);
				self.helptotalPages(Math.ceil(self.totalUnits()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalActivationLink = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchactivationlink.php', o, function(data) {
			if(data.status == "ok") {
				self.totalActivationLinks(data.data);
				self.helptotalPages(Math.ceil(self.totalActivationLinks()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalConfirmEmail = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachUser()
		}

		$.post('./php/gettotalsearchconfirmemail.php', o, function(data) {
			if(data.status == "ok") {
				self.totalConfirmNewEmails(data.data);
				self.helptotalPages(Math.ceil(self.totalConfirmNewEmails()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.elementOption = function(el) {	
		let o1 = {userCount: (i+1).toString()}

		o = Object.assign(o1, el);

		self.elementOptionArray.push(new Users(o));

		i++;
	};

	self.updateLimit = function(obj, event) {
		self.updateGetFunctions(self.totalPages(), 1);
	};

	self.updateChooseCategories = function(totalPages, page) {
		if(self.categoryName() == 'users') {
			self.updateAllUsers(totalPages, page);
		} else if(self.categoryName() == 'foods') {
			self.updateAllFoods(totalPages, page);
		} else if(self.categoryName() == 'createdFoods') {
			self.updateAllCreatedFoods(totalPages, page);
		} else if(self.categoryName() == 'foodCategory') {
			self.updateFoodCategories(totalPages, page);
		} else if(self.categoryName() == 'units') {
			self.updateUnit(totalPages, page);
		} else if(self.categoryName() == 'activationLink') {
			self.activationLink(totalPages, page);
		} else if(self.categoryName() == 'confirmNewEmails') {
			self.confirmNewEmail(totalPages, page);
		} else {
			self.updateAllUsers(totalPages, page);
		}
	};

	self.updateGetFunctions = function(totalPages, page) {
		self.elementOptionArray([]);
		self.usersArray([]);
		i = 0;

		//limit = document.getElementById('limit').value;
		//self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		let o = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachUser(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getallusersinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.usersArray.push(el);
					self.elementOption(el);
				});

				$.post('./php/getallfoodinfo.php', o, function(data) {
					if(data.status == "ok") {
						var tmp = data.data.map(function(el) { 
							self.foodsArray.push(el);
						});

						$.post('./php/getactivationlinkinfo.php', o, function(data) {
							if(data.status == "ok") {
								var tmp = data.data.map(function(el) { 
									self.activationLinkArray.push(el);
								});

								$.post('./php/getconfirmnewemailinfo.php', o, function(data) {
									if(data.status == "ok") {
										var tmp = data.data.map(function(el) { 
											self.confirmNewEmailsArray.push(el);
										});
										
										$.post('./php/getunitinfo.php', o, function(data) {
											if(data.status == "ok") {
												var tmp = data.data.map(function(el) { 
													self.unitsArray.push(el);
												});

												$.post('./php/getfoodcategoriesinfo.php', o, function(data) {
													if(data.status == "ok") {
														var tmp = data.data.map(function(el) { 
															self.foodCategoryArray.push(el);
														});

														$.post('./php/getallcreatedfoodinfo.php', o, function(data) {
															if(data.status == "ok") {
																var tmp = data.data.map(function(el) { 
																	self.createFoodArray.push(el);
																});
																self.totalNumOfElements();
															} else {
																console.log('Something wrong with update foodCategories foods...');
															}
														});
													} else {
														console.log('Something wrong with update foodCategories foods...');
													}
												});
											} else {
												console.log('Something wrong with update unit foods...');
											}
										});

									} else {
										console.log('Something wrong with update unit foods...');
									}
								});
							} else {
								console.log('Something wrong with update unit foods...');
							}
						});						
					} else if(data.status == "error") {
		
					}
				});
			} else if(data.status == "error") {

			}
		});
	};

	self.updateAllUsers = function(totalPages, page) {
		self.usersArray([]);
		i = 0;

		//limit = document.getElementById('limit').value;
		//self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);	

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		let o = {
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getallusersinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) {
					self.usersArray.push(el);
					self.elementOption(el);
				});

				self.totalNumOfElements();
			} else if(data.status == "error") {
				self.elementOptionArray([]);
				self.totalNumOfElements();
			}	
		});
	};

	self.updateAllFoods = function(totalPages, page) {
		self.foodsArray([]);
		i = 0;
		//limit = document.getElementById('limit').value;
		//self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);	

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		let o = {
			username: self.username(),
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getallfoodinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) {
					self.foodsArray.push(el);
					self.elementOption(el);
				});

				self.totalNumOfElements();
			} else if(data.status == "error") {
				self.elementOptionArray([]);
				self.totalNumOfElements();
			}	
		});
	};

	self.updateAllCreatedFoods = function(totalPages, page) {
		
		//self.foodsArray([]);
		i = 0;
		//limit = document.getElementById('limit').value;
		//self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);	

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		let o = {
			username: self.username(),
			numLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset(),
			search: self.seachUser()
		}

		$.post('./php/getallcreatedfoodinfo.php', o, function(data) {
			if(data.status == "ok") {
				self.elementOptionArray([]);
				var tmp = data.data.map(function(el) {
					self.createFoodArray.push(el);
					self.elementOption(el);
				});

				self.totalNumOfElements();
			} else if(data.status == "error") {
				self.elementOptionArray([]);
				self.totalNumOfElements();
			}	
		});
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
	};

    self.sortNumber = function() {
        if(self.sorting() == 'sortNumberAsc')
            self.sorting('sortNumberDesc');
        else
            self.sorting('sortNumberAsc');
    };

	self.sortUsername = function() {
        if(self.sorting() == 'usernameAsc')
            self.sorting('usernameDesc');
        else
            self.sorting('usernameAsc');
    };

	self.sortEmail = function() {
        if(self.sorting() == 'emailAsc')
            self.sorting('emailDesc');
        else
            self.sorting('emailAsc');
    };

	self.sortConfirmAccount = function() {
        if(self.sorting() == 'confirmAccountAsc')
            self.sorting('confirmAccountDesc');
        else
            self.sorting('confirmAccountAsc');
    };

	self.sortFoodName = function() {
        if(self.sorting() == 'foodNameAsc')
            self.sorting('foodNameDesc');
        else
            self.sorting('foodNameAsc');
    };

	self.sortCategory = function() {
        if(self.sorting() == 'categoryAsc')
            self.sorting('categoryDesc');
        else
            self.sorting('categoryAsc');
    };

	self.sortUnit = function() {
        if(self.sorting() == 'unitAsc')
            self.sorting('unitDesc');
        else
            self.sorting('unitAsc');
    };

	self.sortDateCreated = function() {
        if(self.sorting() == 'dateCreatedAsc')
            self.sorting('dateCreatedDesc');
        else
            self.sorting('dateCreatedAsc');
    };

	self.sortExpireLink = function() {
        if(self.sorting() == 'expireLinkAsc')
            self.sorting('expireLinkDesc');
        else
            self.sorting('expireLinkAsc');
    };

	self.sortSex = function() {
        if(self.sorting() == 'sexAsc')
            self.sorting('sexDesc');
        else
            self.sorting('sexAsc');
    };

	self.sortWeight = function() {
        if(self.sorting() == 'weightAsc')
            self.sorting('weightDesc');
        else
            self.sorting('weightAsc');
    };

	self.sortHeight = function() {
        if(self.sorting() == 'heightAsc')
            self.sorting('heightDesc');
        else
            self.sorting('heightAsc');
    };
	
	self.sortAge = function() {
        if(self.sorting() == 'ageAsc')
            self.sorting('ageDesc');
        else
            self.sorting('ageAsc');
    };

    self.sortedTasks = ko.pureComputed(function() {
        var foodsArray = self.elementOptionArray().slice(0);
        var sorting = self.sorting();

        foodsArray.sort(function(a, b) {
            if(sorting == 'usernameAsc') {
                return a.username().localeCompare(b.username());
            }  else if(sorting == 'usernameDesc') {
                return b.username().localeCompare(a.username());
            } else if(sorting == 'emailAsc') {
                return a.email().localeCompare(b.email());
            } else if(sorting == 'emailDesc') {
                return b.email().localeCompare(a.email());
            } else if(sorting == 'foodNameAsc') {
                return a.foodName().localeCompare(b.foodName());
            } else if(sorting == 'foodNameDesc') {
                return b.foodName().localeCompare(a.foodName());
            } else if(sorting == 'confirmAccountAsc') {
                return a.isConfirmAccount().localeCompare(b.isConfirmAccount(), undefined, {numeric: true});
            } else if(sorting == 'confirmAccountDesc') {
                return b.isConfirmAccount().localeCompare(a.isConfirmAccount(), undefined, {numeric: true});
            } else if(sorting == 'categoryAsc') {
                return a.category().localeCompare(b.category());
            } else if(sorting == 'categoryDesc') {
                return b.category().localeCompare(a.category());
            } else if(sorting == 'unitAsc') {
                return a.unit().localeCompare(b.unit(), undefined, {numeric: false});
            } else if(sorting == 'unitDesc') {
                return b.unit().localeCompare(a.unit(), undefined, {numeric: false});
            } else if(sorting == 'dateCreatedAsc') {
                return a.dateCreated().localeCompare(b.dateCreated(), undefined, {numeric: false});
            } else if(sorting == 'dateCreatedDesc') {
                return b.dateCreated().localeCompare(a.dateCreated(), undefined, {numeric: false});
            } else if(sorting == 'expireLinkAsc') {
                return a.expireLinkDate().localeCompare(b.expireLinkDate(), undefined, {numeric: false});
            } else if(sorting == 'expireLinkDesc') {
                return b.expireLinkDate().localeCompare(a.expireLinkDate(), undefined, {numeric: false});
            } else if(sorting == 'sortNumberAsc') {
                return a.userCount().localeCompare(b.userCount(), undefined, {numeric: true});
            } else if(sorting == 'sortNumberDesc') {
                return b.userCount().localeCompare(a.userCount(), undefined, {numeric: true});
            }
        })

        return foodsArray;
    });

	self.createPagination = function(totalPages, page) {
		self.liTag('');
		let active;
		let beforePage = page - 1;
		let afterPage = page + 1;

		if(page > 1) {
			self.liTag(self.liTag() + `<li class="btn prev" data-bind=\"click: self.updateChooseCategories.bind($data, ${totalPages}, ${page - 1})\"><span><i class="fas fa-angle-left"></i> </span></li>`); 
		}
		if(page > 2) {
			self.liTag(self.liTag() + `<li class="first numb" data-bind=\"click: self.updateChooseCategories.bind($data, ${totalPages}, ${1})\"><span>1</span></li>`);
			if(page > 3) {
				self.liTag(self.liTag() + `<li class="dots"><span>...</span></li>`);
			}
		}

/* 		if (page == totalPages) {
			beforePage = beforePage - 2;
		} else  if (page == totalPages - 1) {
			beforePage = beforePage - 1;
		}
*/
		if (page == 1) {
			afterPage = afterPage + 2;
		} else if (page == 2) {
			afterPage  = afterPage + 1;
		}

		for (var plength = beforePage; plength <= afterPage; plength++) {
			if(plength > totalPages) {
				continue;
			}
			if(plength == 0) {
				plength = plength + 1;
			}
			if(page == plength) {
				active = "active";
			} else {
				active = "";
			}

			self.liTag(self.liTag() + `<li class="numb ${active}" data-bind=\"click: self.updateChooseCategories.bind($data, ${totalPages}, ${plength})\"><span>${plength}</span></li>`);
		}

		if(page < totalPages - 1) {
			if(page < totalPages - 2) {
				self.liTag(self.liTag() + `<li class="dots"><span>...</span></li>`);
			}

			if(totalPages > 3) {
				self.liTag(self.liTag() + `<li class="last numb" data-bind=\"click: self.updateChooseCategories.bind($data, ${totalPages}, ${totalPages})\"><span>${totalPages}</span></li>`);
			}
		}

		if(page < totalPages) {
			self.liTag(self.liTag() + `<li class="btn next" data-bind=\"click: self.updateChooseCategories.bind($data, ${totalPages}, ${page + 1})\"><span> <i class="fas fa-angle-right"></i></span></li>`);
		}
	};

	self.chooseDelete = function() {
		if(self.categoryName() == 'users') {
			self.usersDelete();
		} else if(self.categoryName() == 'foods') {
			self.foodsDelete();
		} else if(self.categoryName() == 'createdFoods') {
			self.createdFoodsDelete();
		} else if(self.categoryName() == 'foodCategory') {
			self.foodCategoryDelete();
		} else if(self.categoryName() == 'units') {
			self.unitsDelete();
		} else if(self.categoryName() == 'activationLink') {
			self.activateLinkDelete();
		} else if(self.categoryName() == 'confirmNewEmails') {
			self.confirmEmailDelete();
		} else {
			self.usersDelete();
		}
		self.switch('modalDelete');
		self.switch('modalLoad');
	};

	self.usersDelete = function() { 
		let o = {
			id: self.itemOptionArray().id()
		}

		$.post('./php/deleteuser.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.foodsDelete = function() { 
		let type, hashText, imgHash;

		type = self.itemOptionArray().imgName().split(".");
		if(type == '') {
			type[0] = '';
			type[1] = '';
		}

		self.type(type[1]);

		if(self.itemOptionArray().imgHash() != '') {
			hashText = CryptoJS.HmacSHA256(self.itemOptionArray().imgName(), self.itemOptionArray().imgHash());
			imgHash = hashText.toString(CryptoJS.enc.Hex);
		} else {
			imgHash = type[0];
		}

		let o = {
			id: self.itemOptionArray().idFood(),
			newImgPath: self.itemOptionArray().imgPath(),
			newImgHash: self.itemOptionArray().imgHash(),
			newImg: self.itemOptionArray().imgPath() + imgHash + '.' + self.type(),
			fileLength: 1
		}

		$.post('./php/recoverdeletedfooddailysummary.php', o, function(data) {
			if(data.status == "ok") {
				$.post('./php/deleteimg.php', o, function(data) {
					if(data.status == "ok") {
						$.post('./php/deletefood.php', o, function(data) {
							if(data.status == "ok") {
								self.switch('modalLoad');
								//self.switch('modalSuccessMsg');
								self.chooseOption(self.categoryName());
							} else if(data.status == "error") {
								console.log(data.data);
								self.switch('modalLoad');
							}	
						});
					}
				});
			} else {
				console.log(data.data);
			}
		});
	};

	self.createdFoodsDelete = function() {
		let type, hashText, imgHash;

		type = self.itemOptionArray().imgName().split(".");
		if(type == '') {
			type[0] = '';
			type[1] = '';
		}

		self.type(type[1]);

		if(self.itemOptionArray().imgHash() != '') {
			hashText = CryptoJS.HmacSHA256(self.itemOptionArray().imgName(), self.itemOptionArray().imgHash());
			imgHash = hashText.toString(CryptoJS.enc.Hex);
		} else {
			imgHash = type[0];
		}

		let o = {
			id: self.itemOptionArray().idFood(),
			newImgPath: self.itemOptionArray().imgPath(),
			newImgHash: self.itemOptionArray().imgHash(),
			newImg: self.itemOptionArray().imgPath() + imgHash + '.' + self.type(),
			fileLength: 1
		}

		$.post('./php/recoverdeletedfooddailysummary.php', o, function(data) {
			if(data.status == "ok") {
				$.post('./php/deleteimg.php', o, function(data) {
					if(data.status == "ok") {
						$.post('./php/deletecreatedfoodadmin.php', o, function(data) {
							if(data.status == "ok") {
								self.switch('modalLoad');
								//self.switch('modalSuccessMsg');
								self.chooseOption(self.categoryName());
							} else if(data.status == "error") {
								console.log(data.data);
								self.switch('modalLoad');
							}	
						});
					}
				});
			} else {
				console.log(data.data);
			}
		});
	};

	self.foodCategoryDelete = function() { 
		let o = {
			id: self.itemOptionArray().categoryValue()
		}

		$.post('./php/deletefoodcategory.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.unitsDelete = function() { 
		let o = {
			id: self.itemOptionArray().unitValue()
		}

		$.post('./php/deleteunit.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.activateLinkDelete = function() { 
		let o = {
			id: self.itemOptionArray().id()
		}

		$.post('./php/deleteactivatelink.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.confirmEmailDelete = function() {
		let o = {
			id: self.itemOptionArray().id()
		}

		$.post('./php/deleteconfirmnewemail.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.chooseSubmit = function() {
		if(self.categoryName() == 'users') {
		} else if(self.categoryName() == 'foods') {
		} else if(self.categoryName() == 'createdFoods') {
		} else if(self.categoryName() == 'foodCategory') {
		} else if(self.categoryName() == 'units') {
		} else if(self.categoryName() == 'activationLink') {
			self.activateLinkSubmit();
		} else if(self.categoryName() == 'confirmNewEmails') {
			self.confirmEmailSubmit();
		} else {
		}
		self.switch('modalActivate');
		self.switch('modalLoad');
	};

	self.activateLinkSubmit = function() {
		let o = {
			id: self.itemOptionArray().id()
		}

		$.post('./php/activateaccount.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				//self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};

	self.confirmEmailSubmit = function() {
		let o = {
			id: self.itemOptionArray().id()
		}

		$.post('./php/confirmemailadmin.php', o, function(data) {
			if(data.status == "ok") {
				self.switch('modalLoad');
				self.switch('modalSuccessMsg');
				self.chooseOption(self.categoryName());
			} else if(data.status == "error") {
				console.log(data.data);
				self.switch('modalLoad');
			}	
		});
	};


	self.helpData = ko.observableArray([]);
	

	self.chooseVarName = function() {
		if(self.categoryName() == 'users') {
			self.namesArray(self.userVarNamesArray());
			self.info(self.userInfo());
		} else if(self.categoryName() == 'foods') {
			self.namesArray(self.foodVarNamesArray());
			self.info(self.foodInfo());
		} else if(self.categoryName() == 'createdFoods') {
			self.namesArray(self.createdFoodVarNamesArray());
			self.info(self.createdFoodInfo());
		} else {
			self.namesArray(self.userVarNamesArray());
			self.info(self.userInfo());
		}
	};

	function Users(data) {
		var user = this;

		user.td = ko.observable('');

		user.storeElements = function() {
			self.chooseVarName();
			self.showInfoArray([]);
			self.itemOptionArray([]);
			self.helpData([]);
			self.itemOptionArray(user);

			var i = 0;
			
			for(let x in data) {
				self.isImg(true);
				if(x == 'isConfirmAccount') {
					if(data[x] == 0 || data[x] == 'Μη Ενεργοποιημένος') {
						self.helpData.push({name: data[x]});
					} else {
						self.helpData.push({name: data[x]});
					}
				} else if(x == 'isIncreaseWeight') {
					if(data[x] == 1) {
						self.helpData.push({name: self.loseWeight()});
					} else if(data[x] == 2) {
						self.helpData.push({name: self.maintainWeight()});
					} else {
						self.helpData.push({name: self.gainWeight()});
					}
				} else if(x == 'exercise') {
					if(data[x] == 1) {
						self.helpData.push({name: self.noExercise()});
					} else if(data[x] == 2) {
						self.helpData.push({name: self.lightExercise()});
					} else if(data[x] == 3) {
						self.helpData.push({name: self.moderateExercise()});
					} else if(data[x] == 4) {
						self.helpData.push({name: self.activeExercise()});
					} else {
						self.helpData.push({name: self.veryActiveExercise()});
					}
				} else if(x == 'imgHash') {
					let type, hashText, imgHash, textImg;
					self.isImg(false);
					type = self.helpData()[i-1].name.split(".");
 					
					if(type == '') {
						type[0] = '';
						type[1] = '';
					}
					
			
					self.type(type[1]);

					if(data[x] != '') {
						hashText = CryptoJS.HmacSHA256(self.helpData()[i-1].name, data[x]);
						imgHash = hashText.toString(CryptoJS.enc.Hex);
						textImg = self.helpData()[i-2].name + imgHash + '.' + self.type();
					} else {
						imgHash = type[0];
						if(self.helpData()[i-2].name == './img/' && self.helpData()[i-1].name != '') {
							textImg = self.helpData()[i-2].name + self.helpData()[i-1].name;
						} else {
							textImg = './img/unknown.png';
						}
					} 
					self.helpData.push({name: textImg});
					//console.log(textImg);
				} else if(x == 'isFavourite') {
					if(data[x] == 1) {
						self.helpData.push({name: self.no()});
					} else {
						self.helpData.push({name: self.yes()});
					}
				} else {
					self.helpData.push({name: data[x]});
				}
			
				if(x != 'idUser' && x != 'idCreatedFood' && x != 'idUnit' && x != 'idCategory' && x != 'imgPath' && x != 'imgName' && x != 'idFood' && x != "id") {
					if(self.isImg()) {
						self.showInfoArray.push(
							`<tr>
								<th class="summary-info" data-bind="text: ${self.namesArray()[i].varNames}" style="border-radius: unset; background-color: #A4E5E0;">Όνομα</th>
								<td class="summary-info-detail break-line" style="border-radius: unset; background-color: #ffffff;" data-bind="text: '${self.helpData()[i].name}'">NtinosNtinos</td>
							</tr>`
						);
					} else {
						self.showInfoArray.push(
							`<tr>
								<th class="summary-info" data-bind="text: ${self.namesArray()[i].varNames}" style="border-radius: unset; background-color: #A4E5E0;">Όνομα</th>
								<td class="summary-info-detail break-line" style="border-radius: unset; background-color: #ffffff;"><img width='35' height='35' data-bind="attr: {src: '${self.helpData()[i].name}'}"></td>				
							</tr>`
						);						
					}
				}
				i++;
			}
		};

		user.addSideBar = function() {
			let o = {
				idUser: data.id,
				nameUser: data.username
			}
			self.idUser(data.id);
			self.nameUser(data.username);
			console.log(data.username);
			$.post('./php/getuserid.php', o, function(data) {
				if(data.status == "ok") {
					if(self.dashboardArray().length > 8) {
						self.dashboardArray.pop();
					}
					
					var o1 = {
						name: self.nameUser(),
						icons: "fa-solid fa-user",
						redirect: "pop",
						activelabel: "activeuser",
						title: self.nameUser()
					}
			
					self.dashboardArray.push(new AddFood(o1));
				} else if(data.status == "error") {
					console.log(data.data);
				}	
			});
		};

		user.editFoodsVar = function() {
			self.itemOptionArray([]);
			self.newFoodName(data.foodName);
			self.newPortion(data.portion);

			for(let i=0; i<self.unitsArray().length; i++) {
				if(data.unitName == self.unitsArray()[i].unit) {
					self.newUnit(self.unitsArray()[i].unitValue);
				}
			}

			for(let i=0; i<self.foodCategoryArray().length; i++) {
				if(data.category == self.foodCategoryArray()[i].category) {
					self.newCategoryFood(self.foodCategoryArray()[i].categoryValue);
				}
			}
			
			for(let i=0; i<self.usersArray().length; i++) {
				//console.log(self.usersArray()[i].username);
				if(data.username == self.usersArray()[i].username) {
					self.newUsername(self.usersArray()[i].id);
				}
			}
			self.newCategoryInput(data.category);
			self.newUnitInput(data.unit);
			self.newIdCategory(data.categoryValue);
			self.newIdUnit(data.unitValue);
			self.newCalories(data.calories);
			self.newProtein(data.protein);
			self.newCarb(data.carb);
			self.newFat(data.fat);
			self.newFiber(data.fiber);
			self.newSugar(data.saturated);
			self.newSaturated(data.unsaturated);
			self.newUnsaturated(data.sugar);
			self.newBitaminD(data.bitamins);
			self.itemOptionArray(user);
		}

		if(self.categoryName() == 'users') {
			user.td(user.td() + `<td data-bind="click: addSideBar"><img src="./img/magnifying-glass.png" alt="consumed" width="33" height="33" data-bind=""></td><td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalInfo')]"><img src="./img/eye.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'foods') {
			user.td(user.td() + `<td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalInfo')]"><img src="./img/eye.png" alt="consumed" width="33" height="33" data-bind=""></td><td data-bind="clickArray: [editFoodsVar, self.switch.bind($data, 'modalEditFood')]"><img src="./img/edit.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'createdFoods') {
			user.td(user.td() + `<td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalInfo')]"><img src="./img/eye.png" alt="consumed" width="33" height="33" data-bind=""></td><td data-bind="clickArray: [editFoodsVar, self.switch.bind($data, 'modalEditCreatedFood')]"><img src="./img/edit.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'foodCategory') {
			user.td(user.td() + `<td data-bind="clickArray: [editFoodsVar, self.switch.bind($data, 'modalEditCategoryFood')]"><img src="./img/edit.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'units') {
			user.td(user.td() + `<td data-bind="clickArray: [editFoodsVar, self.switch.bind($data, 'modalEditUnit')]"><img src="./img/edit.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'activationLink') {
			user.td(user.td() + `<td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalActivate')]"><img src="./img/check.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else if(self.categoryName() == 'confirmNewEmails') {
			user.td(user.td() + `<td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalActivate')]"><img src="./img/check.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		} else {
			user.td(user.td() + `<td data-bind="click: addSideBar"><img src="./img/magnifying-glass.png" alt="consumed" width="33" height="33" data-bind=""></td><td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalInfo')]"><img src="./img/eye.png" alt="consumed" width="33" height="33" data-bind=""></td>`);
		}

		user.td(user.td() + `<td data-bind="clickArray: [storeElements, self.switch.bind($data, 'modalDelete')]"><img src="./img/delete.png" alt="consumed" width="33" height="33" data-bind=""></td>`);		
		for (let x in data) {
			if(x == "sex") {
				if(data[x] == 1) {
					data[x] = self.female();
				} else {
					data[x] = self.male();
				}
			}
			if(x == "dateCreated" || x == "expireLinkDate") {
				data[x] = new Date(data[x]);
				data[x] = data[x].toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"});
			}
			
			if(x == "isConfirmAccount") {
				if(data[x] == 1) {
					user.isActive = ko.observable(true);
					user.td(user.td() + 
					`<td>
						<section class="model-2">
							<div class="checkbox">
								<input type="checkbox" data-bind="checked: isActive"/ checked>
								<label></label>
							</div>
						</section>
					</td>`);
					data[x] = self.enable();
				} else {
					user.isActive = ko.observable(false);
					user.td(user.td() + 
					`<td>
						<section class="model-2">
							<div class="checkbox">
								<input type="checkbox" data-bind="checked: isActive"/>
								<label></label>
							</div>
						</section>
					</td>`);
					data[x] = self.disable();
				}
				
				user.isActive.subscribe(function(newVal) {
					let isActive;
					
					if(newVal) {
						isActive = 1;
					} else {
						isActive = 0;
					}
					let o = {
						idUser: data.id,
						isActivateAccount: isActive
					}

					//self.switch('modalLoad');
					$.post('./php/isactivateaccount.php', o, function(data) {
						if(data.status == "ok") {
							self.updateAllUsers(1, 1);
						} else {
							console.log('Something wrong with activation account...');
						}
						//self.switch('modalLoad');
					});
				});
			}

			user[x] = ko.observable(data[x]);

			if(x != "isConfirmAccount" && x != "idUser" && x != "idCreatedFood" && x != "isIncreaseWeight" && x != "requestedWeight" && x != "exercise" && x != "sex" && x != "kilos" && x != "height" && x != "weights" && x != "age" && x != "id" && x != "idCategory" && x != "idUnit" && x != "isFavourite" && x != "portion" && x != "categoryValue" && x != "unitValue" && x != "unitName" && x != "idFood" && x != "imgPath" && x != "imgName" && x != "imgHash" && x != "calories" && x != "protein" && x != "carb" && x != "fat" && x != "fiber" && x != "saturated" && x != "unsaturated" && x != "sugar" && x != "bitamins")
				user.td(user.td() + `<td class="break-line"><div class="summary-info-detail" data-bind=\"text: ${x}\"></div></td>`);
		}
	};

	self.emptyFoodVariables = function() {
		self.newFoodName('');
		self.newPortion('');
		self.newCalories('');
		self.newProtein('');
		self.newCarb('');
		self.newFat('');
		self.newFiber('');
		self.newSugar('');
		self.newSaturated('');
		self.newUnsaturated('');
		self.newBitaminD('');
		self.newFoodCategoryName('');
		self.newUnitName('');
		self.newUsername('');
		self.newCategoryInput('');
		self.newUnitInput('');
		self.newIdCategory('');
		self.newIdUnit('');
		document.getElementById('file').value = '';
		document.getElementById('file1').value = '';
		document.getElementById('file2').value = '';
		document.getElementById('file3').value = '';
	};

	self.checkImg = function() {
		let condition1 = !self.newFoodName.alphaNumericLatinError() && !self.newPortion.numericError() && !self.newCalories.numericError() && !self.newProtein.numericError() && !self.newCarb.numericError() && !self.newFat.numericError() && !self.newFiber.numericError() && !self.newSugar.numericError() && !self.newSaturated.numericError() && !self.newUnsaturated.numericError() && !self.newBitaminD.numericError();
		let condition2 = self.newCategoryFood() != 0 && self.newUnit() != 0 && self.newFoodName() !== '' && self.newPortion() !== '' && self.newCalories() !== '' && self.newProtein() !== '' && self.newCarb() !== '' && self.newFat() !== '';
		let files;

		if(condition1 && condition2) {
			self.switch('modalLoad');

			if(self.categoryName() == 'foods') {
				files = document.getElementById('file2').files;
			} else {
				files = document.getElementById('file3').files;
			}

			let type, hashText, imgHash;

			type = self.itemOptionArray().imgName().split(".");
			if(type == '') {
				type[0] = '';
				type[1] = '';
			}
	
			self.type(type[1]);
	
			if(self.itemOptionArray().imgHash() != '') {
				hashText = CryptoJS.HmacSHA256(self.itemOptionArray().imgName(), self.itemOptionArray().imgHash());
				imgHash = hashText.toString(CryptoJS.enc.Hex);
			} else {
				imgHash = type[0];
			}

			self.newImg(self.itemOptionArray().imgPath() + imgHash + '.' + self.type());

			let o1 = {
				id: self.itemOptionArray().idFood(),
				newImgPath: self.itemOptionArray().imgPath(),
				newImgHash: self.itemOptionArray().imgHash(),
				newImgName: self.itemOptionArray().imgName(),
				newImg: self.newImg(),
				fileLength: files.length
			}

			if(files.length > 0) {
				$.post('./php/deleteimg.php', o1, function(data) {
					if(data.status == "ok") {
						let formData;
						if(self.categoryName() == 'foods') {
							formData = new FormData(form2);
						} else {
							formData = new FormData(form3);
						}

						formData.append('file', files[0]);
			
						var xhttp = new XMLHttpRequest();

						xhttp.responseType = 'json';
						xhttp.open("POST", "./php/uploadimg.php", true);

						xhttp.onreadystatechange = function() {
							if(this.readyState == 4 && this.status == 200) {
								var response = xhttp.response;

								if(response.data.upload == 1) {
									//console.log("Upload successfully.");
									self.newImgHash(response.data.bin2hex);
									self.newImgName(response.data.filename);									
								} else {
									console.log("File not uploaded.");
								}

								self.updateEditFood();
							}
						};
						xhttp.send(formData);
					}
				});
			} else {
				self.type('');
				self.updateEditFood();
			}
		} else {
			self.errorMsgsEdit1Food();
		}
	};

	self.updateEditFood = function() {
		let fiber = 0, sugar = 0, saturated = 0, unsaturated = 0, bitaminD = 0, newImgName, newImgHash, belongCategory;

		if(self.type() === '') {
			newImgName = self.itemOptionArray().imgName();
			newImgHash = self.itemOptionArray().imgHash();
			if(newImgName == '') {
				newImgHash = '';
			}
		} else {
			newImgName = self.newImgName() + '.' + self.type();
			newImgHash = self.newImgHash();
		}

		if(self.newFiber() !== '')
			fiber = self.newFiber();
		if(self.newSugar() !== '')
			sugar = self.newSugar();
		if(self.newSaturated() !== '')
			saturated = self.newSaturated();
		if(self.newUnsaturated() !== '')
			unsaturated = self.newUnsaturated();
		if(self.newBitaminD() !== '')
			bitaminD = self.newBitaminD();

		if(self.categoryName() == 'foods') {
			belongCategory = 1;
		} else {
			belongCategory = 2;
		}

		let o = {
			username: self.username(),
			idLang: self.sendLang(),
			idFood: self.itemOptionArray().idFood(),
			newFoodName: self.newFoodName(),
			newCalories: self.newCalories(),
			newPortion: self.newPortion(),
			newUnit: self.newUnit(),
			newCategoryFood: self.newCategoryFood(),
			newProtein: self.newProtein(),
			newCarb: self.newCarb(),
			newFat: self.newFat(),
			newFiber: fiber,
			newSugar: sugar,
			newSaturated: saturated,
			newUnsaturated: unsaturated,
			newBitaminD: bitaminD,
			newImgPath: self.itemOptionArray().imgPath(),
			newImgName: newImgName,
			newImgHash: newImgHash,
			belongCategory: belongCategory
		}

		if(self.newUsername() != '' && self.itemOptionArray().hasOwnProperty('idCreatedFood')) {
			o = Object.assign(o, {idUser: self.newUsername(), idCreatedFood: self.itemOptionArray().idCreatedFood()});
		}

		$.post('./php/updatecreatedfood.php', o, function(data) {
			if(data.status == "ok") {
				if(self.categoryName() == 'foods') {
					self.updateAllFoods(1, 1);
					self.switch('modalEditFood');
				} else {
					self.updateAllCreatedFoods(1, 1);
					self.switch('modalEditCreatedFood');
				}
				self.emptyFoodVariables();
			} else {

			}
			self.switch('modalLoad');
		});
	};

	self.updateCategoryName = function() {
		let o = {
			idLang: self.sendLang(),
			idCategory: self.newIdCategory(),
			nameCategory: self.newCategoryInput()
		}
		
		if(!self.newCategoryInput.alphaNumericLatinError() && self.newCategoryInput() !== '') {
			self.switch('modalLoad');
			$.post('./php/updatecategory.php', o, function(data) {
				if(data.status == "ok") {
					self.updateFoodCategories(1, 1);
					self.switch('modalEditCategoryFood');
					self.emptyFoodVariables();
				} else {
					console.log('Something wrong with category name...');
				}
				self.switch('modalLoad');
			});
		} else {
			const name25 = document.getElementById('nameEdit3');
			name25.style.color = 'rgb(175, 53, 53)';
		}
	};

	self.updateUnitName = function() {
		let o = {
			idLang: self.sendLang(),
			idUnit: self.newIdUnit(),
			nameUnit: self.newUnitInput()
		}
		
		if(!self.newUnitInput.alphaNumericLatinError() && self.newUnitInput() !== '') {
			self.switch('modalLoad');
			$.post('./php/updateunit.php', o, function(data) {
				if(data.status == "ok") {
					self.updateUnit(1, 1);
					self.switch('modalEditUnit');
					self.emptyFoodVariables();
				} else {
					console.log('Something wrong with category name...');
				}
				self.switch('modalLoad');
			});
		} else {
			const name26 = document.getElementById('nameEdit4');
			name26.style.color = 'rgb(175, 53, 53)';			
		}
	};

	self.submitUnit = function() {
		let o = {
			newUnitName: self.newUnitName(),
			idLang: self.sendLang()
		}

		if(!self.newUnitName.alphaNumericLatinError() && self.newUnitName() !== '') {
			self.switch('modalLoad');
			$.post('./php/addunit.php', o, function(data) {
				if(data.status == "ok") {
					self.updateUnit(1, 1);
					self.switch('modalAddUnit');
					self.emptyFoodVariables();
					//self.successMsg(self.addFoodMsg());
					//self.switch('modalSuccessMsg');	
				} else if(data.status == "error2") {
					const name = document.getElementById('nameUnit');
					name.style.color = 'rgb(175, 53, 53)';
					//self.uniqueNameError(true);
				} else {
					console.log('Something wrong with create food...');
				}
				self.switch('modalLoad');
			});
		} else {
			if(self.newUnitName() === '' || self.newUnitName.alphaNumericLatinError()) {
				const name = document.getElementById('nameUnit');
				name.style.color = 'rgb(175, 53, 53)';
			}
		}
	};
	
	self.submitCategoryFood = function() {
		let o = {
			newFoodCategoryName: self.newFoodCategoryName(),
			idLang: self.sendLang()
		}

		if(!self.newFoodCategoryName.alphaNumericLatinError() && self.newFoodCategoryName() !== '') {
			self.switch('modalLoad');
			$.post('./php/addcategoryfood.php', o, function(data) {
				if(data.status == "ok") {
					self.updateFoodCategories(1, 1);
					self.switch('modalAddCategoryFood');
					self.emptyFoodVariables();
					//self.successMsg(self.addFoodMsg());
					//self.switch('modalSuccessMsg');	
				} else if(data.status == "error2") {
					const name = document.getElementById('nameCategory');
					name.style.color = 'rgb(175, 53, 53)';
					//self.uniqueNameError(true);
				} else {
					console.log('Something wrong with create food...');
				}
				self.switch('modalLoad');
			});
		} else {
			if(self.newFoodCategoryName() === '' || self.newFoodCategoryName.alphaNumericLatinError()) {
				const name = document.getElementById('nameCategory');
				name.style.color = 'rgb(175, 53, 53)';
			}
		}
	};

	self.submitCreateFood = function() {
		let fiber = 0, sugar = 0, saturated = 0, unsaturated = 0, bitaminD = 0, newImgName;

		if(self.type() === '') {
			newImgName = '';
		} else {
			newImgName = self.newImgName() + '.' + self.type();
		}

		if(self.newFiber() !== '')
			fiber = self.newFiber();
		if(self.newSugar() !== '')
			sugar = self.newSugar();
		if(self.newSaturated() !== '')
			saturated = self.newSaturated();
		if(self.newUnsaturated() !== '')
			unsaturated = self.newUnsaturated();
		if(self.newBitaminD() !== '')
			bitaminD = self.newBitaminD();

		let o = {
			username: self.username(),
			idLang: self.sendLang(),
			idUser: self.newUsername(),
			newFoodName: self.newFoodName(),
			newCalories: self.newCalories(),
			newPortion: self.newPortion(),
			newUnit: self.newUnit(),
			newCategoryFood: self.newCategoryFood(),
			newProtein: self.newProtein(),
			newCarb: self.newCarb(),
			newFat: self.newFat(),
			newFiber: fiber,
			newSugar: sugar,
			newSaturated: saturated,
			newUnsaturated: unsaturated,
			newBitaminD: bitaminD,
			newImgPath: self.newImgPath(),
			newImgName: newImgName,
			newImgHash: self.newImgHash()
		}

		$.post('./php/addcreatefood.php', o, function(data) {
			if(data.status == "ok") {
				self.updateAllCreatedFoods(1, 1);
				self.switch('modalAddCreatedFood');
				self.emptyFoodVariables();	
				//self.successMsg(self.addFoodMsg());
				//self.switch('modalSuccessMsg');	
			} else if(data.status == "error2") {
				const name = document.getElementById('nameCreate');
				name.style.color = 'rgb(175, 53, 53)';
				self.uniqueNameError(true);
				const modal = document.getElementById('scrollCreate');
				//const modal = document.getElementById('scrollEdit');
				modal.scrollTop = 0;
			} else {
				console.log('Something wrong with create food...');
			}
			self.switch('modalLoad');
		});
	};

	self.submitFood = function() {
		let fiber = 0, sugar = 0, saturated = 0, unsaturated = 0, bitaminD = 0, newImgName;

		if(self.type() === '') {
			newImgName = '';
		} else {
			newImgName = self.newImgName() + '.' + self.type();
		}

		if(self.newFiber() !== '')
			fiber = self.newFiber();
		if(self.newSugar() !== '')
			sugar = self.newSugar();
		if(self.newSaturated() !== '')
			saturated = self.newSaturated();
		if(self.newUnsaturated() !== '')
			unsaturated = self.newUnsaturated();
		if(self.newBitaminD() !== '')
			bitaminD = self.newBitaminD();

		let o = {
			username: self.username(),
			idLang: self.sendLang(),
			newFoodName: self.newFoodName(),
			newCalories: self.newCalories(),
			newPortion: self.newPortion(),
			newUnit: self.newUnit(),
			newCategoryFood: self.newCategoryFood(),
			newProtein: self.newProtein(),
			newCarb: self.newCarb(),
			newFat: self.newFat(),
			newFiber: fiber,
			newSugar: sugar,
			newSaturated: saturated,
			newUnsaturated: unsaturated,
			newBitaminD: bitaminD,
			newImgPath: self.newImgPath(),
			newImgName: newImgName,
			newImgHash: self.newImgHash()
		}

		$.post('./php/addfood.php', o, function(data) {
			if(data.status == "ok") {
				self.updateAllFoods(1, 1);
				self.switch('modalAddFood');
				self.emptyFoodVariables();	
				//self.successMsg(self.addFoodMsg());
				//self.switch('modalSuccessMsg');	
			} else if(data.status == "error2") {
				const name = document.getElementById('nameCreate');
				name.style.color = 'rgb(175, 53, 53)';
				self.uniqueNameError(true);
				//const modal = document.getElementById('scrollCreate');
				const modal = document.getElementById('scrollEdit');
				modal.scrollTop = 0;
			} else {
				console.log('Something wrong with create food...');
			}
			self.switch('modalLoad');
		});
	};

	self.uploadImg = function() {
		let condition1 = !self.uniqueNameError() && !self.newFoodName.alphaNumericLatinError() && !self.newPortion.numericError() && !self.newCalories.numericError() && !self.newProtein.numericError() && !self.newCarb.numericError() && !self.newFat.numericError() && !self.newFiber.numericError() && !self.newSugar.numericError() && !self.newSaturated.numericError() && !self.newUnsaturated.numericError() && !self.newBitaminD.numericError();
		let condition2 = self.newCategoryFood() != 0 && self.newUnit() != 0 && self.newFoodName() !== '' && self.newPortion() !== '' && self.newCalories() !== '' && self.newProtein() !== '' && self.newCarb() !== '' && self.newFat() !== '';
		self.newImgHash('');

		if(condition1 && condition2) {
			self.switch('modalLoad');
			let files, formData;

			if(self.categoryName() == 'createdFoods') {
				files = document.getElementById('file1').files;
			} else {
				files = document.getElementById('file').files;			
			}

			if(files.length > 0) {
				if(self.categoryName() == 'createdFoods') {
					formData = new FormData(form1);
					formData.append('file1', files[0]);
				} else {
					formData = new FormData(form);
					formData.append('file', files[0]);		
				}

				var xhttp = new XMLHttpRequest();
	
				xhttp.responseType = 'json';
				// Set POST method and ajax file path
				xhttp.open("POST", "./php/uploadimg.php", true);
		  
				// call on request changes state
				xhttp.onreadystatechange = function() {
					   if(this.readyState == 4 && this.status == 200) {
						var response = xhttp.response;
						self.newImgHash(response.data.bin2hex);
						self.newImgName(response.data.filename);
	
						 if(response.data.upload == 1) {
							console.log("Upload successfully.");
							if(self.categoryName() == 'createdFoods') {
								self.submitCreateFood();
							} else {
								self.submitFood();
							}
					} else {
						console.log("File not uploaded.");
					}
				   }
				};
		  
				// Send request with data
				xhttp.send(formData);
			} else {
				self.type('');
				if(self.categoryName() == 'createdFoods') {
					self.submitCreateFood();
				} else {
					self.submitFood();
				}				
			}
		} else {
			if(self.categoryName() == 'createdFoods') {
				self.errorMsgsCreateFood();
			} else {
				self.errorMsgsEditFood();
			}
		}
	}

	self.errorMsgsCreateFood = function() {
		const modal = document.getElementById('scrollCreate');
		modal.scrollTop = 0;

		if(self.newFoodName() === '' || self.newFoodName.alphaNumericLatinError()) {
			const name = document.getElementById('nameCreate');
			name.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newPortion() === '' || self.newPortion.numericError()) {
			const portion = document.getElementById('portionCreate');
			portion.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newUnit() == 0) {
			const unit = document.getElementById('unitCreate');
			unit.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCategoryFood() == 0) {
			const category = document.getElementById('categoryCreate');
			category.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCalories() === '' || self.newCalories.numericError()) {
			const calories = document.getElementById('caloriesCreate');
			calories.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newProtein() === '' || self.newProtein.numericError()) {
			const protein = document.getElementById('proteinCreate');
			protein.style.color = 'rgb(175, 53, 53)';		
		}
		if(self.newCarb() === '' || self.newCarb.numericError()) {
			const carb = document.getElementById('carbCreate');
			carb.style.color = 'rgb(175, 53, 53)';		
		}
		if(self.newFat() === '' || self.newFat.numericError()) {
			const fat = document.getElementById('fatCreate');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newFiber.numericError()) {
			const fit = document.getElementById('fitCreate');
			fit.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newSugar.numericError()) {
			const fat = document.getElementById('sugarCreate');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newSaturated.numericError()) {
			const fat = document.getElementById('saturatedCreate');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newUnsaturated.numericError()) {
			const fat = document.getElementById('unsaturatedCreate');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newBitaminD.numericError()) {
			const fat = document.getElementById('bitaminDCreate');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
	};

	self.errorMsgsEditFood = function() {
		const modal = document.getElementById('scrollEdit');
		modal.scrollTop = 0;

		if(self.newFoodName() === '' || self.newFoodName.alphaNumericLatinError()) {
			const name = document.getElementById('nameEdit');
			name.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newPortion() === '' || self.newPortion.numericError()) {
			const portion = document.getElementById('portionEdit');
			portion.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newUnit() == 0) {
			const unit = document.getElementById('unitEdit');
			unit.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCategoryFood() == 0) {
			const category = document.getElementById('categoryEdit');
			category.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCalories() === '' || self.newCalories.numericError()) {
			const calories = document.getElementById('caloriesEdit');
			calories.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newProtein() === '' || self.newProtein.numericError()) {
			const protein = document.getElementById('proteinEdit');
			protein.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newCarb() === '' || self.newCarb.numericError()) {
			const carb = document.getElementById('carbEdit');
			carb.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newFat() === '' || self.newFat.numericError()) {
			const fat = document.getElementById('fatEdit');
			fat.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newFiber.numericError()) {
			const fit = document.getElementById('fitEdit');
			fit.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newSugar.numericError()) {
			const fat = document.getElementById('sugarEdit');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newSaturated.numericError()) {
			const fat = document.getElementById('saturatedEdit');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newUnsaturated.numericError()) {
			const fat = document.getElementById('unsaturatedEdit');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newBitaminD.numericError()) {
			const fat = document.getElementById('bitaminDEdit');
			fat.style.color = 'rgb(175, 53, 53)';	
		}
	};

	self.errorMsgsEdit1Food = function() {
		const modal = document.getElementById('scrollEdit2');
		modal.scrollTop = 0;
		const modal1 = document.getElementById('scrollEdit3');
		modal1.scrollTop = 0;

		if(self.newFoodName() === '' || self.newFoodName.alphaNumericLatinError()) {
			const name = document.getElementById('nameEdit1');
			name.style.color = 'rgb(175, 53, 53)';
			const name1 = document.getElementById('nameEdit2');
			name1.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newPortion() === '' || self.newPortion.numericError()) {
			const portion = document.getElementById('portionEdit1');
			portion.style.color = 'rgb(175, 53, 53)';
			const portion1 = document.getElementById('portionEdit2');
			portion1.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newUnit() == 0) {
			const unit = document.getElementById('unitEdit1');
			unit.style.color = 'rgb(175, 53, 53)';
			const unit1 = document.getElementById('unitEdit2');
			unit1.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCategoryFood() == 0) {
			const category = document.getElementById('categoryEdit1');
			category.style.color = 'rgb(175, 53, 53)';
			const category1 = document.getElementById('categoryEdit2');
			category1.style.color = 'rgb(175, 53, 53)';
		}
		if(self.newCalories() === '' || self.newCalories.numericError()) {
			const calories = document.getElementById('caloriesEdit1');
			calories.style.color = 'rgb(175, 53, 53)';		
			const calories1 = document.getElementById('caloriesEdit2');
			calories1.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newProtein() === '' || self.newProtein.numericError()) {
			const protein = document.getElementById('proteinEdit1');
			protein.style.color = 'rgb(175, 53, 53)';	
			const protein1 = document.getElementById('proteinEdit2');
			protein1.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newCarb() === '' || self.newCarb.numericError()) {
			const carb = document.getElementById('carbEdit1');
			carb.style.color = 'rgb(175, 53, 53)';			
			const carb1 = document.getElementById('carbEdit2');
			carb1.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newFat() === '' || self.newFat.numericError()) {
			const fat = document.getElementById('fatEdit1');
			fat.style.color = 'rgb(175, 53, 53)';			
			const fat1 = document.getElementById('fatEdit2');
			fat1.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newFiber.numericError()) {
			const fit = document.getElementById('fitEdit1');
			fit.style.color = 'rgb(175, 53, 53)';			
			const fit1 = document.getElementById('fitEdit2');
			fit1.style.color = 'rgb(175, 53, 53)';			
		}
		if(self.newSugar.numericError()) {
			const fat = document.getElementById('sugarEdit1');
			fat.style.color = 'rgb(175, 53, 53)';	
			const fat1 = document.getElementById('sugarEdit2');
			fat1.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newSaturated.numericError()) {
			const saturated = document.getElementById('saturatedEdit1');
			saturated.style.color = 'rgb(175, 53, 53)';	
			const saturated1 = document.getElementById('saturatedEdit2');
			saturated1.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newUnsaturated.numericError()) {
			const unsaturated = document.getElementById('unsaturatedEdit1');
			unsaturated.style.color = 'rgb(175, 53, 53)';	
			const unsaturated1 = document.getElementById('unsaturatedEdit2');
			unsaturated1.style.color = 'rgb(175, 53, 53)';	
		}
		if(self.newBitaminD.numericError()) {
			const bitaminD = document.getElementById('bitaminDEdit1');
			bitaminD.style.color = 'rgb(175, 53, 53)';	
			const bitaminD1 = document.getElementById('bitaminDEdit2');
			bitaminD1.style.color = 'rgb(175, 53, 53)';	
		}
	};

	self.recoverAddInputColor = function() {
		const name = document.getElementById('nameEdit');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('portionEdit');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('unitEdit');
		name2.style.color = 'rgb(0, 0, 0)';	
		const name3 = document.getElementById('categoryEdit');
		name3.style.color = 'rgb(0, 0, 0)';		
		const name4 = document.getElementById('caloriesEdit');
		name4.style.color = 'rgb(0, 0, 0)';	
		const name5 = document.getElementById('proteinEdit');
		name5.style.color = 'rgb(0, 0, 0)';	
		const name6 = document.getElementById('carbEdit');
		name6.style.color = 'rgb(0, 0, 0)';	
		const name7 = document.getElementById('fatEdit');
		name7.style.color = 'rgb(0, 0, 0)';	
		const name8 = document.getElementById('fitEdit');
		name8.style.color = 'rgb(0, 0, 0)';	
		const name9 = document.getElementById('sugarEdit');
		name9.style.color = 'rgb(0, 0, 0)';	
		const name10 = document.getElementById('saturatedEdit');
		name10.style.color = 'rgb(0, 0, 0)';	
		const name11 = document.getElementById('unsaturatedEdit');
		name11.style.color = 'rgb(0, 0, 0)';			
		const name24 = document.getElementById('bitaminDEdit');
		name24.style.color = 'rgb(0, 0, 0)';
		const name12 = document.getElementById('nameCreate');
		name12.style.color = 'rgb(0, 0, 0)';	
		const name13 = document.getElementById('portionCreate');
		name13.style.color = 'rgb(0, 0, 0)';	
		const name14 = document.getElementById('unitCreate');
		name14.style.color = 'rgb(0, 0, 0)';	
		const name15 = document.getElementById('caloriesCreate');
		name15.style.color = 'rgb(0, 0, 0)';	
		const name16 = document.getElementById('proteinCreate');
		name16.style.color = 'rgb(0, 0, 0)';	
		const name17 = document.getElementById('carbCreate');
		name17.style.color = 'rgb(0, 0, 0)';	
		const name18 = document.getElementById('fatCreate');
		name18.style.color = 'rgb(0, 0, 0)';	
		const name19 = document.getElementById('fitCreate');
		name19.style.color = 'rgb(0, 0, 0)';	
		const name20 = document.getElementById('sugarCreate');
		name20.style.color = 'rgb(0, 0, 0)';	
		const name21 = document.getElementById('saturatedCreate');
		name21.style.color = 'rgb(0, 0, 0)';	
		const name22 = document.getElementById('unsaturatedCreate');
		name22.style.color = 'rgb(0, 0, 0)';	
		const name23 = document.getElementById('bitaminDCreate');
		name23.style.color = 'rgb(0, 0, 0)';
		const name25 = document.getElementById('nameCategory');
		name25.style.color = 'rgb(0, 0, 0)';
		const name26 = document.getElementById('nameUnit');
		name26.style.color = 'rgb(0, 0, 0)';
		const modal = document.getElementById('scrollEdit');
		modal.scrollTop = 0;
		const modal1 = document.getElementById('scrollCreate');
		modal1.scrollTop = 0;
	}

	self.recoverAddInput1Color = function() {
		const name = document.getElementById('nameEdit1');
		name.style.color = 'rgb(0, 0, 0)';
		const name1 = document.getElementById('portionEdit1');
		name1.style.color = 'rgb(0, 0, 0)';
		const name2 = document.getElementById('unitEdit1');
		name2.style.color = 'rgb(0, 0, 0)';	
		const name3 = document.getElementById('categoryEdit1');
		name3.style.color = 'rgb(0, 0, 0)';		
		const name4 = document.getElementById('caloriesEdit1');
		name4.style.color = 'rgb(0, 0, 0)';	
		const name5 = document.getElementById('proteinEdit1');
		name5.style.color = 'rgb(0, 0, 0)';	
		const name6 = document.getElementById('carbEdit1');
		name6.style.color = 'rgb(0, 0, 0)';	
		const name7 = document.getElementById('fatEdit1');
		name7.style.color = 'rgb(0, 0, 0)';	
		const name8 = document.getElementById('fitEdit1');
		name8.style.color = 'rgb(0, 0, 0)';	
		const name9 = document.getElementById('sugarEdit1');
		name9.style.color = 'rgb(0, 0, 0)';	
		const name10 = document.getElementById('saturatedEdit1');
		name10.style.color = 'rgb(0, 0, 0)';	
		const name11 = document.getElementById('unsaturatedEdit1');
		name11.style.color = 'rgb(0, 0, 0)';			
		const name24 = document.getElementById('bitaminDEdit1');
		name24.style.color = 'rgb(0, 0, 0)';
		const name12 = document.getElementById('nameEdit2');
		name12.style.color = 'rgb(0, 0, 0)';	
		const name13 = document.getElementById('portionEdit2');
		name13.style.color = 'rgb(0, 0, 0)';	
		const name14 = document.getElementById('unitEdit2');
		name14.style.color = 'rgb(0, 0, 0)';	
		const name15 = document.getElementById('caloriesEdit2');
		name15.style.color = 'rgb(0, 0, 0)';	
		const name16 = document.getElementById('proteinEdit2');
		name16.style.color = 'rgb(0, 0, 0)';	
		const name17 = document.getElementById('carbEdit2');
		name17.style.color = 'rgb(0, 0, 0)';	
		const name18 = document.getElementById('fatEdit2');
		name18.style.color = 'rgb(0, 0, 0)';	
		const name19 = document.getElementById('fitEdit2');
		name19.style.color = 'rgb(0, 0, 0)';	
		const name20 = document.getElementById('sugarEdit2');
		name20.style.color = 'rgb(0, 0, 0)';	
		const name21 = document.getElementById('saturatedEdit2');
		name21.style.color = 'rgb(0, 0, 0)';	
		const name22 = document.getElementById('unsaturatedEdit2');
		name22.style.color = 'rgb(0, 0, 0)';	
		const name23 = document.getElementById('bitaminDEdit2');
		name23.style.color = 'rgb(0, 0, 0)';
		const name25 = document.getElementById('nameEdit3');
		name25.style.color = 'rgb(0, 0, 0)';
		const name26 = document.getElementById('nameEdit4');
		name26.style.color = 'rgb(0, 0, 0)';
		const modal = document.getElementById('scrollEdit2');
		modal.scrollTop = 0;
		const modal1 = document.getElementById('scrollEdit3');
		modal1.scrollTop = 0;
	}

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
			self.title('Admin Panel | Nutrition');
			self.searchUserName('Search...');
			self.userName('Username');
			self.emailName('Email');
			self.sexName('Sex');
			self.weightName('Weight');
			self.heightName('Height');
			self.ageName('Age');
			self.foodName('Food Name');
			self.categoryWord('Category');
			self.quantityName('Quantity');
			self.tolocalestring('en-GB');
			self.numeric('* Only numbers are allowed');
			self.alphaNumericLatin('* Only Latin and Greek characters, numbers, dot, percent, dash and underscores are allowed.');
			self.empties('* Field is empty!');
			self.isEmail('* Please enter a valid email.');            
			self.minlenght('* The minimum character lenght is');
			self.maxlenght('* The maximum lenght is');
			self.noExercise('Little or No Exercise (0-1 Days/Week)');
            self.lightExercise('Light Exercise (1-3 Days/Week)');
            self.moderateExercise('Moderate Exercise (3-5 Days/Week)');
            self.activeExercise('Intense Exercise (6-7 Days/Week)');
            self.veryActiveExercise('Very Intense Exercise (6-7 Days/Week)');
            self.exerciseText(self.noExercise());
			self.choosecategory('Choose a category');
            self.loseWeight('Lose Weight');
            self.maintainWeight('Maintain my Weight');
            self.gainWeight('Gain weight');
			self.pass('Password');
			self.repeatpass('Confirm Password');
            self.usernamePlaceholder('Enter Username');
            self.emailPlaceholder('Enter Email');
            self.passPlaceholder('Enter Password');
            self.repeatpassPlaceholder('Enter Confirm Password');
			self.weightPlaceholder('Enter your weight');
			self.heightPlaceholder('Enter your height');
			self.agePlaceholder('Enter your age');
			self.requestedPlaceholder('Enter requested weight');
			self.cancelWord('Cancel');
			self.okWord('Ok');
			self.updateName('Update');
			self.users('Users');
			self.foods('System Foods');
			self.userFoods('Users Foods');
			self.categoryFoods('Food Categories');
			self.units('Units');
			self.activationLinks('Activation Accounts');
			self.confirmNewEmails('Confirm New Email');
			self.accountName('Account');
			self.isIncreaseWeightName('I want to');
			self.requestedWeightName('Requested Weight');
			self.exerciseName('Exercise');
			self.kilosName('Kilos/Week');
			self.male('Male');
			self.female('Female');
			self.enable('Enable');
			self.disable('Disable');
			self.userInfo('User Info');
			self.foodInfo('Food Info');
			self.unitName('Unit');
			self.portionName('Portion');
			self.caloriesName('Calories');
			self.proteinName('Protein');
			self.carbName('Carb');
			self.fatName('Fat');
			self.fiberName('Fiber');
			self.saturatedName('Saturated');
			self.unsaturatedName('Unsaturated');
			self.sugarName('Sugar');
			self.bitaminsName('Bitamin D');
			self.idFoodName('ID Food');
			self.idUnitName('ID Unit');
			self.imgPathName('Image Path');
			self.imgName('Image');
			self.imgNameName('Image Name');
			self.imgHashName('Image Hash');
			self.imgHashName('Hash Εικόνας');
			self.isFavouriteName('Favourite');
			self.no('No');
			self.yes('Yes');
			self.deletes('Delete');
			self.foodCategoryName('Food Category');
			self.activate('Activate');
			self.editFood('Edit Food');
			self.editFoodCategory('Edit Category');
			self.editUnit('Edit Unit');
			self.addFoodCategory('Add Category');
			self.addUnit('Add Unit');
			self.dateCreatedName('Date Created');
			self.expireDateLinkName('Expire Date Link');
			self.noAvailableUser('No available user');
			self.noAvailableFood('There is no food');
			self.noAvailableCreatedFood('There is no user food');
			self.noAvailableFoodCategory('There is no food category');
			self.noAvailableUnit('There is no unit');
			self.noAvailableActivationLink('There is no account to activate');
			self.noAvailableConfirmEmail('There is no new email to confirm');
			self.noAvailable(self.noAvailableUser());
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
			self.title('Admin Πάνελ | Nutrition');
			self.searchUserName('Αναζήτηση...');
			self.userName('Όνομα Χρήστη');
			self.emailName('Email');
			self.sexName('Φύλο');
			self.weightName('Βάρος');
			self.heightName('Ύψος');
			self.ageName('Ηλικία');
			self.foodName('Όνομα Φαγητού');
			self.categoryWord('Κατηγορία');
			self.quantityName('Ποσότητα');
			self.tolocalestring('el-GR');
			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumericLatin('* Επιτρέπονται μόνο λατινικοί και ελληνικοί χαρακτήρες, αριθμοί, τελεία, ποσοστό, παύλα και κάτω παύλα.');
			self.empties('* Το πεδίο είναι κενό!');
			self.isEmail('* Παρακαλώ εισάγετε ένα έγκυρο email.');		    
			self.minlenght('* Το ελάχιστο μέγεθος χαρακτήρων είναι');
			self.maxlenght('* Το μέγιστο μέγεθος χαρακτήρων είναι');
			self.noExercise('Λίγο ή Καθόλου Άσκηση (0-1 Μέρες/Εβδομάδα)');
            self.lightExercise('Χαλαρή Άσκηση (1-3 Μέρες/Εβδομάδα)');
            self.moderateExercise('Μέτρια Άσκηση (3-5 Μέρες/Εβδομάδα)');
            self.activeExercise('Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.veryActiveExercise('Πολύ Έντονη Άσκηση (6-7 Μέρες/Εβδομάδα)');
            self.exerciseText(self.noExercise());
			self.choosecategory('Επιλέξτε Κατηγορία');
            self.loseWeight('Χάσω Βάρος');
            self.maintainWeight('Διατηρήσω το Βάρος μου');
            self.gainWeight('Πάρω Βάρος'); 
			self.pass('Συνθηματικό');
			self.repeatpass('Επιβεβαίωση Συνθηματικού');
            self.usernamePlaceholder('Εισάγετε Username');
            self.emailPlaceholder('Εισάγετε Email');
            self.passPlaceholder('Εισάγετε Συνθηματικό');
            self.repeatpassPlaceholder('Εισάγετε Επιβεβαίωση Συνθηματικού');
			self.weightPlaceholder('Εισάγετε το βάρος σας');
			self.heightPlaceholder('Εισάγετε το ύψος σας');
			self.agePlaceholder('Εισάγετε την ηλικία σας');
			self.requestedPlaceholder('Εισάγετε το επιθυμητό βάρος');
			self.cancelWord('Ακύρωση');
			self.okWord('Εντάξει');
			self.updateName('Ενημέρωση');
			self.users('Χρήστες');
			self.foods('Φαγητά Συστήματος');
			self.userFoods('Φαγητά Χρηστών');
			self.categoryFoods('Κατηγορίες Φαγητών');
			self.units('Μονάδες Μέτρησης');
			self.activationLinks('Ενεργοποίηση Λογαριασμών');
			self.confirmNewEmails('Επιβεβαιώσεις Νέων Email');
			self.accountName('Λογαριασμός');
			self.isIncreaseWeightName('Θέλω να');
			self.requestedWeightName('Επιθυμητό Βάρος');
			self.exerciseName('Άσκηση');
			self.kilosName('Κιλά/Εβδομάδα');
			self.male('Άρρεν');
			self.female('Θήλυ');
			self.enable('Ενεργοποιημένος');
			self.disable('Απενεργοποιημένος');
			self.userInfo('Πληροφορίες Χρήστη');
			self.foodInfo('Πληροφορίες Φαγητού');
			self.unitName('Μονάδα Μέτρησης');
			self.portionName('Μερίδα');
			self.caloriesName('Θερμίδες');
			self.proteinName('Πρωτείνες');
			self.carbName('Υδατάναθρακες');
			self.fatName('Λίπη');
			self.fiberName('Φυτικές Ίνες');
			self.saturatedName('Κορεσμένα');
			self.unsaturatedName('Ακόρεστα');
			self.sugarName('Σάκγχαρα');
			self.bitaminsName('Βιταμίνη D');
			self.idFoodName('ID Φαγητού');
			self.idUnitName('ID Μονάδας Μέτρησης');
			self.imgPathName('Μονοπάτη Εικόνας');
			self.imgName('Εικόνα');
			self.imgNameName('Όνομα Εικόνας');
			self.imgHashName('Hash Εικόνας');
			self.isFavouriteName('Αγαπημένο');
			self.no('Όχι');
			self.yes('Ναι');
			self.deletes('Διαγραφή');
			self.foodCategoryName('Κατηγορία Φαγητού');
			self.activate('Ενεργοποίηση');
			self.editFood('Επεξεργασία Φαγητού');
			self.editFoodCategory('Επεξεργασία Κατηγορίας');
			self.editUnit('Επεξεργασία Μονάδων');
			self.addFoodCategory('Προσθήκη Κατηγορίας');
			self.addUnit('Προσθήκη Μονάδων');
			self.dateCreatedName('Ημερομηνία Δημιουργίας');
			self.expireDateLinkName('Ημερομηνία Λήξης Συνδέσμου');
			self.noAvailableUser('Δεν υπάρχει κανένας χρήστης');
			self.noAvailableFood('Δεν υπάρχει κανένα φαγητό');
			self.noAvailableCreatedFood('Δεν υπάρχει κανένα φαγητό χρηστών');
			self.noAvailableFoodCategory('Δεν υπάρχει καμία κατηγορία φαγητού');
			self.noAvailableUnit('Δεν υπάρχει καμία μονάδα μέτρησης');
			self.noAvailableActivationLink('Δεν υπάρχει κανένας λογαριασμός προς ενεργοποίηση');
			self.noAvailableConfirmEmail('Δεν υπάρχει κανένα νέο email για επιβεβαίωση');
			self.noAvailable(self.noAvailableUser());
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
			icons: "fa-solid fa-headset",//user-gear
			redirect: "panel",
			activelabel: "active",
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
			} else if(data.redirect === 'pop') {
				$.post('./php/destroyuserid.php', o, function(data) {
					if(data.status == "ok") {
						if(self.dashboardArray().length > 8) {
							self.dashboardArray.pop();
						}
					} else if(data.status == "error") {
						console.log(data.data);
					}	
				});
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
				self.panelpage();
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
	ko.applyBindings(new DashboardAdminModel(), document.getElementById('body'));
});