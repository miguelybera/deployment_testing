const mongoose = require('mongoose');

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
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
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