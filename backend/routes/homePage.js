const express = require('express')
const router = express.Router();

const{getHomePage, updateHomePage, newHomePage} = require('../controllers/homePageController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/home').get(getHomePage);
router.route('/admin/updatehome').put(isAuthenticatedUser,authorizeRoles('admin'),updateHomePage);





module.exports = router;