function ForgetPassModel() {
	self = this;
	self.loginMessage = ko.observable('');
    self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email.",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});

    self.email.subscribe(function(newVal) {
		alertError = document.getElementById("alertError");
		alertError.style.display = "none";
        self.loginMessage('');
    });

	self.forgetPassword = function() {
		let o = {
			email: self.email(),
		}

		if(!self.email.emailError() && self.email() != '') {
			$.post('./php/forgetPass.php', o, function(data) {
				if(data.status == "ok") {
					//console.log(data.data);
					alertError = document.getElementById("alertError");
					errorSub = document.getElementById("errorSub");
					alertError.style.display = "block";
					errorSub.style.color = "rgb(51, 134, 33)";
					errorSub.style.border = "1px solid rgb(23, 100, 6)";
					errorSub.style.backgroundColor = "rgb(199, 238, 190)";
					self.loginMessage(data.data);
				} else if(data.status == "error") {
					//console.log(data.data);
					alertError = document.getElementById("alertError");
					errorSub = document.getElementById("errorSub");
					alertError.style.display = "block";
					errorSub.style.color = "rgb(185, 0, 0)";
					errorSub.style.border = "1px solid rgb(117, 17, 17)";
					errorSub.style.backgroundColor = "rgb(238, 190, 190)";
					self.loginMessage(data.data);
				}
			});	
		} else {
			if(self.email() == '') {
				self.email(" ");
				self.email.emptyFieldError(true);
				self.email("");
			}
		}
	};

    self.loginPass = function() {
        window.location.href = "./login.html";
    };

	self.indexPage = function() {
		window.location.href = './index.html';
	};
}

$(function() {
	ko.applyBindings(new ForgetPassModel(), document.getElementById('body'));
});