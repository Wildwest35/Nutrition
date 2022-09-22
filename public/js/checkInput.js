/* To onoma aytwn twn duo parametrwn borei na einai oti theleis */
/* Mesa sto target einai to idio to observable to opoio exeis kanei extend */
/* Mesa sto min einai h parametros me thn opoia kaleis ton extender */
/* Sto sygkekrimeno paradeigma einai o minimum arithmos */

ko.extenders.minimumLength = function(target, min) {
	target.minLengthError = ko.observable(null);
	target.minLengthMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal.length >= min) {
			target.minLengthError(false);
			target.minLengthMessage(null);
		} else {
			target.minLengthError(true);
			target.minLengthMessage(`${self.minlenght()} ${min}.`);
		}

		if(!newVal){
			target.minLengthError(null);
			target.minLengthMessage(null);
		}
	})
}

ko.extenders.maximumLength = function(target, max) {
	target.maxLengthMessage = ko.observable(null);
	target.maxLengthError = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal.length <= max) {
			target.maxLengthError(false);
			target.maxLengthMessage(null);
		} else {
			target.maxLengthError(true);
			target.maxLengthMessage(`${self.maxlenght()} ${max}.`);
		}

		if(!newVal) {
			target.maxLengthError(null);
			target.maxLengthMessage(null);
		}
	})
}

ko.extenders.numeric = function(target, message) {
	target.numericError = ko.observable(null);
	target.numericMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[0-9.]+$/;
			if(number.test(newVal)){
				target.numericError(false);
				target.numericMessage(null);
			} else {
				target.numericError(true);
				target.numericMessage(`${self.numeric()}`);				
			}
		} else {
			target.numericError(null);
			target.numericMessage(`${self.numeric()}`);			
		}
	})
}

ko.extenders.alpha = function(target, message) {
	target.alphaError = ko.observable(null);
	target.alphaMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[a-zA-Z_]+$/;
			if(number.test(newVal)){
				target.alphaError(false);
				target.alphaMessage(null);
			}else{
				target.alphaError(true);
				target.alphaMessage(`${message}`);				
			}
		} else {
			target.alphaError(null);
			target.alphaMessage(null);			
		}
	})
}

ko.extenders.alphaNumeric = function(target, message) {
	target.alphaNumericError = ko.observable(null);
	target.alphaNumericMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[0-9a-zA-Z_]+$/;
			
			if(number.test(newVal)){
				target.alphaNumericError(false);
				target.alphaNumericMessage(null);
			}else{
				target.alphaNumericError(true);
				target.alphaNumericMessage(`${self.alphaNumeric()}`);				
			}
		} else {
			target.alphaNumericError(null);
			target.alphaNumericMessage(null);			
		}
	})
}

ko.extenders.alphaNumericLatins = function(target, message) {
	target.alphaNumericLatinError = ko.observable(null);
	target.alphaNumericLatinMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal) {
			var number = /^[a-zA-Z0-9α-ωΑ-ΩίϊΐόάέύϋΰήώΊΪΌΆΈΎΫΉΏ\.\%\_\-\s]+$/;
			
			if(number.test(newVal)) {
				target.alphaNumericLatinError(false);
				target.alphaNumericLatinMessage(null);
			} else {
				target.alphaNumericLatinError(true);
				target.alphaNumericLatinMessage(`${self.alphaNumericLatin()}`);				
			}
		} else {
			target.alphaNumericLatinError(null);
			target.alphaNumericLatinMessage(null);			
		}
	})
}

ko.extenders.alphaNumericMail = function(target, message) {
	target.alphaNumericMailError = ko.observable(null);
	target.alphaNumericMailMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[0-9a-zA-Z_]+$/;
			var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(number.test(newVal) || pattern.test(newVal)){
				target.alphaNumericMailError(false);
				target.alphaNumericMailMessage(null);
			} else 
				if(newVal.indexOf("@") !== -1) {				
					target.alphaNumericMailError(true);
					target.alphaNumericMailMessage(`${self.isEmail()}.`);
				} else {
					target.alphaNumericMailError(true);
					target.alphaNumericMailMessage(`${self.alphaNumeric()}.`);						
				}
		} else {
			target.alphaNumericMailError(null);
			target.alphaNumericMailMessage(null);			
		}
	})
}

ko.extenders.checkUniqueField = function(target, option) {
	target.checkUniqueFieldError = ko.observable(null);
	target.checkUniqueFieldMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			let o = {
				table: option.table,
				newVal: newVal
			}

		    $.post('./php/checkUniqueField.php', o, function(data) {
				if(data.status == "ok") {
					target.checkUniqueFieldError(true);
					target.checkUniqueFieldMessage(option.message);
				} else if(data.status == "error") {
					target.checkUniqueFieldError(false);
					target.checkUniqueFieldMessage(null);
				}            
			});		
		} else {

		}
	})
}

ko.extenders.isEmail = function(target, option) {
	target.emailError = ko.observable(null);
	target.emailErrorMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal) {
			var pattern1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var pattern2 = /\S+@\S+\.\S+/;
			var regEx = pattern;
        	if(regEx.test(newVal)){
				target.emailError(false);
				target.emailErrorMessage(null);
			}else{
				target.emailError(true);
				target.emailErrorMessage(`${self.isEmail()}`);
			}
		} else {
			target.emailError(null);
			target.emailErrorMessage(null);
		}
	})
}

ko.extenders.isEmptyField = function(target, message) {
	target.emptyFieldError = ko.observable(null);
	target.emptyFieldMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal) {
			target.emptyFieldError(false);
			target.emptyFieldMessage(null);
		} else {
			target.emptyFieldError(true);
			target.emptyFieldMessage(`${self.empties()}`);
		}
	})
}