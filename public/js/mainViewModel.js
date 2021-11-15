function MainViewModel() {
	self = this;
    self.isModalOpen = ko.observable(false);

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
        } 

        self.isModalOpen(!self.isModalOpen());
    }    

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
/*         if(close.style.display == "") {
            close.style.display = "none";
        } */

        if(close.style.visibility == "") {
            close.style.visibility = "hidden";
        }
    }

    var options = document.getElementById("nav-bar-options");
    var btns = options.getElementsByClassName("btn");
    
    for(var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active");
            this.className += " active";
        })
    }  
    

}

$(function() {
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});