const About = require('../models/about');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

// Create new about us details => /api/v1/newabout
exports.newAbout = catchAsyncErrors ( async(req,res,next) => {
    const about = await About.create(req.body);
    res.status(201).json({
        success: true,
        about
    })
})

// get all about us details => /api/v1/allaboutus
exports.getAllAbout = catchAsyncErrors (async(req,res,next) => {
    const abouts = await About.find();

    res.status(200).json({
        success: true,
        abouts
    })
})

// get single about us details => /api/v1/about/:id
exports.getSingleAbout = catchAsyncErrors (async(req,res,next) => {
    const about = await About.findById(req.params.id);

    if(!about){
        return next(new ErrorHandler('About us details Not Found', 404));
    }

    res.status(200).json({
        success:true,
        about
    })
})

// update single about us details => /api/v1/about/:id

exports.updateAbout = catchAsyncErrors (async( req, res, next) =>{
    let about = await About.findById(req.params.id);

    if(!about){
        return next(new ErrorHandler('About us details Not Found', 404));
    }

    about = await About.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success:true,
        about
    })

})





