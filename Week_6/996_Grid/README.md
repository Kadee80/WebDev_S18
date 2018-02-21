# 996 Grid Crashcourse

Today we are going to look at our first CSS framework.

>CSS frameworks are pre-prepared software frameworks that are meant to allow for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid. More functional frameworks also come with more features and additional JavaScript based functions, but are mostly design oriented and unobtrusive. This differentiates these from functional and fullJavaScript frameworks.

–https://en.wikipedia.org/wiki/CSS_frameworks

 
One of the most simple and useful frameworks for a 12 column, responsive grid is 996 grid.

You can download the source files from the website.
You will see we have:

* starter index file

* image folder

* CSS folder

* js (javaScript) folder

## CSS:

There are several CSS files already included:

* normalize.css | CSS normalizations and common bug fixes

* base.css | HTML5 Boilerplate for consistent design across browsers

* grid.css | The core of the 996 grid

* style.css | Stylesheet for user styles. Includes a variety of useful media queries

* We won’t be editing any of these files except style.css today. But we will be looking at the contents of the others for further explanation.

## JS:

There are two .js files in the javascript folder.

Modernizr   tells you what HTML, CSS and JavaScript features the user’s browser has to offer. We won’t be utilizing this yet, but we will in the future when we review javascript. In our past class demos, some of the class had issues with their code displaying the same way as my demo, Modernizer can help with this.

The other file is just a blank .js file that we can add our own javascript to.

We won’t be writing javascript yet, but it’s good to know what the heck these files are!

IMG:

Blank for now, do some image editing and save them for web to this folder.

INDEX.HTML:

Lets look at some of the new elements in the <head> and <body> tags:

```html
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 <title>Responsive 996 Grid System</title>
 <meta name="description" content="">
 <meta name="author" content="">
 <meta name="viewport" content="width=device-width">
 <link rel="stylesheet" href="css/normalize.css">
 <link rel="stylesheet" href="css/base.css">
 <link rel="stylesheet" href="css/grid.css">
 <link rel="stylesheet" href="css/style.css">
 <script src="js/modernizr-2.6.2.min.js"></script>
</head>

<body>
 <div class="container">
 </div>
 <!-- end .container -->
 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
 <script src="js/scripts.js"></script>
</body>

</html>

```

## HTML head elements defined and explained.

```html

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
The first new elements are conditionals checking for older browsers. Internet Explorer in particular has been causing headaches for web developers for a long time. These conditional statements allow us to add classes to our page to correct for these issues. 996 took care of this for us!

<meta charset="utf-8">
This specifies the character encoding for the site. If this meta tag is not present, some type characters may not display properly. UTF-8 is the only recommended encoding type for web pages.

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1>
This meta tag tells us to use the most recent version of IE available, and if Chrome Frame is enabled (may be phased out any day now) use that instead. Basically, this ships with 996.gs, ignore it.

 <meta name="description" content="">
 <meta name="author" content="">
 <meta name="viewport" content="width=device-width">
```

These are pretty self explanatory:

* description – whatever you put in the content=” ” section will display under the title as a description in the search results on a search engine. This description helps search engines know what kind of page/content will follow.

* author – duh, this is either you, your company, or the client name the content=” ” section.
viewport – this gives us a little more control as developers over the initial display size on a device. We should really add a scale parameter in there too:
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

* The other `<script>`tags are just linking to external scripts and javascript libraries we will not be using just yet. 996.gs implements moderizr.js automatically for us.


## Media Queries

Lets also take a moment to review media queries. 996 implements a few standard sizes for us already. First we should add some content to the container div just so we don’t have an empty page:

```html
<div class="container">
 <h1>Media Queries</h1>
 <p>This is a just some content to fill out our container div so we can watch media queries in action. As we resize the window, we will see the background color change color based on our style.css file.</p>
</div>
```
Now let’s open up style.css and add some custom background colors to the container `<div>` so we can see how they are triggered:


```css
/* =============================================================================
 Media Queries
 ========================================================================== */
/* Default large browser screen size just for demo purposes */
.container {
 background-color: rgba(0, 0, 255, 0.3);
}

/* Tablet Portrait size to Base 996px */
@media only screen and (min-width: 768px) and (max-width: 995px) {
 .container {
 background: #F00;
 }
}

/* All Mobile Sizes */
@media only screen and (max-width: 767px) {
 .container {
 background: #6afd7f;
 }
}

/* Mobile Landscape Size to Tablet Portrait */
@media only screen and (min-width: 480px) and (max-width: 767px) {
 .container {
 background: #e16bfe;
 }
}

/* Mobile Portrait Size to Mobile Landscape Size */
@media only screen and (max-width: 479px) {
 .container {
 background: #00f;
 }
}

```

Now open the index file in a browser and resize it. Watch how the color changes based on width and height thresholds in our media queries!