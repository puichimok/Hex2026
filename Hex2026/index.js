const menuBtn = document.querySelector('.btn-reset');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', function () {
    // 1. 抓取「探索更多」按鈕與「第四張卡片」
    const loadMoreBtn = document.getElementById('btn-load-more');
    const hiddenCard = document.querySelector('.card-to-hide');

    // 安全檢查：確保畫面上真的有這兩個元素才執行
    if (loadMoreBtn && hiddenCard) {
      loadMoreBtn.addEventListener('click', function () {
        // 2. 幫第四張卡片加上 .active 讓它顯示出來
        hiddenCard.classList.add('active');
        
        // 3. 卡片都顯示出來後，「探索更多」按鈕功成身退，將它隱藏
        loadMoreBtn.style.display = 'none';
      });
    }
  });


/* ==========================================================================
    Nelson FAQ (常見問題) 摺疊選單點擊控制腳本
   ========================================================================== */

// 🛡️ 防禦防護：確保網頁所有 HTML 標籤都載入完成後才執行腳本
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 抓取網頁中所有的 FAQ 點擊觸發標頭 (.faq-header)
    const faqHeaders = document.querySelectorAll('.faq-header');

    // 2. 使用迴圈為每一個 FAQ 標頭綁定點擊監聽事件
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            
            // 🎯 核心黑魔法：向上找到當前點擊標頭的最鄰近外層卡片容器 (.faq-collapse-item)
            const currentItem = header.closest('.faq-collapse-item');
            
            // 3. 切換 active 類別：
            // 如果卡片目前沒有 active（收合狀態），點擊後會自動「加上 active」展開答案；
            // 如果卡片目前已有 active（展開狀態），點擊後會自動「拔掉 active」收回答案。
            currentItem.classList.toggle('active');
            
        });
    });
});

// 等待網頁完全載入後執行
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 抓取第一張卡片的「前往專案」按鈕
    const openBtn = document.querySelector('.project-card:nth-of-type(1) .projects-btn');
    // 2. 抓取 Modal 本體與關閉按鈕
    const modal = document.getElementById('project-modal-1');
    const closeBtn = document.getElementById('btn-close-modal');

    // 防禦型安全檢查：確保畫面上找得到按鈕才執行繫結
    if (openBtn && modal && closeBtn) {
        
        // 點擊前往專案 -> 開啟 Modal (加上 show 類別)
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // 貼心細節：開啟時鎖定背景網頁不亂滾動
        });

        // 點擊 X 按鈕 -> 關閉 Modal (移除 show 類別)
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // 還原背景網頁滾動
        });

        // 點擊黑色半透明遮罩空白處也可以關閉彈窗
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});
  