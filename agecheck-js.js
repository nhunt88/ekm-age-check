(function () {

  //Find site username
  var ageCheckUser = document.getElementById("ageCheckUser").innerHTML;

  //LocalStorage key constants
  var ageCheckDisplayedKey = "ageCheckDisplayed"+ageCheckUser;
  var ageCheckDisplayedExpiryDateKey = "ageCheckDisplayedExpiryDate"+ageCheckUser;


  //Constant for Expiry date in days
  var ageCheckDisplayedExpiryDays = 28;

  //Element references
  var acModal = document.getElementById('acModal');
  var acYesBtn = document.getElementById('acYesBtn');
  var acNoBtn = document.getElementById('acNoBtn');

  function isAgeCheckDisplayed() {
    return localStorage.getItem(ageCheckDisplayedKey) != null;
  }

  function setAgeCheckDisplayed(val) {
    var isDisplayed = val == null ? true : val;
    localStorage.setItem(ageCheckDisplayedKey, isDisplayed);
  }

  function getAgeCheckDisplayExpiryDate() {
    var datestring = localStorage.getItem(ageCheckDisplayedExpiryDateKey);
    return new Date(datestring);
  }

  function getAgeCheckExpiryDate(days) {
    var now = new Date();
    var expiryDate = new Date();
    expiryDate.setDate(now.getDate() + days);
    return expiryDate;
  }

  function setAgeCheckDisplayedExpiryDate(days)  {
    var expiryDays = days == null ? ageCheckDisplayedExpiryDays : days;
    var expiryDate = getAgeCheckExpiryDate(expiryDays);
    localStorage.setItem(ageCheckDisplayedExpiryDateKey, expiryDate);
  }

  function setDisplayed() {
    setAgeCheckDisplayed();
    setAgeCheckDisplayedExpiryDate();
    acModal.style.display = 'none';
  }

  function hasAgeCheckDisplayExpired() {
    var now = new Date();
    return getAgeCheckDisplayExpiryDate() <= now;
  }

  function ageCheckDisplayedCheck() {
    acModal.style.display = !isAgeCheckDisplayed() || hasAgeCheckDisplayExpired() ? "block" : "none";
      if(isAgeCheckDisplayed() && hasAgeCheckDisplayExpired()) {
        setAgeCheckDisplayed(null);
      }
  }

  acYesBtn.onclick = function() {
    setDisplayed();
  }

  acNoBtn.onclick = function() {
    location.href = "http://www.google.co.uk";
  }

  ageCheckDisplayedCheck()
})();
