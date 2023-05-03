const $headerElement = $('header');
const $divRedHeader = $('DIV#red_header');

$divRedHeader.on('click', function () {
    $headerElement.css('color', '#FF0000');
});
