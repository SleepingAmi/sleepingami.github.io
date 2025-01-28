function redirectPage(link) {
    window.open(link, '_blank');
}

function toggleTheme() {
      const body = document.body;
      const fakeout = document.querySelector('.fakeout');
      const slider = document.querySelector('.toggle-theme .slider');

      body.classList.toggle('lighter-theme');
      fakeout.classList.toggle('light-theme');

      // Update slider position based on the current theme
      if (body.classList.contains('lighter-theme')) {
          slider.style.transform = 'translateX(100%)';
      } else {
          slider.style.transform = 'translateX(0)';
      }
  }