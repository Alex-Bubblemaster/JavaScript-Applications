var templateLoader = (function () {
    function get(templateName) {
        var promise = new Promise(function (resolve, reject) {
                var url = 'templates/' + templateName + '.template.html';
                $.ajax({
                    url: url,
                    success: function (html) {
                        resolve(html);
                    }
                })
            });

        return promise;
    }

    return {
        get: get
    }
}());
