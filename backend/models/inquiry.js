const mongoose = require('mongoose');
const validator = require('validator');

const inquirySchema = mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    customerEmail:{
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    companyName:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true,
        minlength: [11, 'Your number cannot be lower than 11 characters'],
        maxlength: [13, 'Your number cannot exceed 13 characters']
    },
    position:{
        type: String,
        required: true
    },
    concernType:{
        type: String,
        required: true,
        enum: {
            values: [
                'Inquiry',
                'Appointment',
                'Others'
            ]
        }
    },
    customerMessage: {
        type: String,
        required: true
    },
    inquiryStatus: {
        type: String,
        required: true,
        default: 'Unresolved'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Inquiry', inquirySchema);