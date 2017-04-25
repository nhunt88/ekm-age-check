(function () {

  if (typeof Object.assign != 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  //Find site username
  var ageCheckUser = document.getElementById("ageCheckUser").innerHTML;

  //Cookie key constants
  var ageCheckDisplayedKey = "ageCheckDisplayed"+ageCheckUser;

  //Constant for Expiry date in days
  var ageCheckDisplayedExpiryDays = 28;


  //Element references
  var acModal = document.getElementById('acModal');
  var acYesBtn = document.getElementById('acYesBtn');
  var acNoBtn = document.getElementById('acNoBtn');

  var options = Object.assign({}, defaultOptions);

  //Create Cookie for fixed period
  function CreateCookieFixed(name,value,options) {
    option.delay < 1 ? options.delay = 1 : null;
    var date = new Date();
    date.setDate(date.getDate() + options.delay);
    var expires = '; expires' + date + '; path=/';

    document.cookie = name + '=' + value + expires;
  }

  function CreateCookieSession(name, value) {
    document.cookie = name + '=' + value + ';';
  }

  //Read Cookie
  function ReadCookie(name) {
    var nameEquals = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEquals) == 0) return c.substring(nameEquals.length,c.length);
    }
    return null;
  }

  function isAgeCheckDisplayed() {
    return ReadCookie(ageCheckDisplayedKey) != null;
  }

  function setAgeCheckDisplayed() {
    var isDisplayed = true;
    options.session == null || options.sesson === fasle ?
    CreateCookieFixed(ageCheckDisplayedKey, isDisplayed, options) :
    CreateCookieSession(ageCheckDisplayedKey, isDisplayed)
  }

  function setDisplayed() {
    setAgeCheckDisplayed();
    acModal.style.display = 'none';
  }

  function ageCheckDisplayedCheck(options) {
    acModal.style.display = isAgeCheckDisplayed() ? "none" : "block";
  }

  function selectNo()  {
    location.href = "http://www.google.co.uk";
  }

  acYesBtn.addEventListener('click',  setDisplayed);
  acNoBtn.addEventListener('click', selectNo);

  window.ekmAgeCheck = {
    check: ageCheckDisplayedCheck
  };

})();
