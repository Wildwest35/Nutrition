function DashboardModel() {
	self = this;
	self.copyrightlink = ko.observable('© Copyright 2022 Nutrition');
	self.footer = ko.observable(`<section class="footer-container"><h5 data-bind="text: copyrightlink" class="copyright"></h5><div class="social"><img src="img/facebook.png" class="summary-touch" data-bind="click: facebookpage" alt="Facebook"><img src="img/instagram.png" class="summary-touch" data-bind="click: instagrampage" alt="Instagram"><img src="img/linkedin.png" class="summary-touch" data-bind="click: linkedinpage" alt="Linkedin"></div></section>`);
	self.username  = ko.observable();
	self.lang = ko.observable('gr');
	self.idUser = ko.observable('');
	self.nameUser = ko.observable('');
	self.user = ko.observable('User');
	self.admin = ko.observable('Admin');
	self.categoryUser = ko.observable('');
	self.sendLang = ko.observable(2);
	self.max = ko.observable(4.5);

	self.dashboardArray = ko.observableArray([]);
	self.foodArray = ko.observableArray([]);
	self.morningArray = ko.observableArray([]);
	self.lunchArray = ko.observableArray([]);
	self.snackArray = ko.observableArray([]);
	self.dinnerArray = ko.observableArray([]);
	self.numofdaysArray = ko.observableArray([]);

	self.backupDayArray = ko.observableArray([]);
	self.itemFoodArray = ko.observable([]);

	self.backupDay = ko.observable('');
	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.isEmptyField = ko.observable('* Το πεδίο είναι κενό!');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
	var choosemealtype = document.getElementById('choosemealtype');
	self.initialNumber = ko.observable(1);
	self.consumptionNumPortion = ko.observable(1);
	self.mealCategory = ko.observable(0);
	self.flag = ko.observable();
	self.fullDate = ko.observable('');
	self.dailyEatingid = ko.observable('');
	self.dailyEatingName = ko.observable('');
	self.dailyEatingDailyMeal = ko.observable('');
	self.water = ko.observable(0);
	self.backupWater = ko.observable(0);
	self.countWater = ko.observable(0);
	self.halfGlass = ko.observable(119);
	self.glass = ko.observable(238);
	self.bottle = ko.observable(500);
	
	self.samCalories = ko.observable('');
	self.samWater = ko.observable('');
	self.samFat = ko.observable('');
	self.samCarb = ko.observable('');
	self.samProtein = ko.observable('');
	self.note = ko.observable('');
	self.backupnote = ko.observable('');
	self.consumedCalories = ko.observable('');
	self.leftCalories = ko.observable('');
	self.leftWater = ko.observable('');
	self.leftFat = ko.observable('');
	self.leftCarb = ko.observable('');
	self.leftProtein = ko.observable('');

	self.remain = ko.observable('');

	self.morning = ko.observable(0);
	self.lunch = ko.observable(0);
	self.snack = ko.observable(0);
	self.dinner = ko.observable(0);

	self.month = ko.observable();
	self.date = ko.observable();
	self.newDate = ko.observable();
	
	self.calendarDate = ko.observable();
	self.day = ko.observable('');
	self.counterDay = ko.observable(0);
	self.counterDate = ko.observable(0);
	self.counterMonth = ko.observable(0);
	self.counterYear = ko.observable(0);
	self.counterMonYear = ko.observable(0);
	self.tolocalestring = ko.observable('el-GR');

	self.dayCalendar = ko.observable('');

	self.jan = ko.observable('Ιαν');
	self.feb = ko.observable('Φεβ');
	self.mar = ko.observable('Μαρ');
	self.apr = ko.observable('Απρ');
	self.may = ko.observable('Μαΐ');
	self.jun = ko.observable('Ιουν');
	self.jul = ko.observable('Ιουλ');
	self.aug = ko.observable('Αυγ');
	self.sep = ko.observable('Σεπ');
	self.oct = ko.observable('Οκτ');
	self.nov = ko.observable('Νοε');
	self.dec = ko.observable('Δεκ');

	self.mon = ko.observable('Δευ');
	self.tue = ko.observable('Τρί');
	self.wed = ko.observable('Τετ');
	self.thu = ko.observable('Πέμ');
	self.fri = ko.observable('Παρ');
	self.sat = ko.observable('Σάβ');
	self.sun = ko.observable('Κυρ');

	self.tempDay = ko.observable();
	self.tempDate = ko.observable();
	self.tempMonth = ko.observable();
	self.tempYear = ko.observable();
	self.initDate = ko.observable();
	self.initMonth = ko.observable();
	self.initYear = ko.observable();
	self.tempCalDate = ko.observable();
	self.tempCalMonth = ko.observable();
	self.tempCalYear = ko.observable();	
	self.initCalDate = ko.observable();
	self.initCalMonth = ko.observable();
	self.initCalYear = ko.observable();
	
	self.tempChangeDate = ko.observable();
	self.tempChangeMonth = ko.observable();
	self.tempChangeYear = ko.observable();

	self.initChangeMonth = ko.observable();
	self.initChangeYear = ko.observable();

	self.addFoodMsg = ko.observable('Το φαγητό προστέθηκε με επιτυχία!');
	self.updateFoodMsg = ko.observable('Το φαγητό ενημερώθηκε με επιτυχία!');
	self.deleteFoodMsg = ko.observable('Το φαγητό διαγράφτηκε με επιτυχία!');
	self.noteMsg = ko.observable('Η σημείωση ενημερώθηκε με επιτυχία!');
	self.waterMsg = ko.observable('Το νερό που κατανάλωσε ενημερώθηκε με επιτυχία!');
	self.addFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την προσθήκη του φαγητού...');
	self.updateFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την ενημέρωση του φαγητού...');
	self.deleteFoodErrorMsg = ko.observable('Κάτι πήγε λάθος με την διαγραφή του φαγητού...');
	self.noteErrorMsg = ko.observable('Κάτι πήγε λάθος με την ενημέρωση της σημείωσης...');
	self.waterErrorMsg = ko.observable('Κάτι πήγε λάθος με την ενημέρωση του νερού που κατανάλωσε...');
	self.successMsg = ko.observable('');
	self.kcal = ko.observable('Θερμίδες Στόχος');
	self.consumed = ko.observable('Καταναλώθηκαν');
	self.noteWord = ko.observable('Σημείωση');
	self.morningWord = ko.observable('Πρωινό');
	self.lunchWord = ko.observable('Μεσημεριανό');
	self.snackWord = ko.observable('Σνακ');//Γεύματα
	self.dinnerWord = ko.observable('Βραδινό');
	self.waterWord = ko.observable('Νερό');
	self.leftWord = ko.observable('Μένουν');
	self.extraWord = ko.observable('Παραπάνω');
	self.left = ko.observable(self.leftWord());
	self.fatWord = ko.observable('Λίπος');
	self.fiberWord = ko.observable('Φυτικές Ίνες');
	self.carbWord = ko.observable('Υδατάνθρακες');
	self.proteinWord = ko.observable('Πρωτεΐνες');
	self.sugarWord = ko.observable('Σάκγχαρα');
	self.saturatedWord = ko.observable('Κορεσμένα');
	self.unsaturatedWord = ko.observable('Ακόρεστα');
	self.bitaminsWord = ko.observable('Βιταμίνη D');
	self.cancelWord = ko.observable('Ακύρωση');
	self.okWord = ko.observable('Εντάξει');
	self.addWord = ko.observable('Προσθήκη');
	self.addfoodWord = ko.observable('Προσθέστε Φαγητό');
	self.yesWord = ko.observable('Ναι');
	self.noWord = ko.observable('Όχι');
	self.halfGlassWord = ko.observable('1/2 Ποτήρι');
	self.glassWord = ko.observable('Ποτήρι');
	self.bottleWord = ko.observable('Μπουκάλι');
	self.totalConsumed = ko.observable('Συνολικά καταναλώθηκαν');
	self.caloriesWord = ko.observable('θερμίδες');
	var mor = 0, lun = 0, sna = 0, din = 0;
	self.morWord = ko.observable(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${mor}</span> ${self.caloriesWord()}`);
	self.lunWord = ko.observable(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${lun}</span> ${self.caloriesWord()}`);
	self.snaWord = ko.observable(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${sna}</span> ${self.caloriesWord()}`);
	self.dinWord = ko.observable(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${din}</span> ${self.caloriesWord()}`);
	self.watWord = ko.observable(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.water()}</span> ml`);
	self.quantity = ko.observable('Ποσότητα (ml)');
	self.waterConsumed = ko.observable('Κατανάλωση Νερού');
	self.warningDeleteMsg = ko.observable('Είστε σίγουροι ότι θέλετε να διαγράψετε το φαγητό');
	self.deleteWord = ko.observable('Διαγραφή');
	self.questionMark = ko.observable(';');
	self.seeMeals = ko.observable('Καθημερινά Στατιστικά');//Δες όλα τα Γεύματα //Σύνοψη
	self.title = ko.observable('Αρχική | Nutrition');
	self.todayDate = ko.observable('');
	self.todayWord = ko.observable('Σήμερα');
	self.todayFull = ko.observable('');
	
	var backupCalories = 0, backupProtein = 0, backupCarb = 0, backupFat = 0, backupFiber = 0, backupSaturated = 0, backupUnsaturated = 0, backupSugar = 0, backupBitamins = 0, backupportion = 0;
	var backupPrevCalories = 0, backupPrevProtein = 0, backupPrevCarb = 0, backupPrevFat = 0, backupPrevFiber = 0, backupPrevSaturated = 0, backupPrevUnsaturated = 0, backupPrevSugar = 0, backupPrevBitamins = 0, backupPrevPortion = 0;
	var backupPrevNumber = 0;
	let lip=0, udat=0, prot=0;
	let progressValue = 0;
	var myContent;
	const date = new Date();

	let idmorning = document.getElementById('morning');
	let idlunch = document.getElementById('lunch');
	let idmeal = document.getElementById('meal');
	let iddinner = document.getElementById('dinner');

	self.countWater = ko.observable('').extend({
		numeric: self.numeric()
	});

	tinymce.init({
		selector: 'textarea#mytextarea'
	});
	myContent = tinymce.activeEditor.getContent();

	self.mon = ko.observable('');

	self.isOpen = ko.observable(false);

	self.open = function() {
		self.isOpen(!self.isOpen());
	};

	self.thermides = function(start, end) {
		//console.log(start+","+end);
		let progressBar = document.querySelector(".summary-bottom");
		//let progressValue = 0;
		let progressEndValue = (start/end)*100;
		let speed = 2;

		let progress = setInterval(() => {
			if(progressValue < progressEndValue) {
				progressValue+=0.5;

				if(progressValue >= progressEndValue) {
					clearInterval(progress);
				}
			} else {
				progressValue-=0.5;

				if(progressValue <= 0) {
					clearInterval(progress);
				}
			}
	
			progressBar.style.background = `conic-gradient(
				#0C6170 ${progressValue * 3.6}deg,
				#a6cdd4 ${progressValue * 3.6}deg
			)`;
		}, speed);
		
	}; 
	
	self.lipos = function(start, end) {
		//console.log(start+","+end);
		let root = document.documentElement; 
		let value = (start*self.max())/end;
 		let speed = 10;

		if(value > self.max()) {
			value = self.max();
		} else if(value <= 0) {
			value = 0;
		}
		
		let progress = setInterval(() => {
			if(lip < value) {
				lip+=0.5;
				root.style.setProperty('--end-value', lip + 'rem');
				if(lip >= value) {
					lip = value;
					clearInterval(progress);
				}
			} else if(lip > value) {
				lip-=0.5;
				root.style.setProperty('--end-value', lip + 'rem');
				if(lip <= value) {
					lip = value;
					clearInterval(progress);
				}
			} else {
				clearInterval(progress);
			}
		}, speed);
	};

	self.udatanthrakes = function(start, end) {
		//console.log(start+","+end);
		let root = document.documentElement;
		let value = (start*self.max())/end;
		let speed = 10;
		
		if(value > self.max()) {
			value = self.max();
		} else if(value <= 0) {
			value = 0;
		}
		
		let progress = setInterval(() => {
			if(udat < value) {
				udat+=0.5;
				root.style.setProperty('--end-value-blue', udat + 'rem');
				if(udat >= value) {
					udat = value;
					clearInterval(progress);
				}
			} else if(udat > value) {
				udat-=0.5;
				root.style.setProperty('--end-value-blue', udat + 'rem');
				if(udat <= value) {
					udat = value;
					clearInterval(progress);
				}
			} else {
				clearInterval(progress);
			}
		}, speed);
	};

	self.proteines = function(start, end) {
		//console.log(start+","+end);
		let root = document.documentElement;
		let value = (start*self.max())/end;
		let speed = 10;

		if(value > self.max()) {
			value = self.max();
		} else if(value <= 0) {
			value = 0;
		}
		
		let progress = setInterval(() => {
			if(prot < value) {
				prot+=0.5;
				root.style.setProperty('--end-value-red', prot + 'rem');
				if(prot >= value) {
					prot = value;
					clearInterval(progress);
				}
			} else if(prot > value) {
				prot-=0.5;
				root.style.setProperty('--end-value-red', prot + 'rem');
				if(prot <= value) {
					prot = value;
					clearInterval(progress);
				}
			} else {
				clearInterval(progress);
			}
		}, speed);
	};

	self.setSelectedWater = function(value) {
		document.getElementById('glass').value = value;
		self.switch('modalWater');
	};

	self.switch = function(id) {
		var modal = document.getElementById(id);
		
		if(modal.style.display == " " || modal.style.display == "none"|| modal.style.display == "") {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
	};

	self.submitWater = function() {
		if(!self.countWater.numericError()) {
			let o = {
				username: self.username(),
				newVal: self.roundOff(self.countWater(), 2),
				date: self.fullDate()
			}

			$.post('./php/updatewatersummary.php', o, function(data) {
				if(data.status == "ok") {
					self.water(self.roundOff(self.countWater(), 2));
					self.backupWater(self.water());
					self.leftWater(self.water());
					self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
					self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
					self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
					self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
					self.watWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(self.water(), 2)}</span> ml`);
					self.successMsg(self.waterMsg());
				} else {
					self.successMsg(self.waterErrorMsg());
					//console.log("Something Wrong water...");
				}
				self.switch('modalWater');
				self.switch('modalSuccessMsg');
			});
		} else {
			//console.log('Input is not a number...');
		}
	};

	self.cancelWater = function() {
		self.water(self.backupWater());
		self.switch('modalWater');
	};

	self.increaseWater = function() {
		let name;
		name = document.getElementById('glass').value;

		if(self.countWater() == '') {
			self.countWater(0);
		}

		if(name == 'halfGlass') {
			self.countWater(parseInt(self.countWater()) + self.halfGlass());
		} else if(name == 'glass') {
			self.countWater(parseInt(self.countWater()) + self.glass());
		} else {
			self.countWater(parseInt(self.countWater()) + self.bottle());
		}
	};

	self.decreaseWater = function() {
		let name;
		name = document.getElementById('glass').value;
		if(self.countWater() == '') {
			self.countWater('0');
		} else {
			if(name == 'halfGlass') {
				self.countWater(parseInt(self.countWater()) - self.halfGlass());
			} else if(name == 'glass') {
				self.countWater(parseInt(self.countWater()) - self.glass());
			} else {
				self.countWater(parseInt(self.countWater()) - self.bottle());
			}
			
			if(self.countWater() <= 0) {
				self.countWater('0');
			}
		}
	};

	self.stopProp = function(event) {
		event.stopPropagation();
	};
	
	self.changeDay = function(fullDate) {
		self.switch('modalLoad');
		mor = 0;
		lun = 0; 
		sna = 0; 
		din = 0;
		wat = 0;
		self.morning(0);
		self.lunch(0);
		self.snack(0);
		self.dinner(0);
		self.morningArray([]);
		self.lunchArray([]);
		self.snackArray([]);
		self.dinnerArray([]);
		var o = {
			username: self.username(),
			fullDate: fullDate,
			numLang: self.sendLang()
		}

			//lang: self.lang(),
		$.post('./php/getfoodinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.fillMorningArray(el);
					
				});
				
				$.post('./php/getgoalsinfo.php', o, function(data) {
					if(data.status == "ok") {
						var tmp = data.data.map(function(el) { 
							//console.log(el.startProtein);
							self.water(parseInt(el.startWater));
							self.backupWater(self.water());
							self.countWater(self.water());
							self.note(el.note);
							self.samCalories(el.calories);
							self.samWater(el.water);
							self.samFat(el.fat);
							self.samCarb(el.carb);
							self.samProtein(el.protein);
							self.consumedCalories(el.startCalories);
							self.leftCalories(self.roundOff(Math.abs(el.calories - el.startCalories), 2));
							self.leftWater(el.startWater);
							self.leftFat(el.startFat);
							self.leftCarb(el.startCarb);
							self.leftProtein(el.startProtein);
							if(parseFloat(el.calories) < parseFloat(el.startCalories)) {
								self.left(self.extraWord());
							} else {
								self.left(self.leftWord());
							}
							self.thermides(el.startCalories, el.calories);
							self.lipos(el.startFat, el.fat);
							self.udatanthrakes(el.startCarb, el.carb);
							self.proteines(el.startProtein, el.protein);
							self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
							self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
							self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
							self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
							self.watWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(self.water(), 2)}</span> ml`);
						});
						tinymce.activeEditor.setContent(self.note());
						myContent = tinymce.activeEditor.getContent({format: "text"});
						self.note(myContent);
						self.backupnote(myContent);
						setTimeout(function() { 
							self.switch('modalLoad');
						}, 1000);
						
					} else {
						console.log("Something Wrong goal...");
					}
				});
			} else {
				console.log("Something Wrong food...");
			}
		});
	};

//-------------------------- CALENDAR --------------------------
	self.setCalendarDate = function() {
		var yyyy, mm, dd;
		self.todayDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
		self.todayFull(date.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		self.date(self.todayWord());
		self.calendarDate(self.todayFull());

		self.tempDate(date.getDate());
		self.initDate(date.getDate());
		self.tempCalDate(date.getDate());
		self.initCalDate(date.getDate());

		self.tempMonth(date.getMonth());
		self.tempYear(date.getFullYear());
		self.initMonth(date.getMonth());
		self.initYear(date.getFullYear());
		self.tempCalMonth(date.getMonth());
		self.tempCalYear(date.getFullYear());
		self.initCalMonth(date.getMonth());
		self.initCalYear(date.getFullYear());

		self.tempChangeDate(date.getDate());
		self.tempChangeMonth(date.getMonth());
		self.tempChangeYear(date.getFullYear());
		
		self.initChangeMonth(date.getMonth());
		self.initChangeYear(date.getFullYear());

		yyyy = date.getFullYear();
		mm = date.getMonth() + 1;
		if(mm < 10) {
			mm = '0' + mm;
		}
		dd = date.getDate();
		if(dd < 10) {
			dd = '0' + dd;
		}
		self.fullDate(yyyy+"-"+mm+"-"+dd);
		date.setDate(1);
	};

	self.nextDay = function() {
		self.counterDate(self.counterDate() + 1);
		var tomorrow = new Date(self.tempYear(), self.tempMonth(), self.tempDate() + self.counterDate());
		var dd, mm, yyyy;		
		
		if(self.todayDate().getFullYear() == tomorrow.getFullYear() && self.todayDate().getMonth() == tomorrow.getMonth() && self.todayDate().getDate() == tomorrow.getDate()) {
			self.date(self.todayWord());
		} else {
			self.date(tomorrow.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		}
		
		self.initCalDate(tomorrow.getDate());
		self.initCalMonth(tomorrow.getMonth());
		self.initCalYear(tomorrow.getFullYear());

		yyyy = tomorrow.getFullYear();
		
		mm = tomorrow.getMonth() + 1;
		if(mm < 10) {
			mm = '0' + (tomorrow.getMonth() + 1);
		}
		
		dd = tomorrow.getDate();
		if(dd < 10) {
			dd = '0' + tomorrow.getDate();
		}
		
		self.fullDate(yyyy+"-"+mm+"-"+dd); 
		self.changeDay(self.fullDate());
	};

	self.prevDay = function() {
		self.counterDate(self.counterDate() - 1);
		var tomorrow = new Date(self.tempYear(), self.tempMonth(), self.tempDate() + self.counterDate());
		var dd, mm, yyyy;

		if(self.todayDate().getFullYear() == tomorrow.getFullYear() && self.todayDate().getMonth() == tomorrow.getMonth() && self.todayDate().getDate() == tomorrow.getDate()) {
			self.date(self.todayWord());
		} else {
			self.date(tomorrow.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		}
		
		self.initCalDate(tomorrow.getDate());
		self.initCalMonth(tomorrow.getMonth());
		self.initCalYear(tomorrow.getFullYear());

		yyyy = tomorrow.getFullYear();

		mm = tomorrow.getMonth() + 1;
		if(mm < 10) {
			mm = '0' + (tomorrow.getMonth() + 1);
		}

		dd = tomorrow.getDate();
		if(dd < 10) {
			dd = '0' + tomorrow.getDate();
		}

		self.fullDate(yyyy+"-"+mm+"-"+dd); 
		self.changeDay(self.fullDate());
	};

	self.previous = function() {
		self.counterMonYear(self.counterMonYear() - 1);
		date.setMonth(date.getMonth() - 1);
		self.tempChangeMonth(date.getMonth());
		self.tempChangeYear(date.getFullYear());
		self.initChangeMonth(date.getMonth());
		self.initChangeYear(date.getFullYear());
		self.renderCalendar();
	};

	self.next = function() {
		self.counterMonYear(self.counterMonYear() + 1);
		date.setMonth(date.getMonth() + 1);
		self.tempChangeMonth(date.getMonth());
		self.tempChangeYear(date.getFullYear());
		self.initChangeMonth(date.getMonth());
		self.initChangeYear(date.getFullYear());
		self.renderCalendar();
	};

	self.renderCalendar = function() {
		self.month(date.toLocaleString(self.tolocalestring(), {month: "long", year: "numeric"}));
		
		const lastDay = new Date(self.tempChangeYear(), self.tempChangeMonth() + 1, 0).getDate();
		const prevLastDay = new Date(self.tempChangeYear(), self.tempChangeMonth(), 0).getDate();

		const firstDayIndex = date.getDay();
		const lastDayIndex = new Date(self.tempChangeYear(), self.tempChangeMonth() + 1, 0).getDay();
		var nextDays;

		if(lastDayIndex <= 1) {
			nextDays = 7 - lastDayIndex - 1;
		} else {
			nextDays = 7 + (7 - lastDayIndex - 1);
		}
		
		self.numofdaysArray([]);

		for(let j=firstDayIndex; j>0; j--) {
			self.numofdaysArray.push(new NumOfDays({class1: "prev-date", dateNum: prevLastDay - j + 1, click: "", attr: ""}));
		}
		
		for(let i=1; i<=lastDay; i++) {
			 
			if(i === self.tempCalDate() && self.tempCalMonth() === date.getMonth() && self.tempCalYear() === date.getFullYear()) {
				self.numofdaysArray.push(new NumOfDays({class1: "today", dateNum: i, click: "calendarNumbers", attr: i}));
			} else if(i === self.initDate() && date.getMonth() === self.initMonth() && date.getFullYear() === self.initYear()) {
				self.numofdaysArray.push(new NumOfDays({class1: "choosedate", dateNum: i, click: "calendarNumbers", attr: i}));
			} else {
				self.numofdaysArray.push(new NumOfDays({class1: "", dateNum: i, click: "calendarNumbers", attr: i}));
			}
		}
		
		self.counterDay(self.counterDay() + lastDay);

		for(let k=1; k<=nextDays; k++) {
			self.numofdaysArray.push(new NumOfDays({class1: "next-date", dateNum: k, click: "", attr: ""}));
		}
	};

	self.cancelCalendar = function() {
		var cancel = new Date(self.initYear(), self.initMonth(), self.initDate());
		self.calendarDate(cancel.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		var currentDate = new Date(self.initCalYear(), self.initCalMonth(), self.initCalDate());
		//self.date(currentDate.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		if(self.todayDate().getFullYear() == currentDate.getFullYear() && self.todayDate().getMonth() == currentDate.getMonth() && self.todayDate().getDate() == currentDate.getDate()) {
			self.date(self.todayWord());
		} else {
			self.date(currentDate.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		}
/* 		self.initCalDate(tomorrow.getDate());
		self.initCalMonth(tomorrow.getMonth());
		self.initCalYear(tomorrow.getFullYear()); */
		self.month(cancel.toLocaleString(self.tolocalestring(), {month: "long", year: "numeric"}));
		date.setMonth(date.getMonth() - self.counterMonYear());

		self.counterMonYear(0);
		
		if(self.initYear() !== self.tempYear() || self.initMonth() !== self.tempMonth() || self.initDate() !== self.tempDate()) {
			self.counterDate(0);
			self.tempYear(self.initCalYear());
			self.tempMonth(self.initCalMonth());
			self.tempDate(self.initCalDate());
		} else {
			self.tempYear(self.initYear());
			self.tempMonth(self.initMonth());
			self.tempDate(self.initDate());			
		}


		self.initChangeMonth(self.initMonth());
		self.initChangeYear(self.initYear());

		self.tempCalYear(self.initYear());
		self.tempCalMonth(self.initMonth());
		self.tempCalDate(self.initDate());

		self.tempChangeYear(self.tempCalYear());
		self.tempChangeMonth(self.tempCalMonth());

		self.switch('modalCalendar');
	};

	self.submitCalendar = function() {
		self.counterDate(0);
		var dd, mm, yyyy;
		var submit = new Date(self.initYear(), self.initMonth(), self.initDate());

		self.calendarDate(submit.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		self.month(submit.toLocaleString(self.tolocalestring(), {month: "long", year: "numeric"}));
		date.setMonth(date.getMonth() - self.counterMonYear());

		self.counterMonYear(0);

		self.tempYear(self.tempCalYear());
		self.tempMonth(self.tempCalMonth());
		self.tempDate(self.tempCalDate());
		
		self.initCalYear(self.tempYear());
		self.initCalMonth(self.tempMonth());
		self.initCalDate(self.tempDate());

		self.tempCalYear(self.initYear());
		self.tempCalMonth(self.initMonth());
		self.tempCalDate(self.initDate());
		
		self.tempChangeYear(self.tempCalYear());
		self.tempChangeMonth(self.tempCalMonth());
		
		self.initChangeMonth(self.initMonth());
		self.initChangeYear(self.initYear());

		self.switch('modalCalendar');

		var tomorrow = new Date(self.tempYear(), self.tempMonth(), self.tempDate() + self.counterDate());//
		
		//self.date(tomorrow.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		if(self.todayDate().getFullYear() == tomorrow.getFullYear() && self.todayDate().getMonth() == tomorrow.getMonth() && self.todayDate().getDate() == tomorrow.getDate()) {
			self.date(self.todayWord());
		} else {
			self.date(tomorrow.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));
		}
		yyyy = tomorrow.getFullYear();
		mm = tomorrow.getMonth() + 1;
		if(mm < 10) {
			mm = '0' + (tomorrow.getMonth() + 1);
		}

		dd = tomorrow.getDate();
		if(dd < 10) {
			dd = '0' + tomorrow.getDate();
		}		

		self.fullDate(yyyy+"-"+mm+"-"+dd); 
		self.changeDay(self.fullDate());
	};

	function NumOfDays(data) {
		var num = this;
		num.class1 = ko.observable(data.class1);
		num.dateNum = ko.observable(data.dateNum);
		num.click = ko.observable(data.click);
		num.attr = ko.observable(data.attr);

		num.click.subscribe(function(newVal) {
			if(data.click === 'calendarNumbers') {
				self.tempCalYear(self.initChangeYear());
				self.tempCalMonth(self.initChangeMonth());
				self.tempCalDate(data.attr);

				var currentDate = new Date(self.tempCalYear(), self.tempCalMonth(), self.tempCalDate());
				self.calendarDate(currentDate.toLocaleString(self.tolocalestring(), {weekday: "short", day: "numeric", month: "short", year: "numeric"}));

				self.renderCalendar();
			} else {
				//console.log('NO');
			}
		});
	};


	self.updateNote = function() {
		myContent = tinymce.activeEditor.getContent({format: "text"});
		self.note(myContent);
		self.backupnote(myContent);
		//tinymce.activeEditor.setContent(self.note());
		
		let o = {
			username:  self.username(),
			newVal: self.note(),
			date: self.fullDate()
		}
		
		$.post('./php/updatenote.php', o, function(data) {
			if(data.status == "ok") {
				self.successMsg(self.noteMsg());
			} else {
				self.successMsg(self.noteErrorMsg());
				//console.log('Κάτι πήγε λάθος...');
			}
			self.switch('modalNote');
			self.switch('modalSuccessMsg');     
		});	
	};

	self.cancelNote = function() {
		self.switch('modalNote');
		self.note(self.backupnote());
		tinymce.activeEditor.setContent(self.note());
	};

	self.fillDashboardArray = function() {
		var o = {
			name: self.home(), 
			icons: "fas fa-th-large",//img/stay-at-home.png
			redirect: "dashboard",
			activelabel: "active",
			title: self.home()
		}

		var o1 = {
			name: self.biometrics(), 
			icons: "fa-solid fa-screwdriver-wrench",//img/tools-and-utensils.png
			redirect: "biometrics",
			activelabel: "",
			title: self.biometrics()
		}

		var o2 = {
			name: self.measurements(), 
			icons: "fa-solid fa-weight-scale",//img/scale1.png
			redirect: "measurements",
			activelabel: "",
			title: self.measurements()
		}

		var o3 = {
			name: self.statistics(), 
			icons: "fas fa-chart-pie",//img/fraction.png
			redirect: "statistics",
			activelabel: "",
			title: self.statistics()
		}

		var o4 = {
			name: self.createfood(), 
			icons: "",//las la-drumstick-bite
			redirect: "settings",
			activelabel: "",
			title: self.createfood()
		}

		var o5 = {
			name: self.addfood(), 
			icons: "cutlery fa-solid fa-utensils",//img/restaurant_plate.png
			redirect: "addfood",
			activelabel: "",
			title: self.addfood()
		}

		var o6 = {
			name: self.settings(), 
			icons: "fas fa-cog",//img/settings.png
			redirect: "settings",
			activelabel: "",
			title: self.settings()
		}

		var o7 = {
			name: self.logsout(), 
			icons: "fas fa-sign-out-alt",//img/exit1.png
			redirect: "logout",
			activelabel: "",
			title: self.logsout()
		}

		var o8 = {
			name: self.panel(),
			icons: "fa-solid fa-headset",//img/admin.png
			redirect: "panel",
			activelabel: "",
			title: self.panel()
		}

		var o9 = {
			name: self.nameUser(),
			icons: "fa-solid fa-user",//
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

	self.googleTranslateElementInit = function() {
		new google.translate.TranslateElement({
			pageLanguage: 'el',
			includedLanguages:'ga'
		}, 'google_translate_element');
		setTimeout(function(){
			var select = document.querySelector('select.goog-te-combo');
			select.value = "ga"; 
			select.dispatchEvent(new Event('change'));
		},1000)
	  };

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
					self.categoryUser(self.user());
				}
				if(data.data.idUser && data.data.nameUser) {
					self.idUser(data.data.idUser);
					self.nameUser(data.data.nameUser);
				}
				self.dateNames();
				self.setCalendarDate();
				self.renderCalendar();

				$.post('./php/getfoodinfo.php', {username: self.username(), numLang: self.sendLang()}, function(data) {
					if(data.status == "ok") {
						self.fillDashboardArray();

						var tmp = data.data.map(function(el) { 
							self.fillMorningArray(el);
						});
						
						$.post('./php/getgoalsinfo.php', {username: self.username()}, function(data) {
							if(data.status == "ok") {
								var tmp = data.data.map(function(el) { 
									//console.log(el.startProtein);
									self.water(parseInt(el.startWater));
									self.backupWater(self.water());
									self.countWater(self.water());
									self.note(el.note);
									self.samCalories(el.calories);
									self.samWater(el.water);
									self.samFat(el.fat);
									self.samCarb(el.carb);
									self.samProtein(el.protein);
									self.consumedCalories(el.startCalories);
									self.leftCalories(self.roundOff(Math.abs(el.calories - el.startCalories), 2));
									self.leftWater(el.startWater);
									self.leftFat(el.startFat);
									self.leftCarb(el.startCarb);
									self.leftProtein(el.startProtein);
									if(parseFloat(el.calories) <= parseFloat(el.startCalories)) {
										self.left(self.extraWord());
									} else {
										self.left(self.leftWord());
									}
									self.thermides(el.startCalories, el.calories);
									self.lipos(el.startFat, el.fat);
									self.udatanthrakes(el.startCarb, el.carb);
									self.proteines(el.startProtein, el.protein);
									self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
									self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
									self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
									self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
									self.watWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(self.water(), 2)}</span> ml`);
								});
								tinymce.activeEditor.setContent(self.note());
								myContent = tinymce.activeEditor.getContent({format: "text"});
								self.note(myContent);
								self.backupnote(myContent);
								let mceu_11 = document.getElementById('mceu_11');
								mceu_11.style.borderWidth = '0px';
							} else {
								console.log("Something Wrong goal...");
							}
						});
					} else {
						console.log("Something Wrong food...");
					}
				});
			} else if(data.status == "error") {
				self.logout();
			}         
		});	
	};

	self.dateNames = function() {
		self.months = ko.observableArray([
			{month: self.jan()},
			{month: self.feb()},
			{month: self.mar()},
			{month: self.apr()},
			{month: self.may()},
			{month: self.jun()},
			{month: self.jul()},
			{month: self.aug()},
			{month: self.sep()},
			{month: self.oct()},
			{month: self.nov()},
			{month: self.dec()},
		]);
		self.days = ko.observableArray([
			{day: self.mon()},
			{day: self.tue()},
			{day: self.wed()},
			{day: self.thu()},
			{day: self.fri()},
			{day: self.sat()},
			{day: self.sun()}
		]);
	};

	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		
		return Math.round(num * x) / x;
	};

	self.fillMorningArray = function(el) {
		var day = new Date(self.fullDate());
		self.newDate(day.toLocaleString(self.tolocalestring(), {day: "numeric", month: "numeric", year: "numeric"}));
		let type, hashText, imgHash;

		type = el.imgName.split(".");
		if(type == '') {
			type[0] = '';
			type[1] = '';
		}

		if(el.imgHash != '') {
			hashText = CryptoJS.HmacSHA256(el.imgName, el.imgHash);
			imgHash = hashText.toString(CryptoJS.enc.Hex);	
		} else {
			imgHash = type[0];
		}
		var o = {
			consumptionNumPortion: self.roundOff(parseFloat(el.portion)/parseFloat(el.defaultPortion), 3),
			inputNumPortion: self.roundOff(parseFloat(el.portion)/parseFloat(el.defaultPortion), 3),
			firstLetter: el.foodName.charAt(0).toUpperCase(),
			id: el.id,
			isFavourite: el.isFavourite,
			idFood: el.idFood,
			idNameOfDailyMeals: el.idNameOfDailyMeals,
			imgPath: el.imgPath,
			imgName: el.imgName,
			imgHash: imgHash,
			img: (el.imgPath + imgHash + '.' + type[1]),
			name: el.foodName,
			unitName: el.unitName,
			portion: self.roundOff(el.portion, 2),
			quantity: self.roundOff(el.defaultPortion, 2),
			prevCalories: self.roundOff(el.calories, 2),
			prevFat: self.roundOff(el.fat, 2),
			prevFiber: self.roundOff(el.fiber, 2),
			prevCarb: self.roundOff(el.carb, 2),
			prevProtein: self.roundOff(el.protein, 2),
			prevSugar: self.roundOff(el.sugar, 2),
			prevSaturated: self.roundOff(el.saturated, 2),
			prevUnsaturated: self.roundOff(el.unsaturated, 2),
			prevBitamins: self.roundOff(el.bitamins, 2),
			prevPortion: self.roundOff(el.portion, 2),
			defaultCalories: self.roundOff(el.defaultCalories, 2),
			defaultProtein: self.roundOff(el.defaultProtein, 2),
			defaultFat: self.roundOff(el.defaultFat, 2),
			defaultFiber: self.roundOff(el.defaultFiber, 2),
			defaultCarb: self.roundOff(el.defaultCarb, 2),
			defaultSaturated: self.roundOff(el.defaultSaturated, 2),
			defaultUnsaturated: self.roundOff(el.defaultUnsaturated, 2),
			defaultSugar: self.roundOff(el.defaultSugar, 2),
			defaultBitamins: self.roundOff(el.defaultBitamins, 2),
			calories: self.roundOff(el.calories, 2),
			fat: self.roundOff(el.fat, 2),
			fiber: self.roundOff(el.fiber, 2),
			carb: self.roundOff(el.carb, 2),
			protein: self.roundOff(el.protein, 2),
			sugar: self.roundOff(el.sugar, 2),
			saturated: self.roundOff(el.saturated, 2),
			unsaturated: self.roundOff(el.unsaturated, 2),
			bitamins: self.roundOff(el.bitamins, 2),
			fullDate: self.newDate(),
			fatWord: self.fatWord(),
			fiberWord: self.fiberWord(),
			carbWord: self.carbWord(),
			proteinWord: self.proteinWord(),
			sugarWord: self.sugarWord(),
			saturatedWord: self.saturatedWord(),
			unsaturatedWord: self.unsaturatedWord(),
			bitaminsWord: self.bitaminsWord()
		}

		if(el.idNameOfDailyMeals == 1) {
			mor += parseFloat(el.calories);
			self.morning(self.roundOff(mor, 2));
			self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
			self.morningArray.push(new Day(o));
		} else if(el.idNameOfDailyMeals == 2) {
			lun += parseFloat(el.calories);
			self.lunch(self.roundOff(lun, 2));
			self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
			self.lunchArray.push(new Day(o));
		} else if(el.idNameOfDailyMeals == 3) {
			sna += parseFloat(el.calories);
			self.snack(self.roundOff(sna, 2));
			self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
			self.snackArray.push(new Day(o));
		} else {
			din += parseFloat(el.calories);
			self.dinner(self.roundOff(din, 2));				
			self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
			self.dinnerArray.push(new Day(o));
		}
	};

	self.changeLanguage = function() {
		if(self.lang() === 'en') {
			self.home('Home');
			self.biometrics('Biometrics');
			self.measurements('Measurements');
			self.statistics('Charts');
			self.createfood('Create Food');
			self.addfood('Add Food');
			self.settings('Settings');
			self.logsout('Logout');
			self.tolocalestring('en-GB');//en-US

			self.numeric('* Only numbers are allowed');
			self.isEmptyField('* The field is empty!');

			self.jan('Jan');
			self.feb('Feb');
			self.mar('Mar');
			self.apr('Apr');
			self.may('May');
			self.jun('Jun');
			self.jul('Jul');
			self.aug('Aug');
			self.sep('Sep');
			self.oct('Oct');
			self.nov('Nov');
			self.dec('Dec');

			self.mon('Mon');
			self.tue('Tue');
			self.wed('Wed');
			self.thu('Thu');
			self.fri('Fri');
			self.sat('Sat');
			self.sun('Sun');

			self.addFoodMsg('The food added successfully!');
			self.updateFoodMsg('The food updated successfully!');
			self.deleteFoodMsg('The food deleted successfully!');
			self.noteMsg('The note updated successfully!');
			self.waterMsg('The consumed water updated successfully!');
			self.addFoodErrorMsg('Somethings wrong with adding the food...');
			self.updateFoodErrorMsg('Somethings wrong with updating the food...');
			self.deleteFoodErrorMsg('Somethings wrong with deleting the food...');
			self.noteErrorMsg('Somethings wrong with updating the note...');
			self.waterErrorMsg('Somethings wrong with updating the consumed water...');
			self.kcal('Calories Goal');
			self.consumed('Consumed');
			self.noteWord('Note');
			self.morningWord('Breakfast');
			self.lunchWord('Lunch');
			self.snackWord('Snack');
			self.dinnerWord('Dinner');
			self.waterWord('Water');
			self.leftWord('Remaining');
			self.extraWord('Extra');
			self.left(self.leftWord());
			self.fatWord('Fat');
			self.fiberWord('Fiber');
			self.carbWord('Carb');
			self.proteinWord('Protein');
			self.sugarWord('Sugar');
			self.saturatedWord('Saturated');
			self.unsaturatedWord('Unsaturated');
			self.bitaminsWord('Bitamin D');
			self.cancelWord('Cancel');
			self.okWord('Submit');
			self.addWord('Add');
			self.addfoodWord('Add Food');
			self.yesWord('Yes');
			self.noWord('No');
			self.halfGlassWord('1/2 Glass');
			self.glassWord('Glass');
			self.bottleWord('Bottle');
			self.totalConsumed('Total consumed');
			self.caloriesWord('calories');
			self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
			self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
			self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
			self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
			self.watWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(self.water(), 2)}</span> ml`);
			self.quantity('Quantity (ml)');
			self.waterConsumed('Water Consume');
			self.warningDeleteMsg('Are you sure you want to delete the food');
			self.questionMark('?');
			self.deleteWord('Delete');
			self.seeMeals('Daily Stats');//See all meals //Summary
			self.todayWord('Today');
			self.title('Home | Nutrition');
			self.panel('Admin Panel');

			self.flag('img/greece.png');
			self.sendLang(1);
		} else if(self.lang() === 'gr') {
			self.home('Αρχική');
			self.biometrics('Βιομετρικά');
			self.measurements('Μετρήσεις');
			self.statistics('Γραφήματα');
			self.createfood('Δημιουργία Φαγητού');
			self.addfood('Προσθήκη Φαγητού');
			self.settings('Ρυθμίσεις');
			self.logsout('Αποσύνδεση');
			self.tolocalestring('el-GR');

			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.isEmptyField('* Το πεδίο είναι κενό!');

			self.jan('Ιαν');
			self.feb('Φεβ');
			self.mar('Μαρ');
			self.apr('Απρ');
			self.may('Μαΐ');
			self.jun('Ιουν');
			self.jul('Ιουλ');
			self.aug('Αυγ');
			self.sep('Σεπ');
			self.oct('Οκτ');
			self.nov('Νοε');
			self.dec('Δεκ');

			self.mon('Δευ');
			self.tue('Τρί');
			self.wed('Τετ');
			self.thu('Πέμ');
			self.fri('Παρ');
			self.sat('Σάβ');
			self.sun('Κυρ');

			self.addFoodMsg('Το φαγητό προστέθηκε με επιτυχία!');
			self.updateFoodMsg('Το φαγητό ενημερώθηκε με επιτυχία!');
			self.deleteFoodMsg('Το φαγητό διαγράφτηκε με επιτυχία!');
			self.noteMsg('Η σημείωση ενημερώθηκε με επιτυχία!');
			self.waterMsg('Το νερό που κατανάλωσε ενημερώθηκε με επιτυχία!');
			self.addFoodErrorMsg('Κάτι πήγε λάθος με την προσθήκη του φαγητού...');
			self.updateFoodErrorMsg('Κάτι πήγε λάθος με την ενημέρωση του φαγητού...');
			self.deleteFoodErrorMsg('Κάτι πήγε λάθος με την διαγραφή του φαγητού...');
			self.noteErrorMsg('Κάτι πήγε λάθος με την ενημέρωση της σημείωσης...');
			self.waterErrorMsg('Κάτι πήγε λάθος με την ενημέρωση του νερού που κατανάλωσε...');
			self.kcal('Θερμίδες Στόχος');
			self.consumed('Καταναλώθηκαν');
			self.noteWord('Σημείωση');
			self.morningWord('Πρωινό');
			self.lunchWord('Μεσημεριανό');
			self.snackWord('Σνακ');//Γεύματα
			self.dinnerWord('Βραδινό');
			self.waterWord('Νερό');
			self.leftWord('Μένουν');
			self.extraWord('Παραπάνω');
			self.left(self.leftWord());
			self.fatWord('Λίπος');
			self.fiberWord('Φυτικές Ίνες');
			self.carbWord('Υδατάνθρακες');
			self.proteinWord('Πρωτεΐνες');
			self.sugarWord('Σάκγχαρα');
			self.saturatedWord('Κορεσμένα');
			self.unsaturatedWord('Ακόρεστα');
			self.bitaminsWord('Βιταμίνη D');
			self.cancelWord('Ακύρωση');
			self.okWord('Εντάξει');
			self.addWord('Προσθήκη');
			self.addfoodWord('Προσθέστε Φαγητό');
			self.yesWord('Ναι');
			self.noWord('Όχι');
			self.halfGlassWord('1/2 Ποτήρι');
			self.glassWord('Ποτήρι');
			self.bottleWord('Μπουκάλι');
			self.totalConsumed('Συνολικά καταναλώθηκαν');
			self.caloriesWord('θερμίδες');
			self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
			self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
			self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
			self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
			self.watWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(self.water(), 2)}</span> ml`);
			self.quantity('Ποσότητα (ml)');
			self.waterConsumed('Κατανάλωση Νερού');
			self.warningDeleteMsg('Είστε σίγουροι ότι θέλετε να διαγράψετε το φαγητό');
			self.questionMark(';');
			self.deleteWord('Διαγραφή');
			self.seeMeals('Καθημερινά Στατιστικά');//Δες όλα τα Γεύματα //Σύνοψη
			self.todayWord('Σήμερα');
			self.title('Αρχική | Nutrition');
			self.panel('Admin Πάνελ');

			self.flag('img/united-kingdom.png');
			self.sendLang(2);
		}
	};

	self.in = function(obj, event) {
		self.calcFood();
	};

	self.calcFood = function() {
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

	self.foodAttr = function() {
		self.itemFoodArray().calories(backupPrevCalories);
		self.itemFoodArray().protein(backupPrevProtein);
		self.itemFoodArray().carb(backupPrevCarb);
		self.itemFoodArray().fat(backupPrevFat);
		self.itemFoodArray().fiber(backupPrevFiber);
		self.itemFoodArray().saturated(backupPrevSaturated);
		self.itemFoodArray().unsaturated(backupPrevUnsaturated);
		self.itemFoodArray().sugar(backupPrevSugar);
		self.itemFoodArray().bitamins(backupPrevBitamins);
		self.itemFoodArray().portion(backupPrevPortion);
		self.itemFoodArray().consumptionNumPortion(self.roundOff(backupPrevNumber, 3));
		self.itemFoodArray().inputNumPortion(self.roundOff(backupPrevNumber, 3));
		self.switch('modalEdit');
	};

	self.restoreFoodAttr = function() {
		self.foodAttr();
	}

	function Day(data) {
		var day = this;

		day.consumptionNumPortion = ko.observable(data.consumptionNumPortion);
		day.inputNumPortion = ko.observable(data.inputNumPortion);
		day.firstLetter = ko.observable(data.firstLetter);
		day.id = ko.observable(data.id);
		day.isFavourite = ko.observable(data.isFavourite);
		day.idFood = ko.observable(data.idFood);
		day.idNameOfDailyMeals = ko.observable(data.idNameOfDailyMeals);
		day.imgPath = ko.observable(data.imgPath);
		day.imgName = ko.observable(data.imgName);
		day.imgHash = ko.observable(data.imgHash);
		day.img = ko.observable(data.img);
		day.isFoodDetails = ko.observable(false);
		day.name = ko.observable(data.name);
		day.unitName = ko.observable(data.unitName);
		day.portion = ko.observable(data.portion);
		day.quantity = ko.observable(data.quantity);
		day.prevCalories = ko.observable(data.prevCalories);
		day.prevProtein = ko.observable(data.prevProtein);
		day.prevFat = ko.observable(data.prevFat);
		day.prevFiber = ko.observable(data.prevFiber);
		day.prevCarb = ko.observable(data.prevCarb);
		day.prevSaturated = ko.observable(data.prevSaturated);
		day.prevUnsaturated = ko.observable(data.prevUnsaturated);
		day.prevSugar = ko.observable(data.prevSugar);
		day.prevBitamins = ko.observable(data.prevBitamins);
		day.prevPortion = ko.observable(data.prevPortion);
		day.defaultCalories = ko.observable(data.defaultCalories);
		day.defaultProtein = ko.observable(data.defaultProtein);
		day.defaultFat = ko.observable(data.defaultFat);
		day.defaultFiber = ko.observable(data.defaultFiber);
		day.defaultCarb = ko.observable(data.defaultCarb);
		day.defaultSaturated = ko.observable(data.defaultSaturated);
		day.defaultUnsaturated = ko.observable(data.defaultUnsaturated);
		day.defaultSugar = ko.observable(data.defaultSugar);
		day.defaultBitamins = ko.observable(data.defaultBitamins);
		day.calories = ko.observable(data.calories);
		day.fat = ko.observable(data.fat);
		day.fiber = ko.observable(data.fiber);
		day.carb = ko.observable(data.carb);
		day.protein = ko.observable(data.protein);
		day.sugar = ko.observable(data.sugar);
		day.saturated = ko.observable(data.saturated);
		day.unsaturated = ko.observable(data.unsaturated);
		day.bitamins = ko.observable(data.bitamins);
		day.fullDate = ko.observable(data.fullDate);
		day.fatWord = ko.observable(data.fatWord);
		day.fiberWord = ko.observable(data.fiberWord);
		day.carbWord = ko.observable(data.carbWord);
		day.proteinWord = ko.observable(data.proteinWord);
		day.sugarWord = ko.observable(data.sugarWord);
		day.saturatedWord = ko.observable(data.saturatedWord);
		day.unsaturatedWord = ko.observable(data.unsaturatedWord);
		day.bitaminsWord = ko.observable(data.bitaminsWord);
		day.starFill = ko.observable('./img/star_black.png');
		day.backColor1 = ko.observable('white');
		day.backColor2 = ko.observable('white');
		day.backColor3 = ko.observable('white');
		day.backColor4 = ko.observable('white');
		day.color1 = ko.observable('#0C6170');
		day.color2 = ko.observable('#0C6170');
		day.color3 = ko.observable('#0C6170');
		day.color4 = ko.observable('#0C6170');
		day.addName = ko.observable('Προσθήκη');
		day.nutrientName = ko.observable('Θρεπτικές Ουσίες');
		day.proteinName = ko.observable('Πρωτεΐνες');
		day.carbName = ko.observable('Υδατάνθρακες');
		day.fatName = ko.observable('Λίπος');
		day.consumeQuantityName = ko.observable('Ποσότητα Κατανάλωσης');
		day.portionsName = ko.observable('Μερίδες');
		day.portionName = ko.observable('Μερίδα');
		day.quantityName = ko.observable('Ποσότητα');
		day.typeMealName = ko.observable('Επιλέξτε Τύπο Γεύματος');
		day.morningName = ko.observable('Πρωινό');
		day.lunchName = ko.observable('Μεσημεριανό');
		day.snackName = ko.observable('Σνακ');//Γεύματα
		day.dinnerName = ko.observable('Βραδινό');
		day.moreNutrientsName = ko.observable('Περισσότερες Θρεπτικές Ουσίες');
		day.fiberName = ko.observable('Φυτικές Ίνες');
		day.sugarName = ko.observable('Σάκχαρα');
		day.saturatedName = ko.observable('Κορεσμένα');
		day.unsaturatedName = ko.observable('Ακόρεστα');
		day.bitaminDName = ko.observable('Βιταμίνη D');
		day.cancelName = ko.observable('Ακύρωση');
		day.updateName = ko.observable('Ενημέρωση');
		self.backupDayArray.push(day);
		
		day.editFood = function() {
			//console.log('editFood');
 			backupCalories = self.roundOff(day.defaultCalories(), 2);
			backupProtein = self.roundOff(day.defaultProtein(), 2);
			backupCarb = self.roundOff(day.defaultCarb(), 2); 
			backupFat = self.roundOff(day.defaultFat(), 2); 
			backupFiber = self.roundOff(day.defaultFiber(), 2); 
			backupSaturated = self.roundOff(day.defaultSaturated(), 2); 
			backupUnsaturated = self.roundOff(day.defaultUnsaturated(), 2); 
			backupSugar = self.roundOff(day.defaultSugar(), 2); 
			backupBitamins = self.roundOff(day.defaultBitamins(), 2);
			backupportion = self.roundOff(day.quantity(), 2);
			self.initialNumber(self.roundOff(day.consumptionNumPortion(), 3));
			
			backupPrevCalories = self.roundOff(day.prevCalories(), 2);
			backupPrevProtein = self.roundOff(day.prevProtein(), 2);
			backupPrevCarb = self.roundOff(day.prevCarb(), 2); 
			backupPrevFat = self.roundOff(day.prevFat(), 2); 
			backupPrevFiber = self.roundOff(day.prevFiber(), 2); 
			backupPrevSaturated = self.roundOff(day.prevSaturated(), 2); 
			backupPrevUnsaturated = self.roundOff(day.prevUnsaturated(), 2); 
			backupPrevSugar = self.roundOff(day.prevSugar(), 2); 
			backupPrevBitamins = self.roundOff(day.prevBitamins(), 2);
			backupPrevPortion = self.roundOff(day.prevPortion(), 2);

			backupPrevNumber = self.roundOff(day.consumptionNumPortion(), 3);
			//self.consumptionNumPortion(day.consumptionNumPortion());
			self.mealCategory(day.idNameOfDailyMeals());
			day.chooseMealCategory(self.mealCategory());
			
			self.itemFoodArray(day);
			self.switch('modalEdit');
		};

		day.changeLanguage = function() {
			if(self.lang() === 'en') {
				day.addName('Add');
				day.nutrientName('Nutrients');
				day.proteinName('Protein');
				day.carbName('Carb');
				day.fatName('Fat');
				day.consumeQuantityName('Consumed Quantity');
				day.portionsName('Portions');
				day.portionName('Portion');
				day.typeMealName('Choose Type of Meal');
				day.morningName('Breakfast');
				day.lunchName('Lunch');
				day.snackName('Snack');
				day.dinnerName('Dinner');
				day.moreNutrientsName('More Nutrients');
				day.fiberName('Fiber');
				day.sugarName('Sugar');
				day.saturatedName('Saturated');
				day.unsaturatedName('Unsaturated');
				day.bitaminDName('Bitamin D');
				day.cancelName('Cancel');
				day.updateName('Update');
				day.quantityName('Quantity');
			} else if(self.lang() === 'en') {
				day.addName('Προσθήκη');
				day.nutrientName('Θρεπτικές Ουσίες');
				day.proteinName('Πρωτεΐνες');
				day.carbName('Υδατάνθρακες');
				day.fatName('Λίπος');
				day.consumeQuantityName('Ποσότητα Κατανάλωσης');
				day.portionsName('Μερίδες');
				day.portionName('Μερίδα');
				day.typeMealName('Επιλέξτε Τύπο Γεύματος');
				day.morningName('Πρωινό');
				day.lunchName('Μεσημεριανό');
				day.snackName('Σνακ');//Γεύματα
				day.dinnerName('Βραδινό');
				day.moreNutrientsName('Περισσότερες Θρεπτικές Ουσίες');
				day.fiberName('Φυτικές Ίνες');
				day.sugarName('Σάκχαρα');
				day.saturatedName('Κορεσμένα');
				day.unsaturatedName('Ακόρεστα');
				day.bitaminDName('Βιταμίνη D');
				day.cancelName('Ακύρωση');
				day.updateName('Ενημέρωση');
				day.quantityName('Ποσότητα');
			}
		};

		day.restoreFoodAttr = function() {
			self.foodAttr();
		};

		day.portion.subscribe(function(value) {
			self.roundOff(self.itemFoodArray().inputNumPortion(parseFloat(day.portion())/parseFloat(day.quantity())), 3);
			self.calcFood();
		});
		
		day.restoreColors = function() {
			day.backColor1('white');
			day.backColor2('white');
			day.backColor3('white');
			day.backColor4('white');
			day.color1('#0C6170');
			day.color2('#0C6170');
			day.color3('#0C6170');
			day.color4('#0C6170');
		};

		day.chooseMealCategory = function(value) {
			day.restoreColors();
			self.mealCategory(value);

			if(value == 1) {
				day.backColor1('#0C6170');
				day.color1('white');
			} else if(value == 2) {
				day.backColor2('#0C6170');
				day.color2('white');
			} else if(value == 3) {
				day.backColor3('#0C6170');
				day.color3('white');
			} else if(value == 4) {
				day.backColor4('#0C6170');
				day.color4('white');
			}	
		};

		day.UpdateFoodSubmit = function() {
 			let o = {}
			let o1 = {}
			let o2 = {}
			var consumption = self.roundOff(day.consumptionNumPortion(), 3);

			choosemealtype = document.getElementById('choosemealtype');
			consumptionquantity = document.getElementById('consumptionquantity');

			o = {
				username: self.username(),
				idFood: day.idFood(),
				idDailyFood: day.id(),
				mealCategory: self.mealCategory(),
				previousCalories: self.roundOff(backupCalories * self.initialNumber(), 2),
				previousProtein: self.roundOff(backupProtein * self.initialNumber(), 2),
				previousCarb: self.roundOff(backupCarb * self.initialNumber(), 2),
				previousFat: self.roundOff(backupFat * self.initialNumber(), 2),
				portion: self.roundOff(day.quantity() * consumption, 2),
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
			
/*			console.log(self.categoryName());
			if(self.mealCategory() > 0 && self.mealCategory() < 5 && consumption > 0) {
				
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
*/
				$.post('./php/updatedailyfood.php', o, function(data) {
					if(data.status == "ok") {
						let prevCalories = 	self.roundOff(day.prevCalories(), 2);		
						day.prevCalories(self.roundOff(day.calories(), 2));
						day.prevProtein(self.roundOff(day.protein(), 2));
						day.prevCarb(self.roundOff(day.carb(), 2));
						day.prevFat(self.roundOff(day.fat(), 2));
						day.prevFiber(self.roundOff(day.fiber(), 2));
						day.prevSaturated(self.roundOff(day.saturated(), 2));
						day.prevUnsaturated(self.roundOff(day.unsaturated(), 2));
						day.prevSugar(self.roundOff(day.sugar(), 2));
						day.prevBitamins(self.roundOff(day.bitamins(), 2));
						day.prevPortion(self.roundOff(day.portion(), 3));

						self.consumedCalories(self.roundOff(parseFloat(self.consumedCalories()) + parseFloat(data.data.difCalories), 2));
						self.leftCalories(self.roundOff(parseFloat(self.leftCalories()) - parseFloat(data.data.difCalories), 2));
						self.leftProtein(self.roundOff(parseFloat(self.leftProtein()) + parseFloat(data.data.difProtein), 2));
						self.leftCarb(self.roundOff(parseFloat(self.leftCarb()) + parseFloat(data.data.difCarb), 2));
						self.leftFat(self.roundOff(parseFloat(self.leftFat()) + parseFloat(data.data.difFat), 2));
						self.thermides(self.consumedCalories(), self.samCalories());
						self.lipos(self.leftFat(), self.samFat());
						self.udatanthrakes(self.leftCarb(), self.samCarb());
						self.proteines(self.leftProtein(), self.samProtein());

						if(day.idNameOfDailyMeals() != self.mealCategory()) {
							if(day.idNameOfDailyMeals() == 1) {
								self.morning(self.roundOff(parseFloat(self.morning()) - parseFloat(prevCalories), 2));
								mor -= parseFloat(prevCalories);
								self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
								self.morningArray.remove(self.itemFoodArray());
							} else if(day.idNameOfDailyMeals() == 2) {
								self.lunch(self.roundOff(parseFloat(self.lunch()) - parseFloat(prevCalories), 2));
								lun -= parseFloat(prevCalories);
								self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
								self.lunchArray.remove(self.itemFoodArray());
							} else if(day.idNameOfDailyMeals() == 3) {
								self.snack(self.roundOff(parseFloat(self.snack()) - parseFloat(prevCalories), 2));
								sna -= parseFloat(prevCalories);
								self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
								self.snackArray.remove(self.itemFoodArray());
							} else if(day.idNameOfDailyMeals() == 4) {
								self.dinner(self.roundOff(parseFloat(self.dinner()) - parseFloat(prevCalories), 2));
								din -= parseFloat(prevCalories);
								self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
								self.dinnerArray.remove(self.itemFoodArray());
							}
							
							self.itemFoodArray().idNameOfDailyMeals(self.mealCategory());

							if(self.mealCategory() == 1) {
								self.morning(self.roundOff(parseFloat(self.morning()) + parseFloat(day.prevCalories()), 2));
								mor += parseFloat(day.prevCalories());
								self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
								self.morningArray.push(self.itemFoodArray());
							} else if(self.mealCategory() == 2) {
								self.lunch(self.roundOff(parseFloat(self.lunch()) + parseFloat(day.prevCalories()), 2));
								lun += parseFloat(day.prevCalories());
								self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
								self.lunchArray.push(self.itemFoodArray());
							} else if(self.mealCategory() == 3) {
								self.snack(self.roundOff(parseFloat(self.snack()) + parseFloat(day.prevCalories()), 2));
								sna += parseFloat(day.prevCalories());
								self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
								self.snackArray.push(self.itemFoodArray());
							} else if(self.mealCategory() == 4) {
								self.dinner(self.roundOff(parseFloat(self.dinner()) + parseFloat(day.prevCalories()), 2));
								din += parseFloat(day.prevCalories());
								self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
								self.dinnerArray.push(self.itemFoodArray());
							}
						} else {
							if(self.mealCategory() == 1) {
								self.morning(self.roundOff(parseFloat(self.morning()) + parseFloat(data.data.difCalories), 2));
								mor += data.data.difCalories;
								self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
							} else if(self.mealCategory() == 2) {
								self.lunch(self.roundOff(parseFloat(self.lunch()) + parseFloat(data.data.difCalories), 2));
								lun += data.data.difCalories;
								self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
							} else if(self.mealCategory() == 3) {
								self.snack(self.roundOff(parseFloat(self.snack()) + parseFloat(data.data.difCalories), 2));
								sna += data.data.difCalories;
								self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
							} else if(self.mealCategory() == 4) {
								self.dinner(self.roundOff(parseFloat(self.dinner()) + parseFloat(data.data.difCalories), 2));
								din += data.data.difCalories;
								self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
							}							
						}

						self.successMsg(self.updateFoodMsg());
					} else {
						self.successMsg(self.updateFoodErrorMsg());
						console.log('Something wrong with update food...');
					}
					
					self.switch('modalEdit');
					self.switch('modalSuccessMsg');
				});
/*
			} else if((self.mealCategory() <= 0 || self.mealCategory() >= 5) && consumption <= 0) {
				consumptionquantity.style.color = 'rgb(175 53 53)';
				choosemealtype.style.color = 'rgb(175 53 53)';
			} else if(consumption <= 0) {
				consumptionquantity.style.color = 'rgb(175 53 53)';
			} else {
				choosemealtype.style.color = 'rgb(175 53 53)';
			} */
		};

		day.star = function() {
			if(day.isFavourite() == 1) {
				day.starFill('./img/star_black.png');
			} else {
				day.starFill('./img/star_yellow.png');
			}
		};	
		day.star();

		day.changeStar = function() {//self.backupDayArray()[i].name(), 
			//for(var i=0; i<self.backupDayArray().length; i++) {
				//console.log(day);
			//}
			let o = {
				username: self.username(),
				newVal: day.isFavourite(),
				idFood: day.idFood()
			}

			$.post('./php/updatefavourite.php', o, function(data) {
				if(data.status == "ok") {
/* 					if(day.isFavourite() == 2) {
						day.isFavourite(1);
						day.starFill('./img/star_black.png');
					} else {
						day.isFavourite(2);
						day.starFill('./img/star_yellow.png');
						lang: self.lang(),
					} */
					let o1 = {
						username: self.username(),
						fullDate: self.fullDate(),
						numLang: self.sendLang()
					}

					$.post('./php/getfoodinfo.php', o1, function(data) {
						if(data.status == "ok") {
							self.morningArray([]);
							self.lunchArray([]);
							self.snackArray([]);
							self.dinnerArray([]);
							mor = 0;
							lun = 0; 
							sna = 0; 
							din = 0;
							self.morning(0);
							self.lunch(0);
							self.snack(0);
							self.dinner(0);
							var tmp = data.data.map(function(el) { 
								self.fillMorningArray(el);

							});
						} else {
							console.log('refresh favourite');
						}
					});
				} else {
					console.log("Food is not updated...");
				}
			});
			
		};

		day.foodDetails = function() {
			day.isFoodDetails(!day.isFoodDetails());
		};
		day.deleteMorning = function() {
			self.backupDay(day);
			self.dailyEatingid(day.id());
			self.dailyEatingName(`${self.warningDeleteMsg()} ${day.name()} ${self.questionMark()}`);
			self.dailyEatingDailyMeal(day.idNameOfDailyMeals());
			self.switch('modalDelete');
		}
		day.deleteLunch = function() {
			self.backupDay(day);
			self.dailyEatingid(day.id());
			self.dailyEatingName(`${self.warningDeleteMsg()} ${day.name()} ${self.questionMark()}`);
			self.dailyEatingDailyMeal(day.idNameOfDailyMeals());
			self.switch('modalDelete');
		}
		day.deleteSnack = function() {
			self.backupDay(day);
			self.dailyEatingid(day.id());
			self.dailyEatingName(`${self.warningDeleteMsg()} ${day.name()} ${self.questionMark()}`);
			self.dailyEatingDailyMeal(day.idNameOfDailyMeals());
			self.switch('modalDelete');
		}
		day.deleteDinner = function() {
			self.backupDay(day);
			self.dailyEatingid(day.id());
			self.dailyEatingName(`${self.warningDeleteMsg()} ${day.name()} ${self.questionMark()}`);
			self.dailyEatingDailyMeal(day.idNameOfDailyMeals());
			self.switch('modalDelete');
		}
		
		self.deleteDailyEatingFood = function() {
			self.switch('modalLoad');
			let o = {
				username: self.username(),
				newVal: self.dailyEatingid(),
				calories: self.backupDay().calories(),
				fat: self.backupDay().fat(),
				carb: self.backupDay().carb(),
				protein: self.backupDay().protein(),
				fiber: self.backupDay().fiber(),
				saturated: self.backupDay().saturated(),
				unsaturated: self.backupDay().unsaturated(),
				sugar: self.backupDay().sugar(),
				bitamins: self.backupDay().bitamins(),				
				fullDate: self.fullDate()
			}
			
			$.post('./php/deleteconsumedfood.php', o, function(data) {
				if(data.status == "ok") {
					if(self.dailyEatingDailyMeal() == 1) {
						mor -= parseFloat(self.backupDay().calories());
						self.morning(self.roundOff(mor, 2));
						self.morWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(mor, 2)}</span> ${self.caloriesWord()}`);
						self.morningArray.remove(self.backupDay());
					} else if(self.dailyEatingDailyMeal() == 2) {
						lun -= parseFloat(self.backupDay().calories());
						self.lunch(self.roundOff(lun, 2));
						self.lunWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(lun, 2)}</span> ${self.caloriesWord()}`);
						self.lunchArray.remove(self.backupDay());
					} else if(self.dailyEatingDailyMeal() == 3) {
						sna -= parseFloat(self.backupDay().calories());
						self.snack(self.roundOff(sna, 2));
						self.snaWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(sna, 2)}</span> ${self.caloriesWord()}`);
						self.snackArray.remove(self.backupDay());
					} else {
						din -= parseFloat(self.backupDay().calories());
						self.dinner(self.roundOff(din, 2));				
						self.dinWord(`${self.totalConsumed()} <span style=\"color:#0C6170; font-weight: bold;\">${self.roundOff(din, 2)}</span> ${self.caloriesWord()}`);
						self.dinnerArray.remove(self.backupDay());
					}

					self.consumedCalories(self.roundOff(parseFloat(self.consumedCalories()) - parseFloat(self.backupDay().calories()), 2));
					
					if(self.consumedCalories() < 0) 
						self.consumedCalories(0);

					self.leftCalories(self.roundOff(parseFloat(self.leftCalories()) + parseFloat(self.backupDay().calories()), 2));
					
					if(self.leftCalories() > self.samCalories()) {
						self.left(self.extraWord());
					} else {
						self.left(self.leftWord());
					}

					self.successMsg(self.deleteFoodMsg());
				} else {
					self.successMsg(self.deleteFoodErrorMsg());
					//console.log("Food is not deleted...");
				}
				
				self.leftFat(self.leftFat() - self.backupDay().fat());
				self.leftCarb(self.leftCarb() - self.backupDay().carb());
				self.leftProtein(self.leftProtein() - self.backupDay().protein());

				self.thermides(self.consumedCalories(), self.samCalories());
				self.lipos(self.leftFat(), self.samFat());
				self.udatanthrakes(self.leftCarb(), self.samCarb());
				self.proteines(self.leftProtein(), self.samProtein());

				self.switch('modalLoad');
				self.switch('modalSuccessMsg');
			});
		};
		day.changeLanguage();
	}

	self.deleteSubmit = function() {
		self.deleteDailyEatingFood();
		self.switch('modalDelete');
	};

	self.deleteCancel = function() {
		self.switch('modalDelete');
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
				self.addfoodpage(0);
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
				self.dashboardpage();
			} else if(data.status == "error") {

			}	
		});	
	}
	
	self.logout = function() {
		let o = {};

		$.post('./php/logout.php', o, function(data) {
			if(data.status == "ok") {
				self.loginPage();
			} else if(data.status == "error") {
				self.loginPage();
			}            
		});			
	};

	self.loginPage = function() {
		window.location.href = './login.html?lang=' + self.lang();
	};

	self.dashboardpage = function() {
		window.location.href = './dashboarduser';
	};

	self.settingspage = function() {
		window.location.href = './settingsuser';
	};

    self.addfoodpage = function(value) {
		let o = {
			mealCategory: value,
			fulldate: self.fullDate()
		};

		$.post('./php/getmealcategory.php', o, function(data) {
			if(data.status == "ok") {
				window.location.href = './addFood';
			} else if(data.status == "error") {
				console.log("Didn\'t go to Add Food Page!");
			}            
		});
    };

    self.biometricspage = function() {
        window.location.href = './biometrics';
    };

    self.measurementspage = function() {
		let o = {
			mealCategory: 0,
			fulldate: self.fullDate()
		};

		$.post('./php/getmealcategory.php', o, function(data) {
			if(data.status == "ok") {
				window.location.href = './measurements';
			} else if(data.status == "error") {
				console.log("Didn\'t go to Measurement Page!");
			}            
		});
    };

    self.statisticspage = function() {
        window.location.href = './statistics';
    };

	self.dailystatspage = function() {
        window.location.href = './dailystats';
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
	ko.applyBindings(new DashboardModel(), document.getElementById('body'));
});