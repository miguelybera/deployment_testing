const express = require('express');
const router = express.Router();

const { newInquiry } = require('../controllers/inquiryController');

const { isAuthenticatedUser, authorizeRoles } =  require('../middlewares/auth');

router.route('/inquiry/new').post(newInquiry);

module.exports = router;