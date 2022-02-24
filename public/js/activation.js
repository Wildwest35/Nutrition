function ActivationModel() {
	self = this;	
	self.errorMessage = ko.observable(null);  

	self.activation = function() {
		var logo = document.getElementById("logo");
		var alertError = document.getElementById("alertError");
		var errorSub = document.getElementById("errorSub");

		logo.style.marginRight = 0;
		var url = window.location.search;
		const urlParams = new URLSearchParams(url);

		var number = urlParams.get("number");
		var code = urlParams.get("code");

		let o = {
			number: number,
			code: code
		}

		$.post('./php/activation.php', o, function(data) {
			if(data.status == "ok") {
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

    self.loginPage = function() {
        window.location.href = "./login.html";
    };

	self.indexPage = function() {
		window.location.href = './index.html';
	};

	self.activation();
}

$(function() {
	ko.applyBindings(new ActivationModel(), document.getElementById('body'));
});