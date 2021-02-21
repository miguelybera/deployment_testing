const Inquiry = require('../models/inquiry');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendEmailInquiry = require('../utils/sendEmailInquiry');
const sendEmailToSender = require('../utils/sendEmailToSender');


// Create new Inquiry => /api/v1/inquiry/new
exports.newInquiry = catchAsyncErrors( async (req, res, next) => {
    const { 
        firstName,
        lastName,
        customerEmail,
        companyName,
        contactNumber,
        position,
        concernType,
        customerMessage
    } = req.body;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear(); 
    const hrs = String(today.getHours()).padStart(2,'0');
    const minutes = String(today.getMinutes()).padStart(2,'0');
    const todayDate = mm + '/' + dd + '/' + yyyy;
    const todayTime = hrs +':'+ minutes;

    const inquiry = await Inquiry.create({
        firstName,
        lastName,
        customerEmail,
        companyName,
        contactNumber,
        position,
        concernType,
        customerMessage,
        createdAt : todayDate + ' ' + todayTime
    })
    let employeeEmail = ''

    // Send Inquiry to email
    if(concernType === 'Inquiry'){
         employeeEmail = 'bonuan.abby@gmail.com';
    }
    if(concernType === 'Appointment'){
         employeeEmail = 'josemiguel.ybera.iics@ust.edu.ph';
    }
    if(concernType === 'Others'){
         employeeEmail = 'josemiguel.ybera.iics@ust.edu.ph';
    }
    
    const newMessage = 
    `Message Sent from Agile Technology's Website on ${todayDate} ${todayTime}\n\n
    Sent by: ${lastName}, ${firstName}\n
    Company: ${position} at ${companyName}\n\n
    Contact Information\n
    ${customerEmail}\n
    ${contactNumber}\n
    Concern: ${concernType}\n
    Message:\n
    ${customerMessage}\n`

    const messageToSender = `Your message has been sent to our company with the details:\n
                            ${newMessage}`
        await sendEmailInquiry({
            email: employeeEmail,
            subject: `New Customer Inquiry (Concern Type: ${req.body.concernType})`,
            newMessage
        })
        await sendEmailToSender({
            email: customerEmail,
            subject: `Message Sent to AGILE`,
            messageToSender
        })

    res.status(200).json({
        success: true,
        message: `Email sent to the department of chosen concern type`,
        inquiry
    })

})

// Get single inquiry => /api/v1/admin/inquiry/:id
exports.getSingleInquiry = catchAsyncErrors(async(req, res, next) => {
    const inquiry = await Inquiry.findById(req.params.id)

    if(!inquiry) {
        return next(new ErrorHandler('No Inquiry found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        inquiry
    })
})

// Get all inquiries => /api/v1/admin/inquiries
exports.allInquiries = catchAsyncErrors(async(req, res, next) =>{
    const inquiries = await Inquiry.find().sort({createdAt: -1})
    const inquiryCount = await Inquiry.countDocuments()

    res.status(200).json({
        success: true,
        inquiryCount,
        inquiries
    })

})

// Update inquiry status => /api/v1/admin/inquiry/:id
exports.updateInquiryStatus = catchAsyncErrors(async(req, res, next)=> {
    const newInquiryStatus = {
        inquiryStatus: req.body.inquiryStatus
    }

   const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, newInquiryStatus, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    if(!inquiry) {
        return next(new ErrorHandler('No Inquiry found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        inquiry
    })

})

// Delete Inquiry => /api/v1/admin/inquiry/:id
exports.deleteSingleInquiry = catchAsyncErrors(async(req, res, next) => {
    const inquiry = await Inquiry.findById(req.params.id)

    if(!inquiry) {
        return next(new ErrorHandler('No Inquiry found with this ID', 404))
    }

    await inquiry.remove();

    res.status(200).json({
        success: true
    })
})

