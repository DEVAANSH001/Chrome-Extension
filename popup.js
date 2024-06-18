//button function
document.getElementById('toggle-theme').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const url = new URL(tabs[0].url);
    const domain = url.hostname;
    chrome.storage.sync.get(['whitelist'], (result) => {
      let whitelist = result.whitelist || [];
      if (whitelist.includes(domain)) {
        whitelist = whitelist.filter(item => item !== domain);//visited site
      } else {
        whitelist.push(domain);
      }
      chrome.storage.sync.set({whitelist});
      chrome.tabs.sendMessage(tabs[0].id, {action: 'updateTheme', whitelist});
    });
  });
});
