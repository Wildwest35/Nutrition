function MainViewModel() {
	self = this;
    self.isModalOpen = ko.observable(false);
    self.isLogin = ko.observable(0);
    self.currentActive = ko.observable(1);


    self.loginForm = function() {
        var modal = document.getElementById("modal");
        self.isLogin(0);
        
        if(modal.style.visibility == "") {  
            self.modalLogin();
        }
    }
    
    self.forgetPassword = function() {
        self.isLogin(1);
    }

    self.registerForm = function() {
        var modal = document.getElementById("modal");
        self.isLogin(2);

        if(modal.style.visibility == "" ) {   
            self.modalLogin();
        }
    }

    self.collapse = function() {
        var options = document.getElementById("nav-bar-options");
        var account = document.getElementById("nav-bar-account");

        if(options.style.display == "") {
            options.style.display = "flex";
        } else {
            options.style.display = "";
        }

        if(account.style.display == "") {
            account.style.display = "flex";
        } else {
            account.style.display = "";
        }
    }

    self.modalLogin = function() {
        
        var modal = document.getElementById("modal");
        
        if(modal.style.visibility == "") {
            modal.style.visibility = "visible";
        } else {
            modal.style.visibility = "";
        }
       
        self.isModalOpen(!self.isModalOpen());            
    }    

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
        if(close.style.display == "") {
            close.style.display = "none";
        }

/*         if(close.style.visibility == "") {
            close.style.visibility = "hidden";
        } */
    }

/*     var options = document.getElementById("nav-bar-options");
    var btns = options.getElementsByClassName("btn");
    
    for(var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active");
            this.className += " active";
        })
    }   */

    let progress = document.getElementById("progress");
    let circles = document.querySelectorAll(".circle");

    self.previous = function() {
        self.currentActive(self.currentActive() - 1);
        if(self.currentActive() < 1) {
            self.currentActive(1);
        }

        update();
    };

    self.next = function() {
        self.currentActive(self.currentActive() + 1);
        if(self.currentActive() > circles.length) {
            self.currentActive(circles.length);
        }

        update();
    };

    self.step1 = function() {
        self.currentActive(1);
        update();
    };

    self.step2 = function() {
        if(self.currentActive() > 1) {
            self.currentActive(2);
            update();
        }
    };

    self.step3 = function() {
        if(self.currentActive() > 2) {
            self.currentActive(3);
            update();
        }
    };

    self.step4 = function() {
        if(self.currentActive() > 3) {
            self.currentActive(4);
            update();
        }
    };

    function update() {
        circles.forEach((circle, idx) => {
            if(idx < self.currentActive()) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        const actives = document.querySelectorAll(".active");

        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

/*          if(self.currentActive() === 1) {
            prev.disabled = true;
        } else if(self.currentActive() === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        } */
    }

}

$(function() {
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});