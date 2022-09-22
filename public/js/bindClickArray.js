ko.bindingHandlers.clickArray = {

    init: function (element, valueAccessor) {
      var handlers = valueAccessor();
  
      ko.applyBindingsToNode(element, {
        click: function () {
          for (var i = 0; i < handlers.length; i++) {
            handlers[i].apply(this, arguments);
          }
        }
      });
    }
  
  };