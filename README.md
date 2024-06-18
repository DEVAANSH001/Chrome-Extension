Chrome Extension: PITCH - BLACK

This Chrome extension allows users to manage and toggle themes just for the specific site not all 

How It Works
Message Listener for Theme Updates:

The extension listens for messages instructing it to update the theme based on the current site's domain.
If the domain is in the whitelist, the theme is enabled; otherwise, it's disabled.
Initial Theme Setting:

Upon loading a page, the extension checks the stored whitelist.
If the current domain is in the whitelist, the theme is applied.
Toggle Theme Button:

A button allows users to toggle the theme for the current website.
Clicking the button adds or removes the site's domain from the whitelist.
The extension updates the stored whitelist and applies the theme change immediately.
Initialization on Installation:

When the extension is installed, it initializes the whitelist as empty.
Usage
Install the Extension:

Load the extension into Chrome from the extension settings.
Toggle Theme:

Use the "Toggle Theme" button to add or remove the current website from the whitelist.
Automatic Theme Application:

The extension automatically applies the theme to websites in the whitelist on page load.
Key Functions
Enable: Applies the theme to the website (e.g., enabling dark mode).
Disable: Reverts the website to its default theme (e.g., disabling dark mode).
Notes
Ensure the enable and disable functions are correctly defined to manage the theme changes.
The whitelist is stored in Chrome's synced storage, making it consistent across devices where the user is signed in.


HOW TO MAKE IT RUN 
