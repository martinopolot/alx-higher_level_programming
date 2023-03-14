#!/usr/bin/node


const firstList = require('./101-data').list;
console.log(firstList);
const mappedList = firstList.map (function (e, index) {
  return (e * index);
});
console.log(mappedList);
