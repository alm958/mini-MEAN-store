var productsController = require('./../controllers/productsCont.js');
var customersController = require('./../controllers/customersCont.js');
var ordersController = require('./../controllers/ordersCont.js');

module.exports = function(app){

    app.get('/products', productsController.index);
    app.post('/products', productsController.create);
    app.put('/products/:id', productsController.update);
    app.delete('/products/:id', productsController.delete);

    app.get('/customers', customersController.index);
    app.post('/customers', customersController.create);
    app.delete('/customers/:id', customersController.delete);

};
