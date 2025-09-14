// Smooth scroll utility
export const smoothScrollTo = (targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    const headerHeight = 80; // Height of fixed header
    const targetPosition = target.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Handle navigation clicks
export const handleNavClick = (e, targetId) => {
  e.preventDefault();
  smoothScrollTo(targetId);
};