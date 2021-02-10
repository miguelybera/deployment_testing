const HomePage = require('../models/homePage')

// Get all homepage details /api/v1/home/6020a10c2c9185106868088e
exports.getHomePage = async( req, res, next) =>{

    const homePage = await HomePage.findById('6020a10c2c9185106868088e');
    res.status(200).json({
        success: true,
        homePage
    })
}

// Update HomePage details => /api/v1/admin/home/:id

exports.updateHomePage = async (req,res,next) => {

    let homePage = await HomePage.findById('6020a10c2c9185106868088e');

    if(!homePage) {
        return res.status(404).json({
            success: false,
            message: 'Home Page details not found'
        })
    }

    homePage = await HomePage.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        homePage
    })
}