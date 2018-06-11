chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({},function(tabs){
      tabs.forEach(function(tab){
        chrome.tabs.update(tab.id, {url: "https://web.archive.org/save/"+tab.url});
      });
   });
});
