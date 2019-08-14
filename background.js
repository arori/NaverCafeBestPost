(function () {
  function checkForValidUrl(tabId, changeInfo, tab) {
    if (/^https?:\/\/cafe\.naver\.com\/.+[^?]/.test(tab.url)) {
      chrome.pageAction.show(tabId);
    }
  };

  function redirectBestPost(tab) {
    var extractedUrl = tab.url.split("?")[0];
    chrome.tabs.update(tab.tabId,
      { url: extractedUrl + '?iframe_url=/BestArticleList.nhn' });
  }

  chrome.tabs.onUpdated.addListener(checkForValidUrl);
  chrome.pageAction.onClicked.addListener(redirectBestPost);
})();