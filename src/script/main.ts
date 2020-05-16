declare let global: any;

// @ts-ignore
global.colors = require('../colors');

type Theme = {
  primaryColor: string;
  accentColor: string;
}

function initTheme(theme: Theme): void {
  const root = document.documentElement;
  if (root) {
      if (theme.primaryColor in global.colors && theme.accentColor in global.colors) {
      const primaryColors = global.colors[theme.primaryColor];
      const accentColors = global.colors[theme.accentColor];
      for (let i = 100; i <= 900; i += 100) {
        root.style.setProperty(`--primary-color-${i}`, primaryColors[i]);
        root.style.setProperty(`--accent-color-${i}`, accentColors[i]);
      }
    }
  }
}

// @ts-ignore
window.initTheme = initTheme;

const navBtn = document.getElementById('nav-btn') as HTMLElement;
if (navBtn) {
  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    document.getElementsByClassName('nav-content')[0]!.classList.toggle('active');
  });
}
