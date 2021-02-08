const express = require('express')
const router = express.Router();

const{ getHomePage, updateHomePage } = require('../controllers/homePageController')

router.route('/homePage').get(getHomePage);
router.route('/homePage/:id').put(updateHomePage);



module.exports = router;