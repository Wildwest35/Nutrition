function MainViewModel() {
	self = this;
    self.isModalOpen = ko.observable(false);
    self.currentActive = ko.observable(1);


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
    };    

    self.closeLoginWarning = function() {
        var close = document.getElementById("warning");
        
        if(close.style.display == "") {
            close.style.display = "none";
        }
    };
}

$(function() {
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});