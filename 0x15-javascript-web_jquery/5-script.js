const $listElement = $('UL.my_list');
const $addItemElement = $('DIV#add_item');

$addItemElement.on('click', () => {
  $listElement.append('<li>Item</li>');
});
