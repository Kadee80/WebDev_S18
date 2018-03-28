# Bootstrap 101:

Today we will start learning one of the most popular frameworks on the web. Bootstrap provides us with a ton of base CSS for responsive layouts and grids, styling of  elements, and some built in JavaScript to add some cool interactivity to our sites. This class will focus on layouts and styles, next class we will dive into the JavaScript components.

## Getting Started:

Bootstrap has great documentation for all of it’s components. First we need to either download Bootstrap and/or link to its source files in the head of our document. Once you’ve downloaded the most recent version of Bootstrap, you will see it has a CSS, FONTS, and JS folder. Now we need to create an HTML page and link to these files. This is an example from Bootstrap Documentation:
```html
<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Bootstrap 101 Template</title>
  <!-- Bootstrap -->
  <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  </head>
  <body>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </body>
</html>
```
That’s it! Now we are ready to start making our first Bootstrap page. Here is an explanation of the components of the code above.

## Bootstrap Layout:

Much like 996 Grid, Bootstrap provides us with a responsive grid layout system. We start with a container div, and nest rows and columns within the container to create the desired layout. The grid columns in a row should always add up to 12.

Here are some custom styles for the page so we can better see the layout:
```css
<style type="text/css">
 /*Give the divs a slight background so we can see them*/
   div{
   background:rgba(0, 0, 255, 0.1);
   }
 /*Add some top margin to the rows for further clarity*/
   .row{
   margin-top:20px;
   }
 </style>
 ```
### A container div with 2 equal 6-wide columns within:

```html
<div class="container">
 <div class="row">
  <div class="col-md-6"> 6 wide column</div>
  <div class="col-md-6"> 6 wide column</div>
 </div>
</div>
```

Notice the margins on either side of the container div. Sometimes we need a full page width layout, we can do this by changing the container to fluid:

```html
<div class="container-fluid">
 <div class="row">
  <div class="col-md-6"> 6 wide column</div>
  <div class="col-md-6"> 6 wide column</div>
 </div>
</div>
```
See the difference? We can mix and match container and container fluid layouts within the same page. We will see this later when we start making our navigation bars.

## Responsive Layouts:

On many websites, we see a noticeable difference between mobile tablet and desktop layouts. On a big computer screen we may want a 4 column layout, then a 2 column for tablets and a 1 column for mobile phones. Bootstrap takes this into account and has some built in CSS classes we can use:

```html
<div class="container">
 <div class="row">
  <div class="col-xs-12 col-sm-6 col-md-3">.col-xs-12 .col-sm-6 .col-md-3 </div>
  <div class="col-xs-12 col-sm-6 col-md-3">.col-xs-12 .col-sm-6 .col-md-3 </div>
  <div class="col-xs-12 col-sm-6 col-md-3">.col-xs-12 .col-sm-6 .col-md-3 </div>
  <div class="col-xs-12 col-sm-6 col-md-3">.col-xs-12 .col-sm-6 .col-md-3 </div>
 </div>
</div>
```
Resize your browser window to see how the layout stacks accordingly.

* .col-xs-# styles the layout for the smallest screens

* .col-s-# styles the layout for small screens

* .col-m-# styles the layout for the average sized screen

* .col-lg-# styles the layout for the largest screens (our example did not take this into account but we could!)

### Offsetting Columns:

Sometimes we need to offset or center some content in our layout. We can do this in Bootstrap using offset:

```html
<div class="row">
 <!-- regular 4 wide column -->
 <div class="col-md-4">.col-md-4</div>
 <!-- second 4 wide column is offset by 4 -->
 <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
 </div>
 <!-- center a 6 wide column using an offset of 3 -->
 <div class="row">
 <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
</div>
```
### Nesting Columns:

We also need to nest columns within other columns at times. We can do this by adding in another row div to our layout.
```html
<div class="row">
 <div class="col-m-12">
 Parent Column .col-m-12
  <div class="row">
   <div class="col-xs-12 col-sm-6">
    Nested Column: .col-xs-12 .col-sm-6
   </div>
   <div class="col-xs-12 col-sm-6">
    Nested Column: .col-xs-12 .col-sm-6
   </div>
  </div>
 </div>
</div>
```