let dashboardModeButton = document.getElementById('dashboardModeButton');

dashboardModeButton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'enableDashboardMode.js'});
    window.close();
  });
};