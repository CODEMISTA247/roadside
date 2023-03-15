const Customer = require('../models/customer')

module.exports = {

    allCustomers: (req, res) => {
        Customer.find()
            .then((allCustomers) => {
                //console.log(allCustomers)
                res.json(allCustomers)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOneCustomer: (req, res) => {
        Customer.findOne({ _id: req.params.id})
            .then((oneCustomer) => {
                res.json(oneCustomer)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createCustomer: (req, res) => {
        Customer.create(req.body)
            .then((newCustomer) => {
                res.json(newCustomer)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    updateCustomer: (req, res) => { 
        Customer.findOneAndUpdate( {_id: req.params.id } ,req.body, {new: true, runValidators: true } )
            .then(updatedCustomer => {
                res.json(updatedCustomer)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteCustomer: (req, res) => {
        Customer.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}