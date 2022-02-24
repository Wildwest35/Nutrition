function LoginModel() {
	self = this;
	self.loginMessage = ko.observable('');
    self.islockpassword = ko.observable(true);
	self.csrfLogin = ko.observable();
	var alertError;
	self.email = ko.observable('').extend({
		alphaNumericMail: "",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});
	self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

    self.email.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
    });

    self.password.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
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

	self.csrf = function() {
		let o = {
			csrf: self.csrfLogin()
		}
		$.post('./php/login.php', o, function(data) {
			if(data.status == "ok") {
				window.location.href = './basic.html';
			} else if(data.status == "error") {
				self.csrfLogin(data.data);
			}            
		});	
	}

    self.login = function() {//!self.email.emailError() && 
		if(!self.email.alphaNumericMailError() && !self.password.minLengthError() && self.email() != '' && self.password() != '') {
	        let o = {
				email: self.email(),
				password: self.password(),
				csrf: self.csrfLogin()
			}

			$.post('./php/login.php', o, function(data) {
				if(data.status == "ok") {
					window.location.href = './basic.html';
				} else if(data.status == "error") {
					console.log(data);
					alertError = document.getElementById("alertError");
					alertError.style.display = "block";
					self.loginMessage(data.data);
				}            
			});		
		} else {
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
		}
    };	

	self.closeLoginWarning = function() {
		$('.alert').removeClass("show");
		$('.alert').addClass("hide");
    };

	self.forgetPassPage = function() {
		window.location.href = './forgetpassword.html';
	};

	self.indexPage = function() {
		window.location.href = './index.html';
	};

	self.csrf();
}

$(function() {
	ko.applyBindings(new LoginModel(), document.getElementById('body'));
});