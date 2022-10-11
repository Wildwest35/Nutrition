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
        var containerSummary = document.querySelectorAll('.container-summary');
		var summaryFieldsSections = document.querySelectorAll(".summary-fields-sections");
		var summaryElements = document.querySelectorAll('.summary-elements');
		var summaryFields = document.querySelectorAll('.summary-fields');
		var elementMiddle = document.querySelectorAll('.element-middle');
        //var calendar = document.querySelectorAll('.calendar');
		var weekdaysDiv = document.querySelectorAll('.weekdays div');
		//var daysDiv = document.querySelectorAll('.days div');
        var optionsH1 = document.querySelectorAll('.options h1');
        var snackBasics = document.querySelectorAll('.snack-basic');
        var toggle = document.getElementById("nav-toggle");
		var bodywidth = window.innerWidth;

		if(isCheck) {
			isChecked = toggle.checked;
		}

		var pc = window.matchMedia("(min-width: 1201px)");
        var laptop = window.matchMedia("(min-width: 993px) and (max-width: 1200px)");
		var tablet = window.matchMedia("(min-width: 769px) and (max-width: 992px)");
		var mobile = window.matchMedia("(max-width: 768px)");
        
        removeAttribute();

        if(pc.matches) {
            removeAttribute();
        } else if(laptop.matches) {
            laptopCheck();
            if(isChecked) {
                if((bodywidth) > 992 && (bodywidth) <= 1200) {
                    //pcCheck();
                } else {
                    //laptopCheck();
                }
            } else {
                if((bodywidth - Math.abs(wide - mid)) > 992 && (bodywidth - Math.abs(wide - mid)) <= 1200) {
                    //pcCheck();
                } else {
                    //laptopCheck();
                }
            }
        } else if(tablet.matches) {
            //laptopCheck();
            tabletCheck();
            if(isChecked) {
                if((bodywidth) > 768 && (bodywidth) <= 992) {
                    //laptopCheck();
                } else {
                    //tabletCheck();
                }
            } else {
                if((bodywidth - Math.abs(wide - mid)) > 768 && (bodywidth - Math.abs(wide - mid)) <= 992) {
                   //laptopCheck();
                } else {
                    //tabletCheck();
                }
            }
        } else if(mobile.matches) {
            removeAttribute();
            tabletCheck();
        }

        function removeAttribute() {
            for (var i=0; i<containerSummary.length; i++) {
                containerSummary[i].removeAttribute("style");
            }	
            for (var i=0; i<summaryFieldsSections.length; i++) {
                summaryFieldsSections[i].removeAttribute("style");
            }	
            for (var i=0; i<summaryElements.length; i++) {
                summaryElements[i].removeAttribute("style");
            }	
            for (var i=0; i<summaryFields.length; i++) {
                summaryFields[i].removeAttribute("style");
            }	
            for (var i=0; i<elementMiddle.length; i++) {
                elementMiddle[i].removeAttribute("style");
            }
            for (var i=0; i<weekdaysDiv.length; i++) {
                weekdaysDiv[i].removeAttribute("style");
            }	
            for (var i=0; i<optionsH1.length; i++) {
                optionsH1[i].removeAttribute("style");
            }	    
            for (var i=0; i<snackBasics.length; i++) {
                snackBasics[i].removeAttribute("style");
            }	            
        }

		function pcCheck() {
			containerSummary.forEach(element => {
				element.style.flexDirection = "row";
                element.style.alignItems = "center";
			});

			summaryFieldsSections.forEach(element => {
				element.style.flexDirection = "row";
				element.style.margin = "0.5rem 0";
			});

			summaryElements.forEach(element => {
				element.style.width = "100%";
                element.style.flexDirection = "column";
				element.style.margin = "0 0.5rem";
			});

			summaryFields.forEach(element => {
				element.style.margin = "0";
			});

			elementMiddle.forEach(element => {
				element.style.flexDirection = "row";
			});
            
            weekdaysDiv.forEach(element => {
				element.style.fontSize = "1.5rem";
			});

            optionsH1.forEach(element => {
				element.style.fontSize = "1.5rem";
			});

            snackBasics.forEach(element => {
				element.style.flexDirection = "row";
			});
		}

		function laptopCheck() {
            containerSummary.forEach(element => {
                element.style.flexDirection = "row";
				element.style.alignItems = "flex-start";
			});

            summaryFieldsSections.forEach(element => {
				element.style.flexDirection = "column";
				element.style.margin = "0 0";
			});

			summaryElements.forEach(element => {
                element.style.width = "100%";
                element.style.flexDirection = "column";
				element.style.margin = "0.4rem 0";
			});

            summaryFields.forEach(element => {
				element.style.margin = "0.4rem";
			});

            elementMiddle.forEach(element => {
				element.style.flexDirection = "row";
			});
            
            weekdaysDiv.forEach(element => {
				element.style.fontSize = "1.3rem";
			});

            optionsH1.forEach(element => {
				element.style.fontSize = "1.3rem";
			});

            snackBasics.forEach(element => {
				element.style.flexDirection = "row";
			});
		}

        function tabletCheck() {			
            containerSummary.forEach(element => {
				element.style.flexDirection = "column";
                element.style.alignItems = "center";
			});

            summaryFieldsSections.forEach(element => {
				element.style.flexDirection = "row";
                element.style.margin = "0.2rem 0";
			});

            summaryElements.forEach(element => {
                element.style.width = "100%";
                element.style.flexDirection = "column";
				element.style.margin = "0.2rem 0.4rem";
			});

            summaryFields.forEach(element => {
				element.style.margin = "0";
			});

            elementMiddle.forEach(element => {
				element.style.flexDirection = "row";
			});   
            
            weekdaysDiv.forEach(element => {
				element.style.fontSize = "1.3rem";
			});

            optionsH1.forEach(element => {
				element.style.fontSize = "1.3rem";
			});
        }
	}
});