const HomePage = require('../models/homePage')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// get homepage details => /api/v1/homepage

exports.getHomePage = catchAsyncErrors (async(req, res,next) =>{
    const homePage = await HomePage.findById('60278bf744a2ec0d50d80785');

    if(!homePage){
        return res.status(404).json({
            success: false,
            message: 'homepage not found'
        })
    }
    res.status(200).json({
        success: true,
        homePage
    })
})


  // update homepage details => /api/v1/updatehome
  exports.updateHomePage = catchAsyncErrors (async(req,res,next)=>{
      let homePage = await HomePage.findById('60278bf744a2ec0d50d80785');
      
      if(!homePage){
        return res.status(404).json({
            success: false,
            message: 'homepage not found'
        })
    }

    homePage = await HomePage.findByIdAndUpdate('60278bf744a2ec0d50d80785', req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        homePage 
    })
  })