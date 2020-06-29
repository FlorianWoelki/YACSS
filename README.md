<a href="https://daycademy.github.io/vueply/">
    <img src="https://i.imgur.com/m3yGh5b.png" alt="Vueply Logo" align="right" height="100" />
</a>

# 🎨 YACSS

[![forthebadge uses-css](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com/)
[![forthebadge uses-js](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com/)
[![forthebadge uses-html](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com/)

:star: Star us on GitHub — it helps!

<a href="https://www.npmjs.com/package/yacss"><img src="https://badge.fury.io/js/yacss.svg"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/FlorianWoelki/yacss.svg"></a>
<a href="https://www.npmjs.com/package/yacss"><img src="https://img.shields.io/npm/dt/yacss.svg"></a>
<a href="https://www.npmjs.com/package/yacss"><img src="https://img.shields.io/npm/dm/yacss.svg"></a>
[![](https://data.jsdelivr.com/v1/package/npm/yacss/badge)](https://www.jsdelivr.com/package/npm/yacss)

**Y**et**A**nother**CSS** Framework is a new utility and component based modern framework. This simple to use framework is inspired by the Tailwind framework with some extra predefined components you can use.

There are a lot of beautiful prestyled components you can use and customize easily with the help of the utility based classes and colors.

## 💥 Getting Started

These instructions will help you getting started with YACSS.

### 🔨 Quick install

**NPM**

```sh
npm install yacss
```

**Yarn**

```sh
yarn add yacss
```

**CDN**

```sh
https://cdn.jsdelivr.net/npm/yacss@0.1.1/dist/yacss.min.css
https://cdn.jsdelivr.net/npm/yacss@0.1.1/dist/yacss.min.js
```

Import YACSS by importing the css and js file

```html
<link rel="stylesheet" href="./yacss.min.css" />
...
<script src="./yacss.min.js"></script>
<script>
  initTheme({
    primaryColor: 'blue',
    accentColor: 'purple',
    classes: ['all'],
  });
</script>
```

### Configure the theme

With the following lines of code, you can initialize the theme of YACSS.

```html
<script>
  initTheme({
    primaryColor: 'blue',
    accentColor: 'purple',
    classes: ['all'],
  });
</script>
```

Classes will be the imported utility classes. You can find all utility classes [here](https://github.com/FlorianWoelki/YACSS/blob/master/src/script/main.ts).

You can select the primary and accent color of the [predefined colors](https://github.com/FlorianWoelki/YACSS/blob/master/src/colors.js).

## 💡 Contributing

_Coming Soon_

## 🎨 Versioning

_Coming Soon_

## 😎 Authors

- **Florian Woelki** - _Initial work_ - [FlorianWoelki](https://github.com/FlorianWoelki/)

## 📕 License

This project is licensed under [MIT](https://opensource.org/licenses/MIT)
