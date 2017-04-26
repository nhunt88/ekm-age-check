# ekm-age-check
Age check modal for desktop and mobile sites

Options can be set under the script tag in the HTML for the desktop and mobile themes, can now set whether cookies are stored for fixed lengths or time or are stored just for the session. If they are for fixed lengths, can set the number of days they are stored for. Can also now set set the redirect URL when a user clicks no on the modal as well.

session:

Set either true or false

delay:

Set a integer value for number of days cookies are stored for, the script will always use a minimum of one day.

redirect:

Set the redirect URL when a user clicks no, can either be a full external URL such as 'https://wwww.google.co.uk' or a relative one such as 'index.asp' to take them back to the home page for the site.

Uses cookies to for the check, with the site username appended to keep it usable across multiple sites. Once it has been setup, users can use editable elements to change any of the text, and colours can be edited under theme > colours. Colours and elements are shared between mobile and desktop site, but if they need to be different, just add -mobile to the colour and element references in the mobile theme.

#Installation
  1. Drag and drop agecheck-js.css and agecheck-js.js into the file manager
  2. Copy contents from html files into the theme, links go in the header, the modal divs and script tags to be inserted just below the opening body tag
