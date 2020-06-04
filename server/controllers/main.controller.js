const AddBank = require('../models/bank.model');
const _ = require('lodash');

exports.dropDownValues = (req, res) => {
  AddBank.find(req.body.data, (err, list) => {
    if (err) return next(err);
    console.log(list)
    const data =  _.uniq(_.map(list, b => b[req.body.field]));
    res.send(data);
  })
};
exports.getDetails = (req, res) => {
  AddBank.find(req.body, (err, product) => {
      if (err) return next(err);
      res.send(product);
  })
};


