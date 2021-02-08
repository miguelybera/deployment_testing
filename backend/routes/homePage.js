const express = require('express')
const router = express.Router();

const{ getHomePage, updateHomePage } = require('../controllers/homePageController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/homePage').get(getHomePage);
router.route('/admin/homePage/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateHomePage);



module.exports = router;