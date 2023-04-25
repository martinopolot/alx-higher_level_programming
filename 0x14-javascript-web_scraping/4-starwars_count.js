#!/usr/bin/node

const request = require('request');
const starWarsUri = process.argv[2];
let time = 0;

request(starWarsUri, function (_err, _res, body) {
  body = JSON.parse(body).results;

  for (let m = 0; m < body.length; ++i) {
    const characters = body[m].characters;

    for (let j = 0; j < characters.length; ++j) {
      const character = characters[j];
      const characterId = character.split('/')[5];

      if (characterId === '18') {
        time += 1;
      }
    }
  }

  console.log(time);
});
