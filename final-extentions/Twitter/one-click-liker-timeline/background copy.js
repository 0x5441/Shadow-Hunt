chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: myCustomScript
  });
});

function myCustomScript() {

  const likes = document.querySelectorAll('[data-testid="like"]');

  likes.forEach((el, i) => {
    setTimeout(() => {
      el.click();
    }, i * 1000); // كل عنصر بعد 1 ثانية من السابق
  });


  for (let i = 0; i < 100; i++) {

    var profile_pic = profile_pics[i]
    profile_pic.dispatchEvent(hovering);

  }


}
