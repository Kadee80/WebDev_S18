# Scrollto Plugin – Elevator animation/nav example:

This example will be using a lot of jQuery, GSAP’s TweenLite, EasePack, and ScrollTo plugins.

We should wrap all of our code in a document.ready function to ensure nothing executes before everything has loaded on our page:

```jquery
$(document).ready(function() {

});
```

This example will also be using jQuery’s [.offset()](https://api.jquery.com/offset/) and a [custom HTML5 data attribute](http://www.w3schools.com/tags/att_global_data.asp). You can read up on these further in the links above.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Elevator Scrolling Example</title>
  <style type="text/css" media="screen">
    body {
      font-family: Arial, sans-serif;
      margin-top: 40px;
      /*visibility: hidden;*/
      background-color: black;
      color: white;
    }

    #main {
      margin: 0 auto;
      width: 800px;
    }

    section {
      padding: 20px 0 80px 0;
      height: 100vh;
    }

    h2 {
      font-size: 48px;
      border-bottom: 2px solid #ccc;
      padding-bottom: 20px;
    }

    ul {
      position: fixed;
      top: 40%;
      right: 0;
      list-style: none;
    }

    li {
      width: 30px;
      padding: 10px;
      margin-bottom: 1px;
      background-color: #111;
      color: #ccc;
      border-left: 10px solid #333;
      cursor: pointer;
    }

    .active {
      color: #FFF;
      border-left: 20px solid #FFF;
      line-height: 30px;
    }
  </style>
</head>
<body>

  <div>
    <ul>
      <li id="floor5Btn">5</li>
      <li id="floor4Btn">4</li>
      <li id="floor3Btn">3</li>
      <li id="floor2Btn">2</li>
      <li id="floor1Btn">1</li>
    </ul>

    <div id="main">
      <section id="floor5Panel">
        <h2>Floor 5</h2>
      </section>

      <section id="floor4Panel">
        <h2>Floor 4</h2>
      </section>

      <section id="floor3Panel">
        <h2>Floor 3</h2>
      </section>

      <section id="floor2Panel">
        <h2>Floor 2</h2>
      </section>

      <section id="floor1Panel">
        <h2>Floor 1</h2>
      </section>

    </div>
  </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js"></script>
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
  crossorigin="anonymous"></script>
<script type="text/javascript">


</script>
</body>
</html>

```
