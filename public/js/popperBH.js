ko.bindingHandlers.popperBH = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		tippy(element, {
			content: valueAccessor(),
		});
	},
};