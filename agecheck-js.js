(function () {

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

  //Create Cookie
  function acCreateCookie(name,value,days) {
    var date= new Date();
    date.setDate(date.getDate()+days);
    var expires = "; expires="+date+"; path=/";

    document.cookie = name+"="+value+expires;
  }

  //Read Cookie
  function acReadCookie(name) {
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
    return acReadCookie(ageCheckDisplayedKey) != null;
  }

  function setAgeCheckDisplayed(val) {
    var isDisplayed = val == null ? true : val;
    acCreateCookie(ageCheckDisplayedKey, isDisplayed, ageCheckDisplayedExpiryDays);
  }


  function setDisplayed() {
    setAgeCheckDisplayed();
    acModal.style.display = 'none';
  }

  function ageCheckDisplayedCheck() {
    acModal.style.display = !isAgeCheckDisplayed() ? "block" : "none";
  }

  acYesBtn.onclick = function() {
    setDisplayed();
  }

  acNoBtn.onclick = function() {
    location.href = "http://www.google.co.uk";
  }

  ageCheckDisplayedCheck()
})();