const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    customerName:{
        type: String,
        required: [true, 'This is required'],
        minLength: [2, 'Customer name must be more than 2 characters'],
        maxLength: [45, 'Customer name cannot be more than 45 characters']
    }, 
    location:{
        type: String,
        required: true,
        minLength: [5, 'Location must be at least 5 characters'],
        maxLength: [45, 'Location must not be more than 45 characters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be at least 10 characters long'],
        maxLength: [45, 'Description must not be more than 45 characters long']
    },
    typeService:{
        type:String,
        required: true,
        enum:{values: ['Jumpstart', 'Vehicle Lockout', 'Flat Tire', 'Battery Replacement', 'Oil Change', 'Tire Rotation', 'Breaks/Rotors'], message:'Service not in list of acceptable services'}
    },
    phoneNumber:{
        type:Number,
        required: true,
        minLength:[10, 'Phone number must be at least 10 characters long'],
        maxLength:[45, 'Phone number must not be longer than 20 characters']
    },
    
}, {timestamps:true})
const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;