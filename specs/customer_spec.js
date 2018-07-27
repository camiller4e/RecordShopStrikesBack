const assert = require("assert");

const Record = require("../record.js");
const RecordStore = require("../record_store.js");
const Customer = require("../customer.js")

describe("Customer", function(){
  let curlyboy, bobby, recordStore, record1, record2, record3

  beforeEach(function(){
    curlyboy = new Customer("Curly Boy", 50);
    bobby = new Customer("Bobby Tables", 10);

    recordStore = new RecordStore("Stevie's Good Records", "Glasgow");

    record1 = new Record("Chance the Rapper", "Acid Rap", "Hip-Hop", 10);
    record2 = new Record("TWICE", "#TWICE", "K-Pop", 20);
    record3 = new Record("Vulfpeck", "Mr. Finish Line", "Funk/Soul", 12);

    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
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

})
