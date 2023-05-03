const charUri = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
const $charDiv = $('DIV#character');

$.ajax({
  url: charUri,
  dataType: 'json'
}).done((data) => {
  $charDiv.text(data.name);
});
