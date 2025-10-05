chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: myCustomScript
  });
});

function myCustomScript() {
let scrollCount = 0;
let maxScrolls = 1;
let scrollDistance = 500; // المسافة التي تريد التمرير بها في كل مرة (يمكنك تعديلها)

const likes = document.querySelectorAll('[data-testid="like"]');





function scrollDown() {
  if (scrollCount < maxScrolls) {    
    window.scrollBy(0, scrollDistance);
      scrollCount++;
        setTimeout(scrollDown, 500); // الانتظار لمدة نصف ثانية بين كل تمرير
  }
}

function likeAndScrollLoop() {
  let loopCount = 0;
  const maxLoops = 10;
  function doLikesThenScroll() {
    const likes = document.querySelectorAll('[data-testid="like"]');
    let pressed = new Set();
    let likePressCount = 0;
    function pressLike() {
      if (likePressCount < 5) {
        // ابحث عن زر لايك غير مضغوط ولم يتم الضغط عليه سابقاً
        let likeBtn = Array.from(likes).find(el => el.getAttribute('aria-pressed') !== 'true' && !pressed.has(el));
        if (likeBtn) {
          likeBtn.click();
          pressed.add(likeBtn);
          likePressCount++;
          // وقت عشوائي بين كل ضغط وضغط (من ثانية إلى 2 ثانية تقريباً)
          const delay = 1000 + Math.random() * 1000;
          setTimeout(pressLike, delay);
        } else {
          // إذا لم يوجد زر لايك مناسب انتقل للتمرير
          doScroll();
        }
      } else {
        doScroll();
      }
    }
    function doScroll() {
      let scrollCount = 0;
      let maxScrolls = 1;
      let scrollDistance = window.innerHeight * 0.75;
      function scrollDown() {
        if (scrollCount < maxScrolls) {
          window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
          scrollCount++;
          setTimeout(scrollDown, 500);
        } else {
          loopCount++;
          if (loopCount < maxLoops) {
            setTimeout(doLikesThenScroll, 1000);
          }
        }
      }
      setTimeout(scrollDown, 5000); // انتظر 5 ثواني قبل بدء التمرير
    }
    pressLike();
  }
  doLikesThenScroll();
}
likeAndScrollLoop();








}