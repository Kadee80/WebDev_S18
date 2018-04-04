# Bootstrap Components and an Intro to jQuery:

Before we start getting into Bootstrap’s built in JavaScript components, we are going to take a look a some basic jQuery methods to see how these effects are built.

>jQuery is a lightweight, “write less, do more”, JavaScript library.
-W3Schools

JavaScript is built in to our browser, jQuery is not. Since it is a JavaScript library, we need to link to it in either the `<head>` or the bottom of the `<body>`of our document.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```
If we are using Bootstrap, its basic template already links to it for us since it needs jQuery to make some of its components work. The above example links to the cloud hosted version 1.11.3. We can also download jQuery from their documentation.

## jQuery syntax:
```javascript
$(selector).action()
```

You can always tell pure JavaScript from jQuery by its syntax. jQuery generally looks like:

* A $ sign to define/access jQuery

* A (selector) to “query (or find)” HTML elements

* A jQuery action() to be performed on the element(s)


## Document Ready:

With JavaScript, we needed to wait for the page to load and then call functions we wished to execute immediately with something like:
```
<body onload="myFunction();">
```
With jQuery we have a built in Document Ready function to ensure we don’t run into any problems like trying to select an element by it’s ID before the DOM has finished rendering. By wrapping our functions in a document.ready event, we can ensure that wont happen, and easily place our script tags in the `<head>` of our document without any issues.

```javascript
$(document).ready(function() {
  // do something cool
});
```
## jQuery Selectors:

In the past few weeks’ examples, we used JavaScript’s longer methods for selecting elements in the DOM. jQuery has shortened these selectors substantially. You can view a complete list of jQuery selectors here, but here are some of the more popular ones. 

```javascript
document.getElementById(“myID”); 

$("#myID")
```
– returns a single element on the page with the ID searched for.

```javascript
document.getElementsByTagName (“P”);

$("p") 
$("h1,div,p")
```
– returns an array of elements on the page that match that tag. In jQuery we can list multiple tags.

```javascript
document.getElementsByClassName(“.active”); 

$(".active")
```
– returns an array of elements on the page that match the CSS class searched for

```javascript
document.querySelector(“.brand”); 

$("p:first")
$(".brand:first")
```
– returns the first element on the page that  matches the CSS selector searched for. 
We can use :first to find the first element that matched either the tag or class.

Another really useful selector is:
```javascript
$(this)
```
– returns the current HTML element. This is usually used within a function after an element has been selected to execute another function. You will see `$(this)` in the next section a lot.

## Events:

We can bind or attach events to different elements we have selected using some of jQuery’s event methods. Some of the more common ones you will recognize from our JavaScript examples. The events are pretty self explanatory. Actually, our document.ready function above  is an example of executing function(s) one the document has loaded and is ready. Here is an example of attaching a click event to <p> tags on the page.

```javascript
//first we select an element using jQuery syntax and attach an event listener to it:
$("p").click();

//then we need to pass a function we would like to execute when the element is clicked
$("p").click(function(){
  $(this).hide();
});
```
Some other common events are:

```javascript
$("selector").click();
$("selector").dblclick();

$("selector").mouseenter;
$("selector").mouseleave();
$("selector").mousedown();
$("selector").mouseup();
$("selector").hover();
```javascript

## Forms Elements:

```javascript
$("selector").focus();
$("selector").blur();
```javascript

## Multiple Events:

Sometimes we want to attach multiple events to a single element. Looking at the events above, a lot of them seem to pair up nicely. For example, if you execute a function when the mouse enters, you probably want to execute another function when the mouse leaves that element.

```javascript
$("p").on({
  mouseenter: function() {
   console.log("mouse entered p element");
  },
  mouseleave: function() {
   console.log("mouse left p element");
  }
});
```

## jQuery Effects:

jQuery also has some nifty methods for simple effects. We can hide/show elements, fade in and out, even animate.
```javascript
$(selector).hide(speed,callback);
```
speed and callback are optional parameters for our effects. speed is specified in milliseconds, the callback is an option function to execute once the element is done “hiding” in this case.

### We can Hide and Show elements:
```javascript
$("p").hide();
$("p").show();
```
####But to make it even shorter we can toggle between hidden and shown:
```javascript
$("p").toggle();
```
### We can also fade:
```javascript
$(selector).fadeIn(speed,callback);
```
#### Fade In or Out:
```javascript
$("p").fadeIn(1000);

$("p").fadeOut("slow");
```
#### We can toggle between fading in and out:
```javascript
$("p").fadeToggle(1000);
```javascript

#### We can even fade to a specific opacity:
```javascript
$(selector).fadeTo(speed,opacity,callback);

$("p").fadeTo("slow", 0.5);
```
### We can also side elements:
```javascript
$(selector).slideDown(speed,callback);
```
#### Slide Up or Down:
```javascript
$("#div1").slideDown();
$("#div1").slideUp();
```

#### And toggle between Up and Down:
```javascript
$("#div1").slideToggle(1000);
```