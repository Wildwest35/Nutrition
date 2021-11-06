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
    
}

$(function() {
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});