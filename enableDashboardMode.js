function applyForElement(el, applyFn) {
    console.log(el);
    const element = NodeList.prototype.isPrototypeOf(el) || HTMLCollection.prototype.isPrototypeOf(el) ? el[0] : el;
    console.log(element);
    if (element) {
        applyFn(element);
    }
}

function hideKibanaUI() {
    applyForElement(document.getElementsByClassName('global-nav'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByClassName('app-wrapper'), (e) => e.style.left = 0);
    applyForElement(document.getElementsByName('discover'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByName('discover-search'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByName('dashboard'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByName('dashboard-search'), (e) => e.style.display = 'none');
}

function hideJiraUI() {
    applyForElement(document.getElementById('header'), (e) => e.style.display = 'none');
    applyForElement(document.getElementById('announcement-banner'), (e) => e.style.display = 'none');
    applyForElement(document.getElementById('ghx-header'), (e) => e.style.display = 'none');
    applyForElement(document.getElementById('ghx-operations'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByClassName('aui-sidebar'), (e) => e.style.display = 'none');
    applyForElement(document.getElementsByClassName('aui-page-panel'), (e) => e.style['padding-left'] = 0);
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
    hideKibanaUI();
    hideJiraUI();
    enableFullScreen();
})();