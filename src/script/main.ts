type Colors = {
  [colorValue: string]: Record<string, string>,
};

const colors: Colors = {
  blue: {
    '100': '#ebf8ff',
    '200': '#bee3f8',
    '300': '#90cdf4',
    '400': '#63b3ed',
    '500': '#4299e1',
    '600': '#3182ce',
    '700': '#2b6cb0',
    '800': '#2c5282',
    '900': '#2a4365'
  },
  red: {
    '100': '#fff5f5',
    '200': '#fed7d7',
    '300': '#feb2b2',
    '400': '#fc8181',
    '500': '#fc8181',
    '600': '#e53e3e',
    '700': '#c53030',
    '800': '#9b2c2c',
    '900': '#742a2a'
  },
  indigo: {
    '100': '#ebf4ff',
    '200': '#c3dafe',
    '300': '#a3bffa',
    '400': '#7f9cf5',
    '500': '#667eea',
    '600': '#5a67d8',
    '700': '#4c51bf',
    '800': '#434190',
    '900': '#3c366b'
  },
  purple: {
    '100': '#faf5ff',
    '200': '#e9d8fd',
    '300': '#d6bcfa',
    '400': '#b794f4',
    '500': '#9f7aea',
    '600': '#805ad5',
    '700': '#6b46c1',
    '800': '#553c9a',
    '900': '#44337a'
  },
};

type Theme = {
  primaryColor: string;
  accentColor: string;
}

function initTheme(theme: Theme): void {
  const root = document.documentElement;
  if (root) {
    if (theme.primaryColor in colors && theme.accentColor in colors) {
      const primaryColors = colors[theme.primaryColor];
      const accentColors = colors[theme.accentColor];
      for (let i = 100; i <= 900; i += 100) {
        root.style.setProperty(`--primary-color-${i}`, primaryColors[i]);
        root.style.setProperty(`--accent-color-${i}`, accentColors[i]);
      }
    }
  }
}
