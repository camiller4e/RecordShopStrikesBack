const assert = require("assert");
const Record = require("../record.js");

describe("Record", function(){
  let record;

  beforeEach(function(){
    record = new Record("Chance the Rapper", "Acid Rap", "Hip-Hop", 10);
  })

  it("should have an artist", function(){
    assert.strictEqual("Chance the Rapper", record.artist);
  })

  it("should have a title", function(){
    assert.strictEqual("Acid Rap", record.title);
  })

  it("should have an artist", function(){
    assert.strictEqual("Hip-Hop", record.genre);
  })

  it("should have an artist", function(){
    assert.strictEqual(10, record.price);
  })

  it("should display record as a string", function(){
    const expected = "Chance the Rapper, Acid Rap, Hip-Hop, £10."
    const actual = record.showRecord();
    assert.deepStrictEqual(expected, actual);
  })

})
