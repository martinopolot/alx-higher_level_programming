const $headerElement = $('header');
const $updateHeaderElement = $('DIV#update_header');

$updateHeaderElement.on('click', () => {
  $headerElement.text('New Header!!!');
});
