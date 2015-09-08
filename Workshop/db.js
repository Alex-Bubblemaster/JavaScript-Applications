var db = (function () {
    var items = [
        {name: 'Sasha', id: 1},
        {name: 'Alesia', id: 2},
        {name: 'Dodorara', id: 3}
    ];

    function get() {
        var promise = new Promise(function (resolve, reject) {
            resolve({result: items});
        });
        return promise;
    }

    function getById(id) {
        id = +id;
        var promise = new Promise(function (resolve, reject) {
            for (var i = 0; i < items.length; i += 1) {

                if (items[i].id === id) {
                    resolve({result: items[i]});
                    return;
                }
            }
        });

        return promise;
    }

    var lastId = 0;
    function save(item) {
        var promise = new Promise(function (resolve, reject) {
            item.id = lastId += 1;
            items.push(item);
            resolve(item);
        });
        return promise;
    }

    return {
        get: get,
        getById: getById,
        save: save
    };
}());
