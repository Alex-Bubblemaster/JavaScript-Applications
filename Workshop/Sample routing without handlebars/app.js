var sammyApp = Sammy('#content', function () {

    this.get('#/', function () {
        $('#content').html('Starting Point')
    });

    this.get('#/home', function () {
        $('#content').html('Welcome Home');
    });

    this.get('#/items', function () {
           db.get()
            .then(function (res) {
               var items = res.result;
                var $container = $('<div/>');
                items.forEach(function (item) {
                    $('<a/>')
                        .attr('href', '#/items/' + item.id)
                        .css('display', 'block')
                        .html(item.name)
                        .appendTo($container);
                });
                $('#content').html($container.html());
            })
    });

    this.get('#/items/:id', function () {
        db.getById(this.params.id)
            .then(function (res) {
                $('#content').html(
                    $('<h1/>')
                        .html(res.result.name)
                );
            });
    });
});

sammyApp.run('#/');