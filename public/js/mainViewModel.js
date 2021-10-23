function MainViewModel() {
	self = this;
    
    self.collapse = function() {
        //console.log("collapse");
         if(document.getElementById("nav-bar-options").style.display == "") {
            document.getElementById("nav-bar-options").style.display = "flex";
        } else {
            document.getElementById("nav-bar-options").style.display = "";
        }

        if(document.getElementById("nav-bar-account").style.display == "") {
            document.getElementById("nav-bar-account").style.display = "flex";
        } else {
            document.getElementById("nav-bar-account").style.display = "";
        } /**/
    }
}

$(function() {
	ko.applyBindings( new MainViewModel(), document.getElementById('body'));
});