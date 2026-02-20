// تحديد العناصر
const heroSection = document.getElementById('hero');
const videoWrapper = document.getElementById('videoWrapper');
const heroText = document.getElementById('heroText');

// تمدد الفيديو عند حركة الماوس
heroSection.addEventListener('mousemove', () => {
    videoWrapper.classList.add('expanded');
    heroText.classList.add('fade-out');
});

// العودة للوضع الطبيعي عند خروج الماوس
heroSection.addEventListener('mouseleave', () => {
    videoWrapper.classList.remove('expanded');
    heroText.classList.remove('hide'); // تأكد من توافق الأسماء مع الـ CSS
});

// تأثير الترويسة عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.background = '#05142b';
        header.style.padding = '20px 80px';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '40px 80px';
    }
});
