<a href="https://daycademy.github.io/vueply/">
    <img src="https://i.imgur.com/m3yGh5b.png" alt="Vueply Logo" align="right" height="100" />
</a>

🎨 YACSS
======================
[![forthebadge uses-css](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com/)
[![forthebadge uses-js](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com/)
[![forthebadge uses-html](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com/)

:star: Star us on GitHub — it helps!

**Y**et**A**nother**CSS** Framework is a new utility based modern framework. This simple to use framework is inspired by the Tailwind framework with some extra pre defined components you can use.

There are a lot of beautiful prestyled components you can use and customize easily with the help of the utility based classes.

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
https://unpkg.com/yacss@0.0.2/dist/yacss.min.css
https://unpkg.com/yacss@0.0.2/dist/yacss.min.js
```

Import YACSS by importing the css and js file

```html
<link rel="stylesheet" href="./yacss.min.css">
...
<script src="./yacss.min.js"></script>
<script>
  initTheme({
    primaryColor: 'blue',
    accentColor: 'purple',
    classes: ['all']
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
    classes: ['all']
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

* **Florian Woelki** - *Initial work* - [FlorianWoelki](https://github.com/FlorianWoelki/)

## 📕 License

This project is licensed under [Attribution-ShareAlike 4.0 International](https://creativecommons.org/)
