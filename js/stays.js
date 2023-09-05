/* tabs */
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs-btn');
    const tabsContent = document.querySelectorAll('.tabs-content');
  
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs-btn')) {
          const tabsPath = e.target.dataset.tabsPath;
          tabsBtn.forEach(el => el.classList.remove('tabs-btn__active'));
          document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-btn__active');
          tabsHandler(tabsPath);
        }
      })
    }
  
    const tabsHandler = path => {
      tabsContent.forEach(el => el.classList.remove('tabs-content__active'));
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__active');
    }
  })