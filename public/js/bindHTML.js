ko.bindingHandlers.bindHTML = {
    init: function () {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        //console.log(element);
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());

        var elementsToAdd = element.children;
        
        for (var i = 0; i < elementsToAdd.length; i++) {
            ko.cleanNode(elementsToAdd[i]); //Clean node from Knockout bindings
            ko.applyBindings(bindingContext, elementsToAdd[i]);
        }
    }
};