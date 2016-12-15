# ekm-age-check
Age check modal for desktop and mobile sites

Tests whether or not the modal has been displayed previously, within the last 28 days by default, if not displays the check. Length of time between checks can be altered in the .js file under:

var ageCheckDisplayedExpiryDays = 28;

Uses cookies to for the check, with the site username appended to keep it usable across multiple sites. Once it has been setuo, users can use editable elements to change any of the text, and colours can be edited under theme > colours. Colours and elements are shared between mobile and desktop site, but if they need to be different, just add -mobile to the colour and element references in the mobile theme.

#Installation
  1. Drag and drop agecheck-js.css and agecheck-js.css into the file manager
  2. Copy contents from html files into the theme, links go in the header, the modal divs and script tags to be inserted just below the opening body tag
