function ResetPassModel() {
	self = this;
	self.islockpassword = ko.observable(true);
	self.islockrepeatpasswrord = ko.observable(true);
    self.passwordCheckcError = ko.observable(false);
    self.passwordCheckMessage = ko.observable(null);
	self.errorMessage = ko.observable(null);  
	self.currentActive = ko.observable(1);  

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
		var url = window.location.search;
		const urlParams = new URLSearchParams(url);

		var number = urlParams.get("number");
		var code = urlParams.get("code");

		let o = {
			number: number,
			code: code
		}

		$.post('./php/checkUrlElement.php', o, function(data) {
			if(data.status == "ok") {

			} else {
				self.currentActive(2);
				var logo = document.getElementById("logo");
				var alertError = document.getElementById("alertError");
				var errorSub = document.getElementById("errorSub");
				logo.style.marginRight = 0;
                alertError.style.display = "block";
				errorSub.style.color = "rgb(185, 0, 0)";
				errorSub.style.border = "1px solid rgb(117, 17, 17)";
				errorSub.style.backgroundColor = "rgb(238, 190, 190)";
				errorSub.style.padding = "2rem 1rem";
                self.errorMessage(data.data);
				setTimeout(function() {
					self.loginPage();		
				}, 3000); 		
			}
		});
	};

	self.reset = function() {
		if(!self.passwordCheckcError() && !self.repeatpassword.minLengthError() && !self.password.minLengthError() && self.repeatpassword() != '' && self.password() != '') {
			var url = window.location.search;
			const urlParams = new URLSearchParams(url);

			var number = urlParams.get("number");
			var code = urlParams.get("code");

			let o = {
				password: self.password(),
				repeatpassword: self.repeatpassword(),
				number: number,
				code: code
			}

			$.post('./php/resetpass.php', o, function(data) {
				if(data.status == "ok") {
					self.currentActive(2);
					var logo = document.getElementById("logo");
					var alertError = document.getElementById("alertError");
					var errorSub = document.getElementById("errorSub");
					logo.style.marginRight = 0;
					alertError.style.display = "block";
					errorSub.style.color = "rgb(51, 134, 33)";
					errorSub.style.border = "1px solid rgb(23, 100, 6)";
					errorSub.style.backgroundColor = "rgb(199, 238, 190)";
					errorSub.style.padding = "2rem 1rem";
					self.errorMessage(data.data);
					setTimeout(function() {
						self.loginPage();		
					}, 3000); 
				} else {
					self.currentActive(2);
					var logo = document.getElementById("logo");
					var alertError = document.getElementById("alertError");
					var errorSub = document.getElementById("errorSub");
					logo.style.marginRight = 0;
					alertError.style.display = "block";
					errorSub.style.color = "rgb(185, 0, 0)";
					errorSub.style.border = "1px solid rgb(117, 17, 17)";
					errorSub.style.backgroundColor = "rgb(238, 190, 190)";
					errorSub.style.padding = "2rem 1rem";
					self.errorMessage(data.data);
					setTimeout(function() {
						self.loginPage();		
					}, 3000); 
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

	self.loginPage = function() {
		window.location.href = './login.html';
	};

	self.indexPage = function() {
		window.location.href = './index.html';
	};

	self.checkElements();
}

$(function() {
	ko.applyBindings(new ResetPassModel(), document.getElementById('body'));
});