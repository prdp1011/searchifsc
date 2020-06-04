const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddBankSchema = new Schema({
    bank: {type: String, required: true},
    branch: {type: String, required: true},
    ifsc: {type: String, required: true},
    state: {type: String, required: true},
    district: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('AddBank', AddBankSchema);
