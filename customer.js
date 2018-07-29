const _ = require("lodash");

const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.recordCollection = [];

}

Customer.prototype.buyRecord = function (record) {
  if (this.wallet >= record.price){
    this.recordCollection.push(record);
    this.wallet -= record.price;
  }
};

Customer.prototype.sellRecord = function (record) {
  _.remove(this.recordCollection, record);
  this.wallet += record.price;
};

Customer.prototype.totalValue = function () {
  return _.reduce(this.recordCollection, (accumulator, record) => accumulator += record.price, 0)
};

Customer.prototype.getValueByGenre = function (genre) {
  let records = _.filter(this.recordCollection, record => record.genre === genre);
  return _.reduce(records, (accumulator, record) => accumulator += record.price, 0);
};

Customer.prototype.mostValuableRecord = function () {
  return _.maxBy(this.recordCollection, "price");
};

Customer.prototype.sortRecordsByValue = function (property) {
  return _.sortBy(this.recordCollection, property)
};

Customer.prototype.compareCollection = function (customer) {
  return "Your collection is worth £" + this.totalValue() + " and their collection is worth £" + customer.totalValue(); + "."
};


module.exports = Customer;
