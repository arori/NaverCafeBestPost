(function () {
  var CAFE_REG_EXP = /^https?:\/\/cafe\.naver\.com\/.+[^?]/;

  function checkForValidUrl(tabId, changeInfo, tab) {
    if (CAFE_REG_EXP.test(tab.url)) {
      chrome.pageAction.show(tabId);
    }
  };

  chrome.tabs.onUpdated.addListener(checkForValidUrl);
  
  chrome.pageAction.onClicked.addListener(function (tab) {
    var extractedUrl = tab.url.split("?")[0];
    chrome.tabs.update(tab.tabId, { url: extractedUrl + '?iframe_url=/BestArticleList.nhn' });
  });
})();