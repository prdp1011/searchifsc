const express = require('express');
const  router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const bank_controller = require('../controllers/bank.controller');


// a simple test url to check that all of our files are communicating correctly.
// bank
router.get('/bankList', bank_controller.all_details);
router.get('/bank', bank_controller.getbanks);
router.get('/state', bank_controller.states);
router.post('/districts', bank_controller.districts);
// router.get('/:id', bank_controller.branch_details);
router.post('/create', bank_controller.add_bank);


module.exports = router;
