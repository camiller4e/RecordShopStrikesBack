const assert = require("assert");
const Record = require("../record.js");
const RecordStore = require("../record_store.js");

describe("RecordStore", function(){
  let recordStore, record1, record2, record3;

  beforeEach(function(){
    recordStore = new RecordStore("Stevie's Good Records", "Glasgow");
    record1 = new Record("Chance the Rapper", "Acid Rap", "Hip-Hop", 10);
    record2 = new Record("TWICE", "#TWICE", "K-Pop", 20);
    record3 = new Record("Vulfpeck", "Mr. Finish Line", "Funk/Soul", 12);

    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  })

  it("should have a name", function(){
    assert.strictEqual("Stevie's Good Records", recordStore.name);
  })

  it("should have a city", function(){
    assert.strictEqual("Glasgow", recordStore.city);
  })

  it("should start with an empty balance", function(){
    assert.strictEqual(0, recordStore.balance);
  })

  it("should be able to add records to inventory", function(){
    const expected = [record1, record2, record3];
    const actual = recordStore.inventory;
    assert.deepStrictEqual(expected, actual);
  })

  it("should display inventory with each item as a string", function(){
    const expected = ["Chance the Rapper, Acid Rap, Hip-Hop, £10.", "TWICE, #TWICE, K-Pop, £20.", "Vulfpeck, Mr. Finish Line, Funk/Soul, £12."]
    const actual = recordStore.viewInventory();
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to sell record and increase balance", function(){
    recordStore.sell(record1);
    const expected1 = [record2, record3]
    const actual1 = recordStore.inventory;
    const expected2 = 10;
    const actual2 = recordStore.balance;
    assert.deepStrictEqual(expected1, actual1);
    assert.deepStrictEqual(expected2, actual2);
  })

  it("should be able to show current balance and value of unsold records", function(){
    recordStore.sell(record1);
    const expected = "Balance: £10, Stock Value: £32"
    const actual = recordStore.report();
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to search by genre", function(){
    const expected = [record1];
    const actual = recordStore.searchByGenre("Hip-Hop");
    assert.deepStrictEqual(expected, actual);
  })



})
