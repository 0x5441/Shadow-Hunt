chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: myCustomScript
  });
});

function myCustomScript() {
    

      function hoverProfilePics() {
        let profile_pics = document.querySelectorAll("[data-testid='primaryColumn'] > .css-175oi2r > .css-175oi2r:nth-child(3) > .css-175oi2r > div > div div.r-172uzmj");

        const hovering = new MouseEvent('mouseover', {
          bubbles: true,
          cancelable: true,
          view: window
        });

        for (let i = 0; i < 100; i++) {
          var profile_pic = profile_pics[i];
          if (profile_pic) {
            profile_pic.dispatchEvent(hovering);
          }
        }
      }



function clickFollowButtons() {
  const followButtons = Array.from(document.querySelectorAll("button[aria-label*='Follow @']")).filter(
    btn => btn.innerText.trim().toLowerCase() === "follow"
  );

  followButtons.forEach((el, i) => {
    setTimeout(() => {
      // التأكد مرة ثانية قبل الضغط
      if (el.innerText.trim().toLowerCase() === "follow") {
        el.click();
      }
      // إذا لم يكن "Follow" يتم تخطيه تلقائياً
    }, i * 1000); // كل عنصر بعد 1 ثانية من السابق
  });
}

hoverProfilePics();
setTimeout(() => {
  clickFollowButtons();
}, 2000);
  

}