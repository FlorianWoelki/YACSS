declare let global: any;

// @ts-ignore
global.colors = require('../colors');

type Theme = {
  primaryColor: string;
  accentColor: string;
  classes: string[];
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

      applyStyles(theme.classes);
    }
  }
}

function applyStyles(classes: string[]) {
  const style = document.createElement('style');
  style.type = 'text/css';

  let styles = [
    { name: 'flex', selector: 'flex-direction', rules: ['column', 'row', 'row-reverse', 'column-reverse'] },
    { name: '', selector: 'position', rules: ['fixed', 'relative', 'absolute'] },
    { name: 'align', selector: 'align-items', rules: ['center', 'flex-start', 'flex-end'] },
    { name: 'justify', selector: 'justify-content', rules: ['center', 'flex-start', 'flex-end', 'space-around', 'space-between'] },
    { name: 'overflow-y', selector: 'overflow-y', rules: ['auto', 'hidden', 'overlay', 'scroll'] },
  ];
  if (classes[0] !== 'all') {
    styles = styles.filter((style) => classes.indexOf(style.selector) > -1);
  }

  const head = document.getElementsByTagName('head')[0];
  if (head) {
    styles.forEach((styleClass) => {
      style.innerHTML += createClass(styleClass.name, styleClass.selector, styleClass.rules);
    });
    head.appendChild(style);
  }
}

function createClass(name: string, selector: string, rules: string[]): string {
  let result = '';
  rules.forEach((rule) => {
    if (name !== '') result += `.${name}-${rule} { ${selector}: ${rule} !important }`;
    else result += `.${rule} { ${selector}: ${rule} !important }`;
  });
  return result;
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

/* Apply data-image to hero images */
const heroImages = document.getElementsByClassName('hero-img');
for (let i = 0; i < heroImages.length; i++) {
  const dataImage = heroImages[i].getAttribute('data-image');
  if (dataImage) {
    const heroImage = heroImages[i] as HTMLElement;
    heroImage.style.background = 'url(' + dataImage + ')';
    heroImage.style.backgroundSize = 'cover';
    heroImage.style.backgroundRepeat = 'no-repeat';
  }
}
