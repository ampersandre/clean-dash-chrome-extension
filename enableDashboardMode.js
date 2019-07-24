function applyForElement(element, applyFn) {
    if (element && element[0]) {
        applyFn(element[0]);
    }
}

function hideUI() {
    applyForElement(document.getElementsByClassName('global-nav'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByClassName('app-wrapper'), (e) => e.style.left = 0);
    applyForElement(document.getElementsByName('discover'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByName('discover-search'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByName('dashboard-search'), (e) => e.style.display = 'none');
}

function enableFullScreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
}

(function() {
    hideUI();
    enableFullScreen();
})();