const assert = require("assert");

const Record = require("../record.js");
const RecordStore = require("../record_store.js");
const Customer = require("../customer.js")

describe("Customer", function(){
  let curlyboy, bobby, recordStore, record1, record2, record3, record4;

  beforeEach(function(){
    curlyboy = new Customer("Curly Boy", 50);
    bobby = new Customer("Bobby Tables", 10);

    recordStore = new RecordStore("Stevie's Good Records", "Glasgow");

    record1 = new Record("Chance the Rapper", "Acid Rap", "Hip-Hop", 10);
    record2 = new Record("TWICE", "#TWICE", "K-Pop", 20);
    record3 = new Record("Vulfpeck", "Mr. Finish Line", "Funk/Soul", 12);
    record4 = new Record("Action Bronson", "Mr. Wonderful", "Hip-Hop", 8);

    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
  })

  it("should have a name", function(){
    assert.strictEqual("Curly Boy", curlyboy.name);
  })

  it("should have a wallet", function(){
    assert.strictEqual(50, curlyboy.wallet);
  })

  it("should be able to buy records", function(){
    const expected = [record1];
    const actual = curlyboy.recordCollection;
    curlyboy.buyRecord(record1);
    assert.deepStrictEqual(expected, actual);
  })

  it("wallet amount should go down by record price when buying", function(){
    curlyboy.buyRecord(record1);
    const expected = 40;
    const actual = curlyboy.wallet;
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to sell records", function(){
    curlyboy.recordCollection = [record1, record2, record3];
    curlyboy.sellRecord(record1)
    const expected = [record2, record3];
    const actual = curlyboy.recordCollection;
    assert.deepStrictEqual(expected, actual);
  })

  it("should not be able to buy if balance is too low", function(){
    bobby.buyRecord(record3);
    const expected = [];
    const actual = curlyboy.recordCollection;
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to view the total value of their collection", function(){
    curlyboy.recordCollection = [record1, record2, record3];
    const expected = 42;
    const actual = curlyboy.totalValue();
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to view the total value of all records of a given Genre", function(){
    curlyboy.recordCollection = [record1, record2, record3, record4];
    const expected = 18;
    const actual = curlyboy.getValueByGenre("Hip-Hop");
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to view their most valuable record", function(){
    curlyboy.recordCollection = [record1, record2, record3, record4];
    const expected = record2;
    const actual = curlyboy.mostValuableRecord();
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to sort their records by value in ascending order", function(){
    curlyboy.recordCollection = [record1, record2, record3, record4];
    const expected = [record4, record1, record3, record2];
    const actual = curlyboy.sortRecordsByValue("price");
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to sort their records by value in descending order", function(){
    curlyboy.recordCollection = [record1, record2, record3, record4];
    const expected = [record2, record3, record1, record4];
    const actual = curlyboy.sortRecordsByValue("price").reverse();
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to compare the value of their collection with another RecordCollector", function(){
    curlyboy.recordCollection = [record1, record2, record3];
    bobby.recordCollection = [record4];
    const expected = "Your collection is worth £42 and their collection is worth £8"
    const actual = curlyboy.compareCollection(bobby);
    assert.deepStrictEqual(expected, actual);
  })

})
