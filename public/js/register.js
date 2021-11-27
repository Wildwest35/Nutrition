function RegisterModel() {
	self = this;
    self.currentActive = ko.observable(1);
    self.username = ko.observable('');
    self.email = ko.observable('');
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
        console.log("register");

        $.post('./php/register.php', {'username':self.username(), 'email':self.email(), 'password':self.password(), 'repeatpassword':self.repeatpassword(), 'sex':self.sex(), 'age':self.age(), 'height':self.height(), 'weight':self.weight(), 'isweight':self.isweight(), 'requestedWeight':self.requestedWeight()})		

        .done(function(data) {
            console.log(data);
            if(data.status == "ok") {
                console.log('ok');
                self.currentActive(self.currentActive() + 1);
            } else {
                console.log('error');
            }
            
        })
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
        self.currentActive(self.currentActive() + 1);
        if(self.currentActive() > circles.length) {
            self.currentActive(circles.length);
        }

        self.update();
    };

    self.step1 = function() {
        self.currentActive(1);
        self.update();
    };

    self.step2 = function() {
        if(self.currentActive() > 1) {
            self.currentActive(2);
            self.update();
        }
    };

    self.step3 = function() {
        if(self.currentActive() > 2) {
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
	ko.applyBindings( new RegisterModel(), document.getElementById('body'));
});