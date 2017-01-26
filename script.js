// Input variables
var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')

// What should happen
var update = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var profile =
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '</h1>' +
    '<p>' + description + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
      'or give me a call at ' +
      '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
    '</p>'
  var htmlPreview = document.getElementById('html-preview')
  htmlPreview.innerHTML = profile
  var rawPreview = document.getElementById('raw-preview')
  rawPreview.textContent = profile
}

// When it should happen
firstNameInput.addEventListener('input', update)
lastNameInput.addEventListener('input', update)
descriptionInput.addEventListener('input', update)
emailInput.addEventListener('input', update)
phoneInput.addEventListener('input', update)
