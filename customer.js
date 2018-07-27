const _ = require("lodash");

const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.recordCollection = [];

}

module.exports = Customer;
