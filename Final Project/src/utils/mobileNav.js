const mobileNav = () => {
  const barsBtn = document.querySelector('#bars-btn');
  const mobileNav = document.querySelector('#mobile-nav');
  const handleBarsBtn = () => mobileNav.style.display = "flex";
  barsBtn.addEventListener('click', handleBarsBtn);

  const close = document.querySelector('#close');
  const handleCloseBtn = () => mobileNav.style.display = "none";
  close.addEventListener('click', handleCloseBtn);
}

export default mobileNav;