demoApp.factory('simpleFactory', function () {

    var customers = [
       { name: 'John Smith', city: 'San Francisco' },
       { name: 'Jonn Doe', city: 'New York City' },
       { name: 'Jane Doe', city: 'Miami' }
    ];

    var factory = {};

    factory.getCustomers = function () {
        return customers;
    };

    return factory;
});