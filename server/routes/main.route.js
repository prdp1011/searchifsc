const express = require('express');
const  router = express.Router();
const controller = require('../controllers/main.controller');


router.post('/lists', controller.dropDownValues);
router.post('/find', controller.getDetails);


module.exports = router;
