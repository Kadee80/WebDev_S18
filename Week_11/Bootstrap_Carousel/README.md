# Bootstrap Carousel

Today we are going to build 2 examples of a Bootstrap Carousel. The first will use data attributes. The second will use jQuery we wrote ourselves so that we can see how the Carousel code works.

#The Bare Minimum:

At the very least, we need to have a div to contain the carousel, a wrapper for the slides, and divs to contain each image:
```html
 <!-- Begin Carousel -->
 <div id="myCarousel" class="carousel slide">
   <!-- Wrapper for slides -->
   <div class="carousel-inner" role="listbox">
     <div class="item active">
       <img src="img/goat-1.jpg" alt="Goats in Tree">
     </div>
     <div class="item">
       <img src="img/goat-2.jpg" alt="Goats in Tree">
     </div>
     <div class="item">
       <img src="img/goat-3.jpg" alt="Goats in Tree">
     </div>
   </div>
 </div>
 <!-- End Carousel -->
 ```
You’ll notice we see the first image, the one with the active class applied, but no slideshow. To create the slideshow, we need to apply some data attributes OR write a little jQuery. But first let’s style our images to take up the full width of our page:
```css
<style>
   img {
     width: 100%;
   }
 </style>
```
# Data Attributes Part 1:

The first way we can start animating our slideshow is with data attributes. The first and most important is:

`<div id="myCarousel" class="carousel slide" data-ride="carousel">`

We can also make the slideshow pause when an image is hovered over:

`<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover">`

We can also control the speed in milliseconds. This example makes each slide last 2 seconds:

`<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="2000">`

## jQuery Alternative:

Sometimes, we want a little more control over when the carousel function is called, or maybe we want add in some custom functions of our own. In those cases, we can animate our slideshow using jQuery and Bootstrap’s methods:

### Starting the animation:

`$("#myCarousel").carousel();`

Pausing on Hover:

`$("#myCarousel").carousel({pause: "hover"});`

Setting the interval for each slide:

`$("#myCarousel").carousel({interval: 2000, pause: "hover"});`

## Previous and Next Buttons:

First, let’s write the HTML, and add in some data attributes to make it all work.

```html
<!-- Left and right controls -->
 <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
 <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
 <span class="sr-only">Previous</span>
 </a>
 <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
 <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
 <span class="sr-only">Next</span>
 </a>
```
The red text is the data attribute to direct the slideshow either forwards or backwards in the DOM.

The blue text uses glyphicons (comes with Bootstrap CSS) to make the forward and backward icons. Aria Hidden and sr-only class are for screen reader accessibility.

## Prev – Next Via jQuery:

We can omit the data-slide attribute in the above example and replace it with some jquery event listeners and functions:
```javascript
 $(".left").click(function() {
   $("#myCarousel").carousel("prev");
 });
 $(".right").click(function() {
   $("#myCarousel").carousel("next");
 });
```

## Slide Indicators Via Data Attributes:

We can add in small indicators on the button of our images using an ordered list and a new data attribute:
```html
<!-- Indicators -->
 <ol class="carousel-indicators">
 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
 <li data-target="#myCarousel" data-slide-to="1"></li>
 <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>
```
Notice we need the active class to highlight the correct indicator based on which slide is shown.

Bootstrap’s carousel library is placing all of our sides in an array, and the slide to attribute has to point to the correct slide in the array. Basically, what I’m trying to say is:

* arrays start at 0!

* slide-to must point to the correct image. you could make a pretty terrible user interface if you messed up the numbers.

## Slide Indicators Via jQuery:

We can achieve this the same way with the following jQuery event listeners and functions and omit the data attributes from our HTML:
```javascript
 $(".item1").click(function() {
   $("#myCarousel").carousel(0);
 });
 $(".item2").click(function() {
   $("#myCarousel").carousel(1);
 });
 $(".item3").click(function() {
   $("#myCarousel").carousel(2);
 });
```

## Captions:

We can easily add in captions to our images using the carousel-caption class:
```html
<div class="item active">
   <img src="img/goat-1.jpg" alt="Goats in Tree">
   <div class="carousel-caption">
     <h3>Goats</h3>
     <p>goats can climb more than mountains!</p>
   </div>
</div>
```
#### In class Assignment:

Add captions to all of the images in your slider.

[Review Bootstraps Carousel Reference](http://getbootstrap.com/javascript/#carousel)