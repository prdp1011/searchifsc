const AddBank = require('../models/bank.model');
const constantdata = require('../../db.json')
const _ = require('lodash');

exports.add_bank = function (req, res) {

  const {bank, branch, ifsc, state, district} =  req.body;
  let product = new AddBank(
     {bank, branch, ifsc, state, district}
  );

  product.save(err => {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })
};
exports.branch_details = (req, res) => {
  AddBank.findById(req.params.id, (err, product) => {
      if (err) return next(err);
      res.send(product);
  })
};

exports.all_details = (req, res) => {
  AddBank.find({}, (err, product) => {
      if (err) return next(err);
      res.send(product);
  })
};
exports.getbanks = (req, res) => {
  res.json(constantdata.bank);
};
exports.states = (req, res) => {
 const state  = _.orderBy(_.uniq(_.map(constantdata.cities, 'State')))
  res.json(state);
};
exports.districts = (req, res) => {
  const id = req.body.state
  const state  = _.orderBy(_.uniq(
    (_.map(
      _.reject(constantdata.cities, (list) => list.State !== id),
      'District'))));
   res.json(state);
 };

