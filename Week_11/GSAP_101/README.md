# Green Sock Animation Part 1

Today we will start animating some basic CSS properties using GSAP. Green Sock Animation Platform is a library of JavaScript tools to create scripted animations on your web pages. If we just need something to fade on hover, or hide/show based on a button click, CSS3 or jQuery more than cover our needs. However, if you want a complicated timeline of animations, GSAP offers us a much easier way to manage timing and animation of DOM elements. Let’s get started!

## Loading Scripts:

Just like some of our other external libraries, we can either download the source files, or link to the CDN cloud hosted version.

You can download or link to the files from  [GSAP’s homepage](https://greensock.com/). Click the download GSAP button below the main banner. Today we are going to link to the full (robust) cloud hosted version of the TweenMax library at the bottom of document, right before the closing `</body>` tag. Notice we are also linking to an external main.js file. We will write our animation scripts there. TweenMax contains all optional plugins and has a pretty beefy file size. In the future, you may want to only load the plugins you want to save on load time.

```html
<!DOCTYPE html>
<html>
<head>
 <title></title>
</head>
<body>

<!-- Link to GSAP HERE -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
<!-- This is where we will write our animation scripts -->
<script src="main.js"></script>
</body>
</html>
```

## Our First Tweens:

Our first method we are going to use in `TweenMax.to();`

the `.to()` method allows us to take the CSS initial properties of an element on the page, and change it to whatever we specify. We pass 3 parameters into our to method.

```
TweenMax.to(target element, duration, {variables});
```

Let’s go ahead and link to an image for us to animate in our HTML file:

```html
<img src="img/soccer-ball.png" id="sb" />
```
We can then animate it using JavaScript and TweenMax.to() in our main.js file:

```html
var sb = document.getElementById("sb");
TweenMax.to(sb, 2, {left: 800});
```

Hey! Nothing happened. What gives? If we are going to use the positioning properties, we need to make sure our soccer ball image has a position property set in our CSS. This can be either relative or absolute:

```css
#sb{
 position:relative;
 top:0;
 left:0;
 }
```

Now that we have the positioning property set, reload and watch our soccer ball move 800 pixels across the page!

### Live Code:

First, let’s do a git pull and make sure you have some images to animate.

In class today we will animate more CSS properties. Code will be posted here at the end of class. We will be using different eases in our animations. Check out this helpful [ease visualization tool here](https://greensock.com/get-started-js#easing).

[Watch this video!]()

Today we are going to continue with a simple timeline example. We got our HTML set up at the end of last class. Here is where we left off:

<!DOCTYPE html>
<html>

<head>
 <title>TimeLine Lite</title>
 <style type="text/css">
 body {
 text-align: center;
 }
 
 .progress {
 position: relative;
 z-index: 3;
 width: 100%;
 height: 10px;
 background-color: #000;
 }
 </style>
</head>

<body>
 <div class="progress"></div>
 <h1>Hello GreenSock!</h1>
 <h1>You're Awesome</h1>
 <p>This will be our first animation using the timeline tool!</p>
 <!-- Load GSAP first -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
 <script type="text/javascript">
 </script>
</body>

</html>
We are going to be using jQuery to assign elements to variables and take a look at a few new jQuery methods while we are at it. So lets link to the jquery code:

<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
We are going to use a new jQuery method today:

.eq()

In our HTML we have 2 <h1> tags, so if we use jQuery to select elements by tag name like so:

var $h1s = $("h1");
console.log($h1s);
Whats with the $ before the variable name? We do this to keep track of our jQuery variables. Not necessary but useful. When we console log out out $h1s variable we see we have an array. If we want to pull out an element in a set/array we can do this using .eq(); for example:

var $hello = $("h1").eq(0);
console.log($hello.html());
You’ll notice jQuery gives us another shortcut method. Rather than typing .innerHTML we can type .html() to get the contents of an element.

Live Code:

## Page intro sequence using Timeline Lite

When we want a little more control over an animation sequence we can create a GSAP Timeline object. Rather than keeping track of how much we need to delay to start of each animation from the beginning of the first animation, we can add them one by one to a Timeline object.

```javascript
tl = new TimelineLite();
```

Now that we have a Timeline object we can use .add() and add each Tween one by one. Each animation will wait for the previous one to complete before executing. No more Delays!

```javascript
tl.add( TweenMax.to(element, 1, {opacity:1}) );
tl.add( TweenMax.to(element, 1, {y:200}) );
```
OR we can skip a step and just concatenate each step in the order we want to add them.

```javascript
tl.to(element, 1, {opacity:1}).to(element, 1, {y:200});
```
What if we want a delay between animations, or what if we want an animation to execute before the previous one finishes? We can add a positive or negative delay as a 4th parameter.

```javascript
tl.to(element, 1, {opacity:1}).to(element, 1, {y:200},"+=1");
```