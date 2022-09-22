function MeausermentsModel() {
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
    self.title = ko.observable('Μετρήσεις | Nutrition');
	self.home = ko.observable('Αρχική');
	self.biometrics = ko.observable('Βιομετρικά');
	self.measurements = ko.observable('Μετρήσεις');
	self.statistics = ko.observable('Γραφήματα');
	self.createfood = ko.observable('Δημιουργία Φαγητού');
	self.addfood = ko.observable('Προσθήκη Φαγητού');
	self.settings = ko.observable('Ρυθμίσεις');
	self.logsout = ko.observable('Αποσύνδεση');
	self.panel = ko.observable('Admin Πάνελ');
	self.tolocalestring = ko.observable('el-GR');
    self.username = ko.observable();
    self.dashboardArray = ko.observableArray([]);
	self.weigthArray = ko.observableArray([]);
	self.weightBoneArray = ko.observableArray([]);
	self.fatPercentageArray = ko.observableArray([]);
	self.waterPercentageArray = ko.observableArray([]);
	self.searchRegisterArray = ko.observableArray([]);
	self.registerArray = ko.observableArray([]);
	
	self.numeric = ko.observable('* Επιτρέπονται μόνο αριθμοί');
	self.liTag = ko.observable('');
	self.fullDate = ko.observable('');
	self.helptotalPages = ko.observable(0);
	self.helppage = ko.observable(1);
	self.page = ko.observable(1);
	self.limit = ko.observable(0);
	self.offset = ko.observable(0);
	self.categoryName = ko.observable('weight');
	self.totalWeight = ko.observable(0);
	self.totalWeightBone = ko.observable(0);
	self.totalFatPercentage = ko.observable(0);
	self.totalWaterPercentage = ko.observable(0);	
	self.totalSearchRegister = ko.observable(0);	
	self.totalPages = ko.observable(0);
	self.weightBar = ko.observable('Βάρος (kg)');
	self.weightBoneBar = ko.observable('Βάρος Οστών (kg)');
	self.fatPercentageBar = ko.observable('Ποσοστό Λίπους (%)');
	self.waterPercentageBar = ko.observable('Ποσοστό Νερού (%)');
	self.numberBar = ko.observable('');
	self.dateBar = ko.observable('Ημερομηνία');
	self.register = ko.observable('Καταγραφή');
	self.weightName = ko.observable('Βάρους');
	self.weightBoneName = ko.observable('Βάρους Οστών');
	self.fatPercentageName = ko.observable('Ποσοστού Λίπους');
	self.waterPercentageName = ko.observable('Ποσοστού Νερού');
	self.addName = ko.observable('Προσθήκη');
	self.noRegister = ko.observable('Καμία Καταγραφή');
	self.noAvailableRegister = ko.observable(`Καμία Καταγραφή ${self.weightName()}`);
	self.registerDate = ko.observable('');
	self.helpDate = ko.observable('');
	self.counterDate = ko.observable(0);
	self.cancelName = ko.observable('Ακύρωση');
	self.okName = ko.observable('Εντάξει');
	self.percentageMsg = ko.observable('Οι αποδεκτές τιμές είναι από 0 - 100');
	self.weightValue = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	self.weightBoneValue = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	self.fatPercentageValue = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	
	self.waterPercentageValue = ko.observable('').extend({
		numeric: "* Επιτρέπονται μόνο αριθμοί."
	});
	self.sorting = ko.observable('dateAsc');

	var weight = document.getElementById('weight');
	var weightBone = document.getElementById('weightBone');
	var fatPercentage = document.getElementById('fatPercentage');
	var waterPercentage = document.getElementById('waterPercentage');

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
		  285: {
			slidesPerView: 1
		  }
		}
	});

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


	self.roundOff = function(num, places) {
		num = parseFloat(num).toFixed(places);
		const x = Math.pow(10, places);
		num = parseFloat(num);

		return Math.round(num * x) / x;
	};


	self.getUsername = function() {
		let o = {}; 

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
				self.helpDate(data.data.fulldate);
				self.fullDate(data.data.fulldate);
				var day = new Date(self.fullDate());
				self.registerDate(day.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));

				self.limitOffset(1, 1);
				self.updateGetFunctions();
			} else if(data.status == "error") {
				self.logout();
			}            
		});
	};

	self.nextDay = function() {
		self.removeCheck();
		self.counterDate(self.counterDate() + 1);
		var nextDay = new Date(self.helpDate());
		var y, m, d;
		y = nextDay.getFullYear();
		m = nextDay.getMonth();
		d = nextDay.getDate();
		var nextDayDate = new Date(y, m, d + self.counterDate());
		var dd, mm, yyyy;

		self.registerDate(nextDayDate.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));

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

		self.getThisCategory();
	};

	self.prevDay = function() {
		self.removeCheck();
		self.counterDate(self.counterDate() - 1);
		var prevDay = new Date(self.helpDate());
		var y, m, d;
		y = prevDay.getFullYear();
		m = prevDay.getMonth();
		d = prevDay.getDate();
		var prevDayDate = new Date(y, m, d + self.counterDate());
		var dd, mm, yyyy;		

		self.registerDate(prevDayDate.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"}));

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

		self.getThisCategory();
	};

	self.limitOffset = function(totalPages, page) {
		limit = document.getElementById('limit').value;
		self.limit(limit);
		self.helptotalPages(totalPages);
		self.helppage(page);	

		if(page == 1) {
			self.offset(0);
		} else {
			self.offset(self.limit()*(page - 1));
		}
	};

	self.updateGetFunctions = function() {
		self.limitOffset(self.totalPages(), 1);
		self.weigthArray([]);
		self.weightBoneArray([]);
		self.fatPercentageArray([]);
		self.waterPercentageArray([]);
		self.registerArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset()
		}; 

		$.post('./php/getweightinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.weigthArray.push(el);
				});

				$.post('./php/getweightboneinfo.php', o, function(data) {
					if(data.status == "ok") {
						var tmp = data.data.map(function(el) { 
							self.weightBoneArray.push(el);
						});
						
						$.post('./php/getfatpercentageinfo.php', o, function(data) {
							if(data.status == "ok") {
								var tmp = data.data.map(function(el) { 
									self.fatPercentageArray.push(el);
								});
								
								$.post('./php/getwaterpercentageinfo.php', o, function(data) {
									if(data.status == "ok") {
										var tmp = data.data.map(function(el) { 
											self.waterPercentageArray.push(el);
										});
										
										self.updateTotalRegisters();
									} else if(data.status == "error") {
				
									}	
								});
							} else if(data.status == "error") {
		
							}	
						});
					} else if(data.status == "error") {

					}	
				});
			} else if(data.status == "error") {

			}	
		});	
	};

	self.updateTotalRegisters = function() {
		o1 = {
			username: self.username(),
			idLang: self.sendLang(),
		}

		$.post('./php/gettotalregisters.php', o1, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.totalWeight.map(function(el) { 
					self.totalWeight(el.totalWeight);
				});
				var tmp = data.data.totalWeightBone.map(function(el) { 
					self.totalWeightBone(el.totalWeightBone);
				});
				var tmp = data.data.totalFatPercentage.map(function(el) {
					self.totalFatPercentage(el.totalFatPercentage);
				});
				var tmp = data.data.totalWaterPercentage.map(function(el) {
					self.totalWaterPercentage(el.totalWaterPercentage);
				});

/* 				if(self.categoryName() == 'search') {
					self.totalSearchFoods(self.totalFoods());
				} */

				self.showRegisterCategory(self.categoryName(), 2);								
			} else {
				console.log('Something wrong with total registers...');
			}
		});
	};

	self.updateLimit = function(obj, event) {
		self.updateGetFunctions();
	};

	self.updateChooseCategories = function(totalPages, page) {
		self.page(page);
		if(self.categoryName() == 'weight') {
			self.updateWeight(totalPages);
		} else if(self.categoryName() == 'weightBone') {
			self.updateWeightBone(totalPages);
		} else if(self.categoryName() == 'fatPercentage') {
			self.updateFatPercentage(totalPages);
		} else if(self.categoryName() == 'waterPercentage') {
			self.updateWaterPercentage(totalPages);
		}
	};

	self.increaseValue = function() {
		if(self.categoryName() == 'weight') {
			if(!self.weightValue())
				self.weightValue(0);

			self.weightValue(parseFloat(self.weightValue()) + 0.5);
			self.roundOff(self.weightValue(), 2);
		} else if(self.categoryName() == 'weightBone') {
			if(!self.weightBoneValue())
				self.weightBoneValue(0);

			self.weightBoneValue(self.roundOff(self.weightBoneValue(), 2) + 0.5);
			self.roundOff(self.weightBoneValue(), 2);
		} else if(self.categoryName() == 'fatPercentage') {
			if(!self.fatPercentageValue()) 
				self.fatPercentageValue(0);

			self.fatPercentageValue(self.roundOff(self.fatPercentageValue(), 2) + 1);
			self.roundOff(self.fatPercentageValue(), 2);
		} else if(self.categoryName() == 'waterPercentage') {
			if(!self.waterPercentageValue())
				self.waterPercentageValue(0);
			
			self.waterPercentageValue(self.roundOff(self.waterPercentageValue(), 2) + 1);
			self.roundOff(self.waterPercentageValue(), 2);
		}
	};

	self.decreaseValue = function() {
		if(self.categoryName() == 'weight') {
			if(!self.weightValue() || self.weightValue() <= 0) {
				self.weightValue(0);
				return ;
			}
			
			self.weightValue(self.roundOff(self.weightValue(), 2) - 0.5);
			self.roundOff(self.weightValue(), 2);
		} else if(self.categoryName() == 'weightBone') {
			if(!self.weightBoneValue()) {
				self.weightBoneValue(0);
				return ;
			}
			
			self.weightBoneValue(self.roundOff(self.weightBoneValue(), 2) - 0.5);
			self.roundOff(self.weightBoneValue(), 2);
		} else if(self.categoryName() == 'fatPercentage') {
			if(!self.fatPercentageValue()) { 
				self.fatPercentageValue(0);
				return ;
			}

			self.fatPercentageValue(self.roundOff(self.fatPercentageValue(), 2) - 1);
			self.roundOff(self.fatPercentageValue(), 2);
		} else if(self.categoryName() == 'waterPercentage') {
			if(!self.waterPercentageValue()) {
				self.waterPercentageValue(0);
				return ;
			}

			self.waterPercentageValue(self.roundOff(self.waterPercentageValue(), 2) - 1);
			self.roundOff(self.waterPercentageValue(), 2);
		}
	};

	self.removeStyle = function() {
		weight.removeAttribute('style');
		weightBone.removeAttribute('style');
		fatPercentage.removeAttribute('style');
		waterPercentage.removeAttribute('style');
	};

	self.removeCheck = function() {
		let check1 = document.getElementById('checkweight');
		let check2 = document.getElementById('checkweightbone');
		let check3 = document.getElementById('checkfatpercentage');
		let check4 = document.getElementById('checkwaterpercentage');

		check1.removeAttribute('style');
		check2.removeAttribute('style');
		check3.removeAttribute('style');
		check4.removeAttribute('style');
	}

	self.showRegisterCategory = function(name, isDefualt) {
		self.removeStyle();
		self.registerArray([]);
		self.categoryName(name);

		if(name == 'weight') {
			weight.style.backgroundColor = '#DBF5F0';
			self.registerChoice(self.weigthArray());
			self.helptotalPages(Math.ceil(self.totalWeight()/self.limit()));
			self.numberBar(self.weightBar());
			self.page(1);
		} else if(name == 'weightBone') {
			weightBone.style.backgroundColor = '#DBF5F0';
			self.registerChoice(self.weightBoneArray());
			self.helptotalPages(Math.ceil(self.totalWeightBone()/self.limit()));
			self.numberBar(self.weightBoneBar());
			self.page(1);
		} else if(name == 'fatPercentage') {
			fatPercentage.style.backgroundColor = '#DBF5F0';
			self.registerChoice(self.fatPercentageArray());
			self.helptotalPages(Math.ceil(self.totalFatPercentage()/self.limit()));
			self.numberBar(self.fatPercentageBar());
			self.page(1);
		} else if(name == 'waterPercentage') {
			waterPercentage.style.backgroundColor = '#DBF5F0';
			self.registerChoice(self.waterPercentageArray());
			self.helptotalPages(Math.ceil(self.totalWaterPercentage()/self.limit()));
			self.numberBar(self.waterPercentageBar());
			self.page(1);
		}
		weight.style.minHeight = '11.5rem';
		weightBone.style.minHeight = '11.5rem';
		fatPercentage.style.minHeight = '11.5rem';
		waterPercentage.style.minHeight = '11.5rem';

		if(isDefualt == 1) {
			self.createPagination(self.helptotalPages(), 1);
		} else {
			self.createPagination(self.helptotalPages(), self.helppage());
		}
	};

	self.registerChoice = function(el) {
		for(let i=0; i<el.length; i++) {
			var day = new Date(el[i].date);
			var localDay = day.toLocaleString(self.tolocalestring(), {day: "numeric", month: "short", year: "numeric"});

			var o = {
				idRegister: el[i].idRegister,
				registerCount: (i+1),
				number: el[i].number,
				date: localDay,
				registerDate: self.registerDate()
			};

			self.registerArray.push(new RegisterChoices(o));
		}
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

	self.updateWeight = function() {
		self.limitOffset(self.totalPages(), self.page());
		self.weigthArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset()
		};
		
		$.post('./php/getweightinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) {
					self.weigthArray.push(el);
				});

				self.updateTotalRegisters();
			} else {
				console.log('Something wrong with update weight...');
			}
		});
	};

	self.updateWeightBone = function() {
		self.limitOffset(self.totalPages(), self.page());
		self.weightBoneArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset()
		};

		$.post('./php/getweightboneinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.weightBoneArray.push(el);
				});

				self.updateTotalRegisters();
			} else {
				console.log('Something wrong with update weight bone...');
			}
		});
	};
	
	self.updateFatPercentage = function() {
		self.limitOffset(self.totalPages(), self.page());
		self.fatPercentageArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset()
		};

		$.post('./php/getfatpercentageinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.fatPercentageArray.push(el);
				});

				self.updateTotalRegisters();
			} else {
				console.log('Something wrong with update fat percentage...');
			}
		});
	};

	self.updateWaterPercentage = function() {
		self.limitOffset(self.totalPages(), self.page());
		self.waterPercentageArray([]);

		let o = {
			idLang: self.sendLang(),
			limit: self.limit(),
			offset: self.offset()
		};

		$.post('./php/getwaterpercentageinfo.php', o, function(data) {
			if(data.status == "ok") {
				var tmp = data.data.map(function(el) { 
					self.waterPercentageArray.push(el);
				});

				self.updateTotalRegisters();
			} else if(data.status == "error") {
				console.log('Something wrong with update water percentage...');
			}	
		});
	};

	self.addWeight = function() {
		if(!self.weightValue.numericError()) {
			let check = document.getElementById('checkweight');

			let o = {
				registerDate: self.fullDate(),
				weightValue: self.roundOff(self.weightValue(), 2)
			};

			$.post('./php/addweight.php', o, function(data) {
				if(data.status == "ok") {				
					check.style.color = 'rgb(51, 134, 33)';
					self.updateWeight();
				} else if(data.status == "error") {
					//self.weightValue.numericError(true);
					check.style.color = '#e76e54';
					console.log('Something wrong with add weight...');
				}	
			});
		}
	};

	self.addWeightBone = function() {
		if(!self.weightBoneValue.numericError()) {
			let check = document.getElementById('checkweightbone');

			let o = {
				registerDate: self.fullDate(),
				weightBoneValue: self.roundOff(self.weightBoneValue(), 2)
			};

			$.post('./php/addweightbone.php', o, function(data) {
				if(data.status == "ok") {				
					check.style.color = 'rgb(51, 134, 33)';
					self.updateWeightBone();
				} else if(data.status == "error") {
					//self.weightBoneValue.numericError(true);
					check.style.color = '#e76e54';
					console.log('Something wrong with add weight bone...');
				}	
			});
		}
	};

	self.addFatPercentage = function() {
		if(!self.fatPercentageValue.numericError() && self.fatPercentageValue() <= 100 && self.fatPercentageValue() >= 0 && self.fatPercentageValue() !== '') {
			let check = document.getElementById('checkfatpercentage');

			let o = {
				registerDate: self.fullDate(),
				fatPercentageValue: self.roundOff(self.fatPercentageValue(), 2)
			};

			$.post('./php/addfatpercentage.php', o, function(data) {
				if(data.status == "ok") {				
					check.style.color = 'rgb(51, 134, 33)';
					self.updateFatPercentage();
				} else if(data.status == "error") {
					//self.fatPercentageValue.numericError(true);
					check.style.color = '#e76e54';
					console.log('Something wrong with add fat percentage...');
				}	
			});
		} else {
			let check = document.getElementById('checkfatpercentage');
			check.style.color = '#e76e54';
		}
	};

	self.addWaterPercentage = function() {
		if(!self.waterPercentageValue.numericError() && self.waterPercentageValue() <= 100 && self.waterPercentageValue() >= 0 && self.waterPercentageValue() !== '') {
			let check = document.getElementById('checkwaterpercentage');

			let o = {
				registerDate: self.fullDate(),
				waterPercentageValue: self.roundOff(self.waterPercentageValue(), 2)
			};

			$.post('./php/addwaterpercentage.php', o, function(data) {
				if(data.status == "ok") {				
					check.style.color = 'rgb(51, 134, 33)';
					self.updateWaterPercentage();
				} else if(data.status == "error") {
					//self.waterPercentageValue.numericError(true);
					check.style.color = '#e76e54';
					console.log('Something wrong with add water percentage...');
				}	
			});
		} else {
			let check = document.getElementById('checkwaterpercentage');
			check.style.color = '#e76e54';
		}
	};

	self.getThisCategory = function() {
		if(self.categoryName() == 'weight') {
			self.getThisWeight();
		} else if(self.categoryName() == 'weightBone') {
			self.getThisWeightBone();
		} else if(self.categoryName() == 'fatPercentage') {
			self.getThisFatPercentage();
		} else if(self.categoryName() == 'waterPercentage') {
			self.getThisWaterPercentage();
		}
	};

	self.getThisWeight = function() {
		self.removeCheck();

		let o = {
			registerDate: self.fullDate()
		};

		$.post('./php/getthisweight.php', o, function(data) {
			if(data.status == "ok") {
				self.roundOff(self.weightValue(data.data), 2);
			} else if(data.status == "error") {
				console.log('Something wrong with this weight register...');
			}	
		});
	};

	self.getThisWeightBone = function() {
		self.removeCheck();

		let o = {
			registerDate: self.fullDate()
		};

		$.post('./php/getthisweightbone.php', o, function(data) {
			if(data.status == "ok") {
				self.roundOff(self.weightBoneValue(data.data), 2);
			} else if(data.status == "error") {
				console.log('Something wrong with this weight bone register...');
			}	
		});
	};

	self.getThisFatPercentage = function() {
		self.removeCheck();

		let o = {
			registerDate: self.fullDate()
		};

		$.post('./php/getthisfatpercentage.php', o, function(data) {
			if(data.status == "ok") {
				self.roundOff(self.fatPercentageValue(data.data), 2);
			} else if(data.status == "error") {
				console.log('Something wrong with this fat percentage register...');
			}	
		});
	};

	self.getThisWaterPercentage = function() {
		self.removeCheck();

		let o = {
			registerDate: self.fullDate()
		};

		$.post('./php/getthiswaterpercentage.php', o, function(data) {
			if(data.status == "ok") {
				self.roundOff(self.waterPercentageValue(data.data), 2);
			} else if(data.status == "error") {
				console.log('Something wrong with this water percentage register...');
			}	
		});
	};

    self.sortDate = function() {
        if(self.sorting() == 'dateAsc')
            self.sorting('dateDesc');
        else
            self.sorting('dateAsc');
    }

    self.sortedTasks = ko.pureComputed(function() {
        var registerArray = self.registerArray().slice(0);
        var sorting = self.sorting();

        registerArray.sort(function(a, b) {
            if(sorting == 'dateAsc') {
                return a.date().localeCompare(b.date());
            } else if(sorting == 'dateDesc') {
                return b.date().localeCompare(a.date());
            }
        })

        return registerArray;
    });

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
			self.tolocalestring('en-GB');
			self.title('Measurements | Nutrition');
			self.weightBar('Weight (kg)');
			self.weightBoneBar('Weight Bone (kg)');
			self.fatPercentageBar('Fat Percentage (%)');
			self.waterPercentageBar('Water Percentage (%)');
			self.dateBar('Date');
			self.register('Register');
			self.weightName('Weight');
			self.weightBoneName('Weight Bone');
			self.fatPercentageName('Fat Percentage');
			self.waterPercentageName('Water Percentage');
			self.addName('Add');
			self.noRegister(`No Register`);
			self.noAvailableRegister(`${self.noRegister()}`);
			self.cancelName('Cancel');
			self.okName('Ok');
			self.numeric('* Only numbers are allowed');
			self.percentageMsg('The acceptable values are 0 - 100');
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
			self.tolocalestring('el-GR');
			self.title('Μετρήσεις | Nutrition');
			self.weightBar('Βάρος (kg)');
			self.weightBoneBar('Βάρος Οστών (kg)');
			self.fatPercentageBar('Ποσοστό Λίπους (%)');
			self.waterPercentageBar('Ποσοστό Νερού (%)');
			self.dateBar('Ημερομηνία');
			self.register('Καταγραφή');
			self.weightName('Βάρους');
			self.weightBoneName('Βάρους Οστών');
			self.fatPercentageName('Ποσοστού Λίπους');
			self.waterPercentageName('Ποσοστού Νερού');
			self.addName('Προσθήκη');
			self.noRegister('Καμία Καταγραφή');
			self.noAvailableRegister(`${self.noRegister()}`);
			self.cancelName('Ακύρωση');
			self.okName('Εντάξει');
			self.numeric('* Επιτρέπονται μόνο αριθμοί');
			self.percentageMsg('Οι αποδεκτές τιμές είναι από 0 - 100');
			self.panel('Admin Πάνελ');
		
			self.sendLang(2);
		}
	};

	function RegisterChoices(data) {
		var reg = this;

		reg.idRegister = ko.observable(data.idRegister);
		reg.registerCount = ko.observable(data.registerCount);
		reg.number = ko.observable(data.number);
		reg.date = ko.observable(data.date);
		reg.registerDate = ko.observable(data.registerDate);

		reg.stopProp = function(event) {
			event.stopPropagation();
		};

		reg.deletes = function() {
			if(self.categoryName() == 'weight') {
				reg.deleteWeight();
			} else if(self.categoryName() == 'weightBone') {
				reg.deleteWeightBone();
			} else if(self.categoryName() == 'fatPercentage') {
				reg.deleteFatPercentage();
			} else if(self.categoryName() == 'waterPercentage') {
				reg.deleteWaterPercentage();
			}
		};

		reg.deleteWeight = function() {
			let o = {
				idRegister: reg.idRegister()
			};

			$.post('./php/deleteweight.php', o, function(data) {
				if(data.status == "ok") {
					self.updateWeight();
				} else if(data.status == "error") {
					console.log('Something wrong with this water percentage register...');
				}	
			});
		};

		reg.deleteWeightBone = function() {
			let o = {
				idRegister: reg.idRegister()
			};
	
			$.post('./php/deleteweightbone.php', o, function(data) {
				if(data.status == "ok") {
					self.updateWeightBone();
				} else if(data.status == "error") {
					console.log('Something wrong with this water percentage register...');
				}	
			});
		};

		reg.deleteFatPercentage = function() {
			let o = {
				idRegister: reg.idRegister()
			};
	
			$.post('./php/deletefatpercentage.php', o, function(data) {
				if(data.status == "ok") {
					self.updateFatPercentage();
				} else if(data.status == "error") {
					console.log('Something wrong with this water percentage register...');
				}	
			});
		};

		reg.deleteWaterPercentage = function() {
			let o = {
				idRegister: reg.idRegister()
			};
	
			$.post('./php/deletewaterpercentage.php', o, function(data) {
				if(data.status == "ok") {
					self.updateWaterPercentage();
				} else if(data.status == "error") {
					console.log('Something wrong with this water percentage register...');
				}	
			});
		};
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
			activelabel: "active",
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
				self.measurementspage();
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
	ko.applyBindings(new MeausermentsModel(), document.getElementById('body'));
});