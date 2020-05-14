/*
* YACSS 0.0.1
* Florian Woelki, Copyright 2020
* http://florianwoelki.github.io/YACSS
*/
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.yacss=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
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

},{}],2:[function(_dereq_,module,exports){
(function (global){
// @ts-ignore
global.colors = _dereq_('../colors');
function initTheme(theme) {
    var root = document.documentElement;
    if (root) {
        if (theme.primaryColor in global.colors && theme.accentColor in global.colors) {
            var primaryColors = global.colors[theme.primaryColor];
            var accentColors = global.colors[theme.accentColor];
            for (var i = 100; i <= 900; i += 100) {
                root.style.setProperty("--primary-color-" + i, primaryColors[i]);
                root.style.setProperty("--accent-color-" + i, accentColors[i]);
            }
        }
    }
}
// @ts-ignore
window.initTheme = initTheme;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../colors":1}]},{},[2])
(2)
});