#!/usr/bin/node
const original = require('./101-data').list;
console.log(original);
const mappedList = original.map (function (er, index) {
  return (er * index);
});
console.log(mappedList);
