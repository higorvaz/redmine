function displayErrorMessage(message) {
  $('#error_message').text(message);
  $('#error').css("display", "block");
  setTimeout(() => {
    $('#error').css("display", "none");
    $('#error_message').text("");
  }, 5000);
}

function displaySuccessMessage(message) {
  $('#error_message').text(message);
  $('#error').css("display", "block");
  setTimeout(() => {
    $('#error').css("display", "none");
    $('#error_message').text("");
  }, 5000);
}