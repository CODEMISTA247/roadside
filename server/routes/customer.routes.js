const CustomerController = require('../controllers/customer.controller')

module.exports = app => {
    app.get('/api/allCustomers', CustomerController.allCustomers)
    app.get('/api/oneCustomer/:id', CustomerController.getOneCustomer)
    app.post('/api/postCustomer', CustomerController.createCustomer)
    app.put('/api/updateCustomer/:id', CustomerController.updateCustomer)
    app.delete('/api/deleteCustomer/:id', CustomerController.deleteCustomer)
}