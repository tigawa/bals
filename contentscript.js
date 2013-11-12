/**
 * TODO: pop.htmlから呼出すようにする。
 */ 
chrome.extension.onRequest.addListener(
  function(ignores, sender, sendResponse) {

  }
);


$(function(){
    $("h1, p, #box").box2d({'y-velocity':5});
});
