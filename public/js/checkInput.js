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
			target.minLengthMessage(`* Το ελάχιστο μέγεθος χαρακτήρων είναι ${min}.`);
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
			target.maxLengthMessage(`* Το μέγιστο μέγεθος χαρακτήρων είναι ${max}.`);
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
			var number = /^[0-9]+$/;
			console.log(number.test(newVal));
			if(number.test(newVal)){
				target.numericError(false);
				target.numericMessage(null);
			}else{
				target.numericError(true);
				target.numericMessage(`${message}`);				
			}
		} else {
			console.log('numbers else');
			target.numericError(null);
			target.numericMessage(null);			
		}
	})
}

ko.extenders.alpha = function(target, message) {
	target.alphaError = ko.observable(null);
	target.alphaMessage = ko.observable(null);

	target.subscribe(function(newVal){
		if(newVal) {
			var number = /^[a-zA-Z_]+$/;
			console.log(number.test(newVal));
			if(number.test(newVal)){
				target.alphaError(false);
				target.alphaMessage(null);
			}else{
				target.alphaError(true);
				target.alphaMessage(`${message}`);				
			}
		} else {
			console.log('numbers else');
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
				target.alphaNumericMessage(`${message}`);				
			}
		} else {
			//console.log('numbers else');
			target.alphaNumericError(null);
			target.alphaNumericMessage(null);			
		}
	})
}

ko.extenders.isEmail = function(target, option) {
	target.emailError = ko.observable(null);
	target.emailErrorMessage = ko.observable(null);

	target.subscribe(function(newVal) {
		if(newVal) {
			var regEx = /\S+@\S+\.\S+/;
			console.log(regEx.test(newVal));
        	if(regEx.test(newVal)){
				target.emailError(false);
				target.emailErrorMessage(null);
			}else{
				target.emailError(true);
				target.emailErrorMessage(`${option}`);
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
		console.log(newVal);
		if(newVal) {
			//console.log("1");
			target.emptyFieldError(false);
			target.emptyFieldMessage(null);
		} else {
			//console.log("2");
			target.emptyFieldError(true);
			target.emptyFieldMessage(`${message}`);
		}
	})
}