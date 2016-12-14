(function () {

  //Find site username
  var ageCheckUser = document.getElementById("ageCheckUser").innerHTML;

  //Cookie key constants
  var ageCheckDisplayedKey = "ageCheckDisplayed"+ageCheckUser;

  //Constant for Expiry date in days
  var ageCheckDisplayedExpiryDays = 28;

  // Default options
  var defaultOptions = {
    colours: {

    }
  };

  //Element references
  var acModal = document.getElementById('acModal');
  var acYesBtn = document.getElementById('acYesBtn');
  var acNoBtn = document.getElementById('acNoBtn');
  var acModalContent = document.getElementById('acModalContent');
  var acModalBody = document.getElementById('acModalBody');
  var acModalBtnMobile = document.getElementById('acModalBtnMobile');
  var acYesBtnMobile = document.getElementsByClassName('ekm-age-check-yes-btn-mob');
  var acNoBtnMobile = document.getElementsByClassName('ekm-age-check-no-btn-mob');

  //Create Cookie
  function CreateCookie(name,value,days) {
    var date= new Date();
    date.setDate(date.getDate()+days);
    var expires = "; expires="+date+"; path=/";

    document.cookie = name+"="+value+expires;
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

  function setAgeCheckDisplayed(val) {
    var isDisplayed = val == null ? true : val;
    CreateCookie(ageCheckDisplayedKey, isDisplayed, ageCheckDisplayedExpiryDays);
  }


  function setDisplayed() {
    setAgeCheckDisplayed();
    acModal.style.display = 'none';
  }

  function ageCheckDisplayedCheck(options) {
    //Colour references
    var mainBackgroundColour = options.colours.mainBackgroundColour;
    var mainTextColour = options.colours.mainTextColour;
    var btnTextColour = options.colours.btnTextColour;
    var btnYesColour = options.colours.btnYesColour;
    var btnNoColour = options.colours.btnNoColour;

    acModalContent.style.backgroundColor = mainBackgroundColour;
    acModalContent.style.color = mainTextColour;
    acModalBody.style.borderColor = mainTextColour;

    if(acModalBtnMobile != null) {
      acModalBtnMobile.style.color = btnTextColour;
      acYesBtnMobile[0].style.color = btnYesColour;
      acNoBtnMobile[0].style.color = btnNoColour;
    } else {
      acYesBtn.style.color = btnTextColour;
      acYesBtn.style.backgroundColor = btnYesColour;
      acYesBtn.style.borderColor = btnYesColour

      acYesBtn.onmouseover = function() {
        acYesBtn.style.color = btnYesColour;
        acYesBtn.style.backgroundColor = btnTextColour;

      }
      acYesBtn.onmouseout = function() {
        acYesBtn.style.color = btnTextColour;
        acYesBtn.style.backgroundColor = btnYesColour;

      }

      acNoBtn.style.color = btnTextColour;
      acNoBtn.style.backgroundColor = btnNoColour;
      acNoBtn.style.borderColor = btnNoColour

      acNoBtn.onmouseover = function() {
        acNoBtn.style.color = btnNoColour;
        acNoBtn.style.backgroundColor = btnTextColour;
      }

      acNoBtn.onmouseout = function() {
        acNoBtn.style.color = btnTextColour;
        acNoBtn.style.backgroundColor = btnNoColour;
      }
  }

    acModal.style.display = isAgeCheckDisplayed() ? "none" : "block";
  }

  acYesBtn.onclick = function() {
    setDisplayed();
  }

  acNoBtn.onclick = function() {
    location.href = "http://www.google.co.uk";
  }

  window.ekmAgeCheck = {
    runAgeCheck: ageCheckDisplayedCheck
  };
})();
