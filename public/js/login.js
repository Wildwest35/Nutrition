function LoginModel() {
	self = this;
	self.loginMessage = ko.observable('');
    self.islockpassword = ko.observable(true);
	
	self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email.",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});
	self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

    self.email.subscribe(function(newVal) {
        self.loginMessage('');
    });

    self.password.subscribe(function(newVal) {
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

    self.login = function() {
		
		if(!self.email.emailError() && !self.password.minLengthError() && self.email() != '' && self.password() != '') {
			console.log("Full Fields");
	        let o = {
				email: self.email(),
				password: self.password()
			}

		$.post('./php/login.php', o, function(data) {
				if(data.status == "ok") {
					console.log('ok');
					window.location.href = './basic.html';
				} else if(data.status == "error") {
					console.log('error');
					self.loginMessage('Wrong Data!');
				}            
			});		
		} else {
			console.log("Empty Fields");
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
}

$(function() {
	ko.applyBindings(new LoginModel(), document.getElementById('body'));
});