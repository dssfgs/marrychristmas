// script.js
// 輪播功能
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (!slides.length) return; // 非首頁
  
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideInterval();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideInterval();
}

function resetSlideInterval() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => plusSlides(1), 5000);
  }
}

// 自動輪播
function initCarousel() {
  let slides = document.getElementsByClassName("carousel-slide");
  if (slides.length > 0) {
    showSlides(slideIndex);
    slideInterval = setInterval(() => plusSlides(1), 5000);
  }
}

// 彈出優惠視窗
function initModal() {
  const modal = document.getElementById("promoModal");
  if (!modal) return;
  
  const promoBtn = document.getElementById("promoBtn");
  const promoTriggers = document.querySelectorAll(".promo-trigger");
  const closeBtn = document.querySelector(".close");
  
  // 首頁主按鈕
  if (promoBtn) {
    promoBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  }
  
  // 產品頁的按鈕
  promoTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  });
  
  // 關閉按鈕
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }
  
  // 點擊視窗外關閉
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}

// 聯絡表單提交 (模擬)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const feedback = document.getElementById("formFeedback");
    if (feedback) {
      feedback.textContent = "✅ 訊息已發送！我們會盡快回覆您。";
      feedback.style.color = "#00e5ff";
      form.reset();
    }
  });
}

// 初始化所有功能
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initModal();
  initContactForm();
  
  // 設定初始圓點
  const dots = document.getElementsByClassName("dot");
  if (dots.length > 0) {
    dots[0].classList.add("active");
  }
});