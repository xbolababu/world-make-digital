function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
    tab.style.opacity = 0;
  });
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active');
  setTimeout(() => { activeTab.style.opacity = 1; }, 50);
}
