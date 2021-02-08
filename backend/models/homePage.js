const mongoose = require('mongoose')

const homePageSchema = mongoose.Schema({

    productDescription: {
        type: String
    },
    productImage1:[ {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    productImage2: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    titleBackground: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    servicesBackground:[ {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
    servicesDescription: {
        type: String
    }

})

module.exports = mongoose.model('Home', homePageSchema);