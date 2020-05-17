#!/bin/bash

cat > index.html << ENDOFFILE
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="stylesheet" href="./dist/yacss.min.css">
</head>
<body>
  <div class="container">
    <h1>Hello Devmode</h1>
    <button>Awesome Button</button>
  </div>
  <script src="./dist/yacss.min.js"></script>
  <script>
    initTheme({
      primaryColor: 'purple',
      accentColor: 'red',
      classes: ['all'],
    });
  </script>
</body>
</html>
ENDOFFILE
