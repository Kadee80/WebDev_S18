# jQuery Mobile at a Glance

Today we will take a look at some of jQuery mobile’s core components. jQuery mobile is touch optimized UI framework. We can use jQuery mobile to create a separate mobile version of our website that utilizes touch interactions like swipe to delete an item, change pages, or open hidden content. More importantly, if we wanted to start developing a third party mobile app using Cordova or PhoneGap Build, jQuery Mobile will make it easy to start developing the UI with HTML CSS and jQuery. We will get some of the basics down today.

## Documentation and Examples

jQuery Mobile, much like Bootstrap Documentation offers us a ton of code snippets and examples to help us rapidly protoype app functionality.

[jQuery Mobile Demos](http://demos.jquerymobile.com/1.4.5/)

## Getting Started:

The base structure for our first jQuery Mobile page will look pretty familiar. We need to link to:

* a CSS theme (Either the default CSS for jQuery Mobile or a Custom theme)

* the latest stable jQuery JavaScript

* the latest stable jQuery Mobile JavaScript

```html
<!DOCTYPE html> 
<html>
<head>
 <title>Page Title</title>
 <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Link to Latest Default jQuery Mobile CSS Theme -->
 <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<!-- Link to Latest Stable jQuery that works with jQ mobile -->
 <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<!-- Link to Latest Stable jQuery Mobile -->
 <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</head>

<body>
 <!-- Pages Dialogs and Navs Go Here -->
</body>
</html>
```

## Pages:

Now that all of our links are in place, we can build out our first page. We have 2 options for our site/app. We can link a series of single page templates together much like we would a regular website:
```html
<a href=”page2.html”>Link to Page 2</a>
```
or we can use a multi page template which stores multiple pages in the same HTML file and uses page IDs to navigate:
```html
<a href=”#page2″>Link to Page 2</a>
```

To begin, we need to look at the anatomy of a simple page. Inside our page div, we have a div for the header, main content, and footer. Using jQuery’s data-role attribute, some simple default styles and functionalities will be applied.
```html
<div data-role="page">
 <div data-role="header">...</div>
 <div role="main" class="ui-content">...</div>
 <div data-role="footer">...</div>
</div>
```

### Building our Header:

Now let’s style our header. By default, any header text will be centered, which we can keep for now. Most importantly, we need a navigation icon/link so we can open our nav-panel in the future. [jQuery supplies us with the most commonly needed icons](http://demos.jquerymobile.com/1.4.5/icons/). We can of course make our own, or link to font-awesome icons in the future.
```html
<a href="#" data-role="button" data-icon="bars" data-iconpos="notext" class="ui-btn-right">MENU</a>
```
Again, we have the data-role attribute!

We are assigning a role/style for the anchor tag to make it look/behave like a button.

Then we choose an icon to apply to our button, we chose the common 3 “bars” icon.

We then positioned our icon, we are applying some styles that hides the MENU text so we just have a compact icon button.

Finally, we are pulling our button to the right of our header using the “ui-btn-right” class.

### Themes:

Take a moment to look at the various default themes we can apply to various areas/elements in our page. If we do not specify a theme, we default to theme A. We can change this with the data-theme attribute:

```html
<div data-role="header" data-theme="b">
```

We can write our own theme CSS, find a theme on the internet, or use [jQuery’s Theme Roller](https://themeroller.jquerymobile.com/) to at the very least, get our color schemes and some basic CSS styles generated for us. 

Some good custom starter themes are [Flat UI](http://ququplay.github.io/jquery-mobile-flat-ui-theme/) and [Square UI](https://github.com/ququplay/jquery-mobile-square-ui-theme). 

You could just as easily make these themes with Theme Roller, it just takes time and patience. Whatever theme you start with, you will most likely wind up writing more custom CSS as you build out your app.

### Nav Panels:

We now have a nice dark themed header with navigation button that leads nowhere. Let’s create a navigation panel and link it to our button.

```html
<div data-role="panel" id="navpanel" data-theme="b" data-display="overlay" data-position="right">
...
</div>
```

Our navigation panel div has a role of panel, an ID, theme, display, and position attribute. We now need to link our navigation button in our header to this panel:

```html
<a href="#navpanel" data-role="button" data-icon="bars" data-iconpos="notext" class="ui-btn-right">MENU</a>
```

Reload our page and click our nav button on the upper right. A nav panel should open on the right and overlay our main content! Take a moment to change the data-display attribute to:
```
data-display="reveal"
OR
data-display="push"
```
See how the UI changes slightly? Keep whichever effect you like most. Keep in mind some of our content is always covered or pushed off the screen by the nav when you are building out you UX.

### ListView in our Nav Panel:

We have a blank panel at this point. We can add some dummy navigation in using an unordered list with data-role=”listview”. We can remove the rounded corners and make it flush within our panel with data-corners=”false”.

```html
<ul data-role="listview" data-corners="false">
 <li><a href="#" data-role="button">Page 1</a></li>
 <li><a href="#" data-role="button">Page 2</a></li>
 <li><a href="#" data-role="button">Page 3</a> </li>
</ul>
```
We can close up our nav-panel by clicking outside of it, but sometimes we want a button to close content:
```html
<li><a href="#" data-role="button" data-rel="close" data-icon="delete" data-iconpos="right">Close</a></li>
```

### Footers:

Our footer is currently floating around below our main content. Lets fix it to the bottom of the page and make it match our header theme:

```html
<div data-role="footer" data-position="fixed" data-theme="b">
</div>
```
Great! You should see a black footer fixed at the bottom of the page. We can add a navbar into our footer for some secondary navigation. We will use this to open 3 popup windows in a bit.
```html
<div data-role="navbar">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```
Now add some dummy links and style our footer nav with some arbitrary icons:
```html
<li><a href="#" data-icon="star">1</a></li>
<li><a href="#" data-icon="heart">2</a></li>
<li><a href="#" data-icon="home">3</a></li>
```
We will come back to our footer links in a bit, but first we need to build a popup to open when we click our links!

```html
<div data-role="popup" id="star" data-overlay-theme="b" data-theme="a" data-dismissible="true">
  <div data-role="header" data-theme="b">
   <h1>Heading</h1>
  </div>
  <div data-role="main">
   <p>Content..............................</p>
  </div>
  <div data-role="footer"></div>
</div>
```
Now we link our star button to our popup:

```html
<li><a href="#star" data-icon="star" data-rel="popup" data-position-to="window" data-transition="pop">Star</a></li>
```
Now we can open our popup. Take a look at the different transitions we can use here.

### Grid System:

There are many ways to lay out content with JQM. We are going to quickly look at one of their default grids. It is worth mentioning that there is a 960 grid system we can use with JQM called Fluid 960. Today we will use jQuery’s 3 col grid to event space 3 buttons in the footer of our popup. You can learn about the different grids here:

```html
<div class="ui-grid-b center"> 
  <div class="ui-block-a"><a data-role="button" data-icon="check" data-iconpos="left" data-theme="b">Yes</a></div> 
  <div class="ui-block-b"><a data-role="button" data-icon="delete" data-iconpos="left" data-theme="b" data-corners="false">No</a></div> 
  <div class="ui-block-c"><a class="ui-shadow ui-btn ui-btn-b ui-corner-all ui-icon-back ui-btn-icon-notext ui-btn-inline">Maybe</a></div> 
</div>
```

Notice, the third button is styled using classes instead of data attributes. jQuery Mobile uses the data attributes to apply the necessary classes on the fly. Take a look with google developer tools!
