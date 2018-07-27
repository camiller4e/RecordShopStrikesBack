// Create a Record Store that has a Name, City and an Inventory.

const _ = require("lodash");

const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.viewInventory = function () {
  return _.map(this.inventory, record => record.showRecord());
};

RecordStore.prototype.sell = function (record) {
  _.remove(this.inventory, record);
  this.balance += record.price;
};

RecordStore.prototype.report = function () {
  let stockValue = _.reduce(this.inventory, (accumulator, record) => accumulator += record.price, 0)

  return "Balance: " + "£" + this.balance + ", " + "Stock Value: " + "£" + stockValue;
};

RecordStore.prototype.searchByGenre = function (genre) {
  return _.filter(this.inventory, record => record.genre === genre)
};

// Bank.prototype.findBy = function(parameter, criteria){
//   return this.accounts.filter(function(account){
//     return account[parameter] === criteria;
//   })
// };


module.exports = RecordStore;
