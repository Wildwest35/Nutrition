function AddFoodModel() {
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
    self.title = ko.observable('Προσθήκη Φαγητού | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία');
	self.editfood = ko.observable('Επεξεργασία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
	self.tolocalestring = ko.observable('el-GR');
    self.username = ko.observable();
	self.totalFavourite = ko.observable(0);
	self.totalRecent = ko.observable(0);
	self.totalCreatedFood = ko.observable(0);
    self.dashboardArray = ko.observableArray([]);
	self.foodChoiceArray = ko.observableArray([]);
	self.favouriteArray = ko.observableArray([]);
	self.recentArray = ko.observableArray([]);
	self.myFoodArray = ko.observableArray([]);
	self.allFoodArray = ko.observableArray([]);
	self.searchFoodArray = ko.observableArray([]);
	self.itemFoodArray = ko.observable([]);
	self.foodCategoryArray = ko.observableArray([]);
	self.unitArray = ko.observableArray([]);
	
	self.isStar = ko.observable(1);
	self.isStarFill = ko.observable('./img/star_black.png');
	self.mealCategory = ko.observable(0);
	self.fullDate = ko.observable('');
	self.counterDate = ko.observable(0);
	self.helpDate = ko.observable('');
	self.date = ko.observable('');

	self.isReverseSearch = ko.observable(true);
	window.addEventListener('resize', function() {
		self.checkSearch();
	});	

	self.checkSearch = function() {
		var mobile = window.matchMedia("(max-width: 580px)");

		if(mobile.matches) {
			self.isReverseSearch(false);
		} else {
			self.isReverseSearch(true);
		}
	};
	
	self.checkSearch();

	self.createBarSearch = ko.observable(`
	<form method="post" data-bind="submit: searchSubmit, visible: isReverseSearch">
		<div class="element-middle-out">
			<div class="element-middle">
				<input type="search" data-bind="value: seachFood, attr: {placeholder: self.searchFoodName}"/>
				<img src="./img/search.png" alt="consumed" width="30" height="30" class="summary-touch" data-bind="click: searchSubmit">
			</div>
		</div>
	</form>
	`);
	self.createInSearch = ko.observable(`
	<form method="post" data-bind="submit: searchSubmit, visible: !isReverseSearch()">
		<div class="element-middle-out">
			<div class="element-middle">
				<input type="search" data-bind="value: seachFood, attr: {placeholder: self.searchFoodName}"/>
				<img src="./img/search.png" alt="consumed" width="30" height="30" class="summary-touch" data-bind="click: searchSubmit">
			</div>
		</div>
	</form>
	`);

	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.alphaNumericLatin = ko.observable('* Επιτρέπονται μόνο λατινικοί και ελληνικοί χαρακτήρες, αριθμοί και κάτω παύλα.');
	self.empties = ko.observable('* Το πεδίο είναι κενό!');
	self.allfoodsName = ko.observable('Όλα τα Φαγητά');
	self.recentName = ko.observable('Πρόσφατα');
	self.favouriteName = ko.observable('Αγαπημένα');
	self.myFoodName = ko.observable('Τα φαγητά μου');
	self.foodName = ko.observable('Φαγητό');
	self.categoryBarName = ko.observable('Κατηγορία');
	self.portionName = ko.observable('Ποσότητα');
	self.searchFoodName = ko.observable('Αναζήτηση φαγητού...');
	self.proteinName = ko.observable('Πρωτεΐνες');
	self.carbName = ko.observable('Υδατάνθρακες');
	self.fatName = ko.observable('Λίπος');
	self.fitName = ko.observable('Φυτικές Ίνες');
	self.sugarName = ko.observable('Σάκχαρα');
	self.saturatedName = ko.observable('Κορεσμένα');
	self.unsaturatedName = ko.observable('Ακόρεστα');
	self.bitaminDName = ko.observable('Βιταμίνη D');
	self.cancelName = ko.observable('Ακύρωση');
	self.okName = ko.observable('Εντάξει');
	self.updateName = ko.observable('Ενημέρωση');
	self.nameFoodName = ko.observable('Όνομα Φαγητού');
	self.unitCountName = ko.observable('Μονάδα Μέτρησης');
	self.categoryFoodName = ko.observable('Κατηγορία Φαγητού');
	self.caloriesName = ko.observable('Θερμίδες');
	self.chooseCategoryFoodName = ko.observable('Επίλεξε Κατηγορία Φαγητού');
	self.chooseUnitCountName = ko.observable('Επίλεξε Μονάδα Μέτρησης');
	self.noWord = ko.observable('Όχι');
	self.yesWord = ko.observable('Ναι');
	self.deleteWord = ko.observable('Διαγραφή');
	self.createFoodName = ko.observable('');
	self.warningDeleteMsg = ko.observable('Είστε σίγουροι ότι θέλετε να διαγράψετε το φαγητό');
	self.questionMark = ko.observable(';');
	self.noAvailableFood = ko.observable('Κανένα Διαθέσιμο Φαγητό');
	self.addFoodMsg = ko.observable('Το φαγητό προστέθηκε με επιτυχία!');
	self.updateFoodMsg = ko.observable('Το φαγητό ενημερώθηκε με επιτυχία!');
	self.deleteFoodMsg = ko.observable('Το φαγητό διαγράφτηκε με επιτυχία!');
	self.addFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την προσθήκη του φαγητού...');
	self.updateFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την ενημέρωση του φαγητού...');
	self.deleteFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την διαγραφή του φαγητού...');
	self.successMsg = ko.observable('');

	self.seachFood = ko.observable('');
	self.recoverSearch = function() {
		self.seachFood('');
	};
	self.categoryName = ko.observable('allfood');
	self.isWaitFavourite = ko.observable(true);
	self.isHideStar = ko.observable(true);
	self.isHideEdit = ko.observable(false);
	self.sorting = ko.observable('sortNumberAsc');//foodNameAsc
	self.limit = ko.observable(0);
	self.offset = ko.observable(0);
	self.liTag = ko.observable('');
	self.totalFoods = ko.observable(0);
	self.totalFavouriteFoods = ko.observable(0);
	self.totalCreatedFoods = ko.observable(0);
	self.totalRecentFoods = ko.observable(0);	
	self.totalSearchFoods = ko.observable(0);	
	self.totalPages = ko.observable(0);
	self.page = ko.observable(1);
	self.helptotalPages = ko.observable(0);
	self.helppage = ko.observable(1);
	self.consumptionNumPortion = ko.observable(1);
	self.newIdFood = ko.observable('');
	self.type = ko.observable('');
	

	self.uniqueNameError = ko.observable(false);
	self.uniqueNameMsg = ko.observable('* Η ονομασία του φαγητού υπάρχει ήδη!');

	self.newFoodName = ko.observable('').extend({
		alphaNumericLatins: "",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newPortion = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newUnit = ko.observable('')
	self.newCategoryFood = ko.observable('')

	self.newCalories = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newProtein = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newCarb = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newFat = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	
	self.newFiber = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newSugar = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newSaturated = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newUnsaturated = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newBitaminD = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});

	self.newImg = ko.observable('');
	self.newImgPath = ko.observable('./img_public/');
	self.imgPath = ko.observable('./img/');
	self.imgContainer = ko.observable('');

	self.newImgName = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newImgHash = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

	self.newFoodName.subscribe(function(value) {
		const name1 = document.getElementById('nameEdit');
		const name2 = document.getElementById('nameCreate');
		name1.style.color = 'rgb(0, 0, 0)';
		name2.style.color = 'rgb(0, 0, 0)';
		self.uniqueNameError(false);
	});
	self.newPortion.subscribe(function(value) {
		const portion1 = document.getElementById('portionEdit');		
		const portion2 = document.getElementById('portionCreate');
		portion1.style.color = 'rgb(0, 0, 0)';
		portion2.style.color = 'rgb(0, 0, 0)';
	});
	self.newUnit.subscribe(function(value) {
		const unit1 = document.getElementById('unitEdit');
		const unit2 = document.getElementById('unitCreate');
		unit1.style.color = 'rgb(0, 0, 0)';
		unit2.style.color = 'rgb(0, 0, 0)';
	});
	self.newCategoryFood.subscribe(function(value) {
		const category1 = document.getElementById('categoryEdit');
		const category2 = document.getElementById('categoryCreate');
		category1.style.color = 'rgb(0, 0, 0)';
		category2.style.color = 'rgb(0, 0, 0)';
	});
	self.newCalories.subscribe(function(value) {
		const calories1 = document.getElementById('caloriesEdit');
		const calories2 = document.getElementById('caloriesCreate');
		calories1.style.color = 'rgb(0, 0, 0)';	
		calories2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newProtein.subscribe(function(value) {
		const protein1 = document.getElementById('proteinEdit');
		const protein2 = document.getElementById('proteinCreate');
		protein1.style.color = 'rgb(0, 0, 0)';	
		protein2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newCarb.subscribe(function(value) {
		const carb1 = document.getElementById('carbEdit');
		const carb2 = document.getElementById('carbCreate');
		carb1.style.color = 'rgb(0, 0, 0)';
		carb2.style.color = 'rgb(0, 0, 0)';		
	});
	self.newFat.subscribe(function(value) {
		const fat1 = document.getElementById('fatEdit');
		const fat2 = document.getElementById('fatCreate');
		fat1.style.color = 'rgb(0, 0, 0)';
		fat2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newFiber.subscribe(function(value) {
		const fit1 = document.getElementById('fitEdit');
		const fit2 = document.getElementById('fitCreate');
		fit1.style.color = 'rgb(0, 0, 0)';
		fit2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newSugar.subscribe(function(value) {
		const sugar1 = document.getElementById('sugarEdit');
		const sugar2 = document.getElementById('sugarCreate');
		sugar1.style.color = 'rgb(0, 0, 0)';
		sugar2.style.color = 'rgb(0, 0, 0)';
	});
	self.newSaturated.subscribe(function(value) {
		const saturated1 = document.getElementById('saturatedEdit');
		const saturated2 = document.getElementById('saturatedCreate');
		saturated1.style.color = 'rgb(0, 0, 0)';
		saturated2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newUnsaturated.subscribe(function(value) {
		const unsaturated1 = document.getElementById('unsaturatedEdit');
		const unsaturated2 = document.getElementById('unsaturatedCreate');
		unsaturated1.style.color = 'rgb(0, 0, 0)';
		unsaturated2.style.color = 'rgb(0, 0, 0)';	
	});
	self.newBitaminD.subscribe(function(value) {
		const bitaminD1 = document.getElementById('bitaminDEdit');
		const bitaminD2 = document.getElementById('bitaminDCreate');
		bitaminD1.style.color = 'rgb(0, 0, 0)';
		bitaminD2.style.color = 'rgb(0, 0, 0)';	
	});

	self.fileUpload = function(data, e) {
		var file = e.target.files[0];
		console.log(file);

		if(file !== undefined) {
			let type = file.type.split("\/");
			self.type(type[1]);
		}
		console.log(self.type());
	};

	var recent = document.getElementById('recent');
	var favourite = document.getElementById('favourite');
	var myfoods = document.getElementById('myfoods');
	var createfood = document.getElementById('createfood');

	var idmorning = document.getElementById('morning');
	var idlunch = document.getElementById('lunch');
	var idmeal = document.getElementById('meal');
	var iddinner = document.getElementById('dinner');

	var consumptionquantity = document.getElementById('consumptionquantity');
	var choosemealtype = document.getElementById('choosemealtype');
	var limit = document.getElementById('limit');
	const element = document.querySelector(".pagination ul");

	var backupCalories = 0, backupProtein = 0, backupCarb = 0, backupFat = 0, backupFiber = 0, backupSaturated = 0, backupUnsaturated = 0, backupSugar = 0, backupBitamins = 0, backupportion = 0;

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
		  // when window width is >= 1200px  
		  1200: {
			slidesPerView: 4
		  },
		  // when window width is >= 992px
		  993: {
			slidesPerView: 3
		  },
		  // when window width is >= 768px
		  769: {
			slidesPerView: 3
		  },
		  // when window width is >= 580px
		  580: {
			slidesPerView: 3
		  },
		  // when window width is >= 460px
		  461: {
			slidesPerView: 2
		  },
 		  // when window width is >= 365px
		  366: {
			slidesPerView: 2
		  },
		  328: {
			slidesPerView: 2
		  }
		}
	});

	self.searchSubmit = function() {
		//self.searchFoodArray([]);
		self.isHideStar(false);
/* 		self.categoryName('search');
		recent.style.backgroundColor = 'white';
		favourite.style.backgroundColor = 'white';
		myfoods.style.backgroundColor = 'white';
		createfood.style.backgroundColor = 'white'; */
		self.updateChooseCategories(self.totalPages(), 1);
	};

	self.openCreateFood = function() {
		self.uniqueNameError(false);
		self.newFoodName('');
		self.newIdFood('');
		self.newPortion('');
		self.newUnit(0);
		self.newCategoryFood(0);
		self.newCalories('');
		self.newProtein('');
		self.newCarb('');
		self.newFat('');
		self.newFiber('');
		self.newSugar('');
		self.newSaturated('');
		self.newUnsaturated('');
		self.newBitaminD('');
		document.getElementById('file').value = '';
		const name2 = document.getElementById('nameCreate');
		name2.style.color = 'rgb(0, 0, 0)';	
		const portion2 = document.getElementById('portionCreate');
		portion2.style.color = 'rgb(0, 0, 0)';
		const unit2 = document.getElementById('unitCreate');
		unit2.style.color = 'rgb(0, 0, 0)';
		const category2 = document.getElementById('categoryCreate');
		category2.style.color = 'rgb(0, 0, 0)';
		const calories2 = document.getElementById('caloriesCreate');
		calories2.style.color = 'rgb(0, 0, 0)';
		const protein2 = document.getElementById('proteinCreate');
		protein2.style.color = 'rgb(0, 0, 0)';
		const carb2 = document.getElementById('carbCreate');
		carb2.style.color = 'rgb(0, 0, 0)';
		const fat2 = document.getElementById('fatCreate');
		fat2.style.color = 'rgb(0, 0, 0)';
		const fit2 = document.getElementById('fitCreate');
		fit2.style.color = 'rgb(0, 0, 0)';
		const sugar2 = document.getElementById('sugarCreate');
		sugar2.style.color = 'rgb(0, 0, 0)';
		const saturated2 = document.getElementById('saturatedCreate');
		saturated2.style.color = 'rgb(0, 0, 0)';
		const unsaturated2 = document.getElementById('unsaturatedCreate');
		unsaturated2.style.color = 'rgb(0, 0, 0)';
		const bitaminD2 = document.getElementById('bitaminDCreate');
		bitaminD2.style.color = 'rgb(0, 0, 0)';		
		self.switch('modalCreateFood');
		const modal = document.getElementById('scrollCreate');
		modal.scrollTop = 0;
	};

	self.switch = function(id) {
		var modal = document.getElementById(id);
		
		if(modal.style.display == " " || modal.style.display == "none"|| modal.style.display == "") {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
	};
    
	self.escKey= function (data, event) {
        if(event && event.keyCode == 27) {
            self.switch('modalCreateFood');
        }
        return true;
    }

	self.stopProp = function(event) {
		event.stopPropagation();
	};	

    self.sortNumber = function() {
        if(self.sorting() == 'sortNumberAsc')
            self.sorting('sortNumberDesc');
        else
            self.sorting('sortNumberAsc');
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

    self.sortQuantity = function() {
        if(self.sorting() == 'quantityAsc')
            self.sorting('quantityDesc');
        else
            self.sorting('quantityAsc');
    };

    self.sortedTasks = ko.pureComputed(function() {
        var foodsArray = self.foodChoiceArray().slice(0);
        var sorting = self.sorting();

        foodsArray.sort(function(a, b) {
            if(sorting == 'foodNameAsc') {
                return a.name().localeCompare(b.name());
            } else if(sorting == 'foodNameDesc') {
                return b.name().localeCompare(a.name());
            } else if(sorting == 'categoryAsc') {
                return a.foodCategory().localeCompare(b.foodCategory());
            } else if(sorting == 'categoryDesc') {
                return b.foodCategory().localeCompare(a.foodCategory());
            } else if(sorting == 'quantityAsc') {
                return a.quantity().localeCompare(b.quantity(), undefined, {numeric: true});
            } else if(sorting == 'quantityDesc') {
                return b.quantity().localeCompare(a.quantity(), undefined, {numeric: true});
            } else if(sorting == 'sortNumberAsc') {
                return a.foodCount().localeCompare(b.foodCount(), undefined, {numeric: true});
            } else if(sorting == 'sortNumberDesc') {
                return b.foodCount().localeCompare(a.foodCount(), undefined, {numeric: true});
            }
        })

        return foodsArray;
    });

	self.getUsername = function() {
		let o = {}

		$.post('./php/dashboarduser.php', o, function(data) {
			if(data.status == "ok") {
				self.username(data.data.username);
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
				}
                self.fillDashboardArray();
				self.mealCategory(data.data.mealCategory);
				self.helpDate(data.data.fulldate);
				self.fullDate(data.data.fulldate);
				var day = new Date(self.fullDate());
				self.date(day.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));
				limit = document.getElementById('limit').value;
				self.limit(limit);

				if(self.mealCategory() == 1) {
					idmorning.style.backgroundColor = '#0C6170';
					idmorning.style.color = 'white';
				} else if(self.mealCategory() == 2) {
					idlunch.style.backgroundColor = '#0C6170';
					idlunch.style.color = 'white';
				} else if(self.mealCategory() == 3) {
					idmeal.style.backgroundColor = '#0C6170';
					idmeal.style.color = 'white';
				} else if(self.mealCategory() == 4) {
					iddinner.style.backgroundColor = '#0C6170';
					iddinner.style.color = 'white';
				}

				self.updateFoodCategories();
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.updateLimit = function(obj, event) {
		self.updateGetFunctions(self.totalPages(), 1);
	};

	self.choiceCategory = function(category) {
		self.categoryName(category);
		self.updateChooseCategories(1, 1);
	};

	self.updateChooseCategories = function(totalPages, page) {
		self.page(page);
		self.helppage(page);
		if(self.categoryName() == 'favourite') {
			self.updateFavourite(totalPages, page);
		} else if(self.categoryName() == 'recent') {
			self.updateRecent(totalPages, page);
		} else if(self.categoryName() == 'myfoods') {
			self.updateMyFood(totalPages, page);
		} else if(self.categoryName() == 'allfood') {
			self.updateAllFood(totalPages, page);
		} else if(self.categoryName() == 'search') {
			self.updateSearch(totalPages, page);
		}
	};

	self.updateTotalFood = function() {
		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		if(self.seachFood() != '') {
			self.showFoodCategory(self.categoryName(), 2);
		} else {
			$.post('./php/gettotalfoods.php', o1, function(data) {
				if(data.status == "ok") {
					self.totalRecentFoods(data.data.totalRecentFood);
					self.totalFoods(data.data.totalAllFood);
					self.totalFavouriteFoods(data.data.totalFavouriteFood);
					self.totalCreatedFoods(data.data.totalCreatedFood);

					if(self.categoryName() == 'search') {
						self.totalSearchFoods(self.totalFoods());
					}

					self.showFoodCategory(self.categoryName(), 2);								
				} else {
					console.log('Something wrong with total foods...');
				}
			});
		}
	};

	self.updateSearch = function(totalPages, page) {
		let name;
		name = self.categoryName();
		self.searchFoodArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getsearchfoodinfo.php', o1, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.searchFoodArray.push(el);
				});
				self.updateTotalFood();
			} else {
				console.log('Something wrong with update search foods...');
			}
		});
	};

	self.updateFavourite = function(totalPages, page) {
		//self.categoryName();
		self.favouriteArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getfavouriteinfo.php', o1, function(data) {
			if(data.status == "ok") {
				self.totalFavourite(data.data.length);
				var tmp = data.data.map(function(el) { 
					self.favouriteArray.push(el);
				});

				self.updateTotalFood();
			} else {
				console.log('Something wrong with update favourite foods...');
			}
		});
	};

	self.updateRecent = function(totalPages, page) {
		self.recentArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getrecentinfo.php', o1, function(data) {
			if(data.status == "ok") {
				self.totalFavourite(data.data.length);
				var tmp = data.data.map(function(el) { 
					self.recentArray.push(el);
				});

				self.updateTotalFood();
			} else {
				console.log('Something wrong with update recent foods...');
			}
		});
	};

	self.updateMyFood = function(totalPages, page) {
		self.myFoodArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getcreatedfoodinfo.php', o1, function(data) {
			if(data.status == "ok") {
				self.totalFavourite(data.data.length);
				var tmp = data.data.map(function(el) { 
					self.myFoodArray.push(el);
				});

				self.updateTotalFood();
			} else {
				console.log('Something wrong with update myFood foods...');
			}
		});
	};

	self.updateAllFood = function(totalPages, page) {
		self.allFoodArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getallfoodinfo.php', o1, function(data) {
			if(data.status == "ok") {
				self.totalFavourite(data.data.length);
				var tmp = data.data.map(function(el) { 
					self.allFoodArray.push(el);
				});

				self.updateTotalFood();
			} else {
				console.log('Something wrong with update allfood foods...');
			}
		});
	};

	self.updateFoodCategories = function() {
		o = {
			numLang: self.sendLang(),
			limit: 11111111111,
			offset: 0,
			search: ''
		}

		$.post('./php/getfoodcategoriesinfo.php', o, function(data) {
			if(data.status == "ok") {
				let o = {
					categoryValue: 0, 
					category: self.chooseCategoryFoodName()
				};
				self.foodCategoryArray.push(o);

				var tmp = data.data.map(function(el) { 
					self.foodCategoryArray.push(el);
				});
				
				self.updateUnit();
			} else {
				console.log('Something wrong with update foodCategories foods...');
			}
		});
	};

	self.updateUnit = function() {
		o = {
			numLang: self.sendLang(),
			limit: 11111111111,
			offset: 0,
			search: ''
		}

		$.post('./php/getunitinfo.php', o, function(data) {
			if(data.status == "ok") {
				let o = {
					unitValue: 0, 
					unit: self.chooseUnitCountName()
				};
				self.unitArray.push(o);

				var tmp = data.data.map(function(el) { 
					self.unitArray.push(el);
				});

				self.updateGetFunctions(1, 1);
			} else {
				console.log('Something wrong with update unit foods...');
			}
		});
	};

	self.updateGetFunctions = function(totalPages, page) {
		let name;
		name = self.categoryName();

		let o1;
		self.foodChoiceArray([]);
		self.favouriteArray([]);
		self.recentArray([]);
		self.myFoodArray([]);
		self.allFoodArray([]);
		//self.searchFoodArray([]);
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);	

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}

		o1 = {
			username: self.username(),
			numLang: self.sendLang(),
			search: self.seachFood(),
			limit: self.limit(),
			offset: self.offset()
		}

		$.post('./php/getfavouriteinfo.php', o1, function(data) {
			if(data.status == "ok") {
				self.totalFavourite(data.data.length);
				var tmp = data.data.map(function(el) { 
					self.favouriteArray.push(el);
				});
				$.post('./php/getrecentinfo.php', o1, function(data) {
					if(data.status == "ok") {
						self.totalRecent(data.data.length);
						var tmp = data.data.map(function(el) { 
							self.recentArray.push(el);
						});
						$.post('./php/getcreatedfoodinfo.php', o1, function(data) {
							if(data.status == "ok") {
								self.totalCreatedFood(data.data.length);
								var tmp = data.data.map(function(el) {
									self.myFoodArray.push(el);
								});
								$.post('./php/getallfoodinfo.php', o1, function(data) {
									if(data.status == "ok") {
										var tmp = data.data.map(function(el) { 
											self.allFoodArray.push(el);
										});

										self.isHideStar(false);
										self.updateTotalFood();
									} else if(data.status == "error") {
										console.log('Something wrong with all foods...');
									}	
								});	
							} else if(data.status == "error") {
								console.log('Something wrong with Created foods...');
							}	
						});	
					} else if(data.status == "error") {
						console.log('Something wrong with Recent foods...');
					}	
				});	
			} else if(data.status == "error") {
				console.log('Something wrong with favourite foods...');
			}	
		});
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
	};

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

	self.changeLanguage = function() {
		if(self.lang() == 'en') {
			self.flag('img/greece.png');

			self.home('Home');
			self.biometrics('Biometrics');
			self.measurements('Measurements');
			self.statistics('Charts');
			self.createfood('Create');
			self.addfood('Add Food');
			self.settings('Settings');
			self.logsout('Logout');
			self.title('Add Food | Nutrition');
			self.numeric('* Only numbers are allowed');
			self.alphaNumericLatin('* Only Latin and Greek characters, numbers, dot, percent, dash and underscores are allowed.');
			self.empties('* Field is empty!');
			self.uniqueNameMsg('* The food name already exist!');
			self.allfoodsName('All Foods');
			self.recentName('Recent');
			self.favouriteName('Favourites');
			self.myFoodName('My foods');
			self.foodName('Food');
			self.categoryBarName('Category');
			self.portionName('Quantity');
			self.searchFoodName('Search food...');
			self.proteinName('Protein');
			self.carbName('Carb');
			self.fatName('Fat');
			self.fitName('Fiber');
			self.sugarName('Sugar');
			self.saturatedName('Saturated');
			self.unsaturatedName('Unsaturated');
			self.bitaminDName('Vitamin C');
			self.cancelName('Cancel');
			self.okName('Ok');
			self.updateName('Update');
			self.nameFoodName('Food Name');
			self.unitCountName('Measurement Unit');
			self.categoryFoodName('Category Food');
			self.caloriesName('Calories');
			self.chooseCategoryFoodName('Choose Category Food');
			self.chooseUnitCountName('Choose Measurement Unit');
			self.noWord('No');
			self.yesWord('Yes');
			self.deleteWord('Delete');
			self.warningDeleteMsg('Are you sure you want to delete the food');
			self.questionMark('?');
			self.noAvailableFood('No available Food');
			self.addFoodMsg('The food added successfully!');
			self.updateFoodMsg('The food updated successfully!');
			self.deleteFoodMsg('The food deleted successfully!');
			self.addFoodErrorMsg('Somethings wrong with adding the food...');
			self.updateFoodErrorMsg('Somethings wrong with updating the food...');
			self.deleteFoodErrorMsg('Somethings wrong with deleting the food...');
			self.editfood('Edit Food');
			self.tolocalestring('en-GB');

			self.sendLang(1);
		} else if(self.lang() == 'gr') {
			self.flag('img/united-kingdom.png');

			self.home('Αρχική');
			self.biometrics('Βιομετρικά');
			self.measurements('Μετρήσεις');
			self.statistics('Γραφήματα');
			self.createfood('Δημιουργία');
			self.addfood('Προσθήκη Φαγητού');
			self.settings('Ρυθμίσεις');
			self.logsout('Αποσύνδεση');
			self.title('Προσθήκη Φαγητού | Nutrition');
			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.alphaNumericLatin('* Επιτρέπονται μόνο λατινικοί και ελληνικοί χαρακτήρες, αριθμοί, τελεία, ποσοστό, παύλα και κάτω παύλα.');
			self.empties('* Το πεδίο είναι κενό!');
			self.uniqueNameMsg('* Η ονομασία του φαγητού υπάρχει ήδη!');
			self.allfoodsName('Όλα τα Φαγητά');
			self.recentName('Πρόσφατα');
			self.favouriteName('Αγαπημένα');
			self.myFoodName('Τα φαγητά μου');
			self.foodName('Φαγητό');
			self.categoryBarName('Κατηγορία');
			self.portionName('Ποσότητα');
			self.searchFoodName('Αναζήτηση φαγητού...');
			self.proteinName('Πρωτεΐνες');
			self.carbName('Υδατάνθρακες');
			self.fatName('Λίπος');
			self.fitName('Φυτικές Ίνες');
			self.sugarName('Σάκχαρα');
			self.saturatedName('Κορεσμένα');
			self.unsaturatedName('Ακόρεστα');
			self.bitaminDName('Βιταμίνη C');
			self.cancelName('Ακύρωση');
			self.okName('Εντάξει');
			self.updateName('Ενημέρωση');
			self.nameFoodName('Όνομα Φαγητού');
			self.unitCountName('Μονάδα Μέτρησης');
			self.categoryFoodName('Κατηγορία Φαγητού');
			self.caloriesName('Θερμίδες');
			self.chooseCategoryFoodName('Επίλεξε Κατηγορία Φαγητού');
			self.chooseUnitCountName('Επίλεξε Μονάδα Μέτρησης');
			self.noWord('Όχι');
			self.yesWord('Ναι');
			self.deleteWord('Διαγραφή');
			self.warningDeleteMsg('Είστε σίγουροι ότι θέλετε να διαγράψετε το φαγητό');
			self.questionMark(';');
			self.noAvailableFood('Κανένα Διαθέσιμο Φαγητό');
			self.addFoodMsg('Το φαγητό προστέθηκε με επιτυχία!');
			self.updateFoodMsg('Το φαγητό ενημερώθηκε με επιτυχία!');
			self.deleteFoodMsg('Το φαγητό διαγράφτηκε με επιτυχία!');
			self.addFoodErrorMsg('Κάτι πήγε λάθος με την προσθήκη του φαγητού...');
			self.updateFoodErrorMsg('Κάτι πήγε λάθος με την ενημέρωση του φαγητού...');
			self.deleteFoodErrorMsg('Κάτι πήγε λάθος με την διαγραφή του φαγητού...');
			self.editfood('Επεξεργασία Φαγητού');
			self.tolocalestring('el-GR');

			self.sendLang(2);
		}
	};

	self.removeStyle = function() {
		recent.removeAttribute('style');
		favourite.removeAttribute('style');
		myfoods.removeAttribute('style');
		createfood.removeAttribute('style');
	};

	self.showFoodCategory = function(name, isDefualt) {
		self.removeStyle();
		self.foodChoiceArray([]);
		self.categoryName(name);
		self.isHideStar(true);
		self.isHideEdit(false);
		if(name == 'recent') {
			self.searchFoodArray([]);
			self.page(1);
			recent.style.backgroundColor = '#DBF5F0';
			self.foodChoice(self.recentArray());
			self.searchFoodArray(self.recentArray());
			self.totalSearchFoods(self.totalRecentFoods());
			if(self.seachFood() != '') {
				self.searchTotalRecents();
			} else {
				self.helptotalPages(Math.ceil(self.totalSearchFoods()/self.limit()));
			}
		} else if(name == 'favourite') {
			self.searchFoodArray([]);
			self.page(1);
			favourite.style.backgroundColor = '#DBF5F0';
			self.foodChoice(self.favouriteArray());
			self.searchFoodArray(self.favouriteArray());
			self.totalSearchFoods(self.totalFavouriteFoods());
			if(self.seachFood() != '') {
				self.searchTotalFavourites();
			} else {
				self.helptotalPages(Math.ceil(self.totalSearchFoods()/self.limit()));
			}
		} else if(name == 'myfoods') {
			self.isHideEdit(true);
			self.searchFoodArray([]);
			self.page(1);
			myfoods.style.backgroundColor = '#DBF5F0';
			self.foodChoice(self.myFoodArray());
			self.searchFoodArray(self.myFoodArray());
			self.totalSearchFoods(self.totalCreatedFoods());

			if(self.seachFood() != '') {
				self.searchTotalMyFoods();
			} else {
				self.helptotalPages(Math.ceil(self.totalSearchFoods()/self.limit()));
			}
		} else if(name == 'search') {
			self.helptotalPages(Math.ceil(self.totalSearchFoods()/self.limit()));
			self.page(1);
			createfood.style.backgroundColor = '#DBF5F0';
			self.isHideStar(false);
			self.foodChoice(self.searchFoodArray());
		} else if(name == 'allfood') {
			self.searchFoodArray([]);
			self.page(self.page());
			self.isHideStar(false);
			createfood.style.backgroundColor = '#DBF5F0';
			self.foodChoice(self.allFoodArray());	
			self.searchFoodArray(self.allFoodArray());
			self.totalSearchFoods(self.totalFoods());
			if(self.seachFood() != '') {
				self.searchTotalFoods();
			} else {
				self.helptotalPages(Math.ceil(self.totalSearchFoods()/self.limit()));
			}
		}

		if(isDefualt == 1) {
			self.createPagination(self.helptotalPages(), 1);
		} else {
			self.createPagination(self.helptotalPages(), self.helppage());
		}
	};

	self.searchTotalFoods = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachFood()
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

	self.searchTotalRecents = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachFood()
		}

		$.post('./php/gettotalsearchrecents.php', o, function(data) {
			if(data.status == "ok") {
				self.totalRecentFoods(data.data);
				self.helptotalPages(Math.ceil(self.totalRecentFoods()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};
	
	self.searchTotalFavourites = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachFood()
		}

		$.post('./php/gettotalsearchfavourites.php', o, function(data) {
			if(data.status == "ok") {
				self.totalFavouriteFoods(data.data);
				self.helptotalPages(Math.ceil(self.totalFavouriteFoods()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.searchTotalMyFoods = function() {
		let o = {
			numLang: self.sendLang(),
			search: self.seachFood()
		}

		$.post('./php/gettotalsearchmyfood.php', o, function(data) {
			if(data.status == "ok") {
				self.totalCreatedFoods(data.data);
				self.helptotalPages(Math.ceil(self.totalCreatedFoods()/self.limit()));
				self.createPagination(self.helptotalPages(), self.helppage());
			} else {

			}
		});
	};

	self.foodChoice = function(el) {
		for(let i=0; i<el.length; i++) {
			let type, hashText, imgHash;

			type = el[i].imgName.split(".");
			if(type == '') {
				type[0] = '';
				type[1] = '';
			}

			self.type(type[1]);

			if(el[i].imgHash != '') {
				hashText = CryptoJS.HmacSHA256(el[i].imgName, el[i].imgHash);
				imgHash = hashText.toString(CryptoJS.enc.Hex);
			} else {
				imgHash = type[0];
			}

			//deleteCreated
			var o = {
				consumptionNumPortion: 1,
				inputNumPortion: 1,
				firstLetter: el[i].foodName.charAt(0).toUpperCase(),
				imgPath: el[i].imgPath,
				imgName: el[i].imgName,
				imgHash: el[i].imgHash,
				img: (el[i].imgPath + imgHash + '.' + self.type()),
				idFood: el[i].idFood,
				isFavourite: el[i].isFavourite,
				unitName: el[i].unitName,
				idUnit: el[i].idUnit,
				name: el[i].foodName,
				foodCategory: el[i].category,
				idCategory: el[i].idCategory,
				quantity: el[i].portion,//self.roundOff(, 2)
				portion: el[i].portion,
				foodCount: (i+1).toString(),
				bitamins: self.roundOff(el[i].bitamins, 2),
				calories: self.roundOff(el[i].calories, 2),
				carb: self.roundOff(el[i].carb, 2),
				fat: self.roundOff(el[i].fat, 2),
				fiber: self.roundOff(el[i].fiber, 2),
				protein: self.roundOff(el[i].protein, 2),
				saturated: self.roundOff(el[i].saturated, 2),
				sugar: self.roundOff(el[i].sugar, 2),
				unsaturated: self.roundOff(el[i].unsaturated, 2),
				date: self.date()
			}

			self.foodChoiceArray.push(new FoodChoices(o));
		}
	};

	self.restoreCreatedFoodData = function() {
		self.newFoodName(self.itemFoodArray().name());
		self.newIdFood(self.itemFoodArray().idFood());
		self.newPortion(self.itemFoodArray().portion());
		self.newUnit(self.itemFoodArray().idUnit());
		self.newCategoryFood(self.itemFoodArray().idCategory());
		self.newCalories(self.itemFoodArray().calories());
		self.newProtein(self.itemFoodArray().protein());
		self.newCarb(self.itemFoodArray().carb());
		self.newFat(self.itemFoodArray().fat());
		self.newFiber(self.itemFoodArray().fiber());
		self.newSugar(self.itemFoodArray().sugar());
		self.newSaturated(self.itemFoodArray().saturated());
		self.newUnsaturated(self.itemFoodArray().unsaturated());
		self.newBitaminD(self.itemFoodArray().bitamins());
	};

	self.restoreFoodAttr = function() {
		self.itemFoodArray().calories(backupCalories);
		self.itemFoodArray().protein(backupProtein);
		self.itemFoodArray().carb(backupCarb);
		self.itemFoodArray().fat(backupFat);
		self.itemFoodArray().fiber(backupFiber);
		self.itemFoodArray().saturated(backupSaturated);
		self.itemFoodArray().unsaturated(backupUnsaturated);
		self.itemFoodArray().sugar(backupSugar);
		self.itemFoodArray().bitamins(backupBitamins);
		self.itemFoodArray().portion(backupportion);
		self.itemFoodArray().consumptionNumPortion(self.roundOff(self.consumptionNumPortion(), 3));
		self.itemFoodArray().inputNumPortion(self.roundOff(self.consumptionNumPortion(), 3));
		
		document.getElementById('consumption').value = 1;
	}

	function FoodChoices(data) {
		var food = this;

		food.consumptionNumPortion = ko.observable(data.consumptionNumPortion);
		food.inputNumPortion = ko.observable(data.inputNumPortion);
		food.firstLetter = ko.observable(data.firstLetter);
		food.imgPath = ko.observable(data.imgPath);
		food.imgName = ko.observable(data.imgName);
		food.imgHash = ko.observable(data.imgHash);
		food.img = ko.observable(data.img);
		food.idFood = ko.observable(data.idFood);
		food.isFavourite = ko.observable(data.isFavourite);
		food.unitName = ko.observable(data.unitName);
		food.idUnit = ko.observable(data.idUnit);
		food.name = ko.observable(data.name);
		food.foodCategory = ko.observable(data.foodCategory);
		food.idCategory = ko.observable(data.idCategory);
		food.quantity = ko.observable(data.quantity);
		food.portion = ko.observable(data.portion);
		food.foodCount = ko.observable(data.foodCount);
		food.bitamins = ko.observable(data.bitamins);
		food.calories = ko.observable(data.calories);
		food.carb = ko.observable(data.carb);
		food.fat = ko.observable(data.fat);
		food.fiber = ko.observable(data.fiber);
		food.protein = ko.observable(data.protein);
		food.saturated = ko.observable(data.saturated);
		food.sugar = ko.observable(data.sugar);
		food.unsaturated = ko.observable(data.unsaturated);
		food.date = ko.observable(data.date);
		food.starFill = ko.observable('./img/star_black.png');
		food.addName = ko.observable('Προσθήκη');
		food.nutrientName = ko.observable('Θρεπτικές Ουσίες');
		food.proteinName = ko.observable('Πρωτεΐνες');
		food.carbName = ko.observable('Υδατάνθρακες');
		food.fatName = ko.observable('Λίπος');
		food.fitName = ko.observable('Φυτικές Ίνες');
		food.consumeQuantityName = ko.observable('Ποσότητα Κατανάλωσης');
		food.portionsName = ko.observable('Μερίδες');
		food.portionName = ko.observable('Μερίδα');
		food.quantityName = ko.observable('Ποσότητα');
		food.typeMealName = ko.observable('Επιλέξτε Τύπο Γεύματος');
		food.morningName = ko.observable('Πρωινό');
		food.lunchName = ko.observable('Μεσημεριανό');
		food.snackName = ko.observable('Σνακς');//Γεύματα
		food.dinnerName = ko.observable('Βραδινό');
		food.moreNutrientsName = ko.observable('Περισσότερες Θρεπτικές Ουσίες');
		food.sugarName = ko.observable('Σάκχαρα');
		food.saturatedName = ko.observable('Κορεσμένα');
		food.unsaturatedName = ko.observable('Ακόρεστα');
		food.bitaminDName = ko.observable('Βιταμίνη C');
		food.cancelName = ko.observable('Ακύρωση');
		food.okName = ko.observable('Εντάξει');

		food.nextDay = function() {
			console.log(self.helpDate());
			self.counterDate(self.counterDate() + 1);
			var nextDay = new Date(self.helpDate());
			var y, m, d;
			y = nextDay.getFullYear();
			m = nextDay.getMonth();
			d = nextDay.getDate();
			var nextDayDate = new Date(y, m, d + self.counterDate());
			var dd, mm, yyyy;		
			console.log();
			food.date(nextDayDate.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));
			self.date(food.date());
			yyyy = nextDayDate.getFullYear();
			
			mm = nextDayDate.getMonth() + 1;
			if(mm < 10) {
				mm = '0' + (nextDayDate.getMonth() + 1);
			}
			
			dd = nextDayDate.getDate();
			if(dd < 10) {
				dd = '0' + nextDayDate.getDate();
			}
			
			self.fullDate(yyyy+"-"+mm+"-"+dd); 
		};

		food.prevDay = function() {
			self.counterDate(self.counterDate() - 1);
			var prevDay = new Date(self.helpDate());
			var y, m, d;
			y = prevDay.getFullYear();
			m = prevDay.getMonth();
			d = prevDay.getDate();
			var prevDayDate = new Date(y, m, d + self.counterDate());
			var dd, mm, yyyy;		

			food.date(prevDayDate.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));
			self.date(food.date());
			yyyy = prevDayDate.getFullYear();
			
			mm = prevDayDate.getMonth() + 1;
			if(mm < 10) {
				mm = '0' + (prevDayDate.getMonth() + 1);
			}
			
			dd = prevDayDate.getDate();
			if(dd < 10) {
				dd = '0' + prevDayDate.getDate();
			}
			
			self.fullDate(yyyy+"-"+mm+"-"+dd); 
		};

		food.portion.subscribe(function(value) {
			self.roundOff(self.itemFoodArray().inputNumPortion(parseFloat(food.portion())/parseFloat(food.quantity())), 3);
			self.in();
		});

		food.changeLanguage = function() {
			if(self.lang() === 'en') {
				food.addName('Add');
				food.nutrientName('Nutrients');
				food.proteinName('Protein');
				food.carbName('Carb');
				food.fatName('Fat');
				food.fitName('Fiber');
				food.consumeQuantityName('Consumed Quantity');
				food.portionsName('Portions');
				food.portionName('Portion');
				food.typeMealName('Choose Type of Meal');
				food.morningName('Breakfast');
				food.lunchName('Lunch');
				food.snackName('Snack');
				food.dinnerName('Dinner');
				food.moreNutrientsName('More Nutrients');
				food.sugarName('Sugar');
				food.saturatedName('Saturated');
				food.unsaturatedName('Unsaturated');
				food.bitaminDName('Vitamin C');
				food.cancelName('Cancel');
				food.okName('Ok');
				self.panel('Admin Panel');
				food.quantityName('Quantity');
			} else if(self.lang() === 'gr') {
				food.addName('Προσθήκη');
				food.nutrientName('Θρεπτικές Ουσίες');
				food.proteinName('Πρωτεΐνες');
				food.carbName('Υδατάνθρακες');
				food.fatName('Λίπος');
				food.fitName('Φυτικές Ίνες');
				food.consumeQuantityName('Ποσότητα Κατανάλωσης');
				food.portionsName('Μερίδες');
				food.portionName('Μερίδα');
				food.typeMealName('Επιλέξτε Τύπο Γεύματος');
				food.morningName('Πρωινό');
				food.lunchName('Μεσημεριανό');
				food.snackName('Σνακς');//Γεύματα
				food.dinnerName('Βραδινό');
				food.moreNutrientsName('Περισσότερες Θρεπτικές Ουσίες');
				food.sugarName('Σάκχαρα');
				food.saturatedName('Κορεσμένα');
				food.unsaturatedName('Ακόρεστα');
				food.bitaminDName('Βιταμίνη C');
				food.cancelName('Ακύρωση');
				food.okName('Εντάξει');
				self.panel('Admin Πάνελ');
				food.quantityName('Ποσότητα');
			}
		};

		self.in = function(obj, event) {
			//var consumption = document.getElementById('consumption').value;
			var consumption = self.itemFoodArray().inputNumPortion();
			self.itemFoodArray().calories(self.roundOff(backupCalories*consumption, 2));
			self.itemFoodArray().protein(self.roundOff(backupProtein*consumption, 2));
			self.itemFoodArray().carb(self.roundOff(backupCarb*consumption, 2));
			self.itemFoodArray().fat(self.roundOff(backupFat*consumption, 2));
			self.itemFoodArray().fiber(self.roundOff(backupFiber*consumption, 2));
			self.itemFoodArray().saturated(self.roundOff(backupSaturated*consumption, 2));
			self.itemFoodArray().unsaturated(self.roundOff(backupUnsaturated*consumption, 2));
			self.itemFoodArray().sugar(self.roundOff(backupSugar*consumption, 2));
			self.itemFoodArray().bitamins(self.roundOff(backupBitamins*consumption, 2));
			self.itemFoodArray().portion(self.roundOff(backupportion*consumption, 3));
			self.itemFoodArray().consumptionNumPortion(self.roundOff(consumption, 3));
			self.itemFoodArray().inputNumPortion(self.roundOff(consumption, 3));

			consumptionquantity.removeAttribute('style');
		};

		food.editCreatedFood = function() {
			self.newImg(food.img());
			self.newImgName(food.imgName());
			self.newImgHash(food.imgHash());
			self.uniqueNameError(false);
			self.itemFoodArray(food);
			self.restoreCreatedFoodData();
			document.getElementById('file1').value = '';
			self.switch('modalEditFood');
			const modal = document.getElementById('scrollEdit');
			modal.scrollTop = 0;
		};

		food.deleteCreatedFood = function() {
			self.newImgName(food.imgName());
			self.newImgHash(food.imgHash());
			self.newImg(food.img());
			self.itemFoodArray(food);
			self.newIdFood(food.idFood());
			self.createFoodName(`${self.warningDeleteMsg()} ${food.name()} ${self.questionMark()}`);
			self.switch('modalDelete')
		};

		food.isAddedStar = function() {
			food.date(self.date());
			backupCalories = self.roundOff(food.calories(), 2);
			backupProtein = self.roundOff(food.protein(), 2);
			backupCarb = self.roundOff(food.carb(), 2); 
			backupFat = self.roundOff(food.fat(), 2); 
			backupFiber = self.roundOff(food.fiber(), 2); 
			backupSaturated = self.roundOff(food.saturated(), 2); 
			backupUnsaturated = self.roundOff(food.unsaturated(), 2); 
			backupSugar = self.roundOff(food.sugar(), 2); 
			backupBitamins = self.roundOff(food.bitamins(), 2);
			backupportion = self.roundOff(food.portion(), 2);
			self.consumptionNumPortion(self.roundOff(food.consumptionNumPortion(), 3));
			self.itemFoodArray(food);
			self.switch('modalEdit');
			food.chooseMealCategory(self.mealCategory());
		}

		food.addFoodSubmit = function() {
			let o = {}
			let o1 = {}
			let o2 = {}
			var consumption = self.roundOff(document.getElementById('consumption').value, 3);

			choosemealtype = document.getElementById('choosemealtype');
			consumptionquantity = document.getElementById('consumptionquantity');

			o1 = {
				username: self.username(),
				idFood: food.idFood(),
				mealCategory: self.mealCategory(),
				portion: self.roundOff(food.quantity() * consumption, 3),
				calories: self.roundOff(backupCalories * consumption, 2),
				protein: self.roundOff(backupProtein * consumption, 2),
				carb: self.roundOff(backupCarb * consumption, 2),
				fat: self.roundOff(backupFat * consumption, 2),
				fiber: self.roundOff(backupFiber * consumption, 2),
				saturated: self.roundOff(backupSaturated * consumption, 2),
				unsaturated: self.roundOff(backupUnsaturated * consumption, 2),
				sugar: self.roundOff(backupSugar * consumption, 2),
				bitamins: self.roundOff(backupBitamins * consumption, 2),
				fullDate: self.fullDate()
			};

			if(self.mealCategory() > 0 && self.mealCategory() < 5 && consumption > 0) {
				self.switch('modalLoad');
				if(self.categoryName() == 'search' || self.categoryName() == 'allfood') {
					o2 = {isFavourite: 1}

					for(let i=0; i<self.favouriteArray().length; i++) {
						if(food.name() == self.favouriteArray()[i].foodName) {
							o2 = {isFavourite: 2}
							break;
						}
					}
				} else {
					o2 = {isFavourite: food.isFavourite()}
				}

				o = Object.assign(o1, o2);

				$.post('./php/adddailyfood.php', o, function(data) {
					if(data.status == "ok") {					
						console.log('Food was added successfully!');

						if(self.categoryName() == 'favourite') {
							self.updateFavourite(self.totalPages(), self.helppage());
						} else if(self.categoryName() == 'recent') {
							self.updateRecent(self.totalPages(), self.helppage());
						} else if(self.categoryName() == 'myfoods') {
							self.updateMyFood(self.totalPages(), self.helppage());
						} else if(self.categoryName() == 'allfood') {
							self.updateAllFood(self.totalPages(), self.helppage());
						}

						self.switch('modalEdit');
						self.switch('modalLoad');
						self.successMsg(self.addFoodMsg());
						self.switch('modalSuccessMsg');
					} else {
						console.log('Something wrong with add food...');
					}
				});
			} else if((self.mealCategory() <= 0 || self.mealCategory() >= 5) && consumption <= 0) {
				consumptionquantity.style.color = 'rgb(175 53 53)';
				choosemealtype.style.color = 'rgb(175 53 53)';
			} else if(consumption <= 0) {
				consumptionquantity.style.color = 'rgb(175 53 53)';
			} else {
				choosemealtype.style.color = 'rgb(175 53 53)';
			}
		};

		food.chooseMealCategory = function(value) {
			var idmorning = document.getElementById('morning');
			var idlunch = document.getElementById('lunch');
			var idmeal = document.getElementById('meal');
			var iddinner = document.getElementById('dinner');
			
			if(idmorning)
				idmorning.removeAttribute('style');
			if(idlunch)
				idlunch.removeAttribute('style');
			if(idmeal)
				idmeal.removeAttribute('style');
			if(iddinner)
				iddinner.removeAttribute('style');
			choosemealtype.removeAttribute('style');

			if(value == 1) {
				self.mealCategory(1);
				idmorning.style.backgroundColor = '#0C6170';
				idmorning.style.color = 'white';
			} else if(value == 2) {
				self.mealCategory(2);
				idlunch.style.backgroundColor = '#0C6170';
				idlunch.style.color = 'white';
			} else if(value == 3) {
				self.mealCategory(3);
				idmeal.style.backgroundColor = '#0C6170';
				idmeal.style.color = 'white';
			} else if(value == 4) {
				self.mealCategory(4);
				iddinner.style.backgroundColor = '#0C6170';
				iddinner.style.color = 'white';
			}
		};

		food.star = function() {
			if(self.categoryName() == 'search') {
				for(let i=0; i<self.favouriteArray().length; i++) {
					if(food.name() == self.favouriteArray()[i].foodName) {
						food.starFill('./img/star_yellow.png');
						break;
					}
				}
			} else {
				if(food.isFavourite() == 1) {
					food.starFill('./img/star_black.png');
				} else {
					food.starFill('./img/star_yellow.png');
				}
			}
			self.isWaitFavourite(true);
		};	
		food.star();

		food.stopProp = function(event) {
			event.stopPropagation();
		};	

		food.changeStar = function() {
			let o = {
				username: self.username(),
				newVal: food.isFavourite(),
				idFood: food.idFood()
			}

			if(self.isWaitFavourite()) {
				self.isWaitFavourite(false);
				$.post('./php/updatefavourite.php', o, function(data) {
					if(data.status == "ok") {
						if(food.imgPath() === './img_public/') {
							self.imgContainer(self.newImgPath());
						} else {
							self.imgContainer(self.imgPath());
						}

						let o1 = {
							idFood: food.idFood(),
							isFavourite: data.data,
							foodName: food.name(),
							category: food.foodCategory(),
							imgPath: self.imgContainer(),
							imgName: food.imgName(),
							imgHash: food.imgHash(),
							img: food.img(),
							portion: food.quantity(),
							unitName: food.unitName(),
							idUnit: food.idUnit(),
							idCategory: food.idCategory(),
							quantity: food.portion(),
							bitamins: food.bitamins(),
							calories: food.calories(),
							carb: food.carb(),
							fat: food.fat(),
							fiber: food.fiber(),
							protein: food.protein(),
							saturated: food.saturated(),
							sugar: food.sugar(),
							unsaturated: food.unsaturated(),
						}
						self.foodChoiceArray([]);

						if(self.categoryName() == 'recent') {
							for(let i=0; i<self.recentArray().length; i++) {
								if(self.recentArray()[i].foodName == food.name()) {
									self.recentArray.splice(i, 1, o1);
									break;
								}
							}
							
							self.foodChoice(self.recentArray());

							if(data.data == 1) {
								for(let i=0; i<self.favouriteArray().length; i++) {
									if(self.favouriteArray()[i].foodName == food.name()) {
										self.favouriteArray.splice(i, 1);
										break;
									}
								}
							} else if(data.data == 2) {
								self.favouriteArray.push(o1);
							}
							self.totalFavourite(self.favouriteArray().length);

							
						} else if(self.categoryName() == 'favourite') {
							if(data.data == 1) {
								for(let i=0; i<self.favouriteArray().length; i++) {
									if(self.favouriteArray()[i].foodName == food.name()) {
										self.favouriteArray.splice(i, 1);
										break;
									}
								}
							} else if(data.data == 2) {
								self.favouriteArray.push(o1);
							}
							self.totalFavourite(self.favouriteArray().length);
							
							self.foodChoice(self.favouriteArray());

							for(let i=0; i<self.myFoodArray().length; i++) {
								if(self.myFoodArray()[i].foodName == food.name()) {
									self.myFoodArray.splice(i, 1, o1);
									break;
								}		
							}
							
							for(let i=0; i<self.recentArray().length; i++) {
								if(self.recentArray()[i].foodName == food.name()) {
									self.recentArray.splice(i, 1, o1);
									break;
								}
							}
						} else if(self.categoryName() == 'myfoods') {
							for(let i=0; i<self.myFoodArray().length; i++) {
								if(self.myFoodArray()[i].foodName == food.name()) {
									self.myFoodArray.splice(i, 1, o1);
									break;
								}		
							}
							
							self.foodChoice(self.myFoodArray());	

							if(data.data == 1) {
								for(let i=0; i<self.favouriteArray().length; i++) {
									if(self.favouriteArray()[i].foodName == food.name()) {
										self.favouriteArray.splice(i, 1);
										break;
									}
								}
							} else if(data.data == 2) {
								self.favouriteArray.push(o1);
							}
							self.totalFavourite(self.favouriteArray().length);
							
												
						}
						self.updateTotalFood();
					} else {
						console.log("Food is not updated...");
					}
				});
			}
		};
		food.changeLanguage();
	};

	self.deleteCreatedFood = function() {
		self.switch('modalLoad');

		let o = {
			username: self.username(),
			idLang: self.sendLang(),
			id: self.newIdFood(),
			idFood: self.newIdFood(),
			newImgPath: self.newImgPath(),
			newImgHash: self.newImgHash(),
			newImg: self.newImg(),
			fileLength: 1
		}
		$.post('./php/recoverdeletedfooddailysummary.php', o, function(data) {
			if(data.status == "ok") {
				$.post('./php/deleteimg.php', o, function(data) {
					if(data.status == "ok") {
						$.post('./php/deletecreatedfood.php', o, function(data) {
							if(data.status == "ok") {
								self.updateMyFood(1, 1);
								self.successMsg(self.deleteFoodMsg());
							} else {
								self.successMsg(self.deleteFoodErrorMsg());
							}
							self.switch('modalLoad');
							self.switch('modalDelete');
							self.switch('modalSuccessMsg');	
						});
					}
				});
			} else {
				console.log(data.data);
			}
		});
	};
	
	self.updateCreateFood = function() {
		let condition1 = !self.newFoodName.alphaNumericLatinError() && !self.newPortion.numericError() && !self.newCalories.numericError() && !self.newProtein.numericError() && !self.newCarb.numericError() && !self.newFat.numericError() && !self.newFiber.numericError() && !self.newSugar.numericError() && !self.newSaturated.numericError() && !self.newUnsaturated.numericError() && !self.newBitaminD.numericError();
		let condition2 = self.newCategoryFood() != 0 && self.newUnit() != 0 && self.newFoodName() !== '' && self.newPortion() !== '' && self.newCalories() !== '' && self.newProtein() !== '' && self.newCarb() !== '' && self.newFat() !== '';

 		if(condition1 && condition2) {
			self.switch('modalLoad');
			
			let files = document.getElementById('file1').files;
			let o1 = {
				newImg: self.newImg(),
				newImgPath: self.newImgPath(),
				newImgHash: self.newImgHash(),
				fileLength: files.length
			}
			if(files.length > 0) {
				$.post('./php/deleteimg.php', o1, function(data) {
					if(data.status == "ok") {
						
							var formData = new FormData(form1);

							formData.append('file', files[0]);
				
							var xhttp = new XMLHttpRequest();

							xhttp.responseType = 'json';
							xhttp.open("POST", "./php/uploadimg.php", true);

							xhttp.onreadystatechange = function() {
								if(this.readyState == 4 && this.status == 200) {
									var response = xhttp.response;

									if(response.data.upload == 1) {
										console.log("Upload successfully.");
										self.newImgHash(response.data.bin2hex);
										self.newImgName(response.data.filename);									
									} else {
										console.log("File not uploaded.");
									}

									self.createdFood();
								}
							};
				
							xhttp.send(formData);

					}
				});
			} else {
				self.type('');
				self.createdFood();
			}
		} else {
			self.errorMsgsEditFood();
		}
	};

	self.createdFood = function() {
		let fiber = 0, sugar = 0, saturated = 0, unsaturated = 0, bitaminD = 0, newImgName;

		if(self.type() === '') {
			newImgName = self.newImgName();
		} else {
			newImgName = self.newImgName() + '.' + self.type();
		}

		if(self.newFiber() != '')
			fiber = self.newFiber();
		if(self.newSugar() != '')
			sugar = self.newSugar();
		if(self.newSaturated() != '')
			saturated = self.newSaturated();
		if(self.newUnsaturated() != '')
			unsaturated = self.newUnsaturated();
		if(self.newBitaminD() != '')
			bitaminD = self.newBitaminD();

		let o = {
			username: self.username(),
			idLang: self.sendLang(),
			idFood: self.newIdFood(),
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
			newImgHash: self.newImgHash(),
			belongCategory: 2
		}

		$.post('./php/updatecreatedfood.php', o, function(data) {
			if(data.status == "ok") {
				self.updateMyFood(1, 1);
				self.updateFavourite(1, 1);
				self.updateRecent(1, 1);
				self.updateAllFood(1, 1);
				self.switch('modalEditFood');
				self.successMsg(self.updateFoodMsg());
				self.switch('modalSuccessMsg');						
			} else if(data.status == "error2") {
				const name = document.getElementById('nameEdit');
				name.style.color = 'rgb(175, 53, 53)';
				self.uniqueNameError(true);
				const modal = document.getElementById('scrollEdit');
				modal.scrollTop = 0;
			} else {
				console.log('Something wrong with edit food...');
			}
			self.switch('modalLoad');
		});
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
				self.updateMyFood(1, 1);
				self.switch('modalCreateFood');	
				self.successMsg(self.addFoodMsg());
				self.switch('modalSuccessMsg');	
			} else if(data.status == "error2") {
				const name = document.getElementById('nameCreate');
				name.style.color = 'rgb(175, 53, 53)';
				self.uniqueNameError(true);
				const modal = document.getElementById('scrollCreate');
				modal.scrollTop = 0;
			} else {
				console.log('Something wrong with create food...');
			}
			self.switch('modalLoad');
		});
	};

	let upload = document.getElementById('file');

	upload.addEventListener('click', event => {
		//self.uploadImg();
	});
	
	self.uploadImg = function() {
		let files = document.getElementById('file').files;
		let condition1 = !self.uniqueNameError() && !self.newFoodName.alphaNumericLatinError() && !self.newPortion.numericError() && !self.newCalories.numericError() && !self.newProtein.numericError() && !self.newCarb.numericError() && !self.newFat.numericError() && !self.newFiber.numericError() && !self.newSugar.numericError() && !self.newSaturated.numericError() && !self.newUnsaturated.numericError() && !self.newBitaminD.numericError();
		let condition2 = self.newCategoryFood() != 0 && self.newUnit() != 0 && self.newFoodName() !== '' && self.newPortion() !== '' && self.newCalories() !== '' && self.newProtein() !== '' && self.newCarb() !== '' && self.newFat() !== '';
		self.newImgHash('');

		if(files.length > 0 && condition1 && condition2) {
			self.switch('modalLoad');
			var formData = new FormData(form);

			formData.append('file', files[0]);

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
						self.submitCreateFood();
				} else {
					console.log("File not uploaded.");
				}
			   }
			};
	  
			// Send request with data
			xhttp.send(formData);
		} else if(condition1 && condition2) {
			self.switch('modalLoad');
			self.type('');
			self.submitCreateFood();
		} else {
			self.errorMsgsCreateFood();
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
			activelabel: "active",
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

		self.dashboardArray.push(new AddFood(o));
		if(self.categoryUser() == 'Admin') {
			self.dashboardArray.push(new AddFood(o8));
		}
		self.dashboardArray.push(new AddFood(o1));
		self.dashboardArray.push(new AddFood(o2));
		self.dashboardArray.push(new AddFood(o3));
		//self.dashboardArray.push(new AddFood(o4));
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
				self.addfoodpage();
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
	ko.applyBindings(new AddFoodModel(), document.getElementById('body'));
});