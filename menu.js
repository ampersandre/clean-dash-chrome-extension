document.getElementById('fullscreenButton').onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'fullscreenMode.js'});
    window.close();
  });
};

document.getElementById('cleanUIButton').onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'cleanUI.js'});
  });
};