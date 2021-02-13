const express = require('express')
const router = express.Router();

const{ getHomePage, updateHomePage } = require('../controllers/websiteController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/home/:id').get(getHomePage);
// id is '6020a10c2c9185106868088e'
router.route('/admin/home/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateHomePage);

module.exports = router;