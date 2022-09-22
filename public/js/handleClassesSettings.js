$(document).ready(function() {

	var isChecked = true;

	$("#mediaCalc").on('click', function() {
		check(true);
	}); 

	window.addEventListener('resize', function() {
		check(false);
	});	

	function check(isCheck) {
		var wide = 345;
        var mid = 80;
		var settingField = document.querySelectorAll(".setting-field");
		var settingFieldh4 = document.querySelectorAll('.setting-field h4');
		var settingBlock = document.querySelectorAll('.setting-block');
		var settingHTML = document.querySelectorAll('.setting-html');
		var wrongspan = document.querySelectorAll('.wrong span');
		var error = document.querySelectorAll('.wrong .error');
		var toggle = document.getElementById("nav-toggle");
		var main = document.getElementById("main");
		var bodywidth = window.innerWidth;

		if(isCheck) {
			isChecked = toggle.checked;
		}

		var pc = window.matchMedia("(min-width: 1201px)");		
		var laptop = window.matchMedia("(min-width: 769px) and (max-width: 1200px)");
		var mobile = window.matchMedia("(max-width: 768px)");

		if(pc.matches) {
			removeAttribute();
		} else if(laptop.matches) {
			if(isChecked) {
				if((bodywidth) > 768 && (bodywidth) <= 1200) {
					wideCheck();
				} else {
					midCheck();
				}
			} else {
				if((bodywidth - Math.abs(wide - mid)) > 768 && (bodywidth - Math.abs(wide - mid)) <= 1200) {
					wideCheck();
				} else {
					midCheck();
				}
			}
		} else if(mobile.matches) {
			removeAttribute();
		}

        function removeAttribute() {
            for (var i=0; i<settingField.length; i++) {
                settingField[i].removeAttribute("style");
            }	
            for (var i=0; i<settingFieldh4.length; i++) {
                settingFieldh4[i].removeAttribute("style");
            }	
            for (var i=0; i<settingBlock.length; i++) {
                settingBlock[i].removeAttribute("style");
            }	
            for (var i=0; i<settingHTML.length; i++) {
                settingHTML[i].removeAttribute("style");
            }	
            for (var i=0; i<wrongspan.length; i++) {
                wrongspan[i].removeAttribute("style");
            }
			for (var i=0; i<error.length; i++) {
                error[i].removeAttribute("style");
            }	            
        }

		function midCheck() {
			settingField.forEach(element => {
				element.style.flexDirection = "column";
				element.style.justifyContent = "center";
			});

			settingFieldh4.forEach(element => {
				element.style.width = "100%";
				element.style.marginRight = "0";
				element.style.textAlign = "left";
			});

			settingBlock.forEach(element => {
				element.style.width = "100%";
			});

			settingHTML.forEach(element => {
				element.style.padding = "1rem 1rem";
			});

			wrongspan.forEach(element => {
				element.style.width = "100%";
			});

			error.forEach(element => {
				element.style.marginLeft = "0";
			});	
		}

		function wideCheck() {
			settingField.forEach(element => {
				element.style.flexDirection = "row";
				element.style.justifyContent = "start";
			});

			settingFieldh4.forEach(element => {
				element.style.width = "160px";
				element.style.marginRight = "1rem";
				element.style.textAlign = "right";
			});

			settingBlock.forEach(element => {
				element.style.width = "250px";
			});

			settingHTML.forEach(element => {
				element.style.padding = "1.5rem 1.5rem";
			});	

			wrongspan.forEach(element => {
				element.style.width = "calc(100% - 177px)";
			});

			error.forEach(element => {
				element.style.marginLeft = "177px";
			});	
		}
	}
});