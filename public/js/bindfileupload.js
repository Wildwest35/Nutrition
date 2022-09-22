ko.bindingHandlers.fileUpload = {
/*     update: function(element, valueAccessor, allBindingsAccessor){
            var value = ko.utils.unwrapObservable(valueAccessor())
            if(element.files.length && value){
                self.uploadImg();
                var file = element.files[0];
                console.log(file);
                var url = allBindingsAccessor().url;
                console.log(url);
                //CharsetDecoder UTF8Decoder = Charset.forName("UTF8").newDecoder().onMalformedInput(CodingErrorAction.REPORT);
                xhr = new XMLHttpRequest();
                xhr.open("post", url, true);
                xhr.setRequestHeader("Content-Type", "image/*");
                xhr.setRequestHeader("X-File-Name", file.name);
                xhr.setRequestHeader("X-File-Size", file.size);
                xhr.setRequestHeader("X-File-Type", file.type);
                console.log("sending")

                // Send the file (doh)
                xhr.send(file);
            }
      } */

    init: function(element, valueAccessor) {
        $(element).change(function() {
            var file = this.files[0];
            if (ko.isObservable(valueAccessor())) {
                valueAccessor()(file);
            }
        });
    },

    update: function(element, valueAccessor, allBindingsAccessor) {
        var file = ko.utils.unwrapObservable(valueAccessor());
        var bindings = allBindingsAccessor();

        if (bindings.fileObjectURL && ko.isObservable(bindings.fileObjectURL)) {
            var oldUrl = bindings.fileObjectURL();
            if (oldUrl) {
                windowURL.revokeObjectURL(oldUrl);
            }
            bindings.fileObjectURL(file && windowURL.createObjectURL(file));
        }

        if (bindings.fileBinaryData && ko.isObservable(bindings.fileBinaryData)) {
            if (!file) {
                bindings.fileBinaryData(null);
            } else {
                var reader = new FileReader();
                reader.onload = function(e) {
                    bindings.fileBinaryData(e.target.result);
                };
                reader.readAsArrayBuffer(file);
            }
        }
    }
    }