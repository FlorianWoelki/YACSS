declare let global: any;

// @ts-ignore
global.colors = require('../colors');

type Theme = {
  primaryColor: string;
  accentColor: string;
  classes: string;
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

      applyStyles();
    }
  }
}

function applyStyles() {
  const style = document.createElement('style');
  style.type = 'text/css';

  const styles = [
    { name: 'flex', selector: 'flex-direction', rules: ['column', 'row', 'row-reverse', 'column-reverse'] },
    { name: 'pos', selector: 'position', rules: ['fixed', 'relative', 'absolute'] },
    { name: 'align', selector: 'align-items', rules: ['center', 'flex-start', 'flex-end'] },
    { name: 'justify', selector: 'justify-content', rules: ['center', 'flex-start', 'flex-end', 'space-around', 'space-between'] },
  ];

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
    result += `.${name}-${rule} { ${selector}: ${rule} }`;
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
