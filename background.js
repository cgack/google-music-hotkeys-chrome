chrome.commands.onCommand.addListener(function(command) {
  var musicTabOpened = false;
  chrome.tabs.query({url: 'https://play.google.com/music/*'}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i];
      musicTabOpened = true;
      chrome.tabs.executeScript(tab.id, {code: "(document.getElementsByClassName('material-player-middle')[0].childNodes[" + command + "]).click();" });
    }
    if (!musicTabOpened) {
      chrome.tabs.create({url: 'https://play.google.com/music/listen', active: true}, function(tab) {
      });
    }
  });
});
