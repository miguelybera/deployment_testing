const Inquiry = require('../models/inquiry');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// Create new Inquiry => /api/v1/inquiry/new
exports.newInquiry = catchAsyncErrors( async (req, res, next) => {
    const { 
        fullName,
        customerEmail,
        companyName,
        contactNum,
        concernType,
        message
    } = req.body;

    const inquiry = await Inquiry.create({
        fullName,
        customerEmail,
        companyName,
        contactNum,
        concernType,
        message,
        sentAt: Date.now()

    })

    res.status(200).json({
        success: true,
        inquiry
    })

})