// Create a Record object that has an Artist, Title, Genre, and Price

const _ = require("lodash");

const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.showRecord = function () {
  return this.artist + ", " + this.title + ", " + this.genre + ", " + "£" + this.price.toString() + "."
};

module.exports = Record;
