ko.extenders.minimumLength = function(target, min) {/* To onoma aytwn twn duo parametrwn borei na einai oti theleis */
	/* Mesa sto target einai to idio to observable to opoio exeis kanei extend */
	/* Mesa sto min einai h parametros me thn opoia kaleis ton extender */
	/* Sto sygkekrimeno paradeigma einai o minimum arithmos */
	target.minLengthErrorMessage = ko.observable(null);
	target.minLengthError = ko.observable(null);
    console.log(target.minLengthError());
	target.subscribe(function(newVal) {
        self.emptyFieldError(false);
        self.emptyFieldMessage('');
		if(newVal.length >= min) {
			target.minLengthError(null);
			target.minLengthErrorMessage(null);
		} else {
			target.minLengthError(true);
			target.minLengthErrorMessage(`* Το ελάχιστο μέγεθος χαρακτήρων είναι ${min}.`);
		}

		if(!newVal){
			target.minLengthError(null);
			target.minLengthErrorMessage(null);
		}
	})
}

ko.extenders.maximumLength = function(target, max) {
	target.maxLengthErrorMessage = ko.observable(null);
	target.maxLengthError = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal.length <= max) {
			target.maxLengthError(null);
			target.maxLengthErrorMessage(null);
		} else {
			target.maxLengthError(true);
			target.maxLengthErrorMessage(`* Το μέγιστο μέγεθος χαρακτήρων είναι ${max}.`);
		}

		if(!newVal) {
			target.maxLengthError(null);
			target.maxLengthErrorMessage(null);
		}
	})
}

ko.extenders.numbers = function(target, message) {
	target.numbersMessage = ko.observable(null);
	target.numbersError = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[0-9a-zA-Z_]+$/;
			console.log(number.test(newVal));
			if(number.test(newVal)){
				target.numbersError(null);
				target.numbersMessage(null);
			}else{
				target.numbersError(true);
				//target.numbersMessage('Only numbers are allowed');
				target.numbersMessage(`${message}`);				
			}
		} else {
			console.log('numbers else');
			target.numbersError(null);
			target.numbersMessage(null);			
		}
	})
}

ko.extenders.isEmail = function(target, option) {
	target.emailError = ko.observable(null);
	target.emailErrorMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal) {
			var regEx = /\S+@\S+\.\S+/;
			console.log(regEx.test(newVal));
        	if(regEx.test(newVal)){
				target.emailError(null);
				target.emailErrorMessage(null);
			}else{
				target.emailError(true);
				target.emailErrorMessage(`${option}`);
			}
		} else {
			target.emailError(null);
			target.emailErrorMessage(null);
		}
	})
}

ko.extenders.isEmptyField = function(target, message) {
	target.emptyFieldMessage = ko.observable(null);
	target.emptyFieldError = ko.observable(null);

	target.subscribe(function(newVal) {
        console.log(message);
		if(newVal) {
			var regEx = /^[]+$/;
			console.log(regEx.test(newVal));
        	if(regEx.test(newVal)){
				target.emptyFieldError(null);
				target.emptyFieldMessage(null);
			}else{
				target.emptyFieldError(true);
				target.emptyFieldMessage(`${message}`);
			}
		} else {
			target.emptyFieldError(null);
			target.emptyFieldMessage(null);
		}
	})
}

function RegisterModel() {
	self = this;
    self.currentActive = ko.observable(1);
    //self.username = ko.observable('');//
	self.username = ko.observable('').extend({
		minimumLength: 2,
		maximumLength: 25,
        numbers: "* Μόνο λατινικοί χαρακτήρες, γράμματα και κάτω παύλα επιτρέπονται."
        //isEmptyField: '* Το πεδίο είναι κενό!'
	});
    //self.email = ko.observable('');
    self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγεται ένα έγγυρο email.",
		minimumLength: 5
       //isEmptyField: '* Το πεδίο είναι κενό!'
	});
    self.password = ko.observable('');
    self.repeatpassword = ko.observable('');
    self.sex = ko.observable('');
    self.age = ko.observable('');
    self.height = ko.observable('');
    self.weight = ko.observable('');
    self.isweight = ko.observable('');
    self.requestedWeight = ko.observable('');
    self.weightcategory = ko.observable('');
    
    self.sexcategory = ko.observable('');
    self.emptyFieldError = ko.observable('');
    self.emptyFieldMessage = ko.observable('');
    self.islockpassword = ko.observable(true);
    self.islockrepeatpasswrord = ko.observable(true);

    self.sexcategory.subscribe(function(newVal) {
        if(self.sexcategory() == "Άρρεν") {
            self.sex(0);
        } else {
            self.sex(1);
        }
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

    self.isweight.subscribe(function() {
        if(self.isweight() == 1) {
            self.weightcategory("χάσω βάρος");
        } else if(self.isweight() == 2) {
            self.weightcategory("διατηρήσω το βάρος μου");
        } else {
            self.weightcategory("πάρω βάρος");
        }
    });

    self.register = function() {

        let o = {
            username: self.username(),
            email: self.email(),
            password: self.password(),
            repeatpassword: self.repeatpassword(),
            sex: self.sex(),
            age: self.age(),
            height: self.height(),
            weight: self.weight(),
            isweight: self.isweight(),
            requestedWeight: self.requestedWeight()
        }

       $.post('./php/register.php', o, function(data) {
            if(data.status == "ok") {
                console.log('ok');
                self.next();
            } else if(dat.status == "error") {
                console.log('error');
            }            
        });		
    };

    self.login = function() {
        window.location.href = "./login.html";
    };

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
        if(close.style.display == "") {
            close.style.display = "none";
        }
    };

    let progress = document.getElementById("progress");
    let circles = document.querySelectorAll(".circle");

    self.previous = function() {
        self.currentActive(self.currentActive() - 1);
        if(self.currentActive() < 1) {
            self.currentActive(1);
        }

        self.update();
    };

    self.next = function() {
        
        if(self.username.minLengthError() && self.username.maxLengthError() && self.username.numbersError() && self.email.minLengthError() && self.email.emailError()) {
            self.currentActive(self.currentActive() + 1);
            if(self.currentActive() > circles.length) {
                self.currentActive(circles.length);
            }
            self.update();
        } else {
            if(self.username() == '' || self.email() == '') {
                self.emptyFieldError(true);
                self.emptyFieldMessage('The field is empty!');
            }
        }
    };

    self.step1 = function() {
        if(self.currentActive() < 5) {
            self.currentActive(1);
            self.update();
        }
    };

    self.step2 = function() {
        if(self.currentActive() > 1 && self.currentActive() < 5) {
            self.currentActive(2);
            self.update();
        }
    };

    self.step3 = function() {
        if(self.currentActive() > 2 && self.currentActive() < 5) {
            self.currentActive(3);
            self.update();
        }
    };

    self.update = function() {
        circles.forEach((circle, idx) => {
            if(idx < self.currentActive()) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        const actives = document.querySelectorAll(".active");

        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    };

}

$(function() {
	ko.applyBindings(new RegisterModel(), document.getElementById('body'));
});