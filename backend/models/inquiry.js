const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({

    fullName:{
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
    contactNum:{
        type: Number,
        required: true,
        min: [9000000000, 'Phone Number is 10 characters only (format: 9xxxxxxxxx)'],
        max: [9999999999, 'Phone Number is 10 characters only (format: 9xxxxxxxxx)']
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
    message: {
        type: String,
        required: true
    },
    inquiryStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Inquiry', inquirySchema);