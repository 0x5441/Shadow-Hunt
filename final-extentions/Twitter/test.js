// جمع كل الأزرار التي تحتوي على "Follow"
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