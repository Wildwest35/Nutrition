function DashboardModel() {
	self = this;

/* 	self.toggle = function() {
		var sidebar = document.getElementById("sidebar");
		sidebar.style.width = "80px";
	}; */
}

$(function() {
	ko.applyBindings(new DashboardModel(), document.getElementById('body'));
});