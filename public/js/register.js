function RegisterModel() {
	self = this;
    self.count = ko.observable(1);
    self.currentActive = ko.observable(1);

    self.weightCheckcError = ko.observable(false);
    self.weightCheckMessage = ko.observable(null);
    self.passwordCheckcError = ko.observable(false);
    self.passwordCheckMessage = ko.observable(null);   

    self.progress1 = ko.observable(null);
    self.progress2 = ko.observable(null);
    self.progress3 = ko.observable(null);

	self.username = ko.observable('').extend({
		minimumLength: 2,
		maximumLength: 25,
        alphaNumeric: "* Επιτρέπονται μόνο λατινικοί χαρακτήρες, γράμματα και κάτω παύλα.",
        isEmptyField: "* Το πεδίο είναι κενό!",
	});
    self.email = ko.observable('').extend({
		isEmail: "* Παρακαλώ εισάγετε ένα έγκυρο email.",
        isEmptyField: "* Το πεδίο είναι κενό!"
	});
    self.password = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});    
    self.repeatpassword = ko.observable('').extend({
		minimumLength: 8,
        isEmptyField: "* Το πεδίο είναι κενό!"
	});  
    self.sex = ko.observable('').extend({
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.age = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.height = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.weight = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.isweight = ko.observable(0);
    self.requestedWeight = ko.observable('').extend({
        numeric: "* Επιτρέπονται μόνο αριθμοί.",
        maximumLength: 3,
        isEmptyField: "* Το πεδίο είναι κενό!"
    });
    self.weightcategory = ko.observable('');
    
    self.sexcategory = ko.observable('');
/*     self.emptyFieldError = ko.observable('');
    self.emptyFieldMessage = ko.observable(''); */
    self.islockpassword = ko.observable(true);
    self.islockrepeatpasswrord = ko.observable(true);

    self.isweight.subscribe(function(newVal) {
        if(self.requestedWeight() != '') {
            self.weightCheck();
        }
    });

    self.password.subscribe(function(newVal) {
        if(self.repeatpassword() != '') {
            self.passwordCheck();
        }
    });

    self.repeatpassword.subscribe(function(newVal) {
        self.passwordCheck();
    });

    self.passwordCheck = function() {
        if(self.password() == self.repeatpassword()) {
            console.log("1");
            self.passwordCheckcError(false);
            self.passwordCheckMessage(null);
        } else {
            console.log("2");
            self.passwordCheckcError(true);
            self.passwordCheckMessage('* Η "Επιβεβαίωση Συνθηματικού" δεν αντιστοιχεί με το "Συνθηματικό".');
        }
    };

    self.requestedWeight.subscribe(function(newVal) {
        self.weightCheck();
    });

    self.weightCheck = function() {
        if(self.isweight() == 1) {
            if(self.count() == 2) {
                self.requestedWeight('');
                self.count(1);
            }
            if(self.weight() > self.requestedWeight()) {
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            } else {
                if(self.requestedWeight() != '') {
                    self.weightCheckcError(true);
                    self.weightCheckMessage('* Στο "Επιθυμητό Βάρος" πρέπει να εισάγετε λιγότερα κιλά από το "Βάρος".');
                }
            }
        } else if(self.isweight() == 2) {
            self.count(2);
            if(self.weight() != self.requestedWeight()) {
                self.requestedWeight(self.weight());
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            } else {
                self.requestedWeight(self.weight());
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            }
        } else if(self.isweight() == 3) {
            if(self.count() == 2) {
                self.requestedWeight('');
                self.count(1);
            }
            if(self.weight() >= self.requestedWeight()) {
                if(self.requestedWeight() != '') {
                    self.weightCheckcError(true);
                    self.weightCheckMessage('* Στο "Επιθυμητό Βάρος" πρέπει να εισάγετε περισσότερα κιλά από το "Βάρος".');
                }
            } else {
                self.weightCheckcError(false);
                self.weightCheckMessage(null);
            }
        }
    }

    self.sexcategory.subscribe(function(newVal) {
        if(self.sexcategory() == "Άρρεν") {
            self.sex(2);
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
        self.progress1(!self.passwordCheckcError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        self.progress3(!self.weight.maxLengthError() && !self.weight.numericError() && !self.requestedWeight.maxLengthError()  && !self.requestedWeight.numericError() && !self.weightCheckcError() && self.weight() != '' && self.requestedWeight() != '');   

        if((self.progress1() && self.currentActive() == 1) || (self.progress2() && self.currentActive() == 2) || (self.progress3() && self.currentActive() >= 3)) {
            self.currentActive(self.currentActive() + 1);
            if(self.currentActive() > circles.length) {
                self.currentActive(circles.length);
            }
            self.update();
        } else {
            if(self.currentActive() == 1) {
                if(self.username() == '') {
                    self.username(" ");
                    self.username.emptyFieldError(true);
                    self.username("");
                } 
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
                if(self.repeatpassword() == '') {
                    self.repeatpassword(" ");
                    self.repeatpassword.emptyFieldError(true);
                    self.repeatpassword("");
                }
            } else if(self.currentActive() == 2) {
                if(self.sex() == '') {
                    self.sex(" ");
                    self.sex.emptyFieldError(true);
                    self.sex("");
                }
                if(self.age() == '') {
                    self.age(" ");
                    self.age.emptyFieldError(true);
                    self.age("");
                }
                if(self.height() == '') {
                    self.height(" ");
                    self.height.emptyFieldError(true);
                    self.height("");
                }
            } else if(self.currentActive() == 3) {
                if(self.weight() == '') {
                    self.weight(" ");
                    self.weight.emptyFieldError(true);
                    self.weight("");
                }
                if(self.requestedWeight() == '') {
                    self.requestedWeight(" ");
                    self.requestedWeight.emptyFieldError(true);
                    self.requestedWeight("");
                }
            } else if(self.currentActive() == 4) {

            }
        }
    };

    self.step1 = function() {
        self.currentActive(1);
        self.update();
    };

    self.step2 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        if(self.progress1()) {
            self.currentActive(2);
            self.update();
        }
    };

    self.step3 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        if(self.progress1() && self.progress2()) {
            self.currentActive(3);
            self.update();
        }
    };

    self.step4 = function() {
        self.progress1(!self.passwordCheckcError() && !self.username.minLengthError() && !self.username.maxLengthError() && !self.username.alphaNumericError() && !self.email.emailError() && !self.password.minLengthError() && !self.repeatpassword.minLengthError() && self.username() != '' && self.email() != '' && self.password() != '' && self.repeatpassword() != ''); 
        self.progress2(!self.age.numericError() && !self.height.numericError() && !self.age.maxLengthError() && !self.height.maxLengthError() && self.sex() != '' && self.age() != '' && self.height() != '');
        self.progress3(!self.weight.maxLengthError() && !self.weight.numericError() && !self.requestedWeight.maxLengthError()  && !self.requestedWeight.numericError() && !self.weightCheckcError() && self.weight() != '' && self.requestedWeight() != '');
        if(self.progress1() && self.progress2() && self.progress3()) {
            self.currentActive(4);
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