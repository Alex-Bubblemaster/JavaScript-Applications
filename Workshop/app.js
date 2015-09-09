var sammyApp = Sammy('#content', function () {

    this.get('#/', function () {
        $('#content').html('Starting Point')
    });

    this.get('#/home', function () {
        $('#content').html('Welcome Home');
    });

    this.get('#/items', function () {
        var items;
        db.get()
            .then(function (res) {
                items = res.result;
                return templateLoader.get('items');
            })
            .then(function (html) {
                var template = Handlebars.compile(html);
                $('#content').html(template({items: items}));
            });
    });

    this.get('#/items/:id', function () {
        var item;
        db.getById(this.params.id)
            .then(function (res) {
                item = res.result;
                return templateLoader.get('item');
            })
            .then(function (html) {
                var template = Handlebars.compile(html);
                $('#content').html(template({item: item}));
            })
    });

    this.get('#/add', function (context) {
        templateLoader.get('add')
            .then(function (html) {
                $('#content').html(html);
            })
            .then(function () {
                var item = {};
                $('#add-new').click(function () {
                    item.name = $('#new-name').val();
                    db.save(item);
                    context.redirect('#/items');
                    // location.href = '#/items'; - old school way without context
                });
            });
    });
});

sammyApp.run('#/');
