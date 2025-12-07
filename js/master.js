const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
  const header_menu_detail = document.querySelector('.main-nav');
  header_menu_detail.classList.toggle('menu_active');
  responsive_menu_btn.classList.toggle('active');
}

// ゼミ班アコーディオン
document.querySelectorAll('.accordion-header').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;

    // 他を閉じたい場合はここを有効化
    document.querySelectorAll('.accordion-item').forEach((el) => {
      if (el !== item) {
        el.classList.remove('active');
        el.querySelector('.accordion-content').style.maxHeight = null;
      }
    });

    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
