let colorFieldValue = $("div > .label > span:contains('Card color field')").parent().parent().children('.value').text();
let colorFieldView = $("div > .label > span:contains('Card color field')").parent().parent().children('.value');
colorFieldView.css({ 'height': '40px', 'width': '60px' });
colorFieldView.css('background-color',colorFieldValue);

$("a.icon.icon-edit").bind("click", function () {
  let colorField = $("p > label > span:contains('Card color field')").parent().parent().children('input').attr('type', 'color');
  colorField.css({ 'height': '40px', 'width': '60px' });
  colorField.attr("type", "color");
});
